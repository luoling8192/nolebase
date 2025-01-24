---
title: 解决 Tansack Vue Table 数据更新不触发视图更新的问题
date: 2024-07-29 01:37:00
tags:
    - Vue
    - Tansack Table
    - 踩坑
---

## 原因解释

由于 Tansack Table 的监听是针对引用的监听，所以 `data.push()` 等操作不会触发视图更新。

## 解决方法：

```javascript
const data = computed(() => [...props.data])
```
