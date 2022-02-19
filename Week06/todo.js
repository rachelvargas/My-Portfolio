import { getContent, resetContent, renderList, notCompleted } from './utilities.js'

import { storageList, retrievingList, checkedListItem, removedFromList } from './ls.js'
export default class ToDo {
    constructor() {
        this.completed = false;
        this.id = Date.now();
    }
    getContentList() {
        this.content = getContent();
    }
    checkOff() {
        this.completed = true;
    }
    addingToList() {
        const content = getContent();
        if (content != "") {
            this.content = content;
            storageList(this);
            resetContent();
        }
    }
    getList(filter) {
            const list = retrievingList(filter);
            console.log("List Retrieved");
            console.log(list);
            return list;
        }
        //view-show the list according the filter(completed, not completed, all)
    showList(filter) {
            if (this.getList(filter) != null) {
                renderList(document.getElementById("toDoList"), this.getList(filter));
                this.addCheckedListener();
                this.addRemoveListener();
            }
            notCompleted(document.getElementById('taskLeft'), this.getList(false));
        }
        //adding listener to complete the list when clicked
    addCheckedListener() {
            const array = document.querySelector('ul');
            //adding event listener to the LIs
            array.addEventListener('click', function(e) {
                if (e.target.tagName === 'LI') {
                    checkedListItem(e.target.id); //ojo
                    //location.reload();
                    let list = retrievingList(null);
                    renderList(document.getElementById("toDoList"), list);
                }
            });
            console.log(array);
        }
        //adding lsitener to remove list
    addRemoveListener() {
            const array = document.getElementsByClassName('close');
            console.log(array);
            for (let i = 0; i < array.length; i++) {
                array[i].addEventListener('click', function(e) {
                    removedFromList(e.target.id); //ojo
                    //location.reload();
                    let list = retrievingList(null);
                    renderList(document.getElementById("toDoList"), list);
                });
            }
        }
        //adding listener to filter the list
    addFilterEventListener() {
        const toDo = this;
        const filters = document.getElementsByClassName('filter')
        for (let i = 0; i < filters.length; i++) {
            filters[i].addEventListener('click', function(e) {
                console.log('E: ' + e.target.id);
                if (e.target.id === "active") {
                    toDo.showList(false);
                } else if (e.target.id === "completed") {
                    toDo.showList(true);
                } else {
                    toDo.showList('all');
                }
            });
        }

    }

}
