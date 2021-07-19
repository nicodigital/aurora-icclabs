import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import MainBanner from '../components/HomeTwo/MainBanner';
import OurFeaturedSolutions from '../components/HomeTwo/OurFeaturedSolutions';
import AboutUs from '../components/HomeTwo/AboutUs';
import Services from '../components/HomeTwo/Services';
import FunFacts from '../components/HomeTwo/FunFacts';
import Projects from '../components/HomeTwo/Projects';
import OurPricingPlan from '../components/HomeTwo/OurPricingPlan';
import Testimonials from '../components/HomeTwo/Testimonials';
import BlogPost from '../components/Common/BlogPost';
import FreeTrialArea from '../components/Common/FreeTrialArea';
import PartnerSlider from '../components/Common/PartnerSlider';
import Footer from '../components/Layouts/Footer';

class Index2 extends Component {
    render() {
        return (
            <>
                <NavbarThree />
                <MainBanner />
                <OurFeaturedSolutions />
                <AboutUs />
                <Services />
                <FunFacts />
                <Projects />
                <OurPricingPlan />
                <Testimonials />
                <BlogPost />
                <FreeTrialArea />
                <PartnerSlider />
                <Footer />
            </>
        );
    }
}

export default Index2;