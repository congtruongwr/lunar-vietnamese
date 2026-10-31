# lunar-vietnamese [![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

**`lunar-vietnamese`** là thư viện JavaScript không phụ thuộc bên ngoài (zero-dependencies), chuyên dùng để tính toán và tra cứu:

- **Dương lịch (Solar)** & **Âm lịch Việt Nam (Lunar)**
- **Can Chi, 12 Con Giáp** chuẩn văn hóa Việt Nam (**Mão = Mèo**, thay vì Thỏ như Trung Quốc)
- **24 Tiết khí, 60 Hoa Giáp, Bát tự, Ngũ hành, Thập thần**
- **Kiến trừ thập nhị trực, Nhị thập bát tú, Bát quái, Phương vị cát thần (Tài thần, Hỷ thần, Phúc thần)**
- **Bành Tổ bách kỵ, Ngày giờ hoàng đạo/hắc đạo, Nạp âm, Xung sát**

Dự án được duy trì và phát triển bởi **congtruongwr** trên nhánh `main`.

---

## 🚀 Cài Đặt & Sử Dụng

### 1. Trong Node.js (CommonJS)

```bash
npm install lunar-vietnamese
```

```javascript
const { Solar, Lunar, I18n } = require("lunar-vietnamese");

// Mặc định ngôn ngữ khởi tạo là tiếng Việt ('vi')
const solar = Solar.fromYmd(2026, 10, 31);
console.log(solar.toFullString());
// Kết quả: 2026-10-31 00:00:00 Thứ Bảy (Đêm Halloween) Bọ Cạp

const lunar = solar.getLunar();
console.log(lunar.toFullString());
// Kết quả: Hai Mươi Hai tháng Chín năm Hai Không Hai Sáu năm Bính Ngọ(Ngựa) tháng Mậu Tuất(Chó) ngày Mậu Dần(Hổ) giờ Tý(Chuột) Nạp âm[Thiên Hà Thủy Bình Địa Mộc Thành Đầu Thổ Tang Đố Mộc] Thứ Bảy Tây phương Bạch Hổ Nhị thập bát tú[Vị Thổ Heo rừng](Cát) Bành Tổ bách kỵ[Mậu không nhận ruộng chủ ruộng bất an Dần không tế tự quỷ thần không hưởng] Hỷ thần hướng[Tốn](Đông Nam) Dương quý thần hướng[Cấn](Đông Bắc) Âm quý thần hướng[Khôn](Tây Nam) Phúc thần hướng[Cấn](Đông Bắc) Tài thần hướng[Khảm](Chính Bắc) Xung[(Nhâm Thân) Khỉ] Sát[Bắc]
```

### 2. Sử dụng trực tiếp trên trình duyệt (HTML)

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="utf-8" />
    <title>Tra cứu Âm Lịch Việt Nam</title>
    <script src="lunar.js"></script>
  </head>
  <body>
    <script>
      // Lấy ngày hiện tại
      var today = Lunar.fromDate(new Date());
      document.write("<h3>Âm lịch: " + today.toFullString() + "</h3>");
      document.write(
        "<p>Dương lịch: " + today.getSolar().toFullString() + "</p>",
      );
    </script>
  </body>
</html>
```

### 3. Đa ngôn ngữ (I18n)

Thư viện hỗ trợ chuyển đổi linh hoạt giữa 3 ngôn ngữ: tiếng Việt (`vi`), tiếng Trung giản thể (`chs`), và tiếng Anh (`en`):

```javascript
const { I18n, Lunar } = require("lunar-vietnamese");

// Chuyển sang tiếng Anh
I18n.setLanguage("en");
console.log(Lunar.fromYmd(2026, 1, 1).toFullString());

// Chuyển sang tiếng Trung
I18n.setLanguage("chs");
console.log(Lunar.fromYmd(2026, 1, 1).toFullString());

// Chuyển lại tiếng Việt chuẩn
I18n.setLanguage("vi");
console.log(Lunar.fromYmd(2026, 1, 1).toFullString());
```

---

## 🌟 Tính Năng Đặc Biệt Cho Việt Nam

1. **Chuẩn 12 Con Giáp**: Con giáp thứ tư trong chu kỳ địa chi là **Mão (Mèo)**, thay vì con Thỏ của Trung Quốc.
2. **Ngôn ngữ mặc định**: Tự động hiển thị tiếng Việt chuẩn xác mà không cần cấu hình thêm.
3. **Đầy đủ nạp âm & thuật ngữ phong thủy**: Hơn 803 thuật ngữ thiên văn cổ học Á Đông được bản địa hóa chuẩn Hán-Việt.

---

## 📄 Bản Quyền & Giấy Phép

Phát hành dưới giấy phép [Apache License 2.0](LICENSE).
Tác quyền duy trì và tinh chỉnh: **congtruongwr** (kế thừa thuật toán thiên văn nền tảng của 6tail).
