const quiz = [
    {
        name: "Superman", 
        realName : "Clark Kent"
    },
    {
        name: "Wonder Woman",
        realName: "Diana Prince"
    },
    {
        name: "Batman",
        realName: "Bruce Wayne"
    },
    
];
/*const heroes = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];*/

//View Object
const view = {
    score:document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    show(element){
        element.style.display = 'block';

    },
    hide(element){
        element.style.display = 'none';
    },

    render(target,content,attributes) {
        for(const key in attributes){
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
        
    }
   
};

const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        //main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        //end of main game loop
        this.gameOver();

        //start button disappear while the game is in progress, then reappear once the game has finished
        view.hide.apply(view.start);
        view.hide(view.start);

        
    },
    
ask(){
    const question = `What is ${this.question.name}'s real name?`;
    view.render( view.question,question);
    const response = prompt(question);
    this.check(response);
},
check(response){
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
    
},

gameOver(){
    view.render(view.info`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    view.show(view.start);
    

}

}
game.start(quiz)
//start button disappear while the game is in progress, then reappear once the game has finished
//view.hide.apply(view.start);

// attach a 'click' event listener to the button that will start the game when the button is clicked
view.start.addEventListener('click', () => game.start(quiz), false);





