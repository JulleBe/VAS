import React, {useEffect, useState} from 'react';

import "../lightbox/lightbox.scss";
import { useHistory } from 'react-router-dom';
import {useParams, useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';
import {gql, useQuery } from '@apollo/client';

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
            console.log('Fetching project')
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
    const query =  useCheckQuery();
    let currentSlide = query.get("index");
    let totalSlides = props.images.length;
    let history = useHistory();
    const location = useLocation();

    function goToNextSlide(current) {
        let nextPage = parseInt(current) +1
        history.push(location.pathname + '?index=' + nextPage)
    }

    function goToPreviousSlide(current) {
        let nextPage = parseInt(current) - 1
        history.push(location.pathname + '?index=' + nextPage)
    }

    return (
        <>
            <section className="modal_imageCarousel">
                <div className="modal_imageContainer modal_responsiveFrame">
                    <img src={props.images[query.get("index")].url} alt=""/>   
                </div>
               
            </section>
            <div className="modal_carouselControls">
                    <button onClick={() => goToPreviousSlide(currentSlide)} disabled={currentSlide <= 0} className="carouselControl_buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30.63" height="49.603" viewBox="0 0 30.63 49.603">
                        <g id="Icon_material-navigate-next" data-name="Icon material-navigate-next" transform="translate(30.63 49.603) rotate(180)">
                            <path id="Icon_material-navigate-next-2" data-name="Icon material-navigate-next" d="M18.713,9l-5.828,5.828L31.817,33.8,12.885,52.775,18.713,58.6l24.8-24.8Z" transform="translate(-12.885 -9)" fill="#fff" opacity="0.7"/>
                        </g>
                    </svg>

                    </button>
                    <button onClick={() => goToNextSlide(currentSlide)} disabled={currentSlide >= (totalSlides-1)} className="carouselControl_buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30.63" height="49.603" viewBox="0 0 30.63 49.603">
                            <g id="Icon_material-navigate-next" data-name="Icon material-navigate-next" transform="translate(30.63 49.603) rotate(180)">
                                <path id="Icon_material-navigate-next-2" data-name="Icon material-navigate-next" d="M18.713,9l-5.828,5.828L31.817,33.8,12.885,52.775,18.713,58.6l24.8-24.8Z" transform="translate(-12.885 -9)" fill="#fff" opacity="0.7"/>
                            </g>
                        </svg>

                    </button>  
                </div>
            <section className="modal_imageCounter">
                        <p className="modal_imageCounterText">{parseInt(currentSlide) + 1 } / {totalSlides}</p>
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

function useCheckQuery() {
    return new URLSearchParams(useLocation().search);
}