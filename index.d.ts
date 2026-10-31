/**
 * lunar-vietnamese - Thư viện Lịch Âm - Dương Việt Nam (Bản quyền congtruongwr)
 */

export interface Solar {
  getYear(): number;
  getMonth(): number;
  getDay(): number;
  getHour(): number;
  getMinute(): number;
  getSecond(): number;
  getWeek(): number;
  getWeekInChinese(): string;
  getSolarWeek(start: number): SolarWeek;
  isLeapYear(): boolean;
  getFestivals(): string[];
  getOtherFestivals(): string[];
  getXingzuo(): string;
  getXingZuo(): string;
  toYmd(): string;
  toYmdHms(): string;
  toString(): string;
  toFullString(): string;
  nextYear(years: number): Solar;
  nextMonth(months: number): Solar;
  nextDay(days: number): Solar;
  next(days: number): Solar;
  nextHour(hours: number): Solar;
  nextWorkday(workdays: number): Solar;
  subtract(solar: Solar): number;
  subtractMinute(solar: Solar): number;
  isAfter(solar: Solar): boolean;
  isBefore(solar: Solar): boolean;
  getLunar(): Lunar;
  getJulianDay(): number;
  getSalaryRate(): number;
}

export interface SolarStatic {
  J2000: number;
  fromYmd(year: number, month: number, day: number): Solar;
  fromYmdHms(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  ): Solar;
  fromDate(date: Date): Solar;
  fromJulianDay(julianDay: number): Solar;
  fromBaZi(
    yearGanZhi: string,
    monthGanZhi: string,
    dayGanZhi: string,
    timeGanZhi: string,
    sect?: number,
    baseYear?: number,
  ): Solar[];
}

export interface Lunar {
  getYear(): number;
  getMonth(): number;
  getDay(): number;
  getHour(): number;
  getMinute(): number;
  getSecond(): number;
  getSolar(): Solar;
  getYearGan(): string;
  getYearZhi(): string;
  getYearInGanZhi(): string;
  getYearInGanZhiByLiChun(): string;
  getYearInGanZhiExact(): string;
  getMonthGan(): string;
  getMonthZhi(): string;
  getMonthInGanZhi(): string;
  getMonthInGanZhiExact(): string;
  getDayGan(): string;
  getDayZhi(): string;
  getDayInGanZhi(): string;
  getDayInGanZhiExact(): string;
  getDayInGanZhiExact2(): string;
  getTimeGan(): string;
  getTimeZhi(): string;
  getTimeInGanZhi(): string;
  getShengxiao(): string;
  getYearShengXiao(): string;
  getYearShengXiaoByLiChun(): string;
  getYearShengXiaoExact(): string;
  getMonthShengXiao(): string;
  getMonthShengXiaoExact(): string;
  getDayShengXiao(): string;
  getTimeShengXiao(): string;
  getYearInChinese(): string;
  getMonthInChinese(): string;
  getDayInChinese(): string;
  getPengZuGan(): string;
  getPengZuZhi(): string;
  getPositionXi(): string;
  getPositionXiDesc(): string;
  getPositionYangGui(): string;
  getPositionYangGuiDesc(): string;
  getPositionYinGui(): string;
  getPositionYinGuiDesc(): string;
  getPositionFu(): string;
  getPositionFuDesc(): string;
  getPositionCai(): string;
  getPositionCaiDesc(): string;
  getDayPositionXi(): string;
  getDayPositionXiDesc(): string;
  getDayPositionYangGui(): string;
  getDayPositionYangGuiDesc(): string;
  getDayPositionYinGui(): string;
  getDayPositionYinGuiDesc(): string;
  getDayPositionFu(): string;
  getDayPositionFuDesc(): string;
  getDayPositionCai(): string;
  getDayPositionCaiDesc(): string;
  getTimePositionXi(): string;
  getTimePositionXiDesc(): string;
  getTimePositionYangGui(): string;
  getTimePositionYangGuiDesc(): string;
  getTimePositionYinGui(): string;
  getTimePositionYinGuiDesc(): string;
  getTimePositionFu(): string;
  getTimePositionFuDesc(): string;
  getTimePositionCai(): string;
  getTimePositionCaiDesc(): string;
  getChong(): string;
  getChongDesc(): string;
  getChongGan(): string;
  getChongGanTie(): string;
  getChongShengXiao(): string;
  getSha(): string;
  getDayChong(): string;
  getDayChongDesc(): string;
  getDaySha(): string;
  getTimeChong(): string;
  getTimeChongDesc(): string;
  getTimeSha(): string;
  getYearNaYin(): string;
  getMonthNaYin(): string;
  getDayNaYin(): string;
  getTimeNaYin(): string;
  getEightChar(): EightChar;
  getFestivals(): string[];
  getOtherFestivals(): string[];
  getJie(): string;
  getQi(): string;
  getJieQi(): string;
  getPrevJieQi(wholeDay?: boolean): JieQi;
  getNextJieQi(wholeDay?: boolean): JieQi;
  getJieQiTable(): { [key: string]: Solar };
  getJieQiList(): string[];
  getZhiXing(): string;
  getDayTianShen(): string;
  getDayTianShenType(): string;
  getDayTianShenLuck(): string;
  getTimeTianShen(): string;
  getTimeTianShenType(): string;
  getTimeTianShenLuck(): string;
  getDayYi(): string[];
  getDayJi(): string[];
  getTimeYi(): string[];
  getTimeJi(): string[];
  getDayJiShen(): string[];
  getDayXiongSha(): string[];
  getYueXiang(): string;
  getXiu(): string;
  getXiuLuck(): string;
  getXiuSong(): string;
  getZheng(): string;
  getAnimal(): string;
  getGong(): string;
  getShou(): string;
  getGongInChinese(): string;
  getShouInChinese(): string;
  getLiuYao(): string;
  getWuHou(): string;
  getHou(): string;
  getYearNineStar(exact?: boolean): NineStar;
  getMonthNineStar(exact?: boolean): NineStar;
  getDayNineStar(): NineStar;
  getTimeNineStar(): NineStar;
  next(days: number): Lunar;
  toString(): string;
  toFullString(): string;
}

