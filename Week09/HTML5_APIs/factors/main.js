//factorize the nuber entered inthe form:
const form = document.forms[0];
form.addEventListener('submit', factorize, false);

/*function factorize(event) {
    //prevent the form from being submited
    event.preventDefault();

    const number = Number(form.number.value);
    document.getElementsById('output').innerText = factorsOf(number);
}*/

function factorize(event) {
    // prevent the form from being submitted
    event.preventDefault();
    document.getElementById('output').innerHTML = '<p>This could take a while ...</p>';
    const number = Number(form.number.value);

    if (window.Worker) {
        const worker = new Worker('factors.js');
        worker.postMessage(number);
        worker.addEventListener('message', (event) => {
            document.getElementById('output').innerHTML = event.data;
        }, false);

        self.addEventListener('message', (event) => {

            const factors = String(factorsOf(Number(event.data)));
            self.postMessage(factors);
            self.close();

        }, false);
    }
}

function factorsOf(n) {
    if (Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if (n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
            factors.push(i, n / i);
        }
    }
    return factors.sort((a, b) => a - b);
}

//to create an example locally, turn off the same origin policy setting in the browser:
/**
 * 1- create a new file called factors.js
 * 2- save it in the same folder as main.js
 * 3- remove the factorOf() function from the main.js file 
 * 4- add it into our new factors.js file
 */

//editingthe factorize() function in the main.js file:
/*function factorize(event) {
    //prevent the form being submitted
    event.preventDefault();
    document.getElementById('output').innerHTML = '<p>This could take a while ...</p>';
    const number = Number(form.number.value);
    if (window.Worker) {
        onstworker = new Worker('factors.js');
        worker.postMessage(number);
        worker.getElementById('output').innerHTML = event.data;
    }, false);

}
}*/