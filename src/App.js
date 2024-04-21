// import logo from './logo.svg';
import './App.css';

function App() {
	const myStyle = {
		textAlign: 'center',
		color: 'red'
	}
	const name = {
		fName: 'Atiq',
		lName: 'Shahab'
	}

	const image = "https://picsum.photos/200/300";

	const date = new Date(),
		currentDate = date.toLocaleDateString(),
		currentTime = date.toLocaleTimeString();


	return (
		// [
		// 	<h1>Hello World</h1>,
		// 	<h2>Hello world 2</h2>,
		// 	<div>
		// 		<span style={myStyle}>Span 1</span>
		// 		<span>Span 2</span>
		// 	</div>
		// ]
		<>
			<h1 className='heading'>My Name is {name.fName} {name.lName}</h1>
			<p style={myStyle}>Current Date: {currentDate}</p>
			<p style={{ textAlign: 'center' }}>Current Time: {currentTime}</p>
			<div className='imgDiv'>
				<img src={image} alt='Test' />
			</div>
		</>
	);
}

export default App;
