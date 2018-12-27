# testci

## 功能
当push仓库时，利用托管仓库的CI功能自动发邮件到指定人员邮件。  
使用方法：  
针对不同的托管仓库，使用对应的配置文件，将其整合到实际的ci脚本中。  
(本项目仅是发送邮件，应属于CI的一部分)

## 实现原理
使用nodejs的nodemailer实现发邮件功能。使用git命令获取最新提交日志，  
并转换成html格式，作为邮件内容。  
使用方法：
```
node mail.js "li@latelee.org" "自动化CI测试" https://github.com/latelee/testci
```
第一个参数为收件人邮件，第二个参数为邮件标题，第三个参数为对应的仓库名称。  

发件人邮件已由mail.js中指定。注意，本程序使用腾讯企业邮件（免费申请）并关联自有域名。  
对于nodemailer，腾讯企业邮件直接使用邮箱名和密码即可，但发件人如是其它邮箱服务商，  
可能方法不同，请自行参考解决方法。

注：  
**mail.js中的发件人邮箱test@latelee.org可正常使用，如想使用，可随意，但安全性不做任何保障。也请不要修改密码。**  

## 测试
### gitlab.com
已经内置有ci模块。写好正确的配置文件：.gitlab-ci.yml即可在push时执行。  

### github.com+travis-ci.org
需要到travis-ci上关联github，并开启相应ci功能。  
（注：travis-ci.org针对github公开仓库)  
配置文件：.travis.yml

### bitbucket
待测

### gitee
不支持


## 作者

Late Lee<li@latelee.org>