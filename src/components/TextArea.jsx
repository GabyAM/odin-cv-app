export function TextArea({ label, name, value, changeCallback }) {
	return (
		<label>
			{label}
			<textarea
				name={name}
				defaultValue={value}
				onChange={changeCallback}
			></textarea>
		</label>
	);
}
