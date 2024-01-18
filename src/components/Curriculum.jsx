import { EducationSection } from "./EducationSection";
import { GeneralSection } from "./GeneralSection";
import { LaboralExperienceSection } from "./PracticalExperienceSection";

export function Curriculum() {
	return (
		<div>
			<GeneralSection></GeneralSection>
			<EducationSection></EducationSection>
			<LaboralExperienceSection></LaboralExperienceSection>
		</div>
	);
}
