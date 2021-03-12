/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, Suspense} from 'react';
import {useParams} from 'react-router-dom';
import { gql, useQuery} from '@apollo/client'
import './gallery.scss';
import ProjectThumbnail from './thumbnail.js';
import Loader from '../../components/loader';
import Lightbox from '../lightbox/lightbox';
import {capitalizeWord} from '../../helpers/strings.js';

const PORTFOLIO_QUERY = gql`
    query Portfolios($type: String!){
        portfolios(where: {ProjectType: $type}){
            id
            Title
            Client
            ProjectType
            ThumbnailAspectRatio
            Thumbnail {
                url
            }
        }
    }
`;



 function  PortfolioGallery() {
    
    const {type, projectId} = useParams();
    let photos = []
    // Loads in the images from the graphql query when the component is loaded 
    const {loading, error, data} = useQuery(PORTFOLIO_QUERY, {
        variables: {
            type: type
        }
    })

    useEffect(() => {
        document.title = "VAS Pictures - " + capitalizeWord(type); 
    }, [loading, data, error, type])

    if(loading === false && error === undefined) {
       
        if(projectId === undefined) {
            photos = mapDataToPhotos(data.portfolios)
            return (
                <div id="galleryContainer">
                    <Suspense fallback={<Loader/>}>
                        {photos.map( (photo, index) =>  {
                            return <ProjectThumbnail 
                                key={photo.name + '-' + index}
                                photo={photo}
                                index={index}
                                />
                        })}
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

function mapDataToPhotos(data){
    return data.map(photo => ( {
        id: removeCaps(replaceSpaces(photo.id)),
        key: photo.id,
        title: photo.Title,
        client: photo.Client,
        src:  photo.Thumbnail.url,
        type: photo.ProjectType,
        aspectRatio: photo.ThumbnailAspectRatio
    }))
}

function replaceSpaces(string) {
    return string.split(' ').join('-')
}

function removeCaps(string) {
    return string.toLowerCase()
}
function deterMineRatio(ratio, axis){
    switch (ratio) {
        case 'portrait':
            if(axis === 'width') {
                return 9;
            } else if(axis === 'height') {
                return 16;
            }
            break;
        case 'square':
            if(axis === 'width') {
                return 1;
            } else if(axis === 'height') {
                return 1;
            }
            break;
        case 'landscape':
            if(axis === 'width') {
                return 16;
            } else if(axis === 'height') {
                return 9;
            }
            break;
        default:
            return 1;
    }
}
/*
RewriteCond %{HTTPS} !=on
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]*/