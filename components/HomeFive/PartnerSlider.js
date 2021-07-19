import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: true,
        navText: [
            "<i className='flaticon-left-chevron'></i>",
            "<i className='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1024: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
};


const PartnerSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="partner-section ptb-110">
            <div className="container">
                <div className="section-title">
                    <h2>Our Valuable Branding Partner</h2>
                </div>

                {display ? <OwlCarousel 
                    className="partner-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-partner-item">
                        <a href="/index-5/#" target="_blank">
                            <img src="/images/partner/partner1.png" alt="image" />
                        </a>
                    </div>

                    <div className="single-partner-item">
                        <a href="/index-5/#" target="_blank">
                            <img src="/images/partner/partner2.png" alt="image" />
                        </a>
                    </div>

                    <div className="single-partner-item">
                        <a href="/index-5/#" target="_blank">
                            <img src="/images/partner/partner3.png" alt="image" />
                        </a>
                    </div>

                    <div className="single-partner-item">
                        <a href="/index-5/#" target="_blank">
                            <img src="/images/partner/partner4.png" alt="image" />
                        </a>
                    </div>

                    <div className="single-partner-item">
                        <a href="/index-5/#" target="_blank">
                            <img src="/images/partner/partner5.png" alt="image" />
                        </a>
                    </div>

                    <div className="single-partner-item">
                        <a href="/index-5/#" target="_blank">
                            <img src="/images/partner/partner6.png" alt="image" />
                        </a>
                    </div>

                    <div className="single-partner-item">
                        <a href="/index-5/#" target="_blank">
                            <img src="/images/partner/partner1.png" alt="image" />
                        </a>
                    </div>

                    <div className="single-partner-item">
                        <a href="/index-5/#" target="_blank">
                            <img src="/images/partner/partner2.png" alt="image" />
                        </a>
                    </div>

                    <div className="single-partner-item">
                        <a href="/index-5/#" target="_blank">
                            <img src="/images/partner/partner3.png" alt="image" />
                        </a>
                    </div>
                </OwlCarousel> : ''}
            </div>

            <div className="dot-shape1"><img src="/images/shape/dot1.png" alt="image" /></div>
            <div className="shape-img2"><img src="/images/shape/shape2.svg" alt="image" /></div>
            <div className="shape-img4"><img src="/images/shape/shape4.svg" alt="image" /></div>
            <div className="shape-img5"><img src="/images/shape/shape5.svg" alt="image" /></div>
        </div>
    )
}

export default PartnerSlider;