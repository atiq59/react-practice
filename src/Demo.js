import { useState } from 'react';
import './Demo.css';
import ToDoList from './components/ToDoList';
import CompM from './components/compM';

import { Card, CardContent, CardActions, TextField, IconButton, Grid, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


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
                            <Tooltip title="Add">
                                <IconButton color='primary' aria-label="add" onClick={() => addList()}><AddIcon /></IconButton>
                            </Tooltip>
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

                    <CardActions>
                        <CompM />
                    </CardActions>
                    
                </Card>
            </div>
        </>
    )
}

export default Demo;