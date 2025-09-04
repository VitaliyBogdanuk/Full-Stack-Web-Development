# 🖥 Week 14: Міні-проєкт **ToDo List** + контроль

---

## 🧑‍🏫 Лекція (1,5 години)

### Вступ (10 хв)

1. Ми вже вміємо:

   * робити HTML-структуру (теги, форми, списки);
   * стилізувати CSS (кольори, блоки, flexbox);
   * писати JavaScript (змінні, умови, цикли, функції);
   * змінювати DOM і працювати з подіями;
   * зберігати дані у localStorage.
2. Настав час об’єднати це у перший справжній міні-додаток — **список завдань (ToDo List)**.
3. У кінці заняття кожен студент матиме **робочий веб-додаток**, який:

   * дозволяє додавати завдання,
   * дозволяє видаляти завдання,
   * пам’ятає список після перезавантаження сторінки.

---

### 1. Планування (10 хв)

Наш застосунок складатиметься з:

* Поля вводу (`input`) для нового завдання.
* Кнопки “Додати”.
* Списку завдань (`<ul>`).
* Кнопки “Видалити” для кожного завдання.
* Механізму збереження у **localStorage**.

Вигляд (схема):

```
--------------------------
| [input] [Додати]       |
--------------------------
| Завдання 1 [Видалити]  |
| Завдання 2 [Видалити]  |
| Завдання 3 [Видалити]  |
--------------------------
```

---

### 2. HTML (15 хв)

Створіть файл `index.html`:

```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>ToDo List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Мій ToDo List</h1>

  <!-- Поле для введення нового завдання -->
  <input type="text" id="taskInput" placeholder="Нове завдання">
  <button id="addBtn">Додати</button>

  <!-- Список завдань -->
  <ul id="taskList"></ul>

  <script src="script.js"></script>
</body>
</html>
```

---

### 3. CSS (20 хв)

Створіть `style.css`:

```css
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1 {
  text-align: center;
}

#taskInput {
  padding: 8px;
  width: 200px;
}

#addBtn {
  padding: 8px 12px;
  margin-left: 10px;
}

#taskList {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

#taskList li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 5px;
  background: #f0f0f0;
  border-radius: 4px;
}

#taskList button {
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
```

---

### 4. JS: додавання завдання (20 хв)

Створіть `script.js`:

```js
let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

// Функція для створення нового елемента
function addTask(text) {
  let li = document.createElement("li");
  li.textContent = text;

  let delBtn = document.createElement("button");
  delBtn.textContent = "Видалити";

  // подія для кнопки видалення
  delBtn.addEventListener("click", function() {
    li.remove();
    saveTasks();
  });

  li.appendChild(delBtn);
  list.appendChild(li);
}

// подія для кнопки "Додати"
addBtn.addEventListener("click", function() {
  let text = input.value.trim();
  if (text === "") {
    alert("Введіть завдання!");
    return;
  }
  addTask(text);
  input.value = "";
  saveTasks();
});
```

---

### 5. JS: збереження у localStorage (20 хв)

```js
// Збереження всіх завдань у localStorage
function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Завантаження з localStorage при відкритті сторінки
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTask(task));
}

loadTasks(); // запускається одразу
```

---

### Узагальнення (5 хв)

* Ми створили **повноцінний застосунок**: ToDo List.
* Використали всі вивчені інструменти.
* Цей код можна розширювати (позначати завдання виконаними, редагувати, очищати список).

---

## 🛠 Практика (1,5 години)

### 🎯 Мета практики:

* Закріпити знання про **DOM, події, localStorage**.
* Навчитися будувати застосунок самостійно.
* Розбити задачу на маленькі кроки та знайти рішення.

---

### Завдання: **Реалізація ToDo List (HTML + CSS + JS)**

---

### 🔹 Крок 1. Підготовка (10 хв)

1. Створіть папку `week14`.
2. Додайте три файли:

   * `index.html` (структура сторінки),
   * `style.css` (оформлення),
   * `script.js` (логіка).
3. Підключіть CSS і JS у HTML.
4. Додайте на сторінку:

   * поле введення (`<input>`),
   * кнопку “Додати”,
   * порожній список (`<ul>`).

👉 *Підказка:* спробуйте намалювати на папері, як має виглядати сторінка.

---

### 🔹 Крок 2. Додавання завдання (25 хв)

1. У `script.js` знайдіть поле вводу, кнопку та список за допомогою `document.getElementById`.
2. Додайте подію на кнопку (`addEventListener("click", ...)`).
3. Усередині функції:

   * Отримайте текст з input.
   * Перевірте, чи він не порожній. Якщо пусто → `alert("Введіть завдання!")`.
   * Створіть новий елемент `<li>`.
   * Додайте у `<li>` текст завдання.
   * Додайте `<li>` у список.
   * Очистіть input.

