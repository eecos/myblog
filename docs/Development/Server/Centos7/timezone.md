---
text: 服务器时区和JAVA进程时区不一致问题解决
lang: zh-CN
meta:
  - name: description
    content: 服务器时区和JAVA进程时区不一致问题解决
  - name: keywords
    content: timezone
---
# <center> 服务器时区和JAVA进程时区不一致问题解决</center>

***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本人在开发国际化项目时，遇到多项目多平台时区的问题，解决思路大概为将服务器操作系统，数据库，项目默认进程时区都统一为世界协调时区，即UTC(Universal Time/Temps Cordonné 世界标准时间)，然后各个平台获取服务器同一时区，展示时根据机子本地时区做转换，起到数据统一传递，多平台多时区统一展示的效果。</br>具体操作如下：***

##  查看当然操作系统的时区
* 命令如下：
```
[root@localhost ~]# date
Fri Jun 28 10:34:48 CST 2019

```
#### 通过查询相关资料：
* GMT(Greenwich Mean Time，格林威治标准时间): 是指位于英国伦敦郊区的皇家格林尼治天文台的标准时间，因为本初子午线被定义在通过那里的经线。

* UTC(Universal Time/Temps Cordonné 世界标准时间)

* CST可以为如下4个不同的时区的缩写：美国、澳大利亚、古巴或中国的标准时间

  * 美国中部时间：Central Standard Time (USA) UT-6:00
  * 澳大利亚中部时间：Central Standard Time (Australia) UT+9:30
  * 中国标准时间：China Standard Time UT+8:00
  * 古巴标准时间：Cuba Standard Time UT-4:00

***可先查看是否先开启UTC，方法就是在/etc/sysconfig/clock的文件里修改这样一处：UTC=true。这样即使机器重启，UTC时间依旧会“BIOS ▶ UTC时区转换 ▶ 系统时间”的顺序正常使用。(本人的操作系统中暂无该文件，所以我就直接滤过)***

## 修改操作系统时区为UTC

#### 在Centos 6.5里，各时区的时间是在一个叫/usr/share/zoneinfo/的文件夹下，在里面我们发现了我们的目标----UTC，如图：
![UTC](https://s1.51cto.com/images/blog/201801/25/2b0fb7db39cb192317fb5451ce3847cf.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=)

* 修改时区命令：
```
[root@localhost /]#     mv /etc/localtime /etc/localtime-bak
[root@localhost /]#     ln -s /usr/share/zoneinfo/UTC /etc/localtime

```
##### 先把老的时间文件备份，然后把UTC文件做一个软连接过来即可。我们所熟悉的date命令就是/etc/localtime的输出结果。

现在去date一下，看看结果，果然改成了UTC：
```
[root@localhost zoneinfo]# date
Fri Jun 28 03:05:01 UTC 2019
```

## 设置MySQL默认时区为UTC
### 查看当前MySQL时区

* 命令如下:
```
 show variables like "%time_zone%";
 +------------------+--------+
| Variable_name    | Value  |
+------------------+--------+
| system_time_zone | CST    |
| time_zone        | +08:00 |
+------------------+--------+
2 rows in set (0.00 sec)

```

![时区](http://psx66r0l1.bkt.clouddn.com/mysql-time-zone.png)


### 当前会话修改时区
```
mysql>SET time_zone = ‘+0:00’;
mysql> show variables like "%time_zone%";
+------------------+--------+
| Variable_name    | Value  |
+------------------+--------+
| system_time_zone | CST    |
| time_zone        | +00:00 |
+------------------+--------+
2 rows in set (0.00 sec)


mysql> select now();
+---------------------+
| now()               |
+---------------------+
| 2019-06-28 03:28:27 |
+---------------------+
1 row in set (0.00 sec)


```
**此修改只对当前会话有效，退出会话后，修改失效。**


## 配置文件my.cnf修改时区
### 永久解决方案

* 命令：
```
[root@localhost zoneinfo]# vim /etc/my.cnf

[mysqld]
lower_case_table_names=1
#skip-grant-tables
default-time_zone='+08:00'
datadir=/data/mysql
socket=/var/lib/mysql/mysql.sock
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0
# Settings user and group are ignored when systemd is used.
# If you need to run mysqld under a different user or group,
# customize your systemd unit file for mariadb according to the
# instructions in http://fedoraproject.org/wiki/Systemd
bind-address=0.0.0.0
#设置数据库编码方式
character-set-server=utf8
init_connect='SET NAMES utf8'

[mysqld_safe]
log-error=/var/log/mariadb/mariadb.log
pid-file=/var/run/mariadb/mariadb.pid
#关闭密码严格校验#
#validate-password=off
#
# include all files from the config directory
#
!includedir /etc/my.cnf.d

```
修改为：
```
default-time_zone='+0:00'
```
重启MySQL服务
```
[root@localhost etc]# service mysqld restart
Redirecting to /bin/systemctl restart mysqld.service
```
再次进入到MySQL命令行，检查当前时间
```
[root@localhost /]# mysql -uroot -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 19
Server version: 5.7.25 MySQL Community Server (GPL)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> select now();
+---------------------+
| now()               |
+---------------------+
| 2019-06-28 03:55:02 |
+---------------------+
1 row in set (0.00 sec)

mysql> 

mysql> show variables like "%time_zone%";
+------------------+--------+
| Variable_name    | Value  |
+------------------+--------+
| system_time_zone | UTC    |
| time_zone        | +00:00 |
+------------------+--------+
2 rows in set (0.00 sec)

```
到这个为止，MySQL已经切换到UTC时区了。


## 将springboot项目设置默认时区为UTC（包含进程时区）

### 在springboot启动类中，添加默认时区的设置     
```
@PostConstruct
    void started() {
        TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
    }
```
，完成代码如图所示：
![完整](http://psx66r0l1.bkt.clouddn.com/springboot-start.png)


### 在连接数据库地址中加入`&serverTimezone=UTC&useLegacyDatetimeCode=false`时区设置


### 在application.yml中加入如下配置
```
spring:
  jackson:
    time-zone:UTC
    date-format:yyyy-MM-dd HH:mm:ss
```

接下来就可以进行重新部署切换了！！！！

建议将项目中所用的data类型转换成DateTime类型进行保存到数据库中去。
