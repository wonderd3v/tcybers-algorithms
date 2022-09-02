const isPrime = (number: number): Boolean => {
	for (let i = 2; i < number; i++) {
			if (number % i === 0) return false;
	}
	return true;
}

const fibonnacciSequence = (quantity: number): number[] => {
	return Array.apply(null, Array(quantity)).reduce((acc: number[], curr: unknown, idx: number) => {
		return idx > 2 ? acc.concat(acc[idx - 1] + acc[idx - 2]) : acc
	}, [0,1,1])
}

export const randomNumber = (quantity: number = 5, maxValue: number = 100): number[] => {
	if(quantity === 0) quantity = 5;
	const numbers: number[] = [];
	for (let i = 0; i < quantity; i++) {
		const number: number = Math.floor(Math.random() * maxValue) + 1;
		numbers.includes(number) ? i-- : numbers.push(number);
		if(numbers.length === 20) break;
	}
	return numbers;
}

export const atm = (quantity: number) =>  {
	const banknotes = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1];
	const banknotesFound = banknotes.map(banknote => {
		const amount = ~~(quantity / banknote);
		quantity = quantity % banknote;
		return { amount, banknote };
	}).filter(banknote => banknote.amount > 0);

	return banknotesFound.reduce((acc: string[], curr) => {
		acc.push(curr.amount + " of " + curr.banknote);
		return acc;
	}, []);
}

export const primeNumbers = (quantity: number = 9): number[] => {
	let primeNumbers: number[] = [];
	let i: number = 1;
	while (primeNumbers.length < quantity) {
			if (isPrime(i)) {
					primeNumbers.push(i);
			}
			i++;
	}
	return primeNumbers;
}

export const coincidence = (): number[] => {
	let primesNumbers: number[] = []
	randomNumber(499, 500).forEach(element => isPrime(element) 
		&& primesNumbers.push(element)
	);
	const mayorValue = Math.max(...primesNumbers)
	const serie = fibonnacciSequence(mayorValue);
	return serie
}
