//STEP 04
//starting the quakes module importing utilities.js and QuekesControllerjs
import { getJSON, getLocation } from "./utilities.js";
import QuakesController from "./QuakesConroller.js";

//const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';


const quake = new QuakesController('#quakeList');
quake.init();
