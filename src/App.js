import { createContext } from 'react';
import './App.css';
import Demo from './Demo';
import Greeting from './Greeting';
import Test from './Test';
import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';

const BtnName = createContext();

function App() {

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={
						<BtnName.Provider value={{ first: 'Learn', second: 'More' }}>
							<Demo />
						</BtnName.Provider>
					} />

					<Route path='greeting' element={<Greeting />} />

					<Route path='test' element={<Test />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;
export { BtnName };
