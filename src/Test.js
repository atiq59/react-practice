import './Test.css';
import Greeting from './Greeting';

function Test() {

    

    return (
        <>
            <div className='box'>
                    <h1 className='heading'>
                        Hello Sir, 
                        <Greeting />
                    </h1>
            </div>
        </>
    )
}

export default Test