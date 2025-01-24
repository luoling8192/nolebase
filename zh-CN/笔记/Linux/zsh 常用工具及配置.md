---
title: zsh 常用工具及配置
date:  2024-07-11 22:12:29
tags:
    - zsh
---

# zsh 常用工具及配置

## zim:fw

比 oh-my-zsh 快，并且自带了诸如 auto-completion、syntax highlighting 等插件。
[https://github.com/zimfw/fzf](https://github.com/zimfw/fzf)

```bash
curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh
```

### fzf-tab

自动补全插件，可以补全命令、参数、路径等。
[https://github.com/Aloxaf/fzf-tab](https://github.com/Aloxaf/fzf-tab)

```bash
echo "zmodule Aloxaf/fzf-tab" >> ~/.zimrc
zimfw install
```

### p10k

zsh 主题，可以自定义配色、提示符、命令提示符等。
[https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)

```bash
echo "zmodule romkatv/powerlevel10k --use degit" >> ~/.zimrc
zimfw install
```

## zshrc

把下面内容加入到 `~/.zshrc` 文件中。

```bash
alias vim=nvim        # 需要安装 neovim
alias ls=eza          # 改用 eza、exa 代替 ls
alias ll="eza -lah"
alias sudo="sudo "
#alias ip="ip -c"     # macOS 用户注释掉这行

# Git
alias gcl="git clone"
alias ga="git add"
alias gaa="git add -A"
alias gcm="git commit -m"
alias gcma="git commit -m -a"
alias gp="git push"
alias gpl="git pull --rebase"
alias main="git switch main"
```

## Notice

以上操作完了直接重启 shell 就可以啦～
