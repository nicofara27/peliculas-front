import React from 'react';

const Filtros = () => {
    return (
        <section>
            <button className='filtrosBtn'>Popular</button>
            <button className='filtrosBtn'>Nuevas</button>
            <button className='filtrosBtn'>Mejores votadas</button>
            <button className='filtrosBtn'>Proximas</button>
        </section>
    );
};

export default Filtros;