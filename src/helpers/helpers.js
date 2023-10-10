const URL = process.env.REACT_APP_API_USUARIOS;

export const crearUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(URL + "nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      nombre: datos.nombre,
      token: datos.token,
      uid: datos.uid,
    };
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const listarPeliculas = async (nombreUsuario) => {
  try {
    const respuesta = await fetch(URL + nombreUsuario);
    const listaPeliculas = await respuesta.json();
    return listaPeliculas[0].lista;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const agregarALista = async (nombreUsuario, pelicula) => {
  try {
    const respuesta = await fetch(URL + nombreUsuario, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(pelicula),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const eliminarDeLista = async (nombreUsuario, peliculaAEliminar) => {
  try {
    const key = peliculaAEliminar.key.toString();
    const respuesta = await fetch(URL + nombreUsuario + "/" + key, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(peliculaAEliminar),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultarPeliculas = async (
  buscar,
  categoria,
  pagina,
  setPagina,
  setPeliculas,
  filtro
) => {
  try {
    let respuesta = "";
    if (buscar === "" && categoria === "") {
      respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/${filtro}?api_key=04a9c758263cb0d57addf6f08ffb1202&page=${pagina}`
      );
    } else if (categoria !== "" && buscar === "") {
      setPagina(1);
      respuesta = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=04a9c758263cb0d57addf6f08ffb1202&page=${pagina}&with_genres=${categoria}`
      );
    } else {
      setPagina(1);
      respuesta = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=04a9c758263cb0d57addf6f08ffb1202&page=${pagina}&query=${buscar}`
      );
    }
    const lista = await respuesta.json();
    setPeliculas(lista.results);
  } catch (error) {
    console.log(error);
  }
};

// Funcion para traer los datos de cada peliculas
export const consultarPelicula = async (setPelicula, id) => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/${id.id}?api_key=04a9c758263cb0d57addf6f08ffb1202`
    );
    const datos = await respuesta.json();
    setPelicula(datos);
  } catch (error) {
    console.log(error);
  }
};

// Funcion para traer la lista de actores de cada pelicula
export const consultarActores = async (setActores, id) => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/${id.id}/credits?api_key=04a9c758263cb0d57addf6f08ffb1202`
    );
    const actores = await respuesta.json();
    setActores(actores.cast);
  } catch (error) {
    console.log(error);
  }
};

// Funcion para traer la lista de imagenes para cada pelicula
export const consultarImagenes = async (setImagenes, id) => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/${id.id}/images?api_key=04a9c758263cb0d57addf6f08ffb1202`
    );
    const imagenes = await respuesta.json();
    setImagenes(imagenes.backdrops);
  } catch (error) {
    console.log(error);
  }
};

export const elimiarPelicula = async (
  key,
  usuario,
  listaPeliculas,
  setListaPeliculas
) => {
  const peliculaAEliminar = listaPeliculas.find(
    (pelicula) => pelicula.key === key
  );
  await eliminarDeLista(usuario, peliculaAEliminar).then(
    listarPeliculas(usuario).then((lista) => {
      setListaPeliculas(lista);
      window.location.reload();
    })
  );
};
