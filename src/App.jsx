import React, { useState } from 'react'
import Header from './components/header'
import Note from './components/note'
import Footer from './components/footer'
import CreateArea from './CreateArea'
function App() {
  const [notes,setNotes] = useState([])
  function addNote(newNote){
     setNotes(prevNotes=>{
      return[...prevNotes,newNote]
     });
  }

function deleteNote(id){
  setNotes(prevNotes=>{
    return prevNotes.filter((noteItem,index)=>{
      return index !== id
    })
  })
}
  return (
    <>
      <Header/>
      <CreateArea onAdd = {addNote} />
      {notes.map((noteItem,index) =>{
        return <Note key={index} id={index}  title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
      })}
      <Footer/>
    </>
  );
}

export default App
