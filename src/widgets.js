/* ---------- interactive diagrams ---------- */
const CUE_STAGES = [
  { k: 'Early', say: '"I’m hungry"', act: 'Feed now', c: 'var(--good)', soft: 'var(--good-soft)', items: ['Stirring', 'Mouth opening', 'Turning head'] },
  { k: 'Mid', say: '"I’m really hungry"', act: 'Feed soon', c: 'var(--warn)', soft: 'var(--warn-soft)', items: ['Stretching', 'More movement', 'Hand to mouth'] },
  { k: 'Late', say: '"Calm me, then feed me"', act: 'Calm first, then feed', c: 'var(--bad)', soft: 'var(--bad-soft)', items: ['Crying', 'Agitated movements', 'Turning red'] },
];
const fig = (src, alt, cap) => `<button class="figure" type="button" aria-label="Enlarge image"><img data-zoom src="${src}" alt="${esc(alt)}" loading="lazy"><span class="cap">${esc(cap || 'Tap to enlarge')}</span></button>`;
let wid = 0;
const W = {
  journey: el => {
    const phases = [
      { t: 'Whole hospital', s: 'Before any mother arrives', ic: '🏥', steps: ['s1a', 's1b', 's1c', 's2'] },
      { t: 'Pregnancy', s: 'Antenatal clinic', ic: '🤰', steps: ['s3'] },
      { t: 'Birth', s: 'Labour room & theatre', ic: '👶', steps: ['s4'] },
      { t: 'Postnatal stay', s: 'Ward, NICU & SCN', ic: '🤱', steps: ['s5', 's6', 's7', 's8', 's9'] },
      { t: 'Going home', s: 'Discharge & community', ic: '🏠', steps: ['s10'] },
    ];
    el.innerHTML = `<div class="journey">${phases.map((p, i) => `<div class="jp"><span class="jn" aria-hidden="true">${i + 1}</span><div class="jb"><b>${p.t}</b><span class="muted small">${p.s}</span>
      <div class="chips">${p.steps.map(id => `<button class="chip ${S.read[id] ? 'done' : ''}" data-go="${id}" title="${esc(L[id].title)}"><b>${L[id].badge}</b> ${esc(L[id].title)}</button>`).join('')}</div></div></div>`).join('')}</div>
      <p class="small muted" style="margin:8px 2px 0">Steps 1–2 are <b>critical management procedures</b>; Steps 3–10 are <b>key clinical practices</b>. Filled chips are lessons you have finished.</p>`;
  },

  goldenHour: el => {
    const P = [
      { m: 0, t: 'Birth', d: 'Dry the baby and place naked, tummy down, on the mother’s bare chest. Cover both with a warm cloth. Keep the face visible.' },
      { m: 5, t: '5 min', d: 'Skin-to-skin should have started by now. This is the BFHI indicator: within 5 minutes of birth.' },
      { m: 30, t: '15–45 min', d: 'The baby wakes, roots, and crawls toward the breast. Watch and support; do not push the baby onto the breast.' },
      { m: 60, t: '60 min', d: 'Keep contact going for at least 1 hour, or until the first breastfeed is complete. Most babies self-attach within the first hour.' },
      { m: 75, t: 'After', d: 'Now weigh, examine, give vitamin K and eye care. These can wait until skin-to-skin and the first feed are done.' },
    ];
    const XS = [6, 28, 50, 72, 94]; const x = m => XS[P.findIndex(p => p.m === m)];
    el.innerHTML = `<div class="gh"><div class="gh-track"><div class="gh-fill"></div>${P.map((p, i) => `<button class="gh-pt" style="left:${x(p.m)}%" data-i="${i}" aria-label="${p.t}"><span></span><em>${p.t}</em></button>`).join('')}</div>
      <div class="gh-band" style="left:${x(0)}%;width:${x(60) - x(0)}%">Uninterrupted skin-to-skin · ≥ 1 hour</div>
      <div class="gh-d" aria-live="polite"></div></div>`;
    const sel = i => { $$('.gh-pt', el).forEach((b, k) => b.classList.toggle('on', k === i)); $('.gh-fill', el).style.width = x(P[i].m) + '%'; $('.gh-d', el).innerHTML = `<b>${P[i].t}</b> ${esc(P[i].d)}`; };
    $$('.gh-pt', el).forEach(b => b.onclick = () => sel(+b.dataset.i)); sel(0);
  },

  cueSlider: el => {
    const id = 'cs' + (++wid);
    el.innerHTML = `<div class="cs"><div class="cs-img"><img alt="" id="${id}i" src="img/cue-00.jpg"><span class="cs-tag" id="${id}t"></span></div>
      <div class="cs-body"><div class="cs-head"><b id="${id}k"></b><span id="${id}s" class="muted small"></span></div>
      <div class="cs-act" id="${id}a"></div>
      <label class="flabel" for="${id}r">Slide from early to late</label>
      <input type="range" min="0" max="8" value="0" id="${id}r" class="cs-range">
      <div class="cs-scale"><span>Early</span><span>Mid</span><span>Late</span></div></div></div>`;
    const r = $('#' + id + 'r', el);
    const draw = () => {
      const v = +r.value, st = CUE_STAGES[Math.floor(v / 3)], it = st.items[v % 3];
      $('#' + id + 'i', el).src = `img/cue-${Math.floor(v / 3)}${v % 3}.jpg`; $('#' + id + 'i', el).alt = 'Baby showing feeding cue: ' + it;
      $('#' + id + 't', el).textContent = it; $('#' + id + 'k', el).textContent = st.k + ' cue'; $('#' + id + 's', el).textContent = st.say;
      const a = $('#' + id + 'a', el); a.textContent = st.act; a.style.background = st.soft; a.style.color = st.c;
      el.querySelector('.cs').style.setProperty('--cc', st.c);
    };
    r.addEventListener('input', draw); draw();
  },

  stomach: el => {
    const D = [
      { d: 'Day 1', v: '5–7 ml', n: 6, o: 'a cherry' },
      { d: 'Day 3', v: '22–27 ml', n: 25, o: 'a walnut' },
      { d: 'Day 7', v: '45–60 ml', n: 52, o: 'an apricot' },
      { d: '1 month', v: '80–150 ml', n: 115, o: 'a large egg' },
    ];
    el.innerHTML = `<div class="stm"><div class="seg" role="group" aria-label="Baby's age">${D.map((x, i) => `<button data-i="${i}" aria-pressed="${i === 0}">${x.d}</button>`).join('')}</div>
      <svg viewBox="0 0 320 170" role="img" aria-label="Stomach size comparison"><g id="stmc"></g></svg><p class="stm-t" aria-live="polite"></p></div>`;
    const draw = i => {
      $$('[data-i]', el).forEach(b => b.setAttribute('aria-pressed', +b.dataset.i === i));
      const cx = [44, 112, 196, 278];
      $('#stmc', el).innerHTML = D.map((x, k) => { const r = 9 + Math.cbrt(x.n / 115) * 31; return `<circle cx="${cx[k]}" cy="${92}" r="${r}" fill="${k === i ? 'var(--warm)' : 'var(--surface)'}" stroke="${k === i ? 'var(--warm)' : 'var(--line)'}" stroke-width="1.5" style="transition:fill .3s"/>
        <text x="${cx[k]}" y="160" text-anchor="middle" font-size="12" fill="${k === i ? 'var(--ink)' : 'var(--muted)'}" font-weight="${k === i ? 700 : 500}">${x.d}</text>`; }).join('');
      $('.stm-t', el).innerHTML = `<b>${D[i].d}:</b> about <b>${D[i].v}</b> per feed, the size of ${D[i].o}. ${i === 0 ? 'Small amounts of colostrum are exactly right; frequent feeds, not formula, build supply.' : i === 1 ? 'Milk "comes in" around now. Expect 8–12 feeds a day.' : ''}`;
    };
    $$('[data-i]', el).forEach(b => b.onclick = () => draw(+b.dataset.i)); draw(0);
  },

  supplyLoop: el => {
    const N = [
      { t: 'Baby suckles', d: 'Frequent, well-attached suckling, day and night, is the trigger for everything else.', x: 170, y: 30 },
      { t: 'Brain signal', d: 'Nerves in the nipple and areola send messages to the mother’s pituitary gland.', x: 284, y: 115 },
      { t: 'Hormones', d: '<b>Prolactin</b> makes milk for the next feed (higher at night). <b>Oxytocin</b> lets the milk flow now. Stress and pain can block oxytocin; calm, comfort and thinking about the baby help.', x: 170, y: 200 },
      { t: 'Milk removed', d: 'When the breast is emptied, production speeds up. Milk left in a full breast signals the body to make less.', x: 56, y: 115 },
    ];
    el.innerHTML = `<div class="loop"><svg viewBox="0 0 340 232" role="img" aria-label="Milk supply cycle">
      <circle cx="170" cy="115" r="84" fill="none" stroke="var(--soft)" stroke-width="14"/>
      <circle class="loop-run" cx="170" cy="115" r="84" fill="none" stroke="var(--brand)" stroke-width="3" stroke-dasharray="10 12" stroke-linecap="round"/>
      <text x="170" y="110" text-anchor="middle" font-size="12" fill="var(--muted)">More milk out</text>
      <text x="170" y="128" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">= more milk made</text>
      ${N.map((n, i) => `<g class="loop-n" data-i="${i}" tabindex="0" role="button" aria-label="${n.t}"><rect x="${n.x - 52}" y="${n.y - 17}" width="104" height="34" rx="17" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/><text x="${n.x}" y="${n.y + 4}" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">${n.t}</text></g>`).join('')}
      </svg><p class="loop-d" aria-live="polite"></p></div>`;
    const sel = i => { $$('.loop-n', el).forEach((g, k) => g.classList.toggle('on', k === i)); $('.loop-d', el).innerHTML = `<b>${i + 1}. ${i === 2 ? 'Prolactin & oxytocin' : N[i].t}.</b> ${N[i].d}`; };
    $$('.loop-n', el).forEach(g => { g.onclick = () => sel(+g.dataset.i); g.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sel(+g.dataset.i); } }; }); sel(0);
  },

  latchSteps: el => stepper(el, [
    { img: 'img/latch-art.jpg', strip: 3, pos: 0, t: 'Mouth wide open', d: 'Touch the baby’s lips with the nipple and wait for a wide gape, like a yawn. Nose opposite the nipple.' },
    { img: 'img/latch-art.jpg', strip: 3, pos: 1, t: 'Chin to breast, lower lip out', d: 'Bring the baby quickly to the breast, chin first. The lower lip curls outward onto the areola.' },
    { img: 'img/latch-art.jpg', strip: 3, pos: 2, t: 'Most of the lower areola in', d: 'Cheeks rounded, more areola visible above the top lip than below. Slow deep sucks follow.' },
    { img: 'img/latch-steps.jpg', t: 'See it in real life', d: 'The same three stages in photos (National Lactation Centre, KKM).' },
  ]),

  expressSteps: el => stepper(el, [
    { img: 'img/express-1.jpg', t: 'Wash and relax', d: 'Wash hands. Sit comfortably; milk flows better when the mother is calm and thinking of her baby.' },
    { img: 'img/express-2.jpg', t: 'Place thumb and finger', d: 'Thumb above the areola, first finger opposite below it, where the breast feels lumpy (milk ducts). Other fingers support the breast.' },
    { img: 'img/express-3.jpg', t: 'Press · compress · release', d: 'Press back toward the chest wall, compress between thumb and finger, then release. Repeat rhythmically.', rhythm: true },
    { img: 'img/express-dont.jpg', t: 'Rotate, and avoid these', d: 'Move around the areola to empty all segments, then switch breasts. Avoid squeezing the nipple or sliding fingers along the skin.' },
  ]),

  storageChart: el => {
    const H = { h: x => x.h, d: x => x.d * 24, m: x => x.m * 730 };
    const hours = r => r ? (r.h ? r.h : r.d ? r.d * 24 : r.m * 730) : 0;
    const ticks = [[1, '1 h'], [4, '4 h'], [24, '1 day'], [168, '1 wk'], [730, '1 mo'], [4380, '6 mo']];
    const lx = 132, rx = 312, sc = h => lx + (Math.log10(h) / Math.log10(4380)) * (rx - lx);
    const short = { room: 'Room 25–37 °C', ac: 'Aircond 15–25 °C', cold: 'Aircond <15 °C', fridge: 'Fridge 2–4 °C', f1: '1-door freezer', f2: '2-door freezer', deep: 'Deep freezer', thaw: 'Thawed (fridge)' };
    el.innerHTML = `<div class="sc"><div class="seg" role="group" aria-label="Baby"><button data-t="healthy" aria-pressed="true">Healthy term</button><button data-t="pre" aria-pressed="false">Preterm / sick</button></div>
      <div class="sc-wrap"><svg viewBox="0 0 324 ${EBM.length * 26 + 34}" role="img" aria-label="Storage time chart, logarithmic scale"><g class="sc-g"></g></svg></div>
      <p class="small muted" style="margin:4px 0 0">Bars are on a log scale so hours and months fit together. Tap a bar for the exact time.</p><p class="sc-d small" aria-live="polite"></p></div>`;
    const draw = t => {
      $$('[data-t]', el).forEach(b => b.setAttribute('aria-pressed', b.dataset.t === t));
      const top = 8; let g = ticks.map(([h, l]) => `<line x1="${sc(h)}" x2="${sc(h)}" y1="${top}" y2="${top + EBM.length * 26}" stroke="var(--line)"/><text x="${sc(h)}" y="${top + EBM.length * 26 + 16}" text-anchor="middle" font-size="10" fill="var(--muted)">${l}</text>`).join('');
      g += EBM.map((r, i) => { const v = hours(r[t]); const y = top + i * 26; const frozen = /f1|f2|deep/.test(r.id);
        return `<text x="0" y="${y + 16}" font-size="11.5" fill="var(--ink)">${short[r.id]}</text>` + (v ? `<rect class="sc-bar" data-i="${i}" x="${lx}" y="${y + 5}" width="${Math.max(4, sc(v) - lx)}" height="15" rx="4" fill="${frozen ? 'var(--brand)' : r.id === 'thaw' ? 'var(--warn)' : 'var(--warm)'}"/>` : `<text x="${lx + 2}" y="${y + 16}" font-size="11" fill="var(--bad)" font-weight="700">Not recommended</text>`); }).join('');
      $('.sc-g', el).innerHTML = g;
      $$('.sc-bar', el).forEach(b => b.onclick = () => { const r = EBM[+b.dataset.i]; $('.sc-d', el).innerHTML = `<b>${esc(r.label)}:</b> ${ruleText(r[t])}${r.note ? '. ' + esc(r.note) : ''}`; });
      $('.sc-d', el).textContent = '';
    };
    $$('[data-t]', el).forEach(b => b.onclick = () => draw(b.dataset.t)); draw('healthy');
  },

  latchCompare: el => {
    const flip = Math.random() < .5;
    const A = [{ src: 'img/latch-good.jpg', good: true }, { src: 'img/latch-poor.jpg', good: false }]; if (flip) A.reverse();
    el.innerHTML = `<div class="lc">${A.map((a, i) => `<button class="lc-o" data-g="${a.good}"><img src="${a.src}" alt="Attachment drawing ${'AB'[i]}"><span>${'AB'[i]}</span></button>`).join('')}</div><div class="lc-d" aria-live="polite"><span class="muted small">Tap the drawing that shows good attachment.</span></div>`;
    $$('.lc-o', el).forEach(b => b.onclick = () => {
      const ok = b.dataset.g === 'true';
      $$('.lc-o', el).forEach(x => x.classList.add(x.dataset.g === 'true' ? 'right' : 'wrong'));
      $('.lc-d', el).innerHTML = `<div class="feedback ${ok ? 'good' : 'bad'}"><b>${ok ? 'Correct' : 'Look again'}</b>Good attachment: chin pressed into the breast, mouth wide, lower lip out, and more dark areola visible above the top lip. In the poor latch the chin is away and almost all the areola is outside the mouth, so the baby sucks on the nipple.</div>`;
    });
  },

  codeSort: el => {
    const items = shuffle([
      ['Formula bought through normal hospital procurement', true],
      ['Free tins of formula delivered to the ward', false],
      ['Pens and notepads carrying a formula brand', false],
      ['Scientific, factual product information given to doctors', true],
      ['Discharge gift bag with formula samples', false],
      ['A formula company’s "mothercraft" talk for pregnant women', false],
      ['Formula kept in a closed cupboard out of mothers’ view', true],
      ['A company-sponsored dinner for the nursing team', false],
      ['One-to-one teaching on safe formula preparation for a mother who needs it', true],
      ['A clinic poster of a smiling baby with a growing-up milk logo', false],
    ]);
    let i = 0, score = 0;
    const draw = () => {
      if (i >= items.length) { el.innerHTML = `<div class="cs-done"><div class="score">${score}/${items.length}</div><p>correct</p><button class="btn sec" id="csAgain">Play again</button></div>`; $('#csAgain', el).onclick = () => W.codeSort(el); return; }
      el.innerHTML = `<div class="sort"><div class="qtop"><div class="bar"><i style="width:${i / items.length * 100}%"></i></div><span class="qcount">${i + 1}/${items.length}</span></div>
        <div class="sort-card">${esc(items[i][0])}</div>
        <div class="row-btns"><button class="btn" style="background:var(--good);color:var(--surface)" data-a="1">Allowed</button><button class="btn" style="background:var(--bad);color:var(--surface)" data-a="0">Violation</button></div><div class="sort-fb" aria-live="polite"></div></div>`;
      $$('[data-a]', el).forEach(b => b.onclick = () => {
        const ok = (b.dataset.a === '1') === items[i][1]; if (ok) score++;
        $$('[data-a]', el).forEach(x => x.disabled = true);
        $('.sort-fb', el).innerHTML = `<div class="feedback ${ok ? 'good' : 'bad'}"><b>${ok ? 'Correct' : 'Not quite'}</b>${items[i][1] ? 'This is allowed under the Code.' : 'This breaks the Code: it promotes products or creates a conflict of interest.'}<div style="text-align:right;margin-top:8px"><button class="btn" id="srtN">Next</button></div></div>`;
        $('#srtN', el).onclick = () => { i++; draw(); };
      });
    };
    draw();
  },
};

function stepper(el, steps) {
  let i = 0;
  el.innerHTML = `<div class="stp"><div class="stp-img"></div><div class="stp-b"><span class="stp-n"></span><b class="stp-t"></b><p class="stp-d"></p><div class="stp-r"></div>
    <div class="stp-nav"><button class="btn ghost" data-d="-1" aria-label="Previous step">‹</button><div class="dots">${steps.map((_, k) => `<i data-k="${k}"></i>`).join('')}</div><button class="btn" data-d="1" aria-label="Next step">›</button></div></div></div>`;
  let timer = null;
  const draw = () => {
    const s = steps[i]; clearInterval(timer);
    $('.stp-img', el).innerHTML = s.strip ? `<div class="strip" style="aspect-ratio:${300 / 204}"><img src="${s.img}" alt="${esc(s.t)}" style="width:${s.strip * 100}%;transform:translateX(-${s.pos / s.strip * 100}%)"></div>` : `<img src="${s.img}" alt="${esc(s.t)}">`;
    $('.stp-n', el).textContent = `Step ${i + 1} of ${steps.length}`; $('.stp-t', el).textContent = s.t; $('.stp-d', el).textContent = s.d;
    $$('.dots i', el).forEach((d, k) => d.classList.toggle('on', k === i));
    $('[data-d="-1"]', el).disabled = i === 0; $('[data-d="1"]', el).disabled = i === steps.length - 1;
    const rr = $('.stp-r', el);
    rr.innerHTML = s.rhythm ? `<button class="btn sec" id="rhy">▶ Practise the rhythm</button><div class="rhy" hidden><span class="rhy-dot"></span><b class="rhy-w">Press</b></div>` : '';
    if (s.rhythm) $('#rhy', el).onclick = () => {
      const box = $('.rhy', el), w = $('.rhy-w', el), dot = $('.rhy-dot', el); if (timer) { clearInterval(timer); timer = null; box.hidden = true; $('#rhy', el).textContent = '▶ Practise the rhythm'; return; }
      box.hidden = false; $('#rhy', el).textContent = '■ Stop'; const words = ['Press back', 'Compress', 'Release']; let k = 0;
      const tick = () => { w.textContent = words[k % 3]; dot.className = 'rhy-dot s' + (k % 3); k++; }; tick(); timer = setInterval(tick, 1100);
    };
  };
  $$('[data-d]', el).forEach(b => b.onclick = () => { i = Math.max(0, Math.min(steps.length - 1, i + +b.dataset.d)); draw(); });
  $$('.dots i', el).forEach(d => d.onclick = () => { i = +d.dataset.k; draw(); });
  let sx = null; const im = $('.stp-img', el);
  im.addEventListener('touchstart', e => { sx = e.touches[0].clientX; e.stopPropagation(); }, { passive: true });
  im.addEventListener('touchend', e => { e.stopPropagation(); if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) { i = Math.max(0, Math.min(steps.length - 1, i + (dx < 0 ? 1 : -1))); draw(); } sx = null; });
  draw();
}
function mountWidgets(root) { $$('[data-widget]', root).forEach(el => { const f = W[el.dataset.widget]; if (f) try { f(el); } catch (e) { el.textContent = ''; } }); }
function richBody(html) {
  return html.replace(/\{\{fig:([^|}]+)\|([^|}]*)\|?([^}]*)\}\}/g, (_, s, a, c) => fig(s, a, c))
             .replace(/\{\{w:(\w+)\}\}/g, (_, n) => `<div class="widget" data-widget="${n}"></div>`);
}
