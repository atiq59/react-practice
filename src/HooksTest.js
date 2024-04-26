import { useState } from 'react';
import './HooksTest.css';


const Hooks = () => {

    const [count, setState] = useState(0);
    const [updatedDate, setDate] = useState(new Date().toLocaleTimeString());
    const [fontValue, setFont] = useState('bold');
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: ''
    });

    const setInputValue = (event) => {
        const { name, value } = event.target;
        setFormData( (previousValue) => {
           
            return {
                ...previousValue,
                [ name ]: value
            }
        });
    }
    
    const submit = (event) => {
        event.preventDefault();
    }
    
    const IncreaseNum = (input = 'plus') => {
        input === 'minus' ? setState(count - 1) : setState(count + 1)
    }

    const GetUpdatedTime = () => {
        console.log(fontValue);
        setFont('normal');
        setDate(new Date().toLocaleTimeString());
    }

    const myStyle = {
        textAlign: 'center',
        marginBottom: '10px',
        marginTop: '10px'
    }

    return (
        <>
            <div style={{fontWeight: fontValue}}>{updatedDate}</div>
            <button className='time' onClick={GetUpdatedTime}>Get Time</button>
            <div className='box'>
                <button onClick={() => IncreaseNum('minus')} disabled={count === 0}>-</button>
                <h1 style={ myStyle }>{count}</h1>
                <button onClick={() => IncreaseNum()}>+</button>
            </div>

            <form onSubmit={submit}>
                <h2>Hello, {`${formData.fName} ${formData.lName}`}</h2>
                <p>{formData.email}</p>
                <input type='text' placeholder='Enter your first name' name='fName' 
                // value={formData.fName} 
                onChange={setInputValue} />
                <br />
                <input type='text' placeholder='Enter your last name' name='lName' 
                // value={formData.lName} 
                onChange={setInputValue} />
                <br />
                <input type='email' placeholder='Enter your email' name='email' 
                // value={formData.email} 
                onChange={setInputValue} />

            </form>
        </>
    )
}

export default Hooks