import React, { Component } from 'react'
import { Cards } from './Cards';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { personajes: [] };
    }

    componentDidMount() {
        // RickAndMortyService.getAllCharacters()
        //     .then((data) => this.setState({personajes: data.results}))
        //     .catch((error) => console.log(error));
    }

    render() {
        return (
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Rick and Morty</h1>
                            <p className="lead text-muted">
                                Esta es una pagina en la cual utilice lo que es HTML, CSS, JavaScript,
                                React para consumir la API de Rick and Morty con un estilo de cartas
                                y paginación de todos los personajes, aqui les dejo mis redes.
                            </p>

                            <p>
                                <a href="https://github.com/valentinmathey" className="btn btn-secondary my-2 button" target={'_blank'}>GitHub</a>
                                <a href="https://www.facebook.com/ValentinEzequielMathey" className="btn btn-primary my-2 button" target={'_blank'}>FaceBook</a>
                                <a href="https://www.linkedin.com/in/valentin-mathey/" className="btn btn-info my-2 button" target={'_blank'}>Linkedin</a>
                                <a href="https://www.instagram.com/valen.mathey/" className="btn btn-success my-2 button" target={'_blank'}>Instagram</a>
                            </p>
                        </div>
                    </div>
                </section>
                <Cards />
            </main>
        )
    }

}
