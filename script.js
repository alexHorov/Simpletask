const count = document.querySelector('#count');
const inputGuest = document.querySelector('.fill__guest-area');
const guestArea = document.querySelector('.text-area');
let arr = [];



count.addEventListener('change', (e) => {
    if (e.target.value >0) {
        arr.length=0;
        inputGuest.innerHTML= '';
        removeGuestList(guestArea);
        showGuestInput();
    }
})


function showGuestInput() {
    let num = count.value;
    let guestFragment = document.createDocumentFragment();
    
        for (let i = 0; i < num; i++) {
            let personCard = document.createElement('div');
            personCard.classList.add('fill__guest-area--div');
    
            personCard.id = i + 1;
            personCard.innerHTML = `
            <input type="text" class="name" placeholder="Name">
            <input type="text" class="surname" placeholder="Surname">
            `;
            guestFragment.append(personCard);
    
            personCard.addEventListener('change', ModifyUserList)
    
            inputGuest.append(guestFragment);
    
        }
    
   
   
}

function ModifyUserList(e) {
    let elem = e.currentTarget;

    // console.log(elem)
    // console.log(elem.value)
    // let name = elem.querySelector('.name');
    // let surname = elem.querySelector('.surname');


    let user = {
        id: elem.id,
        name: GetName(elem),
        surname: GetSurname(elem),
    }

    if (arr.some(e => e.id === user.id)) {
        const currentElemIndex = arr.findIndex(obj => obj.id === user.id);
        arr[currentElemIndex] = user;
    } else {
        arr.push(user);
    }

    if (user.name.length > 0 && user.surname.length > 0) {
        createP(arr)
        
    }

}



function GetName(parent) {
    const nameObj = parent.querySelector('.name');
    if (nameObj && nameObj.value) {
        return nameObj.value;
    }

    return '';
}
function GetSurname(parent) {
    const surnameObj = parent.querySelector('.surname');
    if (surnameObj && surnameObj.value) {
        return surnameObj.value;
    }

    return '';
}


console.log(arr)
function createP(arr) {
    const nameFragment = document.createDocumentFragment();
    removeGuestList(guestArea);

    arr.forEach(guest => {
        console.log(guest);
        const dataName = document.createElement('p');
        dataName.innerHTML = `
        ${guest.name} ${guest.surname}
        `
        nameFragment.append(dataName);

    })

    guestArea.append(nameFragment);
}

function removeGuestList(parentSelector){
    parentSelector.innerHTML = '';
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = `Guest`
    parentSelector.append(title);
}


console.log(arr)