//getting the text input content
export function getContent(){
    const content = document.getElementById('addTodo').value;
    return content;
}

//resetting the input content field to blank
export function resetContent(){
    document.getElementById('addTodo').value = "";
}

//displaying the whole list
export function renderList(parent, list){
    parent.innerHTML = "";
    list.forEach(toDo => {
        rendertoDo(toDo);
        
    });
}

//displaying individual items from the list
function rendertoDo(toDo){
    const li = document.createElement('li');
    li.id = toDo.id;
    if(toDo.completed){
        //addint complete class name for later
        li.className = 'complete';
    }
    const text = document.createTextNode(toDo.content);
    li.appendChild(text);
    document.createElement('toDoList').appendChild(li);

    //displaying close button
    const span = document.createElement('SPAN');
    const removeIndicator = document.createTextNode("\u00D7");
    span.appendChild(removeIndicator);
    span.className = 'close';
    span.id = toDo.id;
    li.appendChild(span);
}
//sum the item that are left
export function notCompleted(location, list){
    if(list != null){
        const count = list.length;
        location.innerText = 'Task left: ' + count;

    }

}


    



