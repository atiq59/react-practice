import { useState } from 'react';
import './Demo.css';
import ToDoList from './components/ToDoList';

function Demo() {

    const [inputModel, setInput] = useState('');
    const [listOfInput, setList] = useState([]);

    const onTypeInput = (event) => {
        setInput(event.target.value);
    }

    const addList = () => {
        setList(preValue => [...preValue, inputModel]);
        setInput('');
    }

    const deleteList = (list) => {
        setList(preValue => {
            return preValue.filter(val => val !== list)
        })
    }

    return (
        <>
            <div className="mainDiv">
                <div className="card">
                    <p className='heading'>ToDo List</p>
                    <input type='text' placeholder='Add Item' value={inputModel} onChange={onTypeInput} />
                    <button className='plus' onClick={addList}>+</button>

                    <ol>
                        {
                            listOfInput.map((val, index) => {
                                return (
                                
                                    <ToDoList 
                                        key={index}
                                        value={val}
                                        onSelect={deleteList}

                                    />
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Demo;