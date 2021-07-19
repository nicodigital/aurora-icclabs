import React, { Component } from 'react';
import Link from 'next/link';

class PartnerContent extends Component {
    render() {
        return (
            <div className="partner-area ptb-110 bg-f2f6f9">
                <div className="container">
                    <div className="section-title">
                        <h2>Featured Customers & Partners</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="customers-partner-list">
                        <div className="partner-item">
                            <Link href="/#">
                                <a target="_blank">
                                    <img src="/images/partner/partner1.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/#">
                                <a target="_blank">
                                    <img src="/images/partner/partner2.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/#">
                                <a target="_blank">
                                    <img src="/images/partner/partner3.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/#">
                                <a target="_blank">
                                    <img src="/images/partner/partner4.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/#">
                                <a target="_blank">
                                    <img src="/images/partner/partner5.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/#">
                                <a target="_blank">
                                    <img src="/images/partner/partner6.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/#">
                                <a target="_blank">
                                    <img src="/images/partner/partner1.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/#">
                                <a target="_blank">
                                    <img src="/images/partner/partner2.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/#">
                                <a target="_blank">
                                    <img src="/images/partner/partner3.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerContent;