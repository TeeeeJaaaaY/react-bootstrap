import React from 'react';

export const PortfolioItem = () => {
    return (
        <a href="./assets/img/img-work-01.png" className="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
            <div className="ts-gallery__item-description">
                <h6 className="ts-opacity__50">Branding</h6>
                <h4>Pehaz</h4>
            </div>
            <img src="./assets/img/img-work-01.png" className="card-img" alt="" />
        </a>
    )
}