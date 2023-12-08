import { createContext, useContext, useState } from "react";

import { supabase } from "./../supabase/client";

export const ArqContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useArq = () => {
  const context = useContext(ArqContext);
  if (!context) throw new Error("useArq debe estar con un NewsContextProvider");
  return context;
};

// eslint-disable-next-line react/prop-types
export const ArqContextProvider = ({ children }) => {
  const [agremiados, setAgremiados] = useState([]);
  const [directivos, setDirectivos] = useState([]);
  const [datosColegio, setDatosColegio] = useState([]);

  //+ ALERTAS Y MENSAJES
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const getAgremiados = async () => {
    const { error, data } = await supabase
      .from("agremiados")
      .select()
      .order("id", { descending: true });

    if (error) throw error;

    setAgremiados(data);
  };

  const agregarAgremiado = async (nombre, facebook, twitter, instagram) => {
    try {
      const { error, data } = await supabase.from("agremiados").insert({
        nombre: nombre,
        facebook: facebook,
        twitter: twitter,
        instagram: instagram,
      });

      if (error) throw error;

      setAgremiados([...agremiados, data]);

      // Mensaje de exito
      setMessage("¡Agremiado agregado exitosamente!");
    } catch (error) {
      console.error(error);
      setError("Hubo un error al crear la publicación");
    }
  };

  const getDirectivos = async () => {
    const { error, data } = await supabase
      .from("directivos")
      .select()
      .order("id", { descending: true });

    if (error) throw error;

    setDirectivos(data);
  };

  const getDatosColegio = async () => {
    const { error, data } = await supabase.from("datosColegio").select();

    if (error) throw error;

    setDatosColegio(data);
  };

  return (
    <ArqContext.Provider
      value={{
        //* Variables
        agremiados,
        directivos,
        datosColegio,
        message,
        error,
        //| Funciones
        getAgremiados,
        agregarAgremiado,
        getDirectivos,
        getDatosColegio,
      }}
    >
      {children}
    </ArqContext.Provider>
  );
};
