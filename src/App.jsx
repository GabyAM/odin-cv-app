import { Form } from "./components/Form";
import "./App.css";
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
	const [isFormVisible, setIsFormVisible] = useState(null);

	function updateGeneralInfo(e) {
		const { name, value } = e.target;
		console.log("update");
		setGeneralInfo({ ...generalInfo, [name]: value });
	}

	function getRecordState(recordType) {
		let records;
		let setRecords;
		if (recordType === "experience") {
			records = experienceRecords;
			setRecords = setExperienceRecords;
		} else {
			records = educationRecords;
			setRecords = setEducationRecords;
		}
		return { records, setRecords };
	}

	function deleteRecord(id, recordType) {
		console.log("record deleted!");
		const { records, setRecords } = getRecordState(recordType);

		const newRecords = [...records].filter((record) => record.id !== id);
		setRecords(newRecords);
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

		const { records, setRecords } = getRecordState(recordType);

		if (id) {
			const newRecords = [...records];
			const elementIndex = newRecords.findIndex(
				(record) => record.id === id
			);
			newRecords[elementIndex] = { ...newRecord };
			setRecords(newRecords);
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
				onRecordDelete={deleteRecord}
				experienceRecords={experienceRecords}
				educationRecords={educationRecords}
				isVisible={isFormVisible}
			></Form>
			<Curriculum
				generalInfo={generalInfo}
				educationRecords={educationRecords}
				experienceRecords={experienceRecords}
			></Curriculum>
			<button
				onClick={() => setIsFormVisible(!isFormVisible)}
				className="show-curriculum-button"
			>
				{isFormVisible ? "Hide form" : "Show form"}
			</button>
		</>
	);
}

export default App;
