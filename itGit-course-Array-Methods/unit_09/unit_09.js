// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью find должна найти первый элемент массива a1, значение которого лежит от a1_from до a1_to (больше a1_from но меньше a1_to). Вывести найденный элемент в out-1. Если значение не найдено то выводить undefined.


let a1 = [13, 15, 22, 23, 26, 35, 72];
let a1_from = 23;
let a1_to = 27; 
// ожидаю 26, но вы протестируйте и на других

const f1 = () => {
let out =a1.find( el => {
    if( el > a1_from && el< a1_to) {
        return true;
    }
});

document.querySelector('.out-1').innerHTML = out;
}


// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью find должна найти первый элемент массива a2, значение которого лежит от a2_from до a2_to (больше a2_from но меньше a2_to). Вывести элемент в out-2. Если значение не найдено то выводить false.

let a2 = [13, 15, 22, 23, 26, 35, 72];
let a2_from = 23;
let a2_to = 27; 

const f2 = () => {

    let out = a2.find( el => {
            if( el > a2_from && el< a2_to) {
             return true;
            }
        });
            if(out == undefined){
                out = false;
            }

    
    document.querySelector('.out-2').innerHTML = out;
}

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция с помощью FILTER должна найти все элементы массива a3, значение которых лежит от a3_from до a3_to (больше a3_from но меньше a3_to). Добавить их в a3_res, предварительно очистить a3_res. В out-3 вывести нулевой элемент массива a3_res. Считаем что в a3_res будет всегда минимум одно значение. 

let a3 = [13, 15, 22, 23, 26, 35, 72];
let a3_from = 14;
let a3_to = 25; 
let a3_res = [];

const f3 = () => {
    a3_res = a3.filter( el => el > a3_from && el < a3_to);

    console.log(a3_res)
    document.querySelector('.out-3').innerHTML = a3_res[0];
}

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция с помощью FIND должна найти первый элемент строки str4, который лежит от a4_from, до a4_to(строго больше, строго меньше). Вывести результат в out-4. Если совпадений нет вывести undefined. Обратите внимание, find не работает со строками!


let str4 = 'a_baba_galamaga_tvoe_korito_est_nesti';
let a4_from = 'k';
let a4_to = 't';

const f4 = () => {
    let b = str4.split('');

    out = b.find( el => {
        if(el > a4_from && el < a4_to){
            return true;
        }
    });

    document.querySelector('.out-4').innerHTML = out;
} 

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция с помощью findIndex должна найти индекс элемента массива a5, значение которого лежит от a5_from до a5_to (больше a5_from но меньше a5_to). Вывести найденный индекс в out-5. Если значение не найдено то выводить -1.

let a5 = [13, 15, 22, 23, 26, 35, 72];
let a5_from = 23;
let a5_to = 67; 

const f5 = () => {
let out = a5.findIndex( el => {
    if( el > a5_from && el < a5_to) {
        return true;
    };
})

    document.querySelector('.out-5').innerHTML = out;
}

// TASK 06
//  По нажатию b-6 выполняется функция f6. Функция с помощью findIndex должна найти ПОСЛЕДНИЙ индекс элемента массива a6, значение которого лежит от a6_from до a6_to (больше a6_from но меньше a6_to). Вывести найденный индекс в out-6. Если значение не найдено то выводить false.


let a6 = [13, 15, 22, 23, 26, 35, 72];
let a6_from = 23;
let a6_to = 67; 

const f6 = () => {

   let reversArr = a6.reverse();
   
   let find = reversArr.findIndex(el => {
    if(el > a6_from && el < a6_to) {
        return true;
    };
   });

   let out = a6.length - find - 1;

   if( find == -1){
    out = false;
   }

document.querySelector('.out-6').innerHTML = out;

}

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция с помощью lastIndexOf должна найти наибольший индекс символа a7_1 в строке str7, и вывести out-7. Если значение не найдено то выводить -1. Обратите внимание, что lastIndexOf зависит от регистра. 


let str7 = 'cccaBCcbBDabBddcCadcDbACacbbCdbBCADBDBdaAdcCd';
let a7_1 = 'C'; // 43

const f7 = () => {
    let my7 = str7.split('');
    let out = my7.lastIndexOf( a7_1);

    document.querySelector('.out-7').innerHTML = out;
}

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция с помощью lastIndexOf должна найти наибольший индекс символа a8_1 в строке str8, и вывести out-8. Если значение не найдено то выводить -1. Реализуйте поиск независимо от регистра. 

let str8 = 'C#CdABd$d@$Ab!#@#bcAaB@c$D#@AD$A!b#!D!BB@CaAD@###@';
let a8_1 = 'a'; // 43 ожидаю и на a и на A

const f8 = () => {
    let my8 = str8.split('');
    let lowerArr = my8.map(el => el.toLowerCase())
    console.log(lowerArr)
    let out = lowerArr.lastIndexOf(a8_1);

    // console.log(out)
    document.querySelector('.out-8').innerHTML = out;

}

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция с помощью lastIndexOf должна найти наибольший индекс символа a9_1 в массиве a9, и вывести out-9. Если значение не найдено то выводить -1. 

let a9 = ['2', '17', '45', '5', '14', '5', '45', '107']; 
let a9_1 = '5'; // ожидаю индекс 5

const f9 = () => {
    let out = a9.lastIndexOf(a9_1);

    // console.log(out)
    document.querySelector('.out-9').innerHTML = out;
}

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция должна заполнить массив a10_res, на основе массива значений a10 и массива индексов a11. Т.е. мы берем числа из a11 и смотрим есть ли значения с такими индексами в a10. Если есть - добавляем значения в a10_res. Результат a10_res выводим в out-10 через пробел. Перед заполнением чистим a10_res. Если значения с таким индексом не существует пропускаем индекс.

let a10 = [-2, 3, -4, 5, -6, 7];  
let a11 = [0,4,22];
let a10_res = []; // ожидаю [-2, -6];

const f10 = () => {

    let out = [];
    a10_res = [];
    
    for(let i = 0; i < a11.length; i++) {
        if( a10[a11[i]] !== undefined) {
           out.push(a10[a11[i]])
        }
    };

    a10_res = out.reduce((accum, item) => {
        return accum += item + ' ';
    }, '')

    document.querySelector('.out-10').innerHTML = a10_res;
}



document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', f4);
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', f7);
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', f9);
document.querySelector('.b-10').addEventListener('click', f10);