const imgBasePath = '//byui-cit.github.io/cit261/examples/';

class HikesView {
    renderHikeList(hikeListElement, list) {
        hikeListElement.innerHTML = '';
        list.forEach(hike => {
            hikeListElement.appendChild(this.renderOneHikeLight(hike));
        });
    }


    renderOneHikeLight(hike) {
        const hikers = document.createElement('li');
        hikers.classList.add('light');
        hikers.innerHTML = ` <h2>${hike.name}</h2>
      <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${
        hike.imgAlt
      }"></div>
      <div>
              <div>
                  <h3>Distance</h3>
                  <p>${hike.distance}</p>
              </div>
              <div>
                  <h3>Difficulty</h3>
                  <p>${hike.difficulty}</p>
              </div>
              <div>
          <h3>Description</h3>
          <p>${hike.description}</p>
      </div>
      <div>
          <h3>How to get there</h3>
          <p>${hike.directions}</p>
      </div>`;

        return hikers;
    }
    renderOneHikeFull(parent, hike) {
        const backButton = document.createElement('button');
        backButton.innerHTML = '&lt;- All Hikes';
        const hikers = document.createElement('li');
        hikers.innerHTML = ` 
          
      <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
      <h2>${hike.name}</h2>
      <div>
          <h3>Distance</h3>
          <p>${hike.distance}</p>
      </div>
      <div>
          <h3>Difficulty</h3>
          <p>${hike.difficulty}</p>
      </div>
      <div>
          <h3>Description</h3>
          <p>${hike.description}</p>
      </div>
      <div>
          <h3>How to get there</h3>
          <p>${hike.directions}</p>
      </div>

  `;

        //return hikers;
        parent.innerHTML = '';
        hikers.insertBefore(backButton, hikers.childNodes[0]);
        parent.appendChild(hikers);
        return backButton;
    }
}
export default HikesView;