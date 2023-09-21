import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../../context/AuthContext";

import { useSupabaseClient } from "@supabase/auth-helpers-react";

import Documentos from "./documentos/Documentos";
import Login from "../../auth/Login";

export default function Sesion() {
  const { user, setUser } = UserAuth();

  const supabaseClient = useSupabaseClient();

  //? Navegador
  const navigate = useNavigate();

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
          navigate("/documentos");
        }
      }
    );
    return () => {
      authListener.subscription;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{user == null ? <Login /> : <Documentos />}</>;
}
