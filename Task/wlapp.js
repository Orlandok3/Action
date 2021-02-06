/*
// TODO: 如果appversion不等于1.0.2,直接done,找个安全的包做检查验证
// TODO: cookie包含一个时间戳,是今天的时间

//TALK
目前只有阅读文章和视频的部分，执行一次脚本会模拟登录一次,并且随机挑选文章和视频清单（每次都不一样）,然后在随机挑一篇阅读。
之所以搞这么麻烦，因为是某APP的姐妹套壳版本,还是那句老话...且用且珍惜,更新无限期，下个APP，SEE YOU LATER：）

//信息

【BOXJS】: https://raw.githubusercontent.com/CenBoMin/GithubSync/main/cenbomin.box.json
【下载APP】: http://wlsub.ccdy.cn/7gBTVl9lKe6
【邀请码】: 9426520（脚本有验证邀请码机制,请勿随意更改或者散布）
【定时cron】: 设置1分钟循环 ****
【脚本JS】:https://raw.githubusercontent.com/CenBoMin/GithubSync/main/WLAPP/wlapp.js
【重写引用conf】:https://raw.githubusercontent.com/CenBoMin/GithubSync/main/WLAPP/cookie.conf

//食用方法
1.到[重写]-[引用],加入重写引用,根据以下提示获取cookie
2.[登录cookie]:打开App,即可获取
3.[文章奖励cookie]:点击一篇文章,并且一直阅读到获得金币,即可获取
4.[视频奖励cookie]:点击下方[视频],点击一篇视频,并且一直观看到获得金币,即可获取
5.[用户账户cookie]:点击下方[我的],即可获取

//获取完cookie,务必关闭重写引用conf!

//手动做部分:
1.签到
2.时段奖励
3.分享

*/
const jsname = '⛱文旅看点'
const $ = Env(jsname)
//0为关闭日志，1为开启,默认为0
const logs = 0;
//0为关闭通知，1为所有通知,默认为0
const notifyInterval = 1;
//通知风格
let tz = '';
//let cash = $.getval('cash') || 0; //0为不自动提现,1为自动提现1元,5为自动提现1元
//////////////////////////////////////////////////////////////////
//hour&min
var hour = '';
var minute = '';
if ($.isNode()) {
  hour = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getHours();
  minute = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getMinutes();
} else {
  hour = (new Date()).getHours();
  minute = (new Date()).getMinutes();
}
//现在毫秒格式(13位数)
let todaytimems = Math.round(Date.now())
//现在秒格式(10位数)
let todaytimes = Math.round(Date.now() / 1000)
//今天20200101格式
let today1 = formatDateTime(new Date());
//今天2021.01.30 17:32:01格式
let today2 = formatDateTime(todaytimes);

//////////////////////////////////////////////////////////////////
const getdomainbodyArr = [];
let getdomainbodyVal = "";

const getdomainkeyArr = [];
let getdomainkeyVal = "";

const userloginbodyArr = [];
let userloginbodyVal = "";

const userloginkeyArr = [];
let userloginkeyVal = "";

const artlistbodyArr = [];
let artlistbodyVal = "";

const artlistkeyArr = [];
let artlistkeyVal = "";

const artstationurlArr = [];
let artstationurlVal = "";

const artstationkeyArr = [];
let artstationkeyVal = "";

const readaccountbodyArr = [];
let readaccountbodyVal = "";

const readaccountkeyArr = [];
let readaccountkeyVal = "";

const infomebodyArr = [];
let infomebodyVal = "";

const infomekeyArr = [];
let infomekeyVal = "";

const videoartlistbodyArr = [];
let videoartlistbodyVal = "";

const videoartlistkeyArr = [];
let videoartlistkeyVal = "";

const videoreadaccountbodyArr = [];
let videoreadaccountbodyVal = "";

const videoreadaccountkeyArr = [];
let videoreadaccountkeyVal = "";

const artdetailbodyArr = [];
let artdetailbodyVal = "";

const artdetailkeyArr = [];
let artdetailkeyVal = "";

