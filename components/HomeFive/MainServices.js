import React from 'react';
import Link from 'next/link';

const MainServices = () => {
    return (
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

                    <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
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
                </div>
            </div>
        </div>
    )
}

export default MainServices;