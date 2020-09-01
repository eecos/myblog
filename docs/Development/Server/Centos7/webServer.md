---
text: Web服务器基本搭建
lang: zh-CN
meta:
  - name: description
    content: Web服务器基本搭建
  - name: keywords
    content: MySQL、NGINX，JDK
---
# <center> Web服务器基本搭建</center>

[[实践篇]]

## Centos 服务建设

### 设置Centos账户root密码

```shell
输入：
sudo passwd root

[sudo] password for you: ---> 输入你的密码（你现在这个用户的密码）

Enter new UNIX password: ---> 设置root 密码

Retype new UNIX password: ---> 重复密码

```

---

### JDK

* **准备工作**

  #### [1.1官网下载jdk](https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html)

* **安装JDK**

  #### 2.1 解压

  ```shell
  tar -zxvf jdk-8u231-linux-x64.tar.gz -C /opt/jdk1.8.0_231
  ```

  #### 2.2 配置环境变量

  ```shell
  vim /etc/profile
  ```

  在文本的最后一行粘贴如下：

  ```shell
  #java environment
  export JAVA_HOME=/opt/jdk1.8.0_231 #解压目录
  export CLASSPATH=.:${JAVA_HOME}/jre/lib/rt.jar:${JAVA_HOME}/lib/dt.jar:${JAVA_HOME}/lib/tools.jar
  export PATH=$PATH:${JAVA_HOME}/bin
  ```

  生效

  ```shell
  source /etc/profile
  ```

* **测试JDK**

  ```shell
  java -version
  java version "1.8.0_231"
  Java(TM) SE Runtime Environment (build 1.8.0_231-b11)
  Java HotSpot(TM) 64-Bit Server VM (build 25.231-b11, mixed mode)
  ```

  ```shell
  javac
  
  Usage: javac <options> <source files>
  where possible options include:
    -g                         Generate all debugging info
    -g:none                    Generate no debugging info
    -g:{lines,vars,source}     Generate only some debugging info
    -nowarn                    Generate no warnings
    -verbose                   Output messages about what the compiler is doing
    -deprecation               Output source locations where deprecated APIs are used
    -classpath <path>          Specify where to find user class files and annotation processors
    -cp <path>                 Specify where to find user class files and annotation processors
    -sourcepath <path>         Specify where to find input source files
    -bootclasspath <path>      Override location of bootstrap class files
    -extdirs <dirs>            Override location of installed extensions
    -endorseddirs <dirs>       Override location of endorsed standards path
    -proc:{none,only}          Control whether annotation processing and/or compilation is done.
    -processor <class1>[,<class2>,<class3>...] Names of the annotation processors to run; bypasses default discovery process
    -processorpath <path>      Specify where to find annotation processors
    -parameters                Generate metadata for reflection on method parameters
    -d <directory>             Specify where to place generated class files
    -s <directory>             Specify where to place generated source files
    -h <directory>             Specify where to place generated native header files
    -implicit:{none,class}     Specify whether or not to generate class files for implicitly referenced files
    -encoding <encoding>       Specify character encoding used by source files
    -source <release>          Provide source compatibility with specified release
    -target <release>          Generate class files for specific VM version
    -profile <profile>         Check that API used is available in the specified profile
    -version                   Version information
    -help                      Print a synopsis of standard options
    -Akey[=value]              Options to pass to annotation processors
    -X                         Print a synopsis of nonstandard options
    -J<flag>                   Pass <flag> directly to the runtime system
    -Werror                    Terminate compilation if warnings occur
    @<filename>                Read options and filenames from file
  ```

  

---

### Maven



---

### Node

---

### Docker

---

### Docker Compose

---

### MySQL