if ($.isNode()) {
  Object.keys(getdomainbodyVal).forEach((item) => {
    if (getdomainbodyVal[item]) {
      getdomainbodyArr.push(getdomainbodyVal[item])
    }
  });

  Object.keys(getdomainkeyVal).forEach((item) => {
    if (getdomainkeyVal[item]) {
      getdomainkeyArr.push(getdomainkeyVal[item])
    }
  });

  Object.keys(userloginbodyVal).forEach((item) => {
    if (userloginbodyVal[item]) {
      userloginbodyArr.push(userloginbodyVal[item])
    }
  });

  Object.keys(userloginkeyVal).forEach((item) => {
    if (userloginkeyVal[item]) {
      userloginkeyArr.push(userloginkeyVal[item])
    }
  });

  Object.keys(artlistbodyVal).forEach((item) => {
    if (artlistbodyVal[item]) {
      artlistbodyArr.push(artlistbodyVal[item])
    }
  });

  Object.keys(artlistkeyVal).forEach((item) => {
    if (artlistkeyVal[item]) {
      artlistkeyArr.push(artlistkeyVal[item])
    }
  });

  Object.keys(artstationurlVal).forEach((item) => {
    if (artstationurlVal[item]) {
      artstationurlArr.push(artstationurlVal[item])
    }
  });

  Object.keys(artstationkeyVal).forEach((item) => {
    if (artstationkeyVal[item]) {
      artstationkeyArr.push(artstationkeyVal[item])
    }
  });

  Object.keys(readaccountbodyVal).forEach((item) => {
    if (readaccountbodyVal[item]) {
      readaccountbodyArr.push(readaccountbodyVal[item])
    }
  });

  Object.keys(readaccountkeyVal).forEach((item) => {
    if (readaccountkeyVal[item]) {
      readaccountkeyArr.push(readaccountkeyVal[item])
    }
  });

  Object.keys(infomebodyVal).forEach((item) => {
    if (infomebodyVal[item]) {
      infomebodyArr.push(infomebodyVal[item])
    }
  });

  Object.keys(infomekeyVal).forEach((item) => {
    if (infomekeyVal[item]) {
      infomekeyArr.push(infomekeyVal[item])
    }
  });

  Object.keys(videoartlistbodyVal).forEach((item) => {
    if (videoartlistbodyVal[item]) {
      videoartlistbodyArr.push(videoartlistbodyVal[item])
    }
  });

  Object.keys(videoartlistkeyVal).forEach((item) => {
    if (videoartlistkeyVal[item]) {
      videoartlistkeyArr.push(videoartlistkeyVal[item])
    }
  });

  Object.keys(videoreadaccountbodyVal).forEach((item) => {
    if (videoreadaccountbodyVal[item]) {
      videoreadaccountbodyArr.push(videoreadaccountbodyVal[item])
    }
  });

  Object.keys(videoreadaccountkeyVal).forEach((item) => {
    if (videoreadaccountkeyVal[item]) {
      videoreadaccountkeyArr.push(videoreadaccountkeyVal[item])
    }
  });

  Object.keys(artdetailbodyVal).forEach((item) => {
    if (artdetailbodyVal[item]) {
      artdetailbodyArr.push(artdetailbodyVal[item])
    }
  });

  Object.keys(artdetailkeyVal).forEach((item) => {
    if (artdetailkeyVal[item]) {
      artdetailkeyArr.push(artdetailkeyVal[item])
    }
  });

} else {
  getdomainbodyArr.push($.getdata('getdomainbody'));
  getdomainkeyArr.push($.getdata('getdomainkey'));
  userloginbodyArr.push($.getdata('userloginbody'));
  userloginkeyArr.push($.getdata('userloginkey'));
  artlistbodyArr.push($.getdata('artlistbody'));
  artlistkeyArr.push($.getdata('artlistkey'));
  artstationurlArr.push($.getdata('artstationurl'));
  artstationkeyArr.push($.getdata('artstationkey'));
  readaccountbodyArr.push($.getdata('readaccountbody'));
  readaccountkeyArr.push($.getdata('readaccountkey'));
  infomebodyArr.push($.getdata('infomebody'));
  infomekeyArr.push($.getdata('infomekey'));
  videoartlistbodyArr.push($.getdata('videoartlistbody'));
  videoartlistkeyArr.push($.getdata('videoartlistkey'));
  videoreadaccountbodyArr.push($.getdata('videoreadaccountbody'));
  videoreadaccountkeyArr.push($.getdata('videoreadaccountkey'));
  artdetailbodyArr.push($.getdata('artdetailbody'));
  artdetailkeyArr.push($.getdata('artdetailkey'));
}

