import React, { useEffect, useState } from "react";
import Filtros from "../pagPrincipal/Filtros";
import ListaPeliculas from "../pagPrincipal/ListaPeliculas";
import Paginacion from "../pagPrincipal/Paginacion";

const PagPrincipal = () => {
  const [peliculas, setPeliculas] = useState([])
  const [peliculass, setPeliculass] = useState([])
  
  const consultarPeliculas = async () => {
    try {
      const respuesta = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=04a9c758263cb0d57addf6f08ffb1202`)
      const lista = await respuesta.json();
      setPeliculas(lista.results)
      // console.log(lista)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    consultarPeliculas()
  },[])


  return (
    <main id="pagPrincipal">
      <Filtros></Filtros>
      <ListaPeliculas peliculas={peliculas}></ListaPeliculas>
      <Paginacion></Paginacion>
    </main>
  );
};

export default PagPrincipal;
