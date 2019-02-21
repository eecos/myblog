---
text: Git命令
lang: zh-CN
sidebar: ture
meta:
  - name: description
    content: Git命令
  - name: keywords
    content: Git命令
---

# Git 命令行管理代码

## Git 步骤

- #### 查看 Git 项目文件的状态

```git
$ git status
```

> _Untracked file_ 表示未追踪的文件
>
> _Changes not staged for commit_ 表示内容改变需要 git add 加到暂存区

- #### 工作区 > 暂存区

```git
$ git add <filename> / git add .

$ git reset HEAD <filename>
-撤销添加到暂存区
```

- #### 暂存区 > 当前分支(版本库)

```git
$ git commit -m "commit message"

$ git checkout --<filename>
-撤销文件在工作区的全部修改:
-1.修改后还没有被放到暂存区，撤销修改后回到版本库状态；
-2.已经添加到暂存区又作了修改，撤销修改后回到添加到暂存区后的状态。
```

- #### 推送到远程分支、冲突解决

```git
$ git push [remote-name] [branch-name]
```

- #### 冲突解决

```git
$ git pull --rebase
-保留冲突从远程仓库拉取最新的代码
```

> 1.  若是提示信息里没有提示冲突的文件,则继续 git push
>
> 2.  若是提示冲突文件,在每个冲突文件中删除“HEAD ----->>>>”等冗余字符保留需要的代码确认无误后,执行以下代码：
>
> `$ git add .`
>
> `$ git rebase --continue`
>
> `$ git push`
>
> 3.  还有个情况,会删除冲突文件,可以退出 rebasing,再 git pull 拉取代码进行 merge 操作
>
> `$ git rebase --abort`

- #### 代码储存

```git
$ git stash
-储存在刚提交的分支上(未追踪的文件不会被储存)

$ git stash apply
-恢复最新的进度到工作区

$ git stash list
-显示保存进度的列表

$ git stash apply [stash_id]
-恢复指定的进度到工作区
```

> 1.  git pull 时若是还有未提交的改变,会提示错误：
>
> _error: cannot pull with rebase: Your index contains uncommitted changes._
>
> _error: please commit or stash them._
>
> 2.  若有一些不需要传到版本库的文件，可以在 commit 之后，用 stash 命令储存改变，待传完后释放。

## 其他命令

- #### 显示所有提交过的版本信息
  > 利用这个版本记录，可以回退到我们之前提交的任何一次提交过的版本

```git
$ git log
```

- #### 查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）

```git
$ git reflog
```

- #### 回退到任意一次记录

```git
$ git reset --hard [log_id]
```

- #### 查看版本改动

  - 工作区 - 暂存区

    ```git
    $ git diff
    ```

    > 1.  当暂存区中没有文件时，git diff 比较的是，工作区中的文件与上次提交到版本库中的文件。
    >
    > 2.  当暂存区中有文件时，git diff 则比较的是，当前工作区中的文件与暂存区中的文件。

  - 暂存区 - 版本库

    ```git
    $ git diff --cached
    ```

  - 工作区 - 版本库

    ```git
    $ git diff HEAD --<filename>
    ```

- #### 大小写重命名

```git
$ git mv -f <oldfilename> <newfilename>
```

> 大小写修改识别不出，需要先修改成其他名字再改回来
