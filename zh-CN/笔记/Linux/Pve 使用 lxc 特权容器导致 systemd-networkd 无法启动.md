---
title: Pve 使用 lxc 特权容器导致 systemd-networkd 无法启动
date: 2024-12-04 21:26:02
tags:
    - pve
    - lxc
---

# Pve 使用 lxc 特权容器导致 systemd-networkd 无法启动

## 解决方法

开启 nesting 功能

## 参考资料

[systemd "Failed to set up mount namespacing" · Issue #4127 · lxc/lxc](https://github.com/lxc/lxc/issues/4127)
