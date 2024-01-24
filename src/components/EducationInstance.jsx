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
	saveCallback,
	editCallback,
	onDelete,
}) {
	return (
		<Instance
			isEditing={isEditing}
			data={data}
			saveCallback={saveCallback}
			editCallback={editCallback}
			onDelete={onDelete}
			fields={educationFields}
		></Instance>
	);
}
