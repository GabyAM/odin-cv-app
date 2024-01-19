import { EducationSection } from "./EducationSection";
import { GeneralSection } from "./GeneralSection";
import { WorkExperienceSection } from "./WorkExperienceSection";
export function Form({
}) {
	return (
		<div className="curriculum-form">
			<GeneralSection
			></GeneralSection>
			<EducationSection
			></EducationSection>
			<WorkExperienceSection
			></WorkExperienceSection>
		</div>
	);
}
