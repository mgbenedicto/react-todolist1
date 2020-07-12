import React, {useState, useEffect} from 'react';
import ToDos from "./components/ToDos";
import Header from "./components/layout/Header";
import AddToDo from "./components/AddToDo";
import About from "./components/pages/About";

import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";


import './App.css';

const App = () => {

  const [todos, setToDos] = useState([
    {
      id: uuidv4(),
      title: 'take out the trash',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'dinner',
      completed: false
    },    
    {
      id: uuidv4(),
      title: 'meeting',
      completed: false
    }
  ]);

  useEffect(()=>{
    console.log("From useEffect");
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res=>{
        console.log(res.data);
        setToDos(res.data);

      })
    }, []);


  const markComplete = (event, id, todo) => {
    setToDos(prevItems=>{
      //Update array for the ID# clicked
      const newItems = prevItems.map(item=>{
        if(item.id===id){
          item.completed = !item.completed;
        }
        return item;
      });
      //Return the updated array
      return newItems;
    });//setToDos
  }

  const delToDo = (event, id, todo) =>{
    console.log("From DelToDo");

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>{
      setToDos(prevItems=>{
        const newItems = prevItems.filter(item=>{
          if(item.id!==id){
            return item;
          } else {
            return null;
          }
        })

        return newItems;
      });
    });
  }

  const onAdd = (newTitle) => {
    console.log("onAdd: " + newTitle);

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: newTitle,
      completed: false
    })
      .then(res=>{
        setToDos([...todos, res.data]);
      });

  }

  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Header />
          <Route exact path='/' render={props=>(
            <React.Fragment>
                <AddToDo onAdd={onAdd}/>
                <ToDos todos={todos} markComplete={markComplete} delToDo={delToDo}/>
            </React.Fragment>
          )} />

          <Route path='/about' component={About}/>

        </div>
      </div>
    </Router>
  )
}

export default App
