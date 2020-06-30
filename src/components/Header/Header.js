import React from 'react';

export const Header = () => {
    return (
        <header id="ts-hero" className="intro-header ts-animate-hero-items">
            <div className="container position-relative h-100 ts-align__vertical">
                <div className="row w-100">
                    <div className="col-md-6 offset-md-3 col-12 headshot">
                        <h1>Tom James</h1>
                        <img className="headshot-image" src="./assets/img/headshot-3.jpg" alt="Tom James - Full Stack Engineer" />
                    </div>
                    <div className="row w-100">
                        <div className="col-md-6 offset-md-3 col-12">
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
                </div>
            </div>
        </header>
    )
}