let allResources = [crowfallBasic, crowfallResources, blacksmithing];

//Iterate through each resource object
function displayResources(object) {
  for (var key in object) {
    var value = object[key];
    //Displays the Heading of Each Category and Item
    if (typeof value === 'object') {
      // console.log(key);
      appendToPage(key, "h5");
      displayResources(value);
    } else {
      //Displays the resources/items, required to craft an item, in index.html
      appendToPage(value, "p");
      // console.log(value);
      checkForBasicResource(value);
    }
  }
}

//Checks to see if a resource exists in the resources.js, if so, log the resource types. Example: Wood -> Yew, Spruce, Etc...
function checkForBasicResource(resource) {
  for (var key in crowfallResources){
    if (resource.split(" : ")[0] == key) {
      // console.log(crowfallResources[key]);
    }
  }
}

//Adds an element to the index page as a text element
function appendToPage(txt, elem){
  var appendText = document.createTextNode(txt.split("_").join(" "));
  var createPara = document.createElement(elem);
  createPara.className += ("para")
  createPara.appendChild(appendText);
  document.body.appendChild(createPara);
}
