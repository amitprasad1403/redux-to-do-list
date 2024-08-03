import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, deleteAll } from "../actions/index";

export default function Todo() {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducer.list);

    const handleAddTodo = () => {
        if (inputData.trim() !== '') {
            dispatch(addTodo(inputData));
            setInputData('');
        }
    };

    return (
        <>
            <div className="todo-container">
                <h1>Redux - To-Do List ✌️</h1>
                <input
                    type="text"
                    placeholder="✍️ Enter a new task"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add</button>
                <ul>
                    {
                        list.map((elem) => (
                            <li key={elem.id}>
                                {elem.data}
                                <div className="buttons"> 
                                    <button className='delete-btn' onClick={()=> dispatch(deleteTodo(elem.id))}>🗑️</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <button className="delete-all-btn" onClick={()=> dispatch(deleteAll())}>Delete All</button>
            </div>
        </>
    );
}
