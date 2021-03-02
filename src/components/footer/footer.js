import React from 'react';
import {Link} from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import footerLogo from '../../assets/logo/VAS-ICON_WHITE.svg';
import './footer.scss';

function Footer () {
    const EMAIL = "hello@svenvanalboom.com";

    const mailString = "mailto:" + EMAIL;
    return (
        <footer>
            <div 
            className="footerContainer"
           >
                <div className="footer_logoContainer">
                    <img 
                    src={footerLogo} 
                    alt="VAS - Pictures logo"  
                    data-aos="fade-down" />
                </div>
                <div 
                    className="footer_socialsContainer"
                   >
                    <ul className="footer_socialsList">
                        <li 
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-once="true">
                            <a href={mailString} target="_blank" rel="noreferrer">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.866" height="11.385" viewBox="0 0 16.866 11.385">
                                        <path id="Icon_zocial-email" data-name="Icon zocial-email" d="M.072,14.445V5.076q0-.016.049-.309L5.634,9.484.137,14.77a1.378,1.378,0,0,1-.065-.325ZM.8,4.117a.7.7,0,0,1,.276-.049H15.93a.921.921,0,0,1,.293.049L10.693,8.85l-.732.586L8.513,10.622,7.066,9.435,6.334,8.85ZM.82,15.4l5.546-5.318,2.147,1.74,2.147-1.74L16.206,15.4a.781.781,0,0,1-.276.049H1.08A.737.737,0,0,1,.82,15.4Zm10.572-5.92,5.5-4.717a.971.971,0,0,1,.049.309v9.368a1.247,1.247,0,0,1-.049.325Z" transform="translate(-0.072 -4.068)" fill="#fff"/>
                                    </svg>
                                </span>
                                {EMAIL}
                            </a>
                        </li>
                        <li 
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-once="true"
                            data-aos-anchor-placement="top top">
                            <a href="https://www.instagram.com/shotbyvas/" target="_blank" rel="noreferrer">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19.514" height="19.51" viewBox="0 0 19.514 19.51">
                                        <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M9.754,6.991a5,5,0,1,0,5,5A4.994,4.994,0,0,0,9.754,6.991Zm0,8.254a3.252,3.252,0,1,1,3.252-3.252,3.258,3.258,0,0,1-3.252,3.252Zm6.373-8.459a1.167,1.167,0,1,1-1.167-1.167A1.164,1.164,0,0,1,16.128,6.786ZM19.441,7.97a5.774,5.774,0,0,0-1.576-4.088,5.812,5.812,0,0,0-4.088-1.576c-1.611-.091-6.439-.091-8.05,0A5.8,5.8,0,0,0,1.639,3.878,5.793,5.793,0,0,0,.063,7.966c-.091,1.611-.091,6.439,0,8.05A5.774,5.774,0,0,0,1.639,20.1a5.819,5.819,0,0,0,4.088,1.576c1.611.091,6.439.091,8.05,0A5.774,5.774,0,0,0,17.865,20.1a5.812,5.812,0,0,0,1.576-4.088c.091-1.611.091-6.434,0-8.045ZM17.36,17.744A3.292,3.292,0,0,1,15.505,19.6c-1.284.509-4.332.392-5.751.392S5.283,20.1,4,19.6a3.292,3.292,0,0,1-1.855-1.855c-.509-1.284-.392-4.332-.392-5.751s-.113-4.471.392-5.751A3.292,3.292,0,0,1,4,4.387C5.287,3.878,8.335,4,9.754,4s4.471-.113,5.751.392A3.292,3.292,0,0,1,17.36,6.242c.509,1.284.392,4.332.392,5.751S17.869,16.464,17.36,17.744Z" transform="translate(0.005 -2.238)" fill="#fff"/>
                                    </svg>

                                </span>
                                shotbyvas
                            </a>
                        </li>
                        <li
                          data-aos="fade-right"
                          data-aos-delay="400"
                          data-aos-once="true"
                          data-aos-anchor-placement="top top">
                            <a href="https://www.facebook.com/VAS-Pictures-170834483559029/" target="_blank" rel="noreferrer">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8.85" height="16.524" viewBox="0 0 8.85 16.524">
                                     <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M9.88,9.295l.459-2.99H7.469V4.364A1.5,1.5,0,0,1,9.155,2.748h1.3V.2A15.908,15.908,0,0,0,8.144,0,3.651,3.651,0,0,0,4.236,4.025V6.3H1.609v2.99H4.236v7.229H7.469V9.295Z" transform="translate(-1.609)" fill="#fff"/>
                                    </svg>
                                </span>
                                VAS - Pictures
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer_miscContainer"
                    data-aos="fade-right"
                    data-aos-delay="600"
                    data-aos-once="true"
                    data-aos-anchor-placement="top top">
                    <p>&copy; 2020 VAS-Pictures - All rights reserved</p>
                    <div className="footer_miscLinks">
                        <Link to="/privacy-statement"><p>Privacy statement</p></Link>
                        <p className="footer_credits">Website by <a href='http://www.julle.be/' target="_blank" rel="noreferrer">Julle</a></p>
                    </div>
                   
                </div>
                <div className="footer_sitemapContainer">
                    <ul className="footer_sitemapLinks">
                        <li   
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-once="true"
                            data-aos-anchor-placement="top top"><Link to="/">home</Link></li>
                        <li 
                          data-aos="fade-right"
                          data-aos-delay="400"
                          data-aos-once="true"
                          data-aos-anchor-placement="top top"><Link to="/portfolio">portfolio</Link></li>
                        <li
                          data-aos="fade-right"
                          data-aos-delay="500"
                          data-aos-once="true"
                          data-aos-anchor-placement="top top"><NavHashLink smooth to="/#contact">contact</NavHashLink></li>
                    </ul>
                </div>
            
            </div>
        </footer>
    )
}

export default Footer;