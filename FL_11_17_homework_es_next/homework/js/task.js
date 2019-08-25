//Task 1

const maxElement = (arr) => Math.max(...arr);

const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
console.log(maxElement(array));


//Task 2

const copyArray = (arr) => [...arr];

const arrayToCopy = [1,2,3];
const copiedArray = copyArray(arrayToCopy);
console.log(arrayToCopy,copiedArray);
console.log(arrayToCopy === copiedArray);


//Task 3 

const addUniqueId = (obj) => Object.assign({}, obj, {[Symbol('id')]: 'id'} );

const obj = {name: 123};
const newObj = addUniqueId(obj);
console.log(obj, newObj);
console.log(obj === newObj);


//Task 4

const regroupObj = (obj) => {
    let {name, details: {id, age, university}} = obj;
    console.log(name, id, age, university);
	return {
		university: university,
		user: {
			age,
			firstName: name,
			id
		}
	}
}

const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};
console.log(regroupObj(oldObj));


//Task 5 

const findUniqueElements = (arr) => [...new Set(arr)];

const fullArray = [1,1,2,23,5,7,4,9,23,1,1,1,4,4];
console.log(findUniqueElements(fullArray));

//Task 6 

const hideNumber = (phoneNumber) => phoneNumber.slice(-4).padStart(10, '*');

const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber));


//Task 7

const required = () => {throw Error('Missing property')};
  
const add = (a = required(), b = required()) => a + b;

//console.log(add(4,5));
//console.log(add(5));


//Task 8

const logOrderedName = (url) => {
	return fetch(url)
		.then(request => request.json())
		.then(array => array.map(e => e.name).sort())
}

console.log(logOrderedName('https://jsonplaceholder.typicode.com/users'))


//Task 9

const logOrderedNameAsync = async (url) => {
	const request = await fetch(url);
	const data = await request.json();
	const array = data.map(item => item.name).sort();
	return array;
} 

console.log(logOrderedNameAsync('https://jsonplaceholder.typicode.com/users'));
