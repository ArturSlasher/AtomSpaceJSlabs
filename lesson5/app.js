let btn = document.getElementById('show-dialog-btn');

btn.addEventListener('click', () => {
    console.log("Enter")

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    let dialog = document.createElement('div');
    dialog.classList.add('dialog');
    dialog.innerText = 'Exit?';
    
    let closeModelDecline = () => {
        e.stopPropagation(); //чтоб события на пробрасовылось по всему дереву
        ducument.body.removeChild(wrapper);
        console.log("Not exit");
    }

    let closeModelExept = () => {
        e.stopPropagation(); //чтоб события на пробрасовылось по всему дереву
        ducument.body.removeChild(wrapper);
        console.log("Exit");
    }

    btn = document.createElement('button');
    btn.innerText = 'Yes';

    btn.addEventListener('click', (e) => closeModelDecline());

    wrapper.addEventListener('click', (e) => closeModelExept);

    let cross = document.createElement('div');
    cross.innerText = "X";

    cross.addEventListener('click', (e) => closeModelExept);


    wrapper.appendChild(cross);
    wrapper.appendChild(dialog);
    dialog.body.appendChild(wrapper);
})