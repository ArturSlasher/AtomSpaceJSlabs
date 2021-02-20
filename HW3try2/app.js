confirm = confirm("Do you confirm?");
let content = document.createElement('div');
content.innerText = 'confirm';

let openModal = (content, confirm) => {

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.classList.add('hidden');
    
    let dialog = document.createElement('div');
    dialog.classList.add('dialog');
    dialog.classList.add('sm');
    
    let yesBtn = document.createElement('button');
    yesBtn.innerText = 'Yes!';

    let closeModal = (e) => {
        e.stopPropagation();
        wrapper.removeEventListener('click', closeModalDecline); 
        // удаляет слушатель по типу события и функции слушателя
        wrapper.classList.add('hidden');
        dialog.classList.add('sm');
    }

    let closeModalDecline = (e) => {
        closeModal(e);
        alert(confirm ? 'Not confirmed!' : 'Confimed!');
        setTimeout(() => document.body.removeChild(wrapper), 300);
    };

    let closeModalAccept = (e) => {
        closeModal(e);
        alert(confirm ? 'Confirmed!' : 'Not confimed!');
        setTimeout(() => document.body.removeChild(wrapper), 300);
    };
    
    yesBtn.addEventListener('click', closeModalAccept);

    dialog.addEventListener('click', e => e.stopPropagation());

    wrapper.addEventListener('click', closeModalDecline);

    let cross = document.createElement('div');
    cross.innerText = 'X';
    cross.classList.add('cross');
    cross.addEventListener('click', closeModalDecline);

    let questionYes = document.createElement('div');
    questionYes.innerText = 'Do you confirm?';

    let questionNo = document.createElement('div');
    questionNo.innerText = 'Do you reject?';

    dialog.appendChild(cross);
    confirm ? dialog.appendChild(questionYes) : dialog.appendChild(questionNo);
    dialog.appendChild(yesBtn);
    wrapper.appendChild(dialog);
    document.body.appendChild(wrapper);
    setTimeout(() => {
        wrapper.classList.remove('hidden');
        dialog.classList.remove('sm');
    }, 0); // отложенное событие - удаляяем хидден
};

openModal(content, confirm);