import { EducationSection } from "./EducationSection";
import { GeneralSection } from "./GeneralSection";
import { WorkExperienceSection } from "./WorkExperienceSection";
export function Form({
	onGeneralInfoUpdate,
}) {
	return (
		<div className="curriculum-form">
			<GeneralSection onUpdate={onGeneralInfoUpdate}></GeneralSection>
			<EducationSection
			></EducationSection>
			<WorkExperienceSection
			></WorkExperienceSection>
		</div>
	);
}
