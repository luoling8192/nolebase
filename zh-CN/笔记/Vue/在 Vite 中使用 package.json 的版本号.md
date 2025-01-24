---
title: 在 Vite 中使用 package.json 的版本号
date: 2024-08-06 16:38:16
tags:
  - Vite
---

# 在 Vite 中使用 package.json 的版本号

## 方法

可以在 constant.ts 中直接 `import package.json` 并使用其中的版本号：

```javascript
import pkg from '../package.json';

const version = pkg.version;
console.log(version); // 1.0.0
```