👉 *Підказка:* новий елемент створюється через `document.createElement("li")`.

---

### 🔹 Крок 3. Видалення завдання (20 хв)

1. Для кожного нового `<li>` додайте кнопку “Видалити”.
2. Зробіть так, щоб при натисканні на кнопку завдання зникало.

👉 *Підказка:*

* Створіть кнопку `let btn = document.createElement("button")`.
* Додайте їй текст `"Видалити"`.
* Додайте до неї подію `btn.addEventListener("click", ...)`.
* У події викликайте `li.remove()`.

---

### 🔹 Крок 4. Збереження у localStorage (25 хв)

1. Створіть функцію `saveTasks()`, яка:

   * проходить по всіх `<li>` у списку,
   * збирає тексти завдань у масив,
   * зберігає масив у localStorage.

👉 *Підказка:* використовуйте `querySelectorAll("li")` + `JSON.stringify()`.

2. Викликайте `saveTasks()` після:

   * додавання завдання,
   * видалення завдання.

3. Створіть функцію `loadTasks()`, яка при завантаженні сторінки:

   * читає масив із localStorage,
   * створює `<li>` для кожного завдання.

👉 *Підказка:* використовуйте `JSON.parse()` + цикл `forEach`.

---

### 🔹 Крок 5. Тестування (10 хв)

1. Додайте кілька завдань.
2. Перезавантажте сторінку.
3. Перевірте: чи зберігся список.
4. Видаліть завдання → чи зникло воно з localStorage?

---

### 📌 Додаткові завдання (за бажанням)

* Додати кнопку “Очистити всі завдання”.
* Додати можливість позначати завдання виконаними (`classList.toggle("done")` → текст перекреслюється).
* Додати дату і час створення завдання.

---

## ✅ Пояснення для студентів

* **Лекція дала готовий приклад.**
* **Практика вимагає від вас скласти пазл самостійно**:

  * HTML → структура.
  * CSS → оформлення.
  * JS → логіка (події + DOM + localStorage).
* Якщо щось не виходить → спробуйте розбити завдання на дрібніші частини:

  * “Чи я створив `<li>`?”
  * “Чи я додав його у `<ul>`?”
  * “Чи я зберіг масив у localStorage?”

---

## 🏠 Домашнє завдання

1. Завершити ToDo List.
2. Завантажити проєкт у **GitHub**.
3. Створити **README.md**, де написати:

   * Назву проєкту (ToDo List).
   * Опис (що робить програма).
   * Як відкрити (відкрити `index.html` у браузері).
   * Можливості (додавання, видалення, збереження).

📌 Додаткові завдання (за бажанням):

* Додати кнопку “Очистити всі завдання”.
* Додати можливість позначати завдання виконаними (наприклад, перекреслювати текст).

---

## 📎 Матеріали/Нотатки

* [MDN: Робота з DOM](https://developer.mozilla.org/uk/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
* [MDN: localStorage](https://developer.mozilla.org/uk/docs/Web/API/Window/localStorage)
* [JavaScript.info: DOM](https://uk.javascript.info/dom-nodes)
* [JavaScript.info: Events](https://uk.javascript.info/introduction-browser-events)

---

## ✅ Контрольний зріз (20 завдань/питань)

### Теоретичні питання (коротка відповідь)

1. Що таке DOM?
2. Чим відрізняється `innerHTML` від `textContent`?
3. Як знайти елемент з id `"taskInput"` у JS?
4. Як створити новий елемент `<li>` у JS?
5. Для чого потрібна функція `addEventListener()`?
6. Що робить `preventDefault()` у подіях форми?
7. У чому різниця між `localStorage.setItem` і `localStorage.getItem`?
8. Чому у localStorage потрібно використовувати `JSON.stringify()` і `JSON.parse()`?
9. Чим відрізняється `for` від `forEach` у JS?
10. Що таке масив? Як дізнатися його довжину?

### Практичні міні-задачі (написати короткий код)

11. Створіть масив чисел і виведіть усі елементи в консоль.
12. Додайте у масив новий елемент `"новий"`.
13. Створіть об’єкт `user` з властивостями `name` і `age`.
14. Виведіть у консоль значення `user.name`.
15. Створіть функцію `sum(a, b)`, яка повертає суму двох чисел.
16. Створіть цикл `for`, який виводить числа від 1 до 10.
17. Зробіть кнопку, яка при кліку показує `alert("Привіт!")`.
18. Створіть поле `input`, яке показує кількість символів при введенні.
19. Напишіть код, який збереже у localStorage ключ `"color"` зі значенням `"red"`.
20. Напишіть код, який отримає значення `"color"` з localStorage і виведе його у консоль.