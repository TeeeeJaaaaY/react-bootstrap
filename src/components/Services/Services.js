import React from 'react';

export const Services = () => {
    return (
        <section id="my-services" className="ts-block ts-xs-text-center pb-0">
            <div className="container">
                <div className="ts-title text-center">
                    <h2>Skillset</h2>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-xl-4">
                        <div className="ts-item" data-animate="ts-fadeInUp">
                            <div className="ts-item-content">
                                <div className="ts-item-header">
                                    <p className="service-icon">
                                        <i className="fas fa-code"></i>
                                    </p>
                                </div>
                                <div className="ts-item-body">
                                    <h4>Web Development</h4>
                                    <p className="mb-0">
                                        Experienced WordPress Developer creating many bespoke custom themes, Web app experience using the Laravel framework, Familiar with modern technologies and standard practices. Well versed in mobile first frontend development using BEM, SCSS, Gulp/Webkit.
                                    </p>
                                </div>
                                <div className="ts-item-footer">
                                    <a href="#portfolio" className="ts-link-arrow-effect">
                                        <span>Portfolio</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-4">
                        <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".1s">
                            <div className="ts-item-content">
                                <div className="ts-item-header">
                                    <p className="service-icon">
                                        <i className="fas fa-terminal"></i>
                                    </p>
                                </div>
                                <div className="ts-item-body">
                                    <h4>DevOps</h4>
                                    <p className="mb-0">
                                        Provisioned, managed and maintained multiple Digital Ocean droplets. Created a continuous integration script from gitlab to WPEngine. Handled SSL and security integration. DNS management and vHost configurations for Nginx and Apache
                                    </p>
                                </div>
                                <div className="ts-item-footer">
                                    <a href="#portfolio" className="ts-link-arrow-effect">
                                        <span>Portfolio</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-4">
                        <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".2s">
                            <div className="ts-item-content">
                                <div className="ts-item-header">
                                    <p className="service-icon">
                                        <i className="fas fa-tasks"></i>
                                    </p>
                                </div>
                                <div className="ts-item-body">
                                    <h4>Project Management</h4>
                                    <p className="mb-0">
                                        Project management experience including the planning and development of new and existing websites, tecnical specifications, sprint planning, code reviews and mentoring.
                                    </p>
                                </div>
                                <div className="ts-item-footer">
                                    <a href="#portfolio" className="ts-link-arrow-effect">
                                        <span>Portfolio</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}