* **准备工作**

  #### 1.1 下载

  **boost_1_59_0**

  ```shell
  wget http://downloads.sourceforge.net/project/boost/boost/1.59.0/boost_1_59_0.tar.gz
  ```

  **Mysql**

  ```shell
  wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.31.tar.gz 
  ```

  

  或者 去[官网下载](https://dev.mysql.com/downloads/mysql/5.7.html#downloads)，切记是下的源码包（Source Code）

  

  #### 1.2 解压对应软件（boost、mysql）

  ```shell
  #将文件解压至/opt/mysql目录下
  tar zxvf boost_1_59_0.tar.gz  -C /opt/apps_zip/boost_1_59_0
  tar zxvf mysql-5.7.31.tar.gz  -C /opt/apps_zip/mysql-5.7.31
  
  ```

  #### 1.3 **添加mysql用户**

  ```shell
  useradd -M -s /sbin/nologin mysql
  ```

  #### 1.4 建立所需目录并更改所有者为mysql

  ```shell
  mkdir -p /data/mysql/data
  chown -R mysql:mysql /data/mysql
  ```

  #### 1.5 安装依赖

  ```shell
  yum -y install gcc gcc-c++ ncurses ncurses-devel cmake
  ```

  

* **安装MySQL**

  #### 2.1 预编译

  ```shell
  cd /opt/apps_zip/mysql5.7.31
  
  cmake -DCMAKE_INSTALL_PREFIX=/opt/mysql5.7.31 \
  -DWITH_BOOST=/opt/boost_1_59_0 \
  -DMYSQL_UNIX_ADDR=/data/mysql/tmp/mysql.sock \
  -DMYSQL_DATADIR=/data/mysql \
  -DDEFAULT_CHARSET=utf8mb4 \
  -DDEFAULT_COLLATION=utf8mb4_general_ci \
  -DWITH_EXTRA_CHARSETS=all \
  -DWITH_MYISAM_STORAGE_ENGINE=1 \
  -DWITH_INNOBASE_STORAGE_ENGINE=1 \
  -DWITH_MEMORY_STORAGE_ENGINE=1 \
  -DWITH_READLINE=1 \
  -DWITH_INNODB_MEMCACHED=1 \
  -DWITH_DEBUG=OFF \
  -DWITH_ZLIB=bundled \
  -DENABLED_LOCAL_INFILE=1 \
  -DENABLED_PROFILING=ON \
  -DMYSQL_MAINTAINER_MODE=OFF \
  -DMYSQL_TCP_PORT=2116
  ```

  >说明
  >
  >-DMYSQL_DATADIR为data目录 (datadir)
  >
  >-DSYSCONFDIR=/opt/mysql \
  >
  >-DCMAKE_INSTALL_PREFIX= 安装根目录
  >
  >-DCMAKE_INSTALL_PREFIX= unix套接字目录
  >
  >-DDEFAULT_CHARSET= 默认字符集
  >
  >-DDEFAULT_COLLATION=默认编码
  >
  >-DWITH_EXTRA_CHARSETS= 额外的编码，请使用ALL来编译。
  >
  >-DWITH_MYISAM_STORAGE_ENGINE=1 编译myisam存储引擎，默认的存储引擎，不加也可以
  >
  >-DWITH_INNOBASE_STORAGE_ENGINE=1 支持InnoDB存储引擎，这个也是默认安装的
  >
  >-DWITH_READLINE=1 使用readline功能
  >
  >-DENABLED_LOCAL_INFILE=1 可以使用load data infile命令从本地导入文件
  >
  >-DMYSQL_DATADIR=数据库 数据目录
  >
  >-DWITH_PARTITION_STORAGE_ENGINE=1 安装支持数据库分区
  >
  >-DWITH_FEDERATED_STORAGE_ENGINE 如果是使用的源码，需要使用CMake 加上选项。
  >
  >-DEXTRA_CHARSETS 扩展字符支持
  >
  >-DWITH_EMBEDDED_SERVER嵌入式服务器
  >
  >-DDOWNLOAD_BOOST=1 \ 
  >
  >-DWITH_BOOST=/opt/boost_1_59_0 \ 其作用为使用本地boost库
  >
  >

  #### 2.2 编译安装

  ```shell
  make && make install
  ```

  #### 2.3 创建MySQL用户

  ```shell
  groupadd mysql
  
  useradd -s /sbin/nologin -M -g mysql mysql
  ```

  #### 2.4 修改MySQL配置

  配置内容如下：

  ```shell
  [client]
  port        = 2116
  socket      = /tmp/mysql.sock
  
  [mysqld]
  port        = 2116
  socket      = /tmp/mysql.sock
  datadir = /data/mysql/var
  skip-external-locking
  key_buffer_size = 64M
  max_allowed_packet = 1M
  table_open_cache = 256
  sort_buffer_size = 1M
  net_buffer_length = 8K
  read_buffer_size = 1M
  read_rnd_buffer_size = 512K
  myisam_sort_buffer_size = 16M
  thread_cache_size = 32
  query_cache_size = 32M
  tmp_table_size = 64M
  performance_schema_max_table_instances = 2000
  explicit_defaults_for_timestamp = true
  max_connections = 500
  max_connect_errors = 100
  open_files_limit = 65535
  log-bin=mysql-bin
  binlog_format=mixed
  lower_case_table_names=1
  
  server-id  = 1
  expire_logs_days = 10
  early-plugin-load = ""
  default_storage_engine = InnoDB
  innodb_file_per_table = 1
  innodb_data_home_dir = /data/mysql/var
  innodb_data_file_path = ibdata1:10M:autoextend
  innodb_log_group_home_dir = /data/mysql/var
  innodb_buffer_pool_size = 256M
  innodb_log_file_size = 64M
  innodb_log_buffer_size = 8M
  innodb_flush_log_at_trx_commit = 1
  innodb_lock_wait_timeout = 50
  
  [mysqldump]
  quick
  max_allowed_packet = 16M
  
  [mysql]
  no-auto-rehash
  
  [myisamchk]
  key_buffer_size = 64M
  sort_buffer_size = 1M
  read_buffer = 2M
  write_buffer = 2M
  
  [mysqlhotcopy]
  interactive-timeout
  ```

  #### 2.5 初始化MySQL

  ```shell
  rm -rf /etc/my.cnf
  
  vi /etc/my.cnf 将下面的配置参数复制进去
  
  cp /opt/mysql5.7.31/support-files/mysql.server /etc/init.d/mysql
  
  chmod 755 /etc/init.d/mysql
  
  /opt/mysql5.7.31/bin/mysqld --initialize-insecure --basedir=/opt/mysql5.7.31 --datadir=/data/mysql/var --user=mysql
  ```

  #### 2.6 授权目录

  ```shell
   chown -R mysql:mysql /opt/mysql5.7.31
  ```

  #### 2.7 启动MySQL，修改密码

  ```shell
  /etc/init.d/mysql start
  
  /opt/mysql5.7.31/bin/mysqladmin -u root password 你设置的密码
  
  ```

  > 修改mysql 用户root密码的方式
  >
  > **方法1： 用SET PASSWORD命令**
  > 首先登录MySQL。
  > 格式：mysql> set password for 用户名@localhost = password('新密码');
  > 例子：mysql> set password for root@localhost = password('123');
  >
  > **方法2：用mysqladmin**
  > 格式：mysqladmin -u用户名 -p旧密码 password 新密码
  > 例子：mysqladmin -uroot -p123456 password 123
  >
  > **方法3：用UPDATE直接编辑user表**
  > 首先登录MySQL。
  > mysql> use mysql;
  > mysql> update user set password=password('123') where user='root' and host='localhost';
  > mysql> flush privileges;

  #### 2.8 动态链接库为系统所共享

  ```shell
  ldconfig
  ln -sf /opt/mysql5.7.31/lib/mysql /usr/lib/mysql
  ln -sf /opt/mysql5.7.31/include/mysql /usr/include/mysql
  
  ```

  #### 2.9 添加mysql的bin路径

  ```shell
  ln -sf /opt/mysql5.7.31/bin/mysql /usr/bin/mysql
  ln -sf /opt/mysql5.7.31/bin/mysqldump /usr/bin/mysqldump
  ln -sf /opt/mysql5.7.31/bin/myisamchk /usr/bin/myisamchk
  ln -sf /opt/mysql5.7.31/bin/mysqld_safe /usr/bin/mysqld_safe
  ln -sf /opt/mysql5.7.31/bin/mysqlcheck /usr/bin/mysqlcheck
  
  ```

  #### 3.0 开机启动

  ```shell
  chkconfig mysql on
  或者
  systemctl enable mysql.service
  
  ```

  > #### 解决 Failed to start mysqld.service: Unit not found报错提示
  >
  > 输入命令
  >
  > `systemctl start mysql.service`
  >
  > 要启动MySQL数据库是却是这样的提示
  >
  > `Failed to start mysqld.service: Unit not found`
  >
  > 解决方法如下:
  >
  > 首先需要安装mariadb-server
  >
  > `yum install -y mariadb-server`

---

### Redis

---

### zookeeper

---

### NGINX

- **准备工作**

  #### 1.1 安装编译工具

  ```shell
  //一键安装四个依赖
  yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel gcc-c++
  ```

  #### 1.2. 安装 PCRE PCRE 作用是让 Nginx 支持 Rewrite 功能 

  ```shell
  //1：进入到安装目录
  cd /usr/local
  //2：下载pcre-8.35
  wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz
  //3：解压安装包:
  tar zxvf pcre-8.35.tar.gz
  //4：进入安装包目录
  cd pcre-8.35
  //5：编译安装 
  ./configure --prefix=/opt/pcre-8.35
  make && make install
  //6：查看pcre版本
  pcre-config --version
  ```

* **nginx安装**

  #### 2.1 [官网下载](http://nginx.org/en/download.html)

  #### 2.2 进入到nginx文件目录,解压NGINX

  ```shell
  cd /opt/app_zip/
  tar -zxvf nginx-1.18.0.tar.gz
  ```

  #### 2.3 进入到解压目录，编译安装

  ```shell
   cd /opt/app_zip/nginx-1.18.0
   
   //将nginx编译安装到/opt/nginx/下
  ./configure --prefix=/opt/nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre=/opt/pcre-8.35
  
  make && make install
  ```

  #### 2.4 验证/查看nginx版本

  ```shell
  cd  /opt/nginx/sbin
  ./nginx -v
  nginx version: nginx/1.18.0
  ```

  #### 2.4 启动NGINX

  ```shell
  /opt/nginx/sbin/nginx 
  ```

  #### 2.5 配置SSL

  ```
  cd /opt/nginx/conf
  
  vim nginx.conf
  
  //修改443端口文件
  http{
      #http节点中可以添加多个server节点
      server{
          #监听443端口
          listen 443;
          #对应的域名
          server_name xxx.com;
          ssl on;
          #公钥路径
          ssl_certificate cert/service.crt;
          #私钥路径
          ssl_certificate_key cert/service.key;
          ssl_session_timeout 5m;
          ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
          ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
          ssl_prefer_server_ciphers on;
          location / {
                  root /root;
                  index index.html;
          }
      }
      server{
          listen 80;
          server_name xxx.com;
          rewrite ^/(.*)$ https://xxx.com:443/$1 permanent;
      }
  }
  
  ```

  

* **常用命令**

  #### /opt/nginx/sbin/nginx                       启动

  #### /opt/nginx/sbin/nginx -s stop           关闭

  #### /opt/nginx/sbin/nginx -s reload        重启



### Jenkins

### FirewallD
  FirewallD 是 iptables 的一个封装，可以让你更容易地管理 iptables 规则 - 它并不是 iptables 的替代品。虽然 iptables 命令仍可用于 FirewallD，但建议使用 FirewallD 时仅使用 FirewallD 命令。

#### 1、firewalld的基本使用

启动： `systemctl start firewalld`

查看状态： `systemctl status firewalld`

停止： `systemctl disable firewalld`

禁用： `systemctl stop firewalld`

#### 2、配置firewalld-cmd

查看版本： `firewall-cmd --version`

查看帮助： `firewall-cmd --help`

显示状态： `firewall-cmd --state`

查看所有打开的端口： `firewall-cmd --zone=public --list-ports`

更新防火墙规则： `firewall-cmd --reload`

查看区域信息:  `firewall-cmd --get-active-zones`

查看指定接口所属区域： `firewall-cmd --get-zone-of-interface=eth0`

拒绝所有包：`firewall-cmd --panic-on`

取消拒绝状态： `firewall-cmd --panic-off`

查看是否拒绝： `firewall-cmd --query-panic`

#### 3、用firewall-cmd 配置端口

添加：`firewall-cmd --zone=public --add-port=80/tcp --permanent`    （--permanent永久生效，没有此参数重启后失效）

重新载入：`firewall-cmd --reload`(添加新的规则后需要重新载入生效)

查看：`firewall-cmd --zone=public --query-port=80/tcp`

删除：`firewall-cmd --zone=public --remove-port=80/tcp --permanent`



### Iptable

### ELK

