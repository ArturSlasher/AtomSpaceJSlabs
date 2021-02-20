let btn = document.getElementById('show_dialog_btn');

btn.addEventListener('click', () => {
    let div = document.createElement('button');
    div.innerText = 'Выйти!';
    openModal(div);
});

let openModal = (content) => {
  
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    
    let dialog = document.createElement('div');
    dialog.classList.add('dialog');
    
    let yesBtn = document.createElement('button');
    yesBtn.innerText = 'Да!';

    let closeModalDecline = (e) => {
        e.stopPropagation();
        document.body.removeChild(wrapper);
        console.log('Вы не вышли!');
    };

    let closeModalAccept = (e) => {
        e.stopPropagation();
        document.body.removeChild(wrapper);
        console.log('Вы вышли!');
    };
    
    yesBtn.addEventListener('click', closeModalAccept);

    dialog.addEventListener('click', e => e.stopPropagation());

    wrapper.addEventListener('click', closeModalDecline);

    let cross = document.createElement('div');
    cross.innerText = 'X';
    cross.classList.add('cross');
    cross.addEventListener('click', closeModalDecline);

    let span = document.createElement('div');
    span.innerText = 'Вы действительно хотите выйти?';

    dialog.appendChild(cross);
    dialog.appendChild(span);
    dialog.appendChild(yesBtn);
    wrapper.appendChild(dialog);
    document.body.appendChild(wrapper);
};