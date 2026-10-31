const assert = require('assert');
const { I18n } = require('../lunar.js');

console.log('Testing Vietnamese I18n Dictionary...');

// 1. Ngôn ngữ mặc định phải là 'vi'
assert.strictEqual(I18n.getLanguage(), 'vi', 'Default language must be vi');

// 2. Kiểm tra Thiên can
assert.strictEqual(I18n.getMessage('tg.jia'), 'Giáp');
assert.strictEqual(I18n.getMessage('tg.yi'), 'Ất');
assert.strictEqual(I18n.getMessage('tg.gui'), 'Quý');

// 3. Kiểm tra Địa chi
assert.strictEqual(I18n.getMessage('dz.zi'), 'Tý');
assert.strictEqual(I18n.getMessage('dz.chou'), 'Sửu');
assert.strictEqual(I18n.getMessage('dz.hai'), 'Hợi');

// 4. Kiểm tra 12 con giáp (Việt Nam: Mão là Mèo)
assert.strictEqual(I18n.getMessage('sx.zi'), 'Chuột');
assert.strictEqual(I18n.getMessage('sx.chou'), 'Trâu');
assert.strictEqual(I18n.getMessage('sx.yin'), 'Hổ');
assert.strictEqual(I18n.getMessage('sx.mao'), 'Mèo');
assert.strictEqual(I18n.getMessage('sx.chen'), 'Rồng');
assert.strictEqual(I18n.getMessage('sx.si'), 'Rắn');
assert.strictEqual(I18n.getMessage('sx.wu'), 'Ngựa');
assert.strictEqual(I18n.getMessage('sx.wei'), 'Dê');
assert.strictEqual(I18n.getMessage('sx.shen'), 'Khỉ');
assert.strictEqual(I18n.getMessage('sx.you'), 'Gà');
assert.strictEqual(I18n.getMessage('sx.xu'), 'Chó');
assert.strictEqual(I18n.getMessage('sx.hai'), 'Lợn');

// 5. Kiểm tra Tiết khí
assert.strictEqual(I18n.getMessage('jq.liChun'), 'Lập Xuân');
assert.strictEqual(I18n.getMessage('jq.dongZhi'), 'Đông Chí');

// 6. Kiểm tra Thập nhị trực Kiến Trừ
assert.strictEqual(I18n.getMessage('zx.jian'), 'Kiến');
assert.strictEqual(I18n.getMessage('zx.chu'), 'Trừ');
assert.strictEqual(I18n.getMessage('zx.bi'), 'Bế');

// 7. Kiểm tra Lục thập hoa giáp
assert.strictEqual(I18n.getMessage('jz.jiaZi'), 'Giáp Tý');
assert.strictEqual(I18n.getMessage('jz.guiHai'), 'Quý Hợi');

// 8. Bát quái
assert.strictEqual(I18n.getMessage('bg.qian'), 'Càn');
assert.strictEqual(I18n.getMessage('bg.kun'), 'Khôn');

// 9. Ngũ hành
assert.strictEqual(I18n.getMessage('wx.jin'), 'Kim');
assert.strictEqual(I18n.getMessage('wx.shui'), 'Thủy');

console.log('PASS: Vietnamese I18n test successful');
