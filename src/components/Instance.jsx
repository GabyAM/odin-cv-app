import { Input } from "./Input";
import { camelToKebab } from "../utilities";
import { TextArea } from "./TextArea";
import { DateInput } from "./DateInput";

function EditingInstance({ submitCallback, onDelete, data, fields }) {
	if (!data) {
		data = fields.reduce((obj, field) => {
			if (field.type === "date") {
				obj[field.name] = { year: "", month: "" };
			} else obj[field.name] = "";
			return obj;
		}, {});
	}

	function renderField(field) {
		const fieldValue = data[field.name];
		if (field.type === "textarea") {
			return (
				<TextArea
					key={field.name}
					label={field.label}
					name={field.name}
					value={fieldValue}
				></TextArea>
			);
		} else if (field.type === "date") {
			return (
				<DateInput
					key={field.name}
					label={field.label}
					yearValue={fieldValue.year}
					monthValue={fieldValue.month}
				></DateInput>
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
				<Input type={"hidden"} value={data.id} name={"id"}></Input>
				{fields.map((field) => renderField(field))}
			</fieldset>
			<div className="form-buttons-container">
				<button
					onClick={() => onDelete}
					type="button"
					className="secondary-button"
				>
				</button>
				<button className="add-button">
				</button>
			</div>
		</form>
	);
}

export function Instance({
	isEditing,
	onEdit,
	onSave,
	onDelete,
	data,
	fields,
}) {
	return (
		<>
			{isEditing ? (
				<EditingInstance
					submitCallback={onSave}
					onDelete={onDelete}
					data={data}
					fields={fields}
				></EditingInstance>
			) : (
				<div className="record-container">
					<h3>{data[fields[0].name]}</h3>
					<span>{data[fields[1].name]}</span>
					<button onClick={onEdit}>
						<EditIcon></EditIcon>
					</button>
				</div>
			)}
		</>
	);
}
