import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogThreeGrid from '../components/Blog/BlogThreeGrid';
import Footer from '../components/Layouts/Footer';

class Blog extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Novedades" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Novedades" 
                    bgImgClass="bg-novedades" 
                />  

                <BlogThreeGrid />
                
                <Footer/>
            </>
        );
    }
}

export default Blog;