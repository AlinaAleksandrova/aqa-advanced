// Завдання 4: Обчислення площі та об'єму

// Завдання 4.1
// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

// Завдання 4.2
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

// Завдання 4.3
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

const radius = 10;
const area = Math.PI * Math.pow(radius, 2);
const roundedArea = area.toFixed(2);

console.log("Area of a circle = ", roundedArea);

/**************************************************/

const length = 5.4;
const width = 3.9;
const areaRectangle = length * width;
const roundedRectangle = areaRectangle.toFixed(2)

console.log("The area of the rectangle = ", roundedRectangle);

/***************************************************/

const radius2 = 6;
const height = 7;
const volume = (Math.PI * Math.pow(radius2, 2) * height).toFixed(2);

console.log("Oб'єм циліндра = ", volume);