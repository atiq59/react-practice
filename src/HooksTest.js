import { useState } from 'react';
import './HooksTest.css';


const Hooks = () => {

    const [count, setState] = useState(0);
    const [updatedDate, setDate] = useState(new Date().toLocaleTimeString());

    
    const IncreaseNum = (input = 'plus') => {
        input === 'minus' ? setState(count - 1) : setState(count + 1)
    }

    const GetUpdatedTime = () => {
        setDate(new Date().toLocaleTimeString());
    }

    const myStyle = {
        textAlign: 'center',
        marginBottom: '10px',
        marginTop: '10px'
    }

    return (
        <>
            <div>{updatedDate}</div>
            <button className='time' onClick={GetUpdatedTime}>Get Time</button>
            <div className='box'>
                <button onClick={() => IncreaseNum()}>+</button>
                <h1 style={ myStyle }>{count}</h1>
                <button onClick={() => IncreaseNum('minus')} disabled={count === 0}>-</button>
            </div>
        </>
    )
}

export default Hooks