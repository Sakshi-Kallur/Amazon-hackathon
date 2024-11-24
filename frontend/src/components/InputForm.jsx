import React, { useState } from 'react';
import axios from '../services/api';

const InputForm = ({ setGeneratedListing }) => {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('text', text);
        if (file) formData.append('file', file);

        try {
            const response = await axios.post('/process', formData);
            setGeneratedListing(response.data.listing);
        } catch (error) {
            console.error('Error generating listing:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Paste social media content here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button type="submit">Generate Listing</button>
        </form>
    );
};

export default InputForm;
