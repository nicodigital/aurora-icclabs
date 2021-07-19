import React, { Component } from 'react';
import Link from 'next/link';

class Team extends Component {
    render() {
        return (
            <section className="team-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet Our Team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team1.jpg" alt="Team Image" />

                                    <div className="social">
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>

                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>

                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="content">
                                    <h3>John Smith</h3>
                                    <span>CEO & Founder</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team2.jpg" alt="Team Image" />

                                    <div className="social">
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>

                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>

                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="content">
                                    <h3>Lucy Eva</h3>
                                    <span>React Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team3.jpg" alt="Team Image" />

                                    <div className="social">
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>

                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>

                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="content">
                                    <h3>Steven Smith</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team4.jpg" alt="Team Image" />

                                    <div className="social">
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>

                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>

                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="content">
                                    <h3>Sarah Taylor</h3>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;