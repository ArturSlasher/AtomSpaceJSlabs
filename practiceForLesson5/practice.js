let mainDivByClass = document.getElementsByClassName('main-div');
let mainDivByID = document.getElementById('main-div-id');

mainDivByClass[0].style.color = "green";
mainDivByID.style.color = "red";

mainDivByID.classList.add('add-class');
mainDivByClass[0].classList.add('add-class');
mainDivByClass[0].classList.remove('add-class');

document.querySelector('div').style.fontSize = "30px";

mainDivByID.addEventListener('dblclick', () => {
    console.log('double click');
})