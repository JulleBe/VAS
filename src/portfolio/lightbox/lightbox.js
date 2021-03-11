import React, {useEffect, useState} from 'react';

import "../lightbox/lightbox.scss";
import { useHistory } from 'react-router-dom';
import {useParams } from 'react-router-dom';
import {motion} from 'framer-motion';
import {gql, useQuery } from '@apollo/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const pageVariants = {
    in: {
        opacity: 1,
        scale: 1
    },
    out: {
        opacity: 0,

        scale: 0.5
    }
}

const pageTransition = {
    type: "spring",

    stiffness: 110,
    duration: 0.5
}
const PROJECT_QUERY = gql`
query GetProject($projectID: ID!) {
    portfolio(id: $projectID) {
        id
        Title
        Client
        ProjectType
        Content {
        ... on ComponentContentPhoto {
            images{
            url
            }
        }
        ... on ComponentContentVideo {
            videoLink
            Provider
        }
        }
    
    }
}

`;


function Lightbox(props) {

    const {type, projectId} = useParams();
    

    const {loading, error, data} = useQuery (PROJECT_QUERY, {
        variables: {
            projectID: projectId
        }
    })
    
    const [projectData, setprojectData] = useState({})
    const [projectContent, setProjectContent] = useState([])
   

    function closeModal(){
        history.push('/portfolio/'+ type)
    }
    let history = useHistory();

    useEffect(() => {
        if(loading === false) {
           let tmpData = data.portfolio
           setprojectData(tmpData)
           setProjectContent(tmpData.Content[0])
           document.title = "VAS Pictures - " + projectData.Title;
        } else{
        
        }
    }, [projectData, data, error, loading, projectContent])

    return (
        <div  
            className="lightbox_container" 
        >
            <motion.section 
            id="lightbox_modal"
            initial="out"
            animate="in"
            exit="out"
            transition={pageTransition}
            variants={pageVariants}
            >
                <div className="modal_container"
                    >
                    <header>
                            <div className="modal_titleContainer">
                                <h4>{projectData.Title}</h4>
                            </div>
                        <div className="modal_projectClientContainer">
                            <h5><span>for </span>{projectData.Client}</h5>
                        </div>
                        <div className="modal_projectCloseBtnContainer">
                            <button onClick={closeModal}>
                                <svg id="Icon_material-close" data-name="Icon material-close" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                    <path id="Icon_material-close-2" data-name="Icon material-close" d="M37.5,10.521,34.479,7.5,22.5,19.479,10.521,7.5,7.5,10.521,19.479,22.5,7.5,34.479,10.521,37.5,22.5,25.521,34.479,37.5,37.5,34.479,25.521,22.5Z" transform="translate(-7.5 -7.5)" fill="#1b2328"/>
                                </svg>
                            </button>
                        </div>
                    </header>
                    {projectContent !== undefined && !loading  ?
                        <section className="modal_contentWrapper">
                           {projectData.ProjectType === 'photo' 
                           
                            ? <ModalCarousel 
                                images={projectContent.images} />
                           
                            :  <ModalPlayer 
                                    link={projectContent.videoLink}
                                    provider={projectContent.Provider} />
                            }
                        </section> : null
                    }
                   
                </div>
            </motion.section>
        </div>
    )
}


export default Lightbox;


function ModalCarousel (props) {
    const slickSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        lazyLoad: 'progressive',
        draggable: true,
        resposive: [850],
        swipeToSlide: true,
        variableWidth: false,
        accessibility: true,
        arrows: false,
        afterChange: function(index){
            setCurrentSlide(index)
        }
    }
    
    const [currentSlide, setCurrentSlide] = useState(0)
    let totalSlides = props.images.length;
    let sliderRef;
    return (
        <>
            <section className="modal_imageCarousel">
               
                <Slider {...slickSettings} ref={slider => (sliderRef = slider)}>
                    {props.images.map(img => {
                        return(
                            <img src={img.url} 
                                key={img.url}
                                alt=''/>
                        )
                    })
                    }
                </Slider>
                </section>
            <section className="modal_carouselControls">
                <button className="carouselControl_buttons" onClick={e => sliderRef.slickPrev()} disabled={currentSlide === 0 }>
                <svg xmlns="http://www.w3.org/2000/svg" width="16.43" height="30" viewBox="0 0 16.43 30">
                <path id="Icon_material-navigate-next" data-name="Icon material-navigate-next" d="M16.011,9l-3.126,3.525L23.04,24,12.885,35.475,16.011,39l13.3-15Z" transform="translate(-12.885 -9)" fill="#1d2327" opacity="0.7"/>
                </svg>
                    </button>
                <div className="modal_imageCounter">
                    <p className="modal_imageCounterText">{parseInt(currentSlide) + 1 } / {totalSlides} </p>
                </div>
                <button className="carouselControl_buttons" onClick={e => sliderRef.slickNext()} disabled={currentSlide === totalSlides - 1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16.43" height="30" viewBox="0 0 16.43 30">
                <path id="Icon_material-navigate-next" data-name="Icon material-navigate-next" d="M16.011,9l-3.126,3.525L23.04,24,12.885,35.475,16.011,39l13.3-15Z" transform="translate(-12.885 -9)" fill="#1d2327" opacity="0.7"/>
                </svg>

                </button>
            </section>
            
        </>
    )
}


function ModalPlayer (props) {
    const [videoLink, setVideoLink] = useState('') 
    useEffect(() => {
    
        setVideoLink(props.link)
        //
        if(videoLink !== '') {
            setVideoLink(editLinkToEmbedLink(props.link, props.provider))
        }
    },[videoLink, setVideoLink, props.link, props.provider])
    
    return (
        <div>
            <div className="modal_playerWrapper">
                <iframe 
                    className="modal_responsiveFrame"
                    title="video"
                    src={videoLink} 
                    frameBorder="0"
                    allowFullScreen

                ></iframe>
            </div>
        </div>
    )
}


function editLinkToEmbedLink (link, provider) {
    switch (provider) {
        case 'youtube':
            if(link.includes('watch')) {
                let toReplaceString = "watch?v=";
                let replaceBy = "embed/";
    
                return link.replace(toReplaceString, replaceBy)
            }else { 
                return link;
            }
           
        case 'vimeo':
            if(!link.includes('player.')) {
                let addPlayerString = 'player.' + provider + '.com/video/';
                let toReplaceString = provider + '.com/'
                return link.replace(toReplaceString, addPlayerString)
            } else {
                return link;
            }
        // Other providers added here: 
        default:
            return link;
    }
}

function CustomSlickButton(props){
    let direction = props.direction; 

}