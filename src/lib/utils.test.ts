import { describe, expect, it } from 'vitest';
import { arrayCount, box } from './utils';

describe('box', () => {
	it('makes a box', () => {
		const result = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12]
		];
		expect(box([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3, 4)).toEqual(result);
	});
});

describe('arrayCount', () => {
	it('makes an array of numbers', () => {
		expect(arrayCount(3)).toEqual([0, 1, 2]);
	});

	it('makes an array of numbers starting from 1', () => {
		expect(arrayCount(3, 1)).toEqual([1, 2, 3]);
	});
});
