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

//View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    response: document.querySelector('#response'),
    timer: document.querySelector('#timer strong'),
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
        this.render(this.hiScore, game.hiScore());
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
        this.render(this.hiScore, game.hiScore());
    },
    buttons(array) {
        return array.map(value => `<button>${value}</button>`).join('');
    }



};
const game = {
    start(quiz) {
        console.log('start() invoked');
        this.score = 0;
        this.secondsRemaining = 20;
        this.timer = setInterval(this.countdown, 1000);
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

    countdown() {
        game.secondsRemaining--;
        view.render(view.timer, game.secondsRemaining);
        if (game.secondsRemaining < 0) {
            game.gameOver();
        }
    },
    ask(name) {
        console.log('ask() invoked');
        if (this.questions.length > 2) {
            shuffle(this.questions);
            const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
            shuffle(options);
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);
            view.render(view.response, view.buttons(options));
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
        
        hiScore(){
                const hi = localStorage.getItem('highScore') || 0;
                if(this.score > hi || hi === 0) {
                        localStorage.setItem('highScore',this.score);
                        view.render(view.info,'** NEW HIGH SCORE! **')
                }
                
                return localStorage.getItem('highScore');
                
  },
    gameOver() {
        console.log('gameOver() invoked');
        view.render(view.info `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
        clearInterval(this.timer);
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
tener('click', (event) => game.check(event), false);
view.hide(view.response);
