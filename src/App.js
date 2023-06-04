
import { useState } from 'react';
import { Accordian } from './accordian/Accordian';
import './App.css';
import { CreateNote } from './clone/CreateNote';
import { Footer } from './clone/Footer';
import { Header } from './clone/Header';
import { Note } from './clone/Note';
import { NewTodoList } from './components/NewTodoList';
//import { AppDemo } from './components/AppDemo';
import { Task1 } from './Task1';
function App() {
  const [addItem,setAddItem] = useState([]);
  const addNote = (note) => {
    //alert("note added")
    setAddItem((prevItem) => { 
      return [...prevItem ,note]
    })
    console.log(note);
  }
  const onDeleteFun = (id) => {
    setAddItem((oldData ) => {
      return oldData.filter((currentData,index) => {
        return(
          index !== id
        )
      })
    })

  }
  return (

    <div className="flex flex-col items-center justify-center">
      <Header />
      <CreateNote  passNote={addNote}/>
      {
        addItem.map((element,index) => {
          return (
            <Note 
            key={index} 
            id={index} 
            title={element.title} 
            content={element.content} 
            deleteItem = {onDeleteFun}/>
          )

        })
      }
      <Footer />
      
      {/* <NewTodoList /> */}
      {/* <Accordian /> */}
      
      {/* <AppDemo />  */}
      {/* <Task1 /> */}

    </div>
  );
}

export default App;
