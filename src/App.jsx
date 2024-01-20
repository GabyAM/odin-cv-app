import { Form } from "./components/Form";
import { Curriculum } from "./components/Curriculum";
import { useState } from "react";
import { snakeToCamel } from "./utilities";

function App() {
	const [generalInfo, setGeneralInfo] = useState({
		name: "Your name",
		email: "heregoesyouremail@gmail.com",
		phone: "1234-12345",
	});
	const [experienceRecords, setExperienceRecords] = useState([]);

	function updateGeneralInfo(e) {
		const { name, value } = e.target;
		console.log("update");
		setGeneralInfo({ ...generalInfo, [name]: value });
	}

	function updateExperienceRecords(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		let newRecord = {};
		formData.forEach((value, key) => {
			newRecord[snakeToCamel(key)] = value;
		});
		console.log(newRecord);
		const id = formData.get("id");
		if (id) {
			const newExperienceRecords = [...experienceRecords];
			const elementIndex = newExperienceRecords.findIndex(
				(record) => record.id === id
			);
			newExperienceRecords[elementIndex] = { ...newRecord };
			setExperienceRecords(newExperienceRecords);
		} else {
			newRecord.id = crypto.randomUUID();
			setExperienceRecords([...experienceRecords, newRecord]);
		}
		console.log("record created!");
	}

	return (
		<>
			<Form
				onGeneralInfoUpdate={updateGeneralInfo}
				onExperienceRecordAdd={updateExperienceRecords}
				experienceRecords={experienceRecords}
			></Form>
			<Curriculum
			></Curriculum>
		</>
	);
}

export default App;
