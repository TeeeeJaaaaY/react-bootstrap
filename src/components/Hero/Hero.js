import React from 'react';

export const Hero = () => {
    return (
        <div id="ts-hero" className="ts-animate-hero-items">
            <div className="container position-relative h-100 ts-align__vertical">
                <div className="row w-100">
                    <div className="col-md-8">
                        <figure className="ts-social-icons mb-4">
                            <a href="#" className="mr-3">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="mr-3">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="mr-3">
                                <i className="fab fa-pinterest"></i>
                            </a>
                            <a href="#" className="mr-3">
                                <i className="fab fa-slack"></i>
                            </a>
                            <a href="#" className="mr-3">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </figure>

                        <h1>Tom James</h1>
                        <h1 className="ts-bubble-border">
                            <span className="ts-title-rotate">
                                <span className="active">Full Stack Developer</span>
                                <span>DevOps</span>
                                <span>Frontend</span>
                                <span>Backend</span>
                            </span>
                        </h1>

                    </div>
                </div>
                <a href="#my-services" className="ts-btn-effect position-absolute ts-bottom__0 ts-left__0 ts-scroll ml-3 mb-3">
                    <span className="ts-visible ts-circle__sm rounded-0 ts-bg-primary">
                        <i className="fa fa-arrow-down text-white"></i>
                    </span>
                    <span className="ts-hidden ts-circle__sm rounded-0">
                        <i className="fa fa-arrow-down text-white"></i>
                    </span>
                </a>

            </div>

            <div className="ts-background">
                <div className="ts-background-image" data-bg-image="./assets/img/bg-hero.jpg"></div>
            </div>

        </div>
    )
}