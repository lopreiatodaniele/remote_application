import { useState } from 'react';

export const Button = () => {
	const [state, setState] = useState(0);
	return (
		<div>
			<p>THIS IS A BUTTON IN THE REMOTE APPLICATION</p>
			<button
				id="click-btn"
				className="shared-btn"
				onClick={() => setState((s) => s + 1)}
			>
				CLICK ME: {state}
			</button>
		</div>
	);
};

export default Button;
