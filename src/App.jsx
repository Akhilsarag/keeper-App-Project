import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    if (newNote.title.trim() === "" && newNote.content.trim() === "") {
      alert("Please enter a title or content before adding a note.");
      return;
    }
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes =>
      prevNotes.filter((_, index) => index !== id)
    );
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />

      <div className="scroll-container">
        {notes.map((noteItem, index) => (
          <Note
            key={noteItem.title + index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
