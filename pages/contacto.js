import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactFormContent from '../components/Contact/ContactFormContent';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Contacto" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Contacto" 
                    bgImgClass="item-bg3" 
                />  

                <ContactFormContent />
                
                <Footer/>
            </>
        );
    }
}

export default Contact;