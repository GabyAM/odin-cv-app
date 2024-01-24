import "../styles/textarea.css";

export function TextArea({ label, name, value }) {
	return (
		<label>
			{label}
			<textarea name={name} defaultValue={value}></textarea>
		</label>
	);
}

// •
