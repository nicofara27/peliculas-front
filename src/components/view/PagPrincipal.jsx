import React, { useEffect, useState } from "react";
import Filtros from "../pagPrincipal/Filtros";
import ListaPeliculas from "../pagPrincipal/ListaPeliculas";
import Paginacion from "../pagPrincipal/Paginacion";

const PagPrincipal = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [filtro, setFiltro] = useState("popular")
  const [buscar, setBuscar] = useState("")
  
  const consultarPeliculas = async () => {
    try {
      let respuesta = ""
      if(buscar==="") {
        respuesta = await fetch(`https://api.themoviedb.org/3/movie/${filtro}?api_key=04a9c758263cb0d57addf6f08ffb1202&page=${pagina}`)
      } else {
        respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=04a9c758263cb0d57addf6f08ffb1202&page=${pagina}&query=${buscar}`)
      }
      const lista = await respuesta.json();
      setPeliculas(lista.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    consultarPeliculas();
  },[])

  useEffect(()=>{
    setBuscar("");
    consultarPeliculas();
  },[filtro])
  useEffect(()=>{
    consultarPeliculas();
  },[buscar])
  useEffect(()=>{
    consultarPeliculas();
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[pagina])


  return (
    <main id="pagPrincipal">
      <Filtros filtro={filtro} setFiltro={setFiltro} setBuscar={setBuscar} buscar={buscar} setPagina={setPagina}></Filtros>
      <ListaPeliculas peliculas={peliculas}></ListaPeliculas>
      <Paginacion pagina={pagina} setPagina={setPagina}></Paginacion>
    </main>
  );
};

export default PagPrincipal;
