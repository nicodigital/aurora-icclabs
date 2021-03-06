import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/" className="d-block">
                                        <img className="w-50 d-none d-sm-block" src="/images/logos/aurora-logo-footer.svg" alt="Aurora" />
                                        <img className="w-100 d-sm-none" src="/images/logos/aurora-logo-light.svg" alt="Aurora" />
                                    </a>
                                </div>

                                <ul className="social mb-5 mb-md-0">
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="flaticon-facebook-letter-logo"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="flaticon-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="flaticon-instagram-logo"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="flaticon-youtube-play-button"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="single-footer-widget">
                                <h3>Contacto</h3>

                                <ul className="footer-services-list">
                                    <li>Uruguay</li>
                                    <li>Ruta 101, km 23,500 </li>
                                    <li>Parque de las Ciencias </li>
                                    <li>Canelones </li>
                                    <li>Tel.: +598 2698 1764 </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 d-none d-md-block">
                            <div className="single-footer-widget">
                                <h3>Men??</h3>

                                <ul className="quick-links-list">
                                    <li>
                                        <Link href="/">
                                            <a>Aurora</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/gmplab">
                                            <a>GMP Lab</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Productos</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cbd">
                                            <a>CBD</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/medicos">
                                            <a>M??dicos</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/novedades">
                                            <a>Novedades</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="single-footer-widget">
                                <h3>Distribuye</h3>
                                <img className="apiter d-md-none" src="images/logos/apiter-logo-color-1.svg" alt="Apiter" />
                                <ul className="quick-links-list d-none d-md-block">
                                    <li>Uruguay</li>
                                    <li>Ruta 101, km 27,500</li>
                                    <li>Canelones</li>
                                    <li>Tel.: +598 2288 0755</li>
                                    <li>Tel.: +598 2288 0755</li>
                                    <li>apiter@apiter.com</li>
                                    <li>www.apiter.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <img className="apiter d-none d-md-block" src="images/logos/apiter-logo-color-1.svg" alt="Apiter" />
                                <ul className="quick-links-list">
                                        <li>Argentina</li>
                                        <li>Monse??or Larumbe, 1620</li>
                                        <li>Mart??nez, Bs. As.</li>
                                        <li>Telefax: +5411 4836 0206/1038</li>
                                        <li>ventasargentina@apiter.com</li>
                                </ul>
                           </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>Copyright &copy;{currentYear} Aurora. <br className="d-sm-none"/> All Rights Reserved.</p>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;