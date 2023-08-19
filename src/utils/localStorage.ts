/**
 * Get item from local storage
 * @param {string} key The key if the item from the storage 
 * @param defaultVal default value to return if item doesn't exist
 */
export function getFromStorage<T>(key: string, defaultVal?: T): T | null {
	const item = localStorage.getItem(key);

	if (!item) return defaultVal || null;

	return JSON.parse(item)
}

/**
 * save item in local storage
 * 
 * @param {string} key The key if the item from the storage 
 * @param value The data itself, if data is not string data will stringify
 */
export function setStorage<T>(key: string, value: T) {
	// if value is not string we will need to stringift it
	if (typeof value === "string")
		localStorage.setItem(key, value)
	else
		localStorage.setItem(key, JSON.stringify(value))
}