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
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

const view = {
    score:document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target,content,attributes) {
        for(const key in attributes){
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
};

function start(quiz){
    let score = 0;

    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop

    gameOver();

    // function declarations
    function ask(question){
        return prompt(question);
    }

    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz);

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
    },
    /*ask(){
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response);
    },   
    check(response){
        const answer = this.question.realName;
        if(response === answer){
        alert('Correct!');
        this.score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    },

    gameOver(){
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}
game.start(quiz);*/
ask(){
    const question = `What is ${this.question.name}'s real name?`;
    view.render( view.question,question);
    const response = prompt(question);
    this.check(response);
},
check (response){
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

}
}

