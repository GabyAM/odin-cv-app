import { Form } from "./components/Form";
import { Curriculum } from "./components/Curriculum";
import { useState } from "react";
import { kebabToCamel } from "./utilities";

function App() {
	const [generalInfo, setGeneralInfo] = useState({
		name: "Your name",
		email: "heregoesyouremail@gmail.com",
		phone: "1234-12345",
	});
	const [experienceRecords, setExperienceRecords] = useState([]);
	const [educationRecords, setEducationRecords] = useState([]);

	function updateGeneralInfo(e) {
		const { name, value } = e.target;
		console.log("update");
		setGeneralInfo({ ...generalInfo, [name]: value });
	}

	function updateRecords(e, recordType) {
		e.preventDefault();
		const formData = new FormData(e.target);
		let newRecord = { startDate: {}, endDate: {} };
		formData.forEach((value, key) => {
			if (key.includes("start")) {
				let propertyName = key.slice(6);
				newRecord.startDate[propertyName] = value;
			} else if (key.includes("end")) {
				let propertyName = key.slice(4);
				newRecord.endDate[propertyName] = value;
			} else newRecord[kebabToCamel(key)] = value;
		});
		console.log(newRecord);
		const id = formData.get("id");

		let records;
		let setRecords;
		if (recordType === "experience") {
			records = experienceRecords;
			setRecords = setExperienceRecords;
		} else {
			records = educationRecords;
			setRecords = setEducationRecords;
		}
		if (id) {
			const newExperienceRecords = [...records];
			const elementIndex = newExperienceRecords.findIndex(
				(record) => record.id === id
			);
			newExperienceRecords[elementIndex] = { ...newRecord };
			setRecords(newExperienceRecords);
		} else {
			newRecord.id = crypto.randomUUID();
			setRecords([...records, newRecord]);
		}
		console.log("record created!");
	}

	return (
		<>
			<Form
				onGeneralInfoUpdate={updateGeneralInfo}
				onRecordAdd={updateRecords}
				experienceRecords={experienceRecords}
			></Form>
			<Curriculum
			></Curriculum>
		</>
	);
}

export default App;
