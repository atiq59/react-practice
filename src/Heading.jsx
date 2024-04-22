import React from "react";
import '././App.css';

function Heading(props) {

	console.log(props);

	return (
		<h1 className="heading">My name is {props.fName} {props.lName}</h1>
	)
}

export default Heading;