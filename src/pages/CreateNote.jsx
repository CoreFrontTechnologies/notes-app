import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/useCreate";

const CreateNote = ({ setNotes }) => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const date = useCreateDate();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && details) {
            const note = { id: uuid(), title, details, date };
            setNotes(prevNotes => [note, ...prevNotes]);
            navigate('/');
        }
    };

    return (
        <section>
            <header className="create-note__head">
                <Link to='/' className="btn"><IoIosArrowBack /></Link>
                <form className="create-note__form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Title" // Corrected "Tile" to "Title"
                        value={title} 
                        autoFocus 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <textarea 
                        rows={28} 
                        placeholder="Write your notes here..." 
                        value={details} 
                        onChange={(e) => setDetails(e.target.value)}
                    ></textarea>
                    <button type="submit" className="btn lg primary">Save</button> {/* Moved button inside the form */}
                </form>
            </header>
        </section>
    );
};

export default CreateNote;
