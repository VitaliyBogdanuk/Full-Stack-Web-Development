# 🖥 Week 05: HTML форми, таблиці, списки

---

## 🧑‍🏫 Лекція (1,5 години)

### Вступ (10 хв)

1. Минулого разу ми вчилися створювати макети за допомогою box model і flexbox.
2. Сьогоднішня тема — **форми, таблиці та списки**.
3. Чому це важливо:

   * Списки потрібні для меню, переліків, навігації.
   * Таблиці потрібні для структурованих даних (розклад, прайси).
   * Форми потрібні, щоб користувач міг вводити дані (реєстрація, пошук, відгуки).

---

### 1. Списки в HTML (20 хв)

**Види списків:**

1. **Маркірований (ul)**

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

2. **Нумерований (ol)**

```html
<ol>
  <li>Перший</li>
  <li>Другий</li>
  <li>Третій</li>
</ol>
```

3. **Вкладені списки**

```html
<ul>
  <li>Фрукти
    <ul>
      <li>Яблуко</li>
      <li>Апельсин</li>
    </ul>
  </li>
</ul>
```

📝 Міні-вправа: створіть список своїх улюблених фільмів.

---

### 2. Таблиці (25 хв)

**Структура таблиці:**

```html
<table border="1">
  <tr>
    <th>Ім’я</th>
    <th>Вік</th>
  </tr>
  <tr>
    <td>Оля</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Іван</td>
    <td>22</td>
  </tr>
</table>
```

* `<table>` — таблиця.
* `<tr>` — рядок.
* `<th>` — заголовок колонки.
* `<td>` — комірка з даними.

📌 Можна об’єднувати клітинки атрибутами `colspan` і `rowspan`.

📝 Міні-вправа: створіть таблицю “Розклад уроків на тиждень”.

---

### 3. Форми (35 хв)

**Структура форми:**

```html
<form action="#" method="post">
  <label>Ім’я:
    <input type="text" name="name">
  </label><br><br>
  
  <label>Email:
    <input type="email" name="email">
  </label><br><br>

  <label>Пароль:
    <input type="password" name="password">
  </label><br><br>

  <label>Вік:
    <input type="number" name="age">
  </label><br><br>

  <input type="submit" value="Надіслати">
</form>
```

**Основні типи input:**

* `text`, `email`, `password`, `number`.
* `checkbox`, `radio`.
* `file`.
* `submit`, `reset`.

📌 Також є:

* `<textarea>` — багаторядкове поле.
* `<select>` + `<option>` — випадаючий список.

📝 Міні-вправа: створіть форму “Зворотній зв’язок” (ім’я, email, повідомлення, кнопка Надіслати).

---

### Узагальнення (10 хв)

* Списки = для меню і переліків.
* Таблиці = для даних у рядках і стовпчиках.
* Форми = для введення інформації користувачем.

📌 Контрольні питання:

1. Чим відрізняється `<ul>` від `<ol>`?
2. Для чого використовується тег `<th>`?
3. Які є основні типи `<input>`?

---

## 🛠 Практика (1,5 години)

### Завдання: створення HTML-форми з полями вводу

---

📌 **Крок 1. Підготовка (5 хв)**

1. Створіть папку `week05`.
2. Скопіюйте `index.html` з минулого тижня.
3. Додайте новий розділ `<section id="form">`.

---

📌 **Крок 2. Створюємо форму (30 хв)**
У `index.html`:

```html
<section id="form">
  <h2>Зворотній зв'язок</h2>
  <form action="#" method="post">
    <label>Ім’я:<br>
      <input type="text" name="name" required>
    </label><br><br>

    <label>Email:<br>
      <input type="email" name="email" required>
    </label><br><br>

    <label>Повідомлення:<br>
      <textarea name="message" rows="5"></textarea>
    </label><br><br>

    <input type="submit" value="Відправити">
  </form>
</section>
```

---

📌 **Крок 3. Додаємо таблицю (20 хв)**
Під формою вставте:

```html
<h2>Розклад занять</h2>
<table border="1">
  <tr>
    <th>День</th>
    <th>Предмет</th>
  </tr>
  <tr>
    <td>Понеділок</td>
    <td>HTML</td>
  </tr>
  <tr>
    <td>Середа</td>
    <td>CSS</td>
  </tr>
  <tr>
    <td>П’ятниця</td>
    <td>JavaScript</td>
  </tr>
</table>
```

---

📌 **Крок 4. Додаємо список (20 хв)**

```html
<h2>Мої хобі</h2>
<ul>
  <li>Читання</li>
  <li>Фотографія</li>
  <li>Подорожі</li>
</ul>
```

---

📌 **Крок 5. Перевірка (15 хв)**

1. Чи працює форма? (чи можна ввести текст?).
2. Чи відображається таблиця?
3. Чи є список?

---

## 🏠 Домашнє завдання

Створити **форму реєстрації користувача**:

* Поля: ім’я, email, пароль, підтвердження пароля, вік.
* Checkbox: “Приймаю умови”.
* Radio: “Стать” (чоловік/жінка).
* Кнопка “Зареєструватися”.

📌 Очікуваний результат: сторінка з правильною структурою форми, таблицею та списком.

---

## 📎 Матеріали/Нотатки

* [MDN: Списки в HTML](https://developer.mozilla.org/uk/docs/Learn/HTML/Introduction_to_HTML/Creating_lists)
* [MDN: Таблиці](https://developer.mozilla.org/uk/docs/Learn/HTML/Tables/Basics)
* [MDN: Форми](https://developer.mozilla.org/uk/docs/Learn/Forms)
* [MDN: Input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)