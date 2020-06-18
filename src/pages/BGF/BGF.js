import React from 'react';
import { Nav } from '../../components/Nav/Nav';
import { Hero } from '../../components/Hero/Hero';

export const BGF = () => {
    return (
        <>
            <div className="ts-page-wrapper" id="page-top">
                <Nav />
                <Hero />
            </div>
        </>
    )
}