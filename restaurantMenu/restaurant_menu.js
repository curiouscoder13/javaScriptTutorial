const breakfastMenu = ["Pancakes", "Egg Benedict", "Oatmeal", "Frittata"];
const maincourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];

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
