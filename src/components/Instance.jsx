import { Input } from "./Input";
import { camelToKebab } from "../utilities";

function EditingInstance({ submitCallback, data, fields }) {
	if (!data) {
		data = fields.reduce((obj, field) => {
			obj[field.name] = "";
			return obj;
		}, {});
	}

	function renderField(field) {
		const fieldValue = data[field.name];
		if (field.type === "textarea") {
			return (
				<label key={field.name}>
					{field.label}
					<textarea defaultValue={fieldValue}></textarea>
				</label>
			);
		} else {
			return (
				<Input
					key={field.name}
					label={field.label}
					name={camelToKebab(field.name)}
					type={field.type}
					value={fieldValue}
				></Input>
			);
		}
	}

	return (
		<form className="record-container" onSubmit={submitCallback}>
			<fieldset className="inputs-container">
				{fields.map((field) => renderField(field))}
			</fieldset>
			<button type="button">
			</button>
			<button>Add</button>
		</form>
	);
}

export function Instance({
	isEditing,
	editCallback,
	saveCallback,
	data,
	fields,
}) {
	return (
		<>
			{isEditing ? (
				<EditingInstance
					submitCallback={saveCallback}
					data={data}
					fields={fields}
				></EditingInstance>
			) : (
				<div className="record-container">
					<h3>{data[fields[0].name]}</h3>
					<span>{data[fields[1].name]}</span>
					<button onClick={editCallback}>
					</button>
				</div>
			)}
		</>
	);
}
