import React from 'react';

export default class Task extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state=props;
    // }
    
    render(){
        const {id, desc,isDone} = this.props.todo
        return(
            <div className="task">
                <button className="complete-undo" onClick={(e)=>this.props.handleDone(e)}id={id}>{isDone?"Undo":"Complete"}</button>
                <button className="delete" onClick={()=>this.props.handleDelete(id) }>Delete</button>
                <p className="task-description" style={{textDecoration:isDone?'line-through':'none'}}>{desc}</p>
            </div>
        );
    }
}