export interface LunarStatic {
  fromYmdHms(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  ): Lunar;
  fromYmd(year: number, month: number, day: number): Lunar;
  fromSolar(solar: Solar): Lunar;
  fromDate(date: Date): Lunar;
}

export interface JieQi {
  getName(): string;
  getSolar(): Solar;
  isJie(): boolean;
  isQi(): boolean;
  toString(): string;
}

export interface EightChar {
  getYear(): string;
  getMonth(): string;
  getDay(): string;
  getTime(): string;
  getYearGan(): string;
  getYearZhi(): string;
  getMonthGan(): string;
  getMonthZhi(): string;
  getDayGan(): string;
  getDayZhi(): string;
  getTimeGan(): string;
  getTimeZhi(): string;
  getYearWuXing(): string;
  getMonthWuXing(): string;
  getDayWuXing(): string;
  getTimeWuXing(): string;
  getYearNaYin(): string;
  getMonthNaYin(): string;
  getDayNaYin(): string;
  getTimeNaYin(): string;
  getYearShiShenGan(): string;
  getMonthShiShenGan(): string;
  getDayShiShenGan(): string;
  getTimeShiShenGan(): string;
  getYearShiShenZhi(): string[];
  getMonthShiShenZhi(): string[];
  getDayShiShenZhi(): string[];
  getTimeShiShenZhi(): string[];
  getYearHideGan(): string[];
  getMonthHideGan(): string[];
  getDayHideGan(): string[];
  getTimeHideGan(): string[];
  getYearDiShi(): string;
  getMonthDiShi(): string;
  getDayDiShi(): string;
  getTimeDiShi(): string;
  getYearXun(): string;
  getMonthXun(): string;
  getDayXun(): string;
  getTimeXun(): string;
  getYearXunKong(): string;
  getMonthXunKong(): string;
  getDayXunKong(): string;
  getTimeXunKong(): string;
  toString(): string;
}

export interface EightCharStatic {
  fromLunar(lunar: Lunar): EightChar;
}

export interface NineStar {
  getNumber(): string;
  getNameInBeiDou(): string;
  getNameInXuanKong(): string;
  getNameInQiMen(): string;
  getNameInTaiYi(): string;
  getColor(): string;
  getWuXing(): string;
  getPosition(): string;
  getPositionDesc(): string;
  getBaMenInQiMen(): string;
  getTypeInTaiYi(): string;
  getSongInTaiYi(): string;
  getLuckInQiMen(): string;
  getLuckInXuanKong(): string;
  getYinYangInQiMen(): string;
  getIndex(): number;
  toString(): string;
  toFullString(): string;
}

