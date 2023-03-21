export default function Todo({ id, title, completed, onCompleted }) {
	return (
		<div
			style={{ border: '2px solid black', padding: '1rem', width: '90%' }}
			onClick={() => onCompleted(id)}
		>
			<input
				type="checkbox"
				checked={completed}
				value={completed}
				// onChange={(e) => onCompleted(id)}
			/>
			{title}
		</div>
	);
}
