import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = ({ note }) => {
    return (
        <Link to={`/edit-note/${note.id}`} className='note'> {/* Corrected string interpolation */}
            <h4>{note.title.length > 10 ? `${note.title.substring(0, 10)}...` : note.title}</h4> {/* Fixed 'length' and used substring */}
            <p>{note.date}</p>
        </Link>
    );
};

export default NoteItem;
