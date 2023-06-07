
import { useState } from 'react';
import { Accordian } from './accordian/Accordian';
import './App.css';
import { CreateNote } from './clone/CreateNote';
import { Footer } from './clone/Footer';
import { Header } from './clone/Header';
import { Note } from './clone/Note';
import { NewTodoList } from './components/NewTodoList';
import { CompoA } from './context/CompoA';
import { Header1 } from './context/Header';
import { Routes, Route, BrowserRouter } from "react-router-dom"
//import { AppDemo } from './components/AppDemo';
import { Task1 } from './Task1';
import { Home } from './context/Home';
import { Cart } from './context/Cart';
import { UseState } from './hooks/UseState';
import { UseState1 } from './hooks/UseState1';
import { UseForm } from './hooks/UseForm';
import { UseArray } from './hooks/UseArray';
import { ThemeToggle } from './hooks/ThemeToggle';
import { EffectHook } from './hooks/EffectHook';
import { TodoUseReducer } from './hooks/TodoUseReducer';
import { UserDashBoard } from './hooks/useContexthook/UserDashBoard';
import { UsersHooks } from './hooks/usememo/UsersHooks';
function App() {

  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    //alert("note added")
    setAddItem((prevItem) => {
      return [...prevItem, note]
    })
    console.log(note);
  }
  const onDeleteFun = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currentData, index) => {
        return (
          index !== id
        )
      })
    })

  }
  return (
    // <BrowserRouter>
    //   <Header1 />

      <div className="flex flex-col items-center justify-center">
        {/* <UseState1 /> */}
        {/* <UseForm /> */}
        {/* <UseArray /> */}
        {/* <ThemeToggle /> */}
        {/* <EffectHook /> */}
        {/* <TodoUseReducer /> */}
        <UsersHooks />
        {/* <UserDashBoard /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes> */}

        {/* <CompoA /> */}
        {/* <Header />
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
      <Footer /> */}

        {/* <NewTodoList /> */}
        {/* <Accordian /> */}

        {/* <AppDemo />  */}
        {/* <Task1 /> */}

      </div>
    // {/* </BrowserRouter> */}
  );
}

export default App;
