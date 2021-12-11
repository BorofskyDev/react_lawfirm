import React from 'react';
import { Button } from '../../Button';
import { NavLink } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import './HeroSection.css';
import './HomeSocial.css';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, 
    headline, description, img, alt, imgStart, 
    headerText, socialText, pitchText,

}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className='container'>
                    <div className="row home__hero-row" style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper" >
                                <img src={img} alt={alt} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-menu'>
                <h1 className='social-header'>{headerText}</h1>
                <h3 className='smaller-header'>{socialText}</h3>
                <p className='social-text'>{pitchText}</p>
                <ul>
                    <li>
                        <NavLink to='#' >{<FaFacebook />}</NavLink>
                        <NavLink to='#' >{<FaTwitter />}</NavLink>
                        <NavLink to='#' >{<FaInstagram />}</NavLink>
                        <NavLink to='#' >{<FaYoutube />}</NavLink>
                        <NavLink to='#' >{<FaLinkedin />}</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default HeroSection
