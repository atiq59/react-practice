import React from "react";

function Greeting() {

    let greeting = '';
    const cssStyle = {
        color: '',
        backgroundColor: 'pinkk'
    }

    const date = new Date(),
        hour = date.getHours()
    
    if (hour >= 1 && hour < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'green';
    } else if (hour >= 12 && hour < 19) {
        greeting = 'Good Afternoon';
        cssStyle.color = 'orange';
    } else {
        greeting = 'Good Night';
        cssStyle.color = 'black'
    }

    return <span style={cssStyle}>{` ${greeting}`}</span>

}

export default Greeting;