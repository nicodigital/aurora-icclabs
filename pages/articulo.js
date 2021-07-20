import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import Footer from '../components/Layouts/Footer';

class BlogDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Título largo de la noticia con aproximadamente diez palabras" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Título largo de la noticia con aproximadamente diez palabras" 
                    bgImgClass="bg-novedades"  
                /> 

                <BlogDetailsContent />
                
                <Footer/>
            </>
        );
    }
}

export default BlogDetails;