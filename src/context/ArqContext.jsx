import { createContext, useContext, useState } from "react";

import { supabase } from "./../supabase/client";

export const NewsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context)
    throw new Error("useNews debe estar con un NewsContextProvider");
  return context;
};

// eslint-disable-next-line react/prop-types
export const ArqContextProvider = ({ children }) => {
  const [agremiados, setAgremiados] = useState([]);

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

  const agregarAgremiado = async (titulo, contenido, link) => {
    try {
      const { error, data } = await supabase.from("agremiados").insert({
        titulo: titulo,
        contenido: contenido,
        link: link,
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

  return (
    <NewsContext.Provider
      value={{
        //* Variables
        agremiados,
        message,
        error,
        //| Funciones
        getAgremiados,
        agregarAgremiado,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
