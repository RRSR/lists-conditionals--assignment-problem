import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './CharComponent/Char';

class App extends Component {

    state = {
        text: ''
    };

    updateText = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    deleteChar = (index) => {
        let charArray = this.state.text.split('');
        charArray.splice(index, 1);
        let updatedText = charArray.join('');
        this.setState({
            text: updatedText,
        });
    }

    render() {

        let characters = null;
        characters = this.state.text.split('').map((character, index) => {
            return <Char
                text={character}
                myClick={() => this.deleteChar(index)}
                key={index}
            />
        });

        return (
            <div>
                <input
                    type='text'
                    onChange={(event) => this.updateText(event)}
                    value={this.state.text} />
                <p> Word Count : {this.state.text.length}</p>
                <Validation length={this.state.text.length} />
                {characters}
            </div>
        );
    }
}

export default App;