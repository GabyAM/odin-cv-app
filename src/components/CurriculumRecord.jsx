import { PeriodSpan } from "./PeriodSpan";

export function CurriculumRecord({
	heading,
	subHeading,
	startDate,
	endDate,
	text,
}) {
	return (
		<li>
			<div className="flex-rows medium-gap">
				{heading && subHeading ? (
					<h3>
						{heading}, {subHeading}
					</h3>
				) : (
					<h3>{heading || subHeading}</h3>
				)}
				<PeriodSpan
					startDate={startDate}
					endDate={endDate}
				></PeriodSpan>
			</div>
			{text && <p>{text}</p>}
		</li>
	);
}
