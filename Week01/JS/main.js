const links = [
  {
    label: "Week01 notes",
    url: "week01/index.html"
  },
  {
    label: "Week02 notes",
    url: "week02/index.html"
    },
  {
    label: "Week03 notes",
    url: "week03/index.html"
  },
  {
    label: "Week04 notes",
    url: "week04/index.html"
  },
  {
    label: "Week05 notes",
    url: "week05/index.html"
  },
  {
    label: "Week06 notes",
    url: "week06/index.html"
  },
  {
    label: "Week07 notes",
    url: "week07/index.html"
  },
  {
    label: "Week08 notes",
    url: "week08/index.html"
  },
  {
    label: "Week09 notes",
    url: "week09/index.html"
  },
  {
    label: "Week10 notes",
    url: "week10/index.html"
  },
  {
    label: "Week11 notes",
    url: "week11/index.html"
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


