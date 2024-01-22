export function Input({ changeCallback, label, name, type, value }) {
	return (
		<label>
			{label}{" "}
			<input
				type={type}
				name={name}
				onChange={changeCallback}
				defaultValue={value}
			></input>
		</label>
	);
}
