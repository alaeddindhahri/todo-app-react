import React from 'react'

export default class InputTask extends React.Component{
    constructor(){
        super()
        this.state={
            id:0,
            desc:null
        }
    }
    handleChange=(e)=>{
        this.setState({
            desc:e.target.value
        })
    }
    render() {
        return (
            <div className="row input-task">
                <div className="col-3 task-texts">
                    <h1>To-Do App!</h1>
                </div>
                <div className="col-3 task-texts">
                    <p>Add New To-Do</p>
                </div>
                <div className="col-3 input-box-container">
                    <input type="text" placeholder="Enter new task" className="input-box"
                    onChange={this.handleChange}/>
                </div>
                <div className="col-3 task-texts">
                    <button type="button"onClick={()=>this.props.addTask(this.state.id,this.state.desc)}>Add</button>
                </div>
            </div>
        )
    }
}