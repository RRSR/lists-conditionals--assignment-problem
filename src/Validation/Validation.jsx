import React from 'react';
import './Validation.css'

const validation = (props) => {

    var validationMessage = '';
    if (props.length < 5) {
        validationMessage = 'Text too short.';
    } else if (props.length > 20) {
        validationMessage = 'Text too long.';
    }

    return (
        <div className='Validation'>
            {validationMessage}
        </div>
    );
}

export default validation;