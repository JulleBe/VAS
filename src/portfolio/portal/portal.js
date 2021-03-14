
import React from 'react';
import {Link as Router} from 'react-router-dom'; 
import './portal.scss';
import videoBackdrop from '../../assets/video/PORTFOLIO_VIDEO_START.mp4';
import photoBackdrop from '../../assets/video/PORTFOLIO_PHOTO_START.mp4';
import videoPoster from '../../assets/stills/video_still.jpg';
import photoPoster from '../../assets/stills/photo_still.jpg';


function PortfolioPortal() {
    const mobileWidth = 850;
    function changeGridSize(e){
        let photoSelector = document.getElementById('photoSelector');
        let videoSelector = document.getElementById('videoSelector');
        let videoPlayer = document.getElementById('videoPlayer');
        let photoPlayer = document.getElementById('photoPlayer');

        if(e.target.id === "photoSelector"){
            photoPlayer.play();
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
            if(window.innerWidth >= mobileWidth) {
                photoSelector.style.width = "60vw";
                videoSelector.style.width = "40vw";
        
            }else {
                photoSelector.style.height = "60vh";
                videoSelector.style.height = "40vh";
            }
           
        }
        else if(e.target.id === "videoSelector") {
            videoPlayer.play();
            photoPlayer.pause();
            photoPlayer.currentTime = 0;
            if(window.innerWidth >= mobileWidth) {
                photoSelector.style.width = "40vw";
                videoSelector.style.width = "60vw";
            }else {
                photoSelector.style.height = "40vh";
                videoSelector.style.height = "60vh";
            } 
        }
    }

    function resetGridSize(){
        let photoSelector = document.getElementById('photoSelector');
        let videoSelector = document.getElementById('videoSelector');
        let videoPlayer = document.getElementById('videoPlayer');
        let photoPlayer = document.getElementById('photoPlayer');

        videoPlayer.pause();
        videoPlayer.currentTime = 0;

        photoPlayer.pause();
        photoPlayer.currentTime = 0;
        if(window.innerWidth >= mobileWidth) {
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
                <video autoPlay={window.innerWidth <= mobileWidth} muted loop playsinline="true" controls="false" id="photoPlayer" poster={photoPoster}>
                    <source src={photoBackdrop} type="video/mp4"></source>
                </video>
            </Router>
            <Router 
                id="videoSelector"
                to="/portfolio/video"
                className="portal_Link"
                onMouseEnter={changeGridSize}
                onMouseLeave={resetGridSize} >
                <h2 className="portal_Title"
                    id="portfolio_videoText">
                    Video
                    <span className="portal_TitleOutline">Video</span>
                </h2>
                <video autoPlay={window.innerWidth <= mobileWidth} muted loop playsinline="true" controls="false" id="videoPlayer" poster={videoPoster}>
                    <source src={videoBackdrop} type="video/mp4"></source>
                </video>
            </Router>
        </div>
    );
  }
  
  export default PortfolioPortal;
  