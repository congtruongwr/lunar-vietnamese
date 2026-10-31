# lunar-vietnamese [![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

lunar-vietnamese is a zero-dependency calendar library for Solar and Vietnamese Lunar calendar.

[Tiếng Việt](README.md)

## Example

### Normal Page

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script src="lunar.js"></script>
    <script>
      var solar = Solar.fromYmd(1986, 5, 29);
      console.log(solar.toFullString());
      console.log(solar.getLunar().toFullString());
    </script>
  </body>
</html>
```

### npm

    npm init
    npm install lunar-vietnamese

    //test.js
    const {Solar} = require('lunar-vietnamese')
    //const {Solar, Lunar, HolidayUtil} = require('lunar-javascript')

    let solar = Solar.fromYmd(1986,5,29);
    console.log(solar.toFullString());
    console.log(solar.getLunar().toFullString());

    node test.js

### Node.js

    //test.js
    const {Solar} = require('./lunar.js')
    //const {Solar, Lunar, HolidayUtil} = require('./lunar.js')

    let solar = Solar.fromYmd(1986,5,29);
    console.log(solar.toFullString());
    console.log(solar.getLunar().toFullString());

    node test.js

Output:

    1986-05-29 00:00:00 星期四 双子座
    一九八六年四月廿一 丙寅(虎)年 癸巳(蛇)月 癸酉(鸡)日 子(鼠)时 纳音[炉中火 长流水 剑锋金 桑柘木] 星期四 北方玄武 星宿[斗木獬](吉) 彭祖百忌[癸不词讼理弱敌强 酉不会客醉坐颠狂] 喜神方位[巽](东南) 阳贵神方位[巽](东南) 阴贵神方位[震](正东) 福神方位[兑](正西) 财神方位[离](正南) 冲[(丁卯)兔] 煞[东]

## Documentation

Please visit [https://6tail.cn/calendar/api.html](https://6tail.cn/calendar/api.html "https://6tail.cn/calendar/api.html")
