import React from 'react';
import todosData from './todosData';
import App from './App';

function ToDoItem(props){
   const completedStyle = {
       fontStyle:"italic",
       color:"#222",
       textDecoration:"line-through"
   }
return(
<div className = "todo_item">
       <input 
       type = "checkbox" 
       checked={props.item.completed}
       onChange={()=>props.handleChange(props.item.id)}

       />
       <p style={props.item.completed? completedStyle:null}>{props.item.text}</p>

</div>
    );
  }
  export default ToDoItem;