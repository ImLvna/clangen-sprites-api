import { AllWhitePatches } from './whitepatches/index';

import type { AccessoryType } from './accessories';
import Ages from './ages';
import EyeColor from './eyes';
import HairLength from './hairs';
import PeltColor from './pelt/color';
import type PeltTint from './pelt/tint';
import PeltType from './pelt/type';
import type Scars from './scars';
import SkinColors from './skins';
import type Tortie from './tortie';
import type Point from './whitepatches/point';
import type WhitePatchTint from './whitepatches/tint';
import type Vit from './whitepatches/vit';

export interface iCat {
	age?: Ages;
	peltType?: PeltType;
	hairLength?: HairLength;
	peltColor?: PeltColor;
	whitePatches?: typeof AllWhitePatches;
	eyeColor?: EyeColor;
	eyeColor2?: EyeColor;
	tortieBase?: Tortie;
	tortieColor?: PeltColor;
	vit?: Vit;
	points?: Point;
	accessory?: AccessoryType;
	paralyzed?: boolean;
	opacity?: number;
	scars?: Scars[];
	tint?: PeltTint;
	skin?: SkinColors;
	whitePatchesTint?: WhitePatchTint;
	pose: number;
	reverse?: boolean;
}

class Cat implements iCat {
	age: Ages = Ages.ADULT;
	peltType: PeltType = PeltType.Single;
	hairLength: HairLength = HairLength.SHORT;
	peltColor: PeltColor = PeltColor.GOLDEN;
	whitePatches?: typeof AllWhitePatches;
	eyeColor: EyeColor = EyeColor.GREEN;
	eyeColor2?: EyeColor;
	tortieBase?: Tortie;
	tortieColor?: PeltColor;
	vit?: Vit;
	points?: Point;
	accessory?: AccessoryType;
	paralyzed: boolean = false;
	opacity: number = 100;
	scars: Scars[] = [];
	tint?: PeltTint;
	skin: SkinColors = SkinColors.BLACK;
	whitePatchesTint?: WhitePatchTint;
	pose: number;
	reverse: boolean = false;

	constructor(base: iCat) {
		Object.assign(this, base);

		this.pose = base.pose;

		const required: (keyof iCat)[] = ['pose'];
		for (const key of required) {
			if (!this[key]) {
				throw new Error(`Missing required property: ${key}`);
			}
		}
	}
}

export default Cat;
