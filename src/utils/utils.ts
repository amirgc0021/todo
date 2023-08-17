export const toDate = (timestamp: number) => {
	return new Date(timestamp).toLocaleDateString();
}

export const generateID = () => {
	return Date.now().toString(16)
}