import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="main-banner-content">
                                <h1>Bienvenido al mundo <br/>Aurora CBD</h1>
                                <p>
                                Aurora es una de las empresas más relevantes en la industria del Cannabis Medicinal
                                a nivel mundial. El alto reconocimiento internacional de sus productos radica
                                en la calidad del extracto de Cannabis.
                                </p>
                                <div className="btn-box">
                                    <Link href="#bidiol">
                                        <a className="btn btn-primary">Conozca más</a>
                                    </Link>

                                    <Link href="/contacto">
                                        <a className="optional-btn">Contáctenos</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="featured-services-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box">
                                    <div className="circle mb-3"></div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>¿Qué es el CBD?</a>
                                        </Link>
                                    </h3>
                                    <p>Funcionamiento sobre el cuerpo humano</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box">
                                    <div className="circle mb-3"></div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Evidencia en el tratamiento <br/> con CBD de otras patologías</a>
                                        </Link>
                                    </h3>
                                    <p>Control de síntomas</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-services-box">
                                    <div className="circle mb-3"></div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Compromiso de Calidad</a>
                                        </Link>
                                    </h3>
                                    <p>Productos consistentes y superiores <br/>en cannabis medicinal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;