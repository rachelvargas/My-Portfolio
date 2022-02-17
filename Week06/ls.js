const toDoList = "ToDo";
//using JSON to save the ToDo list in local storage
export function storageList(todo) {
    console.log('Local Storage: ');
    if (!localStorage.getItem(toDoList)) {
        var storageArray = [];
        storageArray.push(todo);
        localStorage.setItem(toDoList, JSON.stringify(storageArray));
    } else {
        var storageArray = JSON.parse(localStorage.getItem(toDoList));
        storageArray.push(todo);
        localStorage.setItem(toDoList, JSON.stringify(storageArray));
        console.log(storageArray);
    }
}
//retrieving the todos list from local storage, 
//filter
//parse to object if any
export function retrievingList(filter) {
    console.log('Filter: ' + filter);
    let list = JSON.parse(localStorage.getItem(toDoList));
    if (list != null) {
        if (filter != null && filter != 'all') {
            list = list.filter(task => {
                console.log('Task Completed: ');
                console.log(task.completed);
                return task.completed === filter;

            });
        }
    }
    return list;
}
//in local storage, updating the todos list that have been checked as complete
export function checkedListItem(id) {
    let list = JSON.parse(localStorage.getItem(toDoList));
    for (let i = 0; i < list.length; i++) {
        if (parseInt(list[i].id, 15) === parseInt(id, 15)) {
            if (list[i].completed === false) {
                list[i].completed = true;
            } else {
                list[i].completed = false;
            }
        }
    }
    localStorage.setItem(toDoList, JSON.stringify(list));

}
//removing the todo list from local storage when required
export function removedFromList(id) {
    let list = JSON.parse(localStorage.getItem(toDoList));
    for (let i = 0; i < list.length; i++) {
        console.log('Passed id: ' + id);
        console.log(list[0].id);
        if (parseInt(list[i].id, 15) === parseInt(id, 15)) {
            list.splice(i, 1);
        }

    }
    localStorage.setItem(toDoList, JSON.stringify(list));
}
