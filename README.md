# testci

## 功能
当push仓库时，利用托管仓库的CI功能自动发邮件到指定人员邮件。

## 测试
### gitlab.com
内置到ci系统
配置文件：.gitlab-ci.yml

### github.com+travis-ci.org
需要到travis-ci上关联github，并开启相应ci功能。
（注：travis-ci.org针对github公开仓库)
.travis.yml