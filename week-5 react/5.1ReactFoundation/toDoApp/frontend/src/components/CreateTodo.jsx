import React from 'react'
import { useState } from 'react';

function CreateTodo(props) {
  //react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input id='title' style={{
        padding: 10,
        margin: 10
     }}
      type="text" placeholder='title' onChange={function(e){
        const value = e.target.value;
        setTitle.target.value;
      }}/> <br/>
      <input id='desc' style={{
        padding: 10,
        margin: 10
      }} 
      type="text" placeholder='description' onChange={function(e){
        const value = e.target.value;
        setDescription.target.value;
      }}/><br/>

      <button style={{
        padding: 10,
        margin: 10
      }} onClick={()=>{
        fetch("http://localhost:3001/todo",{
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description
          }),
          headers: {
            "Content-type" : "application/json"
          }
        })
        .then(async function(res){
          const json = await res.json();
          alert(`Todo added: ${json.title}`);
        })
      }}>Add to do</button>

    </div>
  )
}

export default CreateTodo
