// Task 01
// Создайте константу p_01 (строка) содержащую строку 'type script'. Выведите в консоль.
const p_01  = 'type script';

console.log(p_01);



// Task 02 
// Создайте константу p_02 (строка) содержащую пустую строку. Выведите p_02 в консоль.
const p_02  = '';
console.log(p_02);




// Task 03
//Созданы две константы s_031 и s_032. Создайте константу s_3 и присвойте ей конкатенацию констант s_031 и s_032. Тип данных s_3 задайте явно. Для проверки - выведите s_3 в консоль.
const s_031 = 'type';
const s_032 = ' script';
const s_3 : string  = s_031 + s_032;

console.log(s_3);



// Task 04
// Создайте две константы (number) c именем n_041 и n_042. Присвойте им числа 22 и 44. Создайте переменную s_04 куда положите произведение (умножение) чисел n_041 и n_042. Тип данных s_04 задайте явно. Выведите результат в .out-4.
const n_041 : number = 22;
const n_042 : number = 44;
const s_04 : number = n_041 * n_042;

document.querySelector('.out-4').innerHTML = String(s_04)


// Task 05
// Созданы две константы n_051 и n_052. Создайте переменную s_05 куда положите сумму чисел n_051 и n_052. Выведите результат в .out-5. При необходимости выполните приведение типов данных.

const n_051 : string = '33';
const n_052 : number = 22; 

 const s_05 : number = Number(n_051) + n_052;

document.querySelector('.out-5').innerHTML = String(s_05);
// Task 06
// Создана переменная k_06 с типом данных any. Выведите в консоль ее тип данных.

let k_06 : any;
console.log(k_06);

// Task 07
// Создана переменная k_07 с типом данных any. Значение ей не задано. Допишите строку где присвойте переменной k_07 число 101. Выведите в консоль тип данных переменной k_07. Выведите на страницу в .out-7 значение переменной k_07.

let k_07 : any;
// тут новая строка с привоением
k_07 = 101;
console.log(k_07,typeof k_07);

document.querySelector('.out-7').textContent = String(k_07)



// Task 08
// Создайте константу p_08 равную 0.07 и константу t_08 равную 0.04. Создайте переменную res_8 куда положите сумму данных констант. Тип данных - определите самостоятельно, явно. Результат выведите в .out-8.

const p_08 : number = 0.07;
const t_08 : number = 0.04;
const res_8 : number= p_08 + t_08;
console.log(res_8, typeof res_8);
document.querySelector('.out-8').textContent = String(res_8)

// Task 09
// Созданы константы p_09 и t_09. Выведите их сумму в .out-9.

const p_09 : number = 200; 
const t_09 : number = 400; 
document.querySelector('.out-9').textContent = String(p_09 + t_09);



//Task 10
// Получите в переменную p_10 (тип number) число из .p-10. Переменную выведите в консоль.
const p_10 : number = +document.querySelector('.p-10').textContent;
console.log(p_10);



// Task 11
// Создайте константу p_11 и получите в нее число из .p-11. Константу выведите в консоль.
const p_11 : number = +document.querySelector('.p-11').textContent;
console.log(p_11);




// Task 12
// Создайте константу p_12 и получите в нее число из .p-12. Константу выведите в консоль.
const p_12 : number = +document.querySelector('.p-12').textContent;
console.log(p_12);




// Task 13
// Создайте переменную n_13 тип число, без присвоения значения и переменную s_13 тип строка без присвоения значения. Получите из .p-13 данные. Если данные можно привести к числу то, присвойте число в n_13. Если строка - то присвойте строку в s_13. Выведите в консоль n_13, s_13.
let n_13 : number;
let s_13 : string;
let input : string = document.querySelector('.p-13').textContent;
if(!isNaN(Number(input))){
      n_13 = Number(input);
} else{
    s_13 = input;
}

console.log(n_13);
console.log(s_13);



// Task 14
// Создайте переменную b_14 с типом данных boolean. Не присваивайте ей значения. Выведите в консоль содержимое переменной и тип данных.

let b_14 : boolean;
console.log(b_14,typeof b_14);



// Task 15
// Создайте переменную b_15 с типом данных boolean и значением false. Выведите в .out-15 содержимое переменной b_15.

const b_15 : boolean = false;


document.querySelector('.out-15').textContent = String(b_15);


// Task 16
// Созданы две константы b_161 и b_162. Создайте константу b_16 куда поместите && данных констант. Тип данных определите самостоятельно. Результат выведите в консоль.

const b_161 : boolean = true;
const b_162 : boolean = false;

const b_16 : boolean = b_161 && b_162;
console.log(b_16, typeof b_16);


// Task 17
// Созданы две константы b_171 и b_172. Создайте константу b_17 куда поместите || данных констант. Тип данных определите самостоятельно. Результат выведите в .out-17.

const b_171 : boolean = true;
const b_172 : boolean = false;

const b_17 : boolean = b_171 || b_172;
document.querySelector(".out-17").textContent = String(b_17)
console.log(b_17,typeof b_17);



// Task 18
// Создайте переменную b_18, тип boolean, значение false. Создайте переменную b_negative куда поместите ! (отрицание) переменной b_18. Выведите результат в консоль.

const b_18 : boolean = false;
const b_negative : boolean = !b_18;
console.log(b_negative,typeof b_negative);


// Task 19
// Создайте переменную b_19, тип boolean и поместите в нее значение из .p-19. Выведите в консоль.

const b_19 : boolean = Boolean( document.querySelector(".p-19").textContent);
console.log(!b_19);


// Тask 20
// Создайте переменную b_20, тип boolean и поместите в нее значение из .p-20 (число из .p-20). Выведите в консоль.

const b_20 : boolean = Boolean(Number( document.querySelector('.p-20').textContent));
console.log(b_20); 
