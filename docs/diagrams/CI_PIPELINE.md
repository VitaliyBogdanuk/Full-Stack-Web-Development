# ⚙️ CI/CD Pipeline у цьому курсі

```mermaid
flowchart TB
  A[Push / PR до main] --> ML[Markdownlint]
  A --> LC[Link Checker (lychee)]
  A --> Lint[ESLint/Prettier]
  A --> Tests[Node tests (vitest/jest)]
  ML & LC & Lint & Tests --> Ok{Усі перевірки пройдені?}
  Ok -- так --> Pages[Deploy GitHub Pages (docs/)]
  Ok -- ні --> Fix[Виправ помилки та зроби push]
```

### Як це впливає на Д/з
- Якщо в папці з рішенням є `package.json` і тести — **CI запустить їх автоматично**.
- Пройти **Markdownlint/ESLint/Prettier** — обовʼязково для "зеленого" PR.
- GitHub Pages деплоїть `docs/` після успішних перевірок.

<!-- Mermaid JS -->
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script>
  // автоініціалізація для ```mermaid``` та <div class="mermaid">...</div>
  mermaid.initialize({
    startOnLoad: true,
    securityLevel: 'loose',   // дозволяє посилання в діаграмах
    theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'default'
  });
</script>
