/* ---------- Ask: offline retrieval (BM25) + streamed AI answers ---------- */
const STOP = new Set('a an the of to and or in on for is are be was were with what how when why which who whom does do did can could should would will i me my we our you your it its this that these those at as by from into about than then if not no yes per there their they them he she his her has have had any all some more most much many very also just only'.split(' '));
const SYN = {
  ebm: ['expressed', 'milk'], kmc: ['skin'], kangaroo: ['skin'], formula: ['substitute', 'supplement'], supplement: ['formula'],
  susu: ['milk'], ibu: ['mother'], perah: ['express'], memerah: ['express'], perahan: ['expressed'], bayi: ['baby'], kulit: ['skin'],
  botol: ['bottle'], puting: ['teat', 'nipple'], sejuk: ['fridge'], peti: ['fridge'], simpan: ['store', 'storage'], penyimpanan: ['storage'],
  kolostrum: ['colostrum'], menyusu: ['breastfeed'], menyusukan: ['breastfeed'], penyusuan: ['breastfeeding'], pelekapan: ['attachment', 'latch'],
  latch: ['attachment'], attach: ['attachment'], fridge: ['refrigerator'], freezer: ['frozen', 'freeze'], beku: ['frozen', 'freezer'],
  nicu: ['neonatal', 'preterm'], scn: ['neonatal', 'preterm'], preemie: ['preterm'], premature: ['preterm'], pramatang: ['preterm'],
  csection: ['caesarean'], cs: ['caesarean'], lscs: ['caesarean'], cesarean: ['caesarean'], dummy: ['pacifier'], pacifier: ['dummy'], teat: ['bottle'],
  code: ['marketing'], assessor: ['assessment', 'interview'], tanda: ['cue', 'sign'], lapar: ['hunger', 'cue'], hungry: ['cue'], rooming: ['together'],
  water: ['fluids'], air: ['water'], glucose: ['fluids', 'supplement'], sore: ['nipple', 'cracked'], cracked: ['sore'], engorgement: ['engorged', 'full'],
  thaw: ['thawed'], warm: ['warmed', 'warming'], microwave: ['warming'], discharge: ['home', 'support'], policy: ['written'], train: ['training', 'competency'],
  rakan: ['baby', 'friendly'], hrb: ['baby', 'friendly'], 'hospital': [], kerja: ['work'], work: ['returning'], cawan: ['cup'], cup: ['cupfeed'],
};
function stem(w) {
  if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3);
  if (w.length > 4 && w.endsWith('ed')) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  return w;
}
function toks(t, expand) {
  const out = [];
  (t.toLowerCase().replace(/[’']/g, '').match(/[a-z0-9]+/g) || []).forEach(w => {
    if (STOP.has(w)) return; out.push(stem(w));
    if (expand && SYN[w]) SYN[w].forEach(s => out.push(stem(s)));
  });
  return out;
}
let CH = null, DF = {}, AVG = 1;
function buildIndex() {
  CH = [];
  LESSONS.forEach(l => {
    const d = document.createElement('div'); d.innerHTML = l.body.replace(/\{\{[^}]*\}\}/g, '');
    $$('p, li, .callout, dt, tr', d).forEach(b => {
      if (b.closest('.cue')) return;
      let t = b.textContent.replace(/\s+/g, ' ').trim();
      if (b.tagName === 'DT') { const dd = b.nextElementSibling; if (dd) t = 'Myth: ' + t + ' Fact: ' + dd.textContent.replace(/\s+/g, ' ').trim(); }
      if (b.tagName === 'TR') {
        if (b.querySelector('th')) return;
        const hs = [...(b.closest('table') || d).querySelectorAll('th')].map(h => h.textContent.trim());
        t = [...b.children].map((c, i) => (hs[i] ? hs[i] + ': ' : '') + c.textContent.trim()).join(' · ');
      }
      if (t.length < 20) return;
      CH.push({ l: l.id, k: 'lesson', t, ctx: l.title });
    });
    (l.checks || []).forEach(c => CH.push({ l: l.id, k: 'check', t: 'Assessors look for: ' + c, ctx: l.title }));
    if (l.bm) CH.push({ l: l.id, k: 'bm', t: 'Say to mothers (BM): ' + l.bm, ctx: l.title });
  });
  QUESTIONS.forEach(q => CH.push({ l: q.step, k: 'quiz', t: q.q.replace(/…$/, '') + ' — ' + q.o[q.a] + '. ' + q.w, ctx: L[q.step].title }));
  INTERVIEW.forEach(c => CH.push({ l: c.step, k: 'interview', t: 'Assessor asks ' + (c.who === 'Staff' ? 'staff' : 'mothers') + ': "' + c.q + '" Good answer: ' + c.a, ctx: L[c.step].title }));
  let tot = 0; DF = {};
  CH.forEach(c => { c.tk = toks(c.t + ' ' + c.ctx + ' ' + c.ctx); tot += c.tk.length; c.tf = {}; c.tk.forEach(w => c.tf[w] = (c.tf[w] || 0) + 1); Object.keys(c.tf).forEach(w => DF[w] = (DF[w] || 0) + 1); });
  AVG = tot / CH.length;
}
function retrieve(q, n = 10) {
  if (!CH) buildIndex();
  const qt = [...new Set(toks(q, true))]; const N = CH.length, k1 = 1.4, b = .75; const ql = q.toLowerCase().trim();
  const sc = CH.map(c => {
    let s = 0;
    qt.forEach(w => { const f = c.tf[w]; if (!f) return; const idf = Math.log(1 + (N - DF[w] + .5) / (DF[w] + .5)); s += idf * f * (k1 + 1) / (f + k1 * (1 - b + b * c.tk.length / AVG)); });
    if (s && ql.length > 6 && c.t.toLowerCase().includes(ql)) s *= 1.5;
    s *= { lesson: 1.25, check: .9, bm: .9, quiz: .85, interview: 1 }[c.k];
    return { c, s };
  }).filter(x => x.s > 0).sort((a, b) => b.s - a.s);
  const per = {}, out = [];
  for (const x of sc) { per[x.c.l] = (per[x.c.l] || 0) + 1; if (per[x.c.l] > 4) continue; out.push(x); if (out.length >= n) break; }
  return { hits: out, qt };
}
function hlTerms(text, qt) {
  return esc(text).replace(/[A-Za-z0-9]+/g, w => qt.includes(stem(w.toLowerCase())) && !STOP.has(w.toLowerCase()) ? `<mark>${w}</mark>` : w);
}

