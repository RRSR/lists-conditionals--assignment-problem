import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './CharComponent/Char';

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

    deleteChar = (index) => {
        let charArray = this.state.text.split('');
        charArray.splice(index, 1);
        let updatedText = charArray.join('');
        this.setState({
            text: updatedText,
            textLength: updatedText.length
        });
    }

    render() {

        let characters = null;
        if (this.state.textLength > 0) {
            characters = (
                <div> {this.state.text.split('').map((character, index) => {
                    return <Char
                        text={character}
                        myClick={() => this.deleteChar(index)}
                    />
                })}
                </div>
            );
        }
        return (
            <div>
                <input
                    type='text'
                    onChange={(event) => this.updateText(event)}
                    value={this.state.text} />
                <p> Word Count : {this.state.textLength}</p>
                <Validation length={this.state.textLength} />
                {characters}
            </div>
        );
    }
}

export default App;