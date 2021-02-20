let showDialogBtn = document.getElementById('show_dialog_btn');

showDialogBtn.addEventListener('click', () => {
    let content = document.createElement('div');
    content.innerText = 'confirm';
    openModal(content);
});

let openModal = (content) => {
  
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
        alert('Not confirmed!');
        setTimeout(() => document.body.removeChild(wrapper), 300);
    };

    let closeModalAccept = (e) => {
        closeModal(e);
        alert('Confirmed!');
        setTimeout(() => document.body.removeChild(wrapper), 300);
    };
    
    yesBtn.addEventListener('click', closeModalAccept);

    dialog.addEventListener('click', e => e.stopPropagation());

    wrapper.addEventListener('click', closeModalDecline);

    let cross = document.createElement('div');
    cross.innerText = 'X';
    cross.classList.add('cross');
    cross.addEventListener('click', closeModalDecline);

    let question = document.createElement('div');
    question.innerText = 'Do you confirm?';

    dialog.appendChild(cross);
    dialog.appendChild(question);
    dialog.appendChild(yesBtn);
    wrapper.appendChild(dialog);
    document.body.appendChild(wrapper);
    setTimeout(() => {
        wrapper.classList.remove('hidden');
        dialog.classList.remove('sm');
    }, 0); // отложенное событие - удаляяем хидден
};