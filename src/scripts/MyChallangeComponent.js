/**
 * Created by Wojtek on 2017-06-16.
 */
import React from 'react';


class MyChallangeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // this.incrementCount = this.incrementCount.bind(this, this.props.valueOne);
    };

    incrementCount(value) {
        this.setState({
            count: this.state.count + value
        })
    }

    render() {
        // let valueOne = this.props.valueOne;
        // let valueFive = this.props.valueFive;
        // let valueTen = this.props.valueFive;


        return (
            <div className="container container--blue">
                <div className="challange-container ">
                    <h1>Count : {this.state.count}</h1>
                    <Buttons style='btn btn-red' value={this.props.valueOne} clickHandler={this.incrementCount.bind(this, this.props.valueOne)}/>
                    <Buttons style='btn btn-blue' value={this.props.valueFive} clickHandler={this.incrementCount.bind(this, this.props.valueFive)}/>
                    <Buttons style='btn btn-green' value={this.props.valueTen} clickHandler={this.incrementCount.bind(this, this.props.valueTen)}/>
                </div>
            </div>
        )
    }
}
MyChallangeComponent.defaultProps = {
    valueOne: 1,
    valueFive: 5,
    valueTen: 10
};


function Buttons(props) {
    return <button className={props.style} value={props.value} onClick={props.clickHandler}>Add {props.value}</button>;
}

export default MyChallangeComponent;