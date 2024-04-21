import React from "react";
import '././App.css';

function Heading() {

	const name = {
		fName: 'Atiq',
		lName: 'Shahab'
	}

	return (
		<h1 className="heading">My name is {name.fName} {name.lName}</h1>
	)
}

export default Heading;