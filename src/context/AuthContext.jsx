import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "./../supabase/client";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  //? Navegador
  const navigate = useNavigate();

  //? Alertas
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  //? FUNCIONES
  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "Google",
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
    const { error } = await supabase.auth.signOut();
    if (error) {
      setError("A ocurrido un error durante la autenticación: " + error);
    }
  }

  useEffect(() => {
    //| con authListener sabremos todo lo que pase con la data del usuario que se quiera autenticar
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        //| el event es para saber si se ha cerrado sesión, si ha iniciado sesión, si ha cambiado el usuario
        //| con session puedo saber si ya hay sesion iniciada o no hay nada
        console.log("Sesión de supabase: ", session);
        console.log("Evento de supabase ", event);

        if (session == null) {
          navigate("/login", { replace: true });
        } else {
          setUser(session?.user.user_metadata);
          console.log("Data del usuario: ", session?.user.user_metadata);
          navigate("/dashboard", { replace: true });
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
      value={{ signInWithGoogle, signOut, user, message, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const UserAuth = () => {
  return useContext(AuthContext);
};
