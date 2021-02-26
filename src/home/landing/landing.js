import React from 'react';  
import './landing.scss';
import {Link} from 'react-scroll';
import backdrop from '../../assets/video/backdrop.mp4';
import whiteLogo from '../../assets/logo/VAS-ICON_WHITE.svg';

function Landing() {
    return (
      <section id="home_landing" className="home_section">  
        <div className="backgroundVideo">
            <video autoPlay={true} muted loop={true} id="backdropVideo" >
                <source src={backdrop} type="video/mp4"/>
            </video>
        </div>
        <div className="landingContent">
            <div className="landing_centerLogo">
             <img src={whiteLogo} alt="VAS logo in White" 
             data-aos="zoom-in"
             data-aos-mirror="true"/>
            </div>
            <div className="nextSectionBtn">
                <Link to="home_about" smooth="true"> 
                    <p>meet the creative</p>
                    <div className="nextSectionBtnWrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.485" height="18.207" viewBox="0 0 29.485 18.207">
                            <path id="Icon_material-expand-more" data-name="Icon material-expand-more" d="M35.021,12.885,23.742,24.138,12.464,12.885,9,16.349,23.742,31.092,38.485,16.349Z" transform="translate(-9 -12.885)" fill="#fff"/>
                        </svg>
                    </div>
                </Link>
                   
            </div>
        </div>
      </section>
    );
  }
  
  export default Landing;
  