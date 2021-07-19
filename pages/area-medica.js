import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Layouts/Footer';

class AreaMedica extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner
                    pageTitle="Área Médica"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Área Médica"
                    bgImgClass="bg-area-medica"
                />

                <section className="cbd mt-5 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-5">
                                <h1 className="h2 text-primary">Consulta para médicos</h1>
                            </div>
                            <div className="col-12 col-sm-7">
                                <p className="box-message box-message-color-1">
                                    Los médicos son los únicos habilitados a indicar el correcto uso del Cannabis medicinal.
                                    Aurora colabora con el Cuerpo Médico brindando toda la información necesaria
                                    para el mejor uso de nuestros productos.
                                </p>
                            </div>
                        </div>
                        <div className="row my-5">
                            <ContactForm  />
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        );
    }
}

export default AreaMedica;