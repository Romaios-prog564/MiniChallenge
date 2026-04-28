/* ============================================================
   MiniChallenge — Vanilla JS app
   All state in localStorage. No backend required.
   ============================================================ */

/* ---------- Categories & Challenges ---------- */
const CATEGORIES = [
  { id: 'fitness',      label: 'Fitness',      emoji: '💪', color: '#FF5757' },
  { id: 'learning',     label: 'Learning',     emoji: '📚', color: '#3B82F6' },
  { id: 'creativity',   label: 'Creativity',   emoji: '🎨', color: '#FFD166' },
  { id: 'mindfulness',  label: 'Mindfulness',  emoji: '🧘', color: '#4ADE80' },
  { id: 'productivity', label: 'Productivity', emoji: '⚡', color: '#C4B5FD' },
  { id: 'social',       label: 'Social',       emoji: '💬', color: '#FFC9A3' },
];

const CHALLENGES = [
  // Fitness
  { id: 'f01', category: 'fitness', title: 'Do 10 pushups',                  detail: "Anywhere. Full or knee pushups both count.", minutes: 2, emoji: '💪' },
  { id: 'f02', category: 'fitness', title: 'Hold a 60-second plank',         detail: "Keep your core tight and breathe.", minutes: 2, emoji: '🔥' },
  { id: 'f03', category: 'fitness', title: '20 bodyweight squats',           detail: "Slow and controlled. Full range.", minutes: 3, emoji: '🦵' },
  { id: 'f04', category: 'fitness', title: 'Take a 5-minute brisk walk',     detail: "Get outside if you can. Move.", minutes: 5, emoji: '🚶' },
  { id: 'f05', category: 'fitness', title: 'Stretch your full body',         detail: "5 minutes. Neck, back, legs, arms.", minutes: 5, emoji: '🤸' },
  { id: 'f06', category: 'fitness', title: 'Climb 3 flights of stairs',      detail: "Elevator is cancelled today.", minutes: 3, emoji: '🪜' },
  { id: 'f07', category: 'fitness', title: 'Dance to one song',              detail: "Pick any banger. No one's watching.", minutes: 4, emoji: '🕺' },
  { id: 'f08', category: 'fitness', title: '30 jumping jacks',               detail: "Wake up your whole body.", minutes: 2, emoji: '⚡' },
  { id: 'f09', category: 'fitness', title: 'Do 15 lunges per leg',           detail: "Keep that back knee soft.", minutes: 3, emoji: '🏋️' },
  { id: 'f10', category: 'fitness', title: 'Drink a full glass of water',    detail: "Right now. Then one more.", minutes: 1, emoji: '💧' },

  // Learning
  { id: 'l01', category: 'learning', title: 'Learn 3 new English words',     detail: "Look them up and use each in a sentence.", minutes: 5, emoji: '📖' },
  { id: 'l02', category: 'learning', title: 'Read 5 pages of a book',        detail: "Any book. Fiction or non-fiction.", minutes: 5, emoji: '📚' },
  { id: 'l03', category: 'learning', title: 'Watch a TED talk summary',      detail: "Pick a topic you know nothing about.", minutes: 5, emoji: '🎓' },
  { id: 'l04', category: 'learning', title: 'Learn 1 keyboard shortcut',     detail: "Something you don't know yet. Use it 3 times.", minutes: 3, emoji: '⌨️' },
  { id: 'l05', category: 'learning', title: 'Look up a word you half-know',  detail: "Actually learn its real meaning.", minutes: 2, emoji: '🔍' },
  { id: 'l06', category: 'learning', title: 'Memorize a short quote',        detail: "Say it out loud 5 times.", minutes: 3, emoji: '💭' },
  { id: 'l07', category: 'learning', title: 'Learn 5 words in a new language', detail: "Basic greetings work great.", minutes: 5, emoji: '🌍' },
  { id: 'l08', category: 'learning', title: 'Read 1 Wikipedia article',      detail: "Random article button. Let the universe decide.", minutes: 5, emoji: '🧠' },
  { id: 'l09', category: 'learning', title: 'Explain a concept in 3 sentences', detail: "Pick something you know. Simplify it.", minutes: 4, emoji: '✏️' },
  { id: 'l10', category: 'learning', title: 'Watch a how-to video',          detail: "Learn a new skill you've been curious about.", minutes: 5, emoji: '📺' },

  // Creativity
  { id: 'c01', category: 'creativity', title: 'Write 1 new idea',            detail: "Any idea. App, product, story, song.", minutes: 3, emoji: '💡' },
  { id: 'c02', category: 'creativity', title: 'Sketch something for 5 minutes', detail: "Pen, paper, zero judgement.", minutes: 5, emoji: '✏️' },
  { id: 'c03', category: 'creativity', title: 'Write a 2-line poem',         detail: "About anything around you.", minutes: 3, emoji: '📝' },
  { id: 'c04', category: 'creativity', title: 'Take a creative photo',       detail: "Unusual angle. Find beauty in the mundane.", minutes: 3, emoji: '📸' },
  { id: 'c05', category: 'creativity', title: 'Brainstorm 10 wild ideas',    detail: "Quantity over quality. Go weird.", minutes: 5, emoji: '🌪️' },
  { id: 'c06', category: 'creativity', title: 'Freewrite for 5 minutes',     detail: "No editing. No stopping. Just type.", minutes: 5, emoji: '✍️' },
  { id: 'c07', category: 'creativity', title: 'Rearrange one thing in your space', detail: "Small change. New perspective.", minutes: 4, emoji: '🪴' },
  { id: 'c08', category: 'creativity', title: 'Come up with a product name', detail: "For a random object near you.", minutes: 3, emoji: '🏷️' },
  { id: 'c09', category: 'creativity', title: 'Hum and record a melody',     detail: "10 seconds. Save the voice memo.", minutes: 3, emoji: '🎵' },
  { id: 'c10', category: 'creativity', title: 'Draw your mood as a shape',   detail: "Abstract. No rules.", minutes: 4, emoji: '🖌️' },

  // Mindfulness
  { id: 'm01', category: 'mindfulness', title: 'Take 10 deep breaths',       detail: "Inhale 4s, hold 4s, exhale 6s.", minutes: 2, emoji: '🌬️' },
  { id: 'm02', category: 'mindfulness', title: "Write 3 things you're grateful for", detail: "Small things count double.", minutes: 3, emoji: '🙏' },
  { id: 'm03', category: 'mindfulness', title: '5-minute meditation',        detail: "Sit, close eyes, notice breath.", minutes: 5, emoji: '🧘' },
  { id: 'm04', category: 'mindfulness', title: 'Name 5 things you can see',  detail: "Grounding exercise. Look slowly.", minutes: 2, emoji: '👀' },
  { id: 'm05', category: 'mindfulness', title: 'Step outside for fresh air', detail: "2 full minutes. Phone stays inside.", minutes: 2, emoji: '🌿' },
  { id: 'm06', category: 'mindfulness', title: 'Do a 1-minute body scan',    detail: "Head to toe. Relax what's tense.", minutes: 2, emoji: '🌀' },
  { id: 'm07', category: 'mindfulness', title: 'Sit in silence for 3 minutes', detail: "No phone, no music. Just be.", minutes: 3, emoji: '🤫' },
  { id: 'm08', category: 'mindfulness', title: 'Journal one feeling',        detail: "Name it. Describe where you feel it.", minutes: 4, emoji: '📓' },
  { id: 'm09', category: 'mindfulness', title: 'Smile at yourself in the mirror', detail: "Hold it for 30 seconds. Weird but works.", minutes: 1, emoji: '😊' },
  { id: 'm10', category: 'mindfulness', title: 'Text someone a kind thought', detail: "About them, not you.", minutes: 3, emoji: '💌' },

  // Productivity
  { id: 'p01', category: 'productivity', title: "Plan tomorrow's top 3 tasks", detail: "Just 3. Write them down.", minutes: 4, emoji: '📋' },
  { id: 'p02', category: 'productivity', title: 'Clear 5 emails from your inbox', detail: "Archive, reply, or delete. No mercy.", minutes: 5, emoji: '📧' },
  { id: 'p03', category: 'productivity', title: 'Organize your desktop',     detail: "5 minutes of tidying.", minutes: 5, emoji: '🖥️' },
  { id: 'p04', category: 'productivity', title: 'Unsubscribe from 3 newsletters', detail: "Reclaim your inbox.", minutes: 3, emoji: '🗑️' },
  { id: 'p05', category: 'productivity', title: 'Write your next-action step', detail: "For the project you've been avoiding.", minutes: 3, emoji: '🎯' },
  { id: 'p06', category: 'productivity', title: 'Time-box a task for 5 minutes', detail: "One task. No multitasking. Go.", minutes: 5, emoji: '⏱️' },
  { id: 'p07', category: 'productivity', title: 'Turn off 3 phone notifications', detail: "You don't need all of them.", minutes: 3, emoji: '🔕' },
  { id: 'p08', category: 'productivity', title: 'Tidy one surface',          detail: "Desk, nightstand, or counter. Just one.", minutes: 5, emoji: '🧹' },
  { id: 'p09', category: 'productivity', title: "Review yesterday's wins",   detail: "Write 3 things you actually finished.", minutes: 3, emoji: '🏆' },
  { id: 'p10', category: 'productivity', title: 'Set a single daily priority', detail: "Just one. The important thing.", minutes: 2, emoji: '⭐' },

  // Social
  { id: 's01', category: 'social', title: 'Message a friend you miss',       detail: "A simple 'thinking of you' is enough.", minutes: 3, emoji: '💬' },
  { id: 's02', category: 'social', title: 'Give someone a sincere compliment', detail: "In person or online. Make it specific.", minutes: 2, emoji: '✨' },
  { id: 's03', category: 'social', title: 'Call a family member',            detail: "Even 2 minutes counts.", minutes: 5, emoji: '📞' },
  { id: 's04', category: 'social', title: 'Introduce yourself to someone new', detail: "Online community or real life.", minutes: 4, emoji: '👋' },
  { id: 's05', category: 'social', title: 'Thank someone who helped you',    detail: "Past or present. A simple message.", minutes: 3, emoji: '🙌' },
  { id: 's06', category: 'social', title: 'Ask someone how their day is',    detail: "Really listen to the answer.", minutes: 4, emoji: '👂' },
  { id: 's07', category: 'social', title: 'Share something useful',          detail: "A tip, a link, a recipe. Send it to one person.", minutes: 3, emoji: '🔗' },
  { id: 's08', category: 'social', title: "Reply to that message you've been putting off", detail: "You know the one.", minutes: 3, emoji: '💌' },
  { id: 's09', category: 'social', title: 'Make eye contact & smile 3 times', detail: "Stranger or familiar. Spread warmth.", minutes: 5, emoji: '😊' },
  { id: 's10', category: 'social', title: 'Recommend a friend something',    detail: "Book, show, song — whatever you loved.", minutes: 3, emoji: '🎁' },
];

