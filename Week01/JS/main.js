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

const ol = document.getElementById('assignments');      

links.forEach(link => {

  let li = document.createElement('li');

  let a = document.createElement('a');

  a.setAttribute('href', link.url);

  a.innerText = link.label;

  ol.appendChild(li);

});
