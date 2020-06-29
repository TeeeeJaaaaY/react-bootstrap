import React from 'react';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
    return (
        <section className="ts-block pb-5" id="portfolio">
            <div className="container">
                <div className="ts-title">
                    <h2>Portfolio</h2>
                </div>
                <div className="card-columns ts-gallery ts-column-count-4">
                    <a href="https://bgf.co.uk" target="_blank" rel="noreferrer" className="card ts-gallery__item" data-animate="ts-fadeInUp">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Full Stack Development</h6>
                            <h4>BGF</h4>
                            <h5>https://bgf.co.uk</h5>
                        </div>
                        <img src="./assets/img/portfolio/bgf-4.jpg" className="card-img" alt="" />
                    </a>
                    <a href="./assets/img/portfolio/sense.jpg" target="_blank" rel="noreferrer" className="card ts-gallery__item" data-animate="ts-fadeInUp">
                        <div className="ts-gallery__image">
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Full Stack Development</h6>
                                <h4>Sense Marketing</h4>
                                <h5>https://sensemktg.com</h5>
                            </div>
                            <img src="./assets/img/portfolio/sense-2.jpg" className="card-img" alt="" />
                        </div>
                    </a>
                    <a href="https://pem.co.uk" target="_blank" rel="noreferrer" className="card ts-gallery__item" data-animate="ts-fadeInUp">
                        <div className="ts-gallery__image">
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Backend</h6>
                                <h4>PEM</h4>
                                <h5>https://pem.co.uk</h5>
                            </div>
                            <img src="./assets/img/portfolio/pem-2.jpg" className="card-img" alt="" />
                        </div>
                    </a>
                    <a href="https://polyai.com" target="_blank" rel="noreferrer" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                        <div className="ts-gallery__image">
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Backend</h6>
                                <h4>Poly AI</h4>
                                <h5>https://polyai.com</h5>
                            </div>
                            <img src="./assets/img/portfolio/poly-ai-2.jpg" className="card-img" alt="" />
                        </div>
                    </a>
                    <a href="https://itresale.com" target="_blank" rel="noreferrer" className="card ts-gallery__item" data-animate="ts-fadeInUp">
                        <div className="ts-gallery__image">
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Full Stack Development</h6>
                                <h4>IT Resale</h4>
                                <h5>https://itresale.com</h5>
                            </div>
                            <img src="./assets/img/portfolio/it-resale-2.jpg" className="card-img" alt="" />
                        </div>
                    </a>
                    <a href="https://hardmanandco.com" target="_blank" rel="noreferrer" className="card ts-gallery__item" data-animate="ts-fadeInUp">
                        <div className="ts-gallery__image">
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Backend</h6>
                                <h4>Hardman and Co</h4>
                                <h5>https://hardmanandco.com</h5>
                            </div>
                            <img src="./assets/img/portfolio/hardman-2.jpg" className="card-img" alt="" />
                        </div>
                    </a>
                    <a href="https://neogenplasma.co.uk" target="_blank" rel="noreferrer" className="card ts-gallery__item" data-animate="ts-fadeInUp">
                        <div className="ts-gallery__image">
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Backend</h6>
                                <h4>Neogen Plasma</h4>
                                <h5>https://neogenplasma.co.uk</h5>
                            </div>
                            <img src="./assets/img/portfolio/neogenplasma.jpg" className="card-img" alt="" />
                        </div>
                    </a>
                    <a href="https://www.acuiti.io" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                        <div className="ts-gallery__image">
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Backend</h6>
                                <h4>Acuiti</h4>
                                <h5>https://acuiti.io</h5>
                            </div>
                            <img src="./assets/img/portfolio/acuiti-2.jpg" className="card-img" alt="" />
                        </div>
                    </a>
                    <a href="#" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                        <div className="ts-gallery__image">
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">DevOps</h6>
                                <h4>CI between GitLab and WP Engine</h4>
                            </div>
                            <img src="./assets/img/portfolio/ci-cd.jpg" className="card-img" alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}