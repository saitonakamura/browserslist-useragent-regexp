import {
	compareArrays
} from '../browsers/util';

/**
 * Check target if is 'all'.
 * @param  version - Target to check.
 * @return Is 'all' or not.
 */
export function isAllVersion(version: any): boolean {

	const target = Array.isArray(version)
		? version[0]
		: version;

	return target === 'all';
}

/**
 * Remove duplicated arrays.
 * @param  items - Array of arrays to remove duplicates.
 * @return Uniq arrays.
 */
export function uniqItems(items: any[][]) {
	return items.filter(Boolean).filter((a, i, items) =>
		items && !items.some((b, j) =>
			j > i && compareArrays(a, b)
		)
	);
}
