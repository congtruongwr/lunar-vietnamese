# lunar-vietnamese [![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

lunar-vietnamese is a zero-dependency calendar library for Solar and Vietnamese Lunar calendar.

[Tiếng Việt](README.md)

## Example

### Normal Page (HTML / CDN)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <!-- Load directly via jsDelivr CDN from GitHub -->
    <script src="https://cdn.jsdelivr.net/gh/congtruongwr/lunar-vietnamese@main/lunar.js"></script>
    <!-- Or load local script: <script src="lunar.js"></script> -->
  </head>
  <body>
    <script>
      var solar = Solar.fromYmd(1986, 5, 29);
      console.log(solar.toFullString());
      console.log(solar.getLunar().toFullString());
    </script>
  </body>
</html>
```

### npm (via GitHub)

Install directly from GitHub repository (no npmjs registry required):

    npm init -y
    npm install github:congtruongwr/lunar-vietnamese

    //test.js
    const {Solar} = require('lunar-vietnamese')

    let solar = Solar.fromYmd(1986,5,29);
    console.log(solar.toFullString());
    console.log(solar.getLunar().toFullString());

    node test.js

### Node.js (Direct File)

    //test.js
    const {Solar} = require('./lunar.js')

    let solar = Solar.fromYmd(1986,5,29);
    console.log(solar.toFullString());
    console.log(solar.getLunar().toFullString());

    node test.js

Output:

    1986-05-29 00:00:00 Thứ Năm Song Tử
    Hai Mươi Mốt tháng Tư năm Một Chín Tám Sáu năm Bính Dần(Hổ) tháng Quý Tỵ(Rắn) ngày Quý Dậu(Gà) giờ Tý(Chuột) Nạp âm[Lư Trung Hỏa Trường Lưu Thủy Kiếm Phong Kim Tang Đố Mộc] Thứ Năm Bắc phương Huyền Vũ Nhị thập bát tú[Đẩu Mộc Giải](Cát) Bành Tổ bách kỵ[Quý không kiện tụng lý yếu địch mạnh Dậu không đón khách say xỉn cuồng điên] Hỷ thần hướng[Tốn](Đông Nam) Dương quý thần hướng[Tốn](Đông Nam) Âm quý thần hướng[Chấn](Chính Đông) Phúc thần hướng[Cấn](Đông Bắc) Tài thần hướng[Ly](Chính Nam) Xung[(Đinh Mão) Mèo] Sát[Đông]

## Documentation

Please refer to [README.md](README.md) or visit [https://github.com/congtruongwr/lunar-vietnamese](https://github.com/congtruongwr/lunar-vietnamese) for detailed API usage and documentation.

## License & Copyright

Released under the [Apache License 2.0](LICENSE).
Maintained and developed by **congtruongwr**.
