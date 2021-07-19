import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class Aurora extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Bienvenidos a Aurora" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Aurora" 
                    bgImgClass="bg-aurora" 
                />  
                <section className="gmp-lab container mt-5 py-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 pe-sm-0">
                            <article className="pe-md-5">
                                <h2 className="text-secondary my-5">
                                Aurora es pionera en el cannabis <br className="d-none d-sm-block" />
                                medicinal, promueve el acceso <br className="d-none d-sm-block" />
                                de los pacientes a nivel mundial <br className="d-none d-sm-block" />
                                y se dedica a ayudar a las personas <br className="d-none d-sm-block" />
                                a mejorar su salud, bienestar <br className="d-none d-sm-block" />
                                y calidad de vida en general
                                </h2>
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
                        <div className="col-12 col-sm-6 ps-sm-0 mb-md-5 mt-md-2 pb-md-5">
                            <article className="ps-md-5 pt-5">
                                <h2 className="text-primary mb-5">
                                    Constante evolución
                                </h2>
                                <p>
                                    Nuestro enfoque, basado en la ciencia, la investigación y la innovación, ha 
                                    impulsado los estándares de la industria en la producción de cannabis 
                                    seguro y de alta calidad. Esta dedicación a la excelencia se deriva de 
                                    nuestro compromiso de marcar la diferencia para los pacientes de todo el 
                                    mundo y ayudar a los investigadores y prescriptores a realizar plenamente 
                                    el potencial terapéutico de este medicamento fundamental.
                                </p>

                                <p>
                                    En Aurora, creemos que el tratamiento con cannabis medicinal debe estar 
                                    disponible para todos los pacientes que lo necesiten, independientemente 
                                    de las circunstancias de su vida. Es una parte fundamental de nuestra 
                                    misión aumentar la accesibilidad a través de opciones asequibles, 
                                    programas compasivos y la mejor atención al cliente de su clase.
                                </p>
                            </article>
                        </div>
                    </div> 
                    <div className="row py-5">
                        <div className="col-12 col-md-9">
                            <h3 className="h2 text-primary fw-light">
                                El compromiso de Aurora es el de proporcionar productos consistentes 
                                y superiores en cannabis medicinal, y brindar apoyo al paciente para 
                                ayudarlo en su camino hacia una mejor calidad de vida
                            </h3>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-12 col-md-6">
                            <img className="w-100" src="images/aurora/packaging.jpg" />
                        </div>
                        <div className="col-12 col-md-4 offset-md-1 d-flex align-items-center">
                            <p className="fw-bold text-secondary">
                                Aurora está allanando el camino hacia una nueva era de productos 
                                de cannabis medicinal y opciones para los pacientes, poniendolos 
                                en primer lugar con fórmulas modernas, convenientes y seguras en 
                                las que puede confiar.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}

export default Aurora;