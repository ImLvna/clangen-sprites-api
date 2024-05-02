import { error, json, type RequestHandler } from '@sveltejs/kit';
import { queryToCat } from './../../lib/query';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const cat = queryToCat(url.searchParams);

		return json(cat);
	} catch (e) {
		console.error(e);
		return error(400, (e as Error).message);
	}
};
