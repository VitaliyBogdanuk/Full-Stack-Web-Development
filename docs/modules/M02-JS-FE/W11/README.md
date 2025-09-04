**Week 11**.

---

# 🖥 Week 11: DOM: вибір елементів, стилі

---

## 🧑‍🏫 Лекція (1,5 години)

### Вступ (10 хв)

1. До цього ми працювали з даними **всередині JS** (масиви, об’єкти, функції).
2. Але головна сила JS — це можливість керувати **HTML-сторінкою напряму**.
3. Для цього існує **DOM (Document Object Model)**.
4. Сьогодні:

   * Як знайти елемент на сторінці.
   * Як змінити його вміст і стилі.
   * Як зробити сторінку “живою”.

---

### 1. Що таке DOM (15 хв)

* DOM = структура HTML як дерево.
* Кожен тег = вузол дерева.
* JS може **змінювати, додавати, видаляти** елементи.

📌 Приклад:

```html
<h1 id="title">Привіт!</h1>
```

```js
let title = document.getElementById("title");
console.log(title.textContent); // Привіт!
```

---

### 2. Вибір елементів (20 хв)

Основні методи:

```js
document.getElementById("id");  
document.getElementsByClassName("class");  
document.getElementsByTagName("tag");  
document.querySelector("css-селектор");  
document.querySelectorAll("css-селектор");  
```

📌 Приклад:

```html
<p class="text">Один</p>
<p class="text">Два</p>
```

```js
let items = document.querySelectorAll(".text");
console.log(items[0].textContent); // Один
console.log(items[1].textContent); // Два
```

---

### 3. Зміна тексту і HTML (20 хв)

```js
let title = document.getElementById("title");
title.textContent = "Новий заголовок";  
title.innerHTML = "<span style='color:red'>Червоний</span>";  
```

📌 Різниця:

* `textContent` — змінює тільки текст.
* `innerHTML` — дозволяє вставляти HTML-код.

---

### 4. Зміна стилів (20 хв)

```js
let box = document.getElementById("box");
box.style.color = "white";
box.style.background = "blue";
box.style.padding = "20px";
```

📌 Додавання/видалення класів:

```js
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("dark-theme");
```

---

### Узагальнення (15 хв)

* DOM = міст між HTML і JS.
* Можна шукати елементи і змінювати їх.
* Через DOM можна змінювати **текст, стилі, атрибути**.

📌 Контрольні питання:

1. Чим відрізняється `textContent` від `innerHTML`?
2. Як знайти всі елементи з класом `item`?
3. Як змінити колір фону елемента через JS?

---

## 🛠 Практика (1,5 години)

### Завдання: динамічна зміна тексту на сторінці

---

📌 **Крок 1. Підготовка (10 хв)**
У папці `week11` створіть `index.html`:

```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>DOM практика</title>
  <style>
    #text {
      font-size: 24px;
      color: black;
    }
  </style>
</head>
<body>
  <h1 id="text">Початковий текст</h1>
  <button id="btn">Змінити текст</button>

  <script src="script.js"></script>
</body>
</html>
```

---

📌 **Крок 2. Зміна тексту (20 хв)**
У `script.js`:

```js
let btn = document.getElementById("btn");
let text = document.getElementById("text");

btn.addEventListener("click", function() {
  text.textContent = "Текст змінився!";
});
```

---

📌 **Крок 3. Додавання стилів (20 хв)**

```js
btn.addEventListener("click", function() {
  text.textContent = "Текст став червоним!";
  text.style.color = "red";
});
```

---

📌 **Крок 4. Використання toggle (20 хв)**
У `style`:

```css
.dark {
  color: white;
  background: black;
}
```

У `script.js`:

```js
btn.addEventListener("click", function() {
  text.classList.toggle("dark");
});
```

---

📌 **Крок 5. Фінальна перевірка (20 хв)**

* Чи змінюється текст при кліку?
* Чи змінюється колір?
* Чи працює toggle-клас?

---

## 🏠 Домашнє завдання

**Кнопка «Змінити тему».**

1. Додати кнопку “Змінити тему” на сторінку.
2. При натисканні має змінюватися стиль сайту (світла/темна тема).

   * Світла тема: чорний текст на білому фоні.
   * Темна тема: білий текст на чорному фоні.
3. Використати `classList.toggle()`.

📌 Очікуваний результат: при кожному кліку перемикається тема сайту.

---

## 📎 Матеріали/Нотатки

* [MDN: Вступ до DOM](https://developer.mozilla.org/uk/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
* [MDN: querySelector](https://developer.mozilla.org/uk/docs/Web/API/Document/querySelector)
* [MDN: classList](https://developer.mozilla.org/uk/docs/Web/API/Element/classList)
* [JavaScript.info: DOM](https://uk.javascript.info/dom-nodes)