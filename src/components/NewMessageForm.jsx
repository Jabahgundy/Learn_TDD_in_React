import { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSend = (e) => {
        e.preventDefault();
        onSend(inputText);
        setInputText('')
    }


    return (
        <div>
            <input type="text" data-testid='messageText' value={inputText}
                onChange={(e) => handleChange(e)}
            />
            <button type="button" data-testid='sendButton'
                onClick={(e) => handleSend(e)}
            > send </button>
        </div>
    )
}

export default NewMessageForm;