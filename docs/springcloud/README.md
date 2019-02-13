---
title: 'SpringCloud介绍及相关资源'
lang: zh-CN
meta:
  - name: description
    content: SpringCloud介绍
  - name: keywords
    content: SpringCloud介绍
---
# SpringCloud介绍
Spring Cloud是一系列框架的有序集合。它利用Spring Boot的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用Spring Boot的开发风格做到一键启动和部署。

# SpringCloud组件
SpringCloud相关组件

* Spring Cloud Eureka：一个基于rest服务的服务治理组件，包括服务注册中心、服务注册与服务发现机制的实现，实现了云端负载均衡和中间层服务器的故障转移。
* Spring Cloud Hystrix：容错管理工具，实现断路器模式，通过控制服务的节点,从而对延迟和故障提供更强大的容错能力。
* Spring Cloud Ribbon：客户端负载均衡的服务调用组件。提供云端负载均衡，有多种负载均衡策略可供选择，可配合服务发现和断路器使用。
* Spring Cloud Feign：基于Ribbon和Hystrix的声明式服务调用组件。Feign是一种声明式、模板化的HTTP客户端。
* Spring Cloud Zuul：云平台上提供动态路由,监控,弹性,安全等边缘服务的框架。相当于是设备和 Netflix 流应用的 Web 网站后端所有请求的前门。
* Spring Cloud Turbine：Turbine是聚合服务器发送事件流数据的一个工具，用来监控集群下hystrix的metrics情况。
* Spring Cloud Netflix Archaius：配置管理API，包含一系列配置管理API，提供动态类型化属性、线程安全配置操作、轮询框架、回调机制等功能。
* Spring Cloud Config： 配置管理工具包，让你可以把配置放到远程服务器，几种化管理集群配置，目前支持本地存储，Git以及Subversion。
* Spring Cloud Bus：消息总线(一种通信工具，可以在机器之间互相传输消息、文件等。消息总线扮演着一种消息路由的角色，拥有一套完备的路由机制来决定消息传输方向。发送段只需要向消息总线发出消息而不用管消息被如何转发)
通过轻量消息代理连接各个分布的节点。管理和传播所有分布式项目中的消息，本质是利用了MQ的广播机制在分布式的系统中传播消息，用于在集群（例如，配置变化事件）中传播状态变化，可与Spring Cloud Config联合实现热部署。
目前常用的有Kafka和RabbitMQ。
* RabbitMQ官网地址：http://www.rabbitmq.com/
* Kafka官网地址：http://kafka.apache.org/
* Spring Cloud Consul：由HashiCorp公司开发，是一个服务发现与配置工具，与Docker容器可以无缝集成。
* hashicorp官网地址：https://www.hashicorp.com/
* Consul官网地址：https://www.consul.io/
* Spring Cloud Zookeeper：操作Zookeeper的工具包，用于使用zookeeper方式的服务发现和配置管理。
* Zookeeper官网地址：https://zookeeper.apache.org/
* Spring Cloud Security：基于spring security的安全工具包，为你的应用程序添加安全控制。
* Spring Cloud Stream：数据流操作开发包，封装了与Redis,RabbitMQ、Kafka等发送接收消息。
* Spring Cloud Sleuth：日志收集工具包，封装了Dapper和log-based追踪以及Zipkin和HTrace操作，为SpringCloud应用实现了一种分布式追踪解决方案。
* Spring Cloud Data Flow：大数据操作工具，作为Spring XD的替代产品，它是一个混合计算模型，结合了流数据与批量数据的处理方式。是构建数据集成和实时数据处理流水线的工具包。
* Spring Cloud Task：提供云端计划任务管理、任务调度。
* Spring Cloud Connectors：便于云端应用程序在各种PaaS平台连接到后端，如：数据库和消息代理服务。
* Spring Cloud Cluster：提供Leadership选举，如：Zookeeper, Redis, Hazelcast, Consul等常见状态模式的抽象和实现。
 Hazelcast 是由Hazelcast公司开发和维护的开源产品，可以为基于jvm环境运行的各种应用提供分布式集群和分布式缓存服务。
