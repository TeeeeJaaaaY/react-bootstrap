import React from 'react';

export const Service = () => {
    return (
        <div className="col-sm-6 col-md-4 col-xl-4">
            <div className="ts-item" data-animate="ts-fadeInUp" data-delay=".5s">
                <div className="ts-item-content">
                    <div className="ts-item-header">
                        <figure className="icon">
                            <img src="./assets/img/icon-phone.png" alt="" />
                        </figure>
                    </div>
                    <div className="ts-item-body">
                        <h4>App Developing</h4>
                        <p className="mb-0">
                            Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
                        </p>
                    </div>
                    <div className="ts-item-footer">
                        <a href="#" data-toggle="modal" data-target="#modal" className="ts-link-arrow-effect">
                            <span>Read More</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}