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

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="testimonials-area ptb-110">
            <div className="container">
                <div className="section-title">
                    <h2>What Clients Say About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/author3.jpg" alt="image" />
                            <h3>Sarah Taylor</h3>
                            <span>CEO at Envato</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/author1.jpg" alt="image" />
                            <h3>Steven Smith</h3>
                            <span>CEO at Envato</span>
                        </div>
                        <p>Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit.</p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/author2.jpg" alt="image" />
                            <h3>James Eva</h3>
                            <span>CEO at Envato</span>
                        </div>
                        <p>Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit.</p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
            
            {/* Shape Images */}
            <div className="shape-img1"><img src="/images/shape/shape1.png" alt="image" /></div>
            <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape-img2"><img src="/images/shape/shape2.svg" alt="image" /></div>
            <div className="shape-img5"><img src="/images/shape/shape5.svg" alt="image" /></div>
            <div className="shape-img4"><img src="/images/shape/shape4.svg" alt="image" /></div>
            <div className="dot-shape1"><img src="/images/shape/dot1.png" alt="image" /></div>
            <div className="dot-shape2"><img src="/images/shape/dot3.png" alt="image" /></div>
        </div>
    )
}

export default Testimonials;