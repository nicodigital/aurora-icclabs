import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Security & Surveillance" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Service Details" 
                    bgImgClass="item-bg2" 
                />  

                <ServiceDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;