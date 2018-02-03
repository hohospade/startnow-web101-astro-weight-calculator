# Astro Weight Calculator

## Introduction

Welcome to your first JavaScript project!

Consider a scenario where you've been hired by NASA to build an internal tool. Their engineers would like a way to calculate the weight of their various instruments on different planets in our solar system.

This information will be used by the engineers to plan out how much equipment can be transported while still being able to depart the destination planet.

![](http://i.imgur.com/x189kBb.png)
(An example mockup of the finished project)

## A tour around an idiomatic folder structure

> Idiomatic: A fancy way of saying "How Things Are Usually Done"

As this is your first project, you should take a couple of minutes to get familiar with the names and the purposes of the files we've provided. The folder structure we provide resembles one you're likely to find out in the industry.  Here's a quick table to give you an overview.


#### .git
This is where git stores the files it needs to keep a history of changes made to this folder. You can learn more about the .git folder by reading [this Stack Overflow answer](http://stackoverflow.com/a/42928684/700439).

#### libs, node_modules, & test
We keep utility code / tests in these folders. You're encouraged to poke around and see what's in these folders, but don't change too much or the tests won't work!

#### .editoconfig
This file adjusts the settings in most editors to help collaborators work together on a project. It can help prevent disagreements about tabs vs spaces or end of line characters between different operating systems.  [EditorConfig](http://editorconfig.org/) is a nice to have in any project where other people may work on the code.

#### .gitignore
There are some files that don't need to be commited to GitHub in this project. This particular .gitignore file tells Git not to include the node_modules folder, because we can simply run npm install to download the contents of this folder between machines.

#### index.html
This is where you'll write your markup to layout the necessary elements to implement the features of the application.

#### main.js
This is where you'll write your JavaScript to implement the features of the application.

#### package.json
Most projects contain a file, usually in the project root called package.json - this file holds various metadata relevant to the project. This file is also used to give information to npm that allows it to identify the project (author name, description etc) as well as handle the project's dependencies. (Dependencies are the inclusion of pre-written code into your project.)

## Walkthrough

1. Open up a terminal
2. Open the project folder in VS Code using the following command: `code ~/oca/startnow-astro-weight-calculator`
3. Run: `npm install`.

Now you are ready to begin. Each task has an associated test that will confirm if you have completed the requirements. Type `npm test` and hit enter. You should be met with the following screen:

<img src="http://i.imgur.com/T4rWtLW.png" width="500"/>

This is the output of a tool we are using called `mocha` to test your code. You should see a list of failing tests categorized into **HTML** (asserting your HTML works), **JavaScript** (asserting your JavaScript works), and **Integration** (asserting that your HTML and JavaScript are working together correctly).

The goal here is to write code to make the tests pass.

## Make the HTML tests pass

1. Add the following to the `<body>` element in `index.html`, then run `npm test` in the terminal once again.

```html
<input id="user-weight" type="text" placeholder="Weight (lbs)" />
```

If you put it in the right place, you should be met with the following output.

<img src="http://i.imgur.com/xy7Sc0C.png" width="500" />

Hurray! You made your first test pass!

2. Make the remaining HTML tests to pass then come back. This should take you around 5-10 minutes.

3. Add a button and give it an id of "calculate-button", and the button text should read "Calculate".

If you're stuck, read [this W3Schools HTML tag reference](https://www.w3schools.com/tags/default.asp). If that fails, pair with another student or flag down an instructor for help.

> I imagine now would be a good time to talk about [Test Driven Development](http://agiledata.org/essays/tdd.html), but we'll hold off on that for now while you get familiar with writing code. _"Carpe Diem"_ folks!

## JavaScript tests

Alright, got those tests passing? Great! Next up is the JavaScript.

Add the following to your `main.js` file and tackle the 7 main challenges that once completed will implement the functionality of the website.

```js

// Write your JavaScript code here!
var planets = [
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

// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`



function calculateWeight(weight, planetName) {
  // 2. Write the code to return the correct weight

}

function handleClickEvent(e) {
  // 3. Create a variable called userWeight and assign the value of the user's weight.

  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.

  // 5. Create a variable called result and assign the value of the new calculated weight.

  // 6. Write code to display the message shown in the screenshot.

}

// 7. Set the calculate-weight button's onclick method to use the handleClickEvent function.

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)
```

