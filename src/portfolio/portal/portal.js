
import React from 'react';
import {Link as Router} from 'react-router-dom'; 
import './portal.scss';

function PortfolioPortal() {

    function changeGridSize(e){
        let portal = document.getElementById('portfolioPortalContainer')
        if(e.target.id === "photoSelector"){
           portal.classList.remove('videoHover')
            portal.classList.add('photoHover')
             
        }
        else if(e.target.id === "videoSelector") {
           portal.classList.remove('photoHover')
            portal.classList.add('videoHover')
        }
       
    }

    function resetGridSize(){
        let portal = document.getElementById('portfolioPortalContainer')

        portal.classList.remove('photoHover')
        portal.classList.remove('videoHover')
    }
    
    return (
        <div className="portfolioPortal" id="portfolioPortalContainer">
            <Router 
                id="photoSelector"
                to="/portfolio/photo"
                className="portal_Link"
                onMouseEnter={changeGridSize}
                onMouseLeave={resetGridSize}
            >
            <h2 className="portal_Title"
                > 
                Photo 
                <span className="portal_TitleOutline">Photo</span>
                </h2>
            </Router>
            <Router 
                id="videoSelector"
                to="/portfolio/video"
                className="portal_Link"
                onMouseEnter={changeGridSize}
                onMouseLeave={resetGridSize}
            >
            <h2 className="portal_Title"
               >
                    Video
                <span className="portal_TitleOutline">Video</span></h2>
            </Router>
        </div>
    );
  }
  
  export default PortfolioPortal;
  