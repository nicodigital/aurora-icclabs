import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="startup-banner-area">
            <div className="startup-banner-inner">
                <div className="container">
                    <div className="startup-banner-content">
                        <h1>World’s Leading <br /> Machine Learning Company</h1>
                        <p>ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.</p>

                        <div className="btn-box">
                            <Link href="/index-5/#">
                                <a className="btn btn-primary">Schedule a Demo</a>
                            </Link>
                            <Link href="/index-5/#">
                                <a className="optional-btn">Get Started Free</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;