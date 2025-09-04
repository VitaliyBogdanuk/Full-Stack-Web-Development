# 🖥 Week 13: JSON, localStorage

---

## 🧑‍🏫 Лекція (1,5 години)

### Вступ (10 хв)

1. Раніше ми працювали з даними лише під час виконання програми.
2. Але інколи потрібно, щоб сайт “запам’ятовував” дані (наприклад, тему, корзину, нотатки).
3. Для цього використовуємо:

   * **JSON** — формат збереження даних.
   * **localStorage** — сховище у браузері.

---

### 1. JSON (25 хв)

📌 JSON = JavaScript Object Notation

* Використовується для обміну та збереження даних.
* Дуже схожий на об’єкти JS, але з певними правилами:

  * ключі і рядки завжди в лапках `""`;
  * немає функцій, лише дані.

📌 Приклад:

```json
{
  "name": "Іван",
  "age": 20,
  "isStudent": true,
  "hobbies": ["футбол", "музика"]
}
```

📌 У JS:

```js
let student = {
  name: "Іван",
  age: 20,
  isStudent: true
};

// Перетворення в JSON
let json = JSON.stringify(student);
console.log(json); // {"name":"Іван","age":20,"isStudent":true}

// З JSON назад у об’єкт
let obj = JSON.parse(json);
console.log(obj.name); // Іван
```

📝 Міні-завдання: створіть об’єкт “книга” і перетворіть його у JSON, а потім назад.

---

### 2. localStorage (35 хв)

📌 `localStorage` = сховище у браузері (не стирається після закриття вкладки).

Методи:

```js
localStorage.setItem("ключ", "значення"); // зберегти
let data = localStorage.getItem("ключ");  // отримати
localStorage.removeItem("ключ");          // видалити
localStorage.clear();                      // очистити все
```

📌 Працює лише з рядками → треба використовувати `JSON.stringify()` і `JSON.parse()`.

Приклад:

```js
let settings = { theme: "dark", fontSize: 16 };
localStorage.setItem("settings", JSON.stringify(settings));

let saved = JSON.parse(localStorage.getItem("settings"));
console.log(saved.theme); // dark
```

---

### Узагальнення (10 хв)

* JSON = формат для збереження даних.
* localStorage = браузерне сховище.
* Для складних даних завжди використовуємо `JSON.stringify()` і `JSON.parse()`.

📌 Контрольні питання:

1. У чому різниця між об’єктом JS і JSON?
2. Як зберегти масив у localStorage?
3. Чим відрізняється `localStorage.clear()` від `removeItem()`?

---

## 🛠 Практика (1,5 години)

### Завдання: збереження налаштувань теми

---

📌 **Крок 1. Підготовка (10 хв)**
`index.html`:

```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Налаштування теми</title>
  <style>
    body.light { background: white; color: black; }
    body.dark { background: black; color: white; }
  </style>
</head>
<body class="light">
  <h1>Зміна теми</h1>
  <button id="toggle">Змінити тему</button>

  <script src="script.js"></script>
</body>
</html>
```

---

📌 **Крок 2. Зміна теми (20 хв)**
`script.js`:

```js
let btn = document.getElementById("toggle");

btn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
```

---

📌 **Крок 3. Збереження теми у localStorage (25 хв)**

```js
let btn = document.getElementById("toggle");

function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}

// При завантаженні перевіряємо localStorage
let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
}

btn.addEventListener("click", function() {
  let current = document.body.classList.contains("dark") ? "light" : "dark";
  setTheme(current);
});
```

---

📌 **Крок 4. Перевірка (15 хв)**

1. Виберіть темну тему.
2. Перезавантажте сторінку.
3. Чи збереглася тема?

---

## 🏠 Домашнє завдання

**Список нотаток.**

1. Створити форму з `input` і кнопкою “Додати нотатку”.
2. При натисканні:

   * зберігати нотатку у масив,
   * зберігати масив у localStorage (через `JSON.stringify`).
3. Виводити список нотаток під формою.
4. При перезавантаженні сторінки — нотатки повинні залишатися.

📌 Додатково (для бажаючих): додати кнопку “Видалити всі нотатки”.

---

## 📎 Матеріали/Нотатки

* [MDN: JSON](https://developer.mozilla.org/uk/docs/Learn/JavaScript/Objects/JSON)
* [MDN: localStorage](https://developer.mozilla.org/uk/docs/Web/API/Window/localStorage)
* [JavaScript.info: JSON](https://uk.javascript.info/json)
* [JavaScript.info: localStorage](https://uk.javascript.info/localstorage)