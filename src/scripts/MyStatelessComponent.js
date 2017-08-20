/**
 * Created by Wojtek on 2017-06-16.
 */
import React from 'react';

class MyStatelessComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {title: 'Clean Dishes', id: 1},
                {title: 'Clean Car', id: 2},
                {title: 'Clean Ass', id:3},
                {title:'get up', id:4}
            ]
        }
    }
    render() {
        return (
            <ul>
                {this.state.tasks.map(function (task) {
                    return <Task style='list-elements ' title={task.title} id={task.id}/>
                })}
            </ul>
        )
    }
}
function Task(props) {
    return <li className={props.style}>Task: {props.title}, {props.id}</li>
}

export default MyStatelessComponent;