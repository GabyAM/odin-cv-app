import "../styles/curriculum.css";
import { MailIcon, PhoneIcon } from "./Icons";

export function Curriculum({
	generalInfo,
	educationRecords,
	experienceRecords,
}) {
	return (
		<div className="curriculum-container">
			<div className="curriculum">
				<div className="header flex-cols spaced">
					<h1>{generalInfo.name}</h1>
					<div className="flex-rows semi-spaced">
						<span className="flex-rows rows-centered small-gap">
							<span className="icon-container">
								<MailIcon></MailIcon>
							</span>
							{generalInfo.email}
						</span>
						<span className="flex-rows rows-centered small-gap">
							<span className="icon-container">
								<PhoneIcon></PhoneIcon>
							</span>
							{generalInfo.phone}
						</span>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}
