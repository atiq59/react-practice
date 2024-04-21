// import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Listol from './Listol';
import calculate from './common/calculator';

function App() {
	const myStyle = {
		textAlign: 'center',
		color: 'red'
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
			<Heading />
			<p style={myStyle}>Current Date: {currentDate}</p>
			<p style={{ textAlign: 'center' }}>Current Time: {currentTime}</p>
			<div className='imgDiv'>
				<img src={image} alt='Test' />
			</div>
			<Listol />
			<ol>
				<li>Sum of two numbers: { calculate('add', 10, 19) }</li>
				<li>Substract of two numbers: { calculate('subtract', 25, 17) }</li>
				<li>Multiply of two numbers: { calculate('multiply', 12, 2) }</li>
				<li>Division of two numbers: { calculate('divide', 10, 3) }</li>
			</ol>
		</>
	);
}

export default App;
