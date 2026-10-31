# Thiết Kế Kỹ Thuật: Bản Quyền & Việt Hóa Dự Án lunar-vietnamese

- **Ngày tạo**: 2026-10-31
- **Chủ sở hữu / Tác giả**: `congtruongwr`
- **Nhánh chính**: `main`
- **Tên dự án**: `lunar-vietnamese`

---

## 1. Mục Đích & Bối Cảnh (Intent & Context)

Thư mục hiện tại chứa mã nguồn của thư viện `lunar-javascript` (phiên bản `1.7.7`) ban đầu do tác giả `6tail` phát triển, hỗ trợ tính toán lịch âm dương, thiên văn, bát tự, phong thủy Á Đông nhưng chỉ hỗ trợ tiếng Trung (`chs`) và tiếng Anh (`en`), chưa có Git và chưa bản địa hóa cho văn hóa Việt Nam.

Mục tiêu là:
1. Chuyển đổi và thiết lập dự án thành repository độc lập thuộc quyền sở hữu của **`congtruongwr`** trên nhánh **`main`**.
2. Bản địa hóa toàn diện sang tiếng Việt (`vi`) qua kiến trúc `I18n` của thư viện, tôn trọng đặc trưng văn hóa lịch pháp Việt Nam (ví dụ: con giáp Mão là **Mèo** thay vì Thỏ).
3. Đảm bảo tính toán thiên văn chính xác, bảo toàn tương thích ngược 100%, sẵn sàng chạy test và demo.

---

## 2. Mục Tiêu & Phạm Vi (Goals & Constraints)

### Mục tiêu (Goals):
* **Git Repository**: Khởi tạo Git repository sạch, cấu hình local author `congtruongwr`, tạo commit ban đầu trên nhánh `main`.
* **Project Metadata**:
  * Đổi tên package trong `package.json` thành `lunar-vietnamese`.
  * Cập nhật thông tin tác giả thành `congtruongwr`.
  * Bổ sung script test, build, lint nếu cần.
* **Bộ Từ Điển Tiếng Việt (`vi`)**:
  * Tích hợp bộ từ điển tiếng Việt chuẩn xác vào `I18n._messages.vi` trong `lunar.js` với 803+ định nghĩa khớp với `chs`:
    * Thiên Can: Giáp, Ất, Bính, Đinh, Mậu, Kỷ, Canh, Tân, Nhâm, Quý.
    * Địa Chi: Tý, Sửu, Dần, Mão, Thìn, Tỵ, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi.
    * 12 Con Giáp: Chuột, Trâu, Hổ, **Mèo** (Việt Nam), Rồng, Rắn, Ngựa, Dê, Khỉ, Gà, Chó, Lợn.
    * 24 Tiết Khí: Lập Xuân, Vũ Thủy, Kinh Trập, Xuân Phân, Thanh Minh, Cốc Vũ, Lập Hạ, Tiểu Mãn, Mang Chủng, Hạ Chí, Tiểu Thử, Đại Thử, Lập Thu, Xử Thử, Bạch Lộ, Thu Phân, Hàn Lộ, Sương Giáng, Lập Đông, Tiểu Tuyết, Đại Tuyết, Đông Chí, Tiểu Hàn, Đại Hàn.
    * 60 Hoa Giáp, Bát Quái, Thập Thần, Thập Nhị Trực Kiến Trừ, Nhị Thập Bát Tú, Nạp Âm, Thần Sát, Phương Vị Tài/Hỷ/Phúc Thần, Nghi Kỵ Ngày Giờ...
  * Thiết lập ngôn ngữ mặc định là `vi` khi khởi tạo (`var _defaultLang = "vi"`), đồng thời bảo lưu `chs` và `en`.
* **Kiểm Thử (Deterministic Verification)**:
  * Viết test Jest kiểm tra tra cứu `I18n.getMessage` cho ngôn ngữ `vi`.
  * Test tính toán hiển thị chuỗi ngày âm dương tiếng Việt (ngày, tháng, năm, can chi, con giáp, tiết khí).
* **Tài Liệu & Demo**:
  * Cập nhật `README.md` bằng tiếng Việt hướng dẫn cài đặt và sử dụng `lunar-vietnamese`.
  * Cập nhật `demo.html` hiển thị giao diện tiếng Việt.

### Phi mục tiêu (Non-Goals):
* Không sửa đổi các công thức giải thuật thiên văn học cơ bản của thư viện gốc nhằm đảm bảo tính chính xác tuyệt đối.
* Không xóa bỏ các ngôn ngữ `chs` và `en` để duy trì khả năng chuyển đổi đa ngôn ngữ linh hoạt.

---

## 3. Các Phương Án Đã Cân Nhắc (Approaches)

* **Phương án 1 (Đã chọn)**: Mở rộng từ điển `I18n` của `lunar.js` với bộ từ khóa `vi`, đặt `_defaultLang = "vi"`, khởi tạo Git `main` với author `congtruongwr`.
  * *Lý do chọn*: An toàn, chuẩn cấu trúc sẵn có của tác giả gốc, không làm gãy các hàm tính toán, hỗ trợ cả 3 ngôn ngữ khi cần.
* **Phương án 2 (Loại bỏ)**: Thay thế cứng (hardcode) tiếng Trung trong toàn bộ file `lunar.js`.
  * *Lý do loại bỏ*: Dễ gây lỗi tính toán toán học/thiên văn, phá vỡ tính tương thích ngược và không thể mở rộng.

---

## 4. Kế Hoạch Triển Khai (Next Steps)

1. Phê duyệt tài liệu thiết kế này.
2. Chuyển sang kỹ năng `writing-plans` để lập danh sách các bước TDD chi tiết.
3. Thực thi theo kế hoạch với đầy đủ kiểm thử xác thực và dọn dẹp task ngầm.
