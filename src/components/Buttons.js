import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div>
                <button
                    id="undoBtn"
                    className="btn"
                    disabled={this.props.undoBtn}
                    onClick={this.props.changePosition}
                >
                    Undo
                </button>
                <button
                    id="addBtn"
                    className="btn"
                    onClick={this.props.changeResult}
                >
                    +
                </button>
                <button
                    id="subBtn"
                    className="btn"
                    onClick={this.props.changeResult}
                >
                    -
                </button>
                <button
                    id="redoBtn"
                    className="btn"
                    disabled={this.props.redoBtn}
                    onClick={this.props.changePosition}
                >
                    Redo
                </button>
            </div>
        );
    }
}

export default Buttons;