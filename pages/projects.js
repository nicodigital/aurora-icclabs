import React, { Component } from 'react';
import Link from 'next/link';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class Projects extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Projects" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Projects" 
                    bgImgClass="item-bg1" 
                />  

                <div className="projects-area ptb-110">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-img1.jpg" alt="image" />
                                
                                    <div className="plus-icon">
                                        <Link href="/projects-details">
                                            <a><span></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-img2.jpg" alt="image" />
                                
                                    <div className="plus-icon">
                                        <Link href="/projects-details">
                                            <a><span></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-img3.jpg" alt="image" />
                                
                                    <div className="plus-icon">
                                        <Link href="/projects-details">
                                            <a><span></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-img4.jpg" alt="image" />
                                
                                    <div className="plus-icon">
                                        <Link href="/projects-details">
                                            <a><span></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-img5.jpg" alt="image" />
                                
                                    <div className="plus-icon">
                                        <Link href="/projects-details">
                                            <a><span></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-img6.jpg" alt="image" />
                                
                                    <div className="plus-icon">
                                        <Link href="/projects-details">
                                            <a><span></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-img7.jpg" alt="image" />
                                
                                    <div className="plus-icon">
                                        <Link href="/projects-details">
                                            <a><span></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-img8.jpg" alt="image" />
                                
                                    <div className="plus-icon">
                                        <Link href="/projects-details">
                                            <a><span></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="circle-shape1">
                        <img src="/images/projects-shape.png" alt="image" />
                    </div>
                </div>
            
                <Footer />
            </>
        );
    }
}

export default Projects;