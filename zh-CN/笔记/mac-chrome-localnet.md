---
title: Mac 电脑访问网页提示 ERR_ADDRESS_UNREACHABLE
date: 2024-12-04 21:27:52
tags:
    - mac
    - chrome
    - 转载
---

## 问题描述

可以访问互联网，Chrome 浏览器访问同网段的其他设备提示 ERR_ADDRESS_UNREACHABLE

Safari可以访问，Chrome 浏览器不能访问。

尝试过多种方式，如重置本地网络，刷新DNS缓存，切换DNS服务器，重置Chrome设置等，均无效。

通过 Wireshark 抓包发现 Chrome 访问内网设备直接都没流量出去。

## 解决方法

最后发现：需要在设置中打开本地网络访问权限。

## 文章来源

转载自：[Mac 电脑访问网页提示 ERR_ADDRESS_UNREACHABLE](https://blog.csdn.net/SL003/article/details/143151802)
