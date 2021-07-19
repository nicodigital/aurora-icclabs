import React, { Component } from 'react';
import Link from 'next/link';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class ServicesFour extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Services Four" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services Four" 
                    bgImgClass="item-bg2" 
                />  

                <div className="solutions-area ptb-110">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-solutions-box">
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

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-solutions-box active">
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

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-solutions-box">
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

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-solutions-box">
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

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-solutions-box">
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

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-solutions-box">
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
                        </div>
                    </div>
                </div>
             
                <Footer />
            </>
        );
    }
}

export default ServicesFour;