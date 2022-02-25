class CommentM {
    constructor(type) {
            this.type = type;
            //getting initial comment list of local storage
            this.comments = readFromLS(this.type) || [];

        }
        //gettting all comments and filtiring the coments by name methods(passing them in an optional query argument)
    gettingComments(query = null) {
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

function writeToLS(key, data) {
    //converting the object to a string to be store in the local storage
    window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
    //converting back to an object the string strieved with JSON.parse
    return JSON.parse(window.localStorage.getItem(key));
}
//comments View
const commentUI = `<div id="commentUI" class="addComment">
<h2>Please enter your comment</h2>
<input type="text" id="commentEntry" />
<button id="commentSubmit">Add Comment</button>
</div>
<h2>Comments</h2>
<ul clas="comments"></ul>`;

function renderCommentList(element, comments) {
    element.innerHTML = '';
    //adding new list of comments
    comments.forEach(e => {
        let item = document.createElement('li');
        item.innerHTML = `
                ${e.name}: ${e.comment}
                `;
        element.appendChild(item);
    });

}
//comments Controller
export default class HikesCommentController {
    constructor(type, commentElementId) {
        this.type = type;
        this.commentElementId = commentElementId;
        this.m = new CommentM(this.type);
    }
    addSubmitListener(postName) {
        //ontouchend element to avoid more than one listener 
        document.getElementById('commentSubmit').ontouchend = () => {
            this.m.addingComments(
                postName,
                document.getElementById("commentEntry").value
            );
            document.getElementById("commentEntry").value = '';
            this.showCommentList(postName);
        };

    }
    showCommentList(query = null) {
        try {
            const parent = document.getElementById(this.commentElementId);
            if (!parent) throw new Error('comment parent not found');
            //checking if the commentUI code was added
            if (parent.innerHTML === '') {
                parent.innerHTML = 'commentUI';
            }
            if (query !== null) {
                //looking show comments and ner comment button
                document.querySelector('.addComment').style.display = 'block';
                this.addSubmitListener(query);
            } else {
                document.querySelector('.addComment').style.display = 'none';
            }
            let comments = this.m.gettingComments(query);
            if (comments === null) {
                comments = [];
            }
            renderCommentList(parent.lastChild, comments);
        } catch (error) {
            console.log(error);
        }
    }
}