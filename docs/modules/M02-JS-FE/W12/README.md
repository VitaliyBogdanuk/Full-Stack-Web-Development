# 🖥 Week 12: Події: onclick, input, submit

---

## 🧑‍🏫 Лекція (1,5 години)

### Вступ (10 хв)

1. Минулого тижня ми навчилися змінювати DOM (текст, стилі).
2. Але зміни поки відбувалися тільки “за нашою командою” у коді.
3. Тепер ми навчимося реагувати на дії користувача: **клік, введення тексту, відправка форми**.
4. Це робиться через **події (events)**.

---

### 1. Що таке подія? (10 хв)

* Подія = дія користувача або браузера (клік, прокрутка, завантаження, введення тексту).
* JS може “слухати” події і реагувати на них.

📌 Основний синтаксис:

```js
element.addEventListener("подія", function() {
  // код
});
```

---

### 2. Подія onclick (20 хв)

```html
<button id="btn">Натисни мене</button>
<p id="msg"></p>
```

```js
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

btn.addEventListener("click", function() {
  msg.textContent = "Кнопку натиснули!";
});
```

📝 Міні-завдання: зробіть кнопку, яка змінює колір фону сторінки.

---

### 3. Подія input (20 хв)

```html
<input type="text" id="name" placeholder="Введіть ім’я">
<p id="greet"></p>
```

```js
let nameInput = document.getElementById("name");
let greet = document.getElementById("greet");

nameInput.addEventListener("input", function() {
  greet.textContent = "Привіт, " + nameInput.value;
});
```

📝 Міні-завдання: зробіть поле вводу, яке показує кількість введених символів.

---

### 4. Подія submit (25 хв)

```html
<form id="form">
  <input type="email" id="email" placeholder="Введіть email">
  <button type="submit">Надіслати</button>
</form>
<p id="result"></p>
```

```js
let form = document.getElementById("form");
let email = document.getElementById("email");
let result = document.getElementById("result");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // блокує перезавантаження сторінки
  if (email.value.includes("@")) {
    result.textContent = "Email коректний!";
  } else {
    result.textContent = "Некоректний email!";
  }
});
```

📝 Міні-завдання: додати валідацію — якщо поле порожнє, показати повідомлення “Введіть email”.

---

### Узагальнення (10 хв)

* Події = міст між користувачем і сайтом.
* Основні: `click`, `input`, `submit`.
* `preventDefault()` зупиняє стандартну дію браузера.

📌 Контрольні питання:

1. Чим відрізняється `click` від `submit`?
2. Для чого потрібен `preventDefault()`?
3. Як відслідкувати зміну значення в `<input>`?

---

## 🛠 Практика (1,5 години)

### Завдання: валідація форми

---

📌 **Крок 1. Підготовка (10 хв)**
`index.html`:

```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Валідація форми</title>
</head>
<body>
  <h1>Реєстрація</h1>
  <form id="form">
    <input type="text" id="username" placeholder="Ваше ім’я"><br><br>
    <input type="email" id="email" placeholder="Ваш email"><br><br>
    <input type="password" id="password" placeholder="Пароль"><br><br>
    <button type="submit">Зареєструватися</button>
  </form>
  <p id="errors"></p>

  <script src="script.js"></script>
</body>
</html>
```

---

📌 **Крок 2. Перевірка заповнення (25 хв)**
`script.js`:

```js
let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let errors = document.getElementById("errors");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let messages = [];

  if (username.value.trim() === "") {
    messages.push("Введіть ім’я");
  }
  if (!email.value.includes("@")) {
    messages.push("Некоректний email");
  }
  if (password.value.length < 6) {
    messages.push("Пароль має містити мінімум 6 символів");
  }

  if (messages.length > 0) {
    errors.textContent = messages.join(", ");
  } else {
    errors.textContent = "Форма заповнена правильно ✅";
  }
});
```

---

📌 **Крок 3. Підрахунок символів у полі (20 хв)**

```html
<input type="text" id="bio" placeholder="Опишіть себе">
<p id="count"></p>
```

```js
let bio = document.getElementById("bio");
let count = document.getElementById("count");

bio.addEventListener("input", function() {
  count.textContent = "Символів: " + bio.value.length;
});
```

---

📌 **Крок 4. Фінальна перевірка (15 хв)**

* Чи працює валідація?
* Чи показує помилки?
* Чи змінюється текст при вводі символів?

---

## 🏠 Домашнє завдання

**Форма з перевіркою email.**

1. Створіть форму з одним полем `email` і кнопкою “Перевірити”.
2. При натисканні перевіряйте:

   * чи поле не порожнє,
   * чи містить `@` і `.`.
3. Якщо все добре → показати повідомлення “Email коректний ✅”.
4. Якщо є помилки → показати їх у `<p id="error">`.

📌 Додатково (для бажаючих): зробити так, щоб поле підсвічувалося зеленим при правильному введенні і червоним при помилці.

---

## 📎 Матеріали/Нотатки

* [MDN: Вступ до подій](https://developer.mozilla.org/uk/docs/Learn/JavaScript/Building_blocks/Events)
* [MDN: addEventListener](https://developer.mozilla.org/uk/docs/Web/API/EventTarget/addEventListener)
* [JavaScript.info: Events](https://uk.javascript.info/introduction-browser-events)