export interface NineStarStatic {
  NAME_BEI_DOU: string[];
  NAME_XUAN_KONG: string[];
  NAME_QI_MEN: string[];
  BA_MEN_QI_MEN: string[];
  NAME_TAI_YI: string[];
  TYPE_TAI_YI: string[];
  SONG_TAI_YI: string[];
  LUCK_QI_MEN: string[];
  fromIndex(index: number): NineStar;
}

export interface Foto {
  toFullString(): string;
  getLunar(): Lunar;
}

export interface FotoStatic {
  DEAD_YEAR: number;
  fromYmdHms(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  ): Foto;
  fromYmd(year: number, month: number, day: number): Foto;
  fromLunar(lunar: Lunar): Foto;
}

export interface Tao {
  toFullString(): string;
  getLunar(): Lunar;
}

export interface TaoStatic {
  BIRTH_YEAR: number;
  fromYmdHms(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  ): Tao;
  fromYmd(year: number, month: number, day: number): Tao;
  fromLunar(lunar: Lunar): Tao;
}

export interface SolarWeek {
  getYear(): number;
  getMonth(): number;
  getDay(): number;
  getIndex(): number;
  getIndexInYear(): number;
  getFirstDay(): Solar;
  getDays(): Solar[];
  next(weeks: number, separateMonth?: boolean): SolarWeek;
  toFullString(): string;
  toString(): string;
}

export interface SolarWeekStatic {
  fromYmd(year: number, month: number, day: number, start: number): SolarWeek;
  fromDate(date: Date, start: number): SolarWeek;
}

export interface SolarMonth {
  getYear(): number;
  getMonth(): number;
  getDays(): Solar[];
  getWeeks(start: number): SolarWeek[];
  next(months: number): SolarMonth;
  toString(): string;
  toFullString(): string;
}

export interface SolarMonthStatic {
  fromYm(year: number, month: number): SolarMonth;
  fromDate(date: Date): SolarMonth;
}

export interface SolarSeason {
  getYear(): number;
  getMonth(): number;
  getIndex(): number;
  next(seasons: number): SolarSeason;
  toString(): string;
  toFullString(): string;
}

export interface SolarSeasonStatic {
  fromYm(year: number, month: number): SolarSeason;
  fromDate(date: Date): SolarSeason;
}

export interface SolarHalfYear {
  getYear(): number;
  getMonth(): number;
  getIndex(): number;
  next(halfYears: number): SolarHalfYear;
  toString(): string;
  toFullString(): string;
}

export interface SolarHalfYearStatic {
  fromYm(year: number, month: number): SolarHalfYear;
  fromDate(date: Date): SolarHalfYear;
}

export interface SolarYear {
  getYear(): number;
  getMonths(): SolarMonth[];
  next(years: number): SolarYear;
  toString(): string;
  toFullString(): string;
}

export interface SolarYearStatic {
  fromYear(year: number): SolarYear;
  fromDate(date: Date): SolarYear;
}

export interface LunarMonth {
  getYear(): number;
  getMonth(): number;
  isLeap(): boolean;
  getDayCount(): number;
  getFirstJulianDay(): number;
  toString(): string;
  toFullString(): string;
  next(months: number): LunarMonth;
}

export interface LunarMonthStatic {
  fromYm(year: number, month: number): LunarMonth;
}

export interface LunarYear {
  getYear(): number;
  getMonths(): LunarMonth[];
  getLeapMonth(): number;
  getDayCount(): number;
  next(years: number): LunarYear;
  toString(): string;
  toFullString(): string;
}

export interface LunarYearStatic {
  fromYear(year: number): LunarYear;
}

export interface LunarTime {
  getGanIndex(): number;
  getZhiIndex(): number;
  getGan(): string;
  getZhi(): string;
  getGanZhi(): string;
  getShengxiao(): string;
  getPositionXi(): string;
  getPositionXiDesc(): string;
  getPositionYangGui(): string;
  getPositionYangGuiDesc(): string;
  getPositionYinGui(): string;
  getPositionYinGuiDesc(): string;
  getPositionFu(): string;
  getPositionFuDesc(): string;
  getPositionCai(): string;
  getPositionCaiDesc(): string;
  getNaYin(): string;
  getTianShen(): string;
  getTianShenType(): string;
  getTianShenLuck(): string;
  getChong(): string;
  getChongDesc(): string;
  getSha(): string;
  getYi(): string[];
  getJi(): string[];
  getNineStar(): NineStar;
  toString(): string;
}

