import React from 'react';

export const About = () => {
    return (
        <section id="about-me" className="ts-block pb-4">
            <div className="container">
                <div className="ts-title text-center">
                    <h2>About Me</h2>
                </div>
                <div className="row ts-align__vertical">
                    <div className="col-md-6">
                        <img src="./assets/img/img-man-looking.jpg" alt="" className="mw-100 mb-5" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="ts-bubble-border">Hi There</h4>
                        <p>
                            In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum
                            ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta
                            sem turpis quis leo. Nulla in feugiat elit.
                        </p>
                        <dl className="ts-column-count-2">
                            <dt>Name:</dt>
                            <dd>Thomas James</dd>
                            <dt>Phone:</dt>
                            <dd>07966008578</dd>
                            <dt>Email:</dt>
                            <dd>tom@teeeejaaaay.co.uk</dd>
                            <dt>Twitter:</dt>
                            <dd>TeeeeJaaaaY</dd>
                        </dl>
                        <hr className="ts-hr-light mb-5" />
                        <a href="#contact" className="ts-btn-effect mr-2">
                            <span className="ts-visible btn btn-primary ts-btn-arrow">Contact Me</span>
                            <span className="ts-hidden btn btn-primary ts-btn-arrow" data-bg-color="#d44729">Contact Me</span>
                        </a>
                        <a href="#contact" className="ts-btn-effect mr-2">
                            <span className="ts-visible btn btn-outline-light">
                                <i className="fa fa-download small mr-2"></i>
                                Download CV
                            </span>
                            <span className="ts-hidden btn btn-light bg-white">
                                <i className="fa fa-download small mr-2"></i>
                                Download CV
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}