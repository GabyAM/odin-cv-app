import { getLastEightyYears } from "../utilities";
import "../styles/dateInput.css";

function MonthInput({ name, value }) {
	return (
		<select name={name} defaultValue={value}>
			<option value={""}>Month</option>
			<option value={"january"}>January</option>
			<option value={"february"}>February</option>
			<option value={"march"}>March</option>
			<option value={"april"}>April</option>
			<option value={"may"}>May</option>
			<option value={"june"}>June</option>
			<option value={"july"}>July</option>
			<option value={"august"}>August</option>
			<option value={"september"}>September</option>
			<option value={"october"}>October</option>
			<option value={"november"}>November</option>
			<option value={"december"}>December</option>
		</select>
	);
}

function YearInput({ name, value }) {
	return (
		<select name={name} defaultValue={value}>
			<option value="">Year</option>
			{getLastEightyYears().map((year) => {
				return (
					<option key={year} value={year}>
						{year}
					</option>
				);
			})}
		</select>
	);
}

export function DateInput({ label, monthValue, yearValue }) {
	const namePrefix = label === "Start date" ? "start" : "end";
	return (
		<label>
			{label}
			<div className="date-input">
				<MonthInput
					value={monthValue}
					name={`${namePrefix}-month`}
				></MonthInput>
				<YearInput value={yearValue} name={`${namePrefix}-year`}>
					{" "}
				</YearInput>
			</div>
		</label>
	);
}
