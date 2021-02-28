
import React, {useEffect, lazy, Suspense} from 'react';
import {useParams} from 'react-router-dom';
import { gql, useQuery} from '@apollo/client'
import './gallery.scss';
import ProjectThumbnail from './thumbnail.js';
import Loader from '../../components/loader';
import Lightbox from '../lightbox/lightbox';
import {capitalizeWord} from '../../helpers/strings.js';

const PORTFOLIO_QUERY = gql`
    query Portfolio($type: String!){
        vasPictures(where:{ProjectType: $type}){
            id
            Title
            Client
            ProjectType
            Thumbnail {
                url
            }
        }
    }
`;


function mapDataToPhotos(data){
    const emptyImg = "http://imageipsum.com/1200x675";
    return data.map(photo => ( {
        id: removeCaps(replaceSpaces(photo.id)),
        key: removeCaps(replaceSpaces(photo.Title)) + photo.id,
        title: photo.Title,
        client: photo.Client,
        src:  emptyImg,
        type: photo.ProjectType,
        width: 4,
        height: 3,
    }))
}

function replaceSpaces(string) {
    return string.split(' ').join('-')
}

function removeCaps(string) {
    return string.toLowerCase()
}

function PortfolioGallery() {

    const Gallery = lazy(() => import('react-photo-gallery'))
    const {type, projectId} = useParams();
    let photos = [];
    // Loads in the images from the graphql query when the component is loaded 
    const {loading, error, data} = useQuery(PORTFOLIO_QUERY, {
        variables: {
            type: type
        }
    })

    useEffect(() => {
        if(error) {
            console.log(error)
        }
        document.title = "VAS Pictures - " + capitalizeWord(type);
       
    })

    if(!loading) {
        photos = mapDataToPhotos(data.vasPictures)
        if(projectId === undefined) {
            return (
                <div id="galleryContainer">
                    <Suspense fallback={<ImageLoader/>}>
                        <Gallery 
                            margin={0}
                            photos={photos}
                            renderImage={ProjectThumbnail}
                            direction="row"
                            >
                        </Gallery>
                    </Suspense>
                </div>
            );
        } else if(projectId !== undefined) {
            return (
                <Lightbox 
                    projectID={projectId}/>
            )
        }
    }else {
        return (
            <>
             <ImageLoader/>
            </>
        )
    }
  }


  export default PortfolioGallery;

function ImageLoader() {
    return ( 
        <div className="imageLoader">
            <Loader/>
        </div>
    )
}