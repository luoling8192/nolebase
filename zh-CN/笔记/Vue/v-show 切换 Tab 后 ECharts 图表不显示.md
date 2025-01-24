---
title: v-show 切换 Tab 后 ECharts 图表不显示
date: 2024-07-27 11:32:00
tags:
    - Vue
    - ECharts
    - Nuxt
    - 踩坑
---

# v-show 切换 Tab 后 ECharts 图表不显示

## 解决方法

当 EChart 提示 height 为 0 时，加入 `:autoresize="true"` 即可解决。

```html
<VChart :option="option" :autoresize="true" />
```
