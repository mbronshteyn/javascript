//Open the json file and then populate learnjs.html with the data from the json file. 
//document.getElementsByTagName()
//document.getElementById()
//innerHTML();

const path = './data.json';
let contentObj = {};

// load data
(  path => {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', path );
  xobj.onreadystatechange = function () {
    if (xobj.readyState === 4) {
      contentObj = JSON.parse(xobj.responseText);
      processData(contentObj);
    }
  };
  xobj.send(null);
} )( path );

const processData = function (cObj) {
  // set title
  document.querySelector('.title').innerHTML = cObj.title;

  // set the bullets
  let cnt = 1;
  cObj.cities.forEach( city => {
    document.getElementById( `b${cnt++}`).innerText = city.name;
  });
};

