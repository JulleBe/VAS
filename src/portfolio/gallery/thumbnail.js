
import React, { Suspense, useEffect } from 'react';

import './thumbnail.scss';
import Loader from '../../components/loader';
import { useHistory } from 'react-router-dom';

function ProjectThumbnail(_ref) {
    const history = useHistory();
    const LazyImage = React.lazy(()=> import('../lazyImage'))

    let index = _ref.index;
    let photo = _ref.photo;
    let id = photo.id;
    let title = photo.title;
    let client = photo.client;
    let type = photo.type;
    let src = photo.src;
    let width = photo.width + "px"
    let height = photo.height;
   
    let containerStyle = {
        width: width,
        height: height,
    }
   
    function openLightbox(e){
 
        history.push('/portfolio/'+ type +'/' + e.currentTarget.id)
      
    }
    
    
    return (
            <button 
            className="thumbnail_container" 
            id={id}
            onClick={openLightbox}
            style={containerStyle}
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay={100 + (50* index)}
            >   
                <Suspense 
                    fallback={Loader}>
                    <LazyImage
                    source={src} 
                    alt="test"
                    />
                </Suspense>
             
                <article className="thumbnail_projectInfoHover" id={id}>
                    <div className="thumbnail_projectInfoText">
                        <p className="thumbnail_projectTitle">{title}</p>
                        <p className="thumbnail_projectClient">{client}</p>
                    </div>
                </article>
            </button>
    )
}
export default ProjectThumbnail;