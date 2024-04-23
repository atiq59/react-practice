import './Test.css';
import SlotMachine from './components/SlotMachine';

function Test() {

    const data = [
        { emoji1: '7️⃣', emoji2: '7️⃣', emoji3: '7️⃣' },
        { emoji1: '🎱', emoji2: '🍒', emoji3: '😂' },
        { emoji1: '🍒', emoji2: '🎱', emoji3: '🍒' },
        { emoji1: '🍒', emoji2: '🍒', emoji3: '🍒' },
        { emoji1: '🎱', emoji2: '💸', emoji3: '💸' },
        { emoji1: '💸', emoji2: '💸', emoji3: '💸' },
    ]

    return (
        <>
            <h1 className='top-heading'>Welcome to the Slot Machine 🎰</h1>
            <div className='main'>
                {
                    data.map(( val, index ) => {
                        return (
                            <SlotMachine key={index} emoji1={val.emoji1} emoji2={val.emoji2} emoji3={val.emoji3} />
                        )
                    })
                }
            </div>
        </>
    )

}

export default Test