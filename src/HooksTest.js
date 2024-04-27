import { useState } from 'react';
import './HooksTest.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';


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
                <IconButton color='error' aria-label="delete" onClick={() => IncreaseNum('minus')} disabled={count === 0}><RemoveIcon /></IconButton>                
                <h1 style={ myStyle }>{count}</h1>
                <IconButton color='primary' aria-label="delete" onClick={() => IncreaseNum()}><AddIcon /></IconButton>                
            </div>

            <form onSubmit={submit}>
                <h2>Hello, {`${formData.fName} ${formData.lName}`}</h2>
                <p>{formData.email}</p>
                <input type='text' placeholder='Enter your first name' name='fName' 
                onChange={setInputValue} />
                <br />
                <input type='text' placeholder='Enter your last name' name='lName' 
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