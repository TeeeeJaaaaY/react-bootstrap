import React from 'react';

export const Footer = () => {
    return (
        <footer id="ts-footer" className="mt-5">

            <section id="contact" className="ts-block ts-separate-bg-element" data-bg-image="./assets/img/bg-man-wall.jpg" data-bg-image-opacity=".1">
                <div className="container">
                    <div className="ts-title text-center">
                        <h2 className="ts-bubble-border">Get In Touch</h2>
                    </div>
                    <div className="row ts-xs-text-center ">
                        <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp">
                            <img src="./assets/img/icon-pin.png" className="mb-4" alt="" />
                            <h5>Address</h5>
                            <div className="ts-opacity__50">
                                <figure className="mb-0">999 Carter Street</figure>
                                <figure>Sailor Springs, IL 62434</figure>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".1s">
                            <img src="./assets/img/icon-phone-02.png" className="mb-4" alt="" />
                            <h5>Phone</h5>
                            <div className="ts-opacity__50">
                                <figure className="mb-0">+1 618-689-9409</figure>
                                <figure>+1 781-254-8437</figure>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".2s">
                            <img src="./assets/img/icon-envelope.png" className="mb-4" alt="" />
                            <h5>Email</h5>
                            <div className="ts-opacity__50">
                                <figure className="mb-0">hello@example.com</figure>
                                <figure>support@example.com</figure>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".3s">
                            <img src="./assets/img/icon-talk-bubble.png" className="mb-4" alt="" />
                            <h5>Facebook Chat</h5>
                            <div className="ts-opacity__50">
                                <figure>me.freelancer3</figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-dark bg-white">
                <div className="container py-3 position-relative">
                    <small>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></small>
                    <a href="#page-top" className="ts-circle__xs rounded-0 bg-dark position-absolute ts-right__0 ts-top__0 ts-push-up__50 ts-scroll">
                        <i className="fa fa-arrow-up text-white"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}