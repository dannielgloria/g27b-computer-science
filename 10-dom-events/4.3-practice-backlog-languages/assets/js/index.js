// const elementForm = document.getElementById('language-form');
// const myInput = document.getElementsByClassName('myInput');
// const myDiv = document.getElementsByTagName('div');

const elementForm = document.querySelector('#language-form');
const ulElement = document.querySelector('#list-languages');
let languages = [];
const STATUS = {
    STAND_BY: 'standBy',
    START: 'start',
    FINISHED: 'finished'
};
// const myInput = document.querySelector('.myInput');
// const myInput = document.querySelector('div');

elementForm.addEventListener('submit', (event) => {

    // prevenir el envio del formulario
    event.preventDefault();

    // acceder al dom del formulario
    const inputLanguageElement = event.target.languageElement;
    const radiosNodeList = event.target.statusRadioElement;
    const statusElement = Array.from(radiosNodeList).find(element => element.checked);
    
    // validar que existian valores en el formulario
    if (!inputLanguageElement?.value || !statusElement?.value) { // statusElement && statusElement.value
        // encadamiento opcional para validar objetos y propiedades
        // statusElement && statusElement.value && statusElement.value.otherProp
        // !statusElement?.value?.otherProp
        return;
    }

    // armar una estructura de datos, segun lo que necesitamos
    const language = {
        description: inputLanguageElement.value,
        status: statusElement.value
    }
    languages.push(language);
    // limpiar la vista anterior
    cleanView();
    // call funcion que crea y agrega los elementos nuevos.
    renderViewlanguages(languages);
    // actualizar total de elementos
    renderTotal();

});

const cleanView = () => {
    ulElement.innerHTML = '';
}

const renderViewlanguages = (languages) => {
    languages.forEach((element, index) => {
        // create elements
        const liElement = document.createElement('li');
        const divElement = document.createElement('div');
        const iconElement = document.createElement('i');
        const buttonElement = document.createElement('button');
        // agregar estilos
        liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        buttonElement.classList.add('bi', 'bi-trash3-fill', 'text-danger');
        // validar el estatus del icon y agregar las clases que le correspondan segun su status
        setTypeIcon(iconElement, element.status);
        // agregar atributos
        buttonElement.setAttribute('index', index);
        // agregar evento al boton
        buttonElement.addEventListener('click', handleDelete);
        // agregar texto
        liElement.innerHTML = element.description;
        // agregar elementos al DOM
        ulElement.appendChild(liElement);
        liElement.appendChild(divElement);
        divElement.appendChild(iconElement);
        divElement.appendChild(buttonElement);

    })
}

const handleDelete = (event) => {
    const positionStr = event.target.getAttribute('index');
    const postion = parseInt(positionStr);
    languages.splice(postion, 1);
    cleanView();
    renderViewlanguages(languages);
    renderTotal();
};

const setTypeIcon = (iconElement, status) => {
    // const STAND_BY = STATUS.STAND_BY;
    // const START = STATUS.START;
    // const FINISHED = STATUS.FINISHED;
    // lo anterior se simplifica con 'destructuring' que es la siguiente linea
    const { STAND_BY, START, FINISHED } = STATUS;
    if (status === STAND_BY) {
        iconElement.classList.add('text-warning', 'bi-pause-circle-fill');
    } else if (status === START) {
        iconElement.classList.add('text-primary', 'bi-play-circle-fill');
    } else if (status === FINISHED) {
        iconElement.classList.add('text-success', 'bi-check-circle-fill');
    }
};

const renderTotal = () => {
    const totalElement = document.querySelector('#language-all');
    const completeElement = document.querySelector('#language-complete');
    const pendingElement = document.querySelector('#language-pending');
    totalElement.innerHTML = languages.length;
    completeElement.innerHTML = getTotalComplete(languages);
    pendingElement.innerHTML = getTotalPendings(languages);
}

const getTotalComplete = (languages) => {
    const { FINISHED } =  STATUS;
    const completeds = languages.filter(element => element.status === FINISHED);
    return completeds.length;
}

const getTotalPendings = (languages) => {
    const { STAND_BY, START } =  STATUS;
    const completeds = languages.filter(element => element.status === STAND_BY || element.status === START);
    return completeds.length;
}