// завдання 1

function pow(x, n) {
    var result=1;
    for(var i=0;i<n;i++) {
        result*=x;
    } 
    return result;
}
var x=prompt('x?','')
var n=prompt('n?','' ) 
if (n<0){
    alert('Степень '+n+'не підтримується, введіть цілий степінь, більший 0');
} else {
    alert(pow(x,n))
}


// ================== завдання 2=====================

function showName() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("output").innerHTML = "Ваше ім'я: " + name;
}

// =============завдання 3===============

//1. Запитайте рік народження користувача та виведіть йому кількість років:

const currentYear = new Date().getFullYear();
const birthYear = parseInt(prompt("Введіть рік народження:"));
const Age = currentYear - birthYear;
alert(`Вам ${Age} років.`);

// 2. Запитайте у користувача довжину сторони квадрата та виведіть
// периметр такого квадрата

const sideLength = parseFloat(prompt("Введіть довжину сторони квадрата:"));
const perimeter = 4 * sideLength;
alert(`Периметр квадрата дорівнює ${perimeter}.`);

// 3.Запитайте у користувача відстань у км між двома містами та за скільки годин він хоче дістатися. Порахуйте швидкість, з якоюнеобхідно рухатися, щоб встигнути вчасно.

const distance = parseFloat(prompt("Введіть відстань у км:"));
const hours = parseFloat(prompt("Введіть час подорожі у годинах:"));
const speed = distance / hours;
alert(`Вам потрібно рухатися зі швидкістю ${speed} км/год.`);

// 4. Користувач вказує обсяг флешки Гб. Програма повинна порахувати скільки файлів розміром 820 Мб поміщається на флешку.

const flashDriveSizeGb = parseFloat(prompt("Введіть обсяг флешки (Гб):"));
const fileSizeMb = 820;
const filesCount = Math.floor(flashDriveSizeGb * 1024 / fileSizeMb);
alert(`На флешці поміститься ${filesCount} файлів розміром 820 Мб.`);

// 5. Користувач вводить суму грошей у гаманці та ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки решти у нього залишиться.

const walletAmount = parseFloat(prompt("Введіть суму грошей у гаманці:"));
const chocolatePrice = parseFloat(prompt("Введіть ціну однієї шоколадки:"));
const chocolatesCount = Math.floor(walletAmount / chocolatePrice);
const change = walletAmount % chocolatePrice;
alert(`Ви можете купити ${chocolatesCount} шоколадок. Залишок: ${change} грн.`);

// 6. Запитайте у користувача тризначне число та виведіть його задом наперед. Для вирішення завдання вам знадобиться оператор %(залишок від поділу).

const number1 = parseInt(prompt("Введіть тризначне число:"));
const reversedNumber = (number1 % 10) * 100 + Math.floor((number1 % 100) / 10) * 10 + Math.floor(number1 / 100);
alert(`Зворотнє число: ${reversedNumber}`);

// 7. Запитайте у користувача ціле число і виведіть у відповідь, парне число чи ні. У завданні використовуйте логічні оператори. Для виконання завдання не потрібно використовувати if або switch.

const number = parseInt(prompt("Введіть ціле число:"));
const isEven = number % 2 === 0;
alert(`Це ${isEven ? "парне" : "непарне"} число.`);

// завдання 4
//1
var age = parseInt(prompt("Введіть свій вік:"));
if (!isNaN(age)) {
    var category = ""; 
    if (age >= 0 && age <= 2) {
      category = "дитина";
    } else if (age >= 12 && age < 18) {
      category = "підліток";
    } else if (age >= 18 && age < 60) {
      category = "дорослий";
    } else if (age >= 60) {
      category = "пенсіонер";
    } else {
      category = "невідомо";
    }
    alert("Ви є " + category + ".");
  } else {
    alert("Будь ласка, введіть коректний вік.");
  }

  
  
  
// // 2
var number2 = parseInt(prompt("Введіть число від 0 до 9:"));

if (!isNaN(number) && number >= 0 && number <= 9) {
  var specialSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  alert("Спецсимвол для числа " + number + " - " + specialSymbols[number]);
} else {
  alert("введіть коректне число від 0 до 9.");
}
// // 3
var year = parseInt(prompt("Введіть рік:"));

// Перевіряємо, чи рік є високосним
if (!isNaN(year)) {
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    alert("Рік " + year + " є високосним.");
  } else {
    alert("Рік " + year + " не є високосним.");
  }
} else {
  // Виводимо повідомлення про некоректний ввід
  alert("введіть коректний рік.");
}

//4
 
(function ()
    {
    var str = prompt ('Введіть число', ''); 
    if (isNaN (str)) {alert ('Це не число'); return}
    if (parseInt (str) != str || str <= 0) {alert ('Ви ввели не натуральне число'); return}
 
    var j = 0, le = str.length - 1, pal = true;
    while (j <= le - j) { pal = pal && (str.charAt (j) == str.charAt (le - j)); j++}
    alert ('число ' + str + (pal ? ' ' : ' не ') + 'являєтся паліндромом');
    })();
//5////
var purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));

if (!isNaN(purchaseAmount)) {
  var discount = 0; 
  if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 3;
  } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 5;
  } else if (purchaseAmount >= 500) {
    discount = 7;
  }
  var discountedAmount = purchaseAmount - (purchaseAmount * (discount / 100));
  alert("Сума до оплати зі знижкою " + discount + "%: " + discountedAmount.toFixed(2));
} else {
  alert("Будь ласка, введіть коректну суму покупки.");
}
6///
let a, b, c, d;
a = parseFloat(prompt("Введіть довжину кола:"));
b = parseFloat(prompt("Введіть периметр квадрата:"));
c = 2 * Math.PI * a;
d = b / 4;
if (c <= d) {
    console.log("Коло може поміститися в зазначений квадрат.");
} else {
    console.log("Коло не може поміститися в зазначений квадрат.");
}

//7//
let score = 0;
const questions = [
    {
        question: "Питання 1: Яка столиця Франції?",
        options: ["Лондон", "Париж", "Мадрид"],
        correctAnswer: "Париж",
    },
    {
        question: "Питання 2: Скільки днів у звичайному лютому (не високосному році)?",
        options: ["28", "29", "30"],
        correctAnswer: "28",
    },
    {
        question: "Питання 3: Яка планета найбільша у Сонячній системі?",
        options: ["Венера", "Земля", "Юпітер"],
        correctAnswer: "Юпітер",
    },
];

for (let i = 0; i < questions.length; i++) {
    const userAnswer = prompt(questions[i].question + "\n" + questions[i].options.join(", "));
    
    if (userAnswer === questions[i].correctAnswer) {
        score += 2; 
    }
}
alert("Ви набрали " + score + " бали(ів) з " + (questions.length * 2) + " можливих балів.");





