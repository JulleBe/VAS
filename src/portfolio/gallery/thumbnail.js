
import React, { Suspense } from 'react';

import './thumbnail.scss';
import Loader from '../../components/loader';
import { useHistory } from 'react-router-dom';

function ProjectThumbnail(props) {
    const history = useHistory();
    const LazyImage = React.lazy(()=> import('../lazyImage'))
    
    let index = props.index;
    let photo = props.photo;
    let id = photo.id;
    let title = photo.title;
    let client = photo.client;
    let type = photo.type;
    let src = photo.src;
    let aspectRatio = photo.aspectRatio

    function openLightbox(e){
 
        history.push('/portfolio/'+ type +'/' + e.currentTarget.id)
      
    }
    
    
    return (
            <button 
            className={`thumbnail_container ${aspectRatio}Thumbnail`  }
            id={id}
            onClick={openLightbox}
            data-aos="fade-up"
            data-aos-once="true"
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