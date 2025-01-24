---
title: Windows 自然滚动 Powershell 脚本
date: 2024-08-17 20:00:35
tags:
  - Windows
  - Powershell
---

## 起因

经常用 macOS 的用户都知道，鼠标的滚动方向和触控板的滚动方向是一致的，即为自然滚动，但是在 Windows 上，没有一个很好的方法可以快速调节滚动方向到自然滚动。

网上有很多教程教如何使用注册表来修改鼠标的滚动方向，本文不再赘述。

<!-- more -->

## 解决方案

现在提供一个 Powershell 脚本，可以快速设置 Windows 系统的滚动方向到自然滚动。

注意，请使用 Powershell 7 或以上版本，并在管理员模式下运行。

```powershell
# 检查当前用户是否具有管理员权限
if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "请以管理员身份运行此脚本。"
    exit
}

# 注册表路径
$regPath = "HKLM:\SYSTEM\CurrentControlSet\Enum\HID"

# 获取所有以 VID_ 开头的设备
$devices = Get-ChildItem -Path $regPath | Where-Object { $_.PSChildName -like "VID_*" }

foreach ($device in $devices) {
    $deviceParamsPath = "$($device.PSPath)\**\Device Parameters"
    
    # 检查 Device Parameters 是否存在
    if (Test-Path $deviceParamsPath) {
        # 设置 FlipFlopWheel 值为 1
        Set-ItemProperty -Path $deviceParamsPath -Name "FlipFlopWheel" -Value 1 -Type DWord
        Write-Host "已将 $($device.PSChildName) 的滚动方向设置为自然滚动。"
    }
}

Write-Host "所有设备的滚动方向已更新，请重新插拔设备以使更改生效。"
```

如果能帮到你，请帮我点个 Star 吧！

下面是 Gist 地址：[https://gist.github.com/luoling8192/294c88e0aaa299d259b0af19d3ad86ff](https://gist.github.com/luoling8192/294c88e0aaa299d259b0af19d3ad86ff)
