# 🌿 Git-Flow для курсу

## 1) Основний варіант (форк + PR у свій форк)
```mermaid
flowchart LR
  subgraph Upstream["Upstream (викладач)"]
    Umain[(main)]
    Usolutions[(solutions)]
  end

  subgraph Origin["Твій Fork (origin)"]
    Smain[(main)]
    Shw["hw/WXX-yourname"]
  end

  Umain -- fork --> Smain
  Smain --> Shw
  Shw -->|PR| PRo[PR → origin:main]
  PRo --> Smain
  Smain -- fetch/merge --> Umain
```

### Кроки
1. Fork → clone свій форк.
2. Відгалужись: `git checkout -b hw/W07-yourname`.
3. Працюй у `modules/.../W07/`.
4. `git push` і створи **PR у свій форк** (або classroom-репо).
5. Після ревʼю — merge PR у свій `main`.

## 2) Вигрузка оновлень викладача у свій форк
```mermaid
flowchart TB
    START([Початок: синхронізація форку])

    FETCH[git fetch upstream]
    CHECKOUT[git checkout main]
    MERGE[git merge upstream/main]

    DECISION{Є конфлікти?}
    FIX[Вирішити конфлікти]
    PUSH[git push origin main]
    END([Кінець: main оновлена])

    START --> FETCH --> CHECKOUT --> MERGE --> DECISION
    DECISION -- Так --> FIX --> PUSH --> END
    DECISION -- Ні --> PUSH --> END
```

## Корисні команди (шпаргалка)
```bash
# додати upstream один раз
git remote add upstream https://github.com/<teacher>/<repo>.git

# створити гілку для Д/з
git checkout -b hw/W07-yourname

# коміт+пуш
git add . && git commit -m "W07: done" && git push -u origin hw/W07-yourname

# оновити свій main з upstream
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

## Позначення гілок
- `main` — матеріали курсу.
- `solutions` — референс рішення (викладач/приватно).
- `hw/WXX-*` — гілки студентів для домашніх.
- `checkpoint/WXX-*`, `exam/*` — контрольні/екзамен.
