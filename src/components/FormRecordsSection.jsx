import { Instance } from "./Instance";

const sectionsData = {
	education: {
		title: "Education",
		form: [
			{ label: "School name", type: "text", name: "schoolName" },
			{ label: "Study title", type: "text", name: "studyTitle" },
			{ label: "Start date", type: "date", name: "startDate" },
			{ label: "End date", type: "date", name: "endDate" },
		],
	},
	workExperience: {
		title: "Work experience",
		form: [
			{ label: "Company name", type: "text", name: "companyName" },
			{ label: "Position title", type: "text", name: "positionTitle" },
			{
				label: "Main resposibilities",
				type: "textarea",
				name: "mainResponsibilities",
			},
			{ label: "Start date", type: "date", name: "startDate" },
			{ label: "End date", type: "date", name: "endDate" },
		],
	},
};

export function FormRecordsSection({
	sectionName,
	openForm,
	onOpenForm,
	onCloseForm,
	onSaveForm,
	onDelete,
	records,
}) {
	const fields = sectionsData[sectionName].form;
	const isFormOpen = openForm.sectionName === sectionName;
	return (
		<div>
			<h2>{sectionsData[sectionName].title}</h2>
			{records.length > 0 && (
				<ul>
					{records.map((record) => {
						return (
							<Instance
								key={record.id}
								isEditing={
									isFormOpen && record.id === openForm.id
								}
								onEdit={() =>
									onOpenForm(sectionName, record.id)
								}
								onSave={onSaveForm}
								onDelete={() => onDelete(record.id)}
								data={record}
								fields={fields}
							></Instance>
						);
					})}
				</ul>
			)}
			{isFormOpen && openForm.id === null ? (
				<Instance
					isEditing={true}
					onSave={onSaveForm}
					onDelete={onCloseForm}
					fields={fields}
				></Instance>
			) : (
				<button
					className="add-button"
					onClick={() => onOpenForm(sectionName, null)}
				>
					Add
				</button>
			)}
		</div>
	);
}
