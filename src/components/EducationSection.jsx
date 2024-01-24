import { EducationInstance } from "./EducationInstance";

export function EducationSection({
	isFormOpen,
	openFormId,
	onOpenForm,
	onCloseForm,
	onSaveForm,
	onDelete,
	records,
}) {
	return (
		<div>
			<h2>Education</h2>
			{records.length > 0 && (
				<ul>
					{records.map((record) => {
						return (
							<EducationInstance
								key={record.id}
								isEditing={
									isFormOpen && record.id === openFormId
								}
								onEdit={() => onOpenForm(0, record.id)}
								onSave={onSaveForm}
								onDelete={onDelete}
								data={record}
							></EducationInstance>
						);
					})}
				</ul>
			)}
			{isFormOpen && openFormId === null ? (
				<EducationInstance
					isEditing={true}
					onSave={onSaveForm}
					onDelete={onCloseForm}
				></EducationInstance>
			) : (
				<button
					className="add-button"
					onClick={() => onOpenForm(0, null)}
				>
					Add
				</button>
			)}
		</div>
	);
}
