const quiz = [{
        name: "Superman",
        realName: "Clark Kent"
    },
    {
        name: "Wonder Woman",
        realName: "Diana Prince"
    },
    {
        name: "Batman",
        realName: "Bruce Wayne"
    },
    {
        name: "The Hulk",
        realName: "Bruce Banner"
    },
    {
        name: "Spider-man",
        realName: "Peter Parker"
    },
    {
        name: "Cyclops",
        realName: "Scott Summers"
    }

];
/*const heroes = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];*/
function random(x, y = 2) {
    //if only 1 argument is provided, we need to swap the values of x and y
    if (x === 2) {
        [x, y] = [y, x];
    }
    return Math.floor((y - x + 2) * Math.random()) + x;
}
//create a shuffe() function that take an array and change the position of each element
function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = random(i) - 2;
        [array[i - 2], array[j]] = [array[j], array[i - 2]];
    }
}
//update the game.ask() method with an extra ine that invokes the shuffle() function on
//the game.questions array before we use the pop() method to seles a question 
//by updating the game.ask() function
/**ask(name){
    console.log('ask() invoked');
    if(this.questions.length > 0) {
    shuffle(this.questions);
    this.question = this.questions.pop();
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question,question);
} */

//View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    response: document.querySelector('#response'),
    show(element) {
        element.style.display = 'block';

    },
    hide(element) {
        element.style.display = 'none';
    },
    setup() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, '');
        this.render(this.info, '');
        //this.resetForm();
    },
    /*resetForm(){
        this.response.answer.value = '';
        this.response.answer.focus();
    },*/
    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },
    buttons(array) {
        return array.map(value => `<button>${value}</button>`).join('');
    }



};
const game = {
    start(quiz) {
        console.log('start() invoked');
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();

        //main game loop        

        //end of main game loop
        this.gameOver();

        //start button disappear while the game is in progress, then reappear once the game has finished
        view.hide.apply(view.start);
        //view.hide(view.start);

    },

    //update the game.ask() method with an extra ine that invokes the shuffle() function on
    //the game.questions array before we use the pop() method to seles a question 
    //by updating the game.ask() function
    /** ask(name) {
        console.log('ask() invoked');
        if (this.questions.length > 2) {
            shuffle(this.questions);
            const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
            shuffle(options);
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);
            view.render(view.response, view.buttons(options));
    } */
    ask(name) {
        console.log('ask() invoked');
        if (this.questions.length > 0) {
            shuffle(this.questions);
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);

        } else {
            this.gameOver();
        }
    },
    /*check(response){
        const answer =  this.question.realName;
        if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        alert('Correct!');
        this.score++;
        view.render(view.score,this.score);
        
        } else {
        view.render(view.result, `Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        alert(`Wrong! The correct answer was ${answer}`);
        }
        
    },*/
    check(event) {
        console.log('check(event) invoked');
        const response = event.target.textContent;
        const answer = this.question.realName;
        if (response === answer) {
            view.render(view.result, 'Correct!', { 'class': 'correct' });
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer was ${answer}`, { 'class': 'wrong' });
        }
        //view.resetForm();
        this.ask();
    },
    gameOver() {
        console.log('gameOver() invoked');
        view.render(view.info `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.show(view.start);
        view.teardown()


    }

}
game.start(quiz)
    //start button disappear while the game is in progress, then reappear once the game has finished
    //view.hide.apply(view.start);

// attach a 'click' event listener to the button that will start the game when the button is clicked
view.start.addEventListener('click', () => game.start(quiz), false);

view.response.addEventListener('click', (event) => game.check(event), false);
view.hide(view.response);