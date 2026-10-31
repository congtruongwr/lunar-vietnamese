# Nhật Ký Thay Đổi (Changelog)

Tất cả các thay đổi quan trọng của dự án **`lunar-vietnamese`** được ghi nhận tại tập tin này.

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
  - Hỗ trợ đầy đủ các môi trường: CDN trực tiếp qua jsDelivr (cả bản đầy đủ `lunar.js` lẫn bản nén tự động `lunar.min.js`), Node.js CommonJS (require), ES Modules (import), và TypeScript.

### 📄 Giấy Phép & Tác Quyền

- Chuyển đổi giấy phép sang **Apache License 2.0** (`Copyright 2026 congtruongwr`).
- Định danh tác quyền chính thức: **congtruongwr**.
- Kho lưu trữ mã nguồn: [https://github.com/congtruongwr/lunar-vietnamese](https://github.com/congtruongwr/lunar-vietnamese).
