import HikeModel from "./hikeModel.js";
import HikesView from "./hikesView.js";
import CommentM from "./comments.js";


// Hike conroller
export default class HikesController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        // this is how our controller will know about the model and view... we add them right into the class as members.
        this.hikeModel = new HikeModel();
        this.hikesView = new HikesView(parentId);
        //an instance of the comment class to the controller
        this.comments = new CommentM('hikes', this.comments)
    }
    showHikeList() {
        //this will get called each time we need to display per full hike list. It should grab the list of hikes from the Model, and then send to the view.
        //show one hike with full details in the parentElement
        //Calling the lisk of the hikes from the model
        const list = this.hikeModel.getAllHikes();
        //sending the list and the element into the view
        this.hikesView.renderHikeList(this.parentElement, list);
        this.addHikeListener(); //then addiging them to listener
        //display comments
        this.comments.showCommentList();

    }
    showOneHike(hikeName) {
            // use this when you need to show just one hike...with details
            //in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
            const hike = this.hikeModel.getHikeByName(hikeName);
            this.hikesView.renderOneHikeFull(
                this.parentElement, hike).ontouchend = () => {
                this.showHikeList();
            };
            //display the comments for just this hike
            this.comments.showCommentList(hikeName);

        }
        //to show the details of hike ontouhend, attach a listener AFTER the list of hikes builted.
    addHikeListener() {
        //for the stretch you wil need to attach a listener to each of the listed hikes to watch for a touchen
        //We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(child => {
            child.addEventListener('touched', e => {
                this.showOneHike(e.currentTarget.dataset.name);
            });
        });


    }
}