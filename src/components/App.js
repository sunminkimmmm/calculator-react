import React, { Component } from 'react';
import produce from 'immer';
import Buttons from './Buttons';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [0],
            inputValue: 0,
            position: 0,
            undoBtn: true,
            redoBtn: true
        };
    }

    changeInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    changeResult = (e) => {
        switch (e.target.id) {
            case 'addBtn':
                if (Number.isInteger(parseInt(this.state.inputValue))) {
                    let newAddResult = produce(this.state.result, (draft) => {
                        draft.push(parseInt(this.state.result[this.state.position]) + parseInt(this.state.inputValue));
                    })
                    this.setState({
                        inputValue: "",
                        result: newAddResult,
                        position: this.state.result.length,
                        redoBtn: true,
                        undoBtn: false,
                    })
                } else {
                    this.setState({
                        inputValue: "",
                        redoBtn: true,
                        undoBtn: true,
                    })
                }
                break;
            case 'subBtn':
                if (Number.isInteger(parseInt(this.state.inputValue))) {
                    let newAddResult = produce(this.state.result, (draft) => {
                        draft.push(parseInt(this.state.result[this.state.position]) - parseInt(this.state.inputValue));
                    })
                    this.setState({
                        inputValue: "",
                        result: newAddResult,
                        position: this.state.result.length,
                        redoBtn: true,
                        undoBtn: false,
                    })
                } else {
                    this.setState({
                        inputValue: "",
                        redoBtn: true,
                        undoBtn: true,
                    })
                }
                break;
            default:
                break;
        }
    }

    changePosition = (e) => {
        switch (e.target.id) {
            case 'undoBtn':
                if (this.state.position === 1) {
                    this.setState({
                        position: this.state.position - 1,
                        undoBtn: true,
                        redoBtn: false
                    });
                } else {
                    this.setState({
                        position: this.state.position - 1,
                        redoBtn: false
                    });
                }
                break;
            case 'redoBtn':
                if (this.state.position === this.state.result.length - 2) {
                    this.setState({
                        position: this.state.position + 1,
                        undoBtn: false,
                        redoBtn: true
                    });
                } else {
                    this.setState({
                        position: this.state.position + 1,
                        undoBtn: false
                    });
                }
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div className="container">
                <div id="value" className="counter">
                    {this.state.result[this.state.position]}
                </div>
                <input className="input" onChange={this.changeInputValue} value={this.state.inputValue} />
                <div className="btnGroup">
                    <Buttons
                        changeResult={this.changeResult}
                        changePosition={this.changePosition}
                        redoBtn={this.state.redoBtn}
                        undoBtn={this.state.undoBtn}

                    />
                </div>
            </div>
        );
    }
}

export default App;