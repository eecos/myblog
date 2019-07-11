---
text: Mac完全卸载 MySQL
lang: zh-CN
meta:
  - name: description
    content: MySQL卸载
  - name: keywords
    content: MySQL
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

**搞定收工！！！**