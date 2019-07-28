//Sections
let main = document.getElementById('main');
let addTaskBlock= document.querySelector('#add-task-block');
let modifyTask = document.querySelector('#modify-task');

//Input and list
let input = document.getElementById('field');
let list = document.getElementById('todo-list');
let alertError = document.querySelector('.alert');

//Buttons 
let btnSaveTask = document.querySelector('.addtodo');
let btnModifyTask = document.querySelector('.modifytodo');
let btnAddTask = document.querySelector('#add-btn');
let cancelBtn = document.querySelectorAll('.cancel');
let todoList = [];

if(localStorage.getItem('mytodo')){
	let json = JSON.parse(localStorage.getItem('mytodo'));
			
	todoList = json;
	for(let i = 0; i < json.length; i++){
		let li = createLi(json[i]);
		list.appendChild(li);
	}
}

counterTasks();

document.addEventListener('click', function(e){
	let indxTask = indexTask(e.target);
	if(e.target.localName === 'img'){
		delTask(indxTask);
		counterTasks();
	} else if(e.target.localName === 'input' && e.target.id !== 'field' && e.target.id !== 'modifyItem'){
		eventCheckbox(indxTask);
	} else if(e.target.localName === 'label'){
        showModifyTask(indxTask);
        modifyToDo(e.target);
    }
});

btnAddTask.addEventListener('click', showAddTask);

btnSaveTask.addEventListener('click', function(){
    currentSection(btnSaveTask);
});

cancelBtn.forEach(btn => btn.addEventListener('click', () => currentSection(btn)));

btnSaveTask.addEventListener('click', addTask);

function createIdTask(){
    let id;
    let ok = false;
    let max = 100;
    do{
        id = Math.floor(Math.random() * max);
        ok = !todoList.some((idTask) => { 
            return id === idTask.id;
        });
    }while(!ok);            
    return id;
}

function addTask(){
    if (input.value === '') { 
        return;
    }
    let idTask = createIdTask();
    let li = createLi({val: input.value, checked: false, id: idTask});
	list.appendChild(li);
	todoList.push({val: input.value, checked: true, id: idTask});
	eventCheckbox(todoList.length - 1);
	input.value = '';
    saveDB();
    counterTasks();
}

function modifyToDo(label){
    let indxTask = indexTask(label);
    if(!list.children[indxTask].children[0].checked){
        btnModifyTask.onclick = function(){
            let inputModify = document.getElementById('modifyItem').value;
            if (checkSameValue(inputModify)) {
                showErr("2: You can't edit already exist item")
                return;
            }
            todoList[indxTask].val = inputModify;
            saveDB();
            hideModifyTask();
            main.classList.toggle('active');
            list.children[indxTask].children[1].innerText = inputModify;
            inputModify = '';
            removeHash();
        };
    }
}

function checkSameValue(text){
    return todoList.some(existText => existText.val === text);
}

function showModifyTask(i){
    if(!list.children[i].children[0].checked){
        main.classList.toggle('active');
        modifyTask.classList.add('active');
        location.hash = '#/modify/' + todoList[i].id;
    } else{
        showErr("1: You can't edit already done item");
    }
}

function showErr(text){
    let delay = 2000;
    alertError.innerHTML = `<b>Danger!</b> <br> ${text}`;
    alertError.style.left = '100px';
    setTimeout(function(){
        alertError.style.left = ''
    }, delay);
}

function hideModifyTask(){
    modifyTask.classList.remove('active');
}

function addHash(){
    location.hash = '#add';
}

function removeHash(){
    location.hash = '';
}
        
function showAddTask(){
    main.classList.remove('active');
    addTaskBlock.classList.toggle('active');
    hideModifyTask();
    addHash();
}

function currentSection(btn){
	main.classList.add('active');
    btn.parentElement.classList.toggle('active');
    hideModifyTask();
    removeHash();
}

function eventCheckbox(index){
    let parentLi = list.children[index];
	if(parentLi.firstChild.checked){
        list.appendChild(parentLi);
        parentLi.classList.add('done');
		todoList[index].checked = !todoList[index].checked;
		let val = todoList.splice(index, 1)[0];
		todoList.push(val);
		saveDB();
    } else{
		let i = 0;
        while(!todoList[i].checked){
            i++;
        }
		todoList[index].checked = !todoList[index].checked;
		let movedItem = todoList.splice(index, 1)[0];
		todoList.splice(i, 0, movedItem);
        list.insertBefore(parentLi, list.children[i]);
        parentLi.classList.remove('done');
		saveDB();
	}
}

function delTask(index){
	let perantLi = list.children;
	perantLi[index].remove();
	todoList.splice(index, 1);
	saveDB();
}

function saveDB(){
	localStorage.setItem('mytodo', JSON.stringify(todoList));
}

function counterTasks(){
    let number = 3;
	if(list.childElementCount === 0){
		list.innerText = 'TODO is empty';
	} else if(list.firstChild.nodeType === number) {
		list.firstChild.remove();
	}
}

function indexTask(el){
    if( el.parentElement === null || el.parentElement.parentElement.localName !== 'ul' ){
        return 0;
    }
    let liIndex = el.parentElement;
	let allLiElems = liIndex.parentElement.querySelectorAll('li');
	for(let i = 0; i < allLiElems.length; i++){
		if(allLiElems[i] === liIndex){
			return i;
		}
	}
}

//Create elements for task
function createLi(info){
	let li = document.createElement('li');
	createCheckboxElem(li, info);
	createCloseElem(li);
	return li;
}

function createCheckboxElem(parentLI, obj){
	let label = document.createElement('label'),
	checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	checkbox.checked = obj.checked;
    label.innerText = obj.val;
    if(checkbox.checked){
        parentLI.classList.add('done');
    }
    parentLI.appendChild(checkbox);
	parentLI.appendChild(label);
}

function createCloseElem(elem){
	let span = document.createElement('SPAN');
    let img = '<img src=assets/img/remove-s.jpg>';
	span.className = 'close';
	span.innerHTML = img;
	elem.appendChild(span);
}

