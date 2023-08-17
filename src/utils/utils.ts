/**
 * Get readable date from timestamp number.
 * 
 * @param {number} timestamp timestamp value.
 * 
 * @returns {string} readable date.
 */
export const toDate = (timestamp: number): string => {
	return new Date(timestamp).toLocaleDateString();
}

/**
 * Generate random ID.
 * 
 * @returns {string}
 */
export const generateID = (): string => {
	return Date.now().toString(16)
}