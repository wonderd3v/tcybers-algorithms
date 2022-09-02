import { ValueNameType } from './validators.types';

export const inputEmpty = ({ value, name }: ValueNameType) => {
	return value.length === 0 && `${name} is required`;
};

export const inputNumberValidation = ({ value }: ValueNameType) => {
	return isNaN(+value) && 'Please enter a number';
};

export const someFieldInvalid = (errors: { [key: string]: string }) => {
	return Object.values(errors).reduce(
		(accumulator, values) => (accumulator ? accumulator : !!values),
		false as boolean
	);
};