function categoryMeta(id) {
  return CATEGORIES.find(c => c.id === id) || { label: id, emoji: '✨', color: '#ddd' };
}

function getChallengeById(id) {
  return CHALLENGES.find(c => c.id === id);
}

/* ---------- Date helpers ---------- */
function pad(n) { return String(n).padStart(2, '0'); }
function todayKey(d = new Date()) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function parseKey(k) {
  const [y, m, d] = k.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function addDays(k, n) {
  const d = parseKey(k);
  d.setDate(d.getDate() + n);
  return todayKey(d);
}
function isoWeek(d = new Date()) {
  const tmp = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = tmp.getUTCDay() || 7;
  tmp.setUTCDate(tmp.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(tmp.getUTCFullYear(), 0, 1));
  const weekNum = Math.ceil(((tmp - yearStart) / 86400000 + 1) / 7);
  return `${tmp.getUTCFullYear()}-W${pad(weekNum)}`;
}
function formatLongDate(d = new Date()) {
  return d.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });
}
function computeStreak(history) {
  if (!history.length) return 0;
  const valid = history
    .filter(e => e.status === 'completed' || e.status === 'skipped')
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  if (!valid.length) return 0;
  const today = todayKey();
  const yesterday = addDays(today, -1);
  if (valid[0].date !== today && valid[0].date !== yesterday) return 0;
  let streak = 1;
  let cursor = valid[0].date;
  for (let i = 1; i < valid.length; i++) {
    const prev = addDays(cursor, -1);
    if (valid[i].date === prev) { streak++; cursor = valid[i].date; }
    else break;
  }
  return streak;
}
function longestStreak(history) {
  if (!history.length) return 0;
  const valid = history
    .filter(e => e.status === 'completed' || e.status === 'skipped')
    .sort((a, b) => (a.date < b.date ? -1 : 1));
  if (!valid.length) return 0;
  let best = 1, run = 1;
  for (let i = 1; i < valid.length; i++) {
    const expected = addDays(valid[i - 1].date, 1);
    if (valid[i].date === expected) { run++; best = Math.max(best, run); }
    else run = 1;
  }
  return best;
}

