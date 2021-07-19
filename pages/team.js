import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import TeamContent from '../components/Team/TeamContent';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Our Team" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Team" 
                    bgImgClass="item-bg1" 
                />  

                <TeamContent />

                <FreeTrialForm />
                
                <Footer />
            </>
        );
    }
}

export default Team;