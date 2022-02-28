//Chase Bush

console.log("js is working")

document.getElementById("ships").addEventListener("click", function(){
    get_ships("https://swapi.dev/api/starships/");
}, false);

document.getElementById("people").addEventListener("click", function(){
    get_people("https://swapi.dev/api/people/");
}, false); 




let next_url;
let prev_url;



async function get_ships(url){
    let info_section = document.querySelector(".content");
    while (info_section.firstChild) {
        info_section.removeChild(info_section.firstChild);
    }

    let response = await fetch(url);
    let json_response = await response.json();

    let ship_array = json_response["results"];

    let next_button = document.createElement("input");
    let prev_button = document.createElement("input");

    next_button.type = "button";
    next_button.value = "Next page";
    next_button.id = "next_button";
    next_url = json_response.next;
    prev_url = json_response.previous;

    prev_button.type = "button";
    prev_button.value = "Previous page";
    prev_button.id = "prev_button";
        
    if (next_url != null){
    info_section.append(next_button);

    document.getElementById("next_button").addEventListener("click", function(){
        get_ships(next_url);
    },);
    } 
    if (prev_url != null){
        info_section.append(prev_button);

        document.getElementById("prev_button").addEventListener("click", function(){
            get_ships(prev_url);
        },); 
    }


    
    for (let ship of ship_array){
        let new_h2 = document.createElement("h2")
        let new_p1 = document.createElement("p")
        let new_p2 = document.createElement("p")
        


        let new_list = document.createElement("ul");
        let name_li = document.createElement("li");
        let model_li = document.createElement("li");
        let mfg_li = document.createElement("li");


        new_h2.textContent = "Starship Name: " + ship.name;
        new_p1.textContent = "Model: " + ship.model;
        new_p2.textContent = "Manufacturer: " + ship.manufacturer;

        name_li.append(new_h2);
        model_li.append(new_p1);
        mfg_li.append(new_p2);
        new_list.append(name_li);
        new_list.append(model_li);
        new_list.append(mfg_li);
        info_section.append(new_list);

        

        // for (let data_point of ship){
        //     // let new_li = document.createElement("li");
            
        // }


    }

    
}


async function get_people(url){
    let info_section = document.querySelector(".content");
    while (info_section.firstChild) {
        info_section.removeChild(info_section.firstChild);
    }

    let response = await fetch(url);
    

    let json_response = await response.json();

    let person_array = json_response["results"];
    

    let next_button = document.createElement("input");
    let prev_button = document.createElement("input");

    next_button.type = "button";
    next_button.value = "Next page"
    next_button.id = "next_button"
    next_url = json_response.next;
    prev_url = json_response.previous;

    prev_button.type = "button";
    prev_button.value = "Previous page"
    prev_button.id = "prev_button"
        
    if (next_url != null){
    info_section.append(next_button);

    document.getElementById("next_button").addEventListener("click", function(){
        get_people(next_url);
    },);
    } 
    if (prev_url != null){
        info_section.append(prev_button);

        document.getElementById("prev_button").addEventListener("click", function(){
            get_people(prev_url);
        },); 
    }

    for (let person of person_array){
        let new_h2 = document.createElement("h2")
        let new_p1 = document.createElement("p")
        let new_p2 = document.createElement("p")
        let new_p3 = document.createElement("p")


        let new_list = document.createElement("ul");
        let name_li = document.createElement("li");
        let model_li = document.createElement("li");
        let mfg_li = document.createElement("li");


        new_h2.textContent = "Name: " + person.name;
        new_p1.textContent = "Height(cm): " + person.height;
        new_p2.textContent = "Birth Year: " + person.birth_year;
        name_li.append(new_h2);
        model_li.append(new_p1);
        mfg_li.append(new_p2);
        new_list.append(name_li);
        new_list.append(model_li);
        new_list.append(mfg_li);
        info_section.append(new_list);

        

        // for (let data_point of ship){
        //     // let new_li = document.createElement("li");
            
        // }


    }

    
}