/* ---------- Storage ---------- */
const STORAGE_KEY = 'mc:state:v1';
const DEFAULT_STATE = {
  onboarded: false,
  interests: [],
  history: [],
  skip: { week: null, used: 0 },
  currentChallenge: null,
  createdAt: null,
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_STATE,
      ...parsed,
      skip: { ...DEFAULT_STATE.skip, ...(parsed.skip || {}) },
      history: Array.isArray(parsed.history) ? parsed.history : [],
    };
  } catch { return { ...DEFAULT_STATE }; }
}
function saveState(s) { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }
function resetState() { localStorage.removeItem(STORAGE_KEY); }

/* ---------- Deterministic challenge picker ---------- */
function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h;
}
function pickChallengeForDate(dateKey, interests, history) {
  const pool = CHALLENGES.filter(c => !interests.length || interests.includes(c.category));
  if (!pool.length) return CHALLENGES[0];
  const recent = new Set(history.slice(-5).map(h => h.challengeId));
  const fresh = pool.filter(c => !recent.has(c.id));
  const usable = fresh.length ? fresh : pool;
  const seed = hashString(dateKey + '::' + interests.slice().sort().join(','));
  return usable[seed % usable.length];
}

function ensureWeekToken(state) {
  const w = isoWeek();
  if (state.skip.week !== w) state.skip = { week: w, used: 0 };
  return state;
}
function ensureTodayChallenge(state) {
  const today = todayKey();
  if (!state.currentChallenge || state.currentChallenge.date !== today) {
    const ch = pickChallengeForDate(today, state.interests, state.history);
    state.currentChallenge = { date: today, challengeId: ch.id };
  }
  return state;
}
function todayEntry(state) {
  return state.history.find(h => h.date === todayKey()) || null;
}

