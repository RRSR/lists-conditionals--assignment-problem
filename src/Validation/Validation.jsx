import React, {Component} from 'react';

class Validation extends Component {
    render() {

        var validationMessage = '';
        if(this.props.length < 5){
            validationMessage = 'Text too short.';
        }else if(this.props.length > 100){
            validationMessage = 'Text too long.';
        }

        return (
            <div>
                {validationMessage}
            </div>
        );
    }
}

export default Validation;