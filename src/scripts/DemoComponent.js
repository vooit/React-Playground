import React from 'react';
import DemoComponentHeader from './DemoComponentHeader';
import MyDemoComponent from './MyDemoComponent';
import MyStateComponent from './MyStateComponent'
import MyChallangeComponent from "./MyChallangeComponent";
import MyStatelessComponent from "./MyStatelessComponent";
import Container from "./MyHigherOrderComponent";

class DemoComponent extends React.Component {
    render() {
        return (
            <div>
                <DemoComponentHeader />
                <div className="container">

                    <MyDemoComponent />
                    <MyStateComponent />

                </div>
                <MyChallangeComponent/>
                <MyStatelessComponent/>
                <Container/>
            </div>
        )
    }
}

export default DemoComponent;