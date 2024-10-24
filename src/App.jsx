import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import './App.css';

const App = () => {
    // Use JSON.parse and JSON.stringify instead of json
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem('notes')) || []
    );

    useEffect(() => {
        // Use JSON.stringify to store notes as a string
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return (
        <main id='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Notes notes={notes} />} />
                    <Route path='/create-note' element={<CreateNote setNotes={setNotes} />} />
                    <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes} />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;
