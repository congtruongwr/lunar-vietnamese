# lunar-vietnamese

Thư viện JavaScript / TypeScript không phụ thuộc bên ngoài dành riêng cho Việt Nam.

Phát triển và duy trì bởi [**congtruongwr**](https://github.com/congtruongwr/lunar-vietnamese) theo giấy phép **Apache-2.0**.

## Điểm mới ở v2.0.0

- API thuần Việt Nam hạng nhất và đảm bảo tương thích 100%.
- Hoàn thiện bản địa hóa không gian tra cứu.
- Sẵn sàng dùng ngay trên trình duyệt.

## Cài đặt

### Node.js / npm

```bash
npm install lunar-vietnamese
```

### Trình duyệt (CDN / Local)

```html
<script src="https://cdn.jsdelivr.net/npm/lunar-vietnamese@2.0.0/lunar.min.js"></script>
```

## Sử dụng nhanh

### 1. API Thuần Việt (khuyến nghị)

```js
const { DuongLich, AmLich, DaNgonNgu } = require("lunar-vietnamese");

// Ngôn ngữ mặc định đã là "vi"
DaNgonNgu.setLanguage("vi");

// Ví dụ: Mùng 1 Tết Bính Ngọ 2026 (17/02/2026 Dương lịch)
const dl = DuongLich.fromYmd(2026, 2, 17);
const al = dl.getAmLich();

console.log(dl.getThu()); // "Thứ Ba"
console.log(dl.getCungHoangDao()); // "Bảo Bình"
console.log(al.toString()); // "Mùng Một tháng Giêng năm Hai Không Hai Sáu"
console.log(al.getCanChiNam()); // "Bính Ngọ"
console.log(al.getConGiap()); // "Ngựa"
console.log(al.getCanChiNgay()); // "Nhâm Tuất"
console.log(al.getNapAmNgay()); // "Đại Hải Thủy"
console.log(al.getViecNenLam()); // ["Tế tự", "Tắc huyệt", ...]
console.log(al.getViecKiengKy()); // ["Giá thú (Cưới hỏi)", "Nhập trạch", ...]

// Chuyển ngược từ Âm lịch sang Dương lịch
const ngayTet = AmLich.fromYmd(2026, 1, 1);
console.log(ngayTet.getDuongLich().toYmd()); // "2026-02-17"
```

### 2. API Tương thích (`Solar` / `Lunar`)

```js
const { Solar, Lunar } = require("lunar-vietnamese");

const solar = Solar.fromYmd(2026, 10, 31);
const lunar = solar.getLunar();

console.log(solar.toFullString());
// 2026-10-31 00:00:00 Thứ Bảy (Đêm Halloween) Bọ Cạp

console.log(lunar.getYearShengXiao(), lunar.getDayInGanZhi());
// Ngựa Mậu Dần

// Chuyển đổi đa ngôn ngữ Runtime: "vi" | "en" | "chs"
const { I18n } = require("lunar-vietnamese");
I18n.setLanguage("en");
console.log(Solar.fromYmd(2026, 2, 17).getLunar().getYearShengXiao());
I18n.setLanguage("vi");
```

### 3. TypeScript

```ts
import { DuongLich, AmLich, Solar, Lunar } from "lunar-vietnamese";

const dl: DuongLich = DuongLich.fromYmd(2026, 2, 17);
const al: AmLich = dl.getAmLich();
const solar: Solar = al.getDuongLich();
const lunar: Lunar = solar.getLunar();

console.log(al.getCanChiNgay(), lunar.getDayNaYin());
```

## Bảng ánh xạ lớp API Thuần Việt

| Tên lớp Thuần Việt | Lớp chuẩn       | Mô tả                                |
| ------------------ | --------------- | ------------------------------------ |
| `DuongLich`        | `Solar`         | Ngày Dương lịch                      |
| `AmLich`           | `Lunar`         | Ngày Âm lịch                         |
| `BatTu`            | `EightChar`     | Tứ trụ / Bát tự                      |
| `CuuTinh`          | `NineStar`      | Cửu tinh                             |
| `PhatLich`         | `Foto`          | Phật lịch                            |
| `DaoLich`          | `Tao`           | Đạo lịch                             |
| `TuanDuongLich`    | `SolarWeek`     | Tuần Dương lịch                      |
| `ThangDuongLich`   | `SolarMonth`    | Tháng Dương lịch                     |
| `QuyDuongLich`     | `SolarSeason`   | Quý Dương lịch                       |
| `NuaNamDuongLich`  | `SolarHalfYear` | Nửa năm Dương lịch                   |
| `NamDuongLich`     | `SolarYear`     | Năm Dương lịch                       |
| `ThangAmLich`      | `LunarMonth`    | Tháng Âm lịch                        |
| `NamAmLich`        | `LunarYear`     | Năm Âm lịch                          |
| `GioAmLich`        | `LunarTime`     | Giờ Âm lịch                          |
| `DaNgonNgu`        | `I18n`          | Quản lý ngôn ngữ (`vi`, `en`, `chs`) |

## Kiểm thử

```bash
npm test
```

## Tác giả & Giấy phép

- **Chủ sở hữu:** [congtruongwr](https://github.com/congtruongwr)
- **Kho mã nguồn:** [https://github.com/congtruongwr/lunar-vietnamese](https://github.com/congtruongwr/lunar-vietnamese)
- **Giấy phép:** [Apache License 2.0](LICENSE)
