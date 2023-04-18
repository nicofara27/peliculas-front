import React, { useEffect, useState } from "react";
import Filtros from "../pagPrincipal/Filtros";
import ListaPeliculas from "../pagPrincipal/ListaPeliculas";
import Paginacion from "../pagPrincipal/Paginacion";

const PagPrincipal = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [filtro, setFiltro] = useState("popular")
  
  const consultarPeliculas = async () => {
    try {
      const respuesta = await fetch(`https://api.themoviedb.org/3/movie/${filtro}?api_key=04a9c758263cb0d57addf6f08ffb1202&page=${pagina}`)
      const lista = await respuesta.json();
      console.log(`https://api.themoviedb.org/3/trending/movie/${filtro}?api_key=04a9c758263cb0d57addf6f08ffb1202&page=${pagina}`)
      setPeliculas(lista.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    consultarPeliculas();
  },[])

  useEffect(()=>{
    consultarPeliculas();
  },[filtro])
  useEffect(()=>{
    consultarPeliculas();
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[pagina])


  return (
    <main id="pagPrincipal">
      <Filtros setFiltro={setFiltro}></Filtros>
      <ListaPeliculas peliculas={peliculas}></ListaPeliculas>
      <Paginacion pagina={pagina} setPagina={setPagina}></Paginacion>
    </main>
  );
};

export default PagPrincipal;
