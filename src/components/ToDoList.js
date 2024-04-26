import '../Demo.css';

function ToDoList(props) {
    return (
        <>
        <li className='noStyle'><button className='minus' onClick={() => props.onSelect(props.value)}>X</button> {props.value}</li>
        </>
    )
}

export default ToDoList