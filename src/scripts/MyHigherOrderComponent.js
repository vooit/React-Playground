/**
 * Created by Wojtek on 2017-06-28.
 */
import React from 'react';

let BaseCount = (BasicComponent) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        console.log("I have been clicked")
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        // render ABSTRACT componennt
        //  let text = this.props.text;
        return (
            <div className="container">
                <BasicComponent style='btn btn-green' increment={this.incrementCount } count={this.state.count}/>
            </div>
        )
    }
}
// STATELESS COMPONENT extended to incrementCount()
// is PASSED to BaseCount component
// now I can use increment method on button component
const Button = (props) => {
    console.log(props);
    return (
        <button className={props.style} onClick={props.increment}>You've clicked: {props.count}</button>
    )
};
const Label = (props) => {
    console.log(props);
    return (
        <label className="alert-danger" onMouseMove={props.increment}>{props.count}</label>
    )
}

// Generowany element (button) exportowany jest do DemoComponent i wrzucany w DOM
// Extended ELEMENTS!!!
let ExtendButton = BaseCount(Button);
let ExtendLabel = BaseCount(Label);

class Container extends React.Component {
    render() {
        return (
            <div>
                <ExtendButton/>
                <ExtendLabel/>
            </div>
        )
    }
}


export default Container;