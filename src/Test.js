import './Test.css';

function Test() {

    let greeting = '';
    const cssStyle = {
        color: '',
        backgroundColor: 'pink'
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

    return (
        <>
            <div className='box'>
                    <h1 className='heading'>
                        Hello Sir, 
                        <span style={cssStyle}>{` ${greeting}`}</span>
                    </h1>
            </div>
        </>
    )
}

export default Test