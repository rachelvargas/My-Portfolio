/*// normally the model would have more going on...
retrieving the hikes from a database, adding hikes, 
editing hikes, filtering, etc. Our model will be very simple. 
 We could simply export the hikeList, but a better pattern would be to create a 
 'getter' function to do it instead. That way as our model changed...we could 
 simply change the getter function and anything using it should be able 
 to remain the same.
*/
const list = [
    {
        name: 'Bechler Falls',
        imgSrc: 'falls.jpg',
        imgAlt: 'Image of Bechler Falls',
        distance: '3 miles',
        difficult: 'Easy',
        description: 'Beatiful short hike along the Bechler river to Bechler Falls',
        directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
        },
    {
        name: ' Teton Canyon',
        imgSrc: 'falls.jpg',
        imgAlt: 'Image of Bechler Falls',
        distance: '3 miles',
        description: 'Beatiful short hike along the Bechler river to Bechler Falls',
        directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },
    {
        name: 'Denanda Falls',
        imgSrc: 'falls.jpg',
        imgAlt: 'Image of Bechler Falls',
        distance: '3 miles',
        description: 'Beatiful short hike along the Bechler river to Bechler Falls',
        directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },
    ];

    // Hike Model
    /*export default class HikeModel {
        constructor(list) {
             // We need a constructor...but in this case it isn't doing much
             this.parentElement = document.getElementById(list);
        }
        getAllHikes() {
            // should return a list of all the hikes.
            return list;
        }
        getHikeByName(hikeName) {
            // filter the hikes for the record identified by hikeName and return it
            return this.getAllHikes().find(hike => hike.name === hikeName);
        }
    }*/
    class HikeModel{
        getAllHikes(){
            return list;
        }
        getHikeByName(name){
            return list.find(hike => hike.name === name);
        }
    }
    export default HikeModel;