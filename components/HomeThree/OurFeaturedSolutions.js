import React from 'react';
import Link from 'next/link';

const OurFeaturedSolutions = () => {
    return (
        <div className="featured-solutions-area ptb-110">
            <div className="container">
                <div className="section-title">
                    <h2>Our Featured Solutions</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-solutions-box">
                            <div className="icon">
                                <img src="/images/icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/index-3/#">
                                    <a>Robotic Automation</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                            <Link href="/index-3/#">
                                <a className="learn-more-btn">Read More</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-solutions-box">
                            <div className="icon">
                                <img src="/images/icon2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/index-3/#">
                                    <a>Machine Learning</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                            <Link href="/index-3/#">
                                <a className="learn-more-btn">Read More</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-featured-solutions-box">
                            <div className="icon">
                                <img src="/images/icon3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/index-3/#">
                                    <a>Cognitive Engagement</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                            <Link href="/index-3/#">
                                <a className="learn-more-btn">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape-img2"><img src="/images/shape/shape2.svg" alt="image" /></div>
            <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape-img5"><img src="/images/shape/shape5.svg" alt="image" /></div>
            <div className="dot-shape1"><img src="/images/shape/dot1.png" alt="image" /></div>
            <div className="dot-shape2"><img src="/images/shape/dot3.png" alt="image" /></div>
        </div>
    )
}

export default OurFeaturedSolutions;