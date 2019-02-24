# linux下 如何切换到root用户
*默认安装完成之后并不知道root用户的密码，那么如何应用root权限呢？那就尴尬了，下面讲解四种方式为你解惑！*


## sudo 命令  
``` sh
[parallels@centos-7 ~]#  sudo
```
这样输入当前管理员用户密码就可以得到超级用户的权限。但默认的情况下5分钟root权限就失效了。

## sudo -i
``` sh
[parallels@centos-7~]#  sudo -i
```
通过这种方法输入当前管理员用户的密码就可以进到root用户。

## 永久root权限

> * 那我们首先要重设置root用户的密码：
> > ``` sh
> > [parallels@centos-7 ~]#  sudo passwd root
> > ```
> > 这样就可以设置root用户的密码了。
> * 之后就可以自由的切换到root用户了
> > 
> > ``` sh
> > [parallels@centos-7 ~]#  su
> > ```
> > 输入root用户的密码即可。
> > su "king" 或者 exit回到用户权限








