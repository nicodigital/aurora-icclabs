import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class Webinar extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <section className="webinar-area">
                    <div className="row m-0">
                        <div className="col-lg-6 p-0">
                            <div className="webinar-content">
                                <h2>Check Out Our Latest Webinar</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>

                                <Link href="/#">
                                    <a className="btn btn-primary">Watch More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 p-0">
                            <div className="webinar-video-image">
                                <img src="/images/woman.jpg" alt="image" />

                                <div
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="flaticon-play-button"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='_ysd-zHamjk' 
                        onClose={() => this.setState({isOpen: false})} 
                    />
                </section>
            </>
        );
    }
}

export default Webinar;