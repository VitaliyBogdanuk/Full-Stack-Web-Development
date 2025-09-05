# 🏗️ Архітектура навчальних проєктів (Mermaid)

## 1) Front-end (HTML/CSS/JS, без фреймворків)
```mermaid
flowchart TB
  B[Браузер] --> H[HTML шаблони]
  B --> C[CSS стилі]
  B --> J[JS логіка: DOM / Events / fetch]
  J --> LS[(localStorage)]
  J --> API[(HTTP fetch до API)]

  subgraph Assets
    direction TB
    IMG[Зображення]
    FONTS[Шрифти]
  end

  H -- посилається на --> IMG
  H -- підключає --> FONTS
```

## 2) Backend на Node.js (без фреймворків)
```mermaid
flowchart LR
  Client[Клієнт: браузер / CLI] -->|HTTP| N[Node.js HTTP Server]

  subgraph Node.js
    N --> R[Router]

    subgraph Controllers
      C1[Controller]
    end

    subgraph Services
      S1[Service]
      S1 --> FS[fs / path - файли]
      S1 --> LOG[Логування та Помилки]
    end

    R --> C1
    C1 --> S1
  end
```

## 3) Full‑Stack інтеграція (JWT, БД, Uploads)
```mermaid
flowchart LR
  B[Браузер: HTML / CSS / JS] -->|fetch| N[Nginx / Reverse Proxy]
  N --> A[Node.js API: Auth, REST]
  A -->|JWT в Authorization| AUTH[(Auth Service)]
  A -->|CRUD| DB[(PostgreSQL / MongoDB)]
  A -->|Uploads| STORE[(Файлова система / S3)]
  A --> LOG[Логи / Моніторинг]

  B <-- статичні файли --> N
```

## 4) Деплой (VPS + Nginx + Node)
```mermaid
flowchart TB
  Dev[Розробник] -->|git push| GitHub[GitHub Repo]
  GitHub -->|Actions: build/tests| Artifacts[Артефакти/Pages]
  Dev -->|ssh| VPS[VPS/Server]
  subgraph VPS
    NGINX[Nginx Reverse Proxy]
    NODE[Node.js App]
  end
  NGINX <--> NODE
  Users[Користувачі] -->|HTTPS :443| NGINX
```
