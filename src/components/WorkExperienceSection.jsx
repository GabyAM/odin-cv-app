import { JobInstance } from "./JobInstance";

export function WorkExperienceSection({
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
								saveCallback={saveFormCallback}
								data={record}
							></ExperienceInstance>
						);
					})}
				</ul>
			)}
					<ExperienceInstance
						isEditing={true}
						saveCallback={saveFormCallback}
					></ExperienceInstance>
			)}
		</div>
	);

	return sectionContainer;
}
