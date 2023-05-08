import React, { useState } from 'react';
import FormIngresar from '../pagIngreso/FormIngresar';
import FormRegistrar from '../pagIngreso/FormRegistrar';

const PagIngreso = () => {
    let [ingresar, setIngresar] = useState(true);


    const formulario = ingresar ? (
        <FormIngresar ingresar={ingresar} setIngresar={setIngresar}></FormIngresar>
    ) : (
        <FormRegistrar ingresar={ingresar} setIngresar={setIngresar}></FormRegistrar>
    )
    return (
        <main id='pagIngreso'>
           {formulario}
        </main>
    );
};

export default PagIngreso;