const usersList = document.querySelector(".wrapper");
const loader    = document.querySelector(".loader");
function sendRequest (method, url, callback) {
    loader.style.display = 'block';
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var data = JSON.parse(request.responseText);
            callback(data);
            // console.log(data);
            loader.style.display = 'none';
        }
      }
    request.send();
} 

sendRequest('GET', 'https://jsonplaceholder.typicode.com/users', function(info){
    info.forEach(createBlockUser);
});

function createBlockUser(el){
    let userItem = document.createElement('div');
    userItem.className = 'user';
    // userItem.innerHTML = '<div>' + el.name + '</div>';
    
    userItem.appendChild(blockName(el.name, el.id));
    userItem.appendChild(createBtn('edit', el.id));
    userItem.appendChild(createBtn('delete', el.id));

    usersList.appendChild(userItem);
}

function blockName(_name, id){
    let div = document.createElement('div');
    div.classList.add('name');
    div.innerText = _name;
    div.dataset.id = id;
    div.addEventListener('click', getPosts)
    return div;
}

function getPosts(){
    let self = this;
    let id = this.dataset.id;
    let parent = this.parentNode;
    let grandPa = parent.parentNode;
    
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/posts?userId=' + id, function(posts){
        let list = document.createElement('ul');
        posts.forEach(post => {list.innerHTML += '<li>' + post.title + '</li>'});
        grandPa.insertBefore(list, parent.nextSibling)
        console.log(posts);
    });
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/comments?postId=' + id, function(comments){
        console.log(comments);
    });
}


function createBtn(role, id){
    let btn = document.createElement('button');
    btn.classList.add(role);
    btn.innerText = role;
    btn.dataset.id = id;
    if(role === 'delete'){
        btn.addEventListener('click', deleteUser);
    } else if(role === 'edit'){
        btn.addEventListener('click', changeUserName);        
    }
    return btn;
}
function changeUserName(){
    let newInfo = prompt('Change name ' , this.previousElementSibling.innerText);
    if(newInfo != null && newInfo != this.previousElementSibling.innerText){
        sendRequest('PUT', 'https://jsonplaceholder.typicode.com/users/'+this.dataset.id, function(info){
            console.log('request for change send');
        });
    }
}

function deleteUser(){
    sendRequest('DELETE', 'https://jsonplaceholder.typicode.com/users/'+this.dataset.id, (response)=>{
        console.log('request for delete user ' + this.dataset.id);
        this.parentNode.remove();
    });
}


