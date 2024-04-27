import { useState } from 'react';
import './Demo.css';
import ToDoList from './components/ToDoList';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

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
            <div className='mainDiv'>

                <Card sx={{ minWidth: 275, minHeight: 375 }}>

                    <CardContent>
                        <p className='heading'>ToDo List</p>

                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item xs={8}>
                                <TextField id="standard-basic" label="Add Item" variant="standard" size='small' value={inputModel} onChange={onTypeInput} />
                            </Grid>

                            <Grid item xs={2}>
                                <IconButton color='primary' aria-label="add" onClick={() => addList()}><AddIcon /></IconButton>
                            </Grid>
                        </Grid>

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

                    </CardContent>
                    
                </Card>
            </div>
        </>
    )
}

export default Demo;