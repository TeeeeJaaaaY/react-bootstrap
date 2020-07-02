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
                        <img src="./assets/img/cressing-profile-5.jpg" alt="Tom James, Cressing FC" className="mw-100 mb-5" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="ts-bubble-border">Hi There</h4>
                        <p>
                        I'm a Full Stack Developer with 9 years agency experience.
                        Involved in all stages of the development process from planning, technical specifications, frontend, backend, infrastructure and deployment. 
                        Using various programming languages and technologies. Competent server provisioning via command line, continuous integration/deployment and git workflow.
                        </p>

                        <p>Experienced in the development of bespoke WordPress themes, heavily involved in the build process of 100s of themes over the last nine years.</p>

                        <p>
                        My hobbies and interests include playing football for a local team on a Saturday including involvement on the committee, golf, all things tech, 00's hiphop and R&B and squeezing in the odd hour or two gaming.
                        </p>
                        <dl className="ts-column-count-2">
                            <dt>Name:</dt>
                            <dd>Thomas James</dd>
                            <dt>Email:</dt>
                            <dd><a href="mailto:tom@teeeejaaaay.co.uk">tom@teeeejaaaay.co.uk</a></dd>
                            <dt>Twitter:</dt>
                            <dd>TeeeeJaaaaY</dd>
                            <dt>linkedIn:</dt>
                            <dd><a href="https://www.linkedin.com/in/tom-james-b492b443/">Tom James</a></dd>
                        </dl>
                        <hr className="ts-hr-light mb-5" />
                        <a href="./assets/tom-james-full-stack-engineer-CV.pdf" target="_blank" rel="noreferrer" className="ts-btn-effect mr-2">
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