//STEP 04
//starting the quakes module importing utilities.js and QuekesControllerjs
//STEP 09, putting all together
import QuakesController from "./QuakesConroller.js;";
import buildNAvigation from './routing.js';
//const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

const buildNAvigation = document.getElementById('mainNav');
buildNAvigation(navElement);

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.getQuakesByRadius();
