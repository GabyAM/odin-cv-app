import { Instance } from "./Instance";

const experienceFields = [
	{ label: "Company name", type: "text", name: "companyName" },
	{ label: "Position title", type: "text", name: "positionTitle" },
	{
		label: "Main resposibilities",
		type: "textarea",
		name: "mainResponsibilities",
	},
	{ label: "Start date", type: "date", name: "startDate" },
	{ label: "End date", type: "date", name: "endDate" },
];

export function ExperienceInstance({
	isEditing,
	onEdit,
	onSave,
	onDelete,
	data,
}) {
	return (
		<Instance
			isEditing={isEditing}
			onEdit={onEdit}
			onSave={onSave}
			onDelete={onDelete}
			data={data}
			fields={experienceFields}
		></Instance>
	);
}
