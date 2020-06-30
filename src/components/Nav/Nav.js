import React from 'react';

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
              <div className="container">
                  <a className="navbar-brand ts-push-down__50 position-absolute ts-bottom__0 bg-white pb-0 ts-z-index__1 ts-scroll" href="#page-top">
                      <img src="./assets/img/logo.png" alt="" />
                  </a>
                  <span className="navbar-toggler"></span>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav d-block d-lg-flex ml-auto text-right">
                          <a className="nav-item nav-link ts-scroll" href="#my-services">Skillset</a>
                          <a className="nav-item nav-link ts-scroll" href="#about-me">About Me</a>
                          <a className="nav-item nav-link ts-scroll" href="#portfolio">Portfolio</a>
                      </div>
                  </div>
              </div>
          </nav>
    )
}