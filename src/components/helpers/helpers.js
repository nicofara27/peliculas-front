const URL = process.env.REACT_APP_API_USUARIOS

export const crearUsuario = async(usuario) => {
    try {
        const respuesta = await fetch(URL + "nuevo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const login = async(usuario) => {
    try {
        const respuesta = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(usuario)
        });
        const datos =await respuesta.json();
        return {
            status: respuesta.status,
            mensaje: datos.mensaje,
            nombre: datos.nombre,
            token: datos.token,
            uid: datos.uid,
          };
    } catch (error) {
        console.log(error)
        return false;
    }
}