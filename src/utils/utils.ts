/**
 * Get readable date from timestamp number.
 * 
 * @param {number} timestamp timestamp value.
 * 
 * @returns {string} readable date.
 */
export const toDate = (timestamp: number): string => {
	return new Date(timestamp).toLocaleDateString("he-il");
}

/**
 * Generate random ID.
 * 
 * @param type The entity the id belong to, used as a "salt"
 * @returns {string}
 */
export const generateID = (type: "list" | "task"): string => {
	const salt = type === "list" ? "li" : "tk";
	
	return salt + Date.now().toString(16)
}