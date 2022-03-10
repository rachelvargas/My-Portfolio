import { getJSON, getLocation } from "./utilities";
import QuakesController from "./QuakesConroller";

const quake = new QuakesController('#quakeList');
quake.init();