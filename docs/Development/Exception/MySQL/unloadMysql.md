---
text: Mac完全卸载 MySQL
lang: zh-CN
meta:
  - name: description
    content: MySQL卸载
  - name: keywords
    content: Mac完全卸载 MySQL
---

# 在Mac OS X上怎么彻底卸载mysql

***使用Mac在后台服务开发程序猿一定想过Mac如何彻底卸载MySQL，那么久让我来告诉你们把，不对的地方请大家多多指教***

## 其实很简单的几条命令就搞定了

* sudo rm /usr/local/mysql
* sudo rm -rf /usr/local/mysql*
* sudo rm -rf /Library/StartupItems/MySQLCOM
* sudo rm -rf /Library/PreferencePanes/My*
* edit /etc/hostconfig and remove the line MYSQLCOM=-YES-
* rm -rf ~/Library/PreferencePanes/My*
* sudo rm -rf /Library/Receipts/mysql*
* sudo rm -rf /Library/Receipts/MySQL*
* sudo rm -rf /private/var/db/receipts/mysql

ps:
>如果你不是默认路径安装的或者忘记了是不是默认路径安装的，那么除了执行上面的命令之外，还要检查以下文件中是否有对应的文件，有的话删除即可。 


* 检查/usr/local/Cellar目录是否有mysql文件，有的话删除。
* 检查/usr/local/var 里的mysql文件，有的话删除。
* 检查/tmp 里的mysql.sock、mysql.sock.lock、 my.cnf文件，有的话删除。
* err文件以及pid文件都是在/usr/local/var/mysql中，有的话删除。
* brew安装的安装包存储在/usr/local/Library/Cache/Homebrew，有的话删除。
* 一定要记得执行brew cleanup。


**搞定收工！！！**