export function snakeToCamel(string) {
	return string.replace(/(-\w)/g, (k) => k[1].toUpperCase());
}
