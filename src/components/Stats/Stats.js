import React from 'react';

export const Stats = () => {
    return (
        <section className="ts-block" data-bg-image="./assets/img/bg-man-sitting.jpg">
            <div className="container ts-promo-numbers">
                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div className="ts-promo-number text-center">
                            <figure className="odometer" data-odometer-final="100+">0</figure>
                            <h5>Projects</h5>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="ts-promo-number text-center">
                            <figure className="odometer" data-odometer-final="47">0</figure>
                            <h5>WordPress Custom Themes</h5>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="ts-promo-number text-center">
                            <figure className="odometer" data-odometer-final="36">0</figure>
                            <h5>Servers provisioned</h5>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="ts-promo-number text-center">
                            <figure className="odometer" data-odometer-final="9">0</figure>
                            <h5>Years Experience</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}