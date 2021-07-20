import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section id="bidiol" className="about-area ptb-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 pt-5 pt-md-0">
                            <div className="d-flex flex-column flex-md-row justify-content-between">
                                <figure className="col-8 col-sm-4 mx-auto d-flex flex-column align-items-center">
                                    <img src="/images/home/bidiol-logo-3-10.svg" alt="Bidiol 3 10" />
                                    <figcaption className="mt-3 align-self-start">
                                        BIDIOL es una <br/>
                                        marca registrada por <br/>
                                        AURORA / ICC Labs <br/>
                                        ante el MSP
                                    </figcaption>
                                </figure>
                                <div className="about-image col-md-7">
                                    <img className="mx-auto pr-md-3" src="/images/home/bidiol.jpg" alt="Bidiol" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2 className="text-secondary">
                                    El primer aceite de CBD producido <br className="d-none d-sm-block"/>
                                    integramente en Uruguay
                                </h2>
                                <p>
                                    Aurora desarrolló un producto bajo estrictos controles de calidad en todas las etapas 
                                    del proceso, desde la plantación del cáñamo, diseño y desarrollo de los procesos 
                                    productivos de extracción de CBD hasta la fabricación del producto medicinal. 
                                    Bidiol 3 es un producto al 3 % de CBD (expresado en g de CBD/100 ml de producto).
                                </p>
                                <p>
                                    Bidiol 10 es un producto al10 % de CBD (expresado en g de CBD/100 ml de producto). 
                                    En ambos productos el contenido de THC+THCA es menor al 1 %.
                                </p>
                                <p>
                                    La presentación es en frascos color ámbar de 10 ml y 30 ml con gotero inserto, el 
                                    cual asegura una correcta dosificación del producto.
                                </p>
                                <Link href="#">
                                    <a className="btn btn-primary">Ver prospecto</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;