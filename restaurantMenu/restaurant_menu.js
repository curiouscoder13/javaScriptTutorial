const breakfastMenu = [
  "Pancakes - $10",
  "Egg Benedict - $15",
  "Oatmeal - $12",
  "Frittata - $15",
];
const maincourseMenu = [
  "Steak - $25",
  "Pasta - $20",
  "Burger - $15",
  "Salmon - $25",
];
const dessertMenu = [
  "Cake - $15",
  "Ice Cream -  $10",
  "Pudding - $10",
  "Fruit Salad - $15",
];

// Method 1 mapping
const breakfastMenuItemsHTML = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
  .join("");
document.getElementById("breakfastMenuItems").innerHTML =
  breakfastMenuItemsHTML;

// Method 2 forEach
let maincourseItem = "";
maincourseMenu.forEach((item, index) => {
  maincourseItem += `<p>Item ${index + 1}:${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = maincourseItem;

// Method 3 for loop
let dessertItem = "";
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem;
