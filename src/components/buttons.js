import React from 'react';
import '../style/components/buttons.scss';

function Button(props) {

    return (
        <button 
            onClick={props.function}  
            type={props.type} 
            disabled={props.disabled} 
            data-aos="zoom-in" 
            data-aos-once="true"
            data-aos-delay="100">
            <p className="btnText">{props.text}
                <span className="btnTextShadow ">{props.text}</span>
            </p>
        </button>
    );
  }
  
  export default Button;
  