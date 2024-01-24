import { EducationSection } from "./EducationSection";
import { GeneralSection } from "./GeneralSection";
import { WorkExperienceSection } from "./WorkExperienceSection";
import "../styles/form.css";
import { useState } from "react";

export function Form({
	onGeneralInfoUpdate,
	onRecordAdd,
	onRecordDelete,
	experienceRecords,
	educationRecords,
}) {
	const [openForm, setOpenForm] = useState({ index: null, id: null });

	function onOpenForm(index, id) {
		setOpenForm({ index, id });
	}

	function onCloseForm() {
		setOpenForm({ index: null, id: null });
	}

	function onExperienceRecordSave(e) {
		onCloseForm();
		onRecordAdd(e, "experience");
	}
	function onEducationRecordSave(e) {
		onCloseForm();
		onRecordAdd(e, "education");
	}

	function onExperienceRecordDelete(id) {
		onCloseForm();
		onRecordDelete(id, "experience");
	}
	function onEducationRecordDelete(id) {
		onCloseForm();
		onRecordDelete(id, "education");
	}

	return (
		<div className="curriculum-form flex-cols">
			<GeneralSection onUpdate={onGeneralInfoUpdate}></GeneralSection>
			<EducationSection
				isFormOpen={openForm.index === 0}
				openFormId={openForm.id}
				onOpenForm={onOpenForm}
				onCloseForm={onCloseForm}
				onSaveForm={onEducationRecordSave}
				onDelete={onEducationRecordDelete}
				records={educationRecords}
			></EducationSection>
			<WorkExperienceSection
				isFormOpen={openForm.index === 1}
				openFormId={openForm.id}
				onOpenForm={onOpenForm}
				onCloseForm={onCloseForm}
				onSaveForm={onExperienceRecordSave}
				onDelete={onExperienceRecordDelete}
				records={experienceRecords}
			></WorkExperienceSection>
		</div>
	);
}
