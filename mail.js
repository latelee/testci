/*
npm i nodemailer
使用：
node mail.js 收件人，仓库名称，仓库地址

*/
const nodemailer  = require("nodemailer");

// 参数：发件人，收件人，主题，正文（支持html格式）
function sendMail(from, tos, subject, msg)
{
    const smtpTransport = nodemailer.createTransport({
    host: 'smtp.exmail.qq.com',
    secureConnection: true, // use SSL
    secure: true,
    port: 465,
    auth: {
        user: from,
        pass: '1qaz@WSX',
    }
    });

    smtpTransport.sendMail({
        from    : from, 
        to      : tos, //收件人邮箱，多个邮箱地址间用','隔开
        subject : subject,//邮件主题
        //text    : msg,
        html    : msg
    }, function(err, res) {
        if (err)
        {
            console.log('error: ', err);
        }
    });
}

function nl2br(str, isXhtml) {
    var breakTag = (isXhtml || typeof isXhtml === 'undefined') ? '<br />' : '<br>';
    var str = (str + '').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
};

function main()
{
    var args = process.argv.splice(2); // 似乎是从第2个参数开始
    //console.log(args[0], args[1], args[2]);
    //return;

    require('child_process').exec('git log -1 --stat', function(err, stdout) {
        console.log('Last commit message on this branch is:\n', stdout);
        stdout = nl2br(stdout)
        sendMail('test@latelee.org', args[0], 
            args[1] + '仓库代码更新',
            '<h2>' + args[1] + '仓库代码有提交，请及时更新。</h2>地址为：<a href=\"' + args[1] + '\"target=\"_blank\">' + args[2] + '</a></br>' + '<h3>commit log:</h3>' + stdout);
    });
}

// call main
main();
