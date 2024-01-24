import { Instance } from "./Instance";

const educationFields = [
	{ label: "School name", type: "text", name: "schoolName" },
	{ label: "Study title", type: "text", name: "studyTitle" },
	{ label: "Start date", type: "date", name: "startDate" },
	{ label: "End date", type: "date", name: "endDate" },
];

export function EducationInstance({
	isEditing,
	data,
	onSave,
	onDelete,
	onEdit,
}) {
	return (
		<Instance
			isEditing={isEditing}
			data={data}
			onSave={onSave}
			onEdit={onEdit}
			onDelete={onDelete}
			fields={educationFields}
		></Instance>
	);
}
