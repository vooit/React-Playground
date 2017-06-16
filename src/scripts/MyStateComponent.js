/**
 * Created by Wojtek on 2017-06-15.
 */
import React from 'react';


class MyStateComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: 'wojtek',
            password: 'abcd',
            value: ''
        };
        this.nameChanged = this.nameChanged.bind(this);
        this.resetName = this.resetName.bind(this);
    };
    nameChanged(event) {
        this.setState({
            value: event.target.value,
            name: event.target.value
        });
    }
    resetName() {
        this.setState({
            name: ""
        })
    }
    render() {
        return (
            <div className="state-component">
                <h1 onChange={this.nameChanged}>Hello, my name is {this.state.name} </h1>
                <input type="text" value={this.state.value} onChange={this.nameChanged}/>

                <button onClick={this.resetName}>Reset</button>
            </div>
        )
    }
}

export default MyStateComponent;