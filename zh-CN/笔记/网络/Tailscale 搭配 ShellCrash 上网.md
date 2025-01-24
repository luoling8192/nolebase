---
title: Tailscale 搭配 ShellCrash 上网
date: 2024-12-17 19:42:20
tags:
  - 网络
---

# Tailscale 搭配 ShellCrash 上网

## 背景
已经在软路由上配置好了 tailscale 之后，发现虽然其他设备可以连接到软路由，但是不能科学上网。

## 解决方法
进入 shellcrash 设置后，选择【7 内核进阶设置】-> 【3 配置公网及局域网防火墙】 -> 【3 自定义透明路由ipv4网段】-> 输入 100.0.0.0/8，保存并重启内核即可。

![[CleanShot 2024-12-17 at 20.49.01@2x.png]]
