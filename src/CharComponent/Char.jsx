import React, {Component} from 'react';
import './Char.css';

class Char extends Component {
    render() {
    
        return (
            <div className='Char' onClick={this.props.myClick}>
                {this.props.text}
            </div>
        );
    }
}

export default Char;