# Nhật Ký Thay Đổi (Changelog)

Tất cả các thay đổi quan trọng của dự án **`lunar-vietnamese`** được ghi nhận tại tập tin này.

## [2.0.0] - 2026-11-14

### Added

- **API thuần Việt hạng nhất**: Bổ sung 15 lớp alias tiếng Việt (`DuongLich`, `AmLich`, `BatTu`, `CuuTinh`, `PhatLich`, `DaoLich`, `TuanDuongLich`, `ThangDuongLich`, `QuyDuongLich`, `NuaNamDuongLich`, `NamDuongLich`, `ThangAmLich`, `NamAmLich`, `GioAmLich`, `DaNgonNgu`) trong `lunar.js`, `lunar.min.js`, `index.js`, và `index.d.ts`.
- **21 phương thức thuần Việt** trên `Solar`/`DuongLich` (`getAmLich`, `getThu`, `getCungHoangDao`) và `Lunar`/`AmLich` (`getDuongLich`, `getCanChiNam`, `getCanChiThang`, `getCanChiNgay`, `getCanChiGio`, `getConGiap`, `getConGiapNam`, `getConGiapThang`, `getConGiapNgay`, `getConGiapGio`, `getTietKhi`, `getNapAmNam`, `getNapAmThang`, `getNapAmNgay`, `getNapAmGio`, `getBatTu`, `getViecNenLam`, `getViecKiengKy`).
- Xuất bản sẵn `lunar.min.js` ở thư mục gốc kèm header bản quyền `congtruongwr`.
- Thêm `engines.node >= 18.0.0`, `files` sạch cho npm publish, và bộ test `__tests__/VietnameseApiAliases.test.js`.

### Fixed

- Hỗ trợ tiết `"Thanh Minh"` / `"Fresh Green"` trong `Solar.getSalaryRate()`.
- Hỗ trợ Can Chi tiếng Việt có dấu cách (`"Bính Ngọ"`) và `"en"`/`"chs"` trong `Solar.fromBaZi(...)`.
- Hiển thị tháng nhuận `"Nhuận ..."` trong `Lunar.getMonthInChinese()`.
- Việt hóa `toFullString()` của `SolarWeek`, `SolarMonth`, `SolarSeason`, `SolarHalfYear`, `SolarYear`, `LunarYear`, và `LunarMonth.toString()`.
- Sửa lỗi `LunarMonth` gọi nhầm `LunarUtil.POSITION_DESC.get(...)` và hardcode chữ Hán trong `getPositionTaiSui()`.
- Sửa ghép chuỗi Can Chi thiếu dấu cách khi `"vi"` ở `LunarYear`, `LunarMonth`, `EightChar` (`getTaiYuan`, `getTaiXi`, `getMingGong`, `getShenGong`, `buildLiuYue`, `*WuXing`, `getDayShiShenGan`), và `LunarTime` (`getGanZhi`, `getChongDesc`) giúp tra cứu `Nạp âm` và `Cửu tinh` chính xác.

### Changed

- Loại bỏ hoàn toàn 23 tệp test Jest cũ bằng tiếng Trung, `.DS_Store`, và `devDependencies.jest`.
- Cập nhật `demo.html`, `README.md`, `README_EN.md` theo thương hiệu và ví dụ lịch Việt Nam của `congtruongwr`.

## [1.7.7] - 2026-10-31 (Bản địa hóa Việt Nam - congtruongwr)

### ✨ Tính Năng & Bản Địa Hóa Mới

- **Bản địa hóa tiếng Việt toàn diện (`vi`)**:
  - Tích hợp bộ từ điển chuẩn xác với hơn 803 thuật ngữ cổ học thiên văn, âm dương, ngũ hành, can chi,...
  - Chuẩn hóa 12 Con Giáp theo văn hóa Việt Nam: địa chi **Mão (Mèo)** thay thế cho con Thỏ.
  - Thiết lập tiếng Việt (`vi`) làm ngôn ngữ mặc định của thư viện (`_defaultLang = 'vi'`).
  - Tự động định dạng khoảng cách chuẩn cho chuỗi Can Chi và Nạp âm tiếng Việt (ví dụ: "Bính Ngọ", "Thiên Hà Thủy").
- **Giao diện trải nghiệm**:
  - Bổ sung trang `demo.html` trực quan tra cứu lịch Âm - Dương chạy trực tiếp không cần cài đặt.
- **Tương thích & Đóng gói**:
  - Bổ sung file định kiểu tĩnh `index.d.ts` cho các dự án TypeScript (React, Next.js, Vite, NestJS,...).
  - Hỗ trợ đầy đủ các môi trường: CDN trực tiếp qua jsDelivr, Node.js CommonJS, ES Modules,...

### 📄 Giấy Phép & Tác Quyền

- Chuyển đổi giấy phép sang **Apache License 2.0** (`Copyright 2026 congtruongwr`).
- Định danh tác quyền chính thức: **congtruongwr**.
- Kho lưu trữ mã nguồn: [https://github.com/congtruongwr/lunar-vietnamese](https://github.com/congtruongwr/lunar-vietnamese).
