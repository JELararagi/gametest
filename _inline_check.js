


  (() => {
    const { Engine, Render, Runner, Bodies, Composite, Events, Body } = Matter;

    const dom = {
      startScreen: document.getElementById('start-screen'),
      gameScreen: document.getElementById('game-screen'),
      resultScreen: document.getElementById('result-screen'),
      startBtn: document.getElementById('start-btn'),
      retryBtn: document.getElementById('retry-btn'),
      shareBtn: document.getElementById('share-btn'),
      muteBtn: document.getElementById('mute-btn'),
      resultMuteBtn: document.getElementById('result-mute-btn'),
      gameShell: document.getElementById('game-shell'),
      board: document.getElementById('game-board'),
      chatLane: document.getElementById('chat-lane'),
      itemLayer: document.getElementById('item-layer'),
      particleCanvas: document.getElementById('particle-canvas'),
      fxCanvas: document.getElementById('fx-canvas'),
      previewItem: document.getElementById('preview-item'),
      nextMini1: document.getElementById('next-mini-1'),
      nextMini2: document.getElementById('next-mini-2'),
      trendThumb: document.getElementById('trend-thumb'),
      trendName: document.getElementById('trend-name'),
      trendCopy: document.getElementById('trend-copy'),
      trendTimer: document.getElementById('trend-timer'),
      nextTrendThumb: document.getElementById('next-trend-thumb'),
      nextTrendName: document.getElementById('next-trend-name'),
      scoreView: document.getElementById('score-view'),
      moodText: document.getElementById('mood-text'),
      comboView: document.getElementById('combo-view'),
      tensionFill: document.getElementById('tension-fill'),
      cravingFill: document.getElementById('craving-fill'),
      heatFill: document.getElementById('heat-fill'),
      buzzFill: document.getElementById('buzz-fill'),
      tensionNum: document.getElementById('tension-num'),
      cravingNum: document.getElementById('craving-num'),
      heatNum: document.getElementById('heat-num'),
      buzzNum: document.getElementById('buzz-num'),
      avatar: document.getElementById('avatar'),
      burstBtn: document.getElementById('burst-btn'),
      captionText: document.getElementById('caption-text'),
      dropGuide: document.getElementById('drop-guide'),
      previewRing: document.getElementById('preview-ring'),
      dangerFog: document.getElementById('danger-fog'),
      topDangerLine: document.getElementById('top-danger-line'),
      finalScore: document.getElementById('final-score'),
      bestScore: document.getElementById('best-score'),
      peakCombo: document.getElementById('peak-combo'),
      dailyRank: document.getElementById('daily-rank'),
      peakBuzz: document.getElementById('peak-buzz'),
      resultCopy: document.getElementById('result-copy'),
      globalFlash: document.getElementById('global-flash'),
      seedView: document.getElementById('seed-view'),
      bestMini: document.getElementById('best-mini'),
      topGapText: document.getElementById('top-gap-text'),
      crownFill: document.getElementById('crown-fill'),
      crownMini: document.getElementById('crown-mini'),
      eventMini: document.getElementById('event-mini'),
      pinComment: document.getElementById('pin-comment'),
      pinBadge: document.getElementById('pin-badge'),
      pinText: document.getElementById('pin-text'),
      pinNeed: document.getElementById('pin-need'),
      pinBonus: document.getElementById('pin-bonus'),
      handleInput: document.getElementById('handle-input'),
      dailyBoard: document.getElementById('daily-board'),
      resultDailyBoard: document.getElementById('result-daily-board'),
      bgmNormal: document.getElementById('audio-bgm-lofi'),
      bgmHyper: document.getElementById('audio-bgm-hyper'),
      audioMerge: document.getElementById('audio-merge'),
      voiceStart: document.getElementById('voice-start'),
      voiceFire: document.getElementById('voice-alert'),
      voiceWin: document.getElementById('voice-win'),
      voiceLose: document.getElementById('voice-lose')
    };

    const CONTENTS = [
      { id:'talk', name:'雑談', img:'assets/img/item_1.png', accent:'#ffffff', lines:['雑談して','近況トークちょうだい','ゆるい空気がほしい','作業しながら聞きたい'], physics:{ bboxW:512, bboxH:463, body:29, chat:'💬' } },
      { id:'love', name:'恋バナ', img:'assets/img/item_2.png', accent:'#ff68c1', lines:['恋バナまだ？','今日は甘めで','沼らせて','惚気でも失恋でも聞きたい'], physics:{ bboxW:512, bboxH:455, body:29, chat:'💗' } },
      { id:'money', name:'投げ銭', img:'assets/img/item_3.png', accent:'#50ff9e', lines:['スパチャ読みして','投げる準備OK','課金したい','反応ほしいから投げる'], physics:{ bboxW:512, bboxH:429, body:28, chat:'💸' } },
      { id:'cute', name:'癒し', img:'assets/img/item_4.png', accent:'#ffd95c', lines:['かわいいの見たい','癒してほしい','なごみタイムちょうだい','ゆるふわ助かる'], physics:{ bboxW:511, bboxH:512, body:29, chat:'🧸' } },
      { id:'music', name:'歌枠', img:'assets/img/item_5.png', accent:'#43eaff', lines:['歌ってほしい','声を浴びたい','耳がほしい','サビだけでもお願い'], physics:{ bboxW:306, bboxH:512, body:27, chat:'🎤' } },
      { id:'secret', name:'暴露', img:'assets/img/item_6.png', accent:'#ff9b42', lines:['ちょっと危ない話して','裏話まだ？','秘密トークほしい','ギリギリの話待ってる'], physics:{ bboxW:380, bboxH:512, body:28, chat:'💎' } }
    ];
    const SPECIAL = { buzz:'assets/img/item_7.png', hazard:'assets/img/hazard.png', physics:{ bboxW:454, bboxH:512, body:32, chat:'💣' } };
    const PLAYER_LINES = {
      calm:['今日はちゃんと刺さる気がする。','まだ読めてる。焦らなくていい。','流れ、悪くない。','この空気なら拾える。'],
      focus:['今ほしい話題だけ見る。','外さない。次も当てる。','ここは需要一本でいく。','あと一個で返せる。'],
      low:['冷えてきた…でも返せる。','見捨てないで。まだ喋れる。','ちょっと苦しい、でもまだ切らない。','空気が重い…ここで立て直す。'],
      fire:['やばい、燃えてる。でも切らさない。','荒れてる…でも押し返せる。','ここで折れたら終わる。','コメント欄うるさい。今は手を止めない。'],
      buzz:['来た。今なら全部持っていける。','この波、絶対逃がさない。','いま全部まとめて奪う。','ここで一気に跳ねる。'],
      warning:['次の流れ、変わる。仕込む。','もうすぐ需要が切り替わる。','次の話題、準備しておく。'],
      top:['上まで来てる…まずい。','詰んでない、まだ返せる。','これ以上積んだら事故る。'],
      switch:['来た、流れ変わった。','需要更新。ここから取り返す。','次の話題に乗り換える。'],
      rush:['いまの先読み、絶対取りたい。','切り替わり直後を取れば一気に伸びる。','次の波の入り口、ここが見せ場。'],
      jack:['先読みがつながってる。まだ伸びる。','このまま次の波も取り切れる。','切替直後を連続で取れてる。'],
      clear:['今のは刺さった。','よし、そのまま伸ばす。','コメント温まってきた。'],
      big:['でかい。かなりでかい。','今の気持ちいい…！','流れを取った。']
    };
    const COMMENT_BANK = {
      high:['それ今めっちゃ見たい','それサムネ勝ち','今日のおすすめこれで取りたい','この流れショート量産できる','今の需要まじでそれ','今のコメ欄わいてる','神回の匂いする','高評価した','流れいいぞ','切り抜き確定','その話題もっと','助かる','今の当たり','同接伸びるやつ','その流れ好き','おすすめ乗りそう','今の置き方うまい','今日いちばん見たいのそれ','この流れで配信映える','ショート切り抜きいける','その話題サムネ強い','リスナーの需要これ','そのままサムネになる','今の導入かなり強い','コメ欄が求めてたやつ','この話題いまの波にハマってる','その並びで一気に取れそう','1位見えてきた','その仕込みかなり熱い','次の波まで見えてる','いまの置き方うますぎ'],
      mid:['次どう来る？','今のうちに仕込んで','次の波も見たい','その置き方アリかも','まだ見れる','もう一押しほしい','次の需要ある？','流れ変わるかも','そこそこ刺さってる','次うまく乗って'],
      low:['ちょっと冷えてきた','いま欲しいの違うかも','1位までが離れそう','盤面きつそう','それ今じゃない気がする','上ちょっと危ない','コメントの空気重い','今の需要からズレたかも','ちょい置きすぎかも','おすすめ止まりそう','今の流れから外れたかも','コメントが求めてるの別かも','サムネの強さ消えたかも','今の一手ちょっと迷子','いま欲しいのはその話題じゃないかも','ピンコメのお題見たい','1位が離れそう','いまは次の波の仕込みかも','その置き方ちょい重い' ],
      fire:['コメント欄やばい','燃えてる燃えてる','邪魔多すぎる','空気最悪かも','早く流れ戻して','このままだと事故る'],
      warning:['次の流れ来る？','次の話題の種まいて','切替の初速ほしい','次で跳ねそう','そろそろ別の話題見たい','切り替わりそう','次の需要なんだろ','次の仕込みある？'],
      super:['うわそれ伸びる','これ今日の見どころ','おすすめ乗りそう','今の全部持っていった','神タイミング','気持ちいい消し方した','同接跳ねるやつ','切り抜き班出動','今の見どころすぎる','ショート量産きた','配信映えエグい','今日のサムネここ','これアーカイブの山場','今の一手で空気持っていった'],
      rush:['今の先読みほしい','切替直後を当てて','今の需要そのまま乗って','先読み取れたらでかい','切り替わった瞬間を取って'],
      jack:['先読みうまい','その取り方かなり強い','切替直後を毎回取ってる','今の先読み気持ちいい','先読み連勝えぐい','その先読みで1位見える','切替直後を毎回取ってるの強い']
    };
    const USERNAMES = ['ねこもち','kome','夜行性','ぷるる','mira','noa','ゆら','okome','melt','しろみ','nagi','さめ','momo','mii','nanase','るる','haru','mina','chip','切り抜き担当','ROM勢','初見です','社不ねむ','スパチャ待機','天才視聴者','深夜の民','古参オタク','限界オタク','寝落ち勢','同接監視員','アーカイブ勢','おすすめ欄から来た','高評価した','初スパ投げたい'];

    const storageKey = 'trendbuzz_v40';
    const save = JSON.parse(localStorage.getItem(storageKey) || '{}');

    let engine = null;
    let render = null;
    let runner = null;
    let rafId = 0;
    let wallBodies = [];
    let particleCtx = null;
    let fxCtx = null;
    let hoverX = 0;
    let appHeight = window.innerHeight;
    let audioCtx = null;
    let muted = !!save.muted;
    save.bestScore = save.bestScore || 0;
    save.dailyBest = save.dailyBest || {};
    save.dailyRankings = save.dailyRankings || {};
    save.playerName = (save.playerName || '名無し配信者').slice(0, 14);
    const bodyVisuals = new Map();

    const state = {
      active:false,
      score:0,
      tension:88,
      craving:0,
      heat:0,
      buzz:0,
      buzzReady:false,
      buzzMode:0,
      buzzActivations:0,
      clipTime:0,
      clipCooldown:24,
      clipActivations:0,
      peakCombo:0,
      combo:0,
      comboTimer:0,
      trendIndex:0,
      nextTrendIndex:1,
      trendTimer:15,
      trendWarning:false,
      idle:0,
      scanTimer:0,
      commentTimer:0,
      fireCooldown:0,
      fireMode:0,
      fireClearCount:0,
      hazardTimer:0,
      showCaptionTimer:0,
      queue:[0,1],
      particles:[],
      rings:[],
      previewGroups:[],
      nextPreviewGroups:[],
      lastTs:0,
      topDangerTime:0,
      moodTimer:0,
      currentLine:'今日はちゃんとバズらせたい。',
      runTime:0,
      clearCount:0,
      seed:0,
      rng:null,
      recentSwitchBonus:0,
      pinTimer:0,
      pinMinLen:3,
      pinBonusValue:0,
      pinText:'',
      pinIcon:'📌',
      pinClass:'hot',
      pinHits:0,
      pinTargetIndex:0,
      rushWindow:0,
      rushHits:0,
      jackChain:0,
      peakJackChain:0,
      switchCleared:false,
      hintCooldown:0,
      gameOverReason:'tension',
      crownLead:false,
      crownHoldStreak:0,
      peakCrownHold:0,
      crownTakeovers:0,
      forecastHits:0,
      crownClutchHits:0
    };

    function mulberry32(a) {
      return function() {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    }
    function todaySeed() {
      const d = new Date();
      return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    }
    function rand() { return Math.random(); }
    function gameRand() { return state.rng ? state.rng() : Math.random(); }
    function choice(arr) { return arr[Math.floor(rand() * arr.length)]; }
    function choiceGame(arr) { return arr[Math.floor(gameRand() * arr.length)]; }
    function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
    function fmt(num) { return Math.floor(num).toLocaleString('ja-JP'); }
    function playerName() {
      const raw = (dom.handleInput?.value || save.playerName || '名無し配信者').trim();
      return (raw || '名無し配信者').slice(0, 14);
    }
    function persistPlayerName() {
      save.playerName = playerName();
      persistSave();
    }
    function getDailyRanking(seed = state.seed) {
      return (save.dailyRankings?.[seed] || []).slice(0, 5);
    }
    function topDailyScore(seed = state.seed) {
      return getDailyRanking(seed)[0]?.score || 0;
    }
    function topDailyName(seed = state.seed) {
      return getDailyRanking(seed)[0]?.name || '';
    }
    function renderDailyBoard(target) {
      if (!target) return;
      const rows = getDailyRanking();
      if (!rows.length) {
        target.innerHTML = '<div class="rank-empty">まだスコア登録なし。最初の#1を取ろう。</div>';
        return;
      }
      target.innerHTML = rows.map((row, i) => `
        <div class="rank-row">
          <div class="rk">#${i + 1}</div>
          <div class="nm">${row.name}</div>
          <div class="sc">${fmt(row.score)}</div>
        </div>`).join('');
    }
    function pushDailyRanking(score) {
      const seed = String(state.seed);
      const rows = (save.dailyRankings[seed] || []).slice();
      rows.push({ name: playerName(), score: Math.floor(score), combo: state.peakCombo, clip: state.clipActivations, rush: state.rushHits, at: Date.now() });
      rows.sort((a, b) => b.score - a.score || b.combo - a.combo || (b.rush || 0) - (a.rush || 0) || b.clip - a.clip || a.at - b.at);
      save.dailyRankings[seed] = rows.slice(0, 5);
      persistSave();
      return save.dailyRankings[seed].findIndex(r => r.at === rows.find(x => x.at === r.at)?.at);
    }
    function contentBodyRadius(index, isHazard = false) {
      if (isHazard) return 36;
      const map = [34, 34, 33, 34, 32, 33];
      return map[index] || 34;
    }
    function spriteScaleFor(index, radius, isHazard = false) {
      return 0.001;
    }
    function visualDiameter(radius, isHazard = false) {
      return Math.round(radius * (isHazard ? 2.06 : 2.02));
    }
    function contentChatIcon(index, isHazard = false) {
      return isHazard ? SPECIAL.physics.chat : (CONTENTS[index]?.physics?.chat || '💬');
    }

    function clearVisuals() {
      bodyVisuals.forEach(node => node.remove());
      bodyVisuals.clear();
      if (dom.itemLayer) dom.itemLayer.innerHTML = '';
    }

    function ensureBodyVisual(body) {
      if (!dom.itemLayer) return null;
      let node = bodyVisuals.get(body.id);
      if (node) return node;
      node = document.createElement('div');
      node.className = `item-chip ${body.gameType === 'hazard' ? 'hazard' : ''}`.trim();
      node.dataset.emoji = contentChatIcon(body.contentIndex, body.gameType === 'hazard');
      const img = document.createElement('img');
      img.alt = body.gameType === 'hazard' ? 'hazard' : CONTENTS[body.contentIndex].name;
      img.src = body.gameType === 'hazard' ? SPECIAL.hazard : CONTENTS[body.contentIndex].img;
      node.appendChild(img);
      dom.itemLayer.appendChild(node);
      bodyVisuals.set(body.id, node);
      return node;
    }

    function syncBodyVisuals() {
      if (!engine || !dom.itemLayer) return;
      const bodies = worldBodies();
      const activeIds = new Set();
      const previewMap = new Map();
      const nextPreviewMap = new Map();
      state.previewGroups.forEach(group => group.ids.forEach(id => previewMap.set(id, Math.max(previewMap.get(id) || 0, group.len))));
      state.nextPreviewGroups.forEach(group => group.ids.forEach(id => nextPreviewMap.set(id, Math.max(nextPreviewMap.get(id) || 0, group.len))));
      bodies.forEach(body => {
        activeIds.add(body.id);
        const node = ensureBodyVisual(body);
        if (!node) return;
        const diameter = visualDiameter(body.circleRadius || contentBodyRadius(body.contentIndex, body.gameType === 'hazard'), body.gameType === 'hazard');
        node.style.width = `${diameter}px`;
        node.style.height = `${diameter}px`;
        node.style.left = `${body.position.x}px`;
        node.style.top = `${body.position.y}px`;
        node.style.transform = `translate(-50%,-50%) rotate(${body.angle}rad)`;
        node.classList.toggle('trend', body.gameType === 'content' && body.contentIndex === state.trendIndex);
        node.classList.toggle('near', (previewMap.get(body.id) || 0) === 2);
        node.classList.toggle('ready', (previewMap.get(body.id) || 0) >= 3);
        node.classList.toggle('forecast', body.gameType === 'content' && body.contentIndex === state.nextTrendIndex && (nextPreviewMap.get(body.id) || 0) >= 2);
      });
      bodyVisuals.forEach((node, id) => {
        if (!activeIds.has(id)) {
          node.remove();
          bodyVisuals.delete(id);
        }
      });
    }

    function applyAppHeight() {
      appHeight = window.innerHeight;
      document.documentElement.style.setProperty('--app-height', `${appHeight}px`);
      resizeCanvas();
    }

    function persistSave() {
      localStorage.setItem(storageKey, JSON.stringify(save));
    }

    function updateMuteButtons() {
      const label = muted ? '🔇 サウンド OFF' : '🔊 サウンド ON / OFF';
      dom.muteBtn.textContent = label;
      dom.resultMuteBtn.textContent = label;
    }

    function toggleMute() {
      muted = !muted;
      save.muted = muted;
      persistSave();
      [dom.bgmNormal, dom.bgmHyper, dom.audioMerge, dom.voiceStart, dom.voiceFire, dom.voiceWin, dom.voiceLose].forEach(a => a.muted = muted);
      updateMuteButtons();
    }

    function ensureAudio() {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
      [dom.bgmNormal, dom.bgmHyper, dom.audioMerge, dom.voiceStart, dom.voiceFire, dom.voiceWin, dom.voiceLose].forEach(a => a.muted = muted);
    }

    function playBgm() {
      persistPlayerName();
      ensureAudio();
      dom.bgmNormal.volume = muted ? 0 : 0.34;
      dom.bgmHyper.volume = muted ? 0 : 0;
      dom.bgmNormal.currentTime = 0;
      dom.bgmHyper.currentTime = 0;
      dom.bgmNormal.play().catch(() => {});
      dom.bgmHyper.play().catch(() => {});
    }

    function setHyperMix(strength) {
      const s = clamp(strength, 0, 1);
      dom.bgmNormal.volume = muted ? 0 : (0.34 * (1 - s * 0.78));
      dom.bgmHyper.volume = muted ? 0 : (0.54 * s);
    }

    function playVoice(kind) {
      const map = { start:dom.voiceStart, fire:dom.voiceFire, win:dom.voiceWin, lose:dom.voiceLose };
      const audio = map[kind];
      if (!audio || muted) return;
      audio.currentTime = 0;
      audio.volume = kind === 'lose' ? 0.84 : 0.72;
      audio.play().catch(() => {});
    }

    function sfx(type, intensity = 1) {
      if (muted) return;
      persistPlayerName();
      ensureAudio();
      const now = audioCtx.currentTime;
      const gain = audioCtx.createGain();
      gain.connect(audioCtx.destination);
      gain.gain.value = 0.0001;
      gain.gain.exponentialRampToValueAtTime(0.07 * intensity, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.34);
      const oscA = audioCtx.createOscillator();
      const oscB = audioCtx.createOscillator();
      oscA.type = type === 'bad' ? 'sawtooth' : 'triangle';
      oscB.type = (type === 'burst' || type === 'ready') ? 'square' : 'sine';
      if (type === 'drop') {
        oscA.frequency.setValueAtTime(430, now); oscA.frequency.exponentialRampToValueAtTime(170, now + 0.12);
        oscB.frequency.setValueAtTime(220, now); oscB.frequency.exponentialRampToValueAtTime(120, now + 0.15);
      } else if (type === 'clear') {
        oscA.frequency.setValueAtTime(540, now); oscA.frequency.exponentialRampToValueAtTime(900, now + 0.14);
        oscB.frequency.setValueAtTime(760, now); oscB.frequency.exponentialRampToValueAtTime(1160, now + 0.2);
      } else if (type === 'big') {
        oscA.frequency.setValueAtTime(420, now); oscA.frequency.exponentialRampToValueAtTime(1020, now + 0.2);
        oscB.frequency.setValueAtTime(720, now); oscB.frequency.exponentialRampToValueAtTime(1480, now + 0.24);
      } else if (type === 'burst') {
        oscA.frequency.setValueAtTime(310, now); oscA.frequency.exponentialRampToValueAtTime(980, now + 0.24);
        oscB.frequency.setValueAtTime(640, now); oscB.frequency.exponentialRampToValueAtTime(1700, now + 0.28);
      } else if (type === 'bad') {
        oscA.frequency.setValueAtTime(160, now); oscA.frequency.exponentialRampToValueAtTime(88, now + 0.28);
        oscB.frequency.setValueAtTime(120, now); oscB.frequency.exponentialRampToValueAtTime(62, now + 0.28);
      } else if (type === 'switch') {
        oscA.frequency.setValueAtTime(820, now); oscA.frequency.exponentialRampToValueAtTime(420, now + 0.18);
        oscB.frequency.setValueAtTime(520, now); oscB.frequency.exponentialRampToValueAtTime(240, now + 0.18);
      } else if (type === 'warn') {
        oscA.frequency.setValueAtTime(980, now); oscA.frequency.exponentialRampToValueAtTime(760, now + 0.08);
        oscB.frequency.setValueAtTime(650, now); oscB.frequency.exponentialRampToValueAtTime(520, now + 0.08);
      } else if (type === 'ready') {
        oscA.frequency.setValueAtTime(640, now); oscA.frequency.exponentialRampToValueAtTime(1320, now + 0.2);
        oscB.frequency.setValueAtTime(980, now); oscB.frequency.exponentialRampToValueAtTime(1800, now + 0.2);
      }
      oscA.connect(gain); oscB.connect(gain);
      oscA.start(now); oscB.start(now);
      oscA.stop(now + 0.34); oscB.stop(now + 0.34);
      if (type === 'clear' || type === 'big') {
        dom.audioMerge.currentTime = 0;
        dom.audioMerge.volume = clamp((type === 'big' ? 0.72 : 0.48) * intensity, 0, 1);
        dom.audioMerge.play().catch(() => {});
      }
    }

    function resizeCanvas() {
      if (!dom.board) return;
      const rect = dom.board.getBoundingClientRect();
      dom.particleCanvas.width = rect.width;
      dom.particleCanvas.height = rect.height;
      dom.fxCanvas.width = rect.width;
      dom.fxCanvas.height = rect.height;
      particleCtx = dom.particleCanvas.getContext('2d');
      fxCtx = dom.fxCanvas.getContext('2d');
      if (render) {
        render.canvas.width = rect.width;
        render.canvas.height = rect.height;
        render.options.width = rect.width;
        render.options.height = rect.height;
        updateWorldBounds();
      }
      hoverX = rect.width / 2;
      renderPreview();
    }

    function currentTrend() { return CONTENTS[state.trendIndex]; }
    function nextTrend() { return CONTENTS[state.nextTrendIndex]; }
    function trendDuration() { return clamp(17.8 - Math.floor(state.runTime / 105) * 0.40, 11.8, 17.8); }
    function setCaption(text, seconds = 2) {
      dom.captionText.textContent = text;
      state.showCaptionTimer = seconds;
    }
    function say(mode, hold = 2.4) {
      const pool = PLAYER_LINES[mode] || PLAYER_LINES.calm;
      state.currentLine = choice(pool);
      state.moodTimer = hold;
      dom.moodText.textContent = state.currentLine;
    }

    function updateMoodText(dt = 0) {
      if (state.moodTimer > 0) {
        state.moodTimer = Math.max(0, state.moodTimer - dt);
      }
      if (state.moodTimer > 0) {
        dom.moodText.textContent = state.currentLine;
        return;
      }
      if (state.buzzMode > 0 || state.buzzReady) dom.moodText.textContent = choice(PLAYER_LINES.buzz);
      else if (state.fireMode > 0) dom.moodText.textContent = choice(PLAYER_LINES.fire);
      else if (state.topDangerTime > 0.8) dom.moodText.textContent = choice(PLAYER_LINES.top);
      else if (state.tension > 70) dom.moodText.textContent = choice(PLAYER_LINES.focus);
      else if (state.tension > 40) dom.moodText.textContent = choice(PLAYER_LINES.calm);
      else dom.moodText.textContent = choice(PLAYER_LINES.low);
    }

    function updateSeedLabels() {
      const seedTxt = `#${String(state.seed)}`;
      dom.seedView.textContent = seedTxt;
      const top = topDailyScore(state.seed);
      const gap = Math.max(0, top - Math.floor(state.score || 0));
      dom.bestMini.textContent = top ? (gap <= 0 ? 'TOP' : fmt(gap)) : 'TOP';
      renderDailyBoard(dom.dailyBoard);
      renderDailyBoard(dom.resultDailyBoard);
    }


    function updatePinCommentUi() {
      if (!dom.pinComment) return;
      dom.pinText.textContent = state.pinText || 'ピンコメ『雑談』3つ';
      dom.pinBadge.textContent = state.pinIcon || '📌';
      dom.pinNeed.textContent = `${state.pinMinLen}+`;
      dom.pinBonus.textContent = `+${fmt(state.pinBonusValue || 0)}`;
      dom.pinComment.className = `hud-chip ${state.pinClass || 'hot'}`.trim();
    }

    function rollPinnedComment(reason = 'normal') {
      const trend = currentTrend();
      const nextPreviewLen = biggestNextPreviewLen();
      let pin = null;
      if (reason === 'clip' || state.clipTime > 0) {
        const clipMin = 4 + (gameRand() < 0.35 ? 1 : 0);
        pin = { icon:'🎬', cls:'super', min:clipMin, bonus:2100 + Math.floor(gameRand() * 560), text:`ピンコメ『${trend.name}』${clipMin}つで急上昇`, target: state.trendIndex };
      } else if (state.fireMode > 0) {
        pin = { icon:'🚨', cls:'low', min:3, bonus:1080, text:`ピンコメ『${trend.name}』3つで空気を戻す`, target: state.trendIndex };
      } else {
        const nextFocusRate = !state.trendWarning ? 0 : (nextPreviewLen >= 3 ? 0.92 : (nextPreviewLen >= 2 ? 0.82 : 0.62));
        const nextFocus = state.trendWarning && gameRand() < nextFocusRate;
        if (nextFocus) {
          const next = nextTrend();
          const pool = [
            { icon:'🌊', cls:'next', min:3, bonus:1280, text:`次の波『${next.name}』3つを先読み`, target: state.nextTrendIndex },
            { icon:'🛰️', cls:'next', min:4, bonus:1760, text:`次の波『${next.name}』4つで先取り`, target: state.nextTrendIndex },
            { icon:'🚀', cls:'next', min:Math.min(5, Math.max(3, nextPreviewLen + 1)), bonus:1960 + Math.max(0, nextPreviewLen - 1) * 220, text:`次の波『${next.name}』を切替直後に取る`, target: state.nextTrendIndex }
          ];
          pin = choiceGame(pool);
        } else {
          const pool = [
            { icon:'📌', cls:'hot', min:3, bonus:920, text:`ピンコメ『${trend.name}』3つで流れを取る`, target: state.trendIndex },
            { icon:'💬', cls:'hot', min:3, bonus:1040, text:`いまは『${trend.name}』を見せる`, target: state.trendIndex },
            { icon:'⚡', cls:'hot', min:4, bonus:1640, text:`ピンコメ『${trend.name}』4つで一気に伸ばす`, target: state.trendIndex },
            { icon:'✨', cls:'super', min:5, bonus:2580, text:`ピンコメ『${trend.name}』5つで決める`, target: state.trendIndex }
          ];
          pin = choiceGame(pool);
        }
      }
      state.pinTimer = clamp(9.2 + gameRand() * 4.6 - Math.min(2.0, state.runTime / 130), 6.5, 13) + (pin.target === state.nextTrendIndex ? 1.4 : 0);
      state.pinMinLen = pin.min;
      state.pinBonusValue = pin.bonus;
      state.pinText = pin.text;
      state.pinIcon = pin.icon;
      state.pinClass = pin.cls;
      state.pinTargetIndex = pin.target;
      updatePinCommentUi();
    }

    function setTrend(index, withFlash = false) {
      if (withFlash && state.runTime > 0 && !state.switchCleared) {
        if (state.jackChain > 0) {
          popText(dom.board.clientWidth / 2, 126, '先読みボーナス終了', '#ff8da5', 18);
        }
        state.jackChain = 0;
      }
      state.switchCleared = false;
      state.trendIndex = index;
      state.trendTimer = trendDuration();
      state.trendWarning = false;
      state.recentSwitchBonus = 4.8;
      state.rushWindow = 6.2;
      const trend = currentTrend();
      dom.trendThumb.src = trend.img;
      dom.trendName.textContent = trend.name;
      dom.trendName.style.color = trend.accent;
      dom.trendCopy.textContent = '今を取る。次の波でまくる。';
      dom.nextTrendThumb.src = nextTrend().img;
      dom.nextTrendName.textContent = nextTrend().name;
      setCaption(`いま視聴者が見たいのは『${trend.name}』。同じ話題を3つ以上つなげる。右の『次の波』を見ながら、切替前に2つまで仕込む。切替直後を取れると一気に伸びる。`, 2.8);
      spawnComment(true, null, 'hot');
      say(withFlash ? 'switch' : 'focus', 2.4);
      rollPinnedComment(withFlash ? 'switch' : 'normal');
      if (withFlash) {
        spawnComment(false, `今は${trend.name}の先読みが刺さる`, 'super', '🚀');
        say('rush', 2.2);
      }
      if (withFlash) {
        flashScreen(trend.accent);
        sfx('switch', 0.9);
      }
      if (withFlash && engine) {
        scanGroups();
        const preloadLen = biggestPreviewLen();
        if (preloadLen >= 2) {
          state.rushWindow = Math.max(state.rushWindow, preloadLen >= 3 ? 8.8 : 7.8);
          popText(dom.board.clientWidth / 2, 154, preloadLen >= 3 ? '先読みOK!' : '次の波OK', '#8ef8ff', preloadLen >= 3 ? 26 : 20);
          spawnComment(false, preloadLen >= 3 ? `もう${trend.name}がつながってる` : `次の波へ仕込みが残ってる`, 'super', '🌊');
          say('rush', 1.7);
        }
      }
    }

    function queueRoll() {
      const r = gameRand();
      if (state.trendWarning) {
        if (r < 0.16) return state.trendIndex;
        if (r < 0.98) return state.nextTrendIndex;
      } else {
        if (r < 0.54) return state.trendIndex;
        if (r < 0.90) return state.nextTrendIndex;
      }
      return Math.floor(gameRand() * CONTENTS.length);
    }

    function refreshQueue() {
      const q0 = CONTENTS[state.queue[0]];
      const q1 = CONTENTS[state.queue[1]];
      dom.previewItem.src = q0.img;
      dom.nextMini1.src = q0.img;
      dom.nextMini2.src = q1.img;
    }

    function renderPreview() {
      const rect = dom.board.getBoundingClientRect();
      const x = clamp(hoverX, 34, rect.width - 34);
      dom.dropGuide.style.left = `${x}px`;
      dom.previewItem.style.left = `${x}px`;
      dom.previewRing.style.left = `${x}px`;
      refreshQueue();
    }

    function createChatNode(text, cls = '', icon = '💬', username = null) {
      const node = document.createElement('div');
      node.className = `rising-chat ${cls}`.trim();
      node.style.left = `${4 + rand() * 34}%`;
      node.style.animationDuration = `${4.6 + rand() * 1.3}s`;

      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.textContent = icon;

      const body = document.createElement('div');
      body.className = 'body';

      const name = document.createElement('span');
      name.className = 'name';
      name.textContent = username || choice(USERNAMES);

      body.appendChild(name);
      body.appendChild(document.createTextNode(text));
      node.appendChild(badge);
      node.appendChild(body);
      node.addEventListener('animationend', () => node.remove());
      return node;
    }

    function spawnComment(forceTrend = false, forcedText = null, forcedClass = '', forcedIcon = null) {
      if (!dom.chatLane) return;
      let text = forcedText || '';
      let cls = forcedClass || '';
      let icon = forcedIcon || contentChatIcon(state.trendIndex);
      const trend = currentTrend();
      const next = nextTrend();
      const stats = state.active && engine ? boardStats() : { pressure:0, clutter:0 };
      const previewLen = biggestPreviewLen();
      const topGap = Math.max(0, topDailyScore(state.seed) - Math.floor(state.score || 0));
      if (!text) {
        const noise = rand();
        if (state.clipTime > 0 && noise < 0.34) {
          text = choice([
            '急上昇きた！','今まとめて伸ばして','この秒数で稼いで','バズるなら今','見どころ作れそう','ここで1位までを詰めたい', ...COMMENT_BANK.super
          ]);
          cls = 'super';
          icon = '🎬';
        } else if (state.rushWindow > 0 && noise < 0.26) {
          text = choice([
            `今は${trend.name}の先読みを取りたい`,
            `${trend.name}で初速を取りたい`,
            ...COMMENT_BANK.rush
          ]);
          cls = 'super';
          icon = '🚀';
        } else if (state.fireMode > 0) {
          text = choice([
            `${trend.name}どころじゃなくなってる`,
            'コメント欄あれてる',
            '邪魔ブロックきつい',
            '早く流れ戻して',
            ...COMMENT_BANK.fire
          ]);
          cls = 'low';
          icon = '🚨';
        } else if (previewLen === 2 && noise < 0.16) {
          text = choice([
            `あと1個で${trend.name}つながる`,
            `${trend.name}あと1個で取れそう`,
            'その2連、あと1個で気持ちいい',
            '今の2個にもう1つ足したい'
          ]);
          cls = 'hot';
          icon = '✨';
        } else if (topGap > 0 && topGap <= 5200 && noise < 0.16) {
          text = choice([
            `あと${fmt(topGap)}で今日の1位`,
            `${topDailyName(state.seed) || '1位'}まであと${fmt(topGap)}`,
            '今日の1位もう見えてる',
            'この一手で1位圏入る',
            'あと少しで1位取れる'
          ]);
          cls = 'super';
          icon = '👑';
        } else if (state.trendWarning && noise < 0.34) {
          text = choice([
            `次は${next.name}来そう`,
            `${next.name}仕込んどく？`,
            `そろそろ${next.name}見たい`,
            `次の波は${next.name}、今のうちに置きたい`,
            ...COMMENT_BANK.warning
          ]);
          cls = 'next';
          icon = contentChatIcon(state.nextTrendIndex);
        } else if (forceTrend || noise < 0.56) {
          text = choice([
            ...trend.lines,
            `${trend.name}もっとちょうだい`,
            `${trend.name}が今いちばん見たい`,
            `${trend.name}に寄せて`,
            `${trend.name}でクリップ取りたい`,
            `${trend.name}に乗れたら強い`,
            `${trend.name}を今取れたら1位見える`,
            `${trend.name}を今取れば次の波も楽になる`,
          ]);
          cls = state.tension < 42 ? 'low' : 'hot';
          icon = contentChatIcon(state.trendIndex);
        } else if (state.tension > 74 && stats.pressure < 0.48) {
          text = choice([
            ...COMMENT_BANK.high,
            'この流れずっと見れる',
            'クリップしたい',
            '次も当てて',
            'おすすめ載れそう',
            '今のめっちゃうまい'
          ]);
          cls = 'hot';
          icon = '✨';
        } else if (state.tension > 42) {
          text = choice([
            ...COMMENT_BANK.mid,
            `${trend.name}待機`,
            '次の一個で決まりそう',
            '今のうちに積んでおいて',
            `${next.name}も少し欲しい`
          ]);
          icon = '👀';
        } else {
          text = choice([
            ...COMMENT_BANK.low,
            `${trend.name}からズレてない？`,
            '上ちょっと危ない',
            '盤面きつそう',
            'その置き方ちょい怖い',
            '同接逃げそう'
          ]);
          cls = 'low';
          icon = '💭';
        }
      }
      if (!cls && /スパチャ|投げ|神|クリップ|気持ちいい|当たり|バズ|高評価|おすすめ/.test(text)) cls = 'hot';
      if (/うわ|炎上|燃え|邪魔|危ない|最悪/.test(text)) cls = cls || 'low';
      if (/次は|そろそろ/.test(text)) cls = cls || 'next';
      if (/神回|切り抜き|スパチャ/.test(text)) cls = cls || 'super';

      const node = createChatNode(text, cls, icon);
      dom.chatLane.appendChild(node);
      while (dom.chatLane.childNodes.length > 20) dom.chatLane.firstChild.remove();
    }

    function flashScreen(color = '#ffffff') {
      dom.globalFlash.style.background = `radial-gradient(circle, ${color}66, rgba(255,255,255,0))`;
      dom.globalFlash.classList.add('show');
      setTimeout(() => dom.globalFlash.classList.remove('show'), 120);
    }

    function addParticles(x, y, color, count = 18, spread = 9) {
      for (let i = 0; i < count; i++) {
        state.particles.push({
          x, y,
          vx:(rand() - 0.5) * spread,
          vy:-2 - rand() * spread * 0.5,
          life:1,
          color,
          size:3 + rand() * 6
        });
      }
    }

    function addRing(x, y, color, radius = 24, speed = 180) {
      state.rings.push({ x, y, life:1, radius, speed, color });
    }

    function updateFx(dt) {
      if (!particleCtx || !fxCtx) return;
      particleCtx.clearRect(0, 0, dom.particleCanvas.width, dom.particleCanvas.height);
      fxCtx.clearRect(0, 0, dom.fxCanvas.width, dom.fxCanvas.height);

      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 18 * dt;
        p.life -= dt * 1.6;
        particleCtx.globalAlpha = Math.max(0, p.life);
        particleCtx.fillStyle = p.color;
        particleCtx.shadowBlur = 12;
        particleCtx.shadowColor = p.color;
        particleCtx.beginPath();
        particleCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        particleCtx.fill();
        if (p.life <= 0) state.particles.splice(i, 1);
      }
      particleCtx.globalAlpha = 1;
      particleCtx.shadowBlur = 0;

      for (let i = state.rings.length - 1; i >= 0; i--) {
        const r = state.rings[i];
        r.life -= dt * 1.6;
        r.radius += r.speed * dt;
        fxCtx.globalAlpha = Math.max(0, r.life * 0.8);
        fxCtx.strokeStyle = r.color;
        fxCtx.lineWidth = 3;
        fxCtx.beginPath();
        fxCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        fxCtx.stroke();
        if (r.life <= 0) state.rings.splice(i, 1);
      }
      fxCtx.globalAlpha = 1;
    }

    function popText(x, y, text, color, size = 26) {
      const el = document.createElement('div');
      el.className = 'pop-text';
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.color = color;
      el.style.fontSize = `${size}px`;
      el.textContent = text;
      dom.board.appendChild(el);
      setTimeout(() => el.remove(), 1100);
    }

    function makeBody(x, y, index, isHazard = false) {
      const radius = contentBodyRadius(index, isHazard);
      const texture = isHazard ? SPECIAL.hazard : CONTENTS[index].img;
      const opacity = 0;
      const scale = spriteScaleFor(index, radius, isHazard);
      const body = Bodies.circle(x, y, radius, {
        restitution:0.22,
        friction:0.08,
        frictionAir:0.014,
        density:isHazard ? 0.00245 : 0.002,
        label:isHazard ? 'hazard' : 'content',
        render:{
          opacity,
          sprite:{ texture, xScale:scale, yScale:scale }
        }
      });
      body.gameType = isHazard ? 'hazard' : 'content';
      body.contentIndex = index;
      body.spawnAt = performance.now();
      body.displayScale = scale;
      Composite.add(engine.world, body);
      return body;
    }

    function worldBodies() {
      return Composite.allBodies(engine.world).filter(b => !b.isStatic && (b.gameType === 'content' || b.gameType === 'hazard'));
    }

    function boardStats() {
      const bodies = worldBodies();
      const content = bodies.filter(b => b.gameType === 'content');
      const hazards = bodies.filter(b => b.gameType === 'hazard');
      const trendCount = content.filter(b => b.contentIndex === state.trendIndex).length;
      const offTrend = content.length - trendCount;
      const maxY = bodies.reduce((m, b) => Math.min(m, b.position.y - b.circleRadius), Number.POSITIVE_INFINITY);
      const nearTop = Number.isFinite(maxY) ? maxY < 108 : false;
      return {
        bodies, contentCount:content.length, hazardCount:hazards.length, trendCount, offTrend,
        nearTop,
        pressure: clamp((content.length + hazards.length * 1.5) / 28, 0, 1),
        clutter: clamp((offTrend * 0.7 + hazards.length * 1.3) / 20, 0, 1)
      };
    }

    function updateWorldBounds() {
      if (!engine) return;
      const rect = dom.board.getBoundingClientRect();
      if (wallBodies.length) Composite.remove(engine.world, wallBodies);
      wallBodies = [
        Bodies.rectangle(rect.width / 2, rect.height + 34, rect.width + 80, 68, { isStatic:true, render:{ visible:false } }),
        Bodies.rectangle(-32, rect.height / 2, 64, rect.height + 80, { isStatic:true, render:{ visible:false } }),
        Bodies.rectangle(rect.width + 32, rect.height / 2, 64, rect.height + 80, { isStatic:true, render:{ visible:false } })
      ];
      wallBodies.forEach(body => { body.gameType = 'wall'; });
      Composite.add(engine.world, wallBodies);
    }

    function touching(a, b) {
      const pad = 0.5;
      const dx = b.position.x - a.position.x;
      const dy = b.position.y - a.position.y;
      const rr = a.circleRadius + b.circleRadius + pad;
      return dx * dx + dy * dy <= rr * rr;
    }

    function scanGroups() {
      function buildGroups(targetIndex) {
        const targetBodies = worldBodies().filter(body => body.gameType === 'content' && body.contentIndex === targetIndex && performance.now() - body.spawnAt > 260);
        const groups = [];
        const visited = new Set();
        for (const body of targetBodies) {
          if (visited.has(body.id)) continue;
          const stack = [body];
          visited.add(body.id);
          const group = [];
          while (stack.length) {
            const current = stack.pop();
            group.push(current);
            for (const other of targetBodies) {
              if (visited.has(other.id) || other.id === current.id) continue;
              if (touching(current, other)) {
                visited.add(other.id);
                stack.push(other);
              }
            }
          }
          groups.push(group);
        }
        return groups;
      }

      const groups = buildGroups(state.trendIndex);
      state.previewGroups = groups.filter(g => g.length >= 2).map(g => ({ ids:g.map(b => b.id), len:g.length }));
      if (state.trendWarning) {
        const nextGroups = buildGroups(state.nextTrendIndex);
        state.nextPreviewGroups = nextGroups.filter(g => g.length >= 2).map(g => ({ ids:g.map(b => b.id), len:g.length }));
      } else {
        state.nextPreviewGroups = [];
      }
      return groups.filter(g => g.length >= 3 && g.every(body => body.speed < 4.2));
    }

    function biggestPreviewLen() {
      return state.previewGroups.reduce((m, group) => Math.max(m, group.len || 0), 0);
    }

    function biggestNextPreviewLen() {
      return state.nextPreviewGroups.reduce((m, group) => Math.max(m, group.len || 0), 0);
    }

    function resolveGroups() {
      const groups = scanGroups();
      if (!groups.length) return false;
      groups.sort((a, b) => b.length - a.length || a.reduce((m, x) => m + x.position.y, 0) - b.reduce((m, x) => m + x.position.y, 0));
      clearGroup(groups[0]);
      return true;
    }

    function clearGroup(group) {
      if (!group.length) return;
      const accent = currentTrend().accent;
      const center = group.reduce((acc, body) => {
        acc.x += body.position.x;
        acc.y += body.position.y;
        return acc;
      }, { x:0, y:0 });
      center.x /= group.length;
      center.y /= group.length;

      const toRemove = new Set(group);
      let collateral = 0;
      if (state.buzzMode > 0) {
        worldBodies().forEach(body => {
          const dx = body.position.x - center.x;
          const dy = body.position.y - center.y;
          if (dx * dx + dy * dy <= 190 * 190) {
            if (!toRemove.has(body)) collateral += 1;
            toRemove.add(body);
          }
        });
      }

      const removed = Array.from(toRemove);
      Composite.remove(engine.world, removed);
      const statsNow = boardStats();
      const rushBonus = state.rushWindow > 0;
      const switchBonus = state.recentSwitchBonus > 0 ? 1800 : 0;
      const base = group.length * 360;
      const comboBonus = state.combo * 400;
      const collateralBonus = collateral * 130;
      const clipBonus = state.clipTime > 0 ? Math.round((base + comboBonus) * 1.24) : 0;
      const pinTargetHit = state.pinTimer > 0 && group[0] && group[0].labelContent === state.pinTargetIndex;
      const pinBonus = pinTargetHit && group.length >= state.pinMinLen ? state.pinBonusValue : 0;
      const clutchBonus = (state.fireMode > 0 || statsNow.pressure > 0.58 || state.topDangerTime > 0.9) ? (680 + group.length * 112 + collateral * 96) : 0;
      const topGapBefore = Math.max(0, topDailyScore(state.seed) - Math.floor(state.score));
      const crownRush = topDailyScore(state.seed) > 0 && topGapBefore > 0 && topGapBefore <= 5200;
      const nextPreviewLen = biggestNextPreviewLen();
      const forecastReady = state.trendWarning && nextPreviewLen >= 2;
      let rushBonusValue = 0;
      let jackBonus = 0;
      let jackLevelUp = false;
      let crownKeepBonus = 0;
      let forecastBonus = 0;
      let crownClutchBonus = 0;
      if (rushBonus) {
        state.rushHits += 1;
        state.rushWindow = 0;
        state.switchCleared = true;
        state.jackChain += 1;
        state.peakJackChain = Math.max(state.peakJackChain, state.jackChain);
        rushBonusValue = 2100 + state.combo * 260;
        jackBonus = 820 * state.jackChain;
        if (state.jackChain >= 3) jackLevelUp = true;
      }
      if (forecastReady) {
        forecastBonus = (nextPreviewLen >= 3 ? 1520 : 880) + state.combo * 180;
      }
      if (topGapBefore > 0 && topGapBefore <= 1800) {
        crownClutchBonus = 520 + state.combo * 140 + (forecastReady ? 220 : 0);
      }
      const crownRushBonus = crownRush ? Math.round((base + comboBonus + switchBonus) * (topGapBefore <= 2500 ? 0.40 : 0.32)) : 0;
      const alreadyLeading = topDailyScore(state.seed) > 0 && topGapBefore <= 0;
      if (alreadyLeading) {
        state.crownHoldStreak += 1;
        state.peakCrownHold = Math.max(state.peakCrownHold, state.crownHoldStreak);
        crownKeepBonus = 320 + Math.min(6, state.crownHoldStreak) * 120;
      } else {
        state.crownHoldStreak = 0;
      }
      const gain = base + comboBonus + collateralBonus + switchBonus + clipBonus + pinBonus + rushBonusValue + jackBonus + clutchBonus + crownRushBonus + crownKeepBonus + forecastBonus + crownClutchBonus;
      state.score += gain;
      const topGapAfter = Math.max(0, topDailyScore(state.seed) - Math.floor(state.score));
      const tookCrown = topGapBefore > 0 && topGapAfter <= 0 && topDailyScore(state.seed) > 0;
      state.clearCount += 1;
      if (pinBonus) state.pinHits += 1;
      if (forecastBonus) state.forecastHits += 1;
      if (crownClutchBonus) state.crownClutchHits += 1;
      state.tension = clamp(state.tension + 12 + group.length * 3.2 + collateral * 0.7 + (state.clipTime > 0 ? 6 : 0) + (pinBonus ? 4 : 0) + (rushBonus ? 6 : 0) + (clutchBonus ? 8 : 0) + (forecastBonus ? 5 : 0) + (crownClutchBonus ? 4 : 0), 0, 100);
      state.craving = clamp(state.craving - 14 - group.length * 2.5 - (clutchBonus ? 8 : 0) - (forecastBonus ? 5 : 0), 0, 100);
      state.heat = clamp(state.heat - 18 - group.length * 8 - collateral * 2 - (clutchBonus ? 16 : 0) - (forecastBonus ? 10 : 0), 0, 100);
      state.buzz = clamp(state.buzz + 22 + group.length * 9 + collateral * 2 + (rushBonus ? 12 + state.jackChain * 3 : 0) + (clutchBonus ? 12 : 0) + (crownRush ? 8 : 0) + (forecastBonus ? 10 : 0) + (crownClutchBonus ? 8 : 0), 0, 100);
      state.combo += 1;
      state.comboTimer = 8.8;
      state.peakCombo = Math.max(state.peakCombo, state.combo);
      state.idle = 0;
      state.fireClearCount += state.fireMode > 0 ? 1 : 0;
      if (state.fireMode > 0) state.fireMode = Math.max(0, state.fireMode - 2.6);

      addParticles(center.x, center.y, accent, 30 + collateral * 3, 10);
      addRing(center.x, center.y, accent, 18, state.buzzMode > 0 ? 290 : 200);
      flashScreen(accent);
      popText(center.x, center.y, `${group.length}ヒット +${fmt(gain)}`, accent, state.buzzMode > 0 ? 30 : 24);
      if (switchBonus) popText(center.x, center.y + 40, '先読みHIT', '#8ef8ff', 18);
      if (clipBonus) popText(center.x, center.y + 72, '急上昇 x1.7', '#fff0a3', 18);
      if (rushBonus) popText(center.x, center.y + 102, `先読み +${fmt(rushBonusValue)}`, '#8ef8ff', 19);
      if (jackBonus) popText(center.x, center.y + 126, `先読み連勝 x${state.jackChain} +${fmt(jackBonus)}`, '#fff0a3', 20);
      if (forecastBonus) popText(center.x, center.y - 156, `波読み +${fmt(forecastBonus)}`, '#86f1ff', 18);
      if (crownKeepBonus) popText(center.x, center.y - 132, `王冠防衛 +${fmt(crownKeepBonus)}`, '#fff4a3', 18);
      if (crownClutchBonus) popText(center.x, center.y - 180, `王冠クラッチ +${fmt(crownClutchBonus)}`, '#ffd84c', 18);
      if (pinBonus) popText(center.x, center.y + 152, state.pinClass === 'next' ? '次の波ピンコメ!' : 'ピンコメ達成!', '#8ef8ff', 18);
      if (clutchBonus) popText(center.x, center.y - 108, `逆転 +${fmt(clutchBonus)}`, '#ffb7d6', 20);
      if (state.combo >= 2) popText(center.x, center.y - 42, `COMBO x${state.combo}`, '#ffe37a', 22);

      if (jackLevelUp) {
        state.clipTime = Math.max(state.clipTime, 10);
        state.clipCooldown = Math.max(state.clipCooldown, 16);
        state.buzz = clamp(state.buzz + 26, 0, 100);
        popText(center.x, center.y - 76, '先読み3連!', '#fff4a3', 30);
        spawnComment(false, '先読み3連！ ここから一気に伸びる', 'super', '🚀');
        if (crownRush) popText(center.x, center.y - 136, `王冠チャンス +${fmt(crownRushBonus)}`, '#ffe37a', 20);
        spawnComment(false, choice(COMMENT_BANK.jack), 'super', '⚡');
        say('jack', 2.0);
        flashScreen('#fff0a3');
        sfx('ready', 1.2);
      } else if (rushBonus) {
        spawnComment(false, choice(COMMENT_BANK.jack), 'super', '🚀');
        say('jack', 1.7);
      }
      if (alreadyLeading && crownKeepBonus) {
        if (state.crownHoldStreak === 1) {
          spawnComment(false, '王冠キープ開始。このまま逃げ切りたい', 'super', '👑');
        } else if (state.crownHoldStreak % 2 === 0) {
          spawnComment(false, `王冠防衛 x${state.crownHoldStreak}`, 'super', '🏆');
        }
      }

      if (state.clipTime > 0) {
        spawnComment(false, 'うわ今のめっちゃ切り抜ける', 'super', '📸');
      }
      if (crownRush) {
        spawnComment(false, '1位チャンス。この山で抜ける', 'super', '👑');
        popText(center.x, center.y - 160, 'DAILY!', '#ffe37a', 18);
      }
      if (forecastBonus) {
        spawnComment(false, nextPreviewLen >= 3 ? '次の波まで見えてる。うますぎる' : '次の波の仕込みが効いてる', 'super', '🌊');
      }
      if (crownClutchBonus) {
        spawnComment(false, 'ここで王冠いける。クラッチ決めたい', 'super', '👑');
      }
      state.crownLead = topDailyScore(state.seed) > 0 && topGapAfter <= 0;
      if (tookCrown) {
        state.crownTakeovers += 1;
        state.crownLead = true;
        state.crownHoldStreak = 0;
        popText(center.x, center.y - 188, '王冠奪取!', '#fff4a3', 28);
        spawnComment(false, '1位きた！ いま王冠持ってる', 'super', '👑');
        spawnComment(false, 'その山で抜いた、デカい', 'super', '🏆');
        say('big', 2.2);
        flashScreen('#fff4a3');
        sfx('big', 1.28);
      }
      if (pinBonus) {
        spawnComment(false, `${state.pinText} それ！`, 'super', state.pinIcon || '📌');
        if (Math.max(0, topDailyScore(state.seed) - Math.floor(state.score)) <= 2500 && topDailyScore(state.seed) > 0) {
          spawnComment(false, 'あと少しで1位いける', 'super', '👑');
        }
        say('big', 1.8);
        rollPinnedComment(state.clipTime > 0 ? 'clip' : 'normal');
      }
      if (clutchBonus) {
        spawnComment(false, 'うわその返しで流れ戻した', 'super', '🩷');
        spawnComment(false, 'いまの逆転アツい', 'super', '🔥');
        say('big', 1.7);
      }
      if (group.length >= 5 || collateral >= 4) {
        popText(center.x, center.y + 76, 'CLIP! CLIP! CLIP!', '#fff4a3', 20);
        say('big', 2.2);
        spawnComment(false, 'うわ今の気持ちいい', 'super', '✨');
        spawnComment(false, '切り抜き確定', 'super', '📸');
        spawnComment(false, choice(COMMENT_BANK.super), 'super', '🚀');
        sfx('big', Math.min(1.4, 1 + group.length * 0.08));
      } else {
        say('clear', 1.9);
        spawnComment(false, '今の当たり！', 'hot', '✅');
        if (state.combo >= 2) spawnComment(false, `COMBO x${state.combo} うまい`, 'hot', '⚡');
        sfx('clear', Math.min(1.2, 0.84 + group.length * 0.08));
      }

      if (state.buzz >= 100 && !state.buzzReady && state.buzzMode <= 0) {
        state.buzzReady = true;
        dom.burstBtn.classList.add('ready');
        dom.burstBtn.innerHTML = '<div><div class="icon">✨</div><div class="txt">押して発動</div></div>';
        setCaption('バースト準備完了。次の山で押すと周辺ごと消せる。ピンコメや先読みと重ねたい。', 2.4);
        spawnComment(false, '今ならバーストいける', 'super', '✨');
        sfx('ready', 1.1);
      }

      if (state.buzzMode > 0) {
        state.buzzMode = 0;
        state.buzz = 0;
        popText(center.x, center.y + 44, 'VIRAL BLAST', '#fff4a3', 26);
        sfx('burst', 1.22);
      }

      if (state.fireMode <= 0 && dom.dangerFog.classList.contains('show')) {
        dom.dangerFog.classList.remove('show');
        setCaption('炎上を押し返した。まだ伸ばせる。', 1.8);
      }
    }

    function destroyEngine() {
      if (rafId) cancelAnimationFrame(rafId);
      if (render) {
        Render.stop(render);
        render.canvas.remove();
        render.textures = {};
      }
      if (runner) Runner.stop(runner);
      if (engine) Composite.clear(engine.world, false);
      render = null;
      runner = null;
      engine = null;
      wallBodies = [];
      state.particles = [];
      state.rings = [];
      state.previewGroups = [];
      state.nextPreviewGroups = [];
      clearVisuals();
      dom.chatLane.innerHTML = '';
    }

    function initEngine() {
      const rect = dom.board.getBoundingClientRect();
      engine = Engine.create({ gravity:{ x:0, y:1 }, positionIterations:8, velocityIterations:7 });
      render = Render.create({
        element:dom.board,
        engine,
        options:{ width:rect.width, height:rect.height, wireframes:false, background:'transparent', pixelRatio:Math.min(window.devicePixelRatio || 1, 1.5) }
      });
      render.canvas.style.position = 'absolute';
      render.canvas.style.inset = '0';
      render.canvas.style.zIndex = '8';
      render.canvas.style.pointerEvents = 'none';
      updateWorldBounds();
      Render.run(render);
      runner = Runner.create();
      Runner.run(runner, engine);

      Events.on(render, 'afterRender', () => {
        const ctx = render.context;
        const trend = state.trendIndex;
        worldBodies().forEach(body => {
          if (body.gameType !== 'content') return;
          ctx.save();
          ctx.translate(body.position.x, body.position.y);
          ctx.rotate(body.angle);
          ctx.globalAlpha = 0.1;
          ctx.strokeStyle = body.contentIndex === trend ? CONTENTS[trend].accent : 'rgba(255,255,255,.3)';
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.arc(0, 0, body.circleRadius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();

          if (body.contentIndex !== trend) return;
          ctx.save();
          ctx.translate(body.position.x, body.position.y);
          ctx.rotate(body.angle);
          ctx.globalAlpha = 0.74 + 0.24 * Math.sin(performance.now() / 220 + body.id);
          ctx.strokeStyle = CONTENTS[trend].accent;
          ctx.lineWidth = 3.2;
          ctx.shadowBlur = 16;
          ctx.shadowColor = CONTENTS[trend].accent;
          ctx.beginPath();
          ctx.arc(0, 0, body.circleRadius + 4, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        });

        state.previewGroups.forEach(group => {
          const color = group.len >= 3 ? '#fff4a3' : '#8ef8ff';
          const strong = group.len >= 3;
          group.ids.forEach(id => {
            const body = worldBodies().find(b => b.id === id);
            if (!body) return;
            ctx.save();
            ctx.translate(body.position.x, body.position.y);
            ctx.rotate(body.angle);
            ctx.globalAlpha = strong ? 0.95 : 0.45;
            ctx.strokeStyle = color;
            ctx.lineWidth = strong ? 4 : 2;
            ctx.shadowBlur = strong ? 18 : 8;
            ctx.shadowColor = color;
            ctx.beginPath();
            ctx.arc(0, 0, body.circleRadius + (strong ? 8 : 5), 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          });
        });
        if (state.trendWarning) {
          state.nextPreviewGroups.forEach(group => {
            const color = group.len >= 3 ? '#d6b0ff' : '#86f1ff';
            const strong = group.len >= 3;
            group.ids.forEach(id => {
              const body = worldBodies().find(b => b.id === id);
              if (!body) return;
              ctx.save();
              ctx.translate(body.position.x, body.position.y);
              ctx.rotate(body.angle);
              ctx.globalAlpha = strong ? 0.5 : 0.3;
              ctx.setLineDash([5, 5]);
              ctx.strokeStyle = color;
              ctx.lineWidth = strong ? 3 : 2;
              ctx.shadowBlur = strong ? 12 : 6;
              ctx.shadowColor = color;
              ctx.beginPath();
              ctx.arc(0, 0, body.circleRadius + (strong ? 12 : 8), 0, Math.PI * 2);
              ctx.stroke();
              ctx.restore();
            });
          });
        }
      });
    }

    function resetState() {
      state.active = true;
      state.score = 0;
      state.tension = 88;
      state.craving = 0;
      state.heat = 0;
      state.buzz = 0;
      state.buzzReady = false;
      state.buzzMode = 0;
      state.buzzActivations = 0;
      state.clipTime = 0;
      state.clipCooldown = 17;
      state.clipActivations = 0;
      state.peakCombo = 0;
      state.combo = 0;
      state.comboTimer = 0;
      state.seed = todaySeed();
      state.rng = mulberry32(state.seed);
      state.trendIndex = Math.floor(gameRand() * CONTENTS.length);
      state.nextTrendIndex = (state.trendIndex + 1 + Math.floor(gameRand() * (CONTENTS.length - 1))) % CONTENTS.length;
      state.trendTimer = trendDuration();
      state.trendWarning = false;
      state.idle = 0;
      state.scanTimer = 0;
      state.commentTimer = 0;
      state.fireCooldown = 0;
      state.fireMode = 0;
      state.fireClearCount = 0;
      state.hazardTimer = 0;
      state.showCaptionTimer = 0;
      state.queue = [queueRoll(), queueRoll()];
      state.previewGroups = [];
      state.nextPreviewGroups = [];
      state.lastTs = 0;
      state.topDangerTime = 0;
      state.moodTimer = 0;
      state.currentLine = choice(PLAYER_LINES.focus);
      state.runTime = 0;
      state.clearCount = 0;
      state.recentSwitchBonus = 0;
      state.pinTimer = 0;
      state.pinMinLen = 3;
      state.pinBonusValue = 800;
      state.pinText = '';
      state.pinIcon = '📌';
      state.pinClass = 'hot';
      state.pinTargetIndex = 0;
      state.pinHits = 0;
      state.pinTargetIndex = state.trendIndex;
      state.rushWindow = 0;
      state.rushHits = 0;
      state.jackChain = 0;
      state.peakJackChain = 0;
      state.switchCleared = false;
      state.hintCooldown = 0;
      state.gameOverReason = 'tension';
      state.crownLead = false;
      state.crownHoldStreak = 0;
      state.peakCrownHold = 0;
      state.crownTakeovers = 0;
      updateSeedLabels();
    }

    function activateClipTime() {
      state.clipTime = 15;
      state.clipCooldown = 15.5 + gameRand() * 3.8;
      state.clipActivations += 1;
      setCaption('急上昇！ いまが最大の稼ぎどころ。ピンコメと先読みが重なると一気に1位チャンス。', 2.6);
      spawnComment(false, '急上昇きた！', 'super', '🎬');
      spawnComment(false, 'いま切り抜きどころ', 'super', '🚀');
      say('big', 2.1);
      flashScreen('#ffe37a');
      addRing(dom.board.clientWidth / 2, dom.board.clientHeight * 0.35, '#fff4a3', 16, 200);
      rollPinnedComment('clip');
      sfx('ready', 1.0);
    }

    function startGame() {
      persistPlayerName();
      ensureAudio();
      playBgm();
      playVoice('start');
      dom.startScreen.classList.add('hidden');
      dom.resultScreen.classList.add('hidden');
      dom.gameScreen.classList.remove('hidden');
      dom.avatar.src = 'assets/img/char_normal.png';
      dom.gameShell.classList.remove('shake');
      dom.dangerFog.classList.remove('show');
      dom.topDangerLine.classList.remove('show');
      resetState();
      destroyEngine();
      resizeCanvas();
      initEngine();
      setTrend(state.trendIndex, false);
      refreshQueue();
      updateUi();
      requestLoop(0);
    }

    function activateBurst() {
      if (!state.buzzReady || !state.active) return;
      state.buzzReady = false;
      state.buzz = 0;
      state.buzzMode = 10;
      state.buzzActivations += 1;
      dom.burstBtn.classList.remove('ready');
      dom.burstBtn.innerHTML = '<div><div class="icon">💥</div><div class="txt">発動中</div></div>';
      setCaption('バースト発動。次の当たり消しで周辺ごと吹き飛ぶ。山場に重ねると一気に伸びる。', 2.4);
      flashScreen('#ffe37a');
      addRing(dom.board.clientWidth / 2, dom.board.clientHeight * 0.42, '#ffe37a', 20, 240);
      sfx('burst', 1.12);
      say('buzz', 2.4);
    }

    function triggerFire(reason = 'pressure') {
      if (state.fireCooldown > 0 || state.fireMode > 0 || !state.active) return;
      state.fireMode = 9;
      state.fireCooldown = 16;
      state.fireClearCount = 0;
      state.hazardTimer = 0.9;
      dom.dangerFog.classList.add('show');
      dom.gameShell.classList.add('shake');
      setCaption(reason === 'top' ? '大炎上。上まで詰まってる。邪魔ブロックに注意。' : '大炎上。外しすぎてコメント欄が荒れている。今の需要を当てて空気を戻す。', 2.5);
      spawnComment(false, 'うわ燃えてる', 'low');
      playVoice('fire');
      flashScreen('#ff5b73');
      sfx('bad', 1);
      say('fire', 2.6);
      setTimeout(() => dom.gameShell.classList.remove('shake'), 260);
    }

    function spawnHazard() {
      const rect = dom.board.getBoundingClientRect();
      const x = 40 + gameRand() * (rect.width - 80);
      const body = makeBody(x, 44, -1, true);
      Body.setAngularVelocity(body, (gameRand() - 0.5) * 0.14);
      addParticles(x, 48, 'rgba(255,91,115,.9)', 10, 4);
      popText(x, 92, '炎上', '#ff5b73', 22);
      spawnComment(false, '邪魔ブロックきつい', 'low');
    }

    function dropAt(clientX) {
      if (!state.active || !engine) return;
      const rect = dom.board.getBoundingClientRect();
      if (clientX < rect.left || clientX > rect.right) return;
      const x = clamp(clientX - rect.left, 34, rect.width - 34);
      hoverX = x;
      renderPreview();
      const idx = state.queue.shift();
      makeBody(x, 56, idx, false);
      state.queue.push(queueRoll());
      state.idle = 0;
      state.tension = clamp(state.tension - 0.22, 0, 100);
      state.heat = clamp(state.heat + (idx === state.trendIndex ? 1.2 : 7.0), 0, 100);
      if (idx !== state.trendIndex) {
        state.craving = clamp(state.craving + 1.35, 0, 100);
        state.combo = Math.max(0, state.combo - 1);
        state.comboTimer = Math.min(state.comboTimer, 2.2);
        if (rand() < 0.34) spawnComment(false, `${CONTENTS[idx].name}置いたけど今の需要とズレたかも`, 'low', contentChatIcon(idx));
      } else {
        state.comboTimer = Math.max(state.comboTimer, 5.2);
        if (rand() < 0.24) spawnComment(false, `${CONTENTS[idx].name}いいね いま求めてた`, 'hot', contentChatIcon(idx));
      }
      renderPreview();
      addParticles(x, 70, CONTENTS[idx].accent, 6, 3);
      sfx('drop', 0.62);
    }

    function updateUi() {
      dom.scoreView.textContent = fmt(state.score);
      if (dom.comboView) dom.comboView.textContent = `x${state.combo}`;
      const topGap = Math.max(0, topDailyScore(state.seed) - Math.floor(state.score));
      const leaderName = (topDailyName(state.seed) || 'TOP').slice(0, 10);
      dom.bestMini.textContent = topDailyScore(state.seed) ? (topGap <= 0 ? 'TOP' : fmt(topGap)) : 'TOP';
      const crownTarget = Math.max(topDailyScore(state.seed), Math.floor(state.score), 12000);
      const crownRatio = crownTarget > 0 ? clamp(state.score / crownTarget, 0, 1) : 0;
      if (dom.crownFill) dom.crownFill.style.width = `${Math.round(crownRatio * 100)}%`;
      if (dom.topGapText) dom.topGapText.textContent = topDailyScore(state.seed) ? (topGap <= 0 ? `👑 いま1位 | ${playerName()}` : `👑 ${leaderName} まで あと ${fmt(topGap)}`) : '👑 まずは今日の1位を作ろう';
      if (dom.crownMini) dom.crownMini.textContent = topDailyScore(state.seed) ? (topGap <= 0 ? `1位キープ | ${playerName()}` : `${leaderName} まで ${fmt(topGap)}`) : '最初の1位を作ろう';
      dom.tensionFill.style.width = `${clamp(state.tension, 0, 100)}%`;
      dom.cravingFill.style.width = `${clamp(state.craving, 0, 100)}%`;
      dom.heatFill.style.width = `${clamp(state.heat, 0, 100)}%`;
      dom.buzzFill.style.width = `${clamp(state.buzz, 0, 100)}%`;
      dom.tensionNum.textContent = fmt(state.tension);
      dom.cravingNum.textContent = fmt(state.craving);
      dom.heatNum.textContent = fmt(state.heat);
      dom.buzzNum.textContent = fmt(state.buzz);
      dom.trendTimer.textContent = Math.ceil(state.trendTimer).toString();
      if (dom.comboView) dom.comboView.textContent = `x${state.combo}`;
      dom.avatar.src = state.craving >= 55 || state.tension <= 35 ? 'assets/img/char_yami.png' : 'assets/img/char_normal.png';
      if (!state.buzzReady && state.buzzMode <= 0) {
        dom.burstBtn.classList.remove('ready');
        dom.burstBtn.innerHTML = '<div><div class="icon">✨</div><div class="txt">バースト</div></div>';
      }
      dom.topDangerLine.classList.toggle('show', state.topDangerTime > 0.5);
      const crownRushActive = topGap > 0 && topGap <= 5200;
      const crownClutchActive = topGap > 0 && topGap <= 1800;
      const previewLen = biggestPreviewLen();
      const nextPreviewLen = biggestNextPreviewLen();
      const eventMiniText = state.clipTime > 0
        ? `急上昇 ${Math.ceil(state.clipTime)}s`
        : (state.rushWindow > 0
            ? (previewLen >= 2 ? `先読みGO x${previewLen}` : `先読み ${Math.ceil(state.rushWindow)}s`)
            : (state.jackChain > 0
                ? `先読み連勝 x${state.jackChain}`
                : (state.trendWarning && nextPreviewLen >= 3
                    ? `次波READY x${nextPreviewLen}`
                    : (state.trendWarning && nextPreviewLen >= 2
                        ? '次波あと1'
                        : (state.crownHoldStreak > 0
                            ? `王冠防衛 x${state.crownHoldStreak}`
                            : (crownClutchActive
                                ? '王冠クラッチ'
                                : (crownRushActive ? '王冠圏' : (topGap > 0 ? `1位まで ${fmt(topGap)}` : '1位ペース'))))))));
      dom.eventMini.textContent = eventMiniText;
      if (state.showCaptionTimer <= 0 && state.active) {
        let caption = '';
        if (state.clipTime > 0) {
          caption = `急上昇中。いまは『${currentTrend().name}』を取り切る時間。ピンコメと重なると最大の山になる。`;
        } else if (state.rushWindow > 0) {
          caption = previewLen >= 2
            ? `先読みGO。『${currentTrend().name}』をあと1つで取れる。いまが見せ場。`
            : `次の波チャンス。いまは『${currentTrend().name}』を3つ以上。`;
        } else if (state.trendWarning) {
          if (nextPreviewLen >= 3) caption = `次は『${nextTrend().name}』。もう完成が見えてる。切替直後を取って伸ばしたい。`;
          else if (nextPreviewLen >= 2) caption = `次は『${nextTrend().name}』。あと1個で仕込み完成。波読みボーナスも狙える。`;
          else caption = `次は『${nextTrend().name}』。切替前に2個まで仕込める。`;
        } else if (state.jackChain > 0) {
          caption = `先読み連勝 x${state.jackChain} 継続中。次の波も取るとさらに伸びる。`;
        } else if (state.crownHoldStreak > 0 && topGap <= 0) {
          caption = 'いま1位。防衛を重ねるほど王冠が固くなる。';
        } else if (crownClutchActive) {
          caption = `あと${fmt(topGap)}で今日の1位。次の一手が王冠クラッチ。`;
        } else {
          caption = `タップして落とす。今は『${currentTrend().name}』を3つ以上。${topGap > 0 ? ` あと${fmt(topGap)}で今日の1位。` : ' いま1位ペース。'}`;
        }
        dom.captionText.textContent = caption;
      }
      updatePinCommentUi();
      if (state.fireMode > 0) dom.burstBtn.classList.add('warn');
      else dom.burstBtn.classList.remove('warn');
    }

    function requestLoop(ts) {
      rafId = requestAnimationFrame(requestLoop);
      if (!state.active || !engine) return;
      if (!state.lastTs) state.lastTs = ts;
      const dt = clamp((ts - state.lastTs) / 1000, 0.001, 0.05);
      state.lastTs = ts;
      state.idle += dt;
      state.runTime += dt;
      state.scanTimer += dt;
      state.commentTimer += dt;
      state.clipCooldown = Math.max(0, state.clipCooldown - dt);
      state.fireCooldown = Math.max(0, state.fireCooldown - dt);
      state.showCaptionTimer = Math.max(0, state.showCaptionTimer - dt);
      state.recentSwitchBonus = Math.max(0, state.recentSwitchBonus - dt);
      state.pinTimer = Math.max(0, state.pinTimer - dt);
      state.rushWindow = Math.max(0, state.rushWindow - dt);
      state.hintCooldown = Math.max(0, state.hintCooldown - dt);
      state.trendTimer -= dt;
      if (state.clipTime > 0) {
        state.clipTime = Math.max(0, state.clipTime - dt);
      } else if (state.clipCooldown <= 0) {
        activateClipTime();
      }
      if (state.comboTimer > 0) {
        state.comboTimer -= dt;
        if (state.comboTimer <= 0) state.combo = 0;
      }

      const stats = boardStats();
      const idlePenalty = state.idle > 5.8 ? (state.idle - 5.8) * 0.46 : 0;
      const drain = (0.24 + stats.pressure * 0.96 + idlePenalty + (state.fireMode > 0 ? 0.88 : 0) + (state.topDangerTime > 0.6 ? 1.08 : 0)) * dt;
      const cravingGain = (0.18 + stats.clutter * 0.78 + idlePenalty * 0.62 + (state.fireMode > 0 ? 1.02 : 0)) * dt;
      const heatGain = (stats.clutter * 15 + stats.pressure * 4.1 + idlePenalty * 7 + (stats.nearTop ? 10 : 0)) * dt * 0.108;
      state.tension = clamp(state.tension - drain, 0, 100);
      state.craving = clamp(state.craving + cravingGain, 0, 100);
      state.heat = clamp(state.heat + heatGain, 0, 100);
      state.topDangerTime = stats.nearTop ? state.topDangerTime + dt : Math.max(0, state.topDangerTime - dt * 1.6);

      if (!state.trendWarning && state.trendTimer <= 5.2) {
        state.trendWarning = true;
        setCaption(`あと少しで『${nextTrend().name}』に切り替わる。今のうちに2個まで仕込んで、切替直後を取りたい。`, 2.6);
        say('warning', 2.1);
        spawnComment(false, `次は${nextTrend().name}来そう`, 'next');
        sfx('warn', 0.8);
      }
      if (state.trendTimer <= 0) {
        state.trendIndex = state.nextTrendIndex;
        let next = Math.floor(gameRand() * CONTENTS.length);
        if (next === state.trendIndex) next = (next + 1) % CONTENTS.length;
        state.nextTrendIndex = next;
        setTrend(state.trendIndex, true);
      }

      if (state.scanTimer >= 0.18) {
        state.scanTimer = 0;
        resolveGroups();
      }
      const previewLen = biggestPreviewLen();
      const nextPreviewLen = biggestNextPreviewLen();
      if (previewLen >= 2 && state.hintCooldown <= 0 && state.fireMode <= 0) {
        if (previewLen === 2) {
          spawnComment(false, `あと1個で${currentTrend().name}つながる`, 'hot', '👀');
          if (rand() < 0.45) spawnComment(false, state.pinTargetIndex === state.nextTrendIndex ? `次の波ピンコメも${nextTrend().name}待ち` : `ピンコメも${currentTrend().name}待ち`, 'next', '📌');
          if (Math.max(0, topDailyScore(state.seed) - Math.floor(state.score)) <= 4500 && topDailyScore(state.seed) > 0) spawnComment(false, '王冠チャンス見えてきた', 'super', '👑');
          state.hintCooldown = 3.2;
        } else if (previewLen >= 3) {
          spawnComment(false, `そのまま${currentTrend().name}消えそう`, 'super', '✨');
          state.hintCooldown = 2.4;
        }
      } else if (state.trendWarning && nextPreviewLen >= 2 && state.hintCooldown <= 0 && state.fireMode <= 0) {
        if (nextPreviewLen === 2) {
          spawnComment(false, `次の波の${nextTrend().name}、あと1個`, 'next', '🌊');
          state.hintCooldown = 3.0;
        } else {
          spawnComment(false, `次の波の${nextTrend().name}、もう見えてる`, 'super', '🌊');
          state.hintCooldown = 2.2;
        }
      }
      if (state.pinTimer <= 0) {
        rollPinnedComment(state.clipTime > 0 ? 'clip' : 'normal');
      }
      const chatInterval = state.clipTime > 0 ? 0.48 : 0.78;
      if (state.commentTimer >= chatInterval) {
        state.commentTimer = 0;
        spawnComment(false);
      }

      if (state.fireMode > 0) {
        state.fireMode -= dt;
        state.hazardTimer -= dt;
        if (state.hazardTimer <= 0) {
          spawnHazard();
          state.hazardTimer = 1.6 + gameRand() * 0.4;
        }
        if (state.fireMode <= 0) {
          dom.dangerFog.classList.remove('show');
          setCaption('炎上は収まった。まだ立て直せる。', 1.7);
        }
      }
      if (state.buzzMode > 0) {
        state.buzzMode -= dt;
        if (state.buzzMode <= 0 && !state.buzzReady) {
          setCaption('バーストは切れた。次の波を作る。', 1.6);
        }
      }

      if ((state.heat >= 100 || stats.pressure > 0.8 || state.topDangerTime > 1.5) && state.fireMode <= 0 && state.fireCooldown <= 0) {
        triggerFire(state.topDangerTime > 1.5 ? 'top' : 'pressure');
      }

      const mixStrength = clamp((state.fireMode > 0 ? 0.78 : 0) + (state.buzzMode > 0 ? 0.92 : 0) + (state.clipTime > 0 ? 0.36 : 0) + (state.tension < 35 ? 0.32 : 0) + (state.topDangerTime > 0.5 ? 0.22 : 0), 0, 1);
      setHyperMix(mixStrength);
      updateMoodText(dt);
      updateFx(dt);
      syncBodyVisuals();
      updateUi();

      if (state.topDangerTime > 3.2) {
        state.gameOverReason = 'top';
        finishGame();
      } else if (state.tension <= 0) {
        state.gameOverReason = 'tension';
        finishGame();
      }
    }

    function finishGame() {
      if (!state.active) return;
      state.active = false;
      cancelAnimationFrame(rafId);
      rafId = 0;
      dom.gameScreen.classList.add('hidden');
      dom.resultScreen.classList.remove('hidden');
      const rankRowsBefore = getDailyRanking();
      const wasBest = save.bestScore || 0;
      const isNewBest = Math.floor(state.score) > wasBest;
      const currentBest = Math.max(wasBest, Math.floor(state.score));
      save.bestScore = currentBest;
      save.dailyBest = save.dailyBest || {};
      save.dailyBest[state.seed] = Math.max(save.dailyBest[state.seed] || 0, Math.floor(state.score));
      const myRank = (() => {
        const seed = String(state.seed);
        const rows = (save.dailyRankings[seed] || []).slice();
        const entry = { name: playerName(), score: Math.floor(state.score), combo: state.peakCombo, clip: state.clipActivations, pin: state.pinHits, rush: state.rushHits, at: Date.now() };
        rows.push(entry);
        rows.sort((a, b) => b.score - a.score || b.combo - a.combo || (b.rush || 0) - (a.rush || 0) || b.pin - a.pin || b.clip - a.clip || a.at - b.at);
        save.dailyRankings[seed] = rows.slice(0, 5);
        persistSave();
        return save.dailyRankings[seed].findIndex(r => r.at === entry.at) + 1;
      })();
      dom.finalScore.textContent = fmt(state.score);
      dom.bestScore.textContent = fmt(currentBest);
      dom.peakCombo.textContent = fmt(state.peakCombo);
      dom.dailyRank.textContent = myRank > 0 ? `#${myRank}` : '-';
      dom.peakBuzz.textContent = `${fmt(state.buzzActivations)} / ${fmt(state.clipActivations)} / ${fmt(state.rushHits)} / ${fmt(state.forecastHits)} / ${fmt(state.crownTakeovers)} / ${fmt(state.peakCrownHold)}`;
      const top = topDailyScore(state.seed);
      const gap = Math.max(0, top - Math.floor(state.score));
      dom.bestMini.textContent = top ? (gap <= 0 ? 'TOP' : fmt(gap)) : 'TOP';
      renderDailyBoard(dom.dailyBoard);
      renderDailyBoard(dom.resultDailyBoard);
      if (myRank === 1) {
        dom.resultCopy.textContent = isNewBest
          ? `今日の1位を獲得。自己ベスト更新。${state.peakCrownHold > 0 ? ` 王冠防衛 x${state.peakCrownHold}。` : ''}${state.forecastHits > 0 ? ` 波読み x${state.forecastHits}。` : ''}`
          : `今日の1位。王冠キープ成功。${state.peakCrownHold > 0 ? ` 王冠防衛 x${state.peakCrownHold}。` : ''}${state.forecastHits > 0 ? ` 波読み x${state.forecastHits}。` : ''}`;
        playVoice('win');
      } else if (isNewBest) {
        dom.resultCopy.textContent = `自己ベスト更新。${gap > 0 ? `あと${fmt(gap)}で今日の1位。` : '今日の王冠に届いた。'}${state.forecastHits > 0 ? ` 波読み x${state.forecastHits}。` : ''}${myRank > 0 ? ` DAILY #${myRank}` : ''}`;
        playVoice('win');
      } else if (state.gameOverReason === 'top') {
        dom.resultCopy.textContent = `上まで詰まって配信事故。仕込みすぎで盤面が崩れた。${myRank > 0 ? ` DAILY #${myRank}` : ''}`;
        playVoice('lose');
      } else {
        dom.resultCopy.textContent = `視聴者のテンションが尽きて、配信が沈んだ。次は先読みで流れを取りたい。${myRank > 0 ? ` DAILY #${myRank}` : ''}`;
        playVoice('lose');
      }
      setHyperMix(0);
      destroyEngine();
    }

    async function copyResult() {
      const top = topDailyScore(state.seed);
      const gap = Math.max(0, top - Math.floor(state.score));
      const crownName = topDailyName(state.seed) || 'TOP';
      const text = `${playerName()} | トレバズ！ | DAILY #${state.seed}
SCORE ${fmt(state.score)}
MAX COMBO ${fmt(state.peakCombo)} / BURST ${fmt(state.buzzActivations)} / 急上昇 ${fmt(state.clipActivations)} / 先読み ${fmt(state.rushHits)} / 波読み ${fmt(state.forecastHits)} / 奪取 ${fmt(state.crownTakeovers)} / 防衛 ${fmt(state.peakCrownHold)}
${gap > 0 ? `${crownName} まであと ${fmt(gap)}` : '今日の王冠を獲得'}
#トレバズ`;
      try {
        await navigator.clipboard.writeText(text);
        setCaption('結果をコピーした。配信者同士でそのまま貼って競える。', 2.2);
        if (dom.shareBtn) dom.shareBtn.textContent = '✅ コピー済み';
        setTimeout(() => { if (dom.shareBtn) dom.shareBtn.textContent = '📋 結果をコピー'; }, 1600);
      } catch (_) {
        setCaption('コピーに失敗した。ブラウザの許可を確認して。', 2.2);
      }
    }

    function installServiceWorker() {
      if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
    }

    dom.startBtn.addEventListener('click', startGame);
    dom.retryBtn.addEventListener('click', startGame);
    dom.muteBtn.addEventListener('click', toggleMute);
    dom.resultMuteBtn.addEventListener('click', toggleMute);
    if (dom.shareBtn) dom.shareBtn.addEventListener('click', copyResult);
    dom.burstBtn.addEventListener('click', activateBurst);
    dom.board.addEventListener('pointermove', event => {
      const rect = dom.board.getBoundingClientRect();
      hoverX = clamp(event.clientX - rect.left, 34, rect.width - 34);
      renderPreview();
    });
    dom.board.addEventListener('pointerdown', event => {
      event.preventDefault();
      dropAt(event.clientX);
    });

    window.addEventListener('resize', applyAppHeight);
    window.addEventListener('orientationchange', () => setTimeout(applyAppHeight, 120));
    document.addEventListener('visibilitychange', () => { if (document.hidden) setHyperMix(0); });

    if (dom.handleInput) {
      dom.handleInput.value = save.playerName || '名無し配信者';
      dom.handleInput.addEventListener('change', persistPlayerName);
      dom.handleInput.addEventListener('blur', persistPlayerName);
    }
    updateMuteButtons();
    applyAppHeight();
    installServiceWorker();
    state.seed = todaySeed();
    updateSeedLabels();
    renderDailyBoard(dom.dailyBoard);
    renderDailyBoard(dom.resultDailyBoard);
    refreshQueue();
    renderPreview();
    dom.bestScore.textContent = fmt(save.bestScore || 0);
  })();

