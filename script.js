
// Part 1: Variable Declarations & Conditionals

let name = "Mariee";
let age = 20;
let isStudent = true;

if (isStudent && age < 25) {
  console.log(name + " is a young student.");
} else {
  console.log(name + " is not a young student.");
}


// Part 2: Custom Functions


// Function 1: Greet a user
function greetUser(userName) {
  return "Hello, " + userName + "!";
}

// Function 2: Calculate square of a number
function square(num) {
  return num * num;
}

console.log(greetUser("Mariee"));
console.log("Square of 5 is:", square(5));

// ============================
// Part 3: Loops
// ============================

// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}

// Loop 2: While loop
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// ============================
// Part 4: DOM Interactions
// ============================

// 1. Change text when button clicked
document.getElementById("btnChangeText").addEventListener("click", function() {
  document.getElementById("message").textContent = "The text has been changed!";
});

// 2. Add new item to the list
document.getElementById("btnAddItem").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.getElementById("itemList").children.length + 1);
  document.getElementById("itemList").appendChild(newItem);
});

// 3. Toggle background color
document.getElementById("btnToggleColor").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Dark mode styling via JavaScript
let css = document.createElement("style");
css.innerHTML = `
  .dark-mode {
    background-color: #333;
    color: white;
  }
`;
document.head.appendChild(css);
