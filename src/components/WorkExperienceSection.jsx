import { JobInstance } from "./JobInstance";

export function WorkExperienceSection({
}) {
	const sectionContainer = (
		<div>
			<h2>Work Experience</h2>
			<button onClick={addButtonCallback}>Add</button>
		</div>
	);

	return sectionContainer;
}
