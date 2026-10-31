# Nhật Ký Thay Đổi (Changelog)

Tất cả các thay đổi quan trọng của dự án **`lunar-vietnamese`** được ghi nhận tại tập tin này.

## [1.7.7] - 2026-10-31 (Bản địa hóa Việt Nam - congtruongwr)

### ✨ Tính Năng & Bản Địa Hóa Mới
- **Bản địa hóa tiếng Việt toàn diện (`vi`)**:
  - Tích hợp bộ từ điển Hán-Việt chuẩn xác với hơn 803 thuật ngữ cổ học thiên văn, âm dương, ngũ hành, can chi, 24 tiết khí, 60 hoa giáp, 28 sao nhị thập bát tú, trực kiến trừ, nạp âm và bành tổ bách kỵ.
  - Chuẩn hóa 12 Con Giáp theo văn hóa Việt Nam: địa chi **Mão (Mèo)** thay thế cho con Thỏ.
  - Thiết lập tiếng Việt (`vi`) làm ngôn ngữ mặc định của thư viện (`_defaultLang = 'vi'`).
  - Tự động định dạng khoảng cách chuẩn cho chuỗi Can Chi và Nạp âm tiếng Việt (ví dụ: "Bính Ngọ", "Thiên Hà Thủy").
- **Giao diện trải nghiệm**:
  - Bổ sung trang `demo.html` trực quan tra cứu lịch Âm - Dương chạy trực tiếp không cần cài đặt.
- **Tương thích & Đóng gói**:
  - Hỗ trợ đầy đủ các môi trường: CDN trực tiếp qua jsDelivr, Node.js CommonJS (`require`), và Modern Frontend ES Module / TypeScript (`import`).

### 📄 Giấy Phép & Tác Quyền
- Chuyển đổi giấy phép sang **Apache License 2.0** (`Copyright 2026 congtruongwr`).
- Định danh tác quyền chính thức: **congtruongwr**.
- Kho lưu trữ mã nguồn: [https://github.com/congtruongwr/lunar-vietnamese](https://github.com/congtruongwr/lunar-vietnamese).

---

## Lịch Sử Phiên Bản Tiền Thân

## [1.7.7] - 2025-11-05
- Thêm dữ liệu ngày nghỉ lễ năm 2026.

## [1.7.6] - 2025-10-21
- Sửa lỗi tính toán cát thần / hung thần.
- Sửa lỗi can chi cho tháng nhuận âm lịch và các tháng kế tiếp.

## [1.7.5] - 2025-10-01
- Sửa lỗi chính tả tiết khí.
- Cập nhật tham số delta-T.
- Tối ưu hóa gợi ý cát thần nghi khu, hung thần nghi kỵ.

## [1.7.4] - 2025-09-07
- Sửa lỗi chuyển đổi Bát tự sang Dương lịch trong các mốc thời gian đặc biệt.

## [1.7.3] - 2025-04-29
- Sửa lỗi tính toán Thân cung Bát tự.

## [1.7.2] - 2025-04-07
- Sửa lỗi tính toán Thân cung Bát tự.

## [1.7.1] - 2025-03-05
- Điều chỉnh trường phái mặc định cho nghi kỵ hàng ngày.
- Cập nhật tham số delta-T sau năm 2018.

## [1.7.0] - 2025-02-12
- Sửa lỗi chính tả nghi kỵ hàng ngày.
- Loại bỏ các mục trùng lặp trong danh sách nghi kỵ.

## [1.6.13] - 2024-11-12
- Thêm dữ liệu ngày nghỉ lễ năm 2025.

## [1.6.12] - 2024-03-17
- Sửa lỗi chuyển đổi Bát tự sang Dương lịch.

## [1.6.11] - 2024-02-29
- Sửa lỗi xác định tiết khí kế tiếp khi ngày hiện tại đúng vào ngày tiết khí.
- Hoàn thiện thông tin tác giả trong `package.json`.
- Sửa lỗi trùng lặp nghi kỵ hàng ngày.
- Sửa lỗi chuyển đổi Bát tự sang Dương lịch.

## [1.6.10] - 2024-02-06
- Tối ưu hóa thuật toán sắp xếp kết quả chuyển đổi Bát tự sang Dương lịch theo trình tự thời gian, tăng tốc độ xử lý.
