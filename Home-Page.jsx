import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../styles/home.css';

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/notes/')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  return (
    <motion.div className="home-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1 className="home-title">My Notes</h1>
      <div className="notes-list">
        {notes.length > 0 ? notes.map(note => (
          <motion.div key={note.note_id} className="note-card" whileHover={{ scale: 1.05 }}>
            <h2>{note.note_title}</h2>
            <p>{note.note_content}</p>
          </motion.div>
        )) : <p>No notes available</p>}
      </div>
    </motion.div>
  );
};

export default HomePage;