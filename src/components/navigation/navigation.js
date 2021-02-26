import React from 'react';
import {Link} from 'react-router-dom';
import '../../style/components/mobile_navigation.scss';
import '../../style/components/navigation.scss';

function Navigation (){
    function openMenu() {
        let menu = document.getElementById('nav_links')

        menu.style.right = '0%';
    }
    function closeMenu() {
        
        let menu = document.getElementById('nav_links')
        if(window.innerWidth <= 850){
            menu.style.right = '-100%';
        }
       
    }

    function goToPortfolio(){
        
        localStorage.setItem('HAS_CHOSEN', false);
        localStorage.setItem('GALLERY_CHOICE', null)
        closeMenu()
    }
    return (
        <nav>
            <div id="nav_persistent">
                <section id="nav_logo">
                    <div className="nav_logoContainer">
                        <div className="nav_logoWrapper">

                        </div>
                        
                    </div>
                </section>
                <section id="nav_menuBtn">
                    <div className="nav_menuBtnContainer" onClick={openMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 30 21">
                            <path id="Path_17" data-name="Path 17" d="M4.5,18h27" transform="translate(-3 -7.5)" fill="none" stroke="#1d2327" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            <path id="Path_18" data-name="Path 18" d="M4.5,9h27" transform="translate(-3 -7.5)" fill="none" stroke="#1d2327" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            <path id="Path_19" data-name="Path 19" d="M4.5,27H25.523" transform="translate(2.977 -7.5)" fill="none" stroke="#1d2327" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        </svg>

                    </div>
                </section>
            </div>
            <div id="nav_links">
                <div className="nav_pagesWrapper"> 
                    <section id="nav_pages">
                        <ul className="nav_linksList">
                            <Link to="/" onClick={closeMenu}>
                                <li className="nav_linksStyle">home</li>
                            </Link>
                            <Link to="/portfolio" onClick={goToPortfolio}>
                                <li className="nav_linksStyle">portfolio</li>
                            </Link>
                            <Link to="/#contact" onClick={closeMenu}>
                                <li className="nav_linksStyle">contact</li>
                            </Link>
                        </ul>
                    </section>
                    <section id="nav_social">
                        <ul>
                            <a href="https://www.instagram.com/shotbyvas/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 19.514 19.51">
                                    <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M9.754,6.991a5,5,0,1,0,5,5A4.994,4.994,0,0,0,9.754,6.991Zm0,8.254a3.252,3.252,0,1,1,3.252-3.252,3.258,3.258,0,0,1-3.252,3.252Zm6.373-8.459a1.167,1.167,0,1,1-1.167-1.167A1.164,1.164,0,0,1,16.128,6.786ZM19.441,7.97a5.774,5.774,0,0,0-1.576-4.088,5.812,5.812,0,0,0-4.088-1.576c-1.611-.091-6.439-.091-8.05,0A5.8,5.8,0,0,0,1.639,3.878,5.793,5.793,0,0,0,.063,7.966c-.091,1.611-.091,6.439,0,8.05A5.774,5.774,0,0,0,1.639,20.1a5.819,5.819,0,0,0,4.088,1.576c1.611.091,6.439.091,8.05,0A5.774,5.774,0,0,0,17.865,20.1a5.812,5.812,0,0,0,1.576-4.088c.091-1.611.091-6.434,0-8.045ZM17.36,17.744A3.292,3.292,0,0,1,15.505,19.6c-1.284.509-4.332.392-5.751.392S5.283,20.1,4,19.6a3.292,3.292,0,0,1-1.855-1.855c-.509-1.284-.392-4.332-.392-5.751s-.113-4.471.392-5.751A3.292,3.292,0,0,1,4,4.387C5.287,3.878,8.335,4,9.754,4s4.471-.113,5.751.392A3.292,3.292,0,0,1,17.36,6.242c.509,1.284.392,4.332.392,5.751S17.869,16.464,17.36,17.744Z" transform="translate(0.005 -2.238)" fill="#1b2328"/>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/VAS-Pictures-170834483559029/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11.938" height="22.29" viewBox="0 0 11.938 22.29">
                                    <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M12.765,12.538,13.384,8.5H9.514V5.886a2.017,2.017,0,0,1,2.274-2.179h1.76V.273A21.459,21.459,0,0,0,10.424,0C7.236,0,5.153,1.932,5.153,5.43V8.5H1.609v4.034H5.153V22.29H9.514V12.538Z" transform="translate(-1.609)" fill="#1b2328"/>
                                </svg>
                            </a>
                        </ul>
                    </section>
                    <section id="nav_closeBtn" onClick={closeMenu}>
                        <svg id="Icon_material-close" data-name="Icon material-close" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                            <path id="Icon_material-close-2" data-name="Icon material-close" d="M37.5,10.521,34.479,7.5,22.5,19.479,10.521,7.5,7.5,10.521,19.479,22.5,7.5,34.479,10.521,37.5,22.5,25.521,34.479,37.5,37.5,34.479,25.521,22.5Z" transform="translate(-7.5 -7.5)" fill="#1b2328" opacity="0.35"/>
                        </svg>
                    </section>
                </div>
            </div>
        </nav>
    )
};

export default Navigation;