/**
 * 全站内容只在这个文件里改。
 * 值为 null 或空数组时，页面显示「［待填：xxx］」占位 —— 不编造任何
 * 姓名、学校、经历、奖项、作品或联系方式。
 */
export const content = {
  name: null,
  tagline: null,
  school: null,
  intro: null,
  now: null,
  next: null,
  interests: [],
  aboutParagraphs: [],
  highlights: [],
  email: null,
  github: null,
  photo: null,
};

export const labels = {
  name: '你的名字或昵称',
  tagline: '一句话介绍你自己',
  school: '学校 + 专业 + 年级',
  intro: '首页的一小段自我介绍',
  now: '现在在做的事',
  next: '想学的东西',
  email: '你的邮箱',
  github: 'GitHub 链接',
};

export const isEmpty = (value) => value == null || String(value).trim() === '';

export function display(value, label) {
  return isEmpty(value) ? `［待填：${label}］` : String(value);
}
