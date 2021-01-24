import React, {Component} from 'react';
import './Validation.css'

class Validation extends Component {
    render() {

        var validationMessage = '';
        if(this.props.length < 5){
            validationMessage = 'Text too short.';
        }else if(this.props.length > 20){
            validationMessage = 'Text too long.';
        }

        return (
            <div className='Validation'>
                {validationMessage}
            </div>
        );
    }
}

export default Validation;