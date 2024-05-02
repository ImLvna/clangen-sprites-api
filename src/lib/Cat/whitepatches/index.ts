import HighWhite from './high';
import LittleWhite from './little';
import MidWhite from './mid';
import MostlyWhite from './mostly';
import Point from './point';
import Vit from './vit';

enum WhiteType {
	LITTLE = 'LITTLE',
	MID = 'MID',
	HIGH = 'HIGH',
	MOSTLY = 'MOSTLY',
	VIT = 'VIT',
	POINT = 'POINT'
}
const WhitePatches = {
	[WhiteType.LITTLE]: LittleWhite,
	[WhiteType.MID]: MidWhite,
	[WhiteType.HIGH]: HighWhite,
	[WhiteType.MOSTLY]: MostlyWhite,
	[WhiteType.VIT]: Vit,
	[WhiteType.POINT]: Point
};

export const AllWhitePatches = {
	...LittleWhite,
	...MidWhite,
	...HighWhite,
	...MostlyWhite
};

export default WhitePatches;
export { WhiteType };
