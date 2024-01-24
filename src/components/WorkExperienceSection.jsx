import { ExperienceInstance } from "./ExperienceInstance";

export function WorkExperienceSection({
	isFormOpen,
	openFormId,
	onOpenForm,
	onCloseForm,
	onSaveForm,
	onDelete,
	records,
}) {
	const sectionContainer = (
		<div>
			<h2>Work Experience</h2>
			{records.length > 0 && (
				<ul>
					{records.map((record) => {
						return (
							<ExperienceInstance
								key={record.id}
								isEditing={
									isFormOpen && record.id === openFormId
								}
								onEdit={() => onOpenForm(1, record.id)}
								onDelete={() => onDelete(record.id)}
								onSave={onSaveForm}
								data={record}
							></ExperienceInstance>
						);
					})}
				</ul>
			)}
			{isFormOpen ? (
				openFormId === null && (
					<ExperienceInstance
						isEditing={true}
						onSave={onSaveForm}
						onDelete={onCloseForm}
					></ExperienceInstance>
				)
			) : (
				<button
					className="add-button"
					onClick={() => {
						onOpenForm(1, null);
					}}
				>
					Add
				</button>
			)}
		</div>
	);

	return sectionContainer;
}
