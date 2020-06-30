import React from 'react';
import { Nav } from '../../components/Nav/Nav';
import { Hero } from '../../components/Hero/Hero';
import { Services } from '../../components/Services/Services';
import { About } from '../../components/About/About';
import { CTA } from '../../components/CTA/CTA';
import { Portfolio } from '../../components/Portfolio/Portfolio';
import { Stats } from '../../components/Stats/Stats';
import { Testimonials } from '../../components/Testimonials/Testimonials';
import { Footer } from '../../components/Footer/Footer';
import { Modal } from '../../components/Modal/Modal';
import { Header } from '../../components/Header/Header';


export const Home = (props) => {
    return (
        <>
            <div className="ts-page-wrapper" id="page-top">

                <Nav />

                <Header />

                <main id="ts-content">
            
                    <Services />

                    <About />

                    <Portfolio />

                </main>

                <Footer />
            
            </div>

            <Modal />
        </>
    )
}