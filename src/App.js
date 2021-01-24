import React, {Component} from 'react';
import Validation from './Validation/Validation'

class App extends Component {

    state = {
        text: '',
        textLength: 0
    };

    updateText = (event) => {
        this.setState({
            text: event.target.value,
            textLength: event.target.value.length
        });
    }

    render() {
        return (
            <div>
                <textarea onChange={(event) => this.updateText(event)}/>
                <p>The above paraghrap has {this.state.textLength} words.</p>
                <Validation length={this.state.textLength}/>
            </div>
        );
    }
}

export default App;
