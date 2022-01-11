const links = [
  {
    label: "Week01 notes",
    url: "Week01/index.html"
  },
  {
    label: "Week02 notes",
    url: "Week02/index.html"
    },
  {
    label: "Week03 notes",
    url: "Week03/index.html"
  },
  {
    label: "Week04 notes",
    url: "Week04/index.html"
  },
  {
    label: "Week05 notes",
    url: "Week05/index.html"
  },
  {
    label: "Week06 notes",
    url: "Week06/index.html"
  },
  {
    label: "Week07 notes",
    url: "week07/index.html"
  },
  {
    label: "Week08 notes",
    url: "Week08/index.html"
  },
  {
    label: "Week09 notes",
    url: "Week09/index.html"
  },
  {
    label: "Week10 notes",
    url: "Week10/index.html"
  },
  {
    label: "Week11 notes",
    url: "Week11/index.html"
  },
  {
    label: "Week12 notes",
    url: "week12/index.html"
  },
  {
    label: "Week13 notes",
    url: "week13/index.html"
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
