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
