import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../../../context/AuthContext";

import { useSupabaseClient } from "@supabase/auth-helpers-react";

import Documentos from "./Documentos";
import Login from "../../../auth/Login";

export default function Sesion() {
  const { user, setUser, admin } = UserAuth();

  const supabaseClient = useSupabaseClient();

  //? Navegador
  const navigate = useNavigate();

  useEffect(() => {
    //| con authListener sabremos todo lo que pase con la data del usuario que se quiera autenticar
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          navigate("/login");
        } else {
          setUser(session?.user.user_metadata);
          if (admin === true) {
            navigate("/administrador");
          } else {
            navigate("/documentos");
          }
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
