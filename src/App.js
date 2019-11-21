import React from 'react';
import './App.css';
import Title from './components/AppTitle';
import CosmicLogo from '../src/cosmicjs.png';
import InputTask from './components/InputTask';
import Tasks from './components/Tasks';

class App extends React.Component {
  state = {
    tasksList: [{
      id: 0,
      desc: "jkkhjhk",
      isDone:false
    }]
  }

  handleDelete=(id)=>{
    this.setState({
      tasksList:this.state.tasksList.filter(t=>t.id!=id)
        
    })
    // console.log(this.state)
    // console.log(id)
}
handleDone=(e)=>{
  console.log(e.target.id)
  var tmpTaskObject;
  tmpTaskObject = this.state.tasksList.filter(task=>task.id==e.target.id)
  var tmpIndex;
  tmpIndex = this.state.tasksList.indexOf(tmpTaskObject[0]);
  let newState = this.state.tasksList
  newState[tmpIndex].isDone=!newState[tmpIndex].isDone
  this.setState({
    tasksList:newState
  })
}

  addTask = (id,desc) => {
    if(desc!=null && String(desc).length!=0){
      this.setState({tasksList:[...this.state.tasksList,{
        id:Math.floor(Math.random()*100),
        desc: desc,
        isDone:false
      }]}
      )}
  }
  render() {
    return (
      <div className="App">
        <Title />
        <InputTask addTask={this.addTask} />
        <Tasks tasksList={this.state.tasksList} handleDelete={this.handleDelete} handleDone={this.handleDone}/>
        <footer>
          <img src={CosmicLogo} alt="cosmic JS logo"/>
          <p>Proudly powered by Cosmic JS</p>
        </footer>
      </div>
    );
  }
}

export default App;
