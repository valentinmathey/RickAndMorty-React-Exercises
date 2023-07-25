import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => { // Solo esperamos recibir un solo elemento, no un array

    return (
        <div className="col"> {/* Agregamos la clase 'col' aquí para que las tarjetas se muestren en columnas */}
            <div className="card shadow-sm">
                <img src={item.image} alt="Img personajes" />
                <div className="card-body">
                    <h3 className="m-2 text-center text-dark card-ttle">{item.name}</h3>
                    <p className="card-text"><small className=""> Specie: {item.species}</small></p>
                    <p className="card-text"><small className=""> Status: {item.status}</small></p>
                    <p className="card-text"><small className=""> Origin: {item.origin?.name}</small></p>
                    <p className="card-text"><small className=""> Status: {item.location?.name}</small></p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                <Link to={`/detail/${item.id}`} className="nav-link px-2 text-secondary">Detalle</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