export interface LunarTimeStatic {
  fromYmdHms(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  ): LunarTime;
}

export interface I18nStatic {
  getLanguage(): string;
  setLanguage(lang: string): void;
  getMessage(key: string): string;
  setMessages(lang: string, messages: { [key: string]: any }): void;
}

export interface Holiday {
  getDay(): string;
  getName(): string;
  isWork(): boolean;
  getTarget(): string;
  toString(): string;
}

export interface HolidayUtilStatic {
  NAMES: string[];
  getHoliday(ymd: string): Holiday | null;
  getHolidays(year: number): Holiday[];
  getHolidaysByTarget(ymd: string): Holiday[];
  fix(names?: string[], data?: string): void;
}

export interface SolarUtilStatic {
  WEEK: string[];
  DAYS_OF_MONTH: number[];
  XINGZUO: string[];
  isLeapYear(year: number): boolean;
  getDaysOfMonth(year: number, month: number): number;
  getDaysOfYear(year: number): number;
  getDaysInYear(year: number, month: number, day: number): number;
  getDaysBetween(
    ay: number,
    am: number,
    ad: number,
    by: number,
    bm: number,
    bd: number,
  ): number;
  getWeeksOfMonth(year: number, month: number, start: number): number;
}

export interface LunarUtilStatic {
  GAN: string[];
  ZHI: string[];
  SHENGXIAO: string[];
  JIE_QI: string[];
  JIE_QI_IN_USE: string[];
  TIAN_SHEN: string[];
  NAYIN: string[];
  convertTime(hm: string): string;
  getTimeZhiIndex(hm: string): number;
  getJiaZiIndex(ganZhi: string): number;
  getXunIndex(ganZhi: string): number;
  getXun(ganZhi: string): string;
  getXunKong(ganZhi: string): string;
}

export interface FotoUtilStatic {
  XIU_27: string[];
  getXiu(month: number, day: number): string;
}

export interface TaoUtilStatic {
  SAN_HUI: string[];
  SAN_YUAN: string[];
  WU_LA: string[];
  AN_WU: string[];
  BA_HUI: string[];
  BA_JIE: string[];
}

export interface NineStarUtilStatic {
  NUMBER: string[];
  WU_XING: string[];
  POSITION: string[];
  COLOR: string[];
}

export interface ShouXingUtilStatic {
  calcShuo(year: number, month: number): number;
  calcQi(year: number, jqIndex: number): number;
}

export const Solar: SolarStatic;
export const Lunar: LunarStatic;
export const Foto: FotoStatic;
export const Tao: TaoStatic;
export const NineStar: NineStarStatic;
export const EightChar: EightCharStatic;
export const SolarWeek: SolarWeekStatic;
export const SolarMonth: SolarMonthStatic;
export const SolarSeason: SolarSeasonStatic;
export const SolarHalfYear: SolarHalfYearStatic;
export const SolarYear: SolarYearStatic;
export const LunarMonth: LunarMonthStatic;
export const LunarYear: LunarYearStatic;
export const LunarTime: LunarTimeStatic;
export const HolidayUtil: HolidayUtilStatic;
export const SolarUtil: SolarUtilStatic;
export const LunarUtil: LunarUtilStatic;
export const FotoUtil: FotoUtilStatic;
export const TaoUtil: TaoUtilStatic;
export const NineStarUtil: NineStarUtilStatic;
export const ShouXingUtil: ShouXingUtilStatic;
export const I18n: I18nStatic;

declare const _default: {
  Solar: SolarStatic;
  Lunar: LunarStatic;
  Foto: FotoStatic;
  Tao: TaoStatic;
  NineStar: NineStarStatic;
  EightChar: EightCharStatic;
  SolarWeek: SolarWeekStatic;
  SolarMonth: SolarMonthStatic;
  SolarSeason: SolarSeasonStatic;
  SolarHalfYear: SolarHalfYearStatic;
  SolarYear: SolarYearStatic;
  LunarMonth: LunarMonthStatic;
  LunarYear: LunarYearStatic;
  LunarTime: LunarTimeStatic;
  HolidayUtil: HolidayUtilStatic;
  SolarUtil: SolarUtilStatic;
  LunarUtil: LunarUtilStatic;
  FotoUtil: FotoUtilStatic;
  TaoUtil: TaoUtilStatic;
  NineStarUtil: NineStarUtilStatic;
  ShouXingUtil: ShouXingUtilStatic;
  I18n: I18nStatic;
};

export default _default;
