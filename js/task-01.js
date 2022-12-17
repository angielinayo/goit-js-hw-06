// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories,
//знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і
//кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelector('#categories');
console.log('Number of categories: ', categories.children.length);

const categoryItems = document.querySelectorAll('.item');
categoryItems.forEach(category => {
  const categoryItemsTitle = category.querySelector('h2');
  console.log('Category: ', categoryItemsTitle.textContent);

  const categoryItemsQuantity = category.querySelectorAll('li');
  console.log('Elements: ', categoryItemsQuantity.length);
});
