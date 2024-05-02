export const KittenPoses = [0, 1, 2];
export const AdolPoses = [3, 4, 5];
export const AdultShortMedPoses = [6, 7, 8];
export const AdultLongPoses = [9, 10, 11];
export const SeniorPoses = [12, 13, 14];
export const ParaShortMedPoses = [15];
export const ParaLongPoses = [16];
export const ParaAppPose = [17];
export const SickAdultPose = [18];
export const SickYoungPose = [19];
export const NewbornPose = [20];

const Poses = {
	...KittenPoses,
	...AdolPoses,
	...AdultShortMedPoses,
	...AdultLongPoses,
	...SeniorPoses,
	...ParaShortMedPoses,
	...ParaLongPoses,
	...ParaAppPose,
	...SickAdultPose,
	...SickYoungPose,
	...NewbornPose
};

export default Poses;
