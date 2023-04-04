import { Col, Row } from 'antd';
import React from 'react';

const Actores = () => {
    return (
        <section id='seccionActores'>
            <h2>Actores</h2>
            <Row>
                <Col>
                    <div>
                        <img src="https://image.tmdb.org/t/p/w185/u81mC6vZwliDRfnX1DpdGmmex61.jpg" alt="" />
                    </div>
                    <div className='actorDescripcion'>
                        <h3>Keri Russell</h3>
                        <p>Sari</p>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Actores;