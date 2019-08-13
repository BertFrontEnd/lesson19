import { getRandomColor, changeColors } from './utils';

document.addEventListener('DOMContentLoaded', function() {

	let myFigs = [];

	if (localStorage.getItem('figs')) {
		myFigs = JSON.parse(localStorage.getItem('figs'));
	};
	renderHtml(myFigs);

	const bodyForFigures = document.documentElement;

	function createFigs() {

		function createSquare() {
			const square = document.createElement('div');
			square.classList.add('square');
			square.style.background = getRandomColor();
			const spanSquare = document.createElement('span');
			spanSquare.textContent = '1';
			bodyForFigures.appendChild(square);
			square.appendChild(spanSquare);
			localStorage.setItem('figs', JSON.stringify(myFigs));
		};

		function createCircle() {
			const circle = document.createElement('div');
			circle.classList.add('circle');
			const spanCircle = document.createElement('span');
			circle.style.background = getRandomColor();
			spanCircle.textContent = '2';
			bodyForFigures.appendChild(circle);
			circle.appendChild(spanCircle);
			localStorage.setItem('figs', JSON.stringify(myFigs));
		};

		function createRhombus() {
			const rhombus = document.createElement('div');
			rhombus.classList.add('rhombus');
			rhombus.style.background = getRandomColor();
			const spangRhombus = document.createElement('span');
			spangRhombus.textContent = '3';
			bodyForFigures.appendChild(rhombus);
			rhombus.appendChild(spangRhombus);
			localStorage.setItem('figs', JSON.stringify(myFigs));
		};

		function createParallelogram() {
			const parallelogram = document.createElement('div');
			parallelogram.classList.add('parallelogram');
			parallelogram.style.background = getRandomColor();
			const spangParallelogram = document.createElement('span');
			spangParallelogram.textContent = '4';
			bodyForFigures.appendChild(parallelogram);
			parallelogram.appendChild(spangParallelogram);
			localStorage.setItem('figs', JSON.stringify(myFigs));
		};

		bodyForFigures.addEventListener('click', createSquare, {once: true});
		bodyForFigures.addEventListener('click', createCircle, {once: true});
		bodyForFigures.addEventListener('click', createRhombus, {once: true});
		bodyForFigures.addEventListener('click', createParallelogram, {once: true});
	
	}
		
	const square = document.querySelector('.square');
	const circle = document.querySelector('.circle');
	const rhombus = document.querySelector('.rhombus');
	const parallelogram = document.querySelector('.parallelogram');

	square.addEventListener('ondblclick ', changeColors);
	square.removeEventListener('ondblclick ', changeColors);
	
	circle.addEventListener('ondblclick ', changeColors);
	circle.removeEventListener('ondblclick ', changeColors);
	
	rhombus.addEventListener('ondblclick ', changeColors);
	rhombus.removeEventListener('ondblclick ', changeColors);
	
	parallelogram.addEventListener('ondblclick ', changeColors);
	parallelogram.removeEventListener('ondblclick ', changeColors);
		
	
	const switchBtn = document.querySelector('.switch');
	switchBtn.onclick = function() {
		//...
		localStorage.setItem('figs', JSON.stringify(myFigs));
	}
	
	const delBtn = document.querySelector('.del');
	delBtn.onclick = function() {
		myFigs = [];
		localStorage.setItem('figs', JSON.stringify(myFigs));
	}
	
 	function renderHtml(fig) {
		bodyForFigures.innerHTML = '';
		fig.map(function() {
			let newFig = createFigs();
			bodyForFigures.appendChild(newFig);
			localStorage.setItem('figs', JSON.stringify(myFigs));
		});
	}

});



/* 

Написать приложение по генерации разметки.

- При клике в любое место страницы должен появиться элемент (div) определенной фигуры: 
	- верхний-левый угол - квадрат,
	- верхний-правый - круг,
	- нижний-левый - ромб,
	- нижний-правый - параллелограмм,

- Каждая фигура заливается собственным рандомным цветом и не меняет цвет при появлении новой фигуры
- Внутри каждой фигуры должен быть написан ее номер, под которым она появилась на странице
- Фигуры не должны исчезать после перезагрузки страницы
- При двойном клике по фигуре включается режим "светофор" - она начинает моргать меняя свои цвета рандомно каждые 100 мс
- Повторный двойной клик выключает режим светофора
- Режим "drag & drop". Фигуру можно перетягивать любую куда-угодно
- Предусмотреть 2 дополнительные кнопки в приложении:
	- "Удалить все фигуры" (тут всё должно быть понятно), 
	- "Включить автозаполнение" (когда кнопка нажата, то фигуры сами начинают появляться в рандомном месте экрана (эмуляция клика мыши). Повторное нажатие на эту же кнопку выключает режим автозаполнения)

*/