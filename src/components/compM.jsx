import { Button } from '@mui/material';
import React, { useContext } from "react";
import { BtnName } from '../App';

function CompM() {

    const {first, second} = useContext(BtnName);
    
    function redirectToMUI() {
        window.open('https://mui.com/material-ui/all-components/');
    }
    return(
        <>
            <Button size="small" onClick={redirectToMUI}>{`${first} ${second}`}</Button>
        </>
    );
}

export default CompM;