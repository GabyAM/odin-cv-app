export function Input({ changeCallback, label, name, type }) {
	return (
		<label>
			{label}{" "}
			<input type={type} name={name} onChange={changeCallback}></input>
		</label>
	);
}
