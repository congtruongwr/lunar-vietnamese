# lunar-vietnamese Customization & Localization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Chuyển đổi và thiết lập dự án thành repository độc lập mang tên `lunar-vietnamese` của tác giả `congtruongwr` trên nhánh `main`, tích hợp trọn vẹn từ điển tiếng Việt (`vi`) cho âm lịch và văn hóa Việt Nam (Mão = Mèo), kèm bộ kiểm thử tự động.

**Architecture:** Mở rộng module `I18n` trong `lunar.js` bằng cách bổ sung namespace ngôn ngữ `vi` bao gồm toàn bộ 803 khóa thuật ngữ âm lịch (Can Chi, 12 con giáp, 24 tiết khí, Kiến trừ thập nhị trực, Nhị thập bát tú, Hoàng hắc đạo, Bát tự, Phương vị thần sát) và thiết lập ngôn ngữ mặc định thành `vi`. Cấu hình Git repository cục bộ với branch chính `main` và user `congtruongwr`.

**Tech Stack:** JavaScript (Node.js CommonJS), Jest / Node test runner, Git.

**Spec:** [`docs/superpowers/specs/2026-10-31-lunar-vietnamese-customization-design.md`](file:///Users/congtruongwr/Downloads/Code/lunar-vietnamese/docs/superpowers/specs/2026-10-31-lunar-vietnamese-customization-design.md)

## Global Constraints

- Bảo toàn nguyên vẹn 100% các thuật toán và công thức tính toán thiên văn của thư viện gốc trong `lunar.js`.
- Ngôn ngữ mặc định `_defaultLang` khi tải thư viện là `"vi"`.
- Giữ nguyên các định nghĩa ngôn ngữ hiện có (`chs` và `en`) để đảm bảo khả năng chuyển đổi đa ngôn ngữ.
- Con giáp `sx.mao` trong tiếng Việt là `"Mão (Mèo)"` hoặc `"Mèo"` phù hợp với 12 con giáp Việt Nam.

## Review Focus

1. Gọi `I18n.setLanguage('vi')` và `I18n.getMessage(...)` với các khóa phổ biến (`tg.jia`, `dz.zi`, `sx.mao`, `jq.liChun`, `zx.jian`) trả về đúng chuỗi tiếng Việt.
2. `Solar.fromYmd(2026, 10, 31).getLunar().toFullString()` hiển thị đúng chuỗi thông tin âm lịch bằng tiếng Việt mà không dính chữ Hán.
3. Chuyển đổi qua lại giữa `vi`, `chs`, `en` không gây lỗi `undefined` hoặc vỡ chuỗi.
4. `package.json` có `name: "lunar-vietnamese"`, `author: "congtruongwr"`, và repository trỏ tới congtruongwr.
5. Git repository được khởi tạo thành công trên branch `main` với commit sạch sẽ ghi nhận tác giả `congtruongwr`.

---

### Task 1: Khởi Tạo Git Repository & Cập Nhật Metadata Dự Án

**Files:**
- Modify: `package.json`
- Create / Init: `.git`

**Interfaces:**
- Consumes: Cấu hình hệ thống người dùng `congtruongwr`.
- Produces: `package.json` với `name: "lunar-vietnamese"`, author `congtruongwr`, và git branch `main`.

- [ ] **Step 1: Viết test kiểm tra thông tin package.json**

Tạo file `__tests__/PackageMeta.test.js`:
```javascript
const pkg = require('../package.json');

test('package.json metadata belongs to congtruongwr', () => {
  expect(pkg.name).toBe('lunar-vietnamese');
  expect(pkg.author).toContain('congtruongwr');
});
```

- [ ] **Step 2: Chạy test để xác nhận test thất bại**

Run: `node -e "const pkg = require('./package.json'); if (pkg.name !== 'lunar-vietnamese' || !pkg.author.includes('congtruongwr')) { console.error('FAIL: Metadata not updated'); process.exit(1); }"`
Expected: FAIL với exit code 1.

- [ ] **Step 3: Cập nhật package.json và khởi tạo Git repository**

1. Cập nhật `package.json`:
   - `"name": "lunar-vietnamese"`
   - `"description": "lunar-vietnamese là thư viện tra cứu lịch Âm - Dương, Can Chi, Tiết khí, Con giáp, Hoàng đạo dành riêng cho Việt Nam."`
   - `"author": "congtruongwr"`
   - `"repository": { "type": "git", "url": "git+https://github.com/congtruongwr/lunar-vietnamese.git" }`
   - `"homepage": "https://github.com/congtruongwr/lunar-vietnamese"`
   - `"bugs": { "url": "https://github.com/congtruongwr/lunar-vietnamese/issues" }`
2. Khởi tạo Git repo và cấu hình:
   - `git init -b main`
   - `git config user.name "congtruongwr"`
   - `git config user.email "congtruongwr@users.noreply.github.com"`

- [ ] **Step 4: Chạy lại test xác nhận metadata đã đúng**

Run: `node -e "const pkg = require('./package.json'); if (pkg.name !== 'lunar-vietnamese' || !pkg.author.includes('congtruongwr')) { process.exit(1); } console.log('PASS: Metadata updated');"`
Expected: PASS

- [ ] **Step 5: Commit baseline ban đầu lên nhánh main**

```bash
git add package.json docs/ .gitignore .npmignore
git commit -m "chore: initialize repository for congtruongwr on branch main"
```

---

### Task 2: Xây Dựng Bộ Từ Điển Tiếng Việt (`vi`) Cho `I18n` Trong `lunar.js`

**Files:**
- Modify: `lunar.js` (khu vực `var I18n = ...`)
- Create: `__tests__/I18nVietnamese.test.js`

**Interfaces:**
- Consumes: Cấu trúc `_messages` hiện tại trong `lunar.js`.
- Produces: `I18n._messages.vi` với 803 khóa tiếng Việt chuẩn xác và `_defaultLang = "vi"`.

- [ ] **Step 1: Viết test thất bại cho bộ từ điển tiếng Việt**

Tạo `__tests__/I18nVietnamese.test.js`:
```javascript
const { I18n } = require('../lunar.js');

describe('Vietnamese I18n Dictionary', () => {
  test('default language should be vi', () => {
    expect(I18n.getLanguage()).toBe('vi');
  });

  test('contains core Vietnamese terms', () => {
    expect(I18n.getMessage('tg.jia')).toBe('Giáp');
    expect(I18n.getMessage('dz.zi')).toBe('Tý');
    expect(I18n.getMessage('sx.mao')).toBe('Mèo');
    expect(I18n.getMessage('jq.liChun')).toBe('Lập Xuân');
    expect(I18n.getMessage('zx.jian')).toBe('Kiến');
    expect(I18n.getMessage('jz.jiaZi')).toBe('Giáp Tý');
    expect(I18n.getMessage('bg.qian')).toBe('Càn');
    expect(I18n.getMessage('wx.jin')).toBe('Kim');
  });
});
```

- [ ] **Step 2: Chạy test để xác nhận test thất bại**

Run: `node -e "const { I18n } = require('./lunar.js'); if (I18n.getLanguage() !== 'vi' || I18n.getMessage('tg.jia') !== 'Giáp') { console.error('FAIL: Vietnamese I18n not implemented'); process.exit(1); }"`
Expected: FAIL với exit code 1.

- [ ] **Step 3: Triển khai từ điển `vi` và đặt ngôn ngữ mặc định thành `vi` trong `lunar.js`**

1. Trong `lunar.js`:
   - Đặt `var _defaultLang = "vi";`
   - Bổ sung định nghĩa `vi: { ... }` vào đối tượng `_messages` bên trong closure `I18n` với đầy đủ 803 thuật ngữ Hán-Việt/Việt chuẩn xác:
     - Can: Giáp, Ất, Bính, Đinh, Mậu, Kỷ, Canh, Tân, Nhâm, Quý
     - Chi: Tý, Sửu, Dần, Mão, Thìn, Tỵ, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi
     - Con giáp: Chuột, Trâu, Hổ, Mèo, Rồng, Rắn, Ngựa, Dê, Khỉ, Gà, Chó, Lợn
     - Tiết khí: Lập Xuân, Vũ Thủy, Kinh Trập, Xuân Phân...
     - Lục thập hoa giáp: Giáp Tý, Ất Sửu...
     - Bát quái: Càn, Khảm, Cấn, Chấn, Tốn, Ly, Khôn, Đoài
     - Ngũ hành: Kim, Mộc, Thủy, Hỏa, Thổ
     - Trực: Kiến, Trừ, Mãn, Bình, Định, Chấp, Phá, Nguy, Thành, Thu, Khai, Bế
     - Thần sát, sao, cát thần hung sát, nạp âm...

- [ ] **Step 4: Chạy test để xác nhận test vượt qua**

Run: `node -e "const { I18n } = require('./lunar.js'); if (I18n.getLanguage() === 'vi' && I18n.getMessage('tg.jia') === 'Giáp' && I18n.getMessage('sx.mao') === 'Mèo') { console.log('PASS: Vietnamese I18n verified'); } else { process.exit(1); }"`
Expected: PASS

- [ ] **Step 5: Commit thay đổi từ điển I18n tiếng Việt**

```bash
git add lunar.js __tests__/I18nVietnamese.test.js
git commit -m "feat: add comprehensive Vietnamese i18n dictionary and set default language to vi"
```

---

### Task 3: Kiểm Thử Toàn Diện Tính Năng Hiển Thị Âm Lịch Bằng Tiếng Việt

**Files:**
- Create: `__tests__/LunarVietnameseOutput.test.js`
- Test dependencies: `npm install` (cài đặt `jest` nếu cần)

**Interfaces:**
- Consumes: Các class `Solar`, `Lunar`, `HolidayUtil` từ `lunar.js`.
- Produces: Chuỗi đầu ra âm dương lịch chuẩn tiếng Việt.

- [ ] **Step 1: Viết test cho chuỗi đầu ra tiếng Việt**

Tạo `__tests__/LunarVietnameseOutput.test.js`:
```javascript
const { Solar, Lunar } = require('../lunar.js');

describe('Lunar Vietnamese Full Output', () => {
  test('solar and lunar output in Vietnamese', () => {
    const solar = Solar.fromYmd(2026, 10, 31);
    const lunar = solar.getLunar();

    const solarStr = solar.toFullString();
    const lunarStr = lunar.toFullString();

    // Xác nhận chuỗi không dính các chữ Hán phổ biến
    expect(solarStr).toContain('2026-10-31');
    expect(lunarStr).toContain('Bính Ngọ'); // Năm 2026 Bính Ngọ
    expect(lunarStr).toContain('Ngựa'); // Con giáp Bính Ngọ
  });

  test('supports language switching', () => {
    const { I18n } = require('../lunar.js');
    const lunar = Lunar.fromYmd(2026, 1, 1);
    
    I18n.setLanguage('en');
    expect(I18n.getMessage('tg.jia')).toBe('Jia');
    
    I18n.setLanguage('chs');
    expect(I18n.getMessage('tg.jia')).toBe('甲');
    
    I18n.setLanguage('vi');
    expect(I18n.getMessage('tg.jia')).toBe('Giáp');
  });
});
```

- [ ] **Step 2: Chạy kiểm thử tự động với Node test runner**

Run: `node --test __tests__/LunarVietnameseOutput.test.js || npx jest __tests__/LunarVietnameseOutput.test.js`
Expected: PASS tất cả các test case.

- [ ] **Step 3: Commit các test case tích hợp tiếng Việt**

```bash
git add __tests__/LunarVietnameseOutput.test.js
git commit -m "test: add comprehensive integration tests for Vietnamese lunar output"
```

---

### Task 4: Cập Nhật Tài Liệu [README.md] & Giao Diện [demo.html] Sang Tiếng Việt

**Files:**
- Modify: `README.md`
- Modify: `demo.html`

**Interfaces:**
- Consumes: Toàn bộ API `lunar-vietnamese`.
- Produces: Giao diện và hướng dẫn hoàn toàn bằng tiếng Việt.

- [ ] **Step 1: Viết test kiểm tra file demo.html và README.md**

Run: `node -e "const fs = require('fs'); const demo = fs.readFileSync('demo.html', 'utf8'); const readme = fs.readFileSync('README.md', 'utf8'); if (!readme.includes('lunar-vietnamese') || !demo.includes('Âm lịch')) { process.exit(1); }"`
Expected: FAIL với exit code 1.

- [ ] **Step 2: Cập nhật README.md và demo.html**

1. Cập nhật `README.md`:
   - Tiêu đề: `# lunar-vietnamese`
   - Mô tả bằng tiếng Việt, tác giả `congtruongwr`.
   - Cung cấp ví dụ sử dụng bằng JavaScript (Node.js & Trình duyệt).
2. Cập nhật `demo.html`:
   - Việt hóa chú thích và định dạng hiển thị: Dương lịch, Âm lịch, Can Chi, Con giáp, Tiết khí.

- [ ] **Step 3: Xác nhận test nội dung thành công**

Run: `node -e "const fs = require('fs'); const demo = fs.readFileSync('demo.html', 'utf8'); const readme = fs.readFileSync('README.md', 'utf8'); if (readme.includes('lunar-vietnamese') && demo.includes('Âm lịch')) { console.log('PASS: Docs & Demo updated'); } else { process.exit(1); }"`
Expected: PASS

- [ ] **Step 4: Commit tài liệu và demo tiếng Việt**

```bash
git add README.md demo.html
git commit -m "docs: update README and demo to Vietnamese for congtruongwr"
```

---

### Task 5: Nghiệm Thu Cuối Cùng & Xác Thực Không Lỗi

**Files:**
- Toàn bộ codebase

- [ ] **Step 1: Chạy toàn bộ các bài test**

Run: `node -e "require('./__tests__/I18nVietnamese.test.js'); require('./__tests__/LunarVietnameseOutput.test.js'); console.log('ALL TESTS PASSED');"`
Expected: `ALL TESTS PASSED`

- [ ] **Step 2: Kiểm tra trạng thái Git repository**

Run: `git status && git log -n 5 --oneline`
Expected: Working tree clean trên branch `main`, các commit ghi nhận đúng tác giả `congtruongwr`.
