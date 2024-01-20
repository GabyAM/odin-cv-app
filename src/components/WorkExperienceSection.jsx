import { ExperienceInstance } from "./ExperienceInstance";

export function WorkExperienceSection({
	isFormOpen,
	openFormId,
	openFormCallback,
	saveFormCallback,
	experienceRecords,
}) {
	const sectionContainer = (
		<div>
			<h2>Work Experience</h2>
			{experienceRecords.length > 0 && (
				<ul>
					{experienceRecords.map((record) => {
						return (
							<ExperienceInstance
								key={record.id}
								isEditing={
									isFormOpen && record.id === openFormId
								}
								editCallback={() =>
									openFormCallback(1, record.id)
								}
								saveCallback={saveFormCallback}
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
						saveCallback={saveFormCallback}
					></ExperienceInstance>
				)
			) : (
				<button
					onClick={() => {
						openFormCallback(1, null);
					}}
				>
					Add
				</button>
			)}
		</div>
	);

	return sectionContainer;
}
