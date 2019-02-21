---
text: 微服务注册中心-阿里nacos
lang: zh-CN
meta:
  - name: description
    content: 微服务注册中心-阿里nacos
  - name: keywords
    content: 微服务注册中心-阿里nacos
---

搭建SpringCloud 注册中心 采用阿里开源组件 nacos
===
## Nacos介绍
Nacos是阿里巴巴集团开源的一个易于使用的平台，专为动态服务发现，配置和服务管理而设计。它可以帮助您轻松构建云本机应用程序和微服务平台。Nacos基本上支持现在所有类型的服务，例如，Dubbo / gRPC服务，Spring Cloud RESTFul服务或Kubernetes服务。
尤其是使用Eureka注册中心的，并且担心Eureka闭源的开发者们，可以将注册中心修改为Nacos，本文主要介绍Nacos配置中心的使用。

Nacos官网地址[https://nacos.io/zh-cn/](https://nacos.io/zh-cn/)
## 安装阿里nacos
acos安装可以采用如下两种方式：
* 1.官网下载稳定版本解压使用。
* 2.下载源代码编译使用，目前最新的版本是0.8.0版本。

::: warning 备注
- 下载是tag.gz文件
- 解压后进入bin目录
:::

* 3.运行命令,端口号是`8848`
```js {1}
sh startup.sh -m standalone
```

* 4.访问Nacos服务，http://localhost:8848/nacos/#/login，默认情况用户名密码都是nacos

## 搭建nacos服务端

1.创建父级项目 springcloud-nacos `建议用idea去创建项目`,pom文件如下所示：
``` xml {24,40,41,42}
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <!--集成父级项目 start-->
    <parent>
        <groupId>cn.github.mrjerryli</groupId>
        <artifactId>springcloud-learningcase</artifactId>
        <version>2.0.5.RELEASE</version>
    </parent>
    <!--集成父级项目 end-->

    <!--项目基本信息 start-->
    <modelVersion>4.0.0</modelVersion>
    <artifactId>springcloud-nacos</artifactId>
    <name>springcloud-nacos</name>
    <packaging>pom</packaging>
    <description>阿里开源nacos 父类</description>
    <!--项目基本信息 end-->

    <!--子项目版本依赖 start-->
    <properties>
        <!--nacos项目依赖版本控制-->
        <spring-cloud-alibaba-dependencies.version>0.2.1.RELEASE</spring-cloud-alibaba-dependencies.version>
    </properties>
    <!--子项目版本依赖 end-->

    <!--子模块依赖 start-->
    <modules>
        <module>springcloud-nacos-server</module>
        <module>springcloud-nacos-client</module>
    </modules>
    <!--子模块依赖 end-->

    <!--依赖管理 start-->
    <dependencyManagement>
        <!--阿里开源项目nacos-->
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>${spring-cloud-alibaba-dependencies.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <!--依赖管理 end-->
</project>

```
2.创建中心服务端 springcloud-nacos-server 子项目，pom如下：

```xml {41}
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

	<!--父级项目 start-->
	<parent>
		<groupId>cn.github.mrjerryli</groupId>
		<artifactId>springcloud-nacos</artifactId>
		<version>2.0.5.RELEASE</version>
	</parent>
	<!--父级项目 end-->

     <!--项目基本信息 start-->
	<modelVersion>4.0.0</modelVersion>
	<artifactId>springcloud-nacos-server</artifactId>
	<name>springcloud-nacos-server</name>
	<packaging>jar</packaging>
	<description>服务提供者</description>
	<!--项目基本信息 end-->

	<!--项目依赖 start-->
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
		</dependency>
	</dependencies>
     <!--项目依赖 end-->
	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>
</project>

```
3.在配置文件中连接 nacos注册中心 `application.yml`配置信息 如下：
```json {6}
server:
  port: 8081

spring:
  application:
    name: alibaba-nacos-server
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848

```

4.在服务端启动主方法中添加 `@EnableDiscoveryClient`如下：
``` java {8}
package cn.github.mrjerryli.nacos.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class SpringcloudNacosServerApplication {

	public static void main(String[] args) {

		SpringApplication.run(SpringcloudNacosServerApplication.class, args);
	}

}

```
## 启动nacos服务端
1.先启动nacos命令：`sh startup.sh -m standalone`(详细请看上述安装nacos)   
2.启动nacos服务端服务 `alibaba-nacos-server`  
3.打开注册中心管理界面  
  打开浏览器，输入地址：`http://localhost:8848/nacos/#/login`,  
  用户名，密码默认都是`nacos`,界面如下图所示；

![nacos登录页面](https://www.lijiating.online/myblog/images/nacos-login.png)


![注册成功页面](https://www.lijiating.online/myblog/images/nacos-sucess1.png)
