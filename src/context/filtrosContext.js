import { createContext, useState } from "react";

export const FiltrosContext = createContext();
export const FiltrosContextProvider = ({ children }) => {
  const [pagina, setPagina] = useState(1);
  const [filtro, setFiltro] = useState("popular");
  const [buscar, setBuscar] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <FiltrosContext.Provider
      value={{
        pagina,
        setPagina,
        filtro,
        setFiltro,
        buscar,
        setBuscar,
        categoria,
        setCategoria,
      }}
    >
      {children}
    </FiltrosContext.Provider>
  );
};
