import { GeneralSection } from "./GeneralSection";
import "../styles/form.css";
import { useState } from "react";
import { FormRecordsSection } from "./FormRecordsSection";

export function Form({
	onGeneralInfoUpdate,
	onRecordAdd,
	onRecordDelete,
	experienceRecords,
	educationRecords,
	isVisible,
}) {
	const [openForm, setOpenForm] = useState({ sectionName: "", id: null });

	function onOpenForm(sectionName, id) {
		setOpenForm({ sectionName, id });
	}

	function onCloseForm() {
		setOpenForm({ sectionName: "", id: null });
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
		<div
			className={
				"curriculum-form flex-cols" + " " + (isVisible ? "show" : "")
			}
		>
			<GeneralSection onUpdate={onGeneralInfoUpdate}></GeneralSection>
			<FormRecordsSection
				sectionName={"education"}
				openForm={openForm}
				onOpenForm={onOpenForm}
				onCloseForm={onCloseForm}
				onSaveForm={onEducationRecordSave}
				onDelete={onEducationRecordDelete}
				records={educationRecords}
			></FormRecordsSection>
			<FormRecordsSection
				sectionName={"workExperience"}
				openForm={openForm}
				onOpenForm={onOpenForm}
				onCloseForm={onCloseForm}
				onSaveForm={onExperienceRecordSave}
				onDelete={onExperienceRecordDelete}
				records={experienceRecords}
			></FormRecordsSection>
		</div>
	);
}
