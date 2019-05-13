let allResources = [blacksmithing, crowfallBasic, crowfallResources];
var tempVal;
var storeKey;
//Iterate through each resource object
function displayResources(object) {

  for (var key in object) {
    var value = object[key];
    // console.log(object);
    //Displays the Heading of Each Category and Item
    if (key === "Attributes") {
      continue;
    }
    if (typeof value === 'object') {
      storeKey = key;
      appendToPage(key, "h5", "heading", key);

      displayResources(value);

      makeButton(key);

    } else {
      //Displays the resources/items, required to craft an item, in index.html
      appendToPage(value, "p", "para", "class" + storeKey);
      // console.log(value);
      checkForResources(value);
    }
  }
}

//Checks to see if a resource exists in the resources.js, if so, log the resource types. Example: Wood -> Yew, Spruce, Etc...
function checkForResources(resource) {
  for (var key in allResources) {
    var value = allResources[key];
    for (var key2 in value) {
      // console.log(key2);
    }
    // console.log(value);
  }
  // console.log(resource);
}

//Adds an element to the index page as a text element
function appendToPage(txt, elem, class1, id1){
  var appendText = document.createTextNode(txt.split("_").join(" "));
  var createPara = document.createElement(elem);
  //Adds a heading/paragraph class and a title class associated with the current key
  createPara.classList.add(class1);
  createPara.id = id1;
  createPara.appendChild(appendText);
  document.body.appendChild(createPara);
}

function makeButton(key) {
  if (typeof key != 'undefined') {
    document.getElementById(key).addEventListener("click", function(){
      alert("clicked" + key);
    });
  }
}
