import React, { Component } from 'react';
import Link from 'next/link';

class ServicesContent extends Component {
    render() {
        return (
            <section className="services-area bg-f2f6f9 ptb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-income"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Data Analysts</a>
                                    </Link>
                                </h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-automatic"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Automatic Optimization</a>
                                    </Link>
                                </h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-locked"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Security & Surveillance</a>
                                    </Link>
                                </h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-molecular"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Healthcare & Manufacturing</a>
                                    </Link>
                                </h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-gear"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Software Engineers</a>
                                    </Link>
                                </h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-ceo"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>IT Professionals</a>
                                    </Link>
                                </h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="fas fa-database"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Data Visualization</a>
                                    </Link>
                                </h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Big Data Strategy</a>
                                    </Link>
                                </h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="fas fa-project-diagram"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Machine Learning Data </a>
                                    </Link>
                                </h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
 
                        {/* Pagination */}
                        <div className="col-lg-12 col-sm-12">
                            <div className="pagination-area">
                                <Link href="#">
                                    <a className="prev page-numbers">
                                        <i className="fas fa-angle-double-left"></i>
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">1</a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers current">2</a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">3</a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">4</a>
                                </Link>

                                <Link href="#">
                                    <a className="next page-numbers">
                                        <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.svg" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot3.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot4.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot5.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot6.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default ServicesContent;