/* ---------- Global state & router ---------- */
let state = loadState();
let route = state.onboarded ? 'home' : 'onboarding';
let onboardingPicks = [];

const app = document.getElementById('app');
const bottomNav = document.getElementById('bottom-nav');

function navigate(r) {
  route = r;
  if (r === 'onboarding') bottomNav.classList.add('hidden');
  else bottomNav.classList.remove('hidden');
  document.querySelectorAll('.nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.route === r);
  });
  render();
  window.scrollTo(0, 0);
}

document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => navigate(btn.dataset.route));
});

/* ---------- Helpers ---------- */
function escapeHtml(s) {
  return String(s).replace(/[&<>\"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.add('hidden'), 2400);
}

function fireConfetti() {
  const layer = document.getElementById('confetti-layer');
  layer.innerHTML = '';
  const colors = ['#FF5757', '#4ADE80', '#FFD166', '#3B82F6', '#C4B5FD'];
  for (let i = 0; i < 36; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = (Math.random() * 100) + '%';
    piece.style.background = colors[i % colors.length];
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.animationDelay = (Math.random() * 0.4) + 's';
    piece.style.animationDuration = (1.8 + Math.random() * 1.4) + 's';
    layer.appendChild(piece);
  }
  setTimeout(() => { layer.innerHTML = ''; }, 2800);
}

/* ---------- Renderers ---------- */
function render() {
  if (route === 'onboarding') return renderOnboarding();
  if (route === 'home')       return renderHome();
  if (route === 'stats')      return renderStats();
  if (route === 'history')    return renderHistory();
  if (route === 'settings')   return renderSettings();
}

/* ----- Onboarding ----- */
function renderOnboarding() {
  if (!onboardingPicks.length && state.interests.length) onboardingPicks = [...state.interests];
  const cards = CATEGORIES.map(c => {
    const on = onboardingPicks.includes(c.id);
    const atLimit = !on && onboardingPicks.length >= 3;
    return `
      <button class=\"interest-card ${on ? 'selected' : ''}\" ${atLimit ? 'disabled' : ''} data-cat=\"${c.id}\">
        <div class=\"emoji-chip\" style=\"background:${on ? 'white' : c.color};\">${c.emoji}</div>
        <div class=\"label\">${c.label}</div>
        <div class=\"hint\">${on ? 'Selected' : 'Tap to pick'}</div>
      </button>`;
  }).join('');

  const canContinue = onboardingPicks.length >= 2;

  app.innerHTML = `
    <div class=\"page\">
      <div class=\"tag\">✨ &nbsp;5 minutes a day</div>
      <h1 class=\"title-xl\">Pick your <span class=\"accent\">vibe</span>.</h1>
      <p class=\"lead\">Choose 2 or 3 areas you want to level up. We'll mix them into a fresh challenge each day.</p>
      <div class=\"interest-grid\" id=\"interest-grid\">${cards}</div>
      <div class=\"counter-row\">
        <span>${onboardingPicks.length}/3 picked ${onboardingPicks.length >= 2 ? '✓' : ''}</span>
        <span class=\"muted\">Minimum 2</span>
      </div>
      <button id=\"continue-btn\" class=\"btn-primary btn-block\" ${canContinue ? '' : 'disabled'}>
        Let's go →
      </button>
      <p class=\"muted\" style=\"text-align:center;margin-top:1.5rem;font-size:0.8rem\">
        No account needed. Everything stays on your device.
      </p>
    </div>
  `;

  document.querySelectorAll('#interest-grid .interest-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.cat;
      const i = onboardingPicks.indexOf(id);
      if (i > -1) onboardingPicks.splice(i, 1);
      else if (onboardingPicks.length < 3) onboardingPicks.push(id);
      renderOnboarding();
    });
  });

  document.getElementById('continue-btn').addEventListener('click', () => {
    if (onboardingPicks.length < 2) return;
    state.interests = [...onboardingPicks];
    state.onboarded = true;
    saveState(state);
    navigate('home');
  });
}

