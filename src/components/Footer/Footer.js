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

                    <div className="pt-5">
                        <div className="row">
                            <div className="col-md-4">
                                <h3>Let’s Connect</h3>
                                <div className="ts-column-count-sm-2">
                                    <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i className="fab fa-facebook-f"></i>
                                    </span>
                                        <span>Facebook</span>
                                    </a>
                                    <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                        <span>Twitter</span>
                                    </a>
                                    <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i className="fab fa-instagram"></i>
                                    </span>
                                        <span>Instagram</span>
                                    </a>
                                    <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i className="fab fa-pinterest-p"></i>
                                    </span>
                                        <span>Pinterest</span>
                                    </a>
                                    <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i className="fab fa-skype"></i>
                                    </span>
                                        <span>Skype</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h3>Send Me a Message</h3>
                                <form id="form-contact" method="post" className="clearfix ts-form ts-form-email" data-php-path="./assets/php/email.php">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group">
                                                <label for="form-contact-name">Name *</label>
                                                <input type="text" className="form-control" id="form-contact-name" name="name" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group">
                                                <label for="form-contact-email">Email *</label>
                                                <input type="email" className="form-control" id="form-contact-email" name="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="form-contact-subject">Subject *</label>
                                        <input type="email" className="form-control" id="form-contact-subject" name="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label for="form-contact-message">Message *</label>
                                                <textarea className="form-control" id="form-contact-message" rows="5" name="message" placeholder="Message" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group clearfix">
                                        <button type="submit" className="btn btn-primary float-right ts-btn-arrow" id="form-contact-submit">Send a Message</button>
                                    </div>
                                    <div className="form-contact-status"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-dark bg-white">
                <div className="container py-3 position-relative">
                    <small>© 2018 ThemeStarz, All Rights Reserved</small>
                    <a href="#page-top" className="ts-circle__xs rounded-0 bg-dark position-absolute ts-right__0 ts-top__0 ts-push-up__50 ts-scroll">
                        <i className="fa fa-arrow-up text-white"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}