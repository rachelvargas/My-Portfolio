document.forms.hero.heroName.focus();

const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
form.heroName.addEventListener('keyup',disableSubmit,false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.city = form.city.value;
    //hero.origin = form.origin.value;
    form.origin.value = 'Born as Kal-El on the planet Krypton...';

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;

}
hero.realName = form.realName.value;

//form.powers;
hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}

hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

document.forms.hero.powers[0].checked = true;

//form.category;
hero.category = form.category.value;
form.type[2].checked = true;

hero.age = form.age.value;

//form.city;
//hero.city = form.city.value;

/*form.addEventListener('submit',validate,false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}*/

//instant feedback
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}