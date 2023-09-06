import { useEffect, useReducer } from "react";
import { supabase } from "./../supabase/client";

const actions = {
  select_folder: "select_folder",
  update_folder: "update_folder",
};

const root_folder = {
  name: "root",
  id: null,
  path: [],
};

function reducer(state, { type, payload }) {
  switch (type) {
    case actions.select_folder:
      return {
        folderId: payload.folderId,
        folder: payload.folder,
        childFiles: [],
        childFolder: [],
      };
    case actions.update_folder:
      return {
        ...state,
        folder: payload.folder,
      };
    default:
      return state;
  }
}

export default function UseFolder(folderId = null, folder = null) {
  const [state, dispatch] = useReducer(reducer, {
    folderId,
    folder,
    childFolder: [],
    childFiles: [],
  });

  useEffect(() => {
    dispatch({ type: actions.select_folder, payload: { folderId, folder } });
  }, [folderId, folder]);

  useEffect(() => {
    if (folderId == null) {
      return dispatch({
        type: actions.update_folder,
        payload: { folder: root_folder },
      });
    }

    supabase
      .from("folders")
      .select("*")
      .eq("folderId", folderId)
      .single()
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
          dispatch({
            type: actions.update_folder,
            payload: { folder: root_folder },
          });
          return;
        }

        const formatRow = (row) => {
          return { id: row.id, ...row };
        };

        const formattedData = data.map(formatRow);

        console.log(formattedData);
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: actions.update_folder,
          payload: { folder: root_folder },
        });
      });
  }, [folderId]);

  return state;
}
