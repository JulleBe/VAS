import React from 'react';

export default function AutoPlayVideo(props) {
    
    return (
        <div
           className="autoplayContainer"
            dangerouslySetInnerHTML={{
                __html: `
                        <video
                            autoplay
                            loop
                            muted
                            playsinline
                            poster="${props.poster}"
                            id="${props.id}"
                            >
                            <source src="${props.mp4}" type="video/mp4" />
                        </video>`
            }}
        />

        
    )

}