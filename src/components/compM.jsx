import { Button } from '@mui/material';
import React from "react";
import { BtnName } from '../index';

function CompM() {
    function redirectToMUI() {
        window.open('https://mui.com/material-ui/all-components/');
    }
    return(
        <>
            <BtnName.Consumer>
                {
                    ({first, second}) => {
                    return <Button size="small" onClick={redirectToMUI}>{`${first} ${second}`}</Button>
                    }
                }
            </BtnName.Consumer>
        </>
    );
}

export default CompM;