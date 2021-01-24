import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        <div className='Char' onClick={props.myClick}>
            {props.text}
        </div>
    );
}

export default char;