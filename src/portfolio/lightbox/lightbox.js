import React, {useEffect, useState} from 'react';

import "../lightbox/lightbox.scss";
import SectionTitle from '../../components/sectionTitle';
import { useHistory } from 'react-router-dom';
import {useParams } from 'react-router-dom';
import {motion} from 'framer-motion';
import {gql, useQuery } from '@apollo/client';

import {capitalizeWord} from '../../helpers/strings.js';

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
query GetProject($projectID: String!) {
    vasPictures(where: {id: $projectID}) {
        id
        Title
        Client
        ProjectType
        Content {
        ... on ComponentPhotoContentPhoto {
            images{
            url
            }
        }
        ... on ComponentVideoVideo {
            videoLink
        }
        }
    
    }
}

`
//TODO: Responsive! + image carousel
function Lightbox(props) {

    const {type, projectId} = useParams();
    

    const {loading, error, data} = useQuery (PROJECT_QUERY, {
        variables: {
            projectID: projectId
        }
    })
    
    const [projectData, setprojectData] = useState({})

   
    let currentSlide = 1;
    let totalSlides = 5;
   
    function closeModal(){
        history.push('/portfolio/'+ type)
    }
    let history = useHistory();

    useEffect(() => {
        if(loading === false) {
           
           let tmpData = data.vasPictures[0]
           setprojectData(tmpData)
           console.log(tmpData)
           document.title = "VAS Pictures - " + projectData.Title
        } else{
            console.log('Fetching project')
        }
    }, [projectData, data, error, loading])

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
            variants={ pageVariants}
            >
                <div className="modal_container">
                    <header>
                        <SectionTitle text={projectData.Title} ></SectionTitle>
                        <div className="modal_projectClientContainer">
                            <h3><span>for </span>{projectData.Client}</h3>
                        </div>
                        <div className="modal_projectCloseBtnContainer">
                            <button onClick={closeModal}>
                                <svg id="Icon_material-close" data-name="Icon material-close" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                    <path id="Icon_material-close-2" data-name="Icon material-close" d="M37.5,10.521,34.479,7.5,22.5,19.479,10.521,7.5,7.5,10.521,19.479,22.5,7.5,34.479,10.521,37.5,22.5,25.521,34.479,37.5,37.5,34.479,25.521,22.5Z" transform="translate(-7.5 -7.5)" fill="#1b2328"/>
                                </svg>
                            </button>
                        </div>
                    </header>
                    <section className="modal_contentWrapper">
                        {projectData.ProjectType === 'photo' 
                        ? <Modal_carousel />
                        : <Modal_player />}
                    </section>
                    <section className="modal_imageCounter">
                        <p className="modal_imageCounterText">{currentSlide} / {totalSlides}</p>
                    </section>
                </div>
            </motion.section>
        </div>
    )
}


export default Lightbox;

function Modal_carousel () {
    return (
        <div>
            <h1>
                test
            </h1>
        </div>
    )
}

function Modal_player () {
    return (
        <div>
        <h1>
            test 2
        </h1>
    </div>
    )
}