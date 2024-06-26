enum PlantAccessory {
	MAPLE_LEAF = 'MAPLE LEAF',
	HOLLY = 'HOLLY',
	BLUE_BERRIES = 'BLUE BERRIES',
	FORGET_ME_NOTS = 'FORGET ME NOTS',
	RYE_STALK = 'RYE STALK',
	LAUREL = 'LAUREL',
	BLUEBELLS = 'BLUEBELLS',
	NETTLE = 'NETTLE',
	POPPY = 'POPPY',
	LAVENDER = 'LAVENDER',
	HERBS = 'HERBS',
	PETALS = 'PETALS',
	DRY_HERBS = 'DRY HERBS',
	OAK_LEAVES = 'OAK LEAVES',
	CATMINT = 'CATMINT',
	MAPLE_SEED = 'MAPLE SEED',
	JUNIPER = 'JUNIPER',
	RED_FEATHERS = 'RED FEATHERS',
	BLUE_FEATHERS = 'BLUE FEATHERS',
	JAY_FEATHERS = 'JAY FEATHERS',
	MOTH_WINGS = 'MOTH WINGS',
	CICADA_WINGS = 'CICADA WINGS'
}

enum WildAccessory {
	RED_FEATHERS = 'RED FEATHERS',
	BLUE_FEATHERS = 'BLUE FEATHERS',
	JAY_FEATHERS = 'JAY FEATHERS',
	MOTH_WINGS = 'MOTH WINGS',
	CICADA_WINGS = 'CICADA WINGS'
}

enum TailAccessory {
	RED_FEATHERS = 'RED FEATHERS',
	BLUE_FEATHERS = 'BLUE FEATHERS',
	JAY_FEATHERS = 'JAY FEATHERS'
}

enum AccessoryType {
	PLANT = 'PLANT',
	WILD = 'WILD',
	TAIL = 'TAIL'
}

export { AccessoryType, PlantAccessory, TailAccessory, WildAccessory };

const Accessories = {
	[AccessoryType.PLANT]: PlantAccessory,
	[AccessoryType.WILD]: WildAccessory,
	[AccessoryType.TAIL]: TailAccessory
};

export default Accessories;