//////////////////////////////////////////////////////////////////

!(async () => {
  await Jsname()
  cc = (`🥦${jsname}任务执行通知🔔`);
  if (!getdomainbodyArr[0]) {
    console.log($.name, '【提示】请先前往获取cookie📲')
    return;
  }
  getdomainbodyVal = getdomainbodyArr[0];
  getdomainkeyVal = getdomainkeyArr[0];
  userloginbodyVal = userloginbodyArr[0];
  userloginkeyVal = userloginkeyArr[0];
  artlistbodyVal = artlistbodyArr[0];
  artlistkeyVal = artlistkeyArr[0];
  artstationurlVal = artstationurlArr[0];
  artstationkeyVal = artstationkeyArr[0];
  readaccountbodyVal = readaccountbodyArr[0];
  readaccountkeyVal = readaccountkeyArr[0];
  infomebodyVal = infomebodyArr[0];
  infomekeyVal = infomekeyArr[0];
  videoartlistbodyVal = videoartlistbodyArr[0];
  videoartlistkeyVal = videoartlistkeyArr[0];
  videoreadaccountbodyVal = videoreadaccountbodyArr[0];
  videoreadaccountkeyVal = videoreadaccountkeyArr[0];
  artdetailbodyVal = artdetailbodyArr[0];
  artdetailkeyVal = artdetailkeyArr[0];

  console.log(`\n💗💕 开始执行脚本任务 💕💗\n`)
  await wlapp();
  await showmsg2();


})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())
//////////////////////////////////////////////////////////////////
//通知1
function showmsg1() {
  if (notifyInterval != 1) {
    console.log(cc + '\n' + tz);
  }

  if (notifyInterval == 1) {
    $.msg(cc, '\n', tz);
  }
}
//通知2
async function showmsg2() {
  if (notifyInterval == 1) {
    if ($.isNode()) {
      if ((hour == 8 && minute <= 5) || (hour == 12 && minute <= 5) || (hour == 23 && minute <= 5)) {
        await notify.sendNotify($.name, tz)
      }
    } else {
      if ((hour == 8 && minute <= 3) || (hour == 12 && minute <= 3) || (hour == 23 && minute <= 3)) {
        $.msg(cc, '', tz);
      }
    }
  } else if (notifyInterval == 0) {
    console.log(cc + '' + tz);
  }
}
//////////////////////////////////////////////////////////////////
async function wlapp() {
  console.log(`\n✅ 执行【模拟用户登录】任务\n`)
  await getdomin();
  await userlogin(jsessionid);
  console.log(`\n✅ 查询【用户账户】任务\n`)
  await infome(jsessionid)
  console.log(`\n✅ 执行【自动阅读】任务\n`)
  await artlist(jsessionid)
  console.log(`🙇开始随机看一篇文章📄...\n`)
  console.log(`🆔【文章验证】:\n📄${jsessionid}\n`)
  await artstation(rdid, listid, appversion, openid, listid2)
  await $.wait(12000)
  await readAccount(jsessionid, rdid)
  await videoartlist(jsessionid)
  console.log(`🙇开始随机看一篇视频🎬...`)
  console.log(`\n🆔【视频验证】:\n🎬${jsessionid}\n`)
  await artdetail(jsessionid, videoid, videolistid)
  await $.wait(12000)
  await videoAccount(jsessionid, videoid)


}
//////////////////////////////////////////////////////////////////
//infome
async function infome(jsessionid) {
  return new Promise((resolve) => {
    let infomebody = infomebodyVal.replace(/time%22%20%3A%20%22\d+/, `time%22%20%3A%20%22${todaytimes}`)
    let jsonheaders = JSON.parse(infomekeyVal)
    let infomeheaders = jsonheaders['Cookie'].replace(/JSESSIONID=\w+/, `JSESSIONID=${jsessionid}`)
    let useragent = jsonheaders['User-Agent']
    //$.log(`\n【useragent】:${useragent}\n`);
    let url = {
      url: `http://app.zhongchuanjukan.com/jkd/newMobileMenu/infoMe.action`,
      body: infomebody,
      headers: {
        'Cookie': `${infomeheaders}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate`,
        'Host': `app.zhongchuanjukan.com`,
        'User-Agent': `${useragent}`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【我的红豆】:${data.userinfo.infoMeGoldItem.value}红豆🍄,${data.userinfo.infoMeGoldItem.money}`);
            $.log(`【今日红豆】:${data.userinfo.infoMeCurCashItem.value}红豆🍄`);
            $.log(`【好友贡献】:${data.userinfo.infoMeSumCashItem.value}红豆🍄`);

            tz += `【我的红豆】:${data.userinfo.infoMeGoldItem.value}红豆🍄,${data.userinfo.infoMeGoldItem.money}\n`
            tz += `【今日红豆】:${data.userinfo.infoMeCurCashItem.value}红豆🍄\n`
            tz += `【好友贡献】:${data.userinfo.infoMeSumCashItem.value}红豆🍄\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//getdomin
async function getdomin() {
  let getdomainbody = getdomainbodyVal.replace(/time%22%20%3A%20%22\d+/, `time%22%20%3A%20%22${todaytimes}`)
  return new Promise((resolve) => {
    let url = {
      url: `http://app.zhongchuanjukan.com/jkd/mobiledomain/getDomain.action`,
      body: getdomainbody,
      headers: JSON.parse(getdomainkeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            jsessionid = resp.headers['Set-Cookie'].split(";")[0].split("JSESSIONID=")[1]
            $.log(`【加载APP页面】:${data.ret}🎉`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function getdomin2() {
  let getdomainbody = getdomainbodyVal.replace(/time%22%20%3A%20%22\d+/, `time%22%20%3A%20%22${todaytimes}`)
  return new Promise((resolve) => {
    let url = {
      url: `http://app.zhongchuanjukan.com/jkd/mobiledomain/getDomain.action`,
      body: getdomainbody,
      headers: JSON.parse(getdomainkeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            jsessionid2 = resp.headers['Set-Cookie'].split(";")[0].split("JSESSIONID=")[1]
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//userlogin
async function userlogin(jsessionid) {
  return new Promise((resolve) => {
    let userloginbody = userloginbodyVal.replace(/time%22%20%3A%20%22\d+/, `time%22%20%3A%20%22${todaytimes}`)
    let jsonheaders = JSON.parse(userloginkeyVal)
    let userloginheaders = jsonheaders['Cookie'].replace(/JSESSIONID=\w+/, `JSESSIONID=${jsessionid}`)
    let useragent = jsonheaders['User-Agent']

    let url = {
      url: `http://app.zhongchuanjukan.com/jkd/login/userlogin.action`,
      body: userloginbody,
      headers: {
        'Cookie': `${userloginheaders}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate`,
        'Host': `app.zhongchuanjukan.com`,
        'User-Agent': `${useragent}`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };

    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            openid = data.openid
            $.log(`【获取用户信息】:${data.ret}🎉`);
            $.log(`【OPENID】:${data.openid}`);
            $.log(`【用户名】:${data.username}`);
            $.log(`【用户码】:${data.usercode}`);
            $.log(`【用户地址】:${data.province},${data.city}`);
            $.log(`【登录时间】:` + time(todaytimems));

            //tz += `【】:${data.retmsg}\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//artlist
async function artlist(jsessionid) {
  return new Promise((resolve) => {
    let artlistbody = artlistbodyVal.replace(/time%22%20%3A%20%22\d+/, `time%22%20%3A%20%22${todaytimes}`)
    decode_appversion = decodeURIComponent(artlistbodyVal)
    appversion = decode_appversion.split(`"`)[55]
    $.log(`📱查询目前【app版本号】:${appversion}\n`);
    let jsonheaders = JSON.parse(artlistkeyVal)
    let artlistheaders = jsonheaders['Cookie'].replace(/JSESSIONID=\w+/, `JSESSIONID=${jsessionid}`)
    let useragent = jsonheaders['User-Agent']
    //$.log(`\n【artlistkeyVal】:${artlistkeyVal}\n`);
    //$.log(`\n【artlistheaders】:${artlistheaders}\n`);
    //$.log(`\n【useragent】:${useragent}\n`);
    let url = {
      url: `http://app.zhongchuanjukan.com/jkd/newmobile/artlist.action`,
      body: artlistbody,
      headers: {
        'Cookie': `${artlistheaders}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate`,
        'Host': `app.zhongchuanjukan.com`,
        'User-Agent': `${useragent}`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`⏱开始加载优质文章清单...`);
            await $.wait(3000); //等待3秒
            $.log(`📋清单ID: ${data.artlist[0].request_id}\n`);
            listid = data.artlist[0].request_id
            listid2 = data.artlist[1].request_id
            for (rdlist of data.artlist) {
              rdName = `${rdlist.art_title}`;
              rdid = rdlist.art_id;
              if (rdid >= 0) {
                $.log(`🆔${rdid}\n📄${rdName}\n`);
              }
            }
            //tz += `【】:${data.retmsg}\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//videoartlist
async function videoartlist(jsessionid) {
  return new Promise((resolve) => {
    let videoartlistbody = videoartlistbodyVal.replace(/time%22%20%3A%20%22\d+/, `time%22%20%3A%20%22${todaytimes}`)
    let jsonheaders = JSON.parse(videoartlistkeyVal)
    let videoartlistheaders = jsonheaders['Cookie'].replace(/JSESSIONID=\w+/, `JSESSIONID=${jsessionid}`)
    let useragent = jsonheaders['User-Agent']
    let url = {
      url: `http://app.zhongchuanjukan.com/jkd/newmobile/artlist.action`,
      body: videoartlistbody,
      headers: {
        'Cookie': `${videoartlistheaders}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate`,
        'Host': `app.zhongchuanjukan.com`,
        'User-Agent': `${useragent}`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`\n⏱开始加载优质视频清单...`);
            await $.wait(3000); //等待3秒
            $.log(`📋清单ID: ${data.artlist[0].request_id}\n`);
            videolistid = data.artlist[0].request_id
            for (videolist of data.artlist) {
              videoName = `${videolist.art_title}`;
              videoid = videolist.art_id;
              if (videoid >= 0) {
                $.log(`🆔${videoid}\n🎞${videoName}\n`);
              }
            }
            //tz += `【】:${data.retmsg}\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//artstation
function artstation(rdid, listid, appversion, openid, listid2) {
  let arturl1 = artstationurlVal.replace(/articleid=\d+/, `articleid=${rdid}`)
  let arturl2 = arturl1.replace(/request_id=\d+/, `request_id=${listid}`)
  let arturl3 = arturl2.replace(/scene_type=&request_id=\d+/, `scene_type=&request_id=${listid2}`)
  let jsonheaders = JSON.parse(artstationkeyVal)
  let artstationheaders = jsonheaders['Cookie'].replace(/xz_jkd_appkey=\w+!\w+!\d.\d.\d/, `xz_jkd_appkey=${openid}!iOS!${appversion}`)
  let useragent = jsonheaders['User-Agent']
  return new Promise((resolve, reject) => {
    let url = {
      url: `${arturl3}`,
      body: ``,
      headers: {
        'Cookie': `${artstationheaders}`,
        'Accept-Encoding': `gzip, deflate`,
        'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
        'Connection': `keep-alive`,
        'Host': `wlapp.ccdy.cn`,
        'User-Agent': `${useragent}`,
        'Upgrade-Insecure-Requests': `1`,
        'Accept-Language': `zh-cn`
      },
    };

    $.get(url, async (err, resp, data) => {
      resolve();
    });
  });
}

//artdetail
async function artdetail(jsessionid, videoid, videolistid) {
  let artdetailtime = artdetailbodyVal.replace(/time%22%20%3A%20%22\d+/, `time%22%20%3A%20%22${todaytimes}`)
  let artdetailbodyrp = artdetailtime.replace(/%22artid%22%20%3A%20%22\d+/, `%22artid%22%20%3A%20%22${videoid}`)
  let artdetailbody = artdetailbodyrp.replace(/%22request_id%22%20%3A%20%22\d+/, `%22request_id%22%20%3A%20%22${videolistid}`)
  let jsonheaders = JSON.parse(artdetailkeyVal)
  let artdetailheaders = jsonheaders['Cookie'].replace(/JSESSIONID=\w+/, `JSESSIONID=${jsessionid}`)
  let useragent = jsonheaders['User-Agent']
  return new Promise((resolve) => {
    let url = {
      url: `http://app.zhongchuanjukan.com/jkd/newmobile/artDetail.action`,
      body: artdetailbody,
      headers: {
        'Cookie': `${artdetailheaders}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate`,
        'Host': `app.zhongchuanjukan.com`,
        'User-Agent': `${useragent}`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//readaccount
async function readAccount(jsessionid, rdid) {
  return new Promise((resolve) => {
    let readaccountbody = readaccountbodyVal.replace(/time%22%20%3A%20%22\d+/, `time%22%20%3A%20%22${todaytimes}`)
    let readidbody = readaccountbody.replace(/artid%22%20%3A%20%22\d+/, `artid%22%20%3A%20%22${rdid}`)
    let decodereadidbody = decodeURIComponent(readidbody)
    let jsonheaders = JSON.parse(readaccountkeyVal)
    let readaccountheaders = jsonheaders['Cookie'].replace(/JSESSIONID=\w+/, `JSESSIONID=${jsessionid}`)
    let useragent = jsonheaders['User-Agent']
    //$.log(`\n【useragent】:${useragent}\n`);
    let url = {
      url: `http://app.zhongchuanjukan.com/jkd/account/readAccount.action`,
      body: readidbody,
      headers: {
        'Cookie': `${readaccountheaders}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate`,
        'Host': `app.zhongchuanjukan.com`,
        'User-Agent': `${useragent}`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if (data.ret == "fail") {
              $.log(`😩${data.rtn_msg} `);
            } else {
              $.log(`🙇‍♂️本次阅读获得:${data.profit}红豆🍄 `);
              tz += `【本次阅读】:获得${data.profit}红豆🍄\n`
            }

          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//videoreadaccount
async function videoAccount(jsessionid, videoid) {
  return new Promise((resolve) => {
    let videoreadaccountbody = videoreadaccountbodyVal.replace(/time%22%20%3A%20%22\d+/, `time%22%20%3A%20%22${todaytimes}`)
    let videoreadidbody = videoreadaccountbody.replace(/artid%22%20%3A%20%22\d+/, `artid%22%20%3A%20%22${videoid}`)
    let videodecodereadidbody = decodeURIComponent(videoreadidbody)
    let jsonheaders = JSON.parse(videoreadaccountkeyVal)
    let videoreadaccountheaders = jsonheaders['Cookie'].replace(/JSESSIONID=\w+/, `JSESSIONID=${jsessionid}`)
    let useragent = jsonheaders['User-Agent']
    let url = {
      url: `http://app.zhongchuanjukan.com/jkd/account/readAccount.action`,
      body: videoreadidbody,
      headers: {
        'Cookie': `${videoreadaccountheaders}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate`,
        'Host': `app.zhongchuanjukan.com`,
        'User-Agent': `${useragent}`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if (data.ret == "fail") {
              $.log(`😩${data.rtn_msg} `);
            } else {
              $.log(`🙇‍♂️本次阅读获得:${data.profit}红豆🍄 `);
              tz += `【本次观看】:获得${data.profit}红豆🍄\n`
            }
            //tz += `【】:${data.retmsg}\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//
function invite() {
  return new Promise((resolve, reject) => {
    let inviteurl = {
      url: ``,
      headers: {
        Cookie: cookieval
      }
    }
    $.get(inviteurl, (error, resp, data) => {
      if (error) {
        //$.log("响应错误")
      }
      resolve()
    })
  })
}


////////////////////////////////////////////////////////////////////
function Jsname() {
  $.log(`╭╮╭╮　╭╮　　　╭┉┉╮　╭┉┉╮　╭┉┉╮`)
  $.log(`┋┋┋┋　┋┋　　　┋╭╮┋　┋╭╮┋　┋╭╮┋`)
  $.log(`┋╰╯┋　┋┋　　　┋╰╯┋　┋╰╯┋　┋╰╯┋`)
  $.log(`┋┋┋┋　┋┋　　　┋╭╮┋　┋╭┉╯　┋╭┉╯`)
  $.log(`┋  ┋　┋╰┉╮   ┋┋┋┋　┋┋　  ┋┋　`)
  $.log(`╰╰╯╯　╰┉┉╯   ╰╯╰╯　╰╯　  ╰╯　`)
}
//解码URIcode
function URIcodetranslate(code) {
  return decodeURIComponent(code);
}
//毫秒时间戳改日期 2021.01.08 05:30:13
function time(time) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}
//安全获取
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`⛔️服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
//毫秒时间戳转时间 20200108
function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m + d;
};

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
