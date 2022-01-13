let text_value = document.getElementById("text_input");
let div = document.getElementById("output");

let user_number = document.getElementById("number_input");
let user_number2 = document.getElementById("number_input2");


function content_reader(input_value){

    let output_element = document.createElement('h2');
    output_element.innerText = input_value;
    div.appendChild(output_element);
}

function number_adder(user_number){
    let sum_display = document.createElement("h3");
    let sum_result = 0;

    for (let i = 1; i <= user_number; i++){
        sum_result += i;
    }
    sum_display.innerText = sum_result;
    div.appendChild(sum_display);
    
}

function adding_machine (input1, input2){
    let num1 = parseInt(input1);
    let num2 = parseInt(input2);

    let sum_display = document.createElement("h3");
    let sum = num1 + num2;
    sum_display.innerText = sum;
    div.appendChild(sum_display);
}