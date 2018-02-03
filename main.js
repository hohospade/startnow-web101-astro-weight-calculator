// Write your JavaScript code here!

var planets = document.getElementById("planets")
var button = document.getElementById("calculate-button")
button.addEventListener("click", calculateWeight)
var selectPlanets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

for (var i = 0; i < selectPlanets.length; i++) {
  var option = document.createElement("option"),
    txt = document.createTextNode(selectPlanets[i][0]);
  option.appendChild(txt);
  option.setAttribute("value", selectPlanets[i][1]);
  planets.insertBefore(option, planets.lastChild);

}

function calculateWeight() {
  // 2. Write the code to return the correct weight


  var output = document.getElementById("output")
  var select = document.getElementById("planets")
  var gravity = select.value

  var planetName = select.options[select.selectedIndex].text
  var userWeight = document.getElementById("user-weight").value

  var weight = parseInt(userWeight) * parseFloat(gravity)


  var answer = "If you were on " + planetName + ", you would weigh " + weight + " cheeseburgers!(lbs)"
  output.textContent = answer;

  console.log({ gravity, planetName })
}

function handleClickEvent(e) {




  // 3. Create a variable called userWeight and assign the value of the user's weight.
  var userWeight = weight;


  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  var planetName = planets;


  // 5. Create a variable called result and assign the value of the new calculated weight.
  var result = output;


  // 6. Write code to display the message shown in the screenshot.

}
// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)
