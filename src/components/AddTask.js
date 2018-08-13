import React, { Component } from 'react';
import ListTask from './ListTask';

class AddTask extends Component  {
  constructor(props) {
   super(props);
   this.state = {
       task: '',
       tasksList:[],
       id:0,
       taskCompleted:0,
       taskLeft:0
   };
   this.handleAdd = this.handleAdd.bind(this);
   this.removeTask = this.removeTask.bind(this);
   this.completeTask = this.completeTask.bind(this);

 }

  handleTask(event){
    event.preventDefault();
    console.log(event.target.value);
this.setState({task: event.target.value});
   console.log(event.target.value);
   console.log(this.state.task) ;
   return event.target.value;
  }

  handleAdd(event){
    event.preventDefault();

     console.log(this.state.task);
    if(this.state.task===""){
      alert("Please add task.")
    }
    else if (this.state.task !== "") {

      let tasks = this.state.task.slice();
     this.state.tasksList.push({id:this.state.id, text:this.state.task});
     this.setState({
      tasks: tasks,
      id: ++this.state.id
    });
console.log(this.state.id);
  }

  console.log(this.state.tasks);
  this.setState({
   task: ''
 });
 if(this.state.id!=0){
   this.setState({taskStatus:true})
 }
  }

removeTask(id){
   console.log(id);
   this.setState({
     tasksList: this.state.tasksList.filter((task, index) => task.id !== id)
   });
console.log(this.state.tasksList);
}

completeTask(id){
console.log(id);
console.log(this.props.color);


}

  render (){
    let label;
    const taskStatus =this.state.taskStatus;
    console.log(taskStatus);
    console.log(this.state.taskCompleted);
    if(taskStatus){
      label = "Items Completed :  "+this.state.taskCompletedNo+"  Task Left : "+this.taskLeftNo;
    }
    return(
      <div class="container">
      <form class="form" onSubmit={this.handleAdd}>
      <h1 class="header">To Do</h1>
       <input class="input" type="text" value={this.state.task} onChange={(e)=>this.handleTask(e)} />
       <input class="add-button" type="submit" value="Add" />
       </form>
       <ul class="ul">
       <li>
       {
        this.state.tasksList.map(task=>{
          return <ListTask task={task} id={task.id} removeTask={this.removeTask} completeTask={this.completeTask}/>
        })
      }
      </li>
       </ul>
         <label taskStatus={this.state.taskStatus}>
          {label}
         </label>
     </div>
    );
  }
}
 export default AddTask;
