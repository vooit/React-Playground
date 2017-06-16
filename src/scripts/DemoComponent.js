import React from 'react';
import DemoComponentHeader from './DemoComponentHeader';
import MyDemoComponent from './MyDemoComponent';
import MyStateComponent from './MyStateComponent'
import MyChallangeComponent from "./MyChallangeComponent";

class DemoComponent extends React.Component {
    render() {
        return (
            <div>
                <DemoComponentHeader />
                <div className="container">
                    <p>A simple React Webpack 2.0 babel kit with bootstrap framework</p>
                    <MyDemoComponent />
                    <MyStateComponent />

                </div>
                <MyChallangeComponent/>
            </div>
        )
    }
}

export default DemoComponent;