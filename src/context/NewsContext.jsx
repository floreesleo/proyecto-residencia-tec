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
export const NewsContextProvider = ({ children }) => {
  const [publicaciones, setPublicaciones] = useState([]);

  //+ ALERTAS Y MENSAJES
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const getPublicaciones = async () => {
    const { error, data } = await supabase
      .from("publicaciones")
      .select()
      .order("id", { descending: true });

    if (error) throw error;

    setPublicaciones(data);
  };

  const crearPublicacion = async (titulo, contenido, link) => {
    try {
      const { error, data } = await supabase.from("publicaciones").insert({
        titulo: titulo,
        contenido: contenido,
        link: link,
      });

      if (error) throw error;

      setPublicaciones([...publicaciones, data]);

      // Mensaje de exito
      setMessage("¡Publicación creada con exito!");
    } catch (error) {
      console.error(error);
      setError("Hubo un error al crear la publicación");
    }
  };

  return (
    <NewsContext.Provider
      value={{
        //* Variables
        publicaciones,
        message,
        error,
        //| Funciones
        getPublicaciones,
        crearPublicacion,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
