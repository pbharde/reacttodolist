import React, { Component } from 'react';


class ListTask extends Component  {
  constructor(props) {
   super(props);
   this.state = {
     taskCompleted:0,
     taskLeft:0
    };
 }
 completeTask(id,e){
  // console.log( isComplete);
  this.props.completeTask(id);
  console.log(e.target.checked);
  if(e.target.checked==true){
    this.setState({
      active:true,
      taskCompleted:++this.state.taskCompleted
  })

  }else{
    this.setState({
      active:false,
    taskLeft: ++this.state.taskLeft
  })

  }

   console.log(this.props.completeTask(id))
   console.log(id);
 }

 handleColor(id){
   if(this.state.active==true){
     return "red"
   }
   else if(this.state.active==false){
     return "black"
   }
 }

 removeTask(id){
   this.props.removeTask(id);
   console.log(this.props.removeTask(id))
   console.log(id);
 }
  render (){
 const { tasksList } = this.props;
 console.log(this.props)
 console.log(tasksList)
console.log(this.props.id)
    return(
      <div class="li">

      <input
            name="isComplete"
            type="checkbox"
            checked={this.state.value}
            onChange={(e)=> this.completeTask(this.props.id,e)}
       />
            <label style={{color: this.handleColor(this.props.id)}} >{this.props.task.text}</label>
      <button class="remove-button" onClick={(e)=> this.removeTask(this.props.id) }>remove</button>

         </div>
    );
  }
}
 export default ListTask;