/* ----- Home ----- */
function renderHome() {
  state = ensureWeekToken(state);
  state = ensureTodayChallenge(state);
  saveState(state);

  const entry = todayEntry(state);
  const ch = getChallengeById(state.currentChallenge.challengeId);
  const cat = categoryMeta(ch.category);
  const streak = computeStreak(state.history);
  const completedCount = state.history.filter(h => h.status === 'completed').length;
  const done = entry?.status === 'completed';
  const skipped = entry?.status === 'skipped';
  const canSkip = !entry && state.skip.used < 1;

  const statusPillHtml = done
    ? `<div class=\"status-pill\">🏆 Nice work — see you tomorrow!</div>`
    : skipped
      ? `<div class=\"status-pill\">🎟️ Skip used. Streak is safe.</div>`
      : `<button class=\"btn-ghost\" id=\"reroll-btn\" style=\"align-self:flex-start\">🔀 Give me another</button>`;

  const actionsHtml = entry ? '' : `
    <div class=\"action-row\">
      <button class=\"action-btn complete\" id=\"complete-btn\">✅ Mark complete</button>
      <button class=\"action-btn skip\" id=\"skip-btn\" ${canSkip ? '' : 'disabled'}>⏭ Skip</button>
    </div>`;

  app.innerHTML = `
    <div class=\"page\">
      <header class=\"app-header\">
        <div>
          <div class=\"date-label\">${formatLongDate()}</div>
          <div class=\"app-title\">MiniChallenge</div>
        </div>
        <div class=\"streak-badge\"><span class=\"flame\">🔥</span> ${streak}-day streak</div>
      </header>

      <div class=\"pill-row\">
        <span class=\"btn-ghost\">🎟️ Skip token: ${state.skip.used < 1 ? '1 left' : '0 left'}</span>
        <button class=\"btn-ghost\" id=\"open-share\">↗ Share</button>
      </div>

      <section class=\"challenge-card ${done ? 'completed' : ''} ${skipped ? 'skipped' : ''}\">
        <div class=\"challenge-meta\">
          <div class=\"cat-chip\" style=\"background:${done || skipped ? 'white' : cat.color};color:#0A0A0A\">
            <span>${cat.emoji}</span><span>${cat.label}</span>
          </div>
          <div class=\"minutes-label\">${done ? 'Completed' : skipped ? 'Skipped' : `⏱ ${ch.minutes} min`}</div>
        </div>
        <div>
          <div class=\"challenge-emoji\">${ch.emoji}</div>
          <h2 class=\"challenge-title\">${escapeHtml(ch.title)}</h2>
          <p class=\"challenge-detail\">${escapeHtml(ch.detail)}</p>
        </div>
        ${statusPillHtml}
      </section>

      ${actionsHtml}

      <div class=\"stat-grid\">
        <div class=\"stat-card\" style=\"background:white\">
          <div class=\"label\" style=\"color:#404040\">Completed</div>
          <div class=\"value\">${completedCount}</div>
        </div>
        <div class=\"stat-card\" style=\"background:var(--yellow)\">
          <div class=\"label\">Current streak</div>
          <div class=\"value\">${streak}🔥</div>
        </div>
      </div>
    </div>
  `;

  const completeBtn = document.getElementById('complete-btn');
  const skipBtn = document.getElementById('skip-btn');
  const rerollBtn = document.getElementById('reroll-btn');
  const shareBtn = document.getElementById('open-share');

  if (completeBtn) completeBtn.addEventListener('click', onComplete);
  if (skipBtn) skipBtn.addEventListener('click', onSkip);
  if (rerollBtn) rerollBtn.addEventListener('click', onReroll);
  if (shareBtn) shareBtn.addEventListener('click', () => openShareDialog(streak, completedCount));
}

