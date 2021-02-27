
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import './gallery.scss'

//TODO: inladen project op category via GraphQL, deze data dan verspreiden via de thumbnails die op een "random" manier vertoond worden
function Gallery(props) {

    const {category} = useParams();

    useEffect(()=> {
        document.title = "VAS Pictures - " + capitalizeWord(category);
    })

    
    function capitalizeWord(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <div className="galleryContainer">
            <p>{category}</p>
        </div>
    );
  }
  
  export default Gallery;
  