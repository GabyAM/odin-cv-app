import { EducationSection } from "./EducationSection";
import { GeneralSection } from "./GeneralSection";
import { WorkExperienceSection } from "./WorkExperienceSection";
import { useState } from "react";

export function Form({
	onGeneralInfoUpdate,
	onExperienceRecordAdd,
	experienceRecords,
}) {
	const [openForm, setOpenForm] = useState({ index: null, id: null });

	function onOpenForm(index, id) {
		setOpenForm({ index, id });
	}

	function onCloseForm() {
		setOpenForm({ index: null, id: null });
	}

	function onSaveForm(e) {
		onCloseForm();
		onExperienceRecordAdd(e);
	}

	return (
		<div className="curriculum-form">
			<GeneralSection onUpdate={onGeneralInfoUpdate}></GeneralSection>
			<EducationSection
			></EducationSection>
			<WorkExperienceSection
				isFormOpen={openForm.index === 1}
				openFormId={openForm.id}
				openFormCallback={onOpenForm}
				saveFormCallback={onSaveForm}
				experienceRecords={experienceRecords}
			></WorkExperienceSection>
		</div>
	);
}
