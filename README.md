# 💳 (Monorepo) SDK Payment's

Client browser sdk developed to use in browser.
Developed to study new technologies.

## 💻 Technologies

* TRPC
* Prisma
* PlanetScale
* React
* React Query
* React Hook Forms

## 📜 Documentation

### How to use

```typescript
import AppSdk from "./src/main";

AppSdk.render({
    element: 'root',
});
```

### Events

```typescript
import AppSdk from "./src/main";

AppSdk.render({
    element: 'root',
});

AppSdk.on('EVENT_NAME', event => {
    // Code here
})
```

| Event  | Arguments     | Description |
|--------|---------------|-------------|
| teste1 | value: string | Teste       |
| teste2 |               | Teste       |

### Render properties

| Property | Type                 | Description            |
|----------|----------------------|------------------------|
| element  | string / HTMLElement | Element for render SKD |

## 🚀 Next steps
- [x] Render SDK in DOM
- [ ] Add design System 
- [ ] Create form to cards 
- [ ] Simulate a order payment 
- [ ] List all cards from user 
- [ ] Security 

