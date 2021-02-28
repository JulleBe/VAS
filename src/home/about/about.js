import React from 'react';
import { Link } from 'react-scroll';
import './about.scss';
import {useHistory} from 'react-router-dom';
import profileImage from '../../assets/images/sven.jpg';
import Title from '../../components/sectionTitle';
import Button from '../../components/buttons';

function About() {
    let history = useHistory();
    function goToPhoto() {
        history.push("/portfolio/photo");
    }

    function goToVideo(){
        history.push("/portfolio/video");
    }
    return (
      <section id="home_about" className="home_section">  
        <div className="sectionContainer">
            <div className="aboutContainer">
                    <h1 
                        className="aboutTitleText" 
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-once="true">
                        Meet the
                    </h1>

                   <Title text="Creative" className="creativeText"></Title>

             
                    <div className="introImageContainer">
                        <img src={profileImage} alt="Sven Van Alboom"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        data-aos-once="true"
                        />
                    </div>
                    <div className="introTextContainer"
                     data-aos="zoom-out" 
                     data-aos-delay="600"
                     data-aos-once="true">
                        <p>    	
                            Hey! I’m a 22 year old photo/videographer who is based in Belgium though I dream of capturing the world. I love to shoot photos and films to make sure our memories last forever.
                        </p>
                    </div>
                

                <div className="aboutDescription"
                data-aos="zoom-out"
                data-aos-delay="600"
                data-aos-once="true">
                    <p>
                    I would love to shoot your corporate film, capture your wedding day, create an amazing aftermovie or literally anything else that comes to your mind.

                    </p>
                    <p>
                    I love to have a laugh on the set and get to know the people I work with, but I know when it’s time to continue the work and be professional.
                    </p>
                    <Link to="home_contact" smooth="true">
                        <p>Let's get in touch</p>
                    </Link>
                </div>

                <div className="aboutCTA" 
                data-aos="zoom-out"
                data-aos-delay="600"
                data-aos-once="true">
                    <h3 className="aboutCTA_title">See my work</h3>
                    <div className="aboutCTA_btnsContainer">
                       <Button text="Photo" function={goToPhoto} />
                       <Button text="Video" function={goToVideo}/>
                    </div>
                </div>
            </div>
        </div>
           
      </section>
    );
  }
  
  export default About;
  