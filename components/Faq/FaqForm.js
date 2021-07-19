import React, { Component } from 'react';

class FaqForm extends Component {
    render() {
        return (
            <div className="faq-contact">
                <div className="section-title">
                    <h2>Do You Have Any Questions</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="faq-contact-form">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="faq-contact-image">
                                <img src="/images/contact.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Name" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Email" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" id="phone_number" className="form-control" placeholder="Phone" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Subject" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" id="message" cols="30" rows="5" placeholder="Your Message" required></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FaqForm;