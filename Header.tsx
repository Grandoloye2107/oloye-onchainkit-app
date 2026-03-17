// Header component with wallet connect
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Oloye App</h1>
    </header>
  );
}
```
Save:
```
git add . && git commit -m "style: design header layout with wallet connect" && git push
```

Commit 13 — open `Header.tsx`, add `// responsive mobile layout` at the top. Save:
```
git add . && git commit -m "style: add responsive mobile layout for header" && git push
```

Commit 14 — create `CONTRIBUTING.md` in root:
```
# Contributing

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a pull request
```