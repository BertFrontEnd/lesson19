function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomColor() {
	var a = getRandomInteger(0, 255);
	var b = getRandomInteger(0, 255);
	var c = getRandomInteger(0, 255);
	return `rgb(${a}, ${b}, ${c})`;
}

export function changeColors() {
	setInterval(getRandomColor, 100);
}