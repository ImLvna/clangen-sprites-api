import { join } from 'path';

export const spriteSheets: Record<string, string> = Object.keys(
	import.meta.glob('../../sprites/**/*.png')
).reduce(
	(acc, path) => ({
		...acc,
		[path.replace('../../sprites/', '')]: join('./sprites', path.replace('../../sprites/', ''))
	}),
	{}
);
