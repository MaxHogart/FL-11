let rootNode = document.getElementById('root'),
    addActionInput = document.querySelector('input'),
    addActionButton = document.querySelector('button'),
    list = document.querySelector('ul'),
    counterListElem = 1,
    dragSrcEl = null,
    maxItem = 10;

addActionInput.addEventListener('input', disabledAddListItem);
addActionButton.addEventListener('click', function (e) {
    e.preventDefault();
    createElementsForList();
    clearInput();
    showMaxListItem();
    disabledAddListItem();
})
function showMaxListItem () {
    let message = document.querySelector('p'),
        allItems= document.querySelectorAll('li').length ;
    if (allItems === maxItem) {
        message.style.opacity = 1;
    } else {
        message.style.opacity = 0;
    }
    
}
function clearInput () {
    addActionInput.value = '';
}
function disabledAddListItem () {
    if (addActionInput.value==='' || document.querySelectorAll('li').length === maxItem) {
        addActionButton.setAttribute('disabled', 'disabled');
    } else {
        addActionButton.removeAttribute('disabled');
    }
}
function createElementsForList () {
    let newElem = document.createElement('li'),
        newElemCheckbox = document.createElement('input'),
        newElemLabel = document.createElement('label'),
        newElemEditButton = document.createElement('button'),
        newElemDeleteButton = document.createElement('button'),
        newElemDivDeleteButton = document.createElement('div'),
        newElemtext = addActionInput.value,
        editIco = '<i class="material-icons">create</i>',
        deleteIco = '<i class="material-icons">delete</i>';

    newElemCheckbox.setAttribute('type', 'checkbox');
    newElemCheckbox.setAttribute('id', 'elem' + counterListElem);
    newElemLabel.setAttribute('for', 'elem' + counterListElem++);
    newElemEditButton.setAttribute('class', 'edit');
    newElemDeleteButton.setAttribute('class', 'delete');
    newElem.setAttribute('draggable', 'true')

    newElemLabel.innerHTML = newElemtext;
    newElemEditButton.innerHTML = editIco;
    newElemDeleteButton.innerHTML = deleteIco;

    list.appendChild(newElem);
    newElem.appendChild(newElemCheckbox);
    newElem.appendChild(newElemLabel);
    newElem.appendChild(newElemEditButton);
    newElemDivDeleteButton.appendChild(newElemDeleteButton);
    newElem.appendChild(newElemDivDeleteButton);

    newElemCheckbox.addEventListener('click', uncheckedCheckbox);
    newElemLabel.addEventListener('click', uncheckedCheckbox);
    newElemEditButton.addEventListener('click', editListElem);
    newElemDeleteButton.addEventListener('click', deleteListElem);
    newElem.addEventListener('dragover', allowDrop);
    newElem.addEventListener('dragstart', handleDragStart, false);
    newElem.addEventListener('drop', handleDrop, false);
}
function handleDragStart(event) {
    dragSrcEl = event.target;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', event.target.innerHTML);
}
function handleDrop(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = event.dataTransfer.getData('text/html');
    //   addListeners(this);
    //   addListeners(dragSrcEl);
    }
    return false;
}  
function allowDrop(event) {
    event.preventDefault();
}
function uncheckedCheckbox () {
    this.setAttribute('disabled', 'disabled');
} 
function editListElem () {
    let editElem = this.previousSibling,
        textElem = editElem.innerText,
        parentElement = this.parentElement,
        parentElemChild = parentElement.childNodes,
        editInput = document.createElement('input'),
        editSaveButton = document.createElement('button'),
        saveIco = '<i class="material-icons">save</i>';
    
    for (let i = 0; i<parentElemChild.length; i++) {
        parentElemChild[i].style.display = 'none';
    }
    editInput.value = textElem;
    editSaveButton.innerHTML = saveIco;
    editSaveButton.setAttribute('class', 'save');
    parentElement.appendChild(editInput);
    parentElement.appendChild(editSaveButton);
    editSaveButton.addEventListener('click', saveEditListElem);
}
function saveEditListElem () {
    let newText = this.previousSibling.value,
        parentElement = this.parentElement;

    this.previousSibling.remove();
    this.remove()

    let parentElemChild = parentElement.childNodes;

    parentElemChild[1].innerText = newText;
    console.log(newText);

    for (let i = 0; i<parentElemChild.length; i++) {
        parentElemChild[i].style.display = 'block';
    }
}
function deleteListElem () {
    this.parentElement.parentElement.remove();
}
