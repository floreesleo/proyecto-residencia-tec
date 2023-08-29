import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const sessionSupabase = useSession();
  const supabaseClient = useSupabaseClient();

  //? Navegador
  const navigate = useNavigate();

  //? Alertas
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  //? FUNCIONES
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

      setMessage("Revice su bandeja para futuras instrucciones.");
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      setError("A ocurrido un error durante la autenticación: " + error);
    }
  }

  useEffect(() => {
    //| con authListener sabremos todo lo que pase con la data del usuario que se quiera autenticar
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      async (event, session) => {
        //| el event es para saber si se ha cerrado sesión, si ha iniciado sesión, si ha cambiado el usuario
        //| con session puedo saber si ya hay sesion iniciada o no hay nada
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
        signInWithGoogle,
        signOut,
        user,
        message,
        error,
        sessionSupabase,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const UserAuth = () => {
  return useContext(AuthContext);
};
