---
text: gogs安装教程
lang: zh-CN
meta:
  - name: description
    content: gogs安装教程
  - name: keywords
    content: gogs安装教程
---
# gogs安装

## 环境要求


- 数据库（选择以下一项）：
    - [MySQL](http://dev.mysql.com)：版本 >= 5.7
    - [PostgreSQL](http://www.postgresql.org/)
    - [MSSQL](https://en.wikipedia.org/wiki/Microsoft_SQL_Server)
    - [TiDB](https://github.com/pingcap/tidb)（实验性支持，使用 MySQL 协议连接）
    - 或者 **什么都不安装** 直接使用 SQLite3
- [git](http://git-scm.com/)（bash）：
    - 服务端和客户端均需版本 >= 1.7.1
    - Windows 系统建议使用最新版
- SSH 服务器：
    - **如果您只使用 HTTP/HTTPS 的话请忽略此项**
    - 如果您选择在 Windows 系统使用内置 SSH 服务器，请确保添加 `ssh-keygen` 到您的 `%PATH%` 环境变量中
    - 推荐 Windows 系统使用 [Cygwin OpenSSH](http://docs.oracle.com/cd/E24628_01/install.121/e22624/preinstall_req_cygwin_ssh.htm) 或 [Copssh](https://www.itefix.net/copssh)


## 数据库安装
请根据您的选择进行安装：
- [MySQL](http://dev.mysql.com/downloads/mysql/)（引擎：INNODB）
- [PostgreSQL](http://www.postgresql.org/download/)
**注意事项** 您可以使用 `etc/mysql.sql` 来自动创建名为 `gogs` 的数据库。如果您选择手动创建，请务必将编码设置为 `utf8mb4`。

###  这里以安装MySQL5.7为例

### 1.下载tar包，这里使用wget从官网下载
::: tip 下载命令
wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz
:::

### 2.将mysql安装到/usr/local/mysql下
::: tip 解压
tar -xvf mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz
:::

::: tip 移动
mv mysql-5.7.22-linux-glibc2.12-x86_64 /usr/local/
:::

::: tip 重命名
mv /usr/local/mysql-5.7.22-linux-glibc2.12-x86_64 /usr/local/mysql
:::

### 3.新建data目录
::: tip 命令
mkdir /usr/local/mysql/data
:::

### 4.新建mysql用户、mysql用户组
::: tip mysql用户组
groupadd mysql
:::

::: tip mysql用户
useradd mysql -g mysql
:::

### 5.cd 到/usr/local/mysql的所有者及所属组改为mysql
::: tip 赋权命令
chown -R mysql.mysql /usr/local/mysql
:::

### 6.配置
::: tip 命令
/usr/local/mysql/bin/mysql_install_db --user=mysql --basedir=/usr/local/mysql/ --datadir=/usr/local/mysql/data
:::

- 如果出现以下错误
``` text
2018-07-14 06:40:32 [WARNING] mysql_install_db is deprecated. Please consider switching to mysqld --initialize
2018-07-14 06:40:32 [ERROR]   Child process: /usr/local/mysql/bin/mysqldterminated prematurely with errno= 32
2018-07-14 06:40:32 [ERROR]   Failed to execute /usr/local/mysql/bin/mysqld --bootstrap --datadir=/usr/local/mysql/data --lc-messages-dir=/usr/local/mysql/share --lc-messages=en_US --basedir=/usr/local/mysql
-- server log begin --

-- server log end --
```

- 则使用以下命令
::: warning 解决命令
/usr/local/mysql/bin/mysqld --user=mysql --basedir=/usr/local/mysql/ --datadir=/usr/local/mysql/data --initialize
:::

- 如果出现以下错误
``` text
/usr/local/mysql/bin/mysqld: error while loading shared libraries: libnuma.so.1: cannot open shared object file: No such file or directory
```

- 则执行以下命令
::: warning 解决命令
yum -y install numactl
:::

::: tip 完成后继续安装
/usr/local/mysql/bin/mysqld --user=mysql --basedir=/usr/local/mysql/ --datadir=/usr/local/mysql/data --initialize
:::

- 编辑/etc/my.cnf
``` js
[mysqld]
datadir=/usr/local/mysql/data
basedir=/usr/local/mysql
socket=/tmp/mysql.sock
user=mysql
port=3306
character-set-server=utf8
# 取消密码验证
skip-grant-tables
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0
# skip-grant-tables
[mysqld_safe]
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
```
### 7.开启服务
::: tip 将mysql加入服务
cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysql
:::

::: tip 开机自启
chkconfig mysql on
:::

::: tip 开启
service mysql start
:::

### 8.设置密码
::: tip 登录（由于/etc/my.cnf中设置了取消密码验证，所以此处密码任意）
/usr/local/mysql/bin/mysql -u root -p
:::

::: tip 操作mysql数据库
use mysql;
::: 

::: tip 修改密码
update user set authentication_string=password('你的密码') where user='root';
flush privileges;
exit
::: 


### 9.将/etc/my.cnf中的skip-grant-tables删除

### 10.登录再次设置密码（不知道为啥如果不再次设置密码就操作不了数据库了）
::: tip 命令
/usr/local/mysql/bin/mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED BY '修改后的密码';
exit;
::: 

### 11.允许远程连接
::: tip 命令
/usr/local/mysql/bin/mysql -u root -p
use mysql;
update user set host='%' where user = 'root';
flush privileges;
eixt;
:::

### 12.添加快捷方式
::: tip 命令
ln -s /usr/local/mysql/bin/mysql /usr/bin
:::


## 安装其它要求

### Mac OS X

假设您已经安装 [Homebrew](http://brew.sh/)：

```sh
$ brew update
$ brew install git
```

### Debian/Ubuntu

```sh
$ sudo apt-get update
$ sudo apt-get install git
```

### Windows

[下载并安装 Git](http://git-scm.com/downloads)

## 安装 Gogs

- [二进制安装](http://gogs.io/docs/installation/install_from_binary.html)
- [源码安装](http://gogs.io/docs/installation/install_from_source.html)