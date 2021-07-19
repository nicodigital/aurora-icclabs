import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Services from '../components/HomeTwo/Services';
import Footer from '../components/Layouts/Footer';

class ServicesTwo extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Services Two" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services Two" 
                    bgImgClass="item-bg2" 
                />  

                <Services />
                
                <Footer />
            </>
        );
    }
}

export default ServicesTwo;