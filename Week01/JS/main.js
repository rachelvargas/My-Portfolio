const links = [
  {
    label: "Week01 notes",
    url: "Week01/index.html"
  },
  {
    label: "Week02 notes",
    url: "Week02/index.html"
    }  
  
];

const ol = document.getElementById('assignments');      // whatever your OL tag ID is

links.forEach(link => {

  let li = document.createElement('li');

  let a = document.createElement('a');

  a.setAttribute('href', link.url);

  a.innerText = link.label;

  // add other tags of interest if you like (date submitted, score)

  li.appendChild(a);

  ol.appendChild(li);

});


