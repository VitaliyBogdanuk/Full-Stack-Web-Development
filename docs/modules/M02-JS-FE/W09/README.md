# 🖥 Week 09: Функції та області видимості

---

## 🧑‍🏫 Лекція (1,5 години)

### Вступ (10 хв)

1. Минулого тижня ми навчилися писати умови та цикли.
2. Але код стає довгим і заплутаним.
3. Щоб його організувати, ми використовуємо **функції**.
4. Сьогодні:

   * Як створювати функції.
   * Як передавати їм дані (параметри).
   * Як отримувати результат (return).
   * Що таке **scope** (область видимості).

---

### 1. Що таке функція (20 хв)

📌 Функція — це “блок коду”, який можна викликати кілька разів.

```js
function sayHello() {
  console.log("Привіт!");
}

sayHello(); // виклик функції
sayHello();
```

* `function` — ключове слово.
* `sayHello` — назва функції.
* `{ ... }` — тіло функції.

---

### 2. Параметри та return (25 хв)

📌 Приклад з параметрами:

```js
function greet(name) {
  console.log("Привіт, " + name + "!");
}

greet("Іван");
greet("Оля");
```

📌 Приклад з `return`:

```js
function sum(a, b) {
  return a + b;
}

let result = sum(5, 3);
console.log("Результат:", result);
```

📝 Міні-завдання:
Створіть функцію `square(number)`, яка повертає квадрат числа.

---

### 3. Область видимості (scope) (20 хв)

📌 Локальна і глобальна змінні:

```js
let globalVar = "Я глобальна";

function test() {
  let localVar = "Я локальна";
  console.log(globalVar); // доступна
  console.log(localVar);  // доступна тільки тут
}

test();
// console.log(localVar); // ❌ помилка
```

📌 Вкладені функції:

```js
function outer() {
  let outerVar = "зовнішня";

  function inner() {
    console.log(outerVar); // бачить змінні ззовні
  }

  inner();
}

outer();
```

📝 Міні-завдання: пояснити, чому `localVar` недоступна за межами функції.

---

### 4. Інтерактивні діалоги (15 хв)

📌 `alert()` — показує повідомлення.
📌 `prompt()` — просить ввести дані.
📌 `confirm()` — “Так/Ні”.

```js
let name = prompt("Як тебе звати?");
alert("Привіт, " + name + "!");

let isAdult = confirm("Тобі є 18?");
if (isAdult) {
  alert("Доступ дозволено");
} else {
  alert("Доступ заборонено");
}
```

---

### Узагальнення (10 хв)

* Функції = блоки коду, які можна перевикористовувати.
* Параметри = вхідні дані, return = результат.
* Scope = де доступна змінна.
* `alert/prompt/confirm` = інструменти для інтерактивності.

📌 Контрольні питання:

1. Чим відрізняється функція без `return` і з `return`?
2. Що таке глобальна змінна?
3. Як запитати у користувача його ім’я?

---

## 🛠 Практика (1,5 години)

### Завдання: функція перевірки пароля

---

📌 **Крок 1. Створіть файли (10 хв)**

* Папка `week09`.
* `index.html` + `script.js`.

У `index.html`:

```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Перевірка пароля</title>
</head>
<body>
  <h1>JS: Функції</h1>
  <script src="script.js"></script>
</body>
</html>
```

---

📌 **Крок 2. Створюємо функцію (20 хв)**
У `script.js`:

```js
function checkPassword() {
  let password = prompt("Введіть пароль:");
  
  if (password === "1234") {
    alert("Доступ дозволено!");
  } else {
    alert("Неправильний пароль!");
  }
}

checkPassword();
```

---

📌 **Крок 3. Додаємо confirm (20 хв)**

```js
function startCheck() {
  let proceed = confirm("Хочете увійти?");
  
  if (proceed) {
    checkPassword();
  } else {
    alert("Ви скасували вхід");
  }
}

startCheck();
```

---

📌 **Крок 4. Робимо повторні спроби (25 хв)**

```js
function checkPassword() {
  let password;
  let attempts = 3;

  while (attempts > 0) {
    password = prompt("Введіть пароль (залишилось спроб: " + attempts + "):");

    if (password === "1234") {
      alert("Доступ дозволено!");
      return;
    } else {
      alert("Неправильний пароль!");
    }

    attempts--;
  }

  alert("Усі спроби вичерпано. Доступ заблоковано.");
}

checkPassword();
```

---

📌 **Крок 5. Перевірка (15 хв)**

* Запустіть сторінку.
* Чи працює перевірка?
* Чи з’являється alert з повідомленнями?

---

## 🏠 Домашнє завдання

**Написати функцію калькулятора.**

1. Функція повинна:

   * запитати два числа через `prompt()`,
   * запитати операцію (`+`, `-`, `*`, `/`),
   * вивести результат через `alert()`.

2. Використати умовні оператори `if...else` або `switch`.

📌 Приклад роботи:

```
Введіть перше число: 10
Введіть друге число: 5
Виберіть операцію: +
Результат: 15
```

3. Додатково (для бажаючих):

   * зробити перевірку на ділення на нуль;
   * зробити кілька розрахунків підряд у циклі, поки користувач не натисне “Скасувати”.

---

## 📎 Матеріали/Нотатки

* [MDN: Функції](https://developer.mozilla.org/uk/docs/Learn/JavaScript/Building_blocks/Functions)
* [JavaScript.info: Functions](https://uk.javascript.info/function-basics)
* [MDN: Область видимості](https://developer.mozilla.org/uk/docs/Glossary/Scope)
* [MDN: alert/prompt/confirm](https://developer.mozilla.org/uk/docs/Web/API/Window/alert)