// React
import { createContext, useState, useContext, useEffect } from "react";

// Supabase-Helper
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";

import { useNavigate } from "react-router-dom";

import { supabase } from "./../supabase/client";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  // Variables
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState();

  // Variables de usuario
  const [emailRef, setEmailRef] = useState("");
  const [passwordRef, setPasswordRef] = useState("");

  // Variables de Supabase-Helpers
  const sessionSupabase = useSession();
  const supabaseClient = useSupabaseClient();

  // Alertas
  const [messageSignIn, setMessageSignIn] = useState("");
  const [messageSignUp, setMessageSignUp] = useState("");
  const [messageResetPass, setMessageResetPass] = useState("");

  const [error, setError] = useState("");
  const [errorSignIn, setErrorSignIn] = useState("");
  const [errorSignUp, setErrorSignUp] = useState("");
  const [errorSignOut, setErrorSignOut] = useState("");
  const [errorResetPass, setErrorResetPass] = useState("");

  //? Navegador
  const navigate = useNavigate();

  //+ FUNCIONES
  async function signInWithEmail(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: emailRef,
        password: passwordRef,
      });

      if (error)
        setErrorSignIn("A ocurrido un error al iniciar sesión 😥: " + error);

      if (emailRef == "admin@colegio.com" && passwordRef == "administrador") {
        setAdmin(true);
        navigate("/administrador");
      } else {
        setAdmin(false);
      }

      setMessageSignIn("Autenticación correcta");
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
        setErrorSignUp(
          "A ocurrido un error durante la creación de la cuenta 😥: " + error
        );

      setMessageSignUp(
        "Agremiado registrado exitosamente. El agremiado puede revisar su bandeja de entrada para su pusterior inicio de sesión."
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      setErrorSignOut("A ocurrido un error al cerrar sesión: " + error);
    }
    setAdmin(false);
    navigate("/");
  }

  async function resetPassword(e) {
    e.preventDefault();
    try {
      const { error } = supabase.auth.resetPasswordForEmail(emailRef);

      if (error) setErrorResetPass("Error al restablecer contraseña: " + error);

      setMessageResetPass(
        "Revice su bandeja de entrada para restablecer su contraseña."
      );
    } catch (error) {
      console.error(error);
      setError(error);
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
        signOut,
        resetPassword,
        user,
        error,
        sessionSupabase,
        setEmailRef,
        setPasswordRef,
        admin,
        setUser,
        messageSignIn,
        messageSignUp,
        messageResetPass,
        errorSignIn,
        errorSignUp,
        errorSignOut,
        errorResetPass,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
