/*eslint-disable*/
import React,{useState,useEffect} from 'react';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from'./firebase.js';
import firebase from "firebase";

function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');

  useEffect(()=>{
    //loads every time app.js is loaded
    db.collection('Todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id:doc.id ,todo:doc.data().todo})))
    })
  },[]);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('Todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <h1>My ToDo Application</h1>
      <form>
      <FormControl>
        <InputLabel>Write a ToDo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>
      <ul>
      {todos.map(todo=>(
        <Todo todo={todo}/>
        //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
