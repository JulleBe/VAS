
import React from 'react';
import {useParams} from 'react-router-dom';

function Gallery() {

    const {category} = useParams();

    return (
        <div>
            <p>{category}</p>
        </div>
    );
  }
  
  export default Gallery;
  