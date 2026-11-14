import { content, labels, display, isEmpty } from './content.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const esc = (value) => String(value).replace(/[&<>"']/g, (ch) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[ch]));

$$('[data-content]').forEach((el) => {
  const key = el.dataset.content;
  const label = el.dataset.contentLabel || labels[key] || key;
  el.textContent = display(content[key], label);
  el.classList.toggle('is-placeholder', isEmpty(content[key]));
});

$$('[data-link]').forEach((el) => {
  const key = el.dataset.link;
  const value = content[key];
  if (isEmpty(value)) {
    el.setAttribute('href', '#');
    el.setAttribute('aria-disabled', 'true');
    el.addEventListener('click', (event) => event.preventDefault());
  } else {
    el.setAttribute('href', key === 'email' ? `mailto:${value}` : value);
    if (key !== 'email') {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  }
});

function fillSlots(selector, key, label, count) {
  const host = $(selector);
  if (!host) return;
  const values = Array.isArray(content[key]) ? content[key] : [];
  const items = values.length ? values : Array.from({ length: count }, () => null);
  host.innerHTML = items.map((value, index) => {
    const blank = isEmpty(value);
    const text = value && typeof value === 'object'
      ? `<strong>${esc(value.title ?? '')}</strong>${value.note ? `<small>${esc(value.note)}</small>` : ''}`
      : esc(blank ? `［待填：${label}］` : value);
    return `<li class="slot reveal">
      <span class="slot__num">${String(index + 1).padStart(2, '0')}</span>
      <span class="slot__text${blank ? ' is-placeholder' : ''}">${text}</span>
    </li>`;
  }).join('');
}

fillSlots('[data-slots="interests"]', 'interests', '喜欢 / 擅长 / 想展示的事', 3);
fillSlots('[data-slots="highlights"]', 'highlights', '一段经历或一个作品', 3);

const paragraphs = $('[data-paragraphs]');
if (paragraphs) {
  const values = Array.isArray(content.aboutParagraphs) ? content.aboutParagraphs : [];
  const items = values.length ? values : [null, null];
  paragraphs.innerHTML = items.map((value) => (
    `<p class="${isEmpty(value) ? 'is-placeholder' : ''}">${esc(isEmpty(value) ? '［待填：关于我的一段话，用你自己的话写］' : value)}</p>`
  )).join('');
}

const visual = $('[data-visual]');
if (visual && !isEmpty(content.photo)) {
  visual.removeAttribute('aria-hidden');
  const img = document.createElement('img');
  img.src = content.photo;
  img.alt = '我的照片';
  visual.appendChild(img);
  $$('.orb, .visual__num, .visual__dot', visual).forEach((node) => node.remove());
}

const here = location.pathname.split('/').pop() || 'index.html';
$$('[data-nav]').forEach((link) => {
  if (link.getAttribute('href') === here) {
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'page');
  }
});

$$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

const copyButton = $('[data-copy-email]');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const original = copyButton.textContent;
    if (isEmpty(content.email)) {
      copyButton.textContent = '请先在 content.js 填邮箱';
    } else {
      try {
        await navigator.clipboard.writeText(content.email);
        copyButton.textContent = '邮箱已复制';
      } catch {
        copyButton.textContent = '复制失败，请手动选中';
      }
    }
    setTimeout(() => { copyButton.textContent = original; }, 1800);
  });
}

const revealables = $$('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealables.forEach((el) => observer.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-visible'));
}
