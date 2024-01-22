import { EducationInstance } from "./EducationInstance";

export function EducationSection({
	isFormOpen,
	openFormId,
	openFormCallback,
}) {
	return (
		<div>
			{isFormOpen && openFormId === null ? (
				<EducationInstance
					isEditing={true}
				></EducationInstance>
			) : (
				<button onClick={() => openFormCallback(0, null)}>Add</button>
			)}
		</div>
	);
}
