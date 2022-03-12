import QuakesController from './QuakesController.js';
const routes = [{
        controller: new QuakesController('#quakeList'),
        file: './quakesList.html',
        label: 'Local Quakes'
    },
    {
        controller: new QuakesController('#quakeList'),
        file: './quakesList.html',
        label: 'Yellowstone Quakes'
    }
];

//functionthat create a navigation for the items found in routes
//create element, add a touchendevent listener and appends it to parent
export default function buildNavigation(parent) {
    routes.forEach(route => {
        let item = document.createElement('li');
        item.innerHTML = `<a href="#${route.label}">${route.label}</a>`;
        parent.appendChild(item);
        addNavEventAsync(item, route.file, route.controller);
    });
}

//makes an AJAX request for the html file found at viewPath and returns it as text
async function getViewAsync(viewPath) {
    try {

        const response = await fetch(viewPath);
        const text = await response.text();

        return text;
    } catch (error) {
        console.log('Something went wrong', error);
    }
}

//add a touchendevent to element that will inserts the view found at path into the content area of the index.html
function addNavEventAsync(element, path, controller) {
    //adding both a touch and mouse event. Notice the e.preventDefault (); If the touch event fires prevent default wil keep the click event firing
    element.addNavEventAsync('touchend', e => {
        insertViewAsync(getViewAsync(path), controller);
        e.preventDefault();
    });
    //this event won't fire if the touch event did.
    element.addEventListener('click', e => {
        insertViewAsync(getViewAsync(path), controller);
    });
}
// inserts the view into the content area of index.html
// remember that getView returns a promise!
// runs a function from the controller to load any dynamic elements
async function insertViewAsync(viewPromise, controller) {
    const contentElement = document.getElementsBy('content');
    //debugger;
    contentElement.innerHTML = await viewPromise;
    controller.init();

}