function onComplete() {
  if (todayEntry(state)) return;
  const ch = getChallengeById(state.currentChallenge.challengeId);
  state.history.push({
    date: todayKey(),
    challengeId: ch.id,
    category: ch.category,
    status: 'completed',
  });
  if (!state.createdAt) state.createdAt = todayKey();
  saveState(state);
  fireConfetti();
  renderHome();
}

function onSkip() {
  if (todayEntry(state)) return;
  state = ensureWeekToken(state);
  if (state.skip.used >= 1) { showToast('No skip tokens left this week.'); return; }
  const ch = getChallengeById(state.currentChallenge.challengeId);
  state.skip.used = 1;
  state.history.push({
    date: todayKey(),
    challengeId: ch.id,
    category: ch.category,
    status: 'skipped',
  });
  if (!state.createdAt) state.createdAt = todayKey();
  saveState(state);
  showToast('Streak saved. See you tomorrow!');
  renderHome();
}

function onReroll() {
  if (todayEntry(state)) return;
  const pool = CHALLENGES.filter(c => !state.interests.length || state.interests.includes(c.category));
  const currentId = state.currentChallenge.challengeId;
  let pick = pool[Math.floor(Math.random() * pool.length)];
  let safety = 0;
  while (pool.length > 1 && pick.id === currentId && safety < 20) {
    pick = pool[Math.floor(Math.random() * pool.length)];
    safety++;
  }
  state.currentChallenge = { date: todayKey(), challengeId: pick.id };
  saveState(state);
  renderHome();
}