/* AI providers: Claude account inside the claude.ai viewer, or the user's own API key elsewhere */
let SAMPLE = null, sampleReady = false, aiDenied = false;
const samplePromise = (window.claude && typeof window.claude.use === 'function')
  ? Promise.race([window.claude.use('sample'), new Promise(r => setTimeout(() => r(null), 12000))]).catch(() => null)
  : Promise.resolve(null);
samplePromise.then(s => { SAMPLE = s; sampleReady = true; if (tab === 'ask' || (tab === 'tools' && cur()[0] === 'settings')) render(); });
function aiMode() {
  if (aiDenied) return null;
  if (SAMPLE) return 'claude';
  if (S.ai && S.ai.key) return navigator.onLine === false ? 'offline' : 'key';
  return null;
}
const MODELS = { 'claude-haiku-5-5': 'Claude Haiku 5.5', 'claude-sonnet-5-5': 'Claude Sonnet 5.5' };
const RULES = `You are the BFHI Learn tutor for hospital staff in Malaysia preparing for Baby-friendly Hospital Initiative (Hospital Rakan Bayi) assessment, including NICU and SCN staff.
Answer the question using the numbered reference notes taken from the app's lessons. Cite the notes you rely on with their numbers in square brackets, like [2] or [1, 3].
If the notes do not cover the question, say so in one short sentence, then give a brief answer from WHO/UNICEF BFHI guidance and end that part with "(general guidance, not from the app)".
Be accurate and practical. Keep the answer under 170 words: one direct sentence first, then up to 5 short bullet points starting with "- ". Use **bold** sparingly. No headings, no tables.
If the question is written in Bahasa Malaysia, answer in Bahasa Malaysia. For decisions about an individual patient, remind the reader to follow hospital policy or consult the doctor or lactation counsellor.`;
function notesFor(hits) { return hits.map((x, i) => `[${i + 1}] (Lesson: ${x.c.ctx}) ${x.c.t}`).join('\n'); }
async function askAI(turn, history, onText, signal) {
  const finalUser = `Reference notes:\n${notesFor(turn.hits)}\n\nQuestion: ${turn.q}`;
  const past = [];
  history.slice(-3).forEach(t => { if (t.answer) { past.push({ role: 'user', content: 'Question: ' + t.q }); past.push({ role: 'assistant', content: t.answer.replace(/\s*\[\d+(?:\s*,\s*\d+)*\]/g, '') }); } });
  if (SAMPLE) {
    const r = await SAMPLE([{ role: 'user', content: RULES }, ...past, { role: 'user', content: finalUser }], { modelTier: 'quick', cache: false, signal, onText: ({ text }) => onText(text) });
    return r.text;
  }
  let res;
  try {
    res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', signal,
      headers: { 'content-type': 'application/json', 'x-api-key': S.ai.key, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({ model: S.ai.model || 'claude-haiku-5-5', max_tokens: 900, stream: true, system: RULES, messages: [...past, { role: 'user', content: finalUser }] }),
    });
  } catch (e) { if (e && e.name === 'AbortError') throw { code: 'cancelled' }; throw { code: 'network' }; }
  if (!res.ok) {
    let m = ''; try { m = (await res.json()).error.message; } catch (e) {}
    throw { code: res.status === 401 || res.status === 403 ? 'bad_key' : res.status === 429 ? 'rate_limited' : 'upstream_error', message: m };
  }
  const rd = res.body.getReader(), dec = new TextDecoder(); let buf = '', text = '';
  try {
    for (;;) {
      const { done, value } = await rd.read(); if (done) break;
      buf += dec.decode(value, { stream: true }); let i;
      while ((i = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
        if (!line.startsWith('data:')) continue;
        let ev; try { ev = JSON.parse(line.slice(5)); } catch (e) { continue; }
        if (ev.type === 'content_block_delta' && ev.delta && ev.delta.type === 'text_delta') { text += ev.delta.text; onText(text); }
        else if (ev.type === 'error') throw { code: 'upstream_error', message: ev.error && ev.error.message, text };
      }
    }
  } catch (e) { if (e && e.name === 'AbortError') throw { code: 'cancelled', text }; throw e.code ? e : { code: 'network', text }; }
  if (!text.trim()) throw { code: 'empty_completion' };
  return text;
}
function md(t, hits) {
  const cite = s => s.replace(/\[(\d+(?:\s*,\s*\d+)*)\]/g, (m, g) => g.split(',').map(n => { const x = hits[+n.trim() - 1]; return x ? `<button class="cite" data-cite="${x.c.l}" title="${esc(L[x.c.l].title)}">${+n.trim()}</button>` : ''; }).join(''));
  const inline = s => cite(esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'));
  const out = []; let list = null;
  t.split('\n').forEach(raw => {
    const line = raw.trim();
    const m = line.match(/^(?:[-•*]|\d+[.)])\s+(.*)$/);
    if (m) { if (!list) { list = []; } list.push(`<li>${inline(m[1])}</li>`); return; }
    if (list) { out.push(`<ul>${list.join('')}</ul>`); list = null; }
    if (!line) return;
    out.push(`<p>${inline(line.replace(/^#+\s*/, ''))}</p>`);
  });
  if (list) out.push(`<ul>${list.join('')}</ul>`);
  return out.join('');
}
const AI_ERR = {
  not_granted: 'Claude was not allowed for this page. Answers from your lessons are shown instead.',
  sampling_disabled: 'Claude is not available for this account. Answers from your lessons are shown instead.',
  rate_limited: 'Too many questions at once or a usage limit was reached. Try again in a little while.',
  bad_key: 'The API key was rejected. Check it in Tools → Settings.',
  network: 'No connection to the AI service. Answers from your lessons are shown instead.',
  empty_completion: 'The AI returned no answer. Try rephrasing the question.',
  refused: 'The AI declined this question. Try rephrasing it.',
  session_expired: 'Your Claude session expired. Sign in again to use AI answers.',
};
const ASK = { turns: [], ctl: null };
function askRun(q) {
  q = q.trim(); if (!q) return;
  S.recent = [q, ...(S.recent || []).filter(x => x !== q)].slice(0, 8); save(); touchStreak();
  const prev = ASK.turns[ASK.turns.length - 1];
  let r = retrieve(q);
  if (prev && toks(q).length < 5) { const r2 = retrieve(q + ' ' + prev.q); if (!r.hits.length || (r2.hits[0] && r2.hits[0].s > r.hits[0].s)) r = r2; }
  const turn = { q, hits: r.hits, qt: r.qt, answer: '', status: 'idle' };
  const history = ASK.turns.slice();
  ASK.turns.push(turn);
  const mode = aiMode();
  if (mode === 'claude' || mode === 'key') {
    if (ASK.ctl) ASK.ctl.abort();
    const ctl = new AbortController(); ASK.ctl = ctl; turn.status = 'thinking';
    askAI(turn, history, text => { turn.answer = text; turn.status = 'streaming'; paintAnswer(turn); }, ctl.signal)
      .then(text => { turn.answer = text; turn.status = 'done'; })
      .catch(e => { turn.status = e.code === 'cancelled' ? (turn.answer ? 'done' : 'stopped') : 'error'; turn.err = e.code; if (e.text) turn.answer = e.text; if (e.code === 'not_granted' || e.code === 'sampling_disabled') aiDenied = true; })
      .finally(() => { if (ASK.ctl === ctl) ASK.ctl = null; paintAnswer(turn); });
  }
}
function answerCard(turn, idx) {
  const st = turn.status;
  if (st === 'idle') return '';
  const body = turn.answer ? md(turn.answer, turn.hits) : '';
  const prov = SAMPLE ? 'Claude' : MODELS[(S.ai && S.ai.model) || 'claude-haiku-5-5'];
  return `<div class="ai-card" id="ans-${idx}"><div class="ai-h"><span class="ai-badge">${ICON.spark}AI answer</span><span class="small muted">${esc(prov)}</span></div>
    <div class="ai-md">${body || (st === 'thinking' || st === 'streaming' ? '<p class="ai-wait"><span></span><span></span><span></span> Reading your lessons…</p>' : '')}</div>
    ${st === 'error' ? `<p class="ai-err">${esc(AI_ERR[turn.err] || 'The AI answer was interrupted. Try again.')}</p>` : ''}
    ${st === 'stopped' ? '<p class="small muted">Stopped.</p>' : ''}
    <div class="ai-f">${st === 'thinking' || st === 'streaming' ? '<button class="linkbtn" data-stop>Stop</button>' : st === 'error' ? `<button class="linkbtn" data-retry="${idx}">Try again</button>` : '<span class="small muted">Numbers link to the lesson each point came from. Check against hospital policy.</span>'}</div></div>`;
}
function paintAnswer(turn) {
  const idx = ASK.turns.indexOf(turn); const el = document.getElementById('ans-' + idx);
  if (!el || tab !== 'ask' || cur()[0] !== 'ask') return;
  el.outerHTML = answerCard(turn, idx);
}
function lessonMatches(turn, idx) {
  if (!turn.hits.length) return `<div class="card small muted">Nothing in the lessons matches “${esc(turn.q)}”. Try other words, e.g. “fridge”, “caesarean”, “pacifier”.</div>`;
  const top = turn.hits[0], second = turn.hits[1];
  const best = [top].concat(second && second.s > top.s * .6 && second.c.l === top.c.l ? [second] : []);
  const showBest = turn.status === 'idle';
  return `${showBest ? `<div class="best"><span class="ai-badge plain">${ICON.book}Best match in your lessons</span>${best.map(x => `<p>${hlTerms(x.c.t, turn.qt)}</p>`).join('')}<button class="linkbtn" data-cite="${top.c.l}">Open “${esc(L[top.c.l].title)}” ›</button></div>` : ''}
  <h2 class="sh">${showBest ? 'More from the lessons' : 'Sources from your lessons'}</h2>
  <div class="group">${turn.hits.slice(showBest ? best.length : 0, 6).map((x, k) => `<button class="row src" data-cite="${x.c.l}">${showBest ? `<span class="badge">${esc(L[x.c.l].badge)}</span>` : `<span class="badge">${turn.hits.indexOf(x) + 1}</span>`}<span class="tx"><span class="tt">${esc(L[x.c.l].title)} <span class="pill">${{ lesson: 'Lesson', check: 'Assessor check', bm: 'BM phrase', quiz: 'Quiz', interview: 'Interview' }[x.c.k]}</span></span><span class="ts2">${hlTerms(x.c.t, turn.qt)}</span></span>${ICON.chev}</button>`).join('')}</div>`;
}
const SUGGEST = [
  'How long can expressed milk stay in the fridge for a preterm baby?',
  'What are acceptable medical reasons to give formula?',
  'How do I support skin-to-skin after a caesarean?',
  'What will the assessor ask mothers about feeding cues?',
  'Is a pacifier ever allowed in NICU?',
  'Bagaimana cara memerah susu dengan tangan?',
];
VIEWS.ask = () => {
  const mode = aiMode(); const n = ASK.turns.length;
  const stat = mode === 'claude' ? ['good', 'AI on · your Claude account'] : mode === 'key' ? ['good', 'AI on · ' + MODELS[S.ai.model || 'claude-haiku-5-5']] : mode === 'offline' ? ['warn', 'Offline · answers from lessons'] : !sampleReady && window.claude ? ['', 'Connecting AI…'] : ['', 'Lesson search · AI not set up'];
  return { title: 'Ask', html: `
  <h1 class="lt" style="margin-top:12px">Ask</h1>
  <form class="askbar" id="askF" role="search"><input id="askQ" type="search" enterkeyhint="search" autocomplete="off" placeholder="${n ? 'Ask a follow-up…' : 'Ask anything about BFHI'}" aria-label="Your question"><button class="askgo" aria-label="Ask">${ICON.send}</button></form>
  <div class="askmeta"><span class="pill ${stat[0]}">${stat[1]}</span>${!mode ? '<button class="linkbtn small" id="aiSetup">Set up AI</button>' : ''}${n ? '<button class="linkbtn small" id="askClear">New topic</button>' : ''}</div>
  ${n ? ASK.turns.map((t, i) => ({ t, i })).reverse().map(({ t, i }) => `<section class="turn"><p class="qbub">${esc(t.q)}</p>${answerCard(t, i)}${lessonMatches(t, i)}</section>`).join('') : `
  <h2 class="sh">Try asking</h2><div class="sugg">${SUGGEST.map(s => `<button class="chip" data-ask="${esc(s)}">${esc(s)}</button>`).join('')}</div>
  ${(S.recent || []).length ? `<h2 class="sh">Recent</h2><div class="group">${S.recent.map(s => `<button class="row" data-ask="${esc(s)}"><span class="tx"><span class="tt" style="font-weight:500">${esc(s)}</span></span>${ICON.chev}</button>`).join('')}</div>` : ''}
  <p class="small muted" style="margin:16px 4px">Search works offline across every lesson, quiz explanation and assessor question. ${mode ? 'AI answers are written from those same notes and cite them.' : 'Add AI in Tools → Settings for written answers.'}</p>`}`,
  after(v) {
    const inp = $('#askQ');
    if (ASK.pending) { inp.value = ''; const p = ASK.pending; ASK.pending = null; askRun(p); render(); return; }
    $('#askF').addEventListener('submit', e => { e.preventDefault(); const q = inp.value; inp.blur(); askRun(q); render(); window.scrollTo(0, 0); });
    $$('[data-ask]', v).forEach(b => b.onclick = () => { askRun(b.dataset.ask); render(); window.scrollTo(0, 0); });
    const c = $('#askClear'); if (c) c.onclick = () => { if (ASK.ctl) ASK.ctl.abort(); ASK.turns = []; render(); setTimeout(() => $('#askQ') && $('#askQ').focus(), 50); };
    const su = $('#aiSetup'); if (su) su.onclick = () => { tab = 'tools'; stacks.tools = [['tools'], ['settings']]; render(true); window.scrollTo(0, 0); };
    if (ASK.focus) { ASK.focus = false; setTimeout(() => inp.focus(), 60); }
  } };
};
function openAsk(q) { tab = 'ask'; stacks.ask = [['ask']]; if (q) ASK.pending = q; else ASK.focus = true; render(true); window.scrollTo(0, 0); }
