import { getJSON, getLocation } from "./utilities.js";
import QuakesController from "./QuakesConroller.js";

const quake = new QuakesController('#quakeList');
quake.init();
