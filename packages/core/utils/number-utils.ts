﻿const epsilon = 1e-5;

export function areClose(value1: number, value2: number): boolean {
	return Math.abs(value1 - value2) < epsilon;
}

export function greaterThanOrClose(value1: number, value2: number): boolean {
	return value1 > value2 || areClose(value1, value2);
}

export function greaterThan(value1: number, value2: number): boolean {
	return value1 > value2 && !areClose(value1, value2);
}

export function lessThan(value1: number, value2: number): boolean {
	return value1 < value2 && !areClose(value1, value2);
}

export function isZero(value: number): boolean {
	return Math.abs(value) < epsilon;
}

export function greaterThanZero(value: Object): boolean {
	return <number>value > 0;
}

export function notNegative(value: Object): boolean {
	return <number>value >= 0;
}

export const radiansToDegrees = (a: number) => a * (180 / Math.PI);

export const degreesToRadians = (a: number) => a * (Math.PI / 180);

/**
 * Map value changes across a set of criteria
 * @param val value to map
 * @param in_min minimum
 * @param in_max maximum
 * @param out_min starting value
 * @param out_max ending value
 * @returns
 */
export function valueMap(val: number, in_min: number, in_max: number, out_min: number, out_max: number) {
	return ((val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
