import React, { Component } from 'react';
import Task from './Task';

export default class Tasks extends Component {
    
    render() {
        return (
            <div className="row" id="tasks-body">        
                {this.props.tasksList.map((item,key)=><Task key={key} todo={item} handleDelete={this.props.handleDelete} handleDone={this.props.handleDone}/>)}
            </div>
        )
    }
}
