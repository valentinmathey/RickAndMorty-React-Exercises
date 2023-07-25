import React, { useEffect, useState } from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service';
import { Card } from './Card'
import { Pagination } from './Pagination';

export const Cards = () => {

    const [personajes, setPersonaje] = useState([])

    const [info, setInfo] = useState({});

    useEffect(() => {
        RickAndMortyService.getAllCharacters()
            .then((data) => {
                setPersonaje(data.results);
                setInfo(data.info);
            })
            .catch((error) => console.log(error))
            .then(data => console.log(data));
    }, [])
    
    const onPrevious = () => {
        if (info.prev) {
            fetch(info.prev)
                .then((response) => response.json())
                .then((data) => {
                    setPersonaje(data.results);
                    setInfo(data.info);
                })
                .catch((error) => console.log(error));
        }
    }

    const onNext = () => {
        if (info.next) {
            fetch(info.next)
                .then((response) => response.json())
                .then((data) => {
                    setPersonaje(data.results);
                    setInfo(data.info);
                })
                .catch((error) => console.log(error));
        }
    }
    

    return (
        <div>
           <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row g-3">
                    {personajes.map((item, index) => (
                            <div key={index} className="col">
                                <Card item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        </div>

    )
}
