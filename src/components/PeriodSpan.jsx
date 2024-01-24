export function PeriodSpan({ startDate, endDate }) {
	return (
		startDate.month &&
		startDate.year &&
		endDate.month &&
		endDate.year && (
			<span className="period-span">
				{startDate.month} {startDate.year}
				{" - "}
				{endDate.month} {endDate.year}{" "}
			</span>
		)
	);
}
