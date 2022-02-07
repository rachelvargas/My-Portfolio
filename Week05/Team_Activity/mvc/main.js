import HikesController from './hikesController.js';
//on load grab the array and insert it into the page
const myHikesController = new HikesController('list');
window.addEventListener('load', () => {
  myHikesController.showHikeList();
});
