class CommentM {
    constructor(type) {
            this.type = type;
            //getting initial comment list of local storage
            this.comments = readFromLS(this.type) || [];

        }
        //gettting all comments and filtiring the coments by name methods(passing them in an optional query argument)
    getComments(query = null) {
        if (query === null) {
            return this.comments;

        } else {
            return this.comments.filter(e => e.name === query);

        }
    }
    addingComments(postName, comment) {
        const newComment = {
            name: postName,
            text: comment,
            date: new Date()
        };
        this.comments.push(newComment);
        writeToLS(this.type, this.comment);
    }
}

function writeToLe(key, data) {
    //converting the object to a string to be store in the local storage
    window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
    //converting back to an object the string strieved with JSON.parse
    return JSON.parse(window.localStorage.getItem(key));
}