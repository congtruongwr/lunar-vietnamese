# lunar-vietnamese

[Tiếng Việt](README.md) | English

A **zero-dependency** JavaScript / TypeScript calendar library tailored for **Vietnamese Lunar–Solar conversion**, Can-Chi (Heavenly Stems & Earthly Branches), **12 Vietnamese Zodiac Animals (`Mão = Cat`)**, 24 Solar Terms (_Tiết khí_), Five Elements (_Nạp âm_), auspicious/inauspicious activities (_Việc nên làm / Kiêng kỵ_), and Eight Characters (_Bát tự_).

Maintained by [**congtruongwr**](https://github.com/congtruongwr/lunar-vietnamese) under **Apache-2.0**.

## What's New in v2.0.0

- **First-class Vietnamese API**: Exports native Vietnamese classes (`DuongLich`, `AmLich`, `BatTu`, `CuuTinh`, `PhatLich`, `DaoLich`, `DaNgonNgu`, etc.) and instance methods (`getAmLich()`, `getThu()`, `getCungHoangDao()`, `getCanChiNgay()`, `getConGiap()`, `getNapAmNgay()`, `getViecNenLam()`, `getViecKiengKy()`, etc.) while maintaining **100% backward compatibility** with `Solar` / `Lunar`.
- **Complete `"vi"` Localization Parity**: Fixes leap month formatting (`"Nhuận ..."`), `LunarMonth` dictionary lookups (`POSITION_DESC`), Can-Chi spacing for NaYin lookups, Vietnamese period `toFullString()`, `Solar.fromBaZi(...)` with Vietnamese Can-Chi inputs (`"Bính Ngọ"`), and Thanh Minh holiday handling in `Solar.getSalaryRate()`.
- **Production Bundle & Clean Packaging**: Ships pre-built `lunar.min.js` at repository root, full TypeScript declarations (`index.d.ts`), and targets Node.js `>= 18.0.0` with zero runtime/dev dependencies.

## Installation

### Node.js / npm (via GitHub)

```bash
npm install github:congtruongwr/lunar-vietnamese#v2.0.0
```

### Browser (CDN / Local)

#### `<script>` (UMD Global)

```html
<script src="https://cdn.jsdelivr.net/gh/congtruongwr/lunar-vietnamese@v2.0.0/lunar.min.js"></script>
<script>
  const dl = DuongLich.fromYmd(2026, 2, 17);
  console.log(dl.getAmLich().getCanChiNam()); // "Bính Ngọ"
</script>
```

#### `<script type="module">` (ESM via esm.sh)

```html
<script type="module">
  import { DuongLich, AmLich } from "https://esm.sh/gh/congtruongwr/lunar-vietnamese@v2.0.0";

  const dl = DuongLich.fromYmd(2026, 2, 17);
  console.log(dl.getAmLich().toString()); // "Mùng Một tháng Giêng năm Hai Không Hai Sáu"
</script>
```

## Quick Start

### Vietnamese-Native API

```js
const { DuongLich, AmLich } = require("lunar-vietnamese");

// Default language is "vi"
const dl = DuongLich.fromYmd(2026, 2, 17); // Lunar New Year 2026 (Tết Bính Ngọ)
const al = dl.getAmLich();

console.log(dl.getThu()); // "Thứ Ba"
console.log(dl.getCungHoangDao()); // "Bảo Bình"
console.log(al.getCanChiNam()); // "Bính Ngọ"
console.log(al.getConGiap()); // "Ngựa"
console.log(al.getNapAmNgay()); // "Đại Hải Thủy"

const fromLunar = AmLich.fromYmd(2026, 1, 1);
console.log(fromLunar.getDuongLich().toYmd()); // "2026-02-17"
```

### Classic API (`Solar` / `Lunar`) & Multi-Language Switching

```js
const { Solar, Lunar, I18n } = require("lunar-vietnamese");

const solar = Solar.fromYmd(2026, 10, 31);
const lunar = solar.getLunar();

console.log(solar.toFullString());
// 2026-10-31 00:00:00 Thứ Bảy (Đêm Halloween) Bọ Cạp

console.log(lunar.toString());
// Hai Mươi Hai tháng Chín năm Hai Không Hai Sáu

// Switch between "vi" (default), "en", and "chs"
I18n.setLanguage("en");
console.log(Solar.fromYmd(2026, 2, 17).getLunar().getYearShengXiao());
I18n.setLanguage("vi");
```

### TypeScript

```ts
import { DuongLich, AmLich, Solar, Lunar } from "lunar-vietnamese";

const dl: DuongLich = DuongLich.fromYmd(2026, 10, 31);
const al: AmLich = dl.getAmLich();
const solar: Solar = al.getDuongLich();
const lunar: Lunar = solar.getLunar();
```

## Running Tests

```bash
npm test
```

## License

Copyright &copy; 2026 [congtruongwr](https://github.com/congtruongwr) — [Apache License 2.0](LICENSE).
