import React from 'react';

function Title(props) {
    return (
        <div className="sectionTitleContainer">
            <div className="sectionTitle">
                <h1 
                className="sectionTitleMain" 
                data-aos="zoom-out-down"  
                data-aos-once="true"
                data-aos-duration="400">{props.text}</h1>

                {props.showOutline === true &&
                    <h1 
                    className="sectionTitleOutline" 
                    data-aos="fade-down"  
                    data-aos-once="false" 
                    data-aos-delay="100"
                    data-aos-offset="200"
                    data-aos-duration="400">{props.text}</h1>
                }
                
            </div>
           
        </div>
    )
}

export default Title;