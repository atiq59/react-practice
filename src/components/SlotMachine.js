import './SlotMachine.css';
import Emoji from './Emoji';

function SlotMachine(props) {

    const { emoji1, emoji2, emoji3 } = props;
    const heading = ( emoji1 === emoji2 && emoji2 === emoji3 ) ? 'matching' : 'not matching';

    return (
        <>
            <div className='box'>
                <Emoji symbol={emoji1} label="sheep" />
                <Emoji symbol={emoji2} label="sheep" />
                <Emoji symbol={emoji3} label="sheep" />
                <div>This is {heading}</div>
            </div>
        </>
    )
}

export default SlotMachine