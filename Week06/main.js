import ToDo from "./todo.js";

const addButton = document.getElementById('adding');
addButton.addEventListener('click', function() {
    // instance of objec and add it to list
    const todo = new ToDo();
    todo.addingToList();
    todo.showList();
    // todo.addFilterEventListener();
    //todo.addRemoveListener();
});
window.addEventListener('load', () => {
    //show a list of existing todos on load
    const todo = new ToDo();
    todo.showList();
    todo.addCheckedListener();
    todo.addFilterEventListener();
    todo.addRemoveListener();
});
