import React, {Component} from 'react';

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
                <input onChange={(event) => this.updateText(event)}/>
                <p>{this.state.textLength} TEST</p>
            </div>
        );
    }
}

export default App;
