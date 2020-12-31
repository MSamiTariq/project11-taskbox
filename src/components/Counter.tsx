import React from "react";
import '../App/App.css';

interface props {
	count: number;
	text: string;
	declass: string;
}

const Counter = ({ text, count, declass }: props) => {
	const clas = declass;
	return (
		<div className={clas}>
			{text} &nbsp; {count}
		</div>
	);
};

export default Counter;
