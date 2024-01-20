import { EducationSection } from "./EducationSection";
import { GeneralSection } from "./GeneralSection";
import { WorkExperienceSection } from "./WorkExperienceSection";
export function Form({
	onGeneralInfoUpdate,
	onExperienceRecordAdd,
	experienceRecords,
}) {
	function onSaveForm(e) {
		onExperienceRecordAdd(e);
	}

	return (
		<div className="curriculum-form">
			<GeneralSection onUpdate={onGeneralInfoUpdate}></GeneralSection>
			<EducationSection
			></EducationSection>
			<WorkExperienceSection
				saveFormCallback={onSaveForm}
				experienceRecords={experienceRecords}
			></WorkExperienceSection>
		</div>
	);
}
