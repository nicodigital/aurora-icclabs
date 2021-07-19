import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    animateOut: 'fadeOut',
    items: 1,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
};

const CustomerFeedback = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="testimonials-section ptb-110">
            <div className="container">
                <div className="section-title">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="content">
                                <h2>Our Customer Review</h2>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="icon">
                                <i className="flaticon-chat"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-testimonials-box">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour predefined words which don't look.</p>
                        <div className="client-info">
                            <h3>Filip Luis</h3>
                            <span>Founder & CEO</span>
                        </div>
                    </div>

                    <div className="single-testimonials-box">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour predefined words which don't look.</p>
                        <div className="client-info">
                            <h3>Steven Smith</h3>
                            <span>CEO</span>
                        </div>
                    </div>

                    <div className="single-testimonials-box">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour predefined words which don't look.</p>
                        <div className="client-info">
                            <h3>Sarah Taylor</h3>
                            <span>EnvyTheme</span>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default CustomerFeedback;