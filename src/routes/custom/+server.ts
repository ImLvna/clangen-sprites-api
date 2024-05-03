import { image } from '$lib/responses';
import { spriteSheets } from '$lib/sprites';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import sharp, { type Sharp } from 'sharp';

const queryToData = (query: string) => {
	// filepath.png@x,y,w,h
	const [path, coords] = query.split('@');
	const [x, y, w, h] = coords.split(',').map((i) => {
		if (typeof i === 'undefined') return undefined;
		const n = parseInt(i);
		return isNaN(n) ? undefined : n;
	});
	return { path, x, y, w, h };
};

function numIsDefined(num: number | undefined): boolean {
	return typeof num === 'number' && !isNaN(num);
}

export const GET: RequestHandler = async ({ url }) => {
	const qList = url.search.replace('?', '').split('&');
	console.log(qList);
	if (qList.length === 0 || qList[0] === '') {
		return json(Object.keys(spriteSheets));
	}

	if (qList.length === 1 && !qList[0].includes('@')) {
		const sheet = sharp(spriteSheets[qList[0]]);
		return await image(sheet);
	}

	try {
		let img: Sharp | null = null;
		let firstWidth: number | undefined = undefined;
		let firstHeight: number | undefined = undefined;
		let firstX: number | undefined = undefined;
		let firstY: number | undefined = undefined;

		for (const query of qList) {
			const data = queryToData(query);
			const { path } = data;
			let { w, h, x, y } = data;

			console.log(data);

			if (!spriteSheets[path]) {
				console.log('Invalid path');
				return error(404, 'Invalid path');
			}

			if (numIsDefined(firstWidth) && w) {
				firstWidth = w;
			}
			if (numIsDefined(firstHeight) && h) {
				firstHeight = h;
			}

			if (!numIsDefined(firstX) && x) {
				firstX = x;
			}

			if (!numIsDefined(firstY) && y) {
				firstY = y;
			}

			if (!numIsDefined(w)) {
				w = firstWidth;
			}

			if (!numIsDefined(h)) {
				h = firstHeight;
			}

			if (!numIsDefined(x)) {
				x = firstX;
			}

			if (!numIsDefined(y)) {
				y = firstY;
			}

			x = (x! - 1) * w!;
			y = (y! - 1) * h!;

			try {
				const sheet = sharp(spriteSheets[path]);
				if (!img) {
					img = sheet.extract({ left: x!, top: y!, width: w!, height: h! });
				} else {
					img = (img as Sharp).composite([
						{
							input: await sheet.extract({ left: x!, top: y!, width: w!, height: h! }).toBuffer(),
							left: 0,
							top: 0
						}
					]);
				}
			} catch (e) {
				console.error(e);
				return error(404, (e as Error).message);
			}
		}

		if (!img) {
			console.log('Invalid query');
			return error(400, 'Invalid query');
		}

		return await image(img);
	} catch (e) {
		console.error(e);
		return error(400, (e as Error).message);
	}
};
