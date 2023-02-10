// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// new variables ---------------------------------------------------
var assignButton = document.querySelector(".assign");
var assignedItems = document.querySelector(".assigned-items");

// Add an Event Listener & Create an Element -----------------------
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    addToList(guest); // Refactor Code
    clearInput(); // Clear the Input Box
    updateGuestCount(); // Guest list count
  }
});
// Clear the Input Box ---------------------------------------------
const clearInput = function () {
  guestInput.value = "";
};
// Refactor Code ---------------------------------------------
var addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};
// Limit the Guest List ---------------------------------------------
var updateGuestCount = function () {
  var guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};
// Select Assigned Items & Build an Array
const assignItems = function () {
  const potluckItems = [
    "potato salad",
    "hummus",
    "cookies",
    "fruit",
    "watermelon",
    "caprese",
    "7-layer dip",
    "pasta salad",
    "gazpacho",
    "slaw",
    "bruschetta",
    "couscous"
  ];
  // Select Elements & Loop Through the Array
  var allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1); //To prevent assigning duplicate items
  }
};
// Add an Event Listener & Update PotluckItems Array
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
