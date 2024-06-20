const nameEl = document.querySelector('[name="name"]');
const addButtonEl = document.querySelector('button');
const nameList = document.querySelector('.names');
const sortedNamesList = document.querySelector('.sorted-names');

const sortButton = document.querySelector('.sorting');

const names = [];


addButtonEl.addEventListener('click', () => {
    const nameValue = nameEl.value.charAt(0).toUpperCase() + nameEl.value.slice(1);
    nameEl.value = '';
    names.push(nameValue);
    createNewListItem(nameList, nameValue)
});

sortButton.addEventListener('click', () => {
    const liList = sortedNamesList.querySelectorAll('li');
    for(const liEl of liList) {
        liEl.remove();
    }

    const sortedNames = names.sort();
    for(let i=0; i < sortedNames.length; i++) {
        createNewListItem(sortedNamesList, sortedNames[i]);
    }
})

function createNewListItem(ulElem, name) {
    const liElem = document.createElement('li');
    liElem.innerHTML = name;
    ulElem.appendChild(liElem);
}

