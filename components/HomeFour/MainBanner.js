import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    items: 1,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ]
};

const MainBanner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {display ? <OwlCarousel 
                className="home-slides owl-carousel owl-theme"
                {...options}
            > 
                <div className="main-banner item-bg1">
                    <div className="container">
                        <div className="main-banner-content">
                            <h1>World’s Leading Machine Learning Company</h1>
                            <p>ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.</p>

                            <div className="btn-box">
                                <Link href="/index-4/#">
                                    <a className="btn btn-primary">Schedule a Demo</a>
                                </Link>
                                <Link href="/index-4/#">
                                    <a className="optional-btn">Get Started Free</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner item-bg2">
                    <div className="container">
                        <div className="main-banner-content">
                            <h1>World’s Leading Machine Learning Company</h1>
                            <p>ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.</p>
                            
                            <div className="btn-box">
                                <Link href="/index-4/#">
                                    <a className="btn btn-primary">Schedule a Demo</a>
                                </Link>
                                <Link href="/index-4/#">
                                    <a className="optional-btn">Get Started Free</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </>
    )
}

export default MainBanner;