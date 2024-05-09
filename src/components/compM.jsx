import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from "react";
import { BtnName } from '../App';

function CompM() {

    const {first, second} = useContext(BtnName);
    const [ count, setState ] = useState(0);

    useEffect(() => {
        document.title = `You click ${count} times`;
    });
    
    return(
        <>
            <Button size="small" onClick={
                () => {
                    setState( count + 1 )
                }
            }>{`${first} ${second} ${count}`}</Button>
        </>
    );
}

export default CompM;