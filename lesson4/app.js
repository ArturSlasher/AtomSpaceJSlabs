// CALLBACK

let u = {
    result: 10
}

let x = (someObject) => {
    return someObject.result;
}

let mapto = (u, x) => { //callback
    return x(u);
}

console.log(mapto(u, x));