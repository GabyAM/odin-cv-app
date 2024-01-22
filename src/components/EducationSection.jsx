import { EducationInstance } from "./EducationInstance";

export function EducationSection({
	isFormOpen,
	openFormId,
	openFormCallback,
	saveFormCallback,
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
								editCallback={() =>
									openFormCallback(1, record.id)
								}
								saveCallback={saveFormCallback}
								data={record}
							></EducationInstance>
						);
					})}
				</ul>
			)}
			{isFormOpen && openFormId === null ? (
				<EducationInstance
					isEditing={true}
					saveCallback={saveFormCallback}
				></EducationInstance>
			) : (
				<button onClick={() => openFormCallback(0, null)}>Add</button>
			)}
		</div>
	);
}
