import type { iCat } from './Cat';
import Cat from './Cat';

export const queryToCat = (search: URLSearchParams): Cat => {
	const base: iCat = Array.from(search.entries()).reduce(
		(acc, [key, value]) => ({
			...acc,
			[key]: value
		}),
		{} as iCat
	);
	return new Cat(base);
};
