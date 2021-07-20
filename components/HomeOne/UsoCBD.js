import React, { Component } from 'react';

class UsoCBD extends Component {
    render() {
        return (
            <section className="uso-cbd-area bg-tertiary ptb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <h2 className="h3 text-light mb-5">
                                Evidencia del uso de CBD en el <br />
                                tratamiento de otras patología
                            </h2>
                            <ul className="list text-secondary fw-bold">
                                <li>
                                    Enfermedades autoinmunes
                                    (inflamación, artritis reumatoide) (11)
                                </li>
                                <li>
                                    Afecciones neurológicas, Alzheimer, demencia,
                                    párkinson, esclerosis múltiple, epilepsia (2, 6)
                                </li>
                                <li>
                                    Enfermedad neuropsiquiátrica, autismo, TDAH,
                                    trastorno de estrés postraumático, alcoholismo (2)
                                </li>
                                <li>Cardioprotector (3)</li>
                                <li>Enfermedad de la piel (acné, dermatitis, psoriasis) (12, 13)</li>
                                <li>Trastornos del sueño (8)</li>
                                <li>Ansiedad o depresión (1)</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-6 offset-lg-2 mt-5 mt-md-0">

                            <img className="mobile-wide-fit" src="./images/home/evidenciaCBD.jpg" alt=""/>

                            <h2 className="h3 text-light my-5">
                                El CBD en el control de síntomas (4)
                            </h2>
                            <ul className="list text-secondary fw-bold">
                                <li>Dolor (2, 5, 6, 7, 8)</li>
                                <li>Espasticidad (2)</li>
                                <li>Náuseas y vómitos (5)</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default UsoCBD;