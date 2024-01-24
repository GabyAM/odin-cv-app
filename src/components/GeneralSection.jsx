import { Input } from "./Input";

export function GeneralSection({ onUpdate }) {
	return (
		<div>
			<h2>Personal Information</h2>
			<div className="inputs-container">
				<Input
					changeCallback={onUpdate}
					label={"Name"}
					name={"name"}
					type="text"
				></Input>
				<Input
					changeCallback={onUpdate}
					label={"Email"}
					name={"email"}
					type="email"
				></Input>
				<Input
					changeCallback={onUpdate}
					label={"Phone"}
					name={"phone"}
					type="tel"
				></Input>
				<TextArea
					changeCallback={onUpdate}
					label={"Profile"}
					name={"profile"}
				></TextArea>
			</div>
		</div>
	);
}
