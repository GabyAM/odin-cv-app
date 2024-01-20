export function ExperienceInstance({
	editCallback,
	data,
}) {
	return (
				<div className="record-container">
					<h3>{data.companyName}</h3>
					<span>{data.positionTitle}</span>
					<button onClick={editCallback}>Edit</button>
				</div>
	);
}
