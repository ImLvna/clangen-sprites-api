import type { Sharp } from 'sharp';

export const image = async (sharp: Sharp, init?: ResponseInit) => {
	const headers = new Headers(init?.headers);
	if (!headers.has('content-type')) {
		headers.set('content-type', 'image/png');
	}

	return new Response(await sharp.toBuffer(), {
		...init,
		headers
	});
};
