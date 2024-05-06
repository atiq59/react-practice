import { BtnName } from '.';
import './App.css';
import Demo from './Demo';
// import Data from './common/Data';
// import Card from './components/Card';

function App() {

	return (
		<>
			{/* <div className='main'>
				{Data.map(val => {
					return (
						<Card 
							key={val.employeeId}
							name={val.name}
							designation={val.designation}
							experience={val.experience}
							employeeId={val.employeeId}
						/>
					)
				})}
			</div> */}
			<BtnName.Provider value={{first: 'Learn', second: 'More'}}>
				<Demo />
			</BtnName.Provider>
		</>
	);
}

export default App;
