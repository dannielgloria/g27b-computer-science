// 2. Obtener el element raiz HTML
const ulElement = document.querySelector('#contacts-ul');
const searchElement = document.querySelector('#studentInput');
let contacts = [];

// 3. Poder obtener la informacion de una fuente de datos (API)
const main = () => {
    // fetch('http://hp-api.herokuapp.com/api/characters/students')
    // fetch('./api/characters.json')
    fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => normalizeData(data))
        .then(contacts => contacts.forEach(renderCardContact))
        // .then(contacts => {
        //     let i = 0;
        //     while(i < contacts.length) {
        //         renderCardContact(contacts[i]);
        //         i++;
        //     }
        // })
};

// 4. Normalizar los datos => Selector
const normalizeData = (data) => {
    data.forEach(element => {
        const { name, image } = element;
        const contact = {
            text: name,
            photo: image
        };
        contacts.push(contact);
    });
    return contacts;
};

// 5. Crear una funcion que rendere (pinte) la informacion de cada tarjeta de contacto
const renderCardContact = (element) => {

    const li = document.createElement('li');
    const cardDiv = document.createElement('div');
    const photoDiv = document.createElement('div');
    const img = document.createElement('img');
    const texDiv = document.createElement('div');
    
    cardDiv.classList.add('card');
    photoDiv.classList.add('photo');
    
    let photo = ''
    if (element?.photo) {
        photo = element.photo;
    } else {
        photo = 'data:image/png;base64,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';
    }
    
    img.setAttribute('src', photo);

    texDiv.classList.add('text');
    texDiv.innerHTML = element.text;

    ulElement.appendChild(li);
    li.appendChild(cardDiv);
    cardDiv.appendChild(photoDiv);
    cardDiv.appendChild(texDiv);
    photoDiv.appendChild(img);

};

const cleanView = () => {
    ulElement.innerHTML = '';
};

searchElement.addEventListener('keyup', (event) => {
    const inputText = event?.target?.value.toLocaleLowerCase() || '';
    cleanView();
    // const contactsFiltered = searchingWithFor(inputText);
    const contactsFiltered = searchingWithFilter(inputText);
    contactsFiltered.forEach(renderCardContact);
});

const searchingWithFor = (searchingText) => {
    let contactsFiltered = [];
    for (let i=0; i < contacts.length; i++) {
        const contact = contacts[i];
        const name = contact.text;
        if ((name.toLocaleLowerCase()).includes(searchingText)) {
            contactsFiltered.push(contact);
        }
    }
    return contactsFiltered;
};

const searchingWithFilter = (searchingText) => {
    const contactsFiltered = contacts.filter(contact => {
        const name = contact.text;
        return (name.toLocaleLowerCase()).includes(searchingText)
    });
    return contactsFiltered;
};

// Lanza la aplicacion
main();