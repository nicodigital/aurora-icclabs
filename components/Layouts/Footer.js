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
                                    <a href="/">
                                        <img className="w-75" src="/images/aurora-logo-footer.svg" alt="Aurora" />
                                    </a>
                                </div>

                                <ul className="social">
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

                        <div className="col-lg-2 col-md-6 col-sm-6">
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

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Menú</h3>

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
                                            <a>Médicos</a>
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

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Distribuye</h3>

                                <ul className="quick-links-list">
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
                                <img className="apiter" src="images/apiter-logo-color-1.svg" alt="Apiter" />
                                <ul className="quick-links-list">
                                        <li>Argentina</li>
                                        <li>Monseñor Larumbe, 1620</li>
                                        <li>Martínez, Bs. As.</li>
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
                                <p>Copyright &copy;{currentYear} Aurora. All Rights Reserved <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>.</p>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <ul>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
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