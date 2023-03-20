import React, { useState } from 'react';

function Todoform() {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Add a todo'
                    value={input}
                    name='text'
                    className='todo-input'
                />
                <button className='todo-button'>
                    Add ToDo
                </button>
            </form>
        </div>
    )
}

export default Todoform
