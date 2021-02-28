import React from 'react'


function LazyImage(props){

    let source = props.source
    let alt = props.alt;
    return(
        <img src={source} alt={alt}></img>
    )
}

export default LazyImage;