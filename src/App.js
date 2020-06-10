import React from 'react';
import './App.css';

function App() {
  return (
    <div class="ts-page-wrapper" id="page-top">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white">
            <div class="container">
                <a class="navbar-brand ts-push-down__50 position-absolute ts-bottom__0 bg-white pb-0 ts-z-index__1 ts-scroll" href="#page-top">
                    <img src="assets/img/logo.png" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav d-block d-lg-flex ml-auto text-right">
                        <a class="nav-item nav-link active ts-scroll" href="#page-top">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link ts-scroll" href="#my-services">Services</a>
                        <a class="nav-item nav-link ts-scroll" href="#about-me">About Me</a>
                        <a class="nav-item nav-link ts-scroll" href="#my-skills">Skills</a>
                        <a class="nav-item nav-link ts-scroll" href="#portfolio">Portfolio</a>
                        <a class="nav-item nav-link ts-scroll" href="#testimonials">Clients</a>
                        <a class="nav-item nav-link ts-scroll mr-2" href="#form-contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
        <div id="ts-hero" class="ts-animate-hero-items">
            <div class="container position-relative h-100 ts-align__vertical">
                <div class="row w-100">
                    <div class="col-md-8">
                        <figure class="ts-social-icons mb-4">
                            <a href="#" class="mr-3">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="#" class="mr-3">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="mr-3">
                                <i class="fab fa-pinterest"></i>
                            </a>
                            <a href="#" class="mr-3">
                                <i class="fab fa-slack"></i>
                            </a>
                            <a href="#" class="mr-3">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </figure>

                        <h1>I am Jonathan Doe</h1>
                        <h1 class="ts-bubble-border">
                            <span class="ts-title-rotate">
                                <span class="active">Designer</span>
                                <span>Photographer</span>
                                <span>Creative Person</span>
                            </span>
                        </h1>

                    </div>
                </div>
                <a href="#my-services" class="ts-btn-effect position-absolute ts-bottom__0 ts-left__0 ts-scroll ml-3 mb-3">
                    <span class="ts-visible ts-circle__sm rounded-0 ts-bg-primary">
                        <i class="fa fa-arrow-down text-white"></i>
                    </span>
                    <span class="ts-hidden ts-circle__sm rounded-0">
                        <i class="fa fa-arrow-down text-white"></i>
                    </span>
                </a>

            </div>

            <div class="ts-background">
                <div class="ts-background-image" data-bg-image="assets/img/bg-hero.jpg"></div>
            </div>

        </div>

        <main id="ts-content">

            <section id="my-services" class="ts-block ts-xs-text-center pb-0">
                <div class="container">
                    <div class="ts-title text-center">
                        <h2>My Services</h2>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-xl-4">
                            <div class="ts-item" data-animate="ts-fadeInUp">
                                <div class="ts-item-content">
                                    <div class="ts-item-header">
                                        <figure class="icon">
                                            <img src="assets/img/icon-brushes.png" alt="" />
                                        </figure>

                                    </div>
                                    <div class="ts-item-body">
                                        <h4>Web Design</h4>
                                        <p class="mb-0">
                                            Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
                                        </p>
                                    </div>
                                    <div class="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" class="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-xl-4">
                            <div class="ts-item" data-animate="ts-fadeInUp" data-delay=".1s">
                                <div class="ts-item-content">
                                    <div class="ts-item-header">
                                        <figure class="icon">
                                            <img src="assets/img/icon-camera.png" alt="" />
                                        </figure>
                                    </div>
                                    <div class="ts-item-body">
                                        <h4>Photography</h4>
                                        <p class="mb-0">
                                            Fusce lorem ex, fringilla eget consequat ut, molestie sit amet nibh. Nullam vitae tincidunt
                                        </p>
                                    </div>
                                    <div class="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" class="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-xl-4">
                            <div class="ts-item" data-animate="ts-fadeInUp" data-delay=".2s">
                                <div class="ts-item-content">
                                    <div class="ts-item-header">
                                        <figure class="icon">
                                            <img src="assets/img/icon-video.png" alt="" />
                                        </figure>
                                    </div>
                                    <div class="ts-item-body">
                                        <h4>Video Editing</h4>
                                        <p class="mb-0">
                                            Aenean pretium nulla libero, vitae iaculis libero efficitur a. Fusce ut augue finibus quam
                                        </p>
                                    </div>
                                    <div class="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" class="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-xl-4">
                            <div class="ts-item" data-animate="ts-fadeInUp" data-delay=".3s">
                                <div class="ts-item-content">
                                    <div class="ts-item-header">
                                        <figure class="icon">
                                            <img src="assets/img/icon-pencil.png" alt="" />
                                        </figure>
                                    </div>
                                    <div class="ts-item-body">
                                        <h4>Copy Writing</h4>
                                        <p class="mb-0">
                                            Fusce lorem ex, fringilla eget consequat ut, molestie sit amet nibh. Nullam vitae tincidunt
                                        </p>
                                    </div>
                                    <div class="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" class="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-xl-4">
                            <div class="ts-item" data-animate="ts-fadeInUp" data-delay=".4s">
                                <div class="ts-item-content">
                                    <div class="ts-item-header">
                                        <figure class="icon">
                                            <img src="assets/img/icon-lcd.png" alt="" />
                                        </figure>
                                    </div>
                                    <div class="ts-item-body">
                                        <h4>Coding</h4>
                                        <p class="mb-0">
                                            Aenean pretium nulla libero, vitae iaculis libero efficitur a. Fusce ut augue finibus quam
                                        </p>
                                    </div>
                                    <div class="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" class="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-xl-4">
                            <div class="ts-item" data-animate="ts-fadeInUp" data-delay=".5s">
                                <div class="ts-item-content">
                                    <div class="ts-item-header">
                                        <figure class="icon">
                                            <img src="assets/img/icon-phone.png" alt="" />
                                        </figure>
                                    </div>
                                    <div class="ts-item-body">
                                        <h4>App Developing</h4>
                                        <p class="mb-0">
                                            Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
                                        </p>
                                    </div>
                                    <div class="ts-item-footer">
                                        <a href="#" data-toggle="modal" data-target="#modal" class="ts-link-arrow-effect">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-me" class="ts-block pb-4">
                <div class="container">
                    <div class="ts-title text-center">
                        <h2>About Me</h2>
                    </div>
                    <div class="row ts-align__vertical">
                        <div class="col-md-6">
                            <img src="assets/img/img-man-looking.jpg" alt="" class="mw-100 mb-5" />
                        </div>
                        <div class="col-md-6">
                            <h4 class="ts-bubble-border">Hi There</h4>
                            <p>
                                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum
                                ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta
                                sem turpis quis leo. Nulla in feugiat elit.
                            </p>
                            <dl class="ts-column-count-2">
                                <dt>Name:</dt>
                                <dd>Jonathan Doe</dd>
                                <dt>Phone:</dt>
                                <dd>+1 908-736-1801</dd>
                                <dt>Email:</dt>
                                <dd>hello@example.com</dd>
                                <dt>Twitter:</dt>
                                <dd>freelancer9</dd>
                            </dl>
                            <hr class="ts-hr-light mb-5" />
                            <a href="#contact" class="ts-btn-effect mr-2">
                                <span class="ts-visible btn btn-primary ts-btn-arrow">Contact Me</span>
                                <span class="ts-hidden btn btn-primary ts-btn-arrow" data-bg-color="#d44729">Contact Me</span>
                            </a>
                            <a href="#contact" class="ts-btn-effect mr-2">
                                <span class="ts-visible btn btn-outline-light">
                                    <i class="fa fa-download small mr-2"></i>
                                    Download CV
                                </span>
                                <span class="ts-hidden btn btn-light bg-white">
                                    <i class="fa fa-download small mr-2"></i>
                                    Download CV
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ts-block">
                <div class="container">
                    <div class="text-center px-5 pt-5 position-relative">
                        <h3 class="my-3">
                            Let’s Work Together On Your Next Project!
                        </h3>
                        <a href="#contact" class="btn btn-primary mr-2 ts-push-down__50 ts-has-talk-arrow">Hire Me Now!</a>
                        <div class="ts-background ts-opacity__20" data-bg-image="assets/img/bg-keyboard.jpg"></div>
                    </div>
                </div>
            </section>

            <section id="my-skills" class="ts-block pb-5">
                <div class="container">
                    <div class="ts-title text-center">
                        <h2>My Skills</h2>
                    </div>
                    <h4>Every Day is a  New Challenge</h4>
                    <div class="row">
                        <div class="col-md-6">
                            <p>
                                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum
                                ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta
                                sem turpis quis leo. Nulla in feugiat elit.
                            </p>
                            <p>
                                Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin
                                turpis in enim elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus
                                et ultrices posuere cubilia Curae
                            </p>
                            <a href="#contact" class="btn btn-outline-light mb-5">Contact Me</a>
                        </div>
                        <div class="col-md-6">
                            <div class="progress" data-progress-width="100%">
                                <h5 class="ts-progress-title">Webdesign</h5>
                                <figure class="ts-progress-value"></figure>
                                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress" data-progress-width="80%">
                                <h5 class="ts-progress-title">Photography</h5>
                                <figure class="ts-progress-value"></figure>
                                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress" data-progress-width="90%">
                                <h5 class="ts-progress-title">Coding</h5>
                                <figure class="ts-progress-value"></figure>
                                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress" data-progress-width="60%">
                                <h5 class="ts-progress-title">Copywriting</h5>
                                <figure class="ts-progress-value"></figure>
                                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ts-block pb-5" id="portfolio">
                <div class="container">
                    <div class="ts-title">
                        <h2>Portfolio</h2>
                    </div>
                    <div class="card-columns ts-gallery ts-column-count-4">
                        <a href="assets/img/img-work-01.png" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                            <div class="ts-gallery__item-description">
                                <h6 class="ts-opacity__50">Branding</h6>
                                <h4>Pehaz</h4>
                            </div>
                            <img src="assets/img/img-work-01.png" class="card-img" alt="" />
                        </a>
                        <a href="assets/img/img-work-02.png" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                            <div class="ts-gallery__image">
                                <div class="ts-gallery__item-description">
                                    <h6 class="ts-opacity__50">Webdesign</h6>
                                    <h4>Carilo</h4>
                                </div>
                                <img src="assets/img/img-work-02.png" class="card-img" alt="" />
                            </div>
                        </a>
                        <a href="assets/img/img-work-03.png" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                            <div class="ts-gallery__image">
                                <img src="assets/img/img-work-03.png" class="card-img" alt="" />
                                <div class="ts-gallery__item-description">
                                    <h6 class="ts-opacity__50">Typography</h6>
                                    <h4>Kali</h4>
                                </div>
                            </div>
                        </a>
                        <a href="assets/img/img-work-04.png" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                            <div class="ts-gallery__image">
                                <img src="assets/img/img-work-04.png" class="card-img" alt="" />
                                <div class="ts-gallery__item-description">
                                    <h6 class="ts-opacity__50">Identity</h6>
                                    <h4>Purity</h4>
                                </div>
                            </div>
                        </a>
                        <a href="assets/img/img-work-05.png" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                            <div class="ts-gallery__image">
                                <img src="assets/img/img-work-05.png" class="card-img" alt="" />
                                <div class="ts-gallery__item-description">
                                    <h6 class="ts-opacity__50">Coding</h6>
                                    <h4>SawMill</h4>
                                </div>
                            </div>
                        </a>
                        <a href="assets/img/img-work-06.png" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                            <div class="ts-gallery__image">
                                <img src="assets/img/img-work-06.png" class="card-img" alt="" />
                                <div class="ts-gallery__item-description">
                                    <h6 class="ts-opacity__50">Webdesign</h6>
                                    <h4>Browar</h4>
                                </div>
                            </div>
                        </a>
                        <a href="assets/img/img-work-07.png" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                            <div class="ts-gallery__image">
                                <img src="assets/img/img-work-07.png" class="card-img" alt="" />
                                <div class="ts-gallery__item-description">
                                    <h6 class="ts-opacity__50">Experiment</h6>
                                    <h4>Wood Tables</h4>
                                </div>
                            </div>
                        </a>
                        <a href="assets/img/img-work-08.png" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                            <div class="ts-gallery__image">
                                <img src="assets/img/img-work-08.png" class="card-img" alt="" />
                                <div class="ts-gallery__item-description">
                                    <h6 class="ts-opacity__50">Product Design</h6>
                                    <h4>Air Purifier</h4>
                                </div>
                            </div>
                        </a>
                        <a href="assets/img/img-work-10.png" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                            <div class="ts-gallery__image">
                                <img src="assets/img/img-work-10.png" class="card-img" alt="" />
                                <div class="ts-gallery__item-description">
                                    <h6 class="ts-opacity__50">App Developing</h6>
                                    <h4>Boombox</h4>
                                </div>
                            </div>
                        </a>
                        <a href="assets/img/img-work-11.png" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                            <div class="ts-gallery__image">
                                <img src="assets/img/img-work-11.png" class="card-img" alt="" />
                                <div class="ts-gallery__item-description">
                                    <h6 class="ts-opacity__50">3D Art</h6>
                                    <h4>The Deer</h4>
                                </div>
                            </div>
                        </a>
                        <a href="assets/img/img-work-09.png" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
                            <div class="ts-gallery__image">
                                <img src="assets/img/img-work-09.png" class="card-img" alt="" />
                                <div class="ts-gallery__item-description">
                                    <h6 class="ts-opacity__50">Rebranding</h6>
                                    <h4>Dafont</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section class="ts-block" data-bg-image="assets/img/bg-man-sitting.jpg">
                <div class="container ts-promo-numbers">
                    <div class="row">
                        <div class="col-sm-6 col-md-3">
                            <div class="ts-promo-number text-center">
                                <figure class="odometer" data-odometer-final="43">0</figure>
                                <h5>Clients</h5>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="ts-promo-number text-center">
                                <figure class="odometer" data-odometer-final="68">0</figure>
                                <h5>Projects</h5>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="ts-promo-number text-center">
                                <figure class="odometer" data-odometer-final="17">0</figure>
                                <h5>Awards</h5>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="ts-promo-number text-center">
                                <figure class="odometer" data-odometer-final="12">0</figure>
                                <h5>Years Experience</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" class="ts-block text-center pb-5">
                <div class="container">
                    <div class="ts-title">
                        <h2>Testimonials</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <div class="owl-carousel" data-owl-dots="1" data-owl-loop="1" data-animate="ts-fadeInUp">
                                <div class="slide mb-5">
                                    <figure class="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
                                        <i class="fa fa-quote-right"></i>
                                    </figure>
                                    <p class="ts-h5">
                                        In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus
                                        fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis
                                    </p>
                                    <div class="ts-circle__lg mb-3" data-bg-image="assets/img/person.jpg"></div>
                                    <h5>Jane Doe</h5>
                                    <h6 class="ts-opacity__40">Bristol Creative</h6>
                                </div>
                                <div class="slide mb-5">
                                    <figure class="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
                                        <i class="fa fa-quote-right"></i>
                                    </figure>
                                    <p class="ts-h5">
                                        Nam egestas porta posuere. Nunc velit lorem, vestibulum vitae massa nec, lacinia dictum
                                        ligula. Quisque scelerisque nec dolor id convallis. Vestibulum porta ipsum pretium
                                        turpis rhoncus, non fringilla ipsum mattis.
                                    </p>
                                    <div class="ts-circle__lg mb-3" data-bg-image="assets/img/person-02.jpg"></div>
                                    <h5>John Brown</h5>
                                    <h6 class="ts-opacity__40">ABC Architects</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="partners" class="ts-block py-4">
                <div class="container">
                    <div class="d-block d-md-flex justify-content-between align-items-center text-center ts-partners py-3">
                        <a href="#">
                            <img src="assets/img/logo-01-w.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="assets/img/logo-02-w.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="assets/img/logo-03-w.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="assets/img/logo-04-w.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="assets/img/logo-05-w.png" alt="" />
                        </a>
                    </div>
                </div>
            </section>

        </main>
        
        <footer id="ts-footer" class="mt-5">

            <section id="contact" class="ts-block ts-separate-bg-element" data-bg-image="assets/img/bg-man-wall.jpg" data-bg-image-opacity=".1">
                <div class="container">
                    <div class="ts-title text-center">
                        <h2 class="ts-bubble-border">Get In Touch</h2>
                    </div>
                    <div class="row ts-xs-text-center ">
                        <div class="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp">
                            <img src="assets/img/icon-pin.png" class="mb-4" alt="" />
                            <h5>Address</h5>
                            <div class="ts-opacity__50">
                                <figure class="mb-0">999 Carter Street</figure>
                                <figure>Sailor Springs, IL 62434</figure>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".1s">
                            <img src="assets/img/icon-phone-02.png" class="mb-4" alt="" />
                            <h5>Phone</h5>
                            <div class="ts-opacity__50">
                                <figure class="mb-0">+1 618-689-9409</figure>
                                <figure>+1 781-254-8437</figure>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".2s">
                            <img src="assets/img/icon-envelope.png" class="mb-4" alt="" />
                            <h5>Email</h5>
                            <div class="ts-opacity__50">
                                <figure class="mb-0">hello@example.com</figure>
                                <figure>support@example.com</figure>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".3s">
                            <img src="assets/img/icon-talk-bubble.png" class="mb-4" alt="" />
                            <h5>Facebook Chat</h5>
                            <div class="ts-opacity__50">
                                <figure>me.freelancer3</figure>
                            </div>
                        </div>
                    </div>

                    <div class="pt-5">
                        <div class="row">
                            <div class="col-md-4">
                                <h3>Let’s Connect</h3>
                                <div class="ts-column-count-sm-2">
                                    <a href="#" class="mb-3 d-flex text-white ts-align__vertical">
                                    <span class="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i class="fab fa-facebook-f"></i>
                                    </span>
                                        <span>Facebook</span>
                                    </a>
                                    <a href="#" class="mb-3 d-flex text-white ts-align__vertical">
                                    <span class="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i class="fab fa-twitter"></i>
                                    </span>
                                        <span>Twitter</span>
                                    </a>
                                    <a href="#" class="mb-3 d-flex text-white ts-align__vertical">
                                    <span class="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i class="fab fa-instagram"></i>
                                    </span>
                                        <span>Instagram</span>
                                    </a>
                                    <a href="#" class="mb-3 d-flex text-white ts-align__vertical">
                                    <span class="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i class="fab fa-pinterest-p"></i>
                                    </span>
                                        <span>Pinterest</span>
                                    </a>
                                    <a href="#" class="mb-3 d-flex text-white ts-align__vertical">
                                    <span class="ts-circle__xs border border-white ts-border-light mr-4">
                                        <i class="fab fa-skype"></i>
                                    </span>
                                        <span>Skype</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <h3>Send Me a Message</h3>
                                <form id="form-contact" method="post" class="clearfix ts-form ts-form-email" data-php-path="assets/php/email.php">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <label for="form-contact-name">Name *</label>
                                                <input type="text" class="form-control" id="form-contact-name" name="name" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <label for="form-contact-email">Email *</label>
                                                <input type="email" class="form-control" id="form-contact-email" name="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="form-contact-subject">Subject *</label>
                                        <input type="email" class="form-control" id="form-contact-subject" name="subject" placeholder="Subject" required />
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="form-contact-message">Message *</label>
                                                <textarea class="form-control" id="form-contact-message" rows="5" name="message" placeholder="Message" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group clearfix">
                                        <button type="submit" class="btn btn-primary float-right ts-btn-arrow" id="form-contact-submit">Send a Message</button>
                                    </div>
                                    <div class="form-contact-status"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-dark bg-white">
                <div class="container py-3 position-relative">
                    <small>© 2018 ThemeStarz, All Rights Reserved</small>
                    <a href="#page-top" class="ts-circle__xs rounded-0 bg-dark position-absolute ts-right__0 ts-top__0 ts-push-up__50 ts-scroll">
                        <i class="fa fa-arrow-up text-white"></i>
                    </a>
                </div>
            </div>
        </footer>

        <div class="modal fade text-dark" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div class="modal-content border-0 rounded-0">
                  <div class="modal-header bg-light px-5 pt-0 pb-5">
                      <div class="ts-title mb-0">
                          <figure class="ts-circle__md bg-dark rounded-0">
                              <img src="assets/img/icon-brushes.png" alt="" />
                          </figure>
                          <h4 class="mb-0">Web Design</h4>
                      </div>

                      <button type="button" class="close position-absolute ts-top__0 ts-right__0 m-2" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" class="text-white">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body p-5">
                      <h5 class="mb-4">Latest Works</h5>
                      <div class="owl-carousel" data-owl-dots="1">
                          <div class="slide">
                              <div class="container-fluid">
                                  <div class="row">
                                      <div class="col-md-4">
                                          <img src="assets/img/img-work-detail-01.jpg" alt="" />
                                      </div>
                                      <div class="col-md-8">
                                          <h4 class="mb-3">Creative Lights</h4>
                                          <p>
                                              In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus
                                              fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est
                                              ultricies.
                                          </p>
                                          <a href="#" class="mb-4 text-dark d-block">
                                              <i class="fa fa-globe ts-opacity__50 mr-2"></i>
                                              www.example.com
                                          </a>
                                          <hr />
                                          <h6>Services Included</h6>
                                          <ul class="list-unstyled ts-opacity__50">
                                              <li>Design</li>
                                              <li>Coding</li>
                                              <li>SEO Optimization</li>
                                              <li>Hosting</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="slide">
                              <div class="container-fluid">
                                  <div class="row">
                                      <div class="col-md-4">
                                          <img src="assets/img/img-work-detail-02.jpg" alt="" />
                                      </div>
                                      <div class="col-md-8">
                                          <h4 class="mb-3">Wood Ceiling</h4>
                                          <p>
                                              Phasellus volutpat velit nec purus elementum feugiat. Nunc feugiat fringilla turpis.
                                              Nam sed facilisis sem. Vestibulum vitae orci nec purus fringilla condimentum.
                                              Pellentesque id augue rhoncus, finibus sapien ut, commodo eros. Maecenas in nibh
                                              augue. Nunc rutrum blandit massa eu aliquet. Nulla facilisi. Aenean luctus ipsum
                                              in orci sagittis auctor vel sit amet ex
                                          </p>
                                          <a href="#" class="mb-4 text-dark d-block">
                                              <i class="fa fa-globe ts-opacity__50 mr-2"></i>
                                              www.example.com
                                          </a>
                                          <hr />
                                          <h6>Services Included</h6>
                                          <ul class="list-unstyled ts-opacity__50">
                                              <li>Design</li>
                                              <li>Coding</li>
                                              <li>SEO Optimization</li>
                                              <li>Hosting</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