/* ----- Stats ----- */
function renderStats() {
  const completed = state.history.filter(h => h.status === 'completed');
  const skipped = state.history.filter(h => h.status === 'skipped');
  const cur = computeStreak(state.history);
  const lon = longestStreak(state.history);
  const byCat = {};
  completed.forEach(h => { byCat[h.category] = (byCat[h.category] || 0) + 1; });
  const maxCat = Math.max(1, ...Object.values(byCat));

  const bars = CATEGORIES.map(c => {
    const n = byCat[c.id] || 0;
    if (!n) return '';
    const pct = Math.max(6, Math.round((n / maxCat) * 100));
    return `
      <div class=\"bar-row\">
        <div class=\"top\"><span>${c.emoji} ${c.label}</span><span>${n}</span></div>
        <div class=\"bar-track\"><div class=\"bar-fill\" style=\"width:${pct}%;background:${c.color}\"></div></div>
      </div>`;
  }).join('');

  app.innerHTML = `
    <div class=\"page\">
      <h1 style=\"font-size:2.25rem;font-weight:900;letter-spacing:-0.04em;margin-bottom:1.5rem\">Your progress</h1>

      <div class=\"stat-grid\" style=\"margin-top:0\">
        <div class=\"stat-card\" style=\"background:var(--mint)\">
          <div class=\"label\">✅ Completed</div>
          <div class=\"value\">${completed.length}</div>
        </div>
        <div class=\"stat-card\" style=\"background:var(--coral);color:white\">
          <div class=\"label\">🔥 Current streak</div>
          <div class=\"value\">${cur}</div>
        </div>
        <div class=\"stat-card\" style=\"background:var(--yellow)\">
          <div class=\"label\">🏆 Longest streak</div>
          <div class=\"value\">${lon}</div>
        </div>
        <div class=\"stat-card\" style=\"background:var(--blue);color:white\">
          <div class=\"label\">⏭ Skipped</div>
          <div class=\"value\">${skipped.length}</div>
        </div>
      </div>

      <section class=\"section-card\" style=\"margin-top:1.5rem\">
        <h2>By category</h2>
        ${Object.keys(byCat).length === 0
          ? `<p class=\"muted\" style=\"margin-top:0.75rem\">No completions yet. Finish your first challenge to see stats here.</p>`
          : bars}
      </section>
    </div>
  `;
}

/* ----- History ----- */
let historyCursor = null;
function renderHistory() {
  if (!historyCursor) {
    const now = new Date();
    historyCursor = { y: now.getFullYear(), m: now.getMonth() };
  }
  const { y, m } = historyCursor;
  const first = new Date(y, m, 1);
  const last = new Date(y, m + 1, 0);
  const startWeekday = (first.getDay() + 6) % 7; // Monday-first
  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= last.getDate(); d++) cells.push(new Date(y, m, d));
  while (cells.length % 7 !== 0) cells.push(null);

  const today = todayKey();
  const byDate = {};
  state.history.forEach(h => { byDate[h.date] = h; });

  const monthName = first.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });

  const dayCells = cells.map(d => {
    if (!d) return `<div class=\"day-cell empty\"></div>`;
    const k = todayKey(d);
    const e = byDate[k];
    let cls = 'day-cell';
    if (e?.status === 'completed') cls += ' completed';
    else if (e?.status === 'skipped') cls += ' skipped';
    if (k === today) cls += ' today';
    return `<div class=\"${cls}\">${d.getDate()}</div>`;
  }).join('');

  const recent = [...state.history].reverse().slice(0, 10).map(h => `
    <li>
      <div class=\"left\">
        <div class=\"date\">${h.date}</div>
        <div class=\"cat\">${h.category}</div>
      </div>
      <div class=\"status-tag ${h.status}\">${h.status}</div>
    </li>
  `).join('');

  app.innerHTML = `
    <div class=\"page\">
      <h1 style=\"font-size:2.25rem;font-weight:900;letter-spacing:-0.04em;margin-bottom:1.5rem\">History</h1>

      <section class=\"section-card\">
        <div class=\"calendar-head\">
          <button class=\"icon-btn\" id=\"cal-prev\" aria-label=\"Previous month\">‹</button>
          <div class=\"month-label\">${monthName}</div>
          <button class=\"icon-btn\" id=\"cal-next\" aria-label=\"Next month\">›</button>
        </div>
        <div class=\"weekday-row\">
          <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
        </div>
        <div class=\"day-grid\">${dayCells}</div>
        <div class=\"legend\">
          <span class=\"legend-dot\"><span class=\"swatch\" style=\"background:var(--mint)\"></span>Completed</span>
          <span class=\"legend-dot\"><span class=\"swatch\" style=\"background:var(--blue)\"></span>Skipped</span>
          <span class=\"legend-dot\"><span class=\"swatch\" style=\"background:white\"></span>Missed / empty</span>
        </div>
      </section>

      <h2 style=\"font-size:1.25rem;font-weight:900;margin-bottom:0.75rem\">Recent</h2>
      <ul class=\"history-list\">
        ${recent || `<li class=\"muted\" style=\"border:none;box-shadow:none;background:transparent\">No history yet. Start today!</li>`}
      </ul>
    </div>
  `;

  document.getElementById('cal-prev').addEventListener('click', () => {
    historyCursor.m -= 1;
    if (historyCursor.m < 0) { historyCursor.m = 11; historyCursor.y -= 1; }
    renderHistory();
  });
  document.getElementById('cal-next').addEventListener('click', () => {
    historyCursor.m += 1;
    if (historyCursor.m > 11) { historyCursor.m = 0; historyCursor.y += 1; }
    renderHistory();
  });
}

/* ----- Settings ----- */
let settingsPicks = null;
let confirmReset = false;
function renderSettings() {
  if (!settingsPicks) settingsPicks = [...state.interests];

  const cards = CATEGORIES.map(c => {
    const on = settingsPicks.includes(c.id);
    const atLimit = !on && settingsPicks.length >= 3;
    return `
      <button class=\"interest-card ${on ? 'selected' : ''}\" ${atLimit ? 'disabled' : ''} data-cat=\"${c.id}\">
        <div style=\"font-size:1.4rem\">${c.emoji}</div>
        <div class=\"label\" style=\"margin-top:0.3rem\">${c.label}</div>
      </button>`;
  }).join('');

  const dangerHtml = !confirmReset ? `
      <button class=\"btn-danger\" id=\"reset-btn\">🗑 Reset data</button>
    ` : `
      <div class=\"danger-row\">
        <button class=\"btn-danger solid\" id=\"reset-confirm\">🗑 Yes, wipe it</button>
        <button class=\"btn-cancel\" id=\"reset-cancel\">Cancel</button>
      </div>`;

  app.innerHTML = `
    <div class=\"page\">
      <h1 style=\"font-size:2.25rem;font-weight:900;letter-spacing:-0.04em;margin-bottom:1.5rem\">Settings</h1>

      <section class=\"section-card\">
        <h2>Your interests</h2>
        <p class=\"muted\" style=\"margin:0.25rem 0 0.75rem 0\">Pick 2 or 3 categories.</p>
        <div class=\"settings-grid\">${cards}</div>
        <button id=\"save-interests\" class=\"btn-primary btn-block\" style=\"margin-top:1rem;background:${settingsPicks.length >= 2 ? 'var(--mint)' : 'white'};color:${settingsPicks.length >= 2 ? '#0A0A0A' : 'var(--ink-soft)'}\" ${settingsPicks.length >= 2 ? '' : 'disabled'}>
          💾 Save interests
        </button>
      </section>

      <section class=\"section-card\">
        <h2>About skip tokens</h2>
        <div class=\"info-row\" style=\"margin-top:0.75rem\">
          <span class=\"info-icon\">i</span>
          <p>You get <b>1 skip token per week</b>. Use it to keep your streak alive on an off day. It resets every Monday.</p>
        </div>
      </section>

      <section class=\"section-card\">
        <h2>Reset everything</h2>
        <p class=\"muted\" style=\"margin:0.25rem 0 1rem 0\">Wipes your streak, history, and interests. Can't be undone.</p>
        ${dangerHtml}
      </section>

      <p class=\"muted\" style=\"text-align:center;font-size:0.8rem;margin-top:1.5rem\">Made with ❤️ — MiniChallenge</p>
    </div>
  `;

  document.querySelectorAll('.settings-grid .interest-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.cat;
      const i = settingsPicks.indexOf(id);
      if (i > -1) settingsPicks.splice(i, 1);
      else if (settingsPicks.length < 3) settingsPicks.push(id);
      renderSettings();
    });
  });

  document.getElementById('save-interests').addEventListener('click', () => {
    if (settingsPicks.length < 2) return;
    state.interests = [...settingsPicks];
    saveState(state);
    showToast('Saved!');
  });

  if (!confirmReset) {
    document.getElementById('reset-btn').addEventListener('click', () => {
      confirmReset = true;
      renderSettings();
    });
  } else {
    document.getElementById('reset-confirm').addEventListener('click', () => {
      resetState();
      state = loadState();
      onboardingPicks = [];
      settingsPicks = null;
      confirmReset = false;
      navigate('onboarding');
    });
    document.getElementById('reset-cancel').addEventListener('click', () => {
      confirmReset = false;
      renderSettings();
    });
  }
}

/* ----- Share Dialog ----- */
function openShareDialog(streak, completed) {
  const text = `🔥 ${streak}-day streak on MiniChallenge!
✅ ${completed} challenges completed
Join me → building better habits 5 minutes a day.`;
  document.getElementById('share-text').textContent = text;
  document.getElementById('share-dialog').classList.remove('hidden');
}
document.getElementById('share-close').addEventListener('click', closeShareDialog);
document.getElementById('share-dialog').addEventListener('click', (e) => {
  if (e.target.id === 'share-dialog') closeShareDialog();
});
function closeShareDialog() {
  document.getElementById('share-dialog').classList.add('hidden');
}
document.getElementById('share-copy-btn').addEventListener('click', async () => {
  const text = document.getElementById('share-text').textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (_) {}
    document.body.removeChild(ta);
  }
  const btn = document.getElementById('share-copy-btn');
  btn.textContent = '✔ Copied to clipboard!';
  btn.style.background = 'var(--mint)';
  btn.style.color = '#0A0A0A';
  setTimeout(() => {
    btn.textContent = '📋 Copy share card';
    btn.style.background = '';
    btn.style.color = '';
  }, 1800);
});

/* ---------- Boot ---------- */
navigate(route);
