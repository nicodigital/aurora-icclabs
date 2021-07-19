import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class CBD extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner
                    pageTitle="CBD"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="CBD"
                    bgImgClass="bg-cbd"
                />
                <section className="cbd mt-5 py-5">
                    <div className="container pb-5 ">
                        <div className="row">
                            <div className="col-12 col-sm-6 pe-sm-0">
                                <article className="pe-md-5 mb-5">
                                    <h2 className="text-primary my-5">
                                        Bienvenido al mundo CBD
                                    </h2>
                                    <p>
                                        El cannabidiol (CDB) es un compuesto que se encuentra en la flor resinosa del
                                        cannabis, una planta con una rica historia en el uso medicinal, la cual se remonta a
                                        miles de años atrás. Este compuesto es uno de los más de cien fitocannabinoides
                                        exclusivos del cannabis que le confieren a la planta su robusto perfil terapéutico. En
                                        la actualidad, los científicos y médicos de todo el mundo están investigando y
                                        confirmando las propiedades terapéuticas del CBD.
                                    </p>
                                    <p>
                                        El CBD actúa de la misma forma que los endocannabinoides presentes en nuestro
                                        organismo, denominados así por la similitud con los compuestos que se encuentran
                                        presentes en la planta de cannabis. El CBD aumenta los efectos de los
                                        endocannabinoides.
                                    </p>
                                    <p>
                                        El sistema endocannabinoide desempeña un papel crucial en la regulación de una
                                        amplia gama de procesos fisiológicos que afectan las experiencias diarias, como ser
                                        los niveles de energía, estado de ánimo, fortaleza intestinal, actividad inmunológica,
                                        presión arterial, densidad ósea, metabolismo de la glucosa, dolor, estrés, hambre,
                                        entre otros.
                                    </p>
                                </article>
                            </div>
                            <div className="col-12 col-sm-6 ps-sm-0 d-flex align-items-center">
                                <img className="img-fluid" src="images/cbd/cbd-1.jpg" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary py-5 my-5 ">
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-12 col-lg-3 position-relative esquema">
                                    <h2 className="text-light">
                                        Qué es CBD
                                    </h2>
                                    <img className="w-100" src="images/cbd/esquema.svg" />
                                </div>
                                <div className="col-12 col-lg-8 offset-lg-1">
                                    <p className="h3 text-light fw-light">
                                        El CBD es una sustancia segura, no adictiva y que no provoca en la 
                                        persona que lo consume la sensación de sentirse <i>drogada o intoxicada</i>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-3">
                                <h3 className="text-secondary my-5">
                                    ¿Cómo funciona el CBD <br className="d-none d-sm-block" />
                                    sobre el cuerpo humano?
                                </h3>
                            </div>
                            <div className="col-12 col-lg-8 offset-lg-1">
                                <img className="w-100" src="images/cbd/cuerpo-humano.svg" />
                            </div>
                        </div>
                    </div>

                </section>
                <Footer />
            </>
        );
    }
}

export default CBD;