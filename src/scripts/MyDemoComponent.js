import React from 'react';
import PropTypes from 'prop-types';

class MyDemoComponent extends React.Component {
    render() {
        let name = this.props.name;
        let location =this.props.location;
        return (
            <div className="page-extras">
                <h1>Hello, {name}</h1>
                <h2>I live in {location}</h2>
            </div>
        );
    }
}

MyDemoComponent.defaultProps = {
    name: 'Dev Ninja',
    location: 'Warsaw'
};
MyDemoComponent.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired

};

export default MyDemoComponent;