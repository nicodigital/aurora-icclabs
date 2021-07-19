import '../public/css/bootstrap.min.css';
import 'animate.css';
import '../public/css/flaticon.css';
import '../public/css/fontawesome.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.scss';
import '../public/css/display-grid.scss';
import '../public/css/responsive.scss';

import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Loader from '../components/Shared/Loader'; 
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <title>Aurora - Canabis Medicinal a nivel mundial</title>
                </Head>

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="10.50" />
            </>
        );
    }
}