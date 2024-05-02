export const box = (array: unknown[], rows: number, cols: number) => {
	const result = [];
	for (let i = 0; i < cols; i++) {
		result.push(array.slice(i * rows, i * rows + rows));
	}
	return result;
};

export const arrayCount = (numbers: number, start: number = 0) => {
	const result = [];
	for (let i = 0; i < numbers; i++) {
		result.push(i + start);
	}
	return result;
};
