import React from 'react';

export default function Timer(props) {
	const min = Math.floor(props.timeLeft / 60);
	const sec = (props.timeLeft % 60).toFixed(1);

	const str =
		(min > 0 ? `${min}:` : '') + (min > 0 && sec < 10 ? '0' : '') + sec;

	return (
		<div
			className={`gameLabel timer ${props.timeLeft < 5 && 'incorrectTarget'}`}
		>
			Time:
			<br />
			{str}
		</div>
	);
}
