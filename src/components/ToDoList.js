import '../Demo.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function ToDoList(props) {
    return (
        <>
            <li className='noStyle'><IconButton color='error' aria-label="delete" onClick={() => props.onSelect(props.value)} size='small'><DeleteIcon /></IconButton>{props.value}</li>
        </>
    )
}

export default ToDoList