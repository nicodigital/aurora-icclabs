import React, { Component } from 'react';
import Link from 'next/link';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class ServicesThree extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Services Three" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services Three" 
                    bgImgClass="item-bg1" 
                />  

                <div className="main-services-area ptb-110">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-main-services-box">
                                    <div className="icon">
                                        <i className="flaticon-robot-1"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Robotic Process Automation</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>

                                    <Link href="/service-details">
                                        <a className="link-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-main-services-box">
                                    <div className="icon">
                                        <i className="flaticon-neural"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Machine Learning</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>

                                    <Link href="/service-details">
                                        <a className="link-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-main-services-box">
                                    <div className="icon">
                                        <i className="flaticon-machine-learning"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Cognitive Engagement</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>

                                    <Link href="/service-details">
                                        <a className="link-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
 
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-main-services-box">
                                    <div className="icon">
                                        <i className="flaticon-income"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Data Analysts</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>

                                    <Link href="/service-details">
                                        <a className="link-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-main-services-box">
                                    <div className="icon">
                                        <i className="flaticon-automatic"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Automatic Optimization</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>

                                    <Link href="/service-details">
                                        <a className="link-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-main-services-box">
                                    <div className="icon">
                                        <i className="flaticon-locked"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Security & Surveillance</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>

                                    <Link href="/service-details">
                                        <a className="link-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-main-services-box">
                                    <div className="icon">
                                        <i className="flaticon-molecular"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Healthcare & Manufacturing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>

                                    <Link href="/service-details">
                                        <a className="link-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-main-services-box">
                                    <div className="icon">
                                        <i className="flaticon-gear"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Software Engineers</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>

                                    <Link href="/service-details">
                                        <a className="link-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-main-services-box">
                                    <div className="icon">
                                        <i className="flaticon-ceo"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>IT Professionals</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>

                                    <Link href="/service-details">
                                        <a className="link-btn">Read More</a>
                                    </Link>
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

export default ServicesThree;