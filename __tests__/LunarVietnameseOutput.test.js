const assert = require("assert");
const { Solar, Lunar, I18n } = require("../lunar.js");

console.log("Testing Lunar Vietnamese Output & Integration...");

// 1. Kiểm tra ngày cố định (2026-10-31)
const solar = Solar.fromYmd(2026, 10, 31);
const lunar = solar.getLunar();

const solarStr = solar.toFullString();
const lunarStr = lunar.toFullString();

console.log("Solar string:", solarStr);
console.log("Lunar string:", lunarStr);

// Kiểm tra Solar string tiếng Việt
assert.ok(solarStr.includes("2026-10-31"), "Solar string must contain YMD");
assert.ok(solarStr.includes("Thứ Bảy"), "Solar string must contain Thứ Bảy");
assert.ok(solarStr.includes("Bọ Cạp"), "Solar string must contain cung Bọ Cạp");

// Kiểm tra Lunar string tiếng Việt
assert.ok(lunarStr.includes("Bính Ngọ"), "Lunar string must contain Bính Ngọ");
assert.ok(
  lunarStr.includes("Ngựa"),
  "Lunar string must contain Ngựa (con giáp)",
);
assert.ok(lunarStr.includes("Mậu Tuất"), "Lunar string must contain Mậu Tuất");
assert.ok(lunarStr.includes("Chó"), "Lunar string must contain Chó");
assert.ok(lunarStr.includes("Mậu Dần"), "Lunar string must contain Mậu Dần");
assert.ok(lunarStr.includes("Hổ"), "Lunar string must contain Hổ");
assert.ok(
  lunarStr.includes("Thiên Hà Thủy"),
  "Lunar string must contain Nạp âm Thiên Hà Thủy",
);
assert.ok(
  lunarStr.includes("Bành Tổ bách kỵ"),
  "Lunar string must contain Bành Tổ bách kỵ",
);
assert.ok(
  lunarStr.includes("Hỷ thần hướng"),
  "Lunar string must contain Hỷ thần hướng",
);
assert.ok(
  lunarStr.includes("Tài thần hướng"),
  "Lunar string must contain Tài thần hướng",
);

// Kiểm tra con giáp Mèo (đặc trưng Việt Nam) cho năm Mão (ví dụ: 2023 Quý Mão)
const solar2023 = Solar.fromYmd(2023, 2, 1);
const lunar2023 = solar2023.getLunar();
assert.strictEqual(
  lunar2023.getYearShengXiao(),
  "Mèo",
  "2023 year animal must be Mèo in Vietnam",
);
assert.strictEqual(
  lunar2023.getYearInGanZhi(),
  "Quý Mão",
  "2023 GanZhi must be Quý Mão",
);

// Kiểm tra chuyển đổi ngôn ngữ trơn tru
I18n.setLanguage("en");
assert.strictEqual(I18n.getMessage("tg.jia"), "Jia");
assert.strictEqual(I18n.getMessage("sx.rabbit"), "Rabbit");

I18n.setLanguage("chs");
assert.strictEqual(I18n.getMessage("tg.jia"), "甲");
assert.strictEqual(I18n.getMessage("sx.rabbit"), "兔");

I18n.setLanguage("vi");
assert.strictEqual(I18n.getMessage("tg.jia"), "Giáp");
assert.strictEqual(I18n.getMessage("sx.rabbit"), "Mèo");

console.log("PASS: All Lunar Vietnamese Integration tests succeeded!");
