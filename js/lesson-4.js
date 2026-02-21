// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector("body");
console.dir(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector("#title");
console.dir(titleEl);
// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector(".list");
console.dir(listEl);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topics = document.querySelectorAll("[data-topic]");
console.log(topics);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstElTopic = topics[0];
console.log(firstElTopic);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastElTopic = topics[topics.length - 1];
console.dir(lastElTopic);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const titleSibling = titleEl.nextElementSibling;
console.dir(titleSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const titles = document.querySelectorAll("h3");
console.dir(titles);
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
titles.forEach((title) => title.classList.add("active"));
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const topicNavigation = [...topics].find(
  (topic) => topic.dataset.topic === "navigation",
);
console.log(topicNavigation);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
topicNavigation.style.backgroundColor = "yellow";
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
topicNavigation.lastElementChild.textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const topicManipulation = document.querySelector(
  `[data-topic = ${currentTopic}]`,
);
console.log(topicManipulation);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
topicManipulation.style.backgroundColor = "azure";
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedTitle = [...titles].find((title) =>
  title.classList.contains("completed"),
);
console.log(completedTitle);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// completedTitle.parentElement.remove();
document.querySelector("li>h3.completed").remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const markup = `<p>Об'єктна модель документа (Document Object Model)</p>`;
titleEl.insertAdjacentHTML("afterend", markup);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const markup2 = `<li data-topic="manipulation">
        <h3>Створення та видалення елементів</h3>
        <p>
          DOM API дозволяє не тільки вибирати або змінювати вже існуючі, але й
          видаляти, а також створювати нові елементи, після чого додавати їх в
          документ.
        </p>
      </li>`;

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
listEl.insertAdjacentHTML("beforeend", markup2);
// 20 - очисти список
listEl.innerHTML = "";

//!========================================================================

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const elements = [];
for (i = 0; i <= 100; i++) {
  const div = document.createElement("div");
  div.classList.add("number");
  const number = randomNumber();
  div.textContent = number;
  if (number % 2 === 0) {
    div.classList.add("even");
  } else {
    div.classList.add("odd");
  }
  elements.push(div);
}
const numContainer = document.querySelector(".number-container");
numContainer.append(...elements);
