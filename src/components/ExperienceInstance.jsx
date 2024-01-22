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
	editCallback,
	saveCallback,
	data,
}) {
	return (
		<Instance
			isEditing={isEditing}
			editCallback={editCallback}
			saveCallback={saveCallback}
			data={data}
			fields={experienceFields}
		></Instance>
	);
}
