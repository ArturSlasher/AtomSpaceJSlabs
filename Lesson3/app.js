let f = (a, b) => a*b - (a + b)
console.log(f(10, 5))

let c = (a, b) => {
    return a*b - (a + b)
}
console.log(c(10, 5))

let f1 = function(){
    console.log("f1");
}

function f2(){
    // работает глобально во всём коде
    console.log("f2")
}

let userAge = 15;
let result = userAge >= 18 ? true : false;
console.log(result);

//============

let x = 10;

let F = () => {
    // в функции своя область видимости
    // интерпритатор нашёл объявление переменной (и записал в неё undefined), 
    //и её использование до переменной
    console.log(x)
    var x = 15; //var вернул бы undefined (был let)
    return x;
};
console.log(F());

let X = 10;
let F1 = () => {
    let X = 1;
    let F2 = () => {
        let X = 2;
        F3 = () => {
            return X;
        }
        return F3();
    }
    return F2();
}
console.log(F1());

//================
if (true) {
    var y = 10;
}
console.log(y); // let бы не вывелся

// фигурными скобками можно создавать свои области видимости {...}

//======================================================================================

// arrays and objects

let arr = ["str", 2, X];

let o = {x:1}
console.log(o.x); // or o['x']

let v = o
o.y = 100 //add y attribute
console.log(v)

let obj = {
    //methods
    m1: () => 1,
    m2: function () {return 2;},
    m3() {return 3},
    m() {return this} // this это ссылка на сам объект
}
console.log(obj.m())



let arr1 = [1, 2, 3]
arr1[3] = 10 // ok
console.log(arr1)
arr1[6] = 19; // not so good
console.log(arr1)

arr1.push(4);
console.log(arr1)

arr1.unshift(0) // add in start
arr1.shift() // remove from end
// but it's not good for memory

arr2 = [1,2,3,4,4,5]
arr2.splice(4,2); //better
console.log(arr2);

console.log(arr1.concat(arr2)); // sum

arr2.slice(0,1); // take from ... to ...
arr3 = arr2.slice() //береёт копию массива arr2
// полезно в работе

let names = ['Petya', 'Vasya', 'Katya'];
console.log(names.join(' ')) // все элементы по умолчанию через запятую