* Hazelcast官网地址：https://hazelcast.com/
* Spring Cloud for Cloud Foundry：将您的应用程序与Pivotal Cloudfoundry集成。 提供服务发现实现，并且还可以轻松实现SSO和OAuth2保护的资源,还可以创建Cloudfoundry服务代理。CloudFoundry是VMware推出的开源PaaS云平台。
CloudFoundry官网地址：https://www.cloudfoundry.org/
* Spring Cloud CLI：基于 Spring Boot CLI，可以让你以命令行方式快速建立云组件。

![微服务技术](https://www.lijiating.online/myblog/images/springcloud-zujian.png)

# SpringCloud发展
[原文章](http://www.springcloud.cn/view/415)
## Spring Cloud第一代

| 组件                             | 来源                 | 说明                                                                      | 组件                             |
| ---------------------------------- | ---------------------- | --------------------------------------------------------------------------- | ---------------------------------- |
| Spring-cloud-openfeign             | 基于Feign的升级   | 服务之间调用的必备组件                                           | Spring-cloud-openfeign             |
| spring-cloud-zuul                  | 来源于Netflix Zuul  | 目前还在继续维护，但是已经有自己的Spring Cloud Gateway,不久将来逐渐淘汰 | spring-cloud-zuul                  |
| spring-cloud-eureka                | 集成于Netflix Eureka | 目前还在跟随Spring Cloud版本升级维护，最终也会被替代    | spring-cloud-eureka                |
| spring-cloud-config                | 自研                 | 功能不足，国内使用其它配置中心替代，比如携程的Apollo | spring-cloud-config                |
| 全链路监控(sleuth+zikpin或pinpont) | sleuth自研，其它第三方 | 国内目前使用最多的是skywaling等上生产                         | 全链路监控(sleuth+zikpin或pinpont) |
| spring-cloud-ribbon                | 来源于Netflix集成 | ribbon目前还在跟随Spring Cloud版本维护中，目前孵化未来替代品spring-cloud-lb | spring-cloud-ribbon                |
| Spring-cloud-hystrix               | 来源于Netflix集成 | 目前还在跟随Spring Cloud版本维护中目前已经孵化spring-cloud-r4j | Spring-cloud-hystrix               |

## Spring Cloud 第二代
Spring Cloud第一代和第二代的组件组合汇总，如下表所示。
|                  | Spring Cloud第一代       | Spring Cloud第二代                        | 组件                             |
| ---------------- | --------------------------- | -------------------------------------------- | ---------------------------------- |
| 网关           | Spring Cloud Zuul           | Spring Cloud Gateway                         | Spring-cloud-openfeign             |
| 注册中心     | eureka(不再更新)，Consul,ZK | 阿里Nacos，拍拍贷radar等可选        | spring-cloud-zuul                  |
| 配置中心     | spring cloud config         | 阿里Nacos，携程Apollo，随行付Config Keeper | spring-cloud-eureka                |
| 客户端软负载均衡 | Ribbon                      | spring-cloud-loadbalancer                    | spring-cloud-config                |
| 熔断器        | Hystrix                     | spring-cloud-r4j(Resilience4J)，阿里Sentinel | 全链路监控(sleuth+zikpin或pinpont) |
|                  | Spring Cloud第一代       | Spring Cloud第二代                        | spring-cloud-ribbon                |
| 网关           | Spring Cloud Zuul           | Spring Cloud Gateway                         | Spring-cloud-hystrix               |

::: warning 说明
以为内置均从网上资料查找借鉴，后续会陆续进行更新，如有侵权，可联系本人。
:::
## 推荐开源项目
* https://github.com/alibaba/Sentinel

* https://github.com/spring-cloud-incubator/spring-cloud-r4j

* 阿里Nacos-https://github.com/alibaba/nacos

* 随行付Config-keeper-https://github.com/sxfad/config-keeper

* spring-cloud-loadbalancer

* https://github.com/ctripcorp/apollo

* https://github.com/apache/incubator-skywalking


---

`谢谢`