import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState();

  const sessionSupabase = useSession();
  const supabaseClient = useSupabaseClient();

  //? Usuario
  const [emailRef, setEmailRef] = useState("");
  const [passwordRef, setPasswordRef] = useState("");

  //? Navegador
  const navigate = useNavigate();

  //? Alertas
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  //? FUNCIONES
  async function signInWithEmail(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: emailRef,
        password: passwordRef,
      });

      if (error) setError("A ocurrido un error al iniciar sesión 😥: " + error);

      if (emailRef == "admin@colegio.com" && passwordRef == "administrador") {
        setAdmin(true);
      } else {
        setAdmin(false);
      }

      setMessage("Autenticación correcta");
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function signUpAccount(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email: emailRef,
        password: passwordRef,
      });

      if (error)
        setError(
          "A ocurrido un error durante la creación de la cuenta 😥: " + error
        );

      setMessage("Revice su bandeja para futuras instrucciones");
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider: "google",
        options: {
          scopes: "https://www.googleapis.com/auth/calendar",
        },
      });

      if (error) {
        setError("A ocurrido un error durante la autenticación: " + error);
      }

      setMessage("Autenticación con Google valida");
      return data;
    } catch (error) {
      console.error(error);
      setError("A ocurrido un error durante la autenticación: " + error);
    }
  }

  async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      setError("A ocurrido un error durante la autenticación: " + error);
    }
  }

  async function resetPassword(e) {
    e.preventDefault();

    try {
      const { error } = await supabaseClient.auth.resetPasswordForEmail({
        emailRef,
      });

      if (error) {
        setError(
          "A ocurrido un error durante el restablecimiento de contraseña 😥: " +
            error.message
        );
      } else {
        setMessage("Revice su bandeja para futuras instrucciones");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    //| con authListener sabremos todo lo que pase con la data del usuario que se quiera autenticar
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      async (event, session) => {
        //| el event es para saber si se ha cerrado sesión, si ha iniciado sesión, si ha cambiado el usuario
        //| con session puedo saber si ya hay sesion iniciada o no hay nada
        console.log("#####################################");
        console.log("Sesión de supabase: ", session);
        console.log("Evento de supabase ", event);

        if (session == null) {
          navigate("/login");
        } else {
          setUser(session?.user.user_metadata);
          console.log("Data del usuario: ", session?.user.user_metadata);
          navigate("/");
        }
      }
    );
    return () => {
      authListener.subscription;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInWithEmail,
        signUpAccount,
        signInWithGoogle,
        signOut,
        resetPassword,
        user,
        message,
        error,
        sessionSupabase,
        setEmailRef,
        setPasswordRef,
        admin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
