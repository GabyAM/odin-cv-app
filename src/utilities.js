export function kebabToCamel(string) {
	return string.replace(/(-\w)/g, (k) => k[1].toUpperCase());
}

export function camelToKebab(string) {
	return string.replace(
		/[A-Z]+(?![a-z])|[A-Z]/g,
		($, ofs) => (ofs ? "-" : "") + $.toLowerCase()
	);
}
