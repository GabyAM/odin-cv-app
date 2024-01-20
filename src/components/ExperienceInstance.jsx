import { Input } from "./Input";

function EditingExperienceInstance({ data, submitCallback }) {
	if (!data) {
		data = {};
	}
	const {
		companyName = "",
		positionTitle = "",
		mainResponsabilities = "",
		startDate = "",
		endDate = "",
	} = data;
	return (
		<form className="record-container" onSubmit={submitCallback}>
			<fieldset className="inputs-container">
				<Input type={"hidden"} value={data.id} name={"id"}></Input>
				<Input
					label={"Company name"}
					name="company-name"
					type={"text"}
					value={companyName}
				></Input>
				<Input
					label={"Position title"}
					name="position-title"
					type={"text"}
					value={positionTitle}
				></Input>
				<label>
					{"main responsabilities"}
					<textarea defaultValue={mainResponsabilities}></textarea>
				</label>
				<Input
					label={"Start date"}
					name="start-date"
					type={"date"}
					value={startDate}
				></Input>
				<Input
					label={"End date"}
					name="end-date"
					type={"date"}
					value={endDate}
				></Input>
			</fieldset>
			<button type="button"></button>
			<button>Add</button>
		</form>
	);
}

export function ExperienceInstance({
	isEditing,
	editCallback,
	saveCallback,
	data,
}) {
	return (
		<>
			{isEditing ? (
				<EditingExperienceInstance
					submitCallback={saveCallback}
					data={data}
				></EditingExperienceInstance>
			) : (
				<div className="record-container">
					<h3>{data.companyName}</h3>
					<span>{data.positionTitle}</span>
					<button onClick={editCallback}>Edit</button>
				</div>
			)}
		</>
	);
}
