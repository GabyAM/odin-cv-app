import "../styles/curriculum.css";
import { CurriculumRecord } from "./CurriculumRecord";
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
				<div className="main flex-cols large-gap">
					{generalInfo.profile && (
						<div>
							<h2>Profile</h2>
							<p>{generalInfo.profile}</p>
						</div>
					)}
					{educationRecords.length > 0 && (
						<div className="flex-cols medium-gap">
							<h2>Education</h2>
							<ul>
								{educationRecords.map((record) => {
									return (
										<CurriculumRecord
											key={record.id}
											heading={record.schoolName}
											subHeading={record.studyTitle}
											startDate={record.startDate}
											endDate={record.endDate}
										></CurriculumRecord>
									);
								})}
							</ul>
						</div>
					)}
					{experienceRecords.length > 0 && (
						<div className="flex-cols medium-gap">
							<h2>Work Experience</h2>

							<ul>
								{experienceRecords.map((record) => {
									return (
										<CurriculumRecord
											key={record.id}
											heading={record.companyName}
											subHeading={record.positionTitle}
											startDate={record.startDate}
											endDate={record.endDate}
											text={record.mainResponsibilities}
										></CurriculumRecord>
									);
								})}
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
