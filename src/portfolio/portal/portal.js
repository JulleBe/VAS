
import React from 'react';
import {Link as Router} from 'react-router-dom'; 
import './portal.scss';

let photoSelector = document.getElementById('photoSelector');
let videoSelector =document.getElementById('videoSelector')
function PortfolioPortal() {
    

   
    function changeGridSize(e){
      
        if(e.target.id === "photoSelector"){
            if(window.innerWidth >= 850) {
                photoSelector.style.width = "60vw";
                videoSelector.style.width = "40vw";
        
            }else {
                photoSelector.style.height = "60vh";
                videoSelector.style.height = "40vh";
            }
           
        }
        else if(e.target.id === "videoSelector") {
           
            if(window.innerWidth >= 850) {
                photoSelector.style.width = "40vw";
                videoSelector.style.width = "60vw";
            }else {
                photoSelector.style.height = "40vh";
                videoSelector.style.height = "60vh";
            } 
        }
    }

    function resetGridSize(){
       
        if(window.innerWidth >= 850) {
            photoSelector.style.width = "50vw";
            videoSelector.style.width = "50vw";
            photoSelector.style.height = "100vh";
            videoSelector.style.height = "100vh";
        }else {
            photoSelector.style.height = "50vh";
            videoSelector.style.height = "50vh";
            photoSelector.style.width = "100vw";
            videoSelector.style.width = "100vw";
        } 
       
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
             id="portfolio_photoText"> 
                Photo 
                <span className="portal_TitleOutline">Photo</span>
                </h2>
            </Router>
            <Router 
                id="videoSelector"
                to="/portfolio/video"
                className="portal_Link"
                onMouseEnter={changeGridSize}
                onMouseLeave={resetGridSize} >
            <h2 className="portal_Title"
                id="portfolio_videoText"
               >
                    Video
                <span className="portal_TitleOutline">Video</span></h2>
            </Router>
        </div>
    );
  }
  
  export default PortfolioPortal;
  