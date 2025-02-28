let amount = 0;

export const saveAmountData = (newAmount) =>
	new Promise((resolve) => {
		setTimeout(() => {
			amount = newAmount;
			resolve(newAmount);
		}, 2000);
	});

export const getAmountData = () =>
	new Promise((resolve) => {
		setTimeout(() => resolve(amount), 500);
	});