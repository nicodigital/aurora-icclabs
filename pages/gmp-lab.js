import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class GmpLab extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Laboratorio con standar GMP" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="GMP Lab" 
                    bgImgClass="bg-gmplab" 
                />  
                <section className="gmp-lab container mt-5 py-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 pe-sm-0">
                            <article className="pe-md-5">
                                <h2 className="text-secondary mb-5">
                                    API de calidad farmacéutica
                                </h2>
                                <p>
                                    El equipo técnico de Aurora Uruguay trabajó durante dos años en la optimización del 
                                    proceso productivo para obtener un API (Active Pharmaceutical Ingredient) de calidad 
                                    farmacéutica.
                                </p>
                                <p>
                                    Los altos estándares de calidad se mantienen desde el cultivo del cáñamo, los 
                                    procesos de extracción de los principios activos de la planta hasta el producto final, a 
                                    diferencia de otros productos existentes en el mercado que utlizan extracto de 
                                    Cannabis o CBD adquiridos en otros mercados.
                                </p>
                            </article>
                        </div>
                        <div className="col-12 col-sm-6 ps-sm-0">
                            <div className="imgbox imgbox-large imgbox-color-1"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-6 pe-sm-0">
                            <div className="imgbox imgbox-large imgbox-color-1"></div>
                        </div>
                        <div className="col-12 col-sm-6 ps-sm-0">
                            <article className="ps-md-5 pt-5">
                                <h2 className="text-secondary mb-5">
                                    Calidad certificada
                                </h2>
                                <p>
                                    Aurora se encuentra habilitada por el MSP desde el 2018 como fabricante 
                                    de extracto de Cannabis de alta calidad (API), grado farmacéutico.
                                    En el año 2019 obtuvo la habilitación del MSP como fabricante de 
                                    productos medicinales a base de extracto de Cannabis.
                                    Recientemente obtuvo la certificación GMP emitida por el MSP para la 
                                    fabricación de extracto de Cannabis y productos farmacéuticos a base de 
                                    CBD, así como el GLP de su Laboratorio de Control de Calidad.
                                </p>
                                <div className="d-flex flex-wrap mt-5">
                                    <img className="logo logo-cuadrado" src="images/gmp-lab/gmp-certified.svg" alt="GMP Certified" />
                                    <img className="logo logo-cuadrado" src="images/gmp-lab/glp-certified.svg" alt="GLP Certified" />
                                    <img className="logo logo-rectangulo" src="images/gmp-lab/min-salud-publica.svg" alt="Ministerio de Salud Pública" />
                                    <img className="logo logo-rectangulo" src="images/gmp-lab/ircca.jpg" alt="IRCCA" />
                                </div>
                            </article>
                        </div>
                    </div> 
                    <div className="row mt-5 py-5">
                        <div className="col-12 d-grid grid-col-md-4 grid-gap-3">
                            <div className="imgbox imgbox-medium imgbox-color-green"></div>
                            <div className="imgbox imgbox-medium imgbox-color-1"></div>
                            <div className="imgbox imgbox-medium imgbox-color-green"></div>
                            <div className="imgbox imgbox-medium imgbox-color-1"></div>

                            <div className="imgbox imgbox-medium imgbox-color-1"></div>
                            <div className="imgbox imgbox-medium imgbox-color-green"></div>
                            <div className="imgbox imgbox-medium imgbox-color-1"></div>
                            <div className="imgbox imgbox-medium imgbox-color-green"></div>

                            <div className="imgbox imgbox-medium imgbox-color-green"></div>
                            <div className="imgbox imgbox-medium imgbox-color-1"></div>
                            <div className="imgbox imgbox-medium imgbox-color-green"></div>
                            <div className="imgbox imgbox-medium imgbox-color-1"></div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}

export default GmpLab;