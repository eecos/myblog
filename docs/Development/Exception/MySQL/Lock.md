---
text: mysql锁等待异常处理
lang: zh-CN
meta:
  - name: description
    content: mysql锁等待异常处理
  - name: keywords
    content: mysql异常
---

hibernate操作mysql时抛出Lock wait timeout exceeded; try restarting transaction异常
============================

### Lock wait timeout exceeded; try restarting transaction是锁等待超时。是当前事务在等待其它事务释放锁资源造成的。

### 解决方法：
1. 在mysql查询中执行以下指令
```mysql
select * from information_schema.innodb_trx
```
2.结果如图：

![查询结果](http://psx66r0l1.bkt.clouddn.com/lock.png)

3.找出与其他几个有参数不同的线程，找出他的线程号mysql_thread_id
```text
执行命令kill +线程号即可解决。
```

***我报这个错的原因是因为用hibernate执行了delete操作，却一直没有commit事务，后面再执行delete操作时就会抛这个异常。就是事务在等待给某个表加锁时超时，估计是表正被另的进程锁住一直没有释放。***
