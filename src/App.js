import './App.css';
import data from './common/data';
import Card from './components/card';

function App() {

	return (
		<>
			<div className='main'>
				{data.map((val, i) => {
					return (
						<>
							<Card
								key={i}
								name={val.name}
								designation={val.designation}
								experience={val.experience}
								employeeId={val.employeeId}
							/>
						</>
					)
				})}
			</div>
		</>
	);
}

export default App;
