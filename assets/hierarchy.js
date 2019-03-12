function displayResources(object) {
  for (var key in object) {
    var value = object[key];
    if (typeof value === 'object') {
      appendToPage(key, "h5");
      displayResources(value);
    } else {
      appendToPage(value, "p");
      console.log(value);
      checkForResource(value);
    }
  }
}

function checkForResource(resource) {
  for (var key in crowfallResources){
    if (JSON.stringify(resource).split(":")[0].includes(key) && JSON.stringify(crowfallResources).includes(resource) == false) {
      console.log('cat ' + JSON.stringify(resource).split(":"));
      console.log(crowfallResources[key]);
    }
  }
}
//
// var paras = document.body.getElementsByTagName('resource');
// i = 0;
// if (paras.length > 0 && i < paras.length){
//   paras[i].style.right = "20px";
// }

// function displayResources(object) {
//   for (var key in object) {
//     appendToPage(key, "h3");
//     var obj = object[key];
//     for (var prop in obj) {
//       if(obj.hasOwnProperty(prop)) {
//         appendToPage((prop + " = " + obj[prop]), "h5");
//       }
//     }
//   }
// }

// function displayResources(object){
//   Object.keys(object).forEach(
//     function(key) {
//       appendToPage(key, "h3");
//       displayBranches(object[key]);
//     }
//   );
// }
//
// function displayBranches(object){
//   Object.keys(object).forEach(
//     function(value) {
//       appendToPage(value, "h5");
//       displayResources2(object[value]);
//     }
//   );
// }
//
// function displayResources2(object){
//   Object.values(object).forEach(
//     function(key) {
//       appendToPage(key, "p");
//     }
//   );
// }


function appendToPage(txt, elem){
  var appendText = document.createTextNode(txt);
  var createPara = document.createElement(elem);
  createPara.className += ("para")
  createPara.appendChild(appendText);
  document.body.appendChild(createPara);
}

// function displayResources() {
//
//   var i = [];
//   Object.keys(crowfallCrafting).forEach(
//     function(key) {
//       i.push(key + ":");
//       Object.keys(crowfallCrafting[key]).forEach(
//         function(key2) {
//
//             i.push(key2 + ":");
//           Object.values(crowfallCrafting[key][key2]).forEach(
//             function(key3) {
//               i.push(key3 + ",");
//             }
//           )
//         }
//       )
//
//     }
//   );
//   var appendText = document.createTextNode(i.join(" "));
//   var createPara = document.createElement("h5");
//   createPara.appendChild(appendText);
//   document.body.appendChild(createPara);
//   i = [];
//   console.log(i.join(" "));
// };

// Search Function
// function getKeyByValue(object, value){
//
//   Object.keys(object).find(key => {if (key === value) {
//     console.log(object[key]);
//   }});
// }
//
// var i = getKeyByValue(crowfallCrafting, "Basic_Crafting");

/* function myFunction() {
var btn = document.createElement("BUTTON");        // Create a <button> element
var t = document.createTextNode("CLICK ME");       // Create a text node
btn.appendChild(t);                                // Append the text to <button>
document.body.appendChild(btn);                    // Append <button> to <body>
} */
