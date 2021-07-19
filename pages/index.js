import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import About from '../components/HomeOne/About';
import UsoCBD from '../components/HomeOne/UsoCBD';
import Rest from '../components/HomeOne/Rest';
import Footer from '../components/Layouts/Footer';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <About />
                <UsoCBD />
                <Rest />
                <Footer />
            </>
        );
    }
}

export default Index;