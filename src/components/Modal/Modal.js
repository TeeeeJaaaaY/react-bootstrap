import React from 'react';

export const Modal = () => {
    return (
        <div className="modal fade text-dark" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content border-0 rounded-0">
                    <div className="modal-header bg-light px-5 pt-0 pb-5">
                        <div className="ts-title mb-0">
                            <figure className="ts-circle__md bg-dark rounded-0">
                                <img src="./assets/img/icon-brushes.png" alt="" />
                            </figure>
                            <h4 className="mb-0">Web Design</h4>
                        </div>

                        <button type="button" className="close position-absolute ts-top__0 ts-right__0 m-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="text-white">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-5">
                        <h5 className="mb-4">Latest Works</h5>
                        <div className="owl-carousel" data-owl-dots="1">
                            <div className="slide">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="./assets/img/img-work-detail-01.jpg" alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <h4 className="mb-3">Creative Lights</h4>
                                            <p>
                                                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus
                                                fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est
                                                ultricies.
                                            </p>
                                            <a href="#" className="mb-4 text-dark d-block">
                                                <i className="fa fa-globe ts-opacity__50 mr-2"></i>
                                                www.example.com
                                            </a>
                                            <hr />
                                            <h6>Services Included</h6>
                                            <ul className="list-unstyled ts-opacity__50">
                                                <li>Design</li>
                                                <li>Coding</li>
                                                <li>SEO Optimization</li>
                                                <li>Hosting</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="./assets/img/img-work-detail-02.jpg" alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <h4 className="mb-3">Wood Ceiling</h4>
                                            <p>
                                                Phasellus volutpat velit nec purus elementum feugiat. Nunc feugiat fringilla turpis.
                                                Nam sed facilisis sem. Vestibulum vitae orci nec purus fringilla condimentum.
                                                Pellentesque id augue rhoncus, finibus sapien ut, commodo eros. Maecenas in nibh
                                                augue. Nunc rutrum blandit massa eu aliquet. Nulla facilisi. Aenean luctus ipsum
                                                in orci sagittis auctor vel sit amet ex
                                            </p>
                                            <a href="#" className="mb-4 text-dark d-block">
                                                <i className="fa fa-globe ts-opacity__50 mr-2"></i>
                                                www.example.com
                                            </a>
                                            <hr />
                                            <h6>Services Included</h6>
                                            <ul className="list-unstyled ts-opacity__50">
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
    )
}