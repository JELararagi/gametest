(() => {
    const { Engine, Render, Runner, Bodies, Composite, Events, Body, Sleeping } = Matter;

    const dom = {
      startScreen: document.getElementById('start-screen'),
      howtoScreen: document.getElementById('howto-screen'),
      gameScreen: document.getElementById('game-screen'),
      resultScreen: document.getElementById('result-screen'),
      startBtn: document.getElementById('start-btn'),
      howtoBtn: document.getElementById('howto-btn'),
      howtoStartBtn: document.getElementById('howto-start-btn'),
      howtoBackBtn: document.getElementById('howto-back-btn'),
      retryBtn: document.getElementById('retry-btn'),
      shareBtn: document.getElementById('share-btn'),
      muteBtn: document.getElementById('mute-btn'),
      resultMuteBtn: document.getElementById('result-mute-btn'),
      resultTitleBtn: document.getElementById('result-title-btn'),
      gameShell: document.getElementById('game-shell'),
      board: document.getElementById('game-board'),
      boardCharacter: document.getElementById('board-character'),
      boardCharacterBack: document.getElementById('board-character-back'),
      gameoverFxVideo: document.getElementById('gameover-fx-video'),
      chatLaneBack: document.getElementById('chat-lane-back'),
      chatLane: document.getElementById('chat-lane'),
      mergeCanvas: document.getElementById('merge-canvas'),
      itemLayer: document.getElementById('item-layer'),
      particleCanvas: document.getElementById('particle-canvas'),
      fxCanvas: document.getElementById('fx-canvas'),
      previewItem: document.getElementById('preview-item'),
      nextMini1: document.getElementById('next-mini-1'),
      nextMini2: document.getElementById('next-mini-2'),
      trendThumb: document.getElementById('trend-thumb'),
      centerTop: document.getElementById('center-top'),
      trendMain: document.getElementById('trend-main'),
      nextBlock: document.getElementById('next-block'),
      trendName: document.getElementById('trend-name'),
      trendCopy: document.getElementById('trend-copy'),
      trendProgressFill: document.getElementById('trend-progress-fill'),
      trendTimer: document.getElementById('trend-timer'),
      nextTrendThumb: document.getElementById('next-trend-thumb'),
      nextTrendName: document.getElementById('next-trend-name'),
      nextSwitchCopy: document.getElementById('next-switch-copy'),
      futureTrendThumb: document.getElementById('future-trend-thumb'),
      futureTrendName: document.getElementById('future-trend-name'),
      streamTimeMini: document.getElementById('stream-time-mini'),
      streamTimeTop: document.getElementById('stream-time-top'),
      scoreView: document.getElementById('score-view'),
      scoreViewTop: document.getElementById('score-view-top'),
      moodText: document.getElementById('mood-text'),
      speechBubble: document.getElementById('speech-bubble'),
      speechText: document.getElementById('speech-text'),
      comboView: document.getElementById('combo-view'),
      chainView: document.getElementById('chain-view'),
      tensionFill: document.getElementById('tension-fill'),
      cravingFill: document.getElementById('craving-fill'),
      heatFill: document.getElementById('heat-fill'),
      buzzFill: document.getElementById('buzz-fill'),
      tensionNum: document.getElementById('tension-num'),
      cravingNum: document.getElementById('craving-num'),
      heatNum: document.getElementById('heat-num'),
      buzzNum: document.getElementById('buzz-num'),
      avatar: document.getElementById('avatar'),
      pauseBtn: document.getElementById('pause-btn'),
      retryPlayBtn: document.getElementById('retry-play-btn'),
      titleBtn: document.getElementById('title-btn'),
      pauseOverlay: document.getElementById('pause-overlay'),
      resumeGameBtn: document.getElementById('resume-game-btn'),
      resumeBtn: document.getElementById('resume-btn'),
      pauseMuteBtn: document.getElementById('pause-mute-btn'),
      pauseRetryBtn: document.getElementById('pause-retry-btn'),
      pauseTitleBtn: document.getElementById('pause-title-btn'),
      burstBtn: document.getElementById('burst-btn'),
      captionText: document.getElementById('caption-text'),
      dropGuide: document.getElementById('drop-guide'),
      previewRing: document.getElementById('preview-ring'),
      dropSelector: document.getElementById('drop-selector'),
      dropSelectorButtons: Array.from(document.querySelectorAll('#drop-selector [data-drop-index]')),
      dangerFog: document.getElementById('danger-fog'),
      gameoverLine: document.getElementById('gameover-line'),
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
      trendShiftBanner: document.getElementById('trend-shift-banner'),
      trendShiftKicker: document.getElementById('trend-shift-kicker'),
      trendShiftFrom: document.getElementById('trend-shift-from'),
      trendShiftFromThumb: document.getElementById('trend-shift-from-thumb'),
      trendShiftTo: document.getElementById('trend-shift-to'),
      trendShiftToThumb: document.getElementById('trend-shift-to-thumb'),
      trendShiftFutureThumb: document.getElementById('trend-shift-future-thumb'),
      trendShiftFutureName: document.getElementById('trend-shift-future-name'),
      trendShiftSub: document.getElementById('trend-shift-sub'),
      handleInput: document.getElementById('handle-input'),
      dailyBoard: document.getElementById('daily-board'),
      resultDailyBoard: document.getElementById('result-daily-board'),
      bgmNormal: document.getElementById('audio-bgm-lofi'),
      bgmHyper: document.getElementById('audio-bgm-hyper'),
      resultBgmWin: document.getElementById('audio-result-win'),
      resultBgmLose: document.getElementById('audio-result-lose'),
      bgVideo: document.getElementById('bg-video'),
      bgVideoHype: document.getElementById('bg-video-hype'),
      boardBgVideoHype: document.getElementById('board-bg-video-hype'),
      bgContainer: document.getElementById('bg-container'),
      audioMerge: document.getElementById('audio-merge'),
      voiceStart: document.getElementById('voice-start'),
      voiceFire: document.getElementById('voice-alert'),
      voiceWin: document.getElementById('voice-win'),
      voiceLose: document.getElementById('voice-lose'),
      bigBuzzBanner: document.getElementById('big-buzz-banner'),
      fireBanner: document.getElementById('fire-banner'),
      superchatBanner: document.getElementById('superchat-banner')
    };

    if (dom.centerTop && !document.getElementById('trend-forecast')) {
      const forecast = document.createElement('div');
      forecast.id = 'trend-forecast';
      dom.centerTop.insertBefore(forecast, dom.trendMain);
      dom.trendForecast = forecast;
      dom.trendForecastSlots = [];
      for (let i = 0; i < 6; i += 1) {
        const slot = document.createElement('div');
        slot.className = 'forecast-slot';
        slot.innerHTML = `<div class="forecast-label">${i === 5 ? '次のトレンド' : '&nbsp;'}</div><img alt="forecast trend"><div class="forecast-name"></div>`;
        forecast.appendChild(slot);
        dom.trendForecastSlots.push(slot);
      }
    } else {
      dom.trendForecast = document.getElementById('trend-forecast');
      dom.trendForecastSlots = Array.from(document.querySelectorAll('#trend-forecast .forecast-slot'));
    }
    dom.trendForecastSlots?.forEach(slot => {
      slot._img = slot.querySelector('img');
      slot._label = slot.querySelector('.forecast-label');
      slot._name = slot.querySelector('.forecast-name');
      slot.dataset.uiKey = '';
    });
    dom.dropSelectorButtonMap = new Map((dom.dropSelectorButtons || []).map(btn => [Number(btn.dataset.dropIndex || '-1'), btn]));


    if (dom.eventMini) {
      dom.eventMini.innerHTML = '<div class="event-mini-track"><span class="event-mini-copy"></span><span class="event-mini-copy" aria-hidden="true"></span></div>';
      dom.eventMiniTrack = dom.eventMini.querySelector('.event-mini-track');
      dom.eventMiniCopies = Array.from(dom.eventMini.querySelectorAll('.event-mini-copy'));
      dom.eventMini.dataset.lastValue = '';
    }
    function setEventMiniText(text) {
      if (!dom.eventMini) return;
      const value = String(text || '');
      if (dom.eventMini.dataset.lastValue === value) return;
      dom.eventMini.dataset.lastValue = value;
      if (dom.eventMiniCopies?.length) {
        dom.eventMiniCopies.forEach(node => { node.textContent = value; });
      } else {
        dom.eventMini.textContent = value;
      }
    }

    const CONTENTS = [
      { id:'talk', name:'雑談', img:'assets/img/item_1.png', accent:'#ffffff', lines:['雑談して','近況トークちょうだい','ゆるい空気がほしい','作業しながら聞きたい'], physics:{ bboxW:512, bboxH:463, body:22, chat:'💬' } },
      { id:'gaming', name:'ゲーム配信', img:'assets/img/item_2.png', accent:'#8ef8ff', lines:['ゲーム配信見たい','神プレイ待ってる','対戦いこう','ゲームの反応ほしい'], physics:{ bboxW:512, bboxH:455, body:23, chat:'🎮' } },
      { id:'music', name:'歌枠', img:'assets/img/item_3.png', accent:'#ffd95c', lines:['歌ってほしい','声を浴びたい','サビだけでもお願い','リクエスト投げたい'], physics:{ bboxW:512, bboxH:429, body:24, chat:'🎤' } },
      { id:'asmr', name:'ASMR', img:'assets/img/item_4.png', accent:'#43eaff', lines:['ASMRほしい','耳が助かる','囁き待ってる','寝る前に聞きたい'], physics:{ bboxW:511, bboxH:512, body:25, chat:'🎧' } },
      { id:'love', name:'恋バナ', img:'assets/img/item_5.png', accent:'#ff68c1', lines:['恋バナまだ？','今日は甘めで','沼らせて','惚気でも失恋でも聞きたい'], physics:{ bboxW:306, bboxH:512, body:27, chat:'💗' } },
      { id:'secret', name:'暴露', img:'assets/img/item_6.png', accent:'#ff9b42', lines:['ちょっと危ない話して','裏話まだ？','秘密トークほしい','ギリギリの話待ってる'], physics:{ bboxW:380, bboxH:512, body:29, chat:'💎' } }
    ];
    const SPECIAL = { hazard:'assets/img/hazard.png', fire:'assets/img/fire.png', buzz:'assets/img/buzz.png', physics:{ bboxW:454, bboxH:512, body:32, chat:'💣' }, firePhysics:{ bboxW:454, bboxH:512, body:32, chat:'🔥' }, buzzPhysics:{ bboxW:454, bboxH:512, body:32, chat:'✨' } };
    const PLAYER_LINES = {
      calm:[
        'よし、まだ空気はこっちにある。','今日はちゃんと伸ばせる気がする。','焦らない、流れだけ見れば勝てる。','いまは土台を作る時間。','まだ余裕ある、丁寧に拾う。','この感じなら配信としておいしい。','コメントの温度、悪くない。','まずは一回しっかり当てる。'
      ],
      focus:[
        '今ほしい話題だけを通す。','ここは外さない、需要に合わせる。','次の一個まで見えてる。','欲しいのはこれ、迷わない。','いま拾うべき話題に寄せる。','盤面より流れを見る。','ここは精度で勝つ。','今のトレンドをきっちり取る。'
      ],
      low:[
        'ちょっと冷えた…でもまだ巻き返せる。','空気が重い、でもここから返す。','まだ終わってない、一本当てれば戻る。','今は無理せず立て直す。','視聴者離さない、まだ喋れる。','ちょい苦しい…でも折れない。','ここで崩れたくない、丁寧に行く。','まだ見せ場は作れる。'
      ],
      fire:[
        '炎上してる、でもここで止まれない。','コメント荒れてる…先に火を消す。','まずい、でも返し方はある。','ここは謝罪配信で立て直す。','荒れた空気ごと押し返す。','うるさいけど、まだ終わらせない。','この炎上、ちゃんと処理する。','焦るな、火元から消す。'
      ],
      buzz:[
        '来た、この波は全部もらう。','大バズり中、今のうちに伸ばす。','ここから一気に数字を持っていく。','今ならまとめて刺さる。','この秒数でトップまで詰める。','流れ来てる、逃がさない。','ここが今日の山場。','いまの勢いで全部ひっくり返す。'
      ],
      warning:[
        '次のトレンド来る、仕込む。','切りかわる前に形を作る。','次の波、あと少しで来る。','今のうちに次の準備をする。','切替直後を取りたい。','次の本命、見えてきた。','今のうちに種をまく。','次の需要に合わせて寄せる。'
      ],
      top:[
        '上が近い…ここで雑に置けない。','これ以上積むと危ない。','まずは盤面を開ける。','限界ライン近い、慎重にいく。','事故る前に今消せるやつを取る。','ここで欲張ると終わる。','上が詰まってる、崩し優先。','一手ミスると配信事故。'
      ],
      switch:[
        '来た、流れ変わった。','トレンド更新、ここから乗る。','今の本命が切り替わった。','次の話題へ乗り換える。','よし、新しい波を取りにいく。','ここから盤面の意味が変わる。','トレンド変化、すぐ合わせる。','今の一手が分岐になる。'
      ],
      rush:[
        '先読みで初速を取る。','切替直後を抜けたら大きい。','今の仕込み、ちゃんと回収したい。','ここで先読みを通せば伸びる。','次の入口、逃がさない。','仕込んだ分をここで回収する。','切り替わりの一手が見せ場。','今の先読み、かなり熱い。'
      ],
      jack:[
        '先読みがつながってる、まだ行ける。','これ、連続で取れてる。','次の波まで見えてる。','先読み連勝、かなり気持ちいい。','この流れ、読み勝ってる。','切替直後を毎回抜けてる。','ここからさらに伸びる。','まだ次も取れる。'
      ],
      clear:[
        'よし、今のは通った。','この当たり方は大きい。','いい消し方、流れが戻る。','今の一手で空気が変わった。','ちゃんと刺さった、続ける。','コメントの温度上がった。','いい感じ、そのまま伸ばす。','今の反応は取れてる。'
      ],
      big:[
        'でかい、今のかなりでかい。','これ切り抜かれるやつ。','今のは配信の山だ。','うわ、気持ちいい…！','数字が動く消し方した。','いま完全に見せ場入った。','その消し方は映える。','今の一手、かなり持っていった。'
      ]
    };
    const COMMENT_BANK = {
      high:[
        'いい流れ！','その置き方いいね！','今の並びわかりやすい！','次もつながりそう！','見てて楽しい！','そのまま行こう！','今の消し方気持ちいい！','いい準備できてる！'
      ],
      mid:[
        '次の1こが大事だね','いまのお題を集めよう','次も見ていこう','ゆっくりで大丈夫','形ができてきた！','まだまだいける！','ここから伸ばせる！','次の置き場所を見たい！'
      ],
      low:[
        '上が少し高いかも','いったん形を整えよう','今は無理しなくて大丈夫','同じアイテムを近づけたいね','ちがう話題が増えてきたかも','まずは1回消したい！','落ち着いていこう','いまのお題を集め直そう'
      ],
      fire:[
        '炎があるから近くでまとめて消したい！','いまは立て直し優先！','爆弾のあとで大変！','炎の近くを先にさわりたい','落ち着いて消していこう！','まだ戻せるよ！'
      ],
      warning:[
        '次のお題を先に用意したい！','次の並びを見ておこう','次のお題もつなげたいね','いまのうちに次の準備！','次の波が見えてきた！'
      ],
      super:[
        'わあ、すごい！','今の気持ちいい！','大きく消せた！','ナイスタイミング！','見てて楽しい！','今の大当たり！','そのまま連続でいこう！','すごく上手！'
      ],
      rush:[
        '次のお題の準備いいね！','切りかわり後が楽しみ！','先に置けてる！','その並べ方うまい！','次もすぐ消せそう！'
      ],
      jack:[
        '先読み上手！','その形すごくいい！','次もすぐ取れそう！','きれいにつながってる！','その読みあたり！'
      ],
      bigbuzz:[
        '大バズり中！いまは2こで消える！','いまがまとめ取りチャンス！','いまのうちにどんどん消したい！','2こつなぐだけで消せる！','大バズりが続いてる！'
      ],
      rescue:[
        'まずは炎の近くを消したい！','いまは立て直しが大事！','炎を巻きこみながら消そう！','あせらず安全にいこう！','まだ戻せるよ！'
      ],
      bomb:[
        '爆弾が2こある！もう1こで大炎上！','爆弾は近づけすぎ注意！','爆弾3こで炎が広がるよ','爆弾は置き場所しだいだね','先に安全な場所を作りたい！'
      ],
      buzzPrep:[
        'バズりが2こある！あと1こで大バズり！','バズりをもう1こ引けたら大チャンス！','バズり3こで2こ消しタイムに入るよ','バズりをそろえたい！','バズりが来たらまとめて取りたい！'
      ],
      chain:[
        '連鎖つづいてる！','まだ消える！','この連鎖おいしい！','次もつながりそう！','流れいいね！'
      ],
      combo:[
        'コンボのびてる！','このまま続けたい！','短い間にまた消すとコンボ！','まだ流れある！','次もすぐ置きたい！'
      ],
      crown:[
        'あと少しで今日の1位！','王冠まで近い！','この一手で1位が見える！','ここで決めたい！','1位ラインが見えてる！'
      ],
      clutter:[
        'いまのお題を集め直そう','ちがう話題が多いかも','盤面をすっきりさせたい','同じアイテムを寄せたい','先に消せる形を作ろう'
      ]
    };
    const SPECIAL_COMMENT_BANK = {
      anti:[
        'ちょっと苦しいかも','いったん安全に行こう','今は高くしすぎないでね','別の場所も見てみよう','先に1回消したい！','まだ取り返せるよ！','落ち着いていこう','ゆっくりで大丈夫'
      ],
      superchat:[
        '応援してるよ！','今のいいね！','そのままがんばれ！','すごく上手！','見てて楽しい！','次も見たい！','ナイスプレイ！','この流れ好き！'
      ]
    };

    const USERNAMES = ["ねこ","そら","みず","こむぎ","るな","ゆき","ひなた","もも","しお","みかん","くるみ","うみ","なぎ","すず","はる","あお","つばさ","ゆめ","ほし","ひかり","みるく","ぱんだ","こあら","しろくま"];

    const storageKey = 'trendbuzz_v58';
    const save = JSON.parse(localStorage.getItem(storageKey) || '{}');

    let engine = null;
    let render = null;
    let runner = null;
    let rafId = 0;
    let wallBodies = [];
    let particleCtx = null;
    let fxCtx = null;
    let mergeCtx = null;
    let hoverX = 0;
    let appHeight = window.innerHeight;
    let audioCtx = null;
    let muted = !!save.muted;
    let lastAppliedAudioSessionType = '';
    save.bestScore = save.bestScore || 0;
    save.dailyBest = save.dailyBest || {};
    save.dailyRankings = save.dailyRankings || {};
    save.playerName = (save.playerName || 'ななしさん').slice(0, 14);
    const bodyVisuals = new Map();
    const SPATIAL_HASH_CELL = 112;
    const SPATIAL_HASH_OFFSET = 4096;
    const SPATIAL_HASH_STRIDE = 8192;
    let lastTrendForecastSignature = '';
    let lastQueueSignature = '';
    let lastDropSelectorIndex = -1;
    let previewRestoreTimer = 0;
    let lastPreviewRenderKey = '';
    let lastPreviewCenterX = 0;
    let lastPreviewCenterY = 0;
    let recentTouchPairsNextPruneAt = 0;
    let pointerPreviewRaf = 0;
    let pendingPointerClientX = 0;
    let pendingClearVisualIds = [];
    const EMPTY_ID_ARRAY = Object.freeze([]);
    const EMPTY_BODY_ARRAY = Object.freeze([]);
    const EMPTY_LOOKUP_MAP = new Map();
    const scratchEligibleBodies = [];
    const scratchFrozenBodies = [];
    const scratchActiveBodies = [];
    const scratchGroupSourceBodies = [];
    const scratchGroupSeedBodies = [];
    const scratchScanSeedBodies = [];
    const scratchFullSweepBodies = [];

    function spatialHashKey(cx, cy) {
      if (cx <= -SPATIAL_HASH_OFFSET || cx >= SPATIAL_HASH_OFFSET || cy <= -SPATIAL_HASH_OFFSET || cy >= SPATIAL_HASH_OFFSET) {
        return `${cx},${cy}`;
      }
      return (cx + SPATIAL_HASH_OFFSET) * SPATIAL_HASH_STRIDE + (cy + SPATIAL_HASH_OFFSET);
    }

    function buildSpatialHash(bodies, cellSize = SPATIAL_HASH_CELL) {
      const buckets = new Map();
      for (let i = 0; i < bodies.length; i += 1) {
        const body = bodies[i];
        const cx = Math.floor(body.position.x / cellSize);
        const cy = Math.floor(body.position.y / cellSize);
        const key = spatialHashKey(cx, cy);
        let bucket = buckets.get(key);
        if (!bucket) {
          bucket = [];
          buckets.set(key, bucket);
        }
        bucket.push(body);
      }
      return { buckets, cellSize };
    }

    function visitNearbyFromHash(hash, body, radiusCells = 1, fn) {
      const { buckets, cellSize } = hash;
      const baseX = Math.floor(body.position.x / cellSize);
      const baseY = Math.floor(body.position.y / cellSize);
      for (let cy = baseY - radiusCells; cy <= baseY + radiusCells; cy += 1) {
        for (let cx = baseX - radiusCells; cx <= baseX + radiusCells; cx += 1) {
          const bucket = buckets.get(spatialHashKey(cx, cy));
          if (!bucket) continue;
          for (let i = 0; i < bucket.length; i += 1) {
            if (fn(bucket[i]) === true) return true;
          }
        }
      }
      return false;
    }

    function collectEligibleBodies(sourceBodies, minAgeMs = 220, outBodies = scratchGroupSourceBodies) {
      outBodies.length = 0;
      const now = performance.now();
      for (let i = 0; i < (sourceBodies?.length || 0); i += 1) {
        const body = sourceBodies[i];
        if (!body || body.plugin?.pendingRemoval) continue;
        if (now - (body.spawnAt || 0) <= minAgeMs) continue;
        outBodies.push(body);
      }
      return outBodies;
    }

    function buildTouchGroupsFromBodies(targetBodies, pad = 0.5, sourceHash = null) {
      if (!targetBodies.length) return [];
      const hash = sourceHash || buildSpatialHash(targetBodies);
      const groups = [];
      const visitStamp = (state.touchGroupVisitStamp || 0) + 1;
      state.touchGroupVisitStamp = visitStamp;
      for (let i = 0; i < targetBodies.length; i += 1) {
        const body = targetBodies[i];
        if (!body) continue;
        body.plugin = body.plugin || {};
        if (body.plugin._touchVisitStamp === visitStamp) continue;
        const stack = [body];
        const group = [];
        body.plugin._touchVisitStamp = visitStamp;
        while (stack.length) {
          const current = stack.pop();
          group.push(current);
          visitNearbyFromHash(hash, current, 1, other => {
            if (!other || other.id === current.id) return false;
            other.plugin = other.plugin || {};
            if (other.plugin._touchVisitStamp === visitStamp) return false;
            if (!touchingWithPad(current, other, pad)) return false;
            other.plugin._touchVisitStamp = visitStamp;
            stack.push(other);
            return false;
          });
        }
        groups.push(group);
      }
      return groups;
    }
    const missingAvatarFiles = new Set();
    let trendBannerTimer = 0;
    const TOUCH_MEMORY_TTL_MS = 520;
    const recentTouchPairs = new Map();
    let lastCommentSpawnAt = 0;
    let activeBoardCharacterLayer = 'front';
    const avatarVariants = {
      normal:['char_normal.png'],
      focus:['char_focus.png','char_normal.png'],
      hype:['char_hype.png','char_focus.png','char_normal.png'],
      warning:['char_warning.png','char_focus.png','char_normal.png'],
      panic:['char_panic.png','char_yami.png','char_normal.png'],
      yami:['char_yami.png','char_panic.png','char_normal.png'],
      apology:['char_apology.png','char_normal.png'],
      win:['char_win.png','char_hype.png','char_normal.png']
    };
    const avatarImageCache = new Map();
    const uniqueAvatarFiles = [...new Set(Object.values(avatarVariants).flat())];
    function preloadAvatarFile(file) {
      if (!file || avatarImageCache.has(file)) return avatarImageCache.get(file);
      const img = new Image();
      img.decoding = 'async';
      img.src = `assets/img/${file}`;
      avatarImageCache.set(file, img);
      return img;
    }
    function preloadAllAvatars() {
      uniqueAvatarFiles.forEach(preloadAvatarFile);
    }

    function swapBoardCharacter(file, nextSrc) {
      if (!dom.boardCharacterBack || !dom.boardCharacter) {
        if (dom.boardCharacter) {
          dom.boardCharacter.dataset.file = file;
          dom.boardCharacter.src = nextSrc;
        }
        return;
      }
      const front = activeBoardCharacterLayer === 'front' ? dom.boardCharacter : dom.boardCharacterBack;
      const back = activeBoardCharacterLayer === 'front' ? dom.boardCharacterBack : dom.boardCharacter;
      if (front?.dataset?.file === file && front.classList.contains('active')) return;
      if (!back) return;
      const swapToken = ++boardCharacterSwapToken;
      const finalizeSwap = () => {
        if (swapToken !== boardCharacterSwapToken) return;
        requestAnimationFrame(() => {
          if (swapToken !== boardCharacterSwapToken) return;
          [front, back].forEach(layer => {
            if (!layer) return;
            layer.style.width = '107.25%';
            layer.style.height = '107.25%';
            layer.style.aspectRatio = '1 / 1';
            layer.style.objectFit = 'contain';
            layer.style.objectPosition = 'center bottom';
            layer.style.transform = 'translate3d(-50%,0,0)';
          });
          front?.classList.remove('active');
          back.classList.add('active');
          activeBoardCharacterLayer = activeBoardCharacterLayer === 'front' ? 'back' : 'front';
        });
      };
      back.decoding = 'sync';
      back.loading = 'eager';
      back.dataset.file = file;
      back.style.width = '107.25%';
      back.style.height = '107.25%';
      back.style.aspectRatio = '1 / 1';
      back.style.objectFit = 'contain';
      back.style.objectPosition = 'center bottom';
      back.style.transform = 'translate3d(-50%,0,0)';
      back.classList.remove('active');
      const activateWhenReady = () => {
        Promise.resolve(back.decode?.()).catch(() => {}).finally(finalizeSwap);
      };
      if (back.src !== nextSrc) {
        back.src = nextSrc;
      }
      if (back.complete && back.naturalWidth > 0) {
        activateWhenReady();
      } else {
        back.addEventListener('load', activateWhenReady, { once:true });
      }
    }


    const voicePools = {
      start:['assets/audio/voice_mc_start_01.wav','assets/audio/voice_mc_start_02.wav','assets/audio/voice_mc_start_03.wav','assets/audio/voice_mc_start_04.wav'],
      calm:['assets/audio/voice_mc_calm_01.wav','assets/audio/voice_mc_calm_02.wav','assets/audio/voice_mc_calm_03.wav','assets/audio/voice_mc_calm_04.wav'],
      focus:['assets/audio/voice_mc_focus_01.wav','assets/audio/voice_mc_focus_02.wav','assets/audio/voice_mc_focus_03.wav','assets/audio/voice_mc_focus_04.wav'],
      warning:['assets/audio/voice_mc_warning_01.wav','assets/audio/voice_mc_warning_02.wav','assets/audio/voice_mc_warning_03.wav','assets/audio/voice_mc_warning_04.wav'],
      clear:['assets/audio/voice_mc_clear_01.wav','assets/audio/voice_mc_clear_02.wav','assets/audio/voice_mc_clear_03.wav','assets/audio/voice_mc_clear_04.wav','assets/audio/voice_mc_clear_05.wav'],
      chain:['assets/audio/voice_mc_chain_02.wav','assets/audio/voice_mc_chain_03.wav','assets/audio/voice_mc_chain_04.wav','assets/audio/voice_mc_chain_05.wav','assets/audio/voice_mc_chain_06.wav'],
      hype:['assets/audio/voice_mc_hype_01.wav','assets/audio/voice_mc_hype_02.wav','assets/audio/voice_mc_hype_03.wav','assets/audio/voice_mc_hype_04.wav','assets/audio/voice_mc_hype_05.wav'],
      fire:['assets/audio/voice_mc_fire_01.wav','assets/audio/voice_mc_fire_02.wav','assets/audio/voice_mc_fire_03.wav','assets/audio/voice_mc_fire_04.wav'],
      apology_ready:['assets/audio/voice_mc_apology_ready_01.wav','assets/audio/voice_mc_apology_ready_02.wav','assets/audio/voice_mc_apology_ready_03.wav'],
      apology_fire:['assets/audio/voice_mc_apology_fire_01.wav','assets/audio/voice_mc_apology_fire_02.wav','assets/audio/voice_mc_apology_fire_03.wav','assets/audio/voice_mc_apology_fire_04.wav'],
      rush:['assets/audio/voice_mc_rush_01.wav','assets/audio/voice_mc_rush_02.wav','assets/audio/voice_mc_rush_03.wav','assets/audio/voice_mc_rush_04.wav'],
      jack:['assets/audio/voice_mc_jack_01.wav','assets/audio/voice_mc_jack_02.wav','assets/audio/voice_mc_jack_03.wav','assets/audio/voice_mc_jack_04.wav'],
      big:['assets/audio/voice_mc_big_01.wav','assets/audio/voice_mc_big_02.wav','assets/audio/voice_mc_big_03.wav','assets/audio/voice_mc_big_04.wav','assets/audio/voice_mc_big_05.wav'],
      top:['assets/audio/voice_mc_top_01.wav','assets/audio/voice_mc_top_02.wav','assets/audio/voice_mc_top_03.wav','assets/audio/voice_mc_top_04.wav'],
      win:['assets/audio/voice_mc_win_01.wav','assets/audio/voice_mc_win_02.wav','assets/audio/voice_mc_win_03.wav','assets/audio/voice_mc_win_04.wav'],
      lose:['assets/audio/voice_mc_lose_01.wav','assets/audio/voice_mc_lose_02.wav','assets/audio/voice_mc_lose_03.wav','assets/audio/voice_mc_lose_04.wav']
    };

    const VOICE_TEXT_MAP = {
      'voice_mc_start_01.wav':'配信スタートっ！ねぇ、私がいっちばん可愛いでしょ？',
      'voice_mc_start_02.wav':'はーい、今日も承認欲求満たしにきたよー♡',
      'voice_mc_start_03.wav':'待ってた？ 今日も同接トップ狙っていくからねっ！',
      'voice_mc_start_04.wav':'さっそく、同接（すうじ）稼いでこっか！',
      'voice_mc_calm_01.wav':'んー、まずはこんなもんかな？',
      'voice_mc_calm_02.wav':'まあまあ、天才だから余裕だし？',
      'voice_mc_calm_03.wav':'綺麗に積んでくよー、見ててね。',
      'voice_mc_calm_04.wav':'いい調子！ いっぱいコメントしてね♡',
      'voice_mc_focus_01.wav':'欲しいのはこれ！ 逃がさないよっ。',
      'voice_mc_focus_02.wav':'今の空気、完全に理解した！',
      'voice_mc_focus_03.wav':'はい、狙い撃ちー♡',
      'voice_mc_focus_04.wav':'私の目に狂いはないんだからっ！',
      'voice_mc_warning_01.wav':'なんか…でっかい波、来そうじゃない？',
      'voice_mc_warning_02.wav':'みんな、準備はいい？ いくよっ！',
      'voice_mc_warning_03.wav':'そろそろ本気、出しちゃおっかなー。',
      'voice_mc_warning_04.wav':'今のうちに、媚びとこっと♡',
      'voice_mc_clear_01.wav':'はいっ、天才ー！',
      'voice_mc_clear_02.wav':'んふふ、いい感じじゃん。',
      'voice_mc_clear_03.wav':'刺さったでしょ、今の！',
      'voice_mc_clear_04.wav':'おっ、コメ欄あったまってきたねー。',
      'voice_mc_clear_05.wav':'助かる！ えらいっ！',
      'voice_mc_chain_02.wav':'まだまだ！ もっと私を見てーっ！',
      'voice_mc_chain_03.wav':'ｷﾀｺﾚ！ 脳汁やばいっ！',
      'voice_mc_chain_04.wav':'ぁあっ、これめっちゃ気持ちいい…！',
      'voice_mc_chain_05.wav':'ここ！ 絶対クリップしてね！！',
      'voice_mc_chain_06.wav':'止まんない止まんない！ あはははっ！',
      'voice_mc_hype_01.wav':'覇権キタコレ！ ちょ、同接バグってない！？',
      'voice_mc_hype_02.wav':'全部私のモノ！ ネットの話題、独占しちゃうから！',
      'voice_mc_hype_03.wav':'もっと！ もっと私を肯定してぇぇっ！',
      'voice_mc_hype_04.wav':'圧倒的感謝！ お前ら愛してるぞーっ！',
      'voice_mc_hype_05.wav':'神回！ はい今、神回ですこれ！！',
      'voice_mc_fire_01.wav':'ちょ、待って！ 荒らさないでよ！',
      'voice_mc_fire_02.wav':'やばいやばい、アンチわきすぎっ！',
      'voice_mc_fire_03.wav':'私は悪くないもん！…だよね！？',
      'voice_mc_fire_04.wav':'見捨てないで…！ まだ頑張れるからぁ！',
      'voice_mc_apology_ready_01.wav':'んっんー、よし、泣く準備おっけー。',
      'voice_mc_apology_ready_02.wav':'ここは一旦、下に出とこっか。',
      'voice_mc_apology_ready_03.wav':'伝家の宝刀、抜いちゃいますか。',
      'voice_mc_apology_fire_01.wav':'この度は、誠に申し訳ございませんでしたぁっ！（嘘泣き）',
      'voice_mc_apology_fire_02.wav':'ごめん、ごめんなさい！ だから見捨てないでぇ！',
      'voice_mc_apology_fire_03.wav':'反省してます、めっちゃ反省してますぅー！',
      'voice_mc_apology_fire_04.wav':'ぴえん！ 許して、ね？ お願いっ♡',
      'voice_mc_rush_01.wav':'私の計算通り！ さっすがー！',
      'voice_mc_rush_02.wav':'リスナーの心、完全に掌握したわ♡',
      'voice_mc_rush_03.wav':'手のひらの上ってやつ？ ふふっ。',
      'voice_mc_rush_04.wav':'はい伏線回収ー！ 私かしこすぎない？',
      'voice_mc_jack_01.wav':'え、私ニュータイプかもしれない！',
      'voice_mc_jack_02.wav':'全っ部見えてる！ 配信の神に愛されてるし！',
      'voice_mc_jack_03.wav':'怖い怖い、自分が天才すぎて怖い！',
      'voice_mc_jack_04.wav':'圧倒的神プレイ！ 褒めて褒めてー！',
      'voice_mc_big_01.wav':'っでか！！ これスパチャ飛ぶでしょ！',
      'voice_mc_big_02.wav':'はい、今日のサムネ決定！',
      'voice_mc_big_03.wav':'んぁ〜っ、最高に気持ちいいんですけどぉ！',
      'voice_mc_big_04.wav':'切り抜き師さーん！ 出番ですよーっ！',
      'voice_mc_big_05.wav':'同接（すうじ）の暴力！ 味わえーっ！',
      'voice_mc_top_01.wav':'ぎゃーっ！ 詰む詰む！ 画面やばい！',
      'voice_mc_top_02.wav':'待って待って、溢れる！ 窒息しちゃう！',
      'voice_mc_top_03.wav':'とりあえず消す！ 誰か助けてーっ！',
      'voice_mc_top_04.wav':'ああああ！ もう、なんでこうなるのぉ！？',
      'voice_mc_win_01.wav':'見たかお前ら！ これが最強の可愛さだーっ！',
      'voice_mc_win_02.wav':'世界でいっちばん、私が可愛いんだよぉぉっ！',
      'voice_mc_win_03.wav':'お前ら最高！ 一生私についてこいっ♡',
      'voice_mc_win_04.wav':'大勝利！ はぁ〜、承認欲求満たされたぁ…。',
      'voice_mc_lose_01.wav':'もう無理…病んだ。配信切るね…。',
      'voice_mc_lose_02.wav':'違うもん、今の絶対ラグだもんっ！',
      'voice_mc_lose_03.wav':'あーあ、オワコンになっちゃった…ぴえん。',
      'voice_mc_lose_04.wav':'…うっ、なんで誰も見てくれないのぉ…。'
    };

    const voiceCache = new Map();
    const sfxCache = new Map();
    const sfxPoolCursor = new Map();
    const sfxFileMap = {
      drop:'assets/audio/se_drop_soft_01.m4a',
      drop_blocked:'assets/audio/se_drop_blocked.m4a',
      clear:'assets/audio/se_clear_small_01.m4a',
      big:'assets/audio/se_clear_big_01.m4a',
      chain_2:'assets/audio/se_chain_02.m4a',
      chain_3:'assets/audio/se_chain_03.m4a',
      chain_4:'assets/audio/se_chain_04.m4a',
      chain_5:'assets/audio/se_chain_05.m4a',
      chain_6:'assets/audio/se_chain_06.m4a',
      chain_red:'assets/audio/se_chain_redsuper_fixed.m4a',
      warn:'assets/audio/se_trend_warning.m4a',
      ready:'assets/audio/se_apology_ready.m4a',
      burst:'assets/audio/se_apology_fire.m4a',
      bad:'assets/audio/se_gameover_blast.m4a',
      hazard:'assets/audio/se_hazard_spawn.m4a',
      hurry:'assets/audio/se_timer_hurry.m4a',
      ui_item_select:'assets/audio/se_ui_item_select.m4a',
      ui_start:'assets/audio/se_ui_start_stream.m4a',
      ui_open:'assets/audio/se_ui_open_panel.m4a',
      ui_back:'assets/audio/se_ui_back.m4a',
      ui_pause_open:'assets/audio/se_ui_pause_open.m4a',
      ui_pause_close:'assets/audio/se_ui_pause_close.m4a',
      ui_retry:'assets/audio/se_ui_retry.m4a',
      ui_copy:'assets/audio/se_ui_copy_result.m4a',
      bomb_clear:'assets/audio/se_bomb_clear.m4a',
      fire_start:'assets/audio/se_fire_start.m4a',
      fire_clear:'assets/audio/se_fire_clear.m4a',
      buzz_spawn:'assets/audio/se_buzz_spawn.m4a',
      buzz_clear:'assets/audio/se_buzz_clear_bigbuzz_start.m4a',
      bigbuzz_extend:'assets/audio/se_bigbuzz_extend.m4a',
      crown:'assets/audio/se_crown_takeover.m4a',
      topline:'assets/audio/se_topline_warning.m4a'
    };
    const voiceCooldowns = { default:0, calm:0, clear:0, chain:0, hype:0, warning:0, fire:0, top:0, focus:0 };
    const lastVoicePathByKind = Object.create(null);
    let lastVoiceAt = 0;
    let nextAmbientVoiceAt = 0;
    let resultStingerAudio = null;
    let bigBuzzBannerTimer = 0;
    let lastHyperBgmActive = false;
    let avatarVisualFile = 'char_normal.png';
    const avatarVariantCursor = Object.create(null);
    let pendingAvatarMood = 'normal';
    let pendingAvatarMoodSince = 0;
    let boardCharacterSwapToken = 0;
    let avatarLockUntil = 0;
    let avatarLockMood = 'normal';
    let lastBigBuzzVisualActive = false;
    let warningVoiceLatched = false;
    let topVoiceLatched = false;
    let trendWarningSfxLatched = false;
    let topWarningSfxLatched = false;
    let hurrySfxLatched = false;
    let helpReadySfxLatched = false;
    let fireClearCueLatched = false;
    let lastClearLikeSfxAt = 0;
    let trendShiftSfxTimer = 0;
    let focusVoiceCooldownUntil = 0;
    let calmVoiceCooldownUntil = 0;
    let startupVoiceLockUntil = 0;

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
      chainCount:0,
      peakChain:0,
      chainDecay:0,
      currentChainDropSerial:-1,
      dropSerial:0,
      trendIndex:0,
      nextTrendIndex:1,
      futureTrendIndex:2,
      upcomingTrendQueue:[],
      trendTimer:15,
      trendTotalTime:15,
      trendWarning:false,
      idle:0,
      scanTimer:0,
      commentTimer:0,
      fireCooldown:0,
      fireMode:0,
      fireClearCount:0,
      hazardTimer:0,
      buzzItemTimer:0,
      showCaptionTimer:0,
      queue:[0,0,0],
      selectedDropIndex:0,
      pendingTrendClear:null,
      commentEventType:'',
      commentEventTimer:0,
      commentEventText:'',
      particles:[],
      rings:[],
      previewGroups:[],
      nextPreviewGroups:[],
      previewBodyLens:new Map(),
      nextPreviewBodyLens:new Map(),
      previewBodyIds:[],
      nextPreviewBodyIds:[],
      previewPeakLen:0,
      nextPreviewPeakLen:0,
      previewVisualsDirty:false,
      lastTs:0,
      lastFrameTs:0,
      lastLogicTs:0,
      physicsAccumulator:0,
      fixedDeltaMs:1000 / 36,
      maxPhysicsSteps:2,
      topDangerTime:0,
      overfillTime:0,
      moodTimer:0,
      currentLine:'今日はたくさん点を取りたい。',
      ambientMoodLine:'今日はたくさん点を取りたい。',
      ambientMoodTimer:0,
      resultVoicePlayed:false,
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
      waveLinkHits:0,
      crownClutchHits:0,
      setupCarryLen:0,
      streamTime:100,
      streamTotal:100,
      finalSpurt:false,
      visualTimer:0,
      uiTimer:0,
      cleanupTimer:0,
      rescueTimer:0,
      freezeTimer:0,
      boardStatsCache:null,
      boardStatsCacheAt:0,
      boardStatsRevision:0,
      boardStatsCacheRevision:-1,
      worldBodiesCache:null,
      worldBodiesCacheStamp:-1,
      worldSpatialHashCache:null,
      worldSpatialHashCacheStamp:-1,
      frozenSpatialHashCache:null,
      frozenSpatialHashCacheStamp:-1,
      frozenSpatialHashRevision:0,
      frameStamp:0,
      boardRectCache:null,
      boardMetricsCache:null,
      boardLayoutDirty:true,
      boardRectCacheFrame:-1,
      boardRectCacheMeasuredAt:0,
      visualHotBodies:[],
      visualGlowSet:null,
      lastCollisionActiveRememberAt:0,
      lastThawNearActiveAt:0,
      liveBodies:[],
      liveBodyMap:new Map(),
      liveBodyIds:new Set(),
      liveBodiesByType:{ content:[], hazard:[], fire:[], buzz:[] },
      liveContentBodiesByIndex:Array.from({ length:CONTENTS.length }, () => []),
      activeBodies:[],
      activeBodyIds:new Set(),
      activeMovingCount:0,
      visualHotBodiesCount:0,
      fastMovingBodiesCount:0,
      frozenBodyCount:0,
      touchGroupVisitStamp:0,
      touchGroupSourceStamp:0,
      touchGroupQueueStamp:0,
      visualQueueStamp:0,
      repairQueueIds:new Set(),
      groupScanDirtyIds:new Set(),
      lastFullGroupScanAt:0,
      visualDirtyIds:new Set(),
      forceFullVisualSync:true,
      visualPreviewIds:[],
      visualNextPreviewIds:[],
      visualGlowIds:[],
      visualTrendIndex:-1,
      visualNextTrendIndex:-1,
      lastVoiceText:'',
      voiceSubtitleTimer:0,
      speechBubbleText:'',
      speechBubbleTimer:0,
      avatarMood:'normal',
      avatarVisualMood:'normal',
      shiftGlowIds:[],
      shiftGlowTimer:0,
      finishing:false,
      lastClearAt:0,
      lastContentClearAt:0,
      chainSuppressUntil:0,
      fxNeedsClear:false,
      fxLogicalWidth:0,
      fxLogicalHeight:0,
      backgroundWatchdogTimer:0,
      lastFullRescueSweepAt:0,
      lastFullOverlapSweepAt:0,
      liveRegistryRevision:0,
      groupSourceCache:new Map(),
      groupSourceCacheFrame:-1,
      groupSourceCacheRevision:-1,
      heavySweepCacheFrame:-1,
      heavySweepCacheRevision:-1,
      heavySweepCandidatesFull:null,
      heavySweepCandidatesPartial:null,
      mediaProfileApplied:false,
      paused:false
    };

    function resetChainState() {
      state.chainCount = 0;
      state.chainDecay = 0;
      state.currentChainDropSerial = -1;
    }

    function createLiveTypeBuckets() {
      return { content:[], hazard:[], fire:[], buzz:[] };
    }

    function createLiveIndexBuckets() {
      return Array.from({ length:CONTENTS.length }, () => []);
    }

    function resetLiveBodyRegistry() {
      state.liveBodies = [];
      state.liveBodyMap = new Map();
      state.liveBodyIds = new Set();
      state.liveBodiesByType = createLiveTypeBuckets();
      state.liveContentBodiesByIndex = createLiveIndexBuckets();
      state.activeBodies = [];
      state.activeBodyIds = new Set();
      state.activeMovingCount = 0;
      state.visualHotBodies = [];
      state.visualHotBodiesCount = 0;
      state.fastMovingBodiesCount = 0;
      state.frozenBodyCount = 0;
      state.touchGroupVisitStamp = 0;
      state.touchGroupSourceStamp = 0;
      state.touchGroupQueueStamp = 0;
      state.visualQueueStamp = 0;
      state.repairQueueIds = new Set();
      state.groupScanDirtyIds = new Set();
      state.lastFullGroupScanAt = 0;
      state.visualDirtyIds = new Set();
      state.forceFullVisualSync = true;
      state.lastFullRescueSweepAt = 0;
      state.lastFullOverlapSweepAt = 0;
      state.liveRegistryRevision = 0;
      invalidateGroupSourceCache();
      state.heavySweepCacheFrame = -1;
      state.heavySweepCacheRevision = -1;
      state.heavySweepCandidatesFull = null;
      state.heavySweepCandidatesPartial = null;
      state.visualPreviewIds = [];
      state.visualNextPreviewIds = [];
      state.visualGlowIds = [];
      state.visualGlowSet = null;
      state.visualTrendIndex = -1;
      state.visualNextTrendIndex = -1;
      state.previewGroups = [];
      state.nextPreviewGroups = [];
      state.lastCollisionActiveRememberAt = 0;
      state.lastThawNearActiveAt = 0;
      if (!(state.previewBodyLens instanceof Map)) state.previewBodyLens = new Map();
      if (!(state.nextPreviewBodyLens instanceof Map)) state.nextPreviewBodyLens = new Map();
      state.previewBodyLens.clear();
      state.nextPreviewBodyLens.clear();
      state.previewBodyIds = [];
      state.nextPreviewBodyIds = [];
      state.previewPeakLen = 0;
      state.nextPreviewPeakLen = 0;
      state.previewVisualsDirty = false;
      pendingClearVisualIds = [];
      invalidateWorldBodiesCache();
      invalidateBoardStatsCache();
      invalidateWorldSpatialHashCache();
      invalidateFrozenSpatialHashCache(true);
    }


function markGroupScanDirty(bodyOrId) {
  const id = typeof bodyOrId === 'object' ? bodyOrId?.id : bodyOrId;
  if (id == null) return;
  if (!(state.groupScanDirtyIds instanceof Set)) state.groupScanDirtyIds = new Set();
  state.groupScanDirtyIds.add(id);
}

function queueBodyRepair(bodyOrId) {
  const id = typeof bodyOrId === 'object' ? bodyOrId?.id : bodyOrId;
  if (id == null) return;
  if (!(state.repairQueueIds instanceof Set)) state.repairQueueIds = new Set();
  state.repairQueueIds.add(id);
  markBodyVisualDirty(id);
  markGroupScanDirty(id);
}

function requestHighPrecisionPhysics(durationMs = 420) {
  const until = performance.now() + Math.max(120, durationMs || 0);
  state.physicsHighPrecisionUntil = Math.max(state.physicsHighPrecisionUntil || 0, until);
}

function needsHighPrecisionPhysics(now = performance.now()) {
  if ((state.physicsHighPrecisionUntil || 0) > now) return true;
  const activeBodies = getActiveBodies();
  for (let i = 0; i < activeBodies.length; i += 1) {
    const body = activeBodies[i];
    if (!body || body.plugin?.pendingRemoval) continue;
    const recentSpawn = body.spawnAt && now - body.spawnAt < 720;
    const flagged = body.plugin?.highPrecisionUntil && body.plugin.highPrecisionUntil > now;
    const fast = body.speed > 2.25
      || Math.abs(body.velocity?.x || 0) > 2.0
      || Math.abs(body.velocity?.y || 0) > 2.3
      || Math.abs(body.angularVelocity || 0) > 0.18;
    if (recentSpawn || flagged || fast) return true;
  }
  return false;
}

function applyPhysicsQuality(highPrecision = false) {
  if (!engine) return;
  engine.positionIterations = highPrecision ? 4 : 2;
  engine.velocityIterations = highPrecision ? 2 : 1;
  engine.constraintIterations = 1;
}

function isFrozenBody(body) {
  return !!(body?.plugin?.frozen);
}

function thawBody(body, now = performance.now(), opts = {}) {
  if (!body || !isFrozenBody(body) || body.plugin?.pendingRemoval) return false;
  body.plugin = body.plugin || {};
  body.plugin.frozen = false;
  body.plugin.frozenAt = 0;
  state.frozenBodyCount = Math.max(0, (state.frozenBodyCount || 0) - 1);
  bumpFrozenSpatialHashRevision();
  body.plugin.restStartAt = now;
  body.plugin.lastActiveAt = now;
  body.plugin.lastMotionAt = now;
  Body.setStatic(body, false);
  Sleeping.set(body, false);
  const nextVelocity = {
    x: clamp(Number.isFinite(opts.vx) ? opts.vx : (body.velocity?.x || 0), -2.6, 2.6),
    y: clamp(Number.isFinite(opts.vy) ? opts.vy : Math.max(0.06, body.velocity?.y || 0.06), -0.24, 3.6)
  };
  Body.setVelocity(body, nextVelocity);
  if (Number.isFinite(opts.angularVelocity)) Body.setAngularVelocity(body, clamp(opts.angularVelocity, -0.24, 0.24));
  body.floatStartAt = 0;
  body.plugin.highPrecisionUntil = Math.max(body.plugin.highPrecisionUntil || 0, now + 320);
  requestHighPrecisionPhysics(320);
  markBodyVisualDirty(body);
  markGroupScanDirty(body);
  return true;
}

function freezeBody(body, now = performance.now()) {
  if (!body || body.plugin?.pendingRemoval || body.gameType === 'wall' || body.isStatic || isFrozenBody(body)) return false;
  body.plugin = body.plugin || {};
  Body.setVelocity(body, { x:0, y:0 });
  Body.setAngularVelocity(body, 0);
  Body.setStatic(body, true);
  Sleeping.set(body, true);
  body.plugin.frozen = true;
  state.frozenBodyCount = (state.frozenBodyCount || 0) + 1;
  bumpFrozenSpatialHashRevision();
  body.plugin.frozenAt = now;
  body.plugin.restStartAt = now;
  body.plugin.lastActiveAt = now;
  markBodyVisualDirty(body);
  return true;
}

function bodyHasSupportBelow(body, hash, boardH = 0, slack = 16) {
  if (!body) return false;
  const radius = body.circleRadius || 0;
  if (!radius) return false;
  if (boardH > 0 && body.position.y >= boardH - radius - 6) return true;
  let hasSupportBelow = false;
  visitNearbyFromHash(hash, body, 1, other => {
    if (!other || other.id === body.id || other.plugin?.pendingRemoval) return false;
    const dx = Math.abs(other.position.x - body.position.x);
    const dy = other.position.y - body.position.y;
    const supportDx = radius + (other.circleRadius || 0) - 6;
    if (dx > supportDx || dy < 0) return false;
    if (dy <= radius + (other.circleRadius || 0) + slack) {
      hasSupportBelow = true;
      return true;
    }
    return false;
  });
  return hasSupportBelow;
}

function thawFrozenCluster(seedBody, frozenHash, now = performance.now(), seedVelocityY = 0.08) {
  if (!seedBody || !isFrozenBody(seedBody)) return 0;
  const clusterStamp = (state.touchGroupSourceStamp || 0) + 1;
  state.touchGroupSourceStamp = clusterStamp;
  const stack = [seedBody];
  let count = 0;
  seedBody.plugin = seedBody.plugin || {};
  seedBody.plugin._frozenClusterStamp = clusterStamp;
  while (stack.length) {
    const current = stack.pop();
    if (!current || !isFrozenBody(current)) continue;
    if (thawBody(current, now, { vy:Math.max(0.08, seedVelocityY) })) count += 1;
    visitNearbyFromHash(frozenHash, current, 1, other => {
      if (!other || !isFrozenBody(other)) return false;
      other.plugin = other.plugin || {};
      if (other.plugin._frozenClusterStamp === clusterStamp) return false;
      const dx = other.position.x - current.position.x;
      const dy = other.position.y - current.position.y;
      const reach = (current.circleRadius || 0) + (other.circleRadius || 0) + 6;
      if (dx * dx + dy * dy > reach * reach) return false;
      other.plugin._frozenClusterStamp = clusterStamp;
      stack.push(other);
      return false;
    });
  }
  return count;
}

function thawFrozenBodiesNearActive(now = performance.now()) {
  if ((state.frozenBodyCount || 0) <= 0 || (state.activeMovingCount || 0) <= 0) return 0;
  const activeBodies = getActiveBodies();
  if (!activeBodies.length) return 0;
  scratchActiveBodies.length = 0;
  for (let i = 0; i < activeBodies.length; i += 1) {
    const body = activeBodies[i];
    if (!body || body.plugin?.pendingRemoval || isFrozenBody(body)) continue;
    const moving = !body.isSleeping
      || body.speed > 0.12
      || Math.abs(body.velocity?.x || 0) > 0.1
      || Math.abs(body.velocity?.y || 0) > 0.14
      || Math.abs(body.angularVelocity || 0) > 0.05;
    const age = now - (body.spawnAt || 0);
    if (!moving && age > 760) continue;
    scratchActiveBodies.push(body);
  }
  if (!scratchActiveBodies.length) return 0;
  const hash = frozenSpatialHash();
  if (!hash) return 0;
  let thawed = 0;
  for (let i = 0; i < scratchActiveBodies.length; i += 1) {
    const body = scratchActiveBodies[i];
    const wakePad = (perfSettings.freezeWakePad || 16) + Math.min(22, Math.max(Math.abs(body.velocity?.x || 0), Math.abs(body.velocity?.y || 0)) * 2.4);
    visitNearbyFromHash(hash, body, 1, frozen => {
      if (!frozen || !isFrozenBody(frozen)) return false;
      const dx = frozen.position.x - body.position.x;
      const dy = frozen.position.y - body.position.y;
      const reach = (body.circleRadius || 0) + (frozen.circleRadius || 0) + wakePad;
      if (dx * dx + dy * dy > reach * reach) return false;
      thawed += thawFrozenCluster(frozen, hash, now, body.velocity?.y || 0.1);
      return false;
    });
  }
  return thawed;
}

function freezeRestedBodies(now = performance.now()) {
  if (!engine || !dom.board) return 0;
  const bodies = worldBodies();
  if (!bodies.length) return 0;
  const boardH = boardLogicalRect().height || 0;
  const hash = worldSpatialHash();
  if (!hash) return 0;
  let frozenCount = 0;
  for (let i = 0; i < bodies.length; i += 1) {
    const body = bodies[i];
    if (!body || body.plugin?.pendingRemoval) continue;
    const age = now - (body.spawnAt || 0);
    if (age < 460) continue;
    body.plugin = body.plugin || {};
    const moving = !body.isSleeping
      || body.speed > (perfSettings.freezeLinearThreshold || 0.03)
      || Math.abs(body.velocity?.x || 0) > (perfSettings.freezeLinearThreshold || 0.03)
      || Math.abs(body.velocity?.y || 0) > (perfSettings.freezeLinearThreshold || 0.03)
      || Math.abs(body.angularVelocity || 0) > (perfSettings.freezeAngularThreshold || 0.02);
    if (moving) {
      body.plugin.restStartAt = 0;
      body.plugin.lastMotionAt = now;
      if (isFrozenBody(body)) thawBody(body, now, { vy:Math.max(0.06, body.velocity?.y || 0.06) });
      continue;
    }
    if (isFrozenBody(body)) continue;
    if (!bodyHasSupportBelow(body, hash, boardH, 18)) continue;
    if (!body.plugin.restStartAt) body.plugin.restStartAt = now;
    const settledFor = now - body.plugin.restStartAt;
    if (settledFor < (perfSettings.freezeSettleMs || 980)) continue;
    if (freezeBody(body, now)) frozenCount += 1;
  }
  return frozenCount;
}

function stabilizeActiveBodies(now = performance.now()) {
  const activeBodies = getActiveBodies();
  const boardInfo = boardLogicalRect();
  const boardW = boardInfo.width;
  const boardH = boardInfo.height;
  for (let i = 0; i < activeBodies.length; i += 1) {
    const body = activeBodies[i];
    if (!body || body.plugin?.pendingRemoval) continue;
    const vx = body.velocity?.x || 0;
    const vy = body.velocity?.y || 0;
    const av = body.angularVelocity || 0;
    const maxVx = 10.5;
    const maxVy = 13.5;
    const maxAv = 0.48;
    if (Math.abs(vx) > maxVx || Math.abs(vy) > maxVy) {
      Body.setVelocity(body, {
        x: clamp(vx, -maxVx, maxVx),
        y: clamp(vy, -maxVy, maxVy)
      });
      body.plugin = body.plugin || {};
      body.plugin.lastActiveAt = now;
    }
    if (Math.abs(av) > maxAv) {
      Body.setAngularVelocity(body, clamp(av, -maxAv, maxAv));
      body.plugin = body.plugin || {};
      body.plugin.lastActiveAt = now;
    }
    if (!Number.isFinite(body.position?.x) || !Number.isFinite(body.position?.y)) queueBodyRepair(body);
    else if (body.position.x < -96 || body.position.x > boardW + 96 || body.position.y > boardH + 180) queueBodyRepair(body);
  }
}

function refreshActiveBodies(now = performance.now()) {
  const nextBodies = Array.isArray(state.activeBodies) ? state.activeBodies : [];
  const nextIds = state.activeBodyIds instanceof Set ? state.activeBodyIds : new Set();
  const nextVisualHotBodies = Array.isArray(state.visualHotBodies) ? state.visualHotBodies : [];
  nextBodies.length = 0;
  nextIds.clear();
  nextVisualHotBodies.length = 0;
  const liveBodies = state.liveBodies || [];
  const activeWindowMs = liveBodies.length >= 36 ? 180 : (liveBodies.length >= 26 ? 220 : 320);
  let movingCount = 0;
  let visualHotBodiesCount = 0;
  let fastMovingBodiesCount = 0;
  for (let i = 0; i < liveBodies.length; i += 1) {
    const body = liveBodies[i];
    if (!body || body.plugin?.pendingRemoval) continue;
    body.plugin = body.plugin || {};
    const vx = Math.abs(body.velocity?.x || 0);
    const vy = Math.abs(body.velocity?.y || 0);
    const av = Math.abs(body.angularVelocity || 0);
    const moving = !body.isSleeping
      || (body.speed || 0) > 0.04
      || vx > 0.04
      || vy > 0.04
      || av > 0.02;
    if (moving) {
      movingCount += 1;
      body.plugin.lastActiveAt = now;
      body.plugin.lastMotionAt = now;
      body.plugin.restStartAt = 0;
      if (isFrozenBody(body)) thawBody(body, now, { vy:Math.max(0.06, body.velocity?.y || 0.06) });
      if ((body.speed || 0) > 0.18 || vy > 0.16 || vx > 0.12) fastMovingBodiesCount += 1;
    }
    const recentlyActive = moving || (body.plugin.lastActiveAt && now - body.plugin.lastActiveAt < activeWindowMs);
    if (!recentlyActive) continue;
    nextBodies.push(body);
    nextIds.add(body.id);
    const age = now - (body.spawnAt || 0);
    if (age < perfSettings.newBodyVisualMs || moving || body.outOfRangeSince || body.floatStartAt) {
      visualHotBodiesCount += 1;
      nextVisualHotBodies.push(body);
    }
  }
  state.activeBodies = nextBodies;
  state.activeBodyIds = nextIds;
  state.visualHotBodies = nextVisualHotBodies;
  state.activeMovingCount = movingCount;
  state.visualHotBodiesCount = visualHotBodiesCount;
  state.fastMovingBodiesCount = fastMovingBodiesCount;
  return nextBodies;
}

function getActiveBodies() {
  return state.activeBodies || [];
}

function collectRepairCandidates() {
  scratchFullSweepBodies.length = 0;
  const stamp = (state.touchGroupQueueStamp || 0) + 1;
  state.touchGroupQueueStamp = stamp;
  const activeBodies = getActiveBodies();
  for (let i = 0; i < activeBodies.length; i += 1) {
    const body = activeBodies[i];
    if (!body || body.plugin?.pendingRemoval) continue;
    body.plugin = body.plugin || {};
    if (body.plugin._repairSweepStamp === stamp) continue;
    body.plugin._repairSweepStamp = stamp;
    scratchFullSweepBodies.push(body);
  }
  state.repairQueueIds?.forEach(id => {
    const body = bodyById(id);
    if (!body || body.plugin?.pendingRemoval) return;
    body.plugin = body.plugin || {};
    if (body.plugin._repairSweepStamp === stamp) return;
    body.plugin._repairSweepStamp = stamp;
    scratchFullSweepBodies.push(body);
  });
  state.groupScanDirtyIds?.forEach(id => {
    const body = bodyById(id);
    if (!body || body.plugin?.pendingRemoval) return;
    body.plugin = body.plugin || {};
    if (body.plugin._repairSweepStamp === stamp) return;
    body.plugin._repairSweepStamp = stamp;
    scratchFullSweepBodies.push(body);
  });
  return scratchFullSweepBodies;
}

function collectHeavySweepCandidates(fullSweep = false) {
  const bodies = worldBodies();
  if (fullSweep) return bodies;
  const candidates = collectRepairCandidates();
  const stamp = state.touchGroupQueueStamp;
  for (let i = 0; i < bodies.length; i += 1) {
    const body = bodies[i];
    if (!body || body.plugin?.pendingRemoval) continue;
    if (!body.floatStartAt && !body.outOfRangeSince && !body.plugin?.pendingClear) continue;
    body.plugin = body.plugin || {};
    if (body.plugin._repairSweepStamp === stamp) continue;
    body.plugin._repairSweepStamp = stamp;
    candidates.push(body);
  }
  return candidates;
}

function getHeavySweepCandidatesCached(fullSweep = false) {
  const frameStamp = state.frameStamp || 0;
  const revision = state.liveRegistryRevision || 0;
  if (state.heavySweepCacheFrame !== frameStamp || state.heavySweepCacheRevision !== revision) {
    state.heavySweepCacheFrame = frameStamp;
    state.heavySweepCacheRevision = revision;
    state.heavySweepCandidatesFull = null;
    state.heavySweepCandidatesPartial = null;
  }
  if (fullSweep) {
    if (!state.heavySweepCandidatesFull) state.heavySweepCandidatesFull = collectHeavySweepCandidates(true);
    return state.heavySweepCandidatesFull;
  }
  if (!state.heavySweepCandidatesPartial) state.heavySweepCandidatesPartial = collectHeavySweepCandidates(false);
  return state.heavySweepCandidatesPartial;
}

    function markBodyVisualDirty(bodyOrId) {
      const id = typeof bodyOrId === 'object' ? bodyOrId?.id : bodyOrId;
      if (id == null) return;
      if (!(state.visualDirtyIds instanceof Set)) state.visualDirtyIds = new Set();
      state.visualDirtyIds.add(id);
    }

    function markBodiesVisualDirty(list) {
      if (!list) return;
      for (const body of list) markBodyVisualDirty(body);
    }

    function arraysEqualShallow(a = EMPTY_ID_ARRAY, b = EMPTY_ID_ARRAY) {
      if (a === b) return true;
      const aLen = a?.length || 0;
      if (aLen !== (b?.length || 0)) return false;
      for (let i = 0; i < aLen; i += 1) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }

    function buildPreviewSummary(groups, minLen = 2, lensMap = new Map()) {
      lensMap.clear();
      const summary = [];
      let peakLen = 0;
      for (let i = 0; i < groups.length; i += 1) {
        const group = groups[i];
        const len = group?.length || 0;
        if (len < minLen) continue;
        const ids = new Array(len);
        for (let j = 0; j < len; j += 1) {
          const id = group[j].id;
          ids[j] = id;
          const prevLen = lensMap.get(id) || 0;
          if (len > prevLen) lensMap.set(id, len);
        }
        summary.push({ ids, len });
        if (len > peakLen) peakLen = len;
      }
      return { summary, ids:[...lensMap.keys()], peakLen };
    }

    function applyPreviewState(previewGroups = EMPTY_ID_ARRAY, nextGroups = EMPTY_ID_ARRAY) {
      if (!(state.previewBodyLens instanceof Map)) state.previewBodyLens = new Map();
      if (!(state.nextPreviewBodyLens instanceof Map)) state.nextPreviewBodyLens = new Map();
      const previewSummary = buildPreviewSummary(previewGroups, 2, state.previewBodyLens);
      const nextSummary = buildPreviewSummary(nextGroups, 2, state.nextPreviewBodyLens);
      state.previewGroups = previewSummary.summary;
      state.nextPreviewGroups = nextSummary.summary;
      state.previewBodyIds = previewSummary.ids;
      state.nextPreviewBodyIds = nextSummary.ids;
      state.previewPeakLen = previewSummary.peakLen;
      state.nextPreviewPeakLen = nextSummary.peakLen;
      state.previewVisualsDirty = !arraysEqualShallow(state.visualPreviewIds || EMPTY_ID_ARRAY, state.previewBodyIds)
        || !arraysEqualShallow(state.visualNextPreviewIds || EMPTY_ID_ARRAY, state.nextPreviewBodyIds);
    }

    function bodyById(id) {
      return state.liveBodyMap?.get(id) || null;
    }

    function worldBodiesByType(gameType) {
      return state.liveBodiesByType?.[gameType] || [];
    }

    function worldContentBodiesByIndex(index) {
      return state.liveContentBodiesByIndex?.[index] || [];
    }

    function liveRegistryPush(arr, body, key) {
      const idx = arr.length;
      arr.push(body);
      body.plugin._liveRefs[key] = idx;
    }

    function liveRegistrySwapRemove(arr, idx, key) {
      if (!Array.isArray(arr) || idx == null || idx < 0 || idx >= arr.length) return;
      const lastIndex = arr.length - 1;
      const moved = arr[lastIndex];
      if (idx !== lastIndex) {
        arr[idx] = moved;
        if (moved?.plugin?._liveRefs) moved.plugin._liveRefs[key] = idx;
      }
      arr.pop();
    }

    function removeBodyFromArrayById(arr, bodyId) {
      if (!Array.isArray(arr) || bodyId == null) return;
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i]?.id !== bodyId) continue;
        const lastIndex = arr.length - 1;
        if (i !== lastIndex) arr[i] = arr[lastIndex];
        arr.pop();
        return;
      }
    }

function registerLiveBody(body) {
      if (!body || body.isStatic) return body;
      body.plugin = body.plugin || {};
      if (body.plugin._liveRegistered) {
        markBodyVisualDirty(body);
        markGroupScanDirty(body);
        return body;
      }
      body.plugin._liveRegistered = true;
      body.plugin._liveRefs = {};
      body.plugin._liveType = body.gameType;
      body.plugin._liveContentIndex = Number.isInteger(body.contentIndex) ? body.contentIndex : null;
      body.plugin.lastActiveAt = performance.now();
      state.liveBodyIds.add(body.id);
      state.liveBodyMap.set(body.id, body);
      liveRegistryPush(state.liveBodies, body, 'all');
      const typeBucket = state.liveBodiesByType?.[body.plugin._liveType];
      if (typeBucket) liveRegistryPush(typeBucket, body, 'type');
      if (body.plugin._liveType === 'content' && Number.isInteger(body.plugin._liveContentIndex)) {
        const indexBucket = state.liveContentBodiesByIndex?.[body.plugin._liveContentIndex];
        if (indexBucket) liveRegistryPush(indexBucket, body, 'contentIndex');
      }
      state.activeBodyIds?.add(body.id);
      state.activeBodies?.push(body);
      if (body.plugin.frozen) {
        state.frozenBodyCount = (state.frozenBodyCount || 0) + 1;
        bumpFrozenSpatialHashRevision();
      }
      bumpLiveRegistryRevision();
      invalidateWorldBodiesCache();
      markBodyVisualDirty(body);
      markGroupScanDirty(body);
      return body;
    }


    
function unregisterLiveBody(body) {
      if (!body?.plugin?._liveRegistered) return;
      const refs = body.plugin._liveRefs || {};
      if (body.plugin?.frozen) {
        body.plugin.frozen = false;
        body.plugin.frozenAt = 0;
        state.frozenBodyCount = Math.max(0, (state.frozenBodyCount || 0) - 1);
        bumpFrozenSpatialHashRevision();
      }
      const liveType = body.plugin._liveType ?? body.gameType;
      const liveContentIndex = Number.isInteger(body.plugin._liveContentIndex) ? body.plugin._liveContentIndex : body.contentIndex;
      liveRegistrySwapRemove(state.liveBodies, refs.all, 'all');
      const typeBucket = state.liveBodiesByType?.[liveType];
      if (typeBucket) liveRegistrySwapRemove(typeBucket, refs.type, 'type');
      if (liveType === 'content' && Number.isInteger(liveContentIndex)) {
        const indexBucket = state.liveContentBodiesByIndex?.[liveContentIndex];
        if (indexBucket) liveRegistrySwapRemove(indexBucket, refs.contentIndex, 'contentIndex');
      }
      state.liveBodyIds.delete(body.id);
      state.liveBodyMap.delete(body.id);
      state.activeBodyIds?.delete(body.id);
      if (Array.isArray(state.activeBodies)) removeBodyFromArrayById(state.activeBodies, body.id);
      state.visualDirtyIds?.delete(body.id);
      state.groupScanDirtyIds?.delete(body.id);
      state.repairQueueIds?.delete(body.id);
      body.plugin._liveRegistered = false;
      body.plugin._liveRefs = null;
      body.plugin._liveType = null;
      body.plugin._liveContentIndex = null;
      bumpLiveRegistryRevision();
      invalidateWorldBodiesCache();
    }


    function markBodyIdsVisualDirty(ids = EMPTY_ID_ARRAY) {
      for (let i = 0; i < (ids?.length || 0); i += 1) {
        const body = bodyById(ids[i]);
        if (body) markBodyVisualDirty(body);
      }
    }

    function updateVisualDirtyContext(previewIds = EMPTY_ID_ARRAY, nextPreviewIds = EMPTY_ID_ARRAY, glowIds = EMPTY_ID_ARRAY) {
      const currentTrendIndex = Number.isInteger(state.trendIndex) ? state.trendIndex : -1;
      const currentNextTrendIndex = Number.isInteger(state.nextTrendIndex) ? state.nextTrendIndex : -1;
      if (state.visualTrendIndex !== currentTrendIndex) {
        if (state.visualTrendIndex >= 0) markBodiesVisualDirty(worldContentBodiesByIndex(state.visualTrendIndex));
        if (currentTrendIndex >= 0) markBodiesVisualDirty(worldContentBodiesByIndex(currentTrendIndex));
        state.visualTrendIndex = currentTrendIndex;
      }
      if (state.visualNextTrendIndex !== currentNextTrendIndex) {
        if (state.visualNextTrendIndex >= 0) markBodiesVisualDirty(worldContentBodiesByIndex(state.visualNextTrendIndex));
        if (currentNextTrendIndex >= 0) markBodiesVisualDirty(worldContentBodiesByIndex(currentNextTrendIndex));
        state.visualNextTrendIndex = currentNextTrendIndex;
      }
      const prevPreviewIds = state.visualPreviewIds || EMPTY_ID_ARRAY;
      const prevNextPreviewIds = state.visualNextPreviewIds || EMPTY_ID_ARRAY;
      const prevGlowIds = state.visualGlowIds || EMPTY_ID_ARRAY;
      if (!arraysEqualShallow(prevPreviewIds, previewIds)) {
        markBodyIdsVisualDirty(prevPreviewIds);
        markBodyIdsVisualDirty(previewIds);
        state.visualPreviewIds = previewIds.slice();
      }
      if (!arraysEqualShallow(prevNextPreviewIds, nextPreviewIds)) {
        markBodyIdsVisualDirty(prevNextPreviewIds);
        markBodyIdsVisualDirty(nextPreviewIds);
        state.visualNextPreviewIds = nextPreviewIds.slice();
      }
      if (!arraysEqualShallow(prevGlowIds, glowIds)) {
        markBodyIdsVisualDirty(prevGlowIds);
        markBodyIdsVisualDirty(glowIds);
        state.visualGlowIds = glowIds.slice();
        state.visualGlowSet = glowIds.length ? new Set(glowIds) : null;
      } else if (!state.visualGlowSet && glowIds.length) {
        state.visualGlowSet = new Set(glowIds);
      }
      state.previewVisualsDirty = false;
    }

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
    function getBoardMetrics() {
      if (!state.boardMetricsCache) refreshBoardLayoutCache(true);
      return state.boardMetricsCache || { fullLineY:26, dangerLineY:60, sideInset:6, spawnInset:10 };
    }
    function playerName() {
      const raw = (dom.handleInput?.value || save.playerName || 'ななしさん').trim();
      return (raw || 'ななしさん').slice(0, 14);
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
    function dailyCrownLine(seed = state.seed) {
      const num = Number(seed) || 0;
      const rng = mulberry32(num ^ 0x41c6ce57);
      const base = 28000 + Math.floor(rng() * 2400);
      const swing = Math.floor(rng() * 2600) + Math.floor(rng() * 2600) + Math.floor(rng() * 1800);
      return Math.round((base + swing) / 100) * 100;
    }
    function crownTargetScore(seed = state.seed) {
      return Math.max(topDailyScore(seed), dailyCrownLine(seed));
    }
    function crownTargetName(seed = state.seed) {
      const dailyTop = topDailyScore(seed);
      if (dailyTop >= dailyCrownLine(seed) && topDailyName(seed)) return topDailyName(seed);
      return '王冠ライン';
    }
    function renderDailyBoard(target) {
      if (!target) return;
      const rows = getDailyRanking().slice(0, 4);
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
      rows.push({ name: playerName(), score: Math.floor(score), combo: state.peakCombo, clip: state.clipActivations, rush: state.rushHits, wave: state.waveLinkHits, at: Date.now() });
      rows.sort((a, b) => b.score - a.score || b.combo - a.combo || (b.wave || 0) - (a.wave || 0) || (b.rush || 0) - (a.rush || 0) || b.clip - a.clip || a.at - b.at);
      save.dailyRankings[seed] = rows.slice(0, 5);
      persistSave();
      return save.dailyRankings[seed].findIndex(r => r.at === rows.find(x => x.at === r.at)?.at);
    }
    const CONTENT_BASE_WEIGHTS = [14, 14, 14, 14, 14, 14, 14];
    const CONTENT_SCORE_VALUES = [280, 330, 390, 460, 560, 700, 880];

    const BOARD_BODY_ITEM_SCALE = 1.3248;
    const UNIFIED_BODY_RADIUS = Math.round(31 * BOARD_BODY_ITEM_SCALE);
    
const PERF_PRESET_DEFAULT = Object.freeze({
      physicsFps:36,
      runnerMaxUpdates:2,
      logicFrameMs:30,
      scanInterval:0.82,
      visualInterval:1 / 28,
      uiInterval:0.84,
      cleanupInterval:2.05,
      rescueInterval:0.72,
      freezeCheckInterval:0.42,
      freezeSettleMs:980,
      freezeLinearThreshold:0.028,
      freezeAngularThreshold:0.018,
      freezeWakePad:16,
      boardStatsCacheMs:2200,
      particleBudget:6,
      particleScale:0.18,
      particleFadeRate:2.05,
      particleLife:0.64,
      particleSizeScale:0.84,
      ringBudget:5,
      minorRingThreshold:40,
      majorRingThreshold:150,
      popTextMax:3,
      popTextMinGapMs:90,
      popTextScale:0.9,
      commentCooldownScale:1.46,
      commentIntervalScale:1.9,
      commentDropChance:0.12,
      commentLaneMax:2,
      specialCommentLaneMax:2,
      superchatMinGapMs:1200,
      videoPreload:'metadata',
      fxResolutionScale:0.36,
      transformPositionThreshold:1.05,
      transformAngleThreshold:0.08,
      motionThreshold:0.12,
      motionAngularThreshold:0.06,
      newBodyVisualMs:260,
      backgroundWatchdogInterval:2.8,
      bgmNormalVolume:0.24,
      bgmHyperVolume:0.28
    });
    let perfSettings = { ...PERF_PRESET_DEFAULT };
    let titleBackgroundActive = true;
    let lastBackgroundMode = 'boot';
    let viewportResizeTimer = 0;
    let appHeightRaf = 0;
    let lastViewportWidth = 0;
    let lastViewportHeight = 0;
    let activePopTextCount = 0;
    let lastPopTextAt = 0;
    let lastSuperchatBannerAt = 0;
    let lastSuperchatTier = 0;
    let pauseRequestedByVisibility = false;
    let mediaPrimeDone = false;

    function detectPerformanceProfile() {
      return { ...PERF_PRESET_DEFAULT };
    }

    function allManagedAudioElements() {
      return [dom.bgmNormal, dom.bgmHyper, dom.resultBgmWin, dom.resultBgmLose, dom.audioMerge, dom.voiceStart, dom.voiceFire, dom.voiceWin, dom.voiceLose].filter(Boolean);
    }

    function gameplayBgmElements() {
      return [dom.bgmNormal, dom.bgmHyper].filter(Boolean);
    }

    function resultBgmElement(winLike = false) {
      return winLike ? dom.resultBgmWin : dom.resultBgmLose;
    }

    function primeMutedMediaElement(media, holdMs = 90) {
      if (!media || media.dataset.primedOnce === '1') return;
      media.dataset.primedOnce = '1';
      const isVideo = String(media.tagName || '').toUpperCase() === 'VIDEO';
      const prevMuted = !!media.muted;
      const prevVolume = typeof media.volume === 'number' ? media.volume : null;
      try { media.defaultMuted = true; } catch (_) {}
      try { media.muted = true; } catch (_) {}
      if (!isVideo && prevVolume != null) {
        try { media.volume = 0; } catch (_) {}
      }
      if (isVideo) media.dataset.wantPlay = '1';
      const restore = () => {
        try { media.pause?.(); } catch (_) {}
        try { media.currentTime = 0; } catch (_) {}
        if (isVideo) {
          media.dataset.wantPlay = '0';
          try { media.muted = true; } catch (_) {}
        } else {
          if (prevVolume != null) {
            try { media.volume = prevVolume; } catch (_) {}
          }
          try { media.muted = muted || prevMuted; } catch (_) {}
        }
      };
      try {
        const playPromise = media.play?.();
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.then(() => setTimeout(restore, holdMs)).catch(() => restore());
        } else {
          setTimeout(restore, holdMs);
        }
      } catch (_) {
        restore();
      }
    }

    function primeManagedMediaOnce() {
      if (mediaPrimeDone) return;
      mediaPrimeDone = true;
      if (dom.resultBgmWin) {
        try { dom.resultBgmWin.load?.(); } catch (_) {}
        primeMutedMediaElement(dom.resultBgmWin, 70);
      }
      if (dom.resultBgmLose) {
        try { dom.resultBgmLose.load?.(); } catch (_) {}
        primeMutedMediaElement(dom.resultBgmLose, 70);
      }
      if (dom.boardBgVideoHype) {
        applyElementSource(dom.boardBgVideoHype, resolveVideoAsset(dom.boardBgVideoHype), 'auto');
        setupLoopVideo(dom.boardBgVideoHype, 'auto');
        primeMutedMediaElement(dom.boardBgVideoHype, 110);
      }
      if (dom.bgVideoHype) {
        applyElementSource(dom.bgVideoHype, resolveVideoAsset(dom.bgVideoHype), 'auto');
        setupLoopVideo(dom.bgVideoHype, 'auto');
        primeMutedMediaElement(dom.bgVideoHype, 110);
      }
    }

    function resolveAudioAsset(path) {
      return String(path || '').replace(/\.wav(\?.*)?$/i, '.m4a$1');
    }

    function normalizeAudioKey(path) {
      return String(path || '').split('/').pop().replace(/\.[^.]+$/u, '');
    }

    function resolveVideoAsset(video) {
      if (!video) return '';
      return video.dataset.src || video.getAttribute('src') || '';
    }

    function applyElementSource(media, src, preload = 'metadata') {
      if (!media || !src) return false;
      const current = media.dataset.assignedSrc || media.getAttribute('src') || '';
      try { media.preload = preload; } catch (_) {}
      if (current === src) return false;
      try { media.pause?.(); } catch (_) {}
      media.setAttribute('src', src);
      media.dataset.assignedSrc = src;
      try { media.load?.(); } catch (_) {}
      return true;
    }

    function applyMediaProfile() {
      applyElementSource(dom.boardBgVideoHype, resolveVideoAsset(dom.boardBgVideoHype), 'auto');
      applyElementSource(dom.bgVideoHype, resolveVideoAsset(dom.bgVideoHype), 'none');
      if (dom.bgVideo) {
        const bgSrc = resolveVideoAsset(dom.bgVideo);
        if (bgSrc) applyElementSource(dom.bgVideo, bgSrc, 'metadata');
        dom.bgVideo.style.display = 'block';
        dom.bgVideo.style.visibility = 'visible';
      }
      if (dom.bgVideoHype) {
        stopLoopVideo(dom.bgVideoHype, { reset:false });
        try { dom.bgVideoHype.pause?.(); } catch (_) {}
        dom.bgVideoHype.removeAttribute('src');
        dom.bgVideoHype.dataset.assignedSrc = '';
        try { dom.bgVideoHype.load?.(); } catch (_) {}
        dom.bgVideoHype.style.opacity = '0';
        dom.bgVideoHype.style.visibility = 'hidden';
        dom.bgVideoHype.style.display = 'none';
      }
      allManagedAudioElements().forEach(audio => {
        if (!audio) return;
        const desired = resolveAudioAsset(audio.getAttribute('src') || audio.dataset.assignedSrc || '');
        const preloadMode = (audio === dom.bgmNormal || audio === dom.bgmHyper) ? 'auto' : 'metadata';
        if (desired) applyElementSource(audio, desired, preloadMode);
      });
      maintainBgmPlayback(false);
    }

    
function configureRunnerPerformance() {
      state.fixedDeltaMs = 1000 / clamp(perfSettings.physicsFps || 60, 18, 60);
      state.maxPhysicsSteps = Math.max(1, perfSettings.runnerMaxUpdates || 1);
    }


    
function applyPerformanceProfile(options = null) {
      const forceMedia = !!options?.forceMedia;
      const next = detectPerformanceProfile();
      const changed = JSON.stringify(next) !== JSON.stringify(perfSettings);
      if (changed) perfSettings = next;
      if (changed || forceMedia || !state.mediaProfileApplied) {
        applyMediaProfile();
        state.mediaProfileApplied = true;
      }
      configureRunnerPerformance();
      return changed;
    }


    function scheduleAppHeightRefresh(delay = 140) {
      clearTimeout(viewportResizeTimer);
      viewportResizeTimer = setTimeout(() => {
        cancelAnimationFrame(appHeightRaf);
        appHeightRaf = requestAnimationFrame(() => applyAppHeight(false));
      }, delay);
    }
    function contentBodyRadius(index, specialType = false) {
      return UNIFIED_BODY_RADIUS;
    }
    function contentSpawnWeight(index) {
      return CONTENT_BASE_WEIGHTS[index] || 6;
    }
    function contentScoreValue(index, specialType = false) {
      if (specialType === true || specialType === 'hazard') return 240;
      if (specialType === 'fire') return 180;
      if (specialType === 'buzz') return 260;
      return CONTENT_SCORE_VALUES[index] || 320;
    }
    function weightedContentPick(weights) {
      const safe = weights.map((w, i) => ({ i, w: Math.max(0.01, Number.isFinite(w) ? w : contentSpawnWeight(i)) }));
      const total = safe.reduce((sum, item) => sum + item.w, 0);
      let roll = gameRand() * total;
      for (const item of safe) {
        roll -= item.w;
        if (roll <= 0) return item.i;
      }
      return safe[safe.length - 1].i;
    }
    function spriteScaleFor(index, radius, isHazard = false) {
      return 0.001;
    }
    const BOARD_VISUAL_ITEM_SCALE = 0.99;
    function visualDiameter(radius, specialType = false) {
      const base = radius * 2.06;
      return Math.round(base * BOARD_VISUAL_ITEM_SCALE);
    }
    function contentChatIcon(index, specialType = false) {
      if (specialType === true || specialType === 'hazard') return SPECIAL.physics.chat;
      if (specialType === 'fire') return SPECIAL.firePhysics.chat;
      if (specialType === 'buzz') return SPECIAL.buzzPhysics.chat;
      return CONTENTS[index]?.physics?.chat || '💬';
    }

    function commentTopic(index, mode = 'now') {
      return Number.isInteger(index) && CONTENTS[index] ? { index, mode } : null;
    }

    function liveContentCount(index) {
      return Number.isInteger(index) ? (worldContentBodiesByIndex(index)?.length || 0) : 0;
    }

    function liveSpecialCount(type) {
      return worldBodiesByType(type)?.length || 0;
    }

    function commentPack(text, cls = '', icon = '💬', topicInfo = null) {
      return { text, cls, icon, topicInfo };
    }

    function pickSituationalComment(forceTrend = false) {
      const trend = currentTrend();
      const next = nextTrend();
      const stats = state.active && engine ? boardStats() : { pressure:0, clutter:0, nearTop:false };
      const previewLen = biggestPreviewLen();
      const nextPreviewLen = biggestNextPreviewLen();
      const trendCount = liveContentCount(state.trendIndex);
      const nextCount = liveContentCount(state.nextTrendIndex);
      const bombCount = liveSpecialCount('hazard');
      const buzzCount = liveSpecialCount('buzz');
      const fireCount = liveSpecialCount('fire');
      const crownGap = Math.max(0, crownTargetScore(state.seed) - Math.floor(state.score || 0));
      const nowTopic = commentTopic(state.trendIndex, 'now');
      const nextTopic = commentTopic(state.nextTrendIndex, 'next');
      const nearTop = stats.nearTop || state.overfillTime > 0.18 || state.topDangerTime > 0.36;
      const chainActive = state.chainCount >= 2 && state.chainDecay > 0;
      const comboActive = state.combo >= 3 && state.comboTimer > 0;

      if (state.clipTime > 0) {
        if (crownGap > 0 && crownGap <= 2400) {
          return commentPack(choice([
            `あと${fmt(crownGap)}で今日の1位！`,
            '大バズり中に王冠を取りたい！',
            'いまの2こ消しタイムで決めたい！',
            ...COMMENT_BANK.crown
          ]), 'super', '👑', nowTopic);
        }
        if (previewLen >= 2) {
          return commentPack(choice([
            `あと1こで${trend.name}がまた消せる！`,
            `${trend.name}を続けて取れそう！`,
            'この2こ消しタイムで連続で行きたい！',
            ...COMMENT_BANK.bigbuzz
          ]), 'super', '✨', nowTopic);
        }
        return commentPack(choice(COMMENT_BANK.bigbuzz), 'super', '🎬', nowTopic);
      }

      if (state.fireMode > 0 || fireCount > 0) {
        return commentPack(choice([
          `炎が${fireCount}こある！近くでまとめて消したい！`,
          'いまは立て直しが先！',
          '炎を巻きこめる場所を見たい！',
          ...COMMENT_BANK.fire,
          ...COMMENT_BANK.rescue
        ]), 'low', '🔥', nowTopic);
      }

      if (bombCount >= 2 && rand() < 0.72) {
        return commentPack(choice([
          `爆弾が${bombCount}こ見えてる！`,
          '爆弾3こで大炎上になるよ！',
          '爆弾をつなぐなら気をつけたい！',
          ...COMMENT_BANK.bomb
        ]), 'low', '💣', nowTopic);
      }

      if (buzzCount >= 2 && rand() < 0.7) {
        return commentPack(choice([
          `バズりが${buzzCount}こある！`,
          'あと1こで大バズりに入りたい！',
          'バズり3こで2こ消しタイムに入るよ！',
          ...COMMENT_BANK.buzzPrep
        ]), 'super', '✨', nowTopic);
      }

      if (chainActive) {
        return commentPack(choice([
          `${state.chainCount}連鎖つづいてる！`,
          'まだ消える！まだ行ける！',
          'この連鎖をのばしたい！',
          ...COMMENT_BANK.chain
        ]), 'super', '💥', nowTopic);
      }

      if (comboActive) {
        return commentPack(choice([
          `コンボ x${state.combo}！`,
          '次もすぐ消すとコンボが続く！',
          'この流れを切らしたくない！',
          ...COMMENT_BANK.combo
        ]), 'hot', '⚡', nowTopic);
      }

      if (crownGap > 0 && crownGap <= 1800) {
        return commentPack(choice([
          `あと${fmt(crownGap)}で今日の1位！`,
          '王冠までほんとに近い！',
          'この一手で1位が見える！',
          ...COMMENT_BANK.crown
        ]), 'super', '👑', nowTopic);
      }

      if (crownGap > 0 && crownGap <= 5200 && rand() < 0.66) {
        return commentPack(choice([
          `あと${fmt(crownGap)}で1位ライン！`,
          `${crownTargetName(state.seed)}まであと${fmt(crownGap)}`,
          'この流れで王冠を追いたい！',
          ...COMMENT_BANK.crown
        ]), 'super', '👑', nowTopic);
      }

      if (previewLen >= 3) {
        return commentPack(choice([
          `${trend.name}がもう3こ見えてる！`,
          `そのまま${trend.name}を消せそう！`,
          'いまの並び、かなり強い！',
          ...COMMENT_BANK.high
        ]), 'super', '✨', nowTopic);
      }

      if (previewLen === 2) {
        return commentPack(choice([
          `あと1こで${trend.name}が消える！`,
          `${trend.name}をもう1こ引きたい！`,
          'その2こ、育てたい！',
          'そこにもう1こ足せばチャンス！'
        ]), 'hot', '👀', nowTopic);
      }

      if (state.rushWindow > 0 && nextPreviewLen >= 2) {
        return commentPack(choice([
          `次の${next.name}の準備いいね！`,
          `${next.name}を先に作れてる！`,
          '次のお題にそのまま入れそう！',
          ...COMMENT_BANK.rush,
          ...COMMENT_BANK.jack
        ]), 'super', '🌊', nextTopic);
      }

      if (state.trendWarning && nextPreviewLen >= 3) {
        return commentPack(choice([
          `次の${next.name}がもう見えてる！`,
          `${next.name}に切りかわってもすぐ消せそう！`,
          '次のお題の準備ばっちり！',
          ...COMMENT_BANK.warning
        ]), 'next', '🌊', nextTopic);
      }

      if (state.trendWarning && nextPreviewLen >= 2) {
        return commentPack(choice([
          `次は${next.name}、あと1こで形になる！`,
          `${next.name}の先読みができてる！`,
          '次のお題も少し残しておきたい！',
          ...COMMENT_BANK.warning
        ]), 'next', '🌊', nextTopic);
      }

      if (nearTop) {
        return commentPack(choice([
          '上がつまってきた！',
          'いまは高くしすぎたくない！',
          '先に1回消してスペースを作ろう！',
          '広い場所を作りたい！',
          ...COMMENT_BANK.low
        ]), 'low', '⚠️', nowTopic);
      }

      if (stats.clutter > 0.56 || trendCount <= 1) {
        return commentPack(choice([
          `${trend.name}がまだ少ないかも`,
          'いまのお題をもっと集めたい！',
          'ちがう話題が多いかも',
          'まずは同じアイテムを寄せよう！',
          ...COMMENT_BANK.clutter
        ]), 'low', contentChatIcon(state.trendIndex), nowTopic);
      }

      if (forceTrend || rand() < 0.58) {
        return commentPack(choice([
          ...trend.lines,
          `${trend.name}をもっと見たい！`,
          `いまは${trend.name}を集めたい！`,
          `${trend.name}で点を取りたい！`,
          `${trend.name}を3こ以上で消したい！`
        ]), state.tension < 42 ? 'low' : 'hot', contentChatIcon(state.trendIndex), nowTopic);
      }

      if (state.tension > 74 && stats.pressure < 0.48) {
        return commentPack(choice([
          ...COMMENT_BANK.high,
          'この流れまだ続けたい！',
          '見ていて気持ちいい！',
          '次も当たりそう！'
        ]), 'hot', '✨', nowTopic);
      }

      if (state.tension > 42) {
        return commentPack(choice([
          ...COMMENT_BANK.mid,
          `${trend.name}待ち！`,
          `${next.name}も少し置いておきたい！`,
          '次の一手を見たい！'
        ]), '', '👀', nowTopic);
      }

      return commentPack(choice([
        ...COMMENT_BANK.low,
        'いまはあせらず1回消したい！',
        '同じアイテムをくっつけたい！',
        'まずは盤面を整えよう！'
      ]), 'low', '💭', nowTopic);
    }

    function bodyImageSrc(body) {
      if (body.gameType === 'hazard') return SPECIAL.hazard;
      if (body.gameType === 'fire') return SPECIAL.fire;
      if (body.gameType === 'buzz') return SPECIAL.buzz;
      return CONTENTS[body.contentIndex]?.img || 'assets/img/item_1.png';
    }

    function bodyImageAlt(body) {
      if (body.gameType === 'hazard') return 'bomb';
      if (body.gameType === 'fire') return 'big fire';
      if (body.gameType === 'buzz') return 'big buzz';
      return CONTENTS[body.contentIndex]?.name || 'content';
    }

    function clearVisuals() {
      bodyVisuals.forEach(node => node.remove());
      bodyVisuals.clear();
      if (dom.itemLayer) dom.itemLayer.innerHTML = '';
      if (mergeCtx && dom.mergeCanvas) mergeCtx.clearRect(0, 0, dom.mergeCanvas.width, dom.mergeCanvas.height);
      state.forceFullVisualSync = true;
      if (!(state.visualDirtyIds instanceof Set)) state.visualDirtyIds = new Set();
      invalidateWorldBodiesCache();
    }

    function removeBodyVisualEntry(bodyOrId) {
      const id = typeof bodyOrId === 'object' ? bodyOrId?.id : bodyOrId;
      if (id == null) return;
      const node = bodyVisuals.get(id);
      if (node) node.remove();
      bodyVisuals.delete(id);
      state.visualDirtyIds?.delete(id);
    }

    function disableBodyCollision(body) {
      if (!body) return;
      body.plugin = body.plugin || {};
      body.plugin.pendingRemoval = true;
      body.gameType = 'removed';
      body.label = 'removed';
      body.isSensor = true;
      body.collisionFilter.mask = 0;
      body.collisionFilter.category = 0;
      body.render.visible = false;
      Body.setVelocity(body, { x:0, y:0 });
      Body.setAngularVelocity(body, 0);
      Sleeping.set(body, false);
    }

    
function wakeBodiesNearRemoval(removedBodies) {
      if (!engine || !removedBodies?.length) return;
      const sleepers = worldBodies().filter(body => body.isSleeping && !body.plugin?.pendingRemoval);
      if (!sleepers.length) return;
      const hash = buildSpatialHash(sleepers);
      const now = performance.now();
      requestHighPrecisionPhysics(320);
      for (const spot of removedBodies) {
        const seed = { position: spot.position, circleRadius: spot.circleRadius || 0 };
        visitNearbyFromHash(hash, seed, 1, body => {
          const dx = Math.abs(body.position.x - spot.position.x);
          const dy = body.position.y - spot.position.y;
          const reachX = (body.circleRadius || 0) + (spot.circleRadius || 0) + 14;
          const reachUp = Math.max(24, (body.circleRadius || 0) + 10);
          const reachDown = (body.circleRadius || 0) + (spot.circleRadius || 0) + 46;
          if (dx > reachX || dy < -reachUp || dy > reachDown) return false;
          if (isFrozenBody(body)) thawBody(body, now, { vy:0.2 });
          Sleeping.set(body, false);
          body.floatStartAt = 0;
          body.plugin = body.plugin || {};
          body.plugin.lastActiveAt = now;
          body.plugin.lastMotionAt = now;
          body.plugin.restStartAt = 0;
          body.plugin.highPrecisionUntil = Math.max(body.plugin.highPrecisionUntil || 0, now + 380);
          markBodyVisualDirty(body);
          markGroupScanDirty(body);
          return false;
        });
      }
    }


    function hardRemoveBodies(bodies) {
      if (!engine) return 0;
      const seen = new Set();
      const list = (Array.isArray(bodies) ? bodies : [bodies]).filter(body => {
        if (!body || seen.has(body.id)) return false;
        seen.add(body.id);
        return true;
      });
      if (!list.length) return 0;
      const removedSpots = list.map(body => ({
        position: { x: body.position.x, y: body.position.y },
        circleRadius: body.circleRadius,
        contentIndex: body.contentIndex,
        gameType: body.gameType
      }));
      list.forEach(body => {
        unregisterLiveBody(body);
        disableBodyCollision(body);
        removeBodyVisualEntry(body);
      });
      list.forEach(body => {
        try {
          Composite.remove(engine.world, body, true);
        } catch (err) {
          console.warn('remove body failed', err);
        }
      });
      invalidateWorldBodiesCache();
      wakeBodiesNearRemoval(removedSpots);
      invalidateBoardStatsCache();
      state.forceFullVisualSync = true;
      return list.length;
    }

    function isFeverActive() {
      return state.clipTime > 0;
    }


    function hexToRgba(hex, alpha = 1) {
      const raw = String(hex || '').replace('#', '').trim();
      if (!raw) return `rgba(255,255,255,${alpha})`;
      const size = raw.length === 3 ? 1 : 2;
      const expand = (part) => size === 1 ? part + part : part;
      const parts = size === 1 ? raw.split('') : [raw.slice(0, 2), raw.slice(2, 4), raw.slice(4, 6)];
      const [r, g, b] = parts.map(p => parseInt(expand(p), 16) || 255);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    function setAvatarVisual(key = 'normal', opts = {}) {
      const moodMap = { apology:'apology', win:'win' };
      const lookup = moodMap[key] || key;
      const now = performance.now();
      const force = !!opts.force;
      const cycle = !!opts.cycle;
      if (!force && state.avatarVisualMood === lookup && pendingAvatarMood === lookup) return;
      if (pendingAvatarMood !== lookup || force) {
        pendingAvatarMood = lookup;
        pendingAvatarMoodSince = now;
      }
      const instantSwap = force || lookup === 'apology' || lookup === 'win' || lookup === 'panic' || lookup === 'yami';
      if (!instantSwap && state.avatarVisualMood && state.avatarVisualMood !== lookup && (now - pendingAvatarMoodSince) < 120) {
        state.avatarMood = lookup;
        return;
      }
      const pool = (avatarVariants[lookup] || avatarVariants.normal).filter(file => !missingAvatarFiles.has(file));
      state.avatarMood = lookup;
      const applyAvatarSrc = (el, file, nextSrc) => {
        if (!el || (!force && avatarVisualFile === file && el.dataset.file === file)) return;
        el.decoding = 'sync';
        el.loading = 'eager';
        el.style.aspectRatio = '1 / 1';
        el.width = el.width || 2048;
        el.height = el.height || 2048;
        el.dataset.file = file;
        el.src = nextSrc;
      };
      const readyPool = pool.filter(file => {
        const cached = preloadAvatarFile(file);
        return !!(cached && cached.complete && cached.naturalWidth > 0);
      });
      const source = readyPool.length ? readyPool : pool;
      if (source.length) {
        let file = source[0];
        if (cycle && source.length > 1) {
          const base = typeof avatarVariantCursor[lookup] === 'number' ? avatarVariantCursor[lookup] : -1;
          let idx = (base + 1) % source.length;
          if (source[idx] === avatarVisualFile && source.length > 1) idx = (idx + 1) % source.length;
          avatarVariantCursor[lookup] = idx;
          file = source[idx];
        } else {
          const currentIdx = source.indexOf(avatarVisualFile);
          file = currentIdx >= 0 ? source[currentIdx] : source[0];
        }
        const cached = preloadAvatarFile(file);
        const nextSrc = `assets/img/${file}`;
        const applyReady = () => {
          if (state.avatarMood !== lookup && !force) return;
          requestAnimationFrame(() => {
            if (state.avatarMood !== lookup && !force) return;
            applyAvatarSrc(dom.avatar, file, nextSrc);
            swapBoardCharacter(file, nextSrc);
            avatarVisualFile = file;
            state.avatarVisualMood = lookup;
          });
        };
        if (cached && cached.complete && cached.naturalWidth > 0) {
          Promise.resolve(cached.decode?.()).catch(() => {}).finally(applyReady);
          return;
        }
        cached?.addEventListener?.('load', applyReady, { once:true });
        return;
      }
      requestAnimationFrame(() => {
        applyAvatarSrc(dom.avatar, 'char_normal.png', 'assets/img/char_normal.png');
        swapBoardCharacter('char_normal.png', 'assets/img/char_normal.png');
        avatarVisualFile = 'char_normal.png';
        state.avatarVisualMood = 'normal';
      });
    }


    function pickAvatarMood() {
      if (state.fireMode > 0 || state.overfillTime > 0.35 || state.topDangerTime > 0.75) return 'panic';
      if (state.clipTime > 0 || state.buzzMode > 0 || state.chainCount >= 4) return 'hype';
      if (state.trendWarning) return 'warning';
      if (state.craving >= 55 || state.tension <= 35) return 'yami';
      if (state.tension > 72 || biggestPreviewLen() >= 2) return 'focus';
      return 'normal';
    }

    function showTrendShiftBanner(mode = 'shift', fromIndex = state.trendIndex, toIndex = state.nextTrendIndex, futureIndex = state.futureTrendIndex) {
      if (!dom.trendShiftBanner) return;
      const from = CONTENTS[fromIndex];
      const to = CONTENTS[toIndex];
      const future = CONTENTS[futureIndex];
      dom.trendShiftBanner.className = '';
      dom.trendShiftBanner.classList.add('show', mode === 'warning' ? 'warning' : 'shift');
      dom.trendShiftKicker.textContent = mode === 'warning' ? 'TREND ALERT' : 'TREND SHIFT';
      dom.trendShiftFrom.textContent = mode === 'warning' ? 'いま' : (from?.name || '今');
      dom.trendShiftTo.textContent = to?.name || '';
      if (dom.trendShiftFromThumb) dom.trendShiftFromThumb.src = (from?.img || to?.img || 'assets/img/item_1.png');
      if (dom.trendShiftToThumb) dom.trendShiftToThumb.src = (to?.img || 'assets/img/item_2.png');
      if (dom.trendShiftFutureThumb) dom.trendShiftFutureThumb.src = (future?.img || 'assets/img/item_3.png');
      if (dom.trendShiftFutureName) {
        dom.trendShiftFutureName.textContent = future?.name || '-';
        dom.trendShiftFutureName.style.color = future?.accent || '#d9caeb';
      }
      dom.trendShiftSub.innerHTML = `<span class="trend-shift-badge mini"><span>次の次</span><img src="${future?.img || 'assets/img/item_3.png'}" alt="future trend"><span style="color:${future?.accent || '#d9caeb'}">${future?.name || '-'}</span></span>`;
      dom.trendShiftTo.style.color = to?.accent || '#ffffff';
      dom.trendShiftFrom.style.color = mode === 'warning' ? (from?.accent || '#d9caeb') : (from?.accent || '#d9caeb');
      clearTimeout(trendBannerTimer);
      trendBannerTimer = setTimeout(() => {
        if (dom.trendShiftBanner) dom.trendShiftBanner.classList.remove('show', 'warning', 'shift');
      }, mode === 'warning' ? 1800 : 2300);
    }

    function renderMergeLinks() {
      return;
    }

    function ensureBodyVisual(body) {
      if (!dom.itemLayer) return null;
      let node = bodyVisuals.get(body.id);
      if (node) return node;
      node = document.createElement('div');
      node.className = `item-chip ${body.gameType === 'hazard' ? 'hazard' : ''} ${body.gameType === 'fire' ? 'fire' : ''} ${body.gameType === 'buzz' ? 'buzz' : ''}`.trim();
      node.dataset.emoji = contentChatIcon(body.contentIndex, body.gameType);
      const img = document.createElement('img');
      img.alt = bodyImageAlt(body);
      img.src = bodyImageSrc(body);
      img.loading = 'eager';
      img.decoding = 'async';
      node._imgSrc = img.src;
      node._imgAlt = img.alt;
      img.addEventListener('error', () => {
        img.style.display = 'none';
        node.style.display = 'grid';
        node.style.placeItems = 'center';
        node.style.fontSize = '30px';
        node.textContent = node.dataset.emoji || '💬';
      }, { once:true });
      node.appendChild(img);
      node._img = img;
      node.style.display = 'grid';
      node.style.visibility = 'visible';
      dom.itemLayer.appendChild(node);
      bodyVisuals.set(body.id, node);
      return node;
    }

    
function hasPendingVisualWork() {
      if (state.forceFullVisualSync) return true;
      if (state.fxNeedsClear || state.particles.length || state.rings.length) return true;
      if (state.shiftGlowTimer > 0) return true;
      if (state.visualDirtyIds?.size || state.previewVisualsDirty || (state.visualGlowIds?.length || 0)) return true;
      return (state.visualHotBodiesCount || 0) > 0;
    }

function hasFastMovingBodies() {
      return (state.fastMovingBodiesCount || 0) > 0;
    }

function syncBodyVisuals() {
      if (!engine || !dom.itemLayer) return;
      const bodies = state.forceFullVisualSync ? worldBodies() : EMPTY_BODY_ARRAY;
      const previewMap = state.previewBodyLens instanceof Map ? state.previewBodyLens : EMPTY_LOOKUP_MAP;
      const nextPreviewMap = state.nextPreviewBodyLens instanceof Map ? state.nextPreviewBodyLens : EMPTY_LOOKUP_MAP;
      const boardInfo = boardLogicalRect();
      const boardW = boardInfo.width || 1;
      const boardH = boardInfo.height || 1;
      const now = performance.now();
      const glowIds = state.shiftGlowTimer > 0 && state.shiftGlowIds.length ? state.shiftGlowIds : EMPTY_ID_ARRAY;
      updateVisualDirtyContext(state.previewBodyIds || EMPTY_ID_ARRAY, state.nextPreviewBodyIds || EMPTY_ID_ARRAY, glowIds);
      const glowSet = state.visualGlowSet || null;

      const updateBodies = [];
      const queueStamp = (state.visualQueueStamp || 0) + 1;
      state.visualQueueStamp = queueStamp;
      const pushBody = (body) => {
        if (!body || !state.liveBodyIds?.has(body.id)) return;
        body.plugin = body.plugin || {};
        if (body.plugin._visualQueueStamp === queueStamp) return;
        body.plugin._visualQueueStamp = queueStamp;
        updateBodies.push(body);
      };

      if (state.forceFullVisualSync) {
        bodies.forEach(pushBody);
      } else {
        state.visualDirtyIds?.forEach(id => pushBody(bodyById(id)));
        state.visualPreviewIds?.forEach(id => pushBody(bodyById(id)));
        state.visualNextPreviewIds?.forEach(id => pushBody(bodyById(id)));
        state.visualGlowIds?.forEach(id => pushBody(bodyById(id)));
        const visualHotBodies = state.visualHotBodies || EMPTY_BODY_ARRAY;
        for (let i = 0; i < visualHotBodies.length; i += 1) pushBody(visualHotBodies[i]);
      }

      for (const body of updateBodies) {
        const node = ensureBodyVisual(body);
        if (!node) continue;
        if (!node.isConnected && dom.itemLayer) dom.itemLayer.appendChild(node);
        let img = node._img;
        if (!img) {
          img = document.createElement('img');
          node.textContent = '';
          node.appendChild(img);
          node._img = img;
        }
        const nextSrc = bodyImageSrc(body);
        if (node._imgSrc !== nextSrc) {
          node._imgSrc = nextSrc;
          img.src = nextSrc;
        }
        const nextAlt = bodyImageAlt(body);
        if (node._imgAlt !== nextAlt) {
          node._imgAlt = nextAlt;
          img.alt = nextAlt;
        }

        const radius = body.circleRadius || contentBodyRadius(body.contentIndex, body.gameType);
        const diameter = visualDiameter(radius, body.gameType);
        if (node._diameter !== diameter) {
          node._diameter = diameter;
          node.style.width = `${diameter}px`;
          node.style.height = `${diameter}px`;
        }

        const trendBody = body.gameType === 'content' && body.contentIndex === state.trendIndex;
        const previewLen = previewMap.get(body.id) || 0;
        const nextPreviewLen = nextPreviewMap.get(body.id) || 0;
        const forecastReady = body.gameType === 'content' && body.contentIndex === state.nextTrendIndex && nextPreviewLen >= 2;
        const safeRadius = Math.max(8, radius);
        const rawXBase = Number.isFinite(body.position.x) ? body.position.x : boardW / 2;
        const rawYBase = Number.isFinite(body.position.y) ? body.position.y : boardH * 0.5;
        const rawAngleBase = Number.isFinite(body.angle) ? body.angle : 0;
        const renderAlpha = clamp((state.physicsAccumulator || 0) / Math.max(1, state.fixedDeltaMs || 16.6667), 0, 1);
        const allowInterpolation = !body.isSleeping
          && Number.isFinite(body.positionPrev?.x)
          && Number.isFinite(body.positionPrev?.y)
          && Number.isFinite(body.anglePrev)
          && ((body.speed || 0) > 0.03 || Math.abs(body.angularVelocity || 0) > 0.01);
        const rawX = allowInterpolation ? (body.positionPrev.x + (rawXBase - body.positionPrev.x) * renderAlpha) : rawXBase;
        const rawY = allowInterpolation ? (body.positionPrev.y + (rawYBase - body.positionPrev.y) * renderAlpha) : rawYBase;
        const rawAngle = allowInterpolation ? (body.anglePrev + (rawAngleBase - body.anglePrev) * renderAlpha) : rawAngleBase;
        if (!Number.isFinite(body.position.x) || !Number.isFinite(body.position.y) || !Number.isFinite(body.angle)) {
          queueBodyRepair(body);
        }
        const bodyAge = now - (body.spawnAt || 0);
        const outsideSoftBounds = bodyAge > 120 && (rawX < safeRadius + 2 || rawX > boardW - safeRadius - 2 || rawY < safeRadius + 2 || rawY > boardH - safeRadius - 2);
        if (outsideSoftBounds) queueBodyRepair(body);
        const drawX = clamp(rawX, safeRadius, boardW - safeRadius);
        const drawY = clamp(rawY, safeRadius, boardH - safeRadius);
        const scale = trendBody ? 1.06 : (forecastReady ? 1.03 : 1);
        const nextDrawX = Math.round((drawX - diameter / 2) * 10) / 10;
        const nextDrawY = Math.round((drawY - diameter / 2) * 10) / 10;
        const nextAngle = Math.round(rawAngle * 100) / 100;

        const className = [
          'item-chip',
          body.gameType === 'hazard' ? 'hazard' : '',
          body.gameType === 'fire' ? 'fire' : '',
          body.gameType === 'fire' && Math.floor(body.plugin?.adjacentClearHits || 0) >= 1 ? 'weakened' : '',
          body.gameType === 'buzz' ? 'buzz' : '',
          trendBody ? 'trend' : '',
          previewLen === 2 ? 'near' : '',
          previewLen >= 3 ? 'ready' : '',
          forecastReady ? 'forecast' : '',
          glowSet?.has(body.id) ? 'shift-glow' : '',
          body.plugin?.pendingClear ? 'pending-clear' : ''
        ].filter(Boolean).join(' ');

        if (node.className !== className) node.className = className;
        if (node.style.visibility !== 'visible') node.style.visibility = 'visible';
        node.hidden = false;
        const zValue = String(100 + Math.round(rawY * 10) + (body.id % 10));
        const filterValue = (body.gameType === 'hazard' || body.gameType === 'fire' || body.gameType === 'buzz') ? 'none' : (trendBody ? 'saturate(1.1)' : 'none');
        const canSkipTransform = !!node._transform && !state.forceFullVisualSync
          && Math.abs((node._drawX ?? nextDrawX) - nextDrawX) < perfSettings.transformPositionThreshold
          && Math.abs((node._drawY ?? nextDrawY) - nextDrawY) < perfSettings.transformPositionThreshold
          && Math.abs((node._drawAngle ?? nextAngle) - nextAngle) < perfSettings.transformAngleThreshold
          && Math.abs((node._drawScale ?? scale) - scale) < 0.001
          && node.className === className
          && node._zIndex === zValue
          && node._filter === filterValue
          && body.isSleeping;
        if (!canSkipTransform) {
          const transformValue = `translate3d(${nextDrawX}px, ${nextDrawY}px, 0) rotate(${nextAngle}rad) scale(${scale})`;
          if (node._transform !== transformValue) {
            node._transform = transformValue;
            node.style.transform = transformValue;
          }
          node._drawX = nextDrawX;
          node._drawY = nextDrawY;
          node._drawAngle = nextAngle;
          node._drawScale = scale;
          if (node._zIndex !== zValue) {
            node._zIndex = zValue;
            node.style.zIndex = zValue;
          }
          if (node._filter !== filterValue) {
            node._filter = filterValue;
            node.style.filter = filterValue;
          }
        }

        body.plugin = body.plugin || {};
        body.plugin.pendingClear = false;
      }

      state.forceFullVisualSync = false;
      state.visualDirtyIds?.clear();
    }


    const BASE_STAGE_W = 1206;
    const BASE_STAGE_H = 2144;
    const BUILD_ID = "v139_perfmax_crowd_androidsync";

    function measureViewportSize() {
      const docEl = document.documentElement;
      const vv = window.visualViewport;
      const pick = (...values) => {
        for (let i = 0; i < values.length; i += 1) {
          const value = values[i];
          if (Number.isFinite(value) && value > 0) return value;
        }
        return 0;
      };
      let width = pick(vv?.width, docEl?.clientWidth, window.innerWidth);
      let height = pick(vv?.height, docEl?.clientHeight, window.innerHeight);
      const fallbackWidth = pick(docEl?.clientWidth, window.innerWidth, vv?.width);
      const fallbackHeight = pick(docEl?.clientHeight, window.innerHeight, vv?.height);
      if (fallbackWidth > 0 && Math.abs(fallbackWidth - width) > 72) width = Math.min(Math.max(width, fallbackWidth - 72), fallbackWidth);
      if (fallbackHeight > 0 && Math.abs(fallbackHeight - height) > 120) height = Math.min(Math.max(height, fallbackHeight - 120), fallbackHeight);
      return {
        width: Math.max(1, Math.round(width || window.innerWidth || 1)),
        height: Math.max(1, Math.round(height || window.innerHeight || 1))
      };
    }

    function markBoardLayoutDirty() {
      state.boardLayoutDirty = true;
      state.boardRectCacheFrame = -1;
    }

    function applyAppHeight(force = false) {
      const measuredViewport = measureViewportSize();
      const viewportWidth = measuredViewport.width;
      const viewportHeight = measuredViewport.height;
      if (!force && Math.abs(viewportWidth - lastViewportWidth) < 1 && Math.abs(viewportHeight - lastViewportHeight) < 1) return;
      const resized = force || Math.abs(viewportWidth - lastViewportWidth) >= 1 || Math.abs(viewportHeight - lastViewportHeight) >= 1;
      lastViewportWidth = viewportWidth;
      lastViewportHeight = viewportHeight;
      appHeight = viewportHeight;
      const fitScale = Math.min(viewportWidth / BASE_STAGE_W, viewportHeight / BASE_STAGE_H) || 1;
      const howtoScale = Math.min(1, viewportWidth / BASE_STAGE_W) || fitScale || 1;
      const howtoLogicalHeight = Math.max(BASE_STAGE_H, Math.ceil(viewportHeight / Math.max(howtoScale, 0.0001)));
      document.documentElement.style.setProperty('--app-height', `${viewportHeight}px`);
      document.documentElement.style.setProperty('--stage-scale', `${fitScale}`);
      document.documentElement.style.setProperty('--howto-scale', `${howtoScale}`);
      document.documentElement.style.setProperty('--howto-logical-h', `${howtoLogicalHeight}px`);
      document.documentElement.style.setProperty('--viewport-w', `${viewportWidth}px`);
      document.documentElement.style.setProperty('--viewport-h', `${viewportHeight}px`);
      if (resized || force) markBoardLayoutDirty();
      if (resized || force) refreshBoardLayoutCache(true);
      if (resized) resizeCanvas();
      if (resized || force) {
        alignTrendMainToGameCenter();
        renderPreview();
      }
    }

    function alignTrendMainToGameCenter() {
      if (!dom.trendMain) return;
      dom.trendMain.style.left = 'auto';
      dom.trendMain.style.right = 'auto';
    }

    function refreshBoardLayoutCache(force = false) {
      if (!dom.board) {
        if (!state.boardRectCache) {
          state.boardRectCache = { left:0, top:0, right:0, bottom:0, width:1, height:1, rectWidth:1, rectHeight:1, scaleX:1, scaleY:1 };
        }
        if (!state.boardMetricsCache) {
          state.boardMetricsCache = { fullLineY:26, dangerLineY:60, sideInset:6, spawnInset:10 };
        }
        return state.boardRectCache;
      }
      const now = performance.now();
      const frameStamp = state.frameStamp || 0;
      if (!force && state.boardRectCache && !state.boardLayoutDirty) {
        const measuredThisFrame = state.boardRectCacheFrame === frameStamp && frameStamp !== 0;
        const measuredRecently = now - (state.boardRectCacheMeasuredAt || 0) < 90;
        if (measuredThisFrame || measuredRecently) return state.boardRectCache;
      }
      const rect = dom.board.getBoundingClientRect?.() || { left:0, top:0, right:0, bottom:0, width:0, height:0 };
      const width = dom.board.clientWidth || dom.board.offsetWidth || Math.round(rect.width) || 1;
      const height = dom.board.clientHeight || dom.board.offsetHeight || Math.round(rect.height) || 1;
      const prev = state.boardRectCache;
      const moved = !prev
        || force
        || Math.abs((prev.left || 0) - rect.left) >= 0.5
        || Math.abs((prev.top || 0) - rect.top) >= 0.5
        || Math.abs((prev.rectWidth || 0) - rect.width) >= 0.5
        || Math.abs((prev.rectHeight || 0) - rect.height) >= 0.5
        || Math.abs((prev.width || 0) - width) >= 1
        || Math.abs((prev.height || 0) - height) >= 1;
      if (moved) {
        state.boardRectCache = {
          left: rect.left,
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          width,
          height,
          rectWidth: rect.width || width,
          rectHeight: rect.height || height,
          scaleX: rect.width ? (width / rect.width) : 1,
          scaleY: rect.height ? (height / rect.height) : 1
        };
        const style = getComputedStyle(dom.board);
        const fullLineY = parseFloat(style.getPropertyValue('--gameover-line-y')) || 26;
        const dangerLineY = parseFloat(style.getPropertyValue('--danger-line-y')) || 60;
        state.boardMetricsCache = { fullLineY, dangerLineY, sideInset:6, spawnInset:Math.max(10, fullLineY - 38) };
      }
      state.boardLayoutDirty = false;
      state.boardRectCacheFrame = frameStamp;
      state.boardRectCacheMeasuredAt = now;
      return state.boardRectCache;
    }

    function boardLogicalRect() {
      return refreshBoardLayoutCache(false);
    }

    function persistSave() {
      localStorage.setItem(storageKey, JSON.stringify(save));
    }


    function voiceTextForPath(path) {
      const file = normalizeAudioKey(path);
      return VOICE_TEXT_MAP[`${file}.wav`] || VOICE_TEXT_MAP[`${file}.m4a`] || VOICE_TEXT_MAP[file] || '';
    }

    function applyVoiceSubtitle(path, hold = 3.8) {
      const line = voiceTextForPath(path);
      if (!line) return false;
      state.lastVoiceText = line;
      state.voiceSubtitleTimer = Math.max(state.voiceSubtitleTimer || 0, clamp(Number(hold) || 3, 2.8, 3.2));
      showSpeechBubble(line, hold, { force:true, voice:true });
      return true;
    }

    function stopAllVoiceAudio() {
      try { [dom.voiceStart, dom.voiceFire, dom.voiceWin, dom.voiceLose].forEach(a => { if (a) { a.pause(); a.currentTime = 0; } }); } catch (_) {}
      voiceCache.forEach(audio => { try { audio.pause(); audio.currentTime = 0; } catch (_) {} });
    }

    function audioSessionHandle() {
      try {
        const session = navigator?.audioSession;
        return session && typeof session === 'object' ? session : null;
      } catch (_) {
        return null;
      }
    }

    function desiredAudioSessionType() {
      if (muted || document.hidden) return 'auto';
      return 'ambient';
    }

    function syncAudioSession(force = false) {
      const session = audioSessionHandle();
      if (!session) return false;
      const nextType = desiredAudioSessionType();
      if (!force && lastAppliedAudioSessionType === nextType) return true;
      let appliedType = nextType;
      try {
        if (session.type !== nextType) session.type = nextType;
        appliedType = String(session.type || nextType);
      } catch (_) {
        if (nextType !== 'auto') {
          try {
            session.type = 'auto';
            appliedType = String(session.type || 'auto');
          } catch (_) {
            return false;
          }
        } else {
          return false;
        }
      }
      lastAppliedAudioSessionType = appliedType;
      return appliedType === nextType || appliedType === 'auto';
    }

    function updateMuteButtons() {
      const label = muted ? '🔇 サウンドOFF' : '🔊 サウンドON/OFF';
      dom.muteBtn.textContent = label;
      dom.resultMuteBtn.textContent = label;
    }

    let burstFlashTimer = 0;
    function flashBurstButton() {
      if (!dom.burstBtn) return;
      dom.burstBtn.classList.remove('switch-flash');
      void dom.burstBtn.offsetWidth;
      dom.burstBtn.classList.add('switch-flash');
      clearTimeout(burstFlashTimer);
      burstFlashTimer = setTimeout(() => dom.burstBtn?.classList.remove('switch-flash'), 1100);
    }

    function setBurstButtonLabel(mode = 'default') {
      if (!dom.burstBtn) return;
      const html = mode === 'ready'
        ? '<div><div class="icon">🧯</div><div class="txt">火消をする</div></div>'
        : '<div><div class="icon">🧯</div><div class="txt">おたすけ</div></div>';
      if (dom.burstBtn.dataset.mode === mode && dom.burstBtn.innerHTML === html) return;
      dom.burstBtn.dataset.mode = mode;
      dom.burstBtn.innerHTML = html;
    }

    function toggleMute() {
      muted = !muted;
      save.muted = muted;
      persistSave();
      allManagedAudioElements().forEach(a => { if (a) a.muted = muted; });
      if (resultStingerAudio) resultStingerAudio.muted = muted;
      syncAudioSession(true);
      updateMuteButtons();
    }

    function setupLoopVideo(video, preload = 'auto') {
      if (!video) return null;
      try {
        video.defaultMuted = true;
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.preload = preload;
        video.setAttribute('muted', '');
        video.setAttribute('loop', '');
        video.setAttribute('autoplay', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        video.disablePictureInPicture = true;
      } catch (_) {}
      if (!video._loopHooksBound) {
        video._loopHooksBound = true;
        const retry = () => {
          if (video.dataset.wantPlay !== '1') return;
          try {
            const playPromise = video.play?.();
            if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
          } catch (_) {}
        };
        ['loadedmetadata','loadeddata','canplay','canplaythrough'].forEach(type => {
          try { video.addEventListener(type, retry, { passive:true }); } catch (_) {}
        });
        try {
          document.addEventListener('visibilitychange', () => {
            if (!document.hidden) { retry(); maintainBgmPlayback(false); }
          }, { passive:true });
        } catch (_) {}
      }
      return video;
    }

    function playLoopVideo(video, opts = {}) {
      if (!video) return;
      setupLoopVideo(video, opts.preload || 'auto');
      video.dataset.wantPlay = '1';
      try { video.playbackRate = 1; } catch (_) {}
      if (opts.reset) {
        try { video.currentTime = 0; } catch (_) {}
      }
      try {
        if (video.readyState < 3) video.load?.();
      } catch (_) {}
      const attemptPlay = () => {
        try {
          const playPromise = video.play?.();
          if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
        } catch (_) {}
      };
      attemptPlay();
      clearTimeout(video._retryPlayT1);
      clearTimeout(video._retryPlayT2);
      clearTimeout(video._retryPlayT3);
      clearTimeout(video._retryPlayT4);
      video._retryPlayT1 = setTimeout(attemptPlay, 60);
      video._retryPlayT2 = setTimeout(attemptPlay, 180);
      video._retryPlayT3 = setTimeout(attemptPlay, 420);
      video._retryPlayT4 = setTimeout(attemptPlay, 900);
    }

    function stopLoopVideo(video, opts = {}) {
      if (!video) return;
      video.dataset.wantPlay = '0';
      clearTimeout(video._retryPlayT1);
      clearTimeout(video._retryPlayT2);
      clearTimeout(video._retryPlayT3);
      clearTimeout(video._retryPlayT4);
      try { video.pause?.(); } catch (_) {}
      if (opts.reset === true) {
        try { video.currentTime = 0; } catch (_) {}
      }
    }

    function primeBigBuzzVisuals() {
      if (dom.boardBgVideoHype) {
        applyElementSource(dom.boardBgVideoHype, resolveVideoAsset(dom.boardBgVideoHype), 'auto');
        setupLoopVideo(dom.boardBgVideoHype, 'auto');
      }
      if (dom.bgVideoHype) {
        applyElementSource(dom.bgVideoHype, resolveVideoAsset(dom.bgVideoHype), 'auto');
        setupLoopVideo(dom.bgVideoHype, 'auto');
      }
    }

    function ensureAudio(options = null) {
      syncAudioSession(false);
      const requireContext = !!(options && options.requireContext);
      const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
      if (requireContext && !audioCtx && AudioContextCtor) audioCtx = new AudioContextCtor();
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
      allManagedAudioElements().forEach(a => { if (a) a.muted = muted; });
      if (resultStingerAudio) resultStingerAudio.muted = muted;
    }

    function shouldMaintainGameplayBgm() {
      return !!(state.active && !state.finishing && !document.hidden && dom.gameScreen && !dom.gameScreen.classList.contains('hidden') && dom.resultScreen && dom.resultScreen.classList.contains('hidden'));
    }

    function setupBgmElement(audio) {
      if (!audio || audio.dataset.loopGuardReady === '1') return;
      audio.dataset.loopGuardReady = '1';
      try { audio.loop = true; } catch (_) {}
      const retry = () => {
        if (muted || !shouldMaintainGameplayBgm()) return;
        const hyperActive = !!(state.active && state.clipTime > 0);
        const intended = hyperActive ? dom.bgmHyper : dom.bgmNormal;
        if (audio !== intended) return;
        try {
          if (audio.paused) {
            syncAudioSession(false);
            const p = audio.play();
            if (p && typeof p.catch === 'function') p.catch(() => {});
          }
        } catch (_) {}
      };
      try { audio.addEventListener('ended', retry, { passive:true }); } catch (_) {}
      try { audio.addEventListener('stalled', retry, { passive:true }); } catch (_) {}
      try { audio.addEventListener('suspend', retry, { passive:true }); } catch (_) {}
      try { audio.addEventListener('canplay', retry, { passive:true }); } catch (_) {}
      try { audio.addEventListener('loadeddata', retry, { passive:true }); } catch (_) {}
    }

    function maintainBgmPlayback(force = false) {
      if (!dom.bgmNormal || !dom.bgmHyper) return;
      setupBgmElement(dom.bgmNormal);
      setupBgmElement(dom.bgmHyper);
      if (muted || !shouldMaintainGameplayBgm()) {
        try { dom.bgmNormal.pause(); } catch (_) {}
        try { dom.bgmHyper.pause(); } catch (_) {}
        return;
      }
      const hyperActive = !!(state.active && state.clipTime > 0);
      const active = hyperActive ? dom.bgmHyper : dom.bgmNormal;
      const inactive = hyperActive ? dom.bgmNormal : dom.bgmHyper;
      try { inactive.pause(); } catch (_) {}
      try { active.loop = true; } catch (_) {}
      if (force || active.paused) {
        try {
          syncAudioSession(false);
          const p = active.play();
          if (p && typeof p.catch === 'function') p.catch(() => {});
        } catch (_) {}
      }
    }

    function playBgm() {
      persistPlayerName();
      ensureAudio();
      setupBgmElement(dom.bgmNormal);
      setupBgmElement(dom.bgmHyper);
      dom.bgmNormal.volume = muted ? 0 : perfSettings.bgmNormalVolume;
      dom.bgmHyper.volume = muted ? 0 : 0;
      dom.bgmNormal.currentTime = 0;
      dom.bgmHyper.currentTime = 0;
      try { dom.bgmHyper.pause(); } catch (_) {}
      maintainBgmPlayback(true);
      lastHyperBgmActive = false;
    }

    function setHyperMix(strength) {
      clamp(strength, 0, 1);
      const hyperActive = !!(state.active && state.clipTime > 0);
      if (hyperActive !== lastHyperBgmActive) {
        if (hyperActive) {
          try { dom.bgmNormal.pause(); } catch (_) {}
          try { dom.bgmHyper.currentTime = 0; } catch (_) {}
        } else {
          try { dom.bgmHyper.pause(); } catch (_) {}
        }
      }
      lastHyperBgmActive = hyperActive;
      dom.bgmNormal.volume = muted ? 0 : (hyperActive ? 0 : perfSettings.bgmNormalVolume);
      dom.bgmHyper.volume = muted ? 0 : (hyperActive ? perfSettings.bgmHyperVolume : 0);
      maintainBgmPlayback(false);
    }



    function currentBackgroundMode() {
      if (titleBackgroundActive) return 'title';
      if (state.active && state.clipTime > 0) return 'bigbuzz';
      return 'gameplay';
    }

    function pauseBackgroundMedia(reset = false) {
      if (dom.boardBgVideoHype) stopLoopVideo(dom.boardBgVideoHype, { reset });
    }

    function updateBackgroundState(force = false) {
      const mode = currentBackgroundMode();
      const previousMode = lastBackgroundMode;
      if (!force && mode === previousMode) return;
      lastBackgroundMode = mode;
      const hype = mode === 'bigbuzz';
      const allowOuterHypeVideo = false;
      dom.gameScreen?.classList.toggle('bigbuzz', hype);
      dom.gameShell?.classList.toggle('bigbuzz', hype);
      if (dom.boardBgVideoHype) {
        dom.boardBgVideoHype.style.opacity = hype ? '1' : '0';
        dom.boardBgVideoHype.style.visibility = hype ? 'visible' : 'hidden';
        dom.boardBgVideoHype.style.display = 'block';
      }
      if (dom.bgVideoHype) {
        dom.bgVideoHype.style.opacity = (hype && allowOuterHypeVideo) ? '1' : '0';
        dom.bgVideoHype.style.visibility = (hype && allowOuterHypeVideo) ? 'visible' : 'hidden';
        dom.bgVideoHype.style.display = allowOuterHypeVideo ? 'block' : 'none';
      }
      if (mode === 'title') {
        if (dom.boardBgVideoHype) stopLoopVideo(dom.boardBgVideoHype, { reset:false });
        if (dom.bgVideoHype) stopLoopVideo(dom.bgVideoHype, { reset:false });
      } else if (mode === 'bigbuzz') {
        primeBigBuzzVisuals();
        if (dom.boardBgVideoHype) {
          applyElementSource(dom.boardBgVideoHype, resolveVideoAsset(dom.boardBgVideoHype), 'auto');
          setupLoopVideo(dom.boardBgVideoHype, 'auto');
          playLoopVideo(dom.boardBgVideoHype, { reset:previousMode !== 'bigbuzz', preload:'auto' });
          setTimeout(() => playLoopVideo(dom.boardBgVideoHype, { preload:'auto' }), 120);
          setTimeout(() => playLoopVideo(dom.boardBgVideoHype, { preload:'auto' }), 420);
        }
        if (dom.bgVideoHype) {
          if (allowOuterHypeVideo) {
            applyElementSource(dom.bgVideoHype, resolveVideoAsset(dom.bgVideoHype), 'auto');
            setupLoopVideo(dom.bgVideoHype, 'auto');
            playLoopVideo(dom.bgVideoHype, { reset:previousMode !== 'bigbuzz', preload:'auto' });
            setTimeout(() => playLoopVideo(dom.bgVideoHype, { preload:'auto' }), 120);
            setTimeout(() => playLoopVideo(dom.bgVideoHype, { preload:'auto' }), 420);
          } else {
            stopLoopVideo(dom.bgVideoHype, { reset:false });
            try { dom.bgVideoHype.pause?.(); } catch (_) {}
          }
        }
      } else {
        if (dom.boardBgVideoHype) stopLoopVideo(dom.boardBgVideoHype, { reset:false });
        if (dom.bgVideoHype) stopLoopVideo(dom.bgVideoHype, { reset:false });
      }
      state.backgroundWatchdogTimer = 0;
      lastBigBuzzVisualActive = hype;
    }

    function backgroundWatchdog(dt = 0) {
      state.backgroundWatchdogTimer = (state.backgroundWatchdogTimer || 0) + dt;
      if (state.backgroundWatchdogTimer < perfSettings.backgroundWatchdogInterval) return;
      state.backgroundWatchdogTimer = 0;
      if (document.hidden || state.paused) return;
      const mode = currentBackgroundMode();
      if (mode === 'bigbuzz') {
        if (dom.boardBgVideoHype?.paused) playLoopVideo(dom.boardBgVideoHype, { preload:'auto' });
      }
    }

    function setTitleBackgroundActive(active = true) {
      titleBackgroundActive = !!active;
      if (!active) { /* delayed bigbuzz video setup */ }
      state.lastFullGroupScanAt = 0;
      updateBackgroundState(true);
    }

    function avatarMoodForVoiceKind(kind = 'calm') {
      const map = {
        start:'focus',
        calm:'normal',
        focus:'focus',
        warning:'warning',
        clear:'normal',
        chain:'hype',
        hype:'hype',
        fire:'panic',
        apology_ready:'apology',
        apology_fire:'apology',
        rush:'focus',
        jack:'hype',
        big:'hype',
        top:'panic',
        win:'win',
        lose:'yami'
      };
      return map[kind] || 'normal';
    }


    function applyVoiceAvatar(kind = 'calm') {
      try {
        const mood = avatarMoodForVoiceKind(kind);
        avatarLockMood = mood;
        avatarLockUntil = performance.now() + 3200;
        requestAnimationFrame(() => {
          try { setAvatarVisual(mood, { force:true, cycle:true }); } catch (_) {}
        });
      } catch (_) {}
    }

    function getVoiceAudio(path) {
      if (!path) return null;
      if (!voiceCache.has(path)) {
        const resolved = resolveAudioAsset(path);
        const audio = new Audio(resolved);
        audio.preload = 'metadata';
        audio.dataset.path = path;
        audio.addEventListener('error', () => {
          audio.dataset.failed = '1';
        }, { once:true });
        voiceCache.set(path, audio);
      }
      return voiceCache.get(path);
    }

    function pickRandomVoicePath(kind, pool = []) {
      const list = Array.isArray(pool) ? pool.filter(Boolean) : [];
      if (!list.length) return '';
      if (list.length === 1) {
        lastVoicePathByKind[kind] = list[0];
        return list[0];
      }
      const last = lastVoicePathByKind[kind] || '';
      const candidates = list.filter(path => path !== last);
      const source = candidates.length ? candidates : list;
      const chosen = source[Math.floor(rand() * source.length)] || list[0] || '';
      lastVoicePathByKind[kind] = chosen;
      return chosen;
    }

    function tryPlayVoicePath(path, kind = 'calm', volume = 0.72) {
      const audio = getVoiceAudio(path);
      applyVoiceSubtitle(path);
      if (!audio || muted || audio.dataset.failed === '1') return !!voiceTextForPath(path);
      stopAllVoiceAudio();
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (_) {}
      audio.volume = volume;
      syncAudioSession(false);
      audio.play().catch(() => {});
      return true;
    }

    function playVoice(kind) {
      const pool = voicePools[kind] || [];
      const chosen = pickRandomVoicePath(kind, pool);
      if (chosen) return tryPlayVoicePath(chosen, kind, kind === 'lose' ? 0.84 : 0.72);
      const map = { start:dom.voiceStart, fire:dom.voiceFire, win:dom.voiceWin, lose:dom.voiceLose };
      const audio = map[kind];
      applyVoiceSubtitle(audio?.currentSrc || audio?.src || '');
      if (!audio || muted) return !!voiceTextForPath(audio?.currentSrc || audio?.src || '');
      stopAllVoiceAudio();
      audio.currentTime = 0;
      audio.volume = kind === 'lose' ? 0.84 : 0.72;
      syncAudioSession(false);
      audio.play().catch(() => {});
      return true;
    }

    function stopResultBgm() {
      [dom.resultBgmWin, dom.resultBgmLose].filter(Boolean).forEach(audio => {
        audio.dataset.wantPlay = '0';
      });
      [dom.resultBgmWin, dom.resultBgmLose, resultStingerAudio].filter(Boolean).forEach(audio => {
        try { audio.pause(); } catch (_) {}
        try { audio.currentTime = 0; } catch (_) {}
      });
      resultStingerAudio = null;
    }

    function playResultBgm(winLike = false) {
      stopResultBgm();
      const audio = resultBgmElement(winLike);
      if (!audio) return false;
      resultStingerAudio = audio;
      audio.dataset.wantPlay = '1';
      try { audio.loop = true; } catch (_) {}
      try { audio.currentTime = 0; } catch (_) {}
      try { audio.volume = muted ? 0 : 0.62; } catch (_) {}
      try { audio.muted = muted; } catch (_) {}
      syncAudioSession(false);
      const attemptPlay = () => {
        if (audio.dataset.wantPlay !== '1') return;
        if (dom.resultScreen?.classList.contains('hidden')) return;
        try {
          syncAudioSession(false);
          const p = audio.play?.();
          if (p && typeof p.catch === 'function') p.catch(() => {});
        } catch (_) {}
      };
      attemptPlay();
      setTimeout(attemptPlay, 60);
      setTimeout(attemptPlay, 180);
      return true;
    }

    function maybeAmbientVoice(kind = 'calm', gapSeconds = 16) {
      const now = performance.now();
      if (now < nextAmbientVoiceAt) return false;
      const played = triggerVoiceCue(kind);
      if (played) nextAmbientVoiceAt = now + gapSeconds * 1000;
      return played;
    }

    function showBigBuzzBanner(text = '大バズリ!!', sub = '2こで消える') {
      if (!dom.bigBuzzBanner) return;
      const title = dom.bigBuzzBanner.querySelector('.title');
      const subtitle = dom.bigBuzzBanner.querySelector('.sub');
      if (title) title.textContent = text;
      if (subtitle) subtitle.textContent = sub;
      dom.bigBuzzBanner.classList.remove('show');
      void dom.bigBuzzBanner.offsetWidth;
      dom.bigBuzzBanner.classList.add('show');
      clearTimeout(bigBuzzBannerTimer);
      bigBuzzBannerTimer = setTimeout(() => dom.bigBuzzBanner?.classList.remove('show'), 3920);
    }

    function triggerVoiceCue(kind, tier = 1, opts = {}) {
      const now = performance.now();
      const force = !!opts.force;
      const cooldownMap = { clear:620, chain:980, hype:1200, warning:1400, fire:1500, apology_ready:1200, apology_fire:1400, rush:1100, jack:1200, big:1200, focus:900, top:1100, win:1400, lose:1400, start:2800, default:900 };
      if (!force && now - lastVoiceAt < 380) return false;
      const slot = kind in voiceCooldowns ? kind : 'default';
      if (!force && voiceCooldowns[slot] > now) return false;
      const pool = voicePools[kind] || [];
      let variants = pool.slice();
      if (kind === 'chain') {
        variants = tier >= 5 ? pool.slice(3) : (tier >= 4 ? pool.slice(2) : (tier >= 3 ? pool.slice(1, 3) : pool.slice(0, 1)));
      } else if (kind === 'clear') {
        variants = tier >= 4 ? pool.slice(1) : pool.slice(0, 2);
      } else if (kind === 'hype') {
        variants = tier >= 4 ? pool.slice(1) : pool.slice();
      }
      const chosen = pickRandomVoicePath(kind, variants);
      let played = false;
      if (chosen) {
        played = tryPlayVoicePath(chosen, kind, kind === 'chain' ? 0.84 : (kind === 'lose' ? 0.84 : 0.72));
      }
      if (!played) {
        if (kind === 'warning') played = playVoice('fire');
        else if (kind === 'hype' || kind === 'chain') played = playVoice('win');
        else if (kind === 'clear') played = playVoice('start');
        else if (kind === 'fire') played = playVoice('fire');
        else played = playVoice(kind);
      }
      if (played) {
        applyVoiceAvatar(kind);
        lastVoiceAt = now;
        voiceCooldowns[slot] = now + (cooldownMap[slot] || 900);
        if (kind === 'start') startupVoiceLockUntil = now + 3200;
      }
      return played;
    }


    function sfxPolyphony(kind = '') {
      if (kind === 'clear') return 5;
      if (kind === 'big') return 4;
      if (kind === 'drop') return 4;
      if (kind.startsWith('chain')) return 4;
      if (kind === 'buzz_clear' || kind === 'bomb_clear' || kind === 'fire_start' || kind === 'fire_clear') return 3;
      return 2;
    }

    function getSfxAudio(path, polyphony = 2) {
      if (!path) return [];
      const desired = Math.max(1, Math.min(6, Math.floor(polyphony || 1)));
      if (!sfxCache.has(path)) {
        sfxCache.set(path, []);
      }
      const pool = sfxCache.get(path);
      if (pool.length < desired) {
        const resolved = resolveAudioAsset(path);
        while (pool.length < desired) {
          const audio = new Audio(resolved);
          audio.preload = 'metadata';
          audio.addEventListener('error', () => { audio.dataset.failed = '1'; }, { once:true });
          pool.push(audio);
        }
      }
      return pool;
    }

    function pickSfxAudio(path, kind = '') {
      const pool = getSfxAudio(path, sfxPolyphony(kind));
      if (!pool.length) return null;
      const available = pool.find(audio => {
        if (audio.dataset.failed === '1') return false;
        if (audio.paused || audio.ended) return true;
        const duration = Number(audio.duration || 0);
        return duration > 0 && audio.currentTime >= Math.max(0, duration - 0.045);
      });
      if (available) return available;
      const cursor = sfxPoolCursor.get(path) || 0;
      const chosen = pool[cursor % pool.length] || pool[0];
      sfxPoolCursor.set(path, (cursor + 1) % Math.max(1, pool.length));
      return chosen;
    }

    function playAssetSfx(kind, volume = 0.72) {
      let path = sfxFileMap[kind] || null;
      if (!path && kind === 'chain') path = sfxFileMap.chain_2;
      const audio = pickSfxAudio(path, kind);
      if (!audio || muted || audio.dataset.failed === '1') return false;
      try {
        audio.pause();
        audio.currentTime = 0;
        audio.playbackRate = 1;
        audio.preservesPitch = true;
      } catch (_) {}
      audio.volume = clamp(volume, 0, 1);
      syncAudioSession(false);
      audio.play().catch(() => {});
      if (kind === 'clear' || kind === 'big' || kind === 'chain' || kind === 'chain_2' || kind === 'chain_3' || kind === 'chain_4' || kind === 'chain_5' || kind === 'chain_6' || kind === 'chain_red' || kind === 'bomb_clear' || kind === 'buzz_clear' || kind === 'fire_clear') {
        lastClearLikeSfxAt = performance.now();
      }
      return true;
    }

    function playTrendShiftSfxDeferred(volume = 0.92) {
      clearTimeout(trendShiftSfxTimer);
      return false;
    }

    function playChainTierSfx(chainTier = 2, volume = 0.9) {
      const tier = Math.max(2, Math.floor(chainTier || 2));
      const key = tier >= 7 ? 'chain_red' : `chain_${Math.min(6, tier)}`;
      return playAssetSfx(key, volume);
    }

    function hasLiveFire() {
      return worldBodiesByType('fire').some(body => state.liveBodyIds?.has(body.id) && !body.plugin?.pendingRemoval);
    }

    function isBurstButtonVisible() {
      if (!dom.burstBtn) return false;
      try {
        const style = window.getComputedStyle(dom.burstBtn);
        return style.display !== 'none' && style.visibility !== 'hidden';
      } catch (_) {
        return true;
      }
    }

    function canUseBurstHelp() {
      return !!(state.active && !state.paused && state.fireMode > 0 && hasLiveFire() && state.fireCooldown <= 0.05);
    }

    function handleFireResolved(reason = 'clear') {
      if (fireClearCueLatched) return false;
      if (hasLiveFire()) return false;
      fireClearCueLatched = true;
      state.fireMode = 0;
      dom.dangerFog.classList.remove('show');
      playAssetSfx('fire_clear', reason === 'help' ? 0.98 : 0.92);
      setCaption('炎はおさまったよ。まだ立て直せる！', 1.7);
      return true;
    }

    function updateBurstReadiness() {
      const ready = canUseBurstHelp();
      state.buzzReady = ready;
      if (dom.burstBtn) {
        dom.burstBtn.classList.toggle('ready', ready);
        setBurstButtonLabel(ready ? 'ready' : 'default');
      }
      if (ready && !helpReadySfxLatched) {
        helpReadySfxLatched = true;
        if (isBurstButtonVisible()) {
          flashBurstButton();
          playAssetSfx('ready', 0.86);
          triggerVoiceCue('apology_ready', 1);
          setCaption('おたすけ準備OK。炎を3〜5こだけ消せる。', 1.7);
        }
      } else if (!ready) {
        helpReadySfxLatched = false;
      }
      return ready;
    }

    function sfx(type, intensity = 1) {
      if (muted) return;
      persistPlayerName();
      ensureAudio({ requireContext:true });
      if (!audioCtx) return;
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
      } else if (type === 'chain') {
        const tier = Math.max(1, intensity);
        oscA.frequency.setValueAtTime(540 + tier * 52, now); oscA.frequency.exponentialRampToValueAtTime(1020 + tier * 120, now + 0.18);
        oscB.frequency.setValueAtTime(760 + tier * 46, now); oscB.frequency.exponentialRampToValueAtTime(1380 + tier * 150, now + 0.22);
      }
      oscA.connect(gain); oscB.connect(gain);
      oscA.start(now); oscB.start(now);
      oscA.stop(now + 0.34); oscB.stop(now + 0.34);
      if (type === 'clear' || type === 'big' || type === 'chain') {
        dom.audioMerge.currentTime = 0;
        const mergeBase = type === 'big' ? 0.72 : (type === 'chain' ? 0.58 : 0.48);
        dom.audioMerge.volume = clamp(mergeBase * intensity, 0, 1);
        dom.audioMerge.play().catch(() => {});
      }
    }

    function resizeCanvas() {
      if (!dom.board) return;
      const info = refreshBoardLayoutCache(true);
      const fxScale = clamp(Number(perfSettings.fxResolutionScale) || 1, 0.28, 1);
      const fxWidth = Math.max(1, Math.round(info.width * fxScale));
      const fxHeight = Math.max(1, Math.round(info.height * fxScale));
      state.fxLogicalWidth = info.width;
      state.fxLogicalHeight = info.height;
      dom.particleCanvas.width = fxWidth;
      dom.particleCanvas.height = fxHeight;
      dom.particleCanvas.style.width = `${info.width}px`;
      dom.particleCanvas.style.height = `${info.height}px`;
      dom.fxCanvas.width = fxWidth;
      dom.fxCanvas.height = fxHeight;
      dom.fxCanvas.style.width = `${info.width}px`;
      dom.fxCanvas.style.height = `${info.height}px`;
      dom.mergeCanvas.width = info.width;
      dom.mergeCanvas.height = info.height;
      particleCtx = dom.particleCanvas.getContext('2d', { alpha:true, desynchronized:true });
      fxCtx = dom.fxCanvas.getContext('2d', { alpha:true, desynchronized:true });
      mergeCtx = dom.mergeCanvas.getContext('2d', { alpha:true, desynchronized:true });
      if (particleCtx) particleCtx.setTransform(fxScale, 0, 0, fxScale, 0, 0);
      if (fxCtx) fxCtx.setTransform(fxScale, 0, 0, fxScale, 0, 0);
      if (render) {
        render.canvas.width = info.width;
        render.canvas.height = info.height;
        render.options.width = info.width;
        render.options.height = info.height;
      }
      if (engine) updateWorldBounds();
      state.forceFullVisualSync = true;
      hoverX = info.width / 2;
      renderPreview();
    }

    function currentTrend() { return CONTENTS[state.trendIndex]; }
    function nextTrend() { ensureUpcomingTrendQueue(7); return CONTENTS[state.nextTrendIndex]; }
    function futureTrend() { ensureUpcomingTrendQueue(7); return CONTENTS[state.futureTrendIndex]; }
    function trendDuration() { return Number.POSITIVE_INFINITY; }
    function ensureUpcomingTrendQueue(min = 7) {
      state.upcomingTrendQueue = Array.isArray(state.upcomingTrendQueue) ? state.upcomingTrendQueue.slice(0, 14) : [];
      while (state.upcomingTrendQueue.length < min) {
        const tail = state.upcomingTrendQueue.slice(-2);
        const nextIdx = pickTrendExcluding(state.trendIndex, ...tail);
        state.upcomingTrendQueue.push(nextIdx);
      }
      state.nextTrendIndex = state.upcomingTrendQueue[0] ?? pickTrendExcluding(state.trendIndex);
      state.futureTrendIndex = state.upcomingTrendQueue[1] ?? pickTrendExcluding(state.trendIndex, state.nextTrendIndex);
    }

    function shiftTrendQueue() {
      ensureUpcomingTrendQueue(7);
      const previousTrendIndex = state.trendIndex;
      state.trendIndex = state.upcomingTrendQueue.shift() ?? pickTrendExcluding(state.trendIndex);
      ensureUpcomingTrendQueue(7);
      setTrend(state.trendIndex, true, previousTrendIndex);
    }

    function refreshTrendForecastUi() {
      ensureUpcomingTrendQueue(7);
      if (!Array.isArray(dom.trendForecastSlots)) return;
      const ordered = state.upcomingTrendQueue.slice(0, 6).reverse();
      const signature = ordered.join(',');
      if (signature === lastTrendForecastSignature) return;
      lastTrendForecastSignature = signature;
      dom.trendForecastSlots.forEach((slot, slotIndex) => {
        const trendIndex = ordered[slotIndex];
        const info = CONTENTS[trendIndex] || CONTENTS[0];
        const img = slot._img;
        const label = slot._label;
        const name = slot._name;
        const isNext = slotIndex === ordered.length - 1;
        const uiKey = `${trendIndex}|${isNext ? 1 : 0}`;
        if (slot.dataset.uiKey === uiKey) return;
        slot.dataset.uiKey = uiKey;
        slot.classList.toggle('next', isNext);
        if (img && img.getAttribute('src') !== info.img) img.src = info.img;
        if (img && img.alt !== info.name) img.alt = info.name;
        if (name && name.textContent !== info.name) name.textContent = info.name;
        if (name && name.style.color !== (info.accent || '#ece4f7')) name.style.color = info.accent || '#ece4f7';
        const labelText = isNext ? '次のトレンド' : '';
        if (label && label.textContent !== labelText) label.textContent = labelText;
      });
    }
    function pickTrendExcluding(...exclude) {
      const deny = new Set(exclude);
      const choices = CONTENTS.map((_, i) => i).filter(i => !deny.has(i));
      if (!choices.length) return 0;
      return choices[Math.floor(gameRand() * choices.length)];
    }
    function setCaption(text, seconds = 2) {
      dom.captionText.textContent = text;
      state.showCaptionTimer = seconds;
    }

    function normalizeSpeechText(text) {
      return String(text || '').replace(/。+$/u, '').trim();
    }

    function isVoiceBubbleLocked() {
      return (state.voiceSubtitleTimer || 0) > 0.05;
    }

    function refreshSpeechBubble() {
      if (!dom.speechBubble || !dom.speechText) return;
      const text = normalizeSpeechText(state.speechBubbleText || '');
      const visible = !!(state.active && text && (state.speechBubbleTimer || 0) > 0);
      if (dom.speechText.textContent !== text) dom.speechText.textContent = text;
      dom.speechBubble.classList.toggle('show', visible);
      dom.speechBubble.setAttribute('aria-hidden', visible ? 'false' : 'true');
    }

    function showSpeechBubble(text, hold = 3, opts = {}) {
      const next = normalizeSpeechText(text);
      const force = !!opts.force;
      const isVoiceLine = !!opts.voice;
      if (!isVoiceLine) return false;
      if (!force && isVoiceBubbleLocked()) return false;
      state.speechBubbleText = next;
      state.speechBubbleTimer = next ? clamp(Number(hold) || 3, 2.8, 3.2) : 0;
      refreshSpeechBubble();
      return true;
    }

    function setMoodLabel(text) {
      return false;
    }

    function pickAmbientLine(pool, hold = 2.8) {
      const nextLine = choice(pool);
      state.ambientMoodLine = nextLine;
      state.ambientMoodTimer = hold;
      showSpeechBubble(nextLine, hold);
    }
    function say(mode, hold = 2.4) {
      const pool = PLAYER_LINES[mode] || PLAYER_LINES.calm;
      state.currentLine = choice(pool);
      state.moodTimer = hold;
      if (!isVoiceBubbleLocked()) showSpeechBubble(state.currentLine, hold);
    }

    function updateMoodText(dt = 0) {
      state.voiceSubtitleTimer = Math.max(0, (state.voiceSubtitleTimer || 0) - dt);
      if (state.voiceSubtitleTimer <= 0) state.lastVoiceText = '';
      if (state.moodTimer > 0) state.moodTimer = Math.max(0, state.moodTimer - dt);
      state.speechBubbleTimer = Math.max(0, (state.speechBubbleTimer || 0) - dt);
      if (state.speechBubbleTimer <= 0) state.speechBubbleText = '';
      refreshSpeechBubble();
    }

    function updateSeedLabels() {
      const seedTxt = `#${String(state.seed)}`;
      dom.seedView.textContent = seedTxt;
      const top = crownTargetScore(state.seed);
      const gap = Math.max(0, top - Math.floor(state.score || 0));
      dom.bestMini.textContent = top ? (gap <= 0 ? 'TOP' : fmt(gap)) : 'TOP';
      renderDailyBoard(dom.dailyBoard);
      renderDailyBoard(dom.resultDailyBoard);
    }


    function updatePinCommentUi() {
      if (!dom.pinComment) return;
      dom.pinText.textContent = state.pinText || '雑談 x3 で加点';
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
        pin = { icon:'🎬', cls:'super', min:clipMin, bonus:2100 + Math.floor(gameRand() * 560), text:`${trend.name} x${clipMin} で大バズり`, target: state.trendIndex };
      } else if (state.fireMode > 0) {
        pin = { icon:'🚨', cls:'low', min:3, bonus:1080, text:`${trend.name} x3 で立て直し`, target: state.trendIndex };
      } else {
        const nextFocusRate = !state.trendWarning ? 0 : (nextPreviewLen >= 3 ? 0.92 : (nextPreviewLen >= 2 ? 0.82 : 0.62));
        const nextFocus = state.trendWarning && gameRand() < nextFocusRate;
        if (nextFocus) {
          const next = nextTrend();
          const pool = [
            { icon:'🌊', cls:'next', min:3, bonus:1280, text:`次 ${next.name} x3`, target: state.nextTrendIndex },
            { icon:'🛰️', cls:'next', min:4, bonus:1760, text:`次 ${next.name} x4`, target: state.nextTrendIndex },
            { icon:'🚀', cls:'next', min:Math.min(5, Math.max(3, nextPreviewLen + 1)), bonus:1960 + Math.max(0, nextPreviewLen - 1) * 220, text:`次 ${next.name} を先取り`, target: state.nextTrendIndex }
          ];
          pin = choiceGame(pool);
        } else {
          const pool = [
            { icon:'📌', cls:'hot', min:3, bonus:920, text:`${trend.name} x3 で加点`, target: state.trendIndex },
            { icon:'💬', cls:'hot', min:3, bonus:1040, text:`いまは ${trend.name}`, target: state.trendIndex },
            { icon:'⚡', cls:'hot', min:4, bonus:1640, text:`${trend.name} x4 で伸ばす`, target: state.trendIndex },
            { icon:'✨', cls:'super', min:5, bonus:2580, text:`${trend.name} x5 で決める`, target: state.trendIndex }
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

    function setTrend(index, withFlash = false, previousIndex = null, opts = {}) {
      if (withFlash && state.runTime > 0 && !state.switchCleared) {
        if (state.jackChain > 0) {
          popText(dom.board.clientWidth / 2, 126, '先読みおわり', '#ff8da5', 18);
        }
        state.jackChain = 0;
      }
      state.switchCleared = false;
      state.trendIndex = index;
      state.trendTotalTime = 1;
      state.trendTimer = 1;
      state.trendWarning = false;
      state.recentSwitchBonus = 0;
      state.rushWindow = 0;
      const suppressSpeech = !!opts.suppressSpeech;
      const suppressVoice = !!opts.suppressVoice;
      const trend = currentTrend();
      dom.trendThumb.src = trend.img;
      dom.trendName.textContent = trend.name;
      dom.trendName.style.color = trend.accent;
      dom.trendCopy.textContent = '';
      if (dom.trendProgressFill) dom.trendProgressFill.style.width = '100%';
      refreshTrendForecastUi();
      dom.nextTrendThumb.src = nextTrend().img;
      dom.nextTrendName.textContent = nextTrend().name;
      dom.nextTrendName.style.color = nextTrend().accent;
      if (dom.nextSwitchCopy) dom.nextSwitchCopy.textContent = '';
      dom.futureTrendThumb.src = futureTrend().img;
      dom.futureTrendName.textContent = futureTrend().name;
      dom.futureTrendName.style.color = futureTrend().accent;
      dom.centerTop?.classList.remove('warning');
      dom.nextBlock?.classList.remove('warning');
      setCaption(`いまは『${trend.name}』を3こ以上で消そう。次のお題は上の並びで見られるよ。`, 2.8);
      spawnComment(true, null, 'hot');
      if (!suppressSpeech) say(withFlash ? 'switch' : 'focus', 2.4);
      if (!suppressVoice) triggerVoiceCue(withFlash ? 'rush' : 'focus');
      rollPinnedComment(withFlash ? 'switch' : 'normal');
      if (withFlash) {
        spawnComment(false, `今は${trend.name}の準備が大事`, 'super', '🚀');
        if (!suppressSpeech) say('rush', 2.2);
      }
      if (withFlash) {
        flashScreen(trend.accent);
        playTrendShiftSfxDeferred(0.92);
        showTrendShiftBanner('shift', previousIndex == null ? index : previousIndex, index, state.futureTrendIndex);
      }
      state.setupCarryLen = 0;
      state.shiftGlowIds = [];
      state.shiftGlowTimer = 0;
      if (withFlash && engine) {
        const groups = scanAllClearableGroups();
        const preloadGroup = groups.sort((a, b) => b.length - a.length)[0] || null;
        const preloadLen = preloadGroup ? preloadGroup.length : 0;
        if (preloadLen >= 2) {
          state.setupCarryLen = preloadLen;
          state.recentSwitchBonus = 4.8;
          state.rushWindow = Math.max(state.rushWindow, preloadLen >= 3 ? 8.8 : 7.8);
          state.shiftGlowIds = preloadGroup.map(body => body.id);
          state.shiftGlowTimer = 1.2;
          popText(dom.board.clientWidth / 2, 154, preloadLen >= 3 ? '先読みOK!' : '次の準備OK', '#8ef8ff', preloadLen >= 3 ? 26 : 20);
          spawnComment(false, preloadLen >= 3 ? `もう${trend.name}がつながってる！` : `次のお題の準備ができてる`, 'super', '🌊');
          addRing(dom.board.clientWidth / 2, 148, '#8ef8ff', 18, 220);
          say('rush', 1.7);
        }
      }
    }

    function dropRadiusFor(index = state.selectedDropIndex ?? state.queue?.[0] ?? 0) {
      return contentBodyRadius(index, false);
    }

    function findSafeDropX(targetX, radius, spawnY = radius + getBoardMetrics().spawnInset) {
      const boardW = boardLogicalRect().width;
      const { sideInset, fullLineY } = getBoardMetrics();
      const minX = radius + sideInset;
      const maxX = boardW - radius - sideInset;
      const desired = clamp(targetX, minX, maxX);
      const spawnBandBottom = Math.max(fullLineY - 6, spawnY + radius + 18);
      const blockers = worldBodies().filter(body =>
        performance.now() - (body.spawnAt || 0) > 90 &&
        (body.position.y - body.circleRadius) < spawnBandBottom
      );
      if (!blockers.length) return { x:desired, shifted:false, clear:true };
      const isClear = (x) => {
        for (const body of blockers) {
          const dx = body.position.x - x;
          const dy = body.position.y - spawnY;
          const rr = body.circleRadius + radius + 6;
          if (dx * dx + dy * dy < rr * rr) return false;
        }
        return true;
      };
      if (isClear(desired)) return { x:desired, shifted:false, clear:true };
      const step = Math.max(10, Math.floor(radius * 0.52));
      const tries = Math.ceil((maxX - minX) / step);
      for (let i = 1; i <= tries; i++) {
        const left = desired - step * i;
        const right = desired + step * i;
        if (left >= minX && isClear(left)) return { x:left, shifted:true, clear:true };
        if (right <= maxX && isClear(right)) return { x:right, shifted:true, clear:true };
      }
      return { x:desired, shifted:false, clear:false };
    }

    function queueRoll() {
      const bigBuzz = state.clipTime > 0;
      const weights = CONTENTS.map((_, i) => contentSpawnWeight(i));
      if (Number.isInteger(state.trendIndex)) weights[state.trendIndex] *= bigBuzz ? 6.2 : 2.35;
      if (Number.isInteger(state.nextTrendIndex)) weights[state.nextTrendIndex] *= bigBuzz ? 2.2 : 1.7;
      if (Number.isInteger(state.futureTrendIndex)) weights[state.futureTrendIndex] *= 1.08;
      return weightedContentPick(weights);
    }

    function ensureQueueLength(min = 3) {
      const idx = clamp(Math.floor(state.selectedDropIndex || 0), 0, CONTENTS.length - 1);
      state.queue = Array.from({ length:Math.max(3, min) }, () => idx);
    }

    function updateDropSelectorUi() {
      dom.dropSelectorButtons?.forEach(btn => {
        const idx = Number(btn.dataset.dropIndex || 0);
        const info = CONTENTS[idx] || CONTENTS[0];
        const accent = info?.accent || '#ffffff';
        if (btn.style.getPropertyValue('--drop-accent') !== accent) btn.style.setProperty('--drop-accent', accent);
        const label = btn.querySelector('.lbl');
        if (label && label.style.color !== accent) label.style.color = accent;
      });
      const selected = clamp(Math.floor(state.selectedDropIndex || 0), 0, CONTENTS.length - 1);
      dom.dropSelectorButtons?.forEach(btn => btn.classList.toggle('active', Number(btn.dataset.dropIndex || 0) === selected));
      lastDropSelectorIndex = selected;
    }

    function setSelectedDropIndex(index, opts = {}) {
      const idx = clamp(Math.floor(index || 0), 0, CONTENTS.length - 1);
      const prev = clamp(Math.floor(state.selectedDropIndex || 0), 0, CONTENTS.length - 1);
      state.selectedDropIndex = idx;
      ensureQueueLength(3);
      refreshQueue();
      renderPreview();
      updateDropSelectorUi();
      if (!opts.silent && idx !== prev) playAssetSfx('ui_item_select', 0.78);
      if (!opts.silent) setCaption(`落とすアイテムを『${CONTENTS[idx].name}』に固定しました。`, 0.8);
    }

    function refreshQueue() {
      ensureQueueLength(3);
      const selected = state.selectedDropIndex ?? 0;
      const q0 = CONTENTS[selected] || CONTENTS[0];
      const signature = String(selected);
      if (signature !== lastQueueSignature) {
        if (dom.previewItem && dom.previewItem.getAttribute('src') !== q0.img) dom.previewItem.src = q0.img;
        if (dom.previewItem && dom.previewItem.alt !== q0.name) dom.previewItem.alt = q0.name;
        if (dom.nextMini1 && dom.nextMini1.getAttribute('src') !== q0.img) dom.nextMini1.src = q0.img;
        if (dom.nextMini1 && dom.nextMini1.alt !== q0.name) dom.nextMini1.alt = q0.name;
        if (dom.nextMini2 && dom.nextMini2.getAttribute('src') !== q0.img) dom.nextMini2.src = q0.img;
        if (dom.nextMini2 && dom.nextMini2.alt !== q0.name) dom.nextMini2.alt = q0.name;
        lastQueueSignature = signature;
      }
      updateDropSelectorUi();
    }

    function renderPreview() {
      const boardW = boardLogicalRect().width;
      const radius = dropRadiusFor();
      const x = clamp(hoverX, radius + 6, boardW - radius - 6);
      const size = visualDiameter(radius, false);
      const metrics = getBoardMetrics();
      const ringSize = Math.round(size + 12);
      const itemSize = Math.max(48, Math.round(size * 0.82));
      const previewTop = Math.max(20, metrics.fullLineY - ringSize - 4);
      lastPreviewCenterX = x;
      lastPreviewCenterY = previewTop + ringSize / 2;
      const previewKey = `${Math.round(x * 10)}|${previewTop}|${ringSize}|${itemSize}`;
      if (previewKey === lastPreviewRenderKey) return;
      lastPreviewRenderKey = previewKey;
      dom.dropGuide.style.left = `${x}px`;
      dom.previewRing.style.left = `${x}px`;
      dom.previewRing.style.top = `${previewTop}px`;
      dom.previewItem.style.width = `${itemSize}px`;
      dom.previewItem.style.height = `${itemSize}px`;
      dom.previewRing.style.width = `${ringSize}px`;
      dom.previewRing.style.height = `${ringSize}px`;
    }

    function hidePreviewForLaunch(duration = 120) {
      if (previewRestoreTimer) clearTimeout(previewRestoreTimer);
      if (dom.previewItem) dom.previewItem.style.opacity = '0';
      if (dom.previewRing) dom.previewRing.style.opacity = '0.16';
      previewRestoreTimer = setTimeout(() => {
        previewRestoreTimer = 0;
        if (dom.previewItem) dom.previewItem.style.opacity = '1';
        if (dom.previewRing) dom.previewRing.style.opacity = '1';
      }, duration);
    }

    function triggerPreviewLaunchFx(color = '#ffffff') {
      if (!dom.previewRing) return;
      hidePreviewForLaunch(140);
      dom.previewRing.style.borderColor = hexToRgba(color, 0.82);
      dom.previewRing.style.boxShadow = `0 0 18px ${hexToRgba(color, 0.26)}, 0 0 34px rgba(255,255,255,.18)`;
      dom.previewRing.classList.remove('launch');
      void dom.previewRing.offsetWidth;
      dom.previewRing.classList.add('launch');
      setTimeout(() => {
        if (!dom.previewRing) return;
        dom.previewRing.classList.remove('launch');
        dom.previewRing.style.borderColor = 'rgba(255,255,255,.3)';
        dom.previewRing.style.boxShadow = '0 0 18px rgba(255,255,255,.12)';
      }, 460);
    }

    function previewLaunchCenter(dropX = hoverX, dropIndex = state.selectedDropIndex ?? 0) {
      const radius = dropRadiusFor(dropIndex);
      const boardW = boardLogicalRect().width;
      const fallbackX = clamp(dropX, radius + 6, boardW - radius - 6);
      if (lastPreviewCenterX > 0 && lastPreviewCenterY > 0) {
        return { x:lastPreviewCenterX, y:lastPreviewCenterY - 15 };
      }
      if (dom.previewRing) {
        const ringH = dom.previewRing.offsetHeight || dom.previewRing.offsetWidth || 0;
        const leftPx = parseFloat(dom.previewRing.style.left || '');
        const topPx = parseFloat(dom.previewRing.style.top || '');
        if (Number.isFinite(leftPx) && Number.isFinite(topPx) && ringH > 0) {
          return {
            x: leftPx,
            y: topPx + ringH / 2 - 15
          };
        }
      }
      const metrics = getBoardMetrics();
      const size = visualDiameter(radius, false);
      const ringSize = Math.round(size + 12);
      const previewTop = Math.max(20, metrics.fullLineY - ringSize - 4);
      return {
        x: fallbackX,
        y: previewTop + ringSize / 2 - 15
      };
    }

    function activateCommentEvent(type = '') {
      if (!type) {
        state.commentEventType = '';
        state.commentEventTimer = 0;
        state.commentEventText = '';
        return;
      }
      const bank = SPECIAL_COMMENT_BANK[type] || [];
      if (!bank.length) return;
      state.commentEventType = type;
      state.commentEventTimer = type === 'anti' ? (5.6 + gameRand() * 1.4) : (5.0 + gameRand() * 1.2);
      state.commentEventText = choice(bank);
      lastCommentSpawnAt = 0;
      spawnComment(false, state.commentEventText, type === 'anti' ? 'low' : 'super', type === 'anti' ? '💢' : '💰');
    }

    function maybeActivateCommentEvent() {
      return false;
    }

    function currentCommentEventMeta() {
      return null;
    }

    function createChatNode(text, cls = '', icon = '💬', username = null, topicInfo = null) {
      const node = document.createElement('div');
      node.className = `rising-chat ${cls}`.trim();
      const fromLeft = rand() < 0.5;
      if (fromLeft) {
        node.style.left = `${2 + rand() * 18}%`;
        node.style.right = 'auto';
      } else {
        node.style.right = `${2 + rand() * 18}%`;
        node.style.left = 'auto';
      }
      node.style.setProperty('--chat-drift', `${fromLeft ? (10 + rand() * 12) : (-10 - rand() * 12)}px`);
      node.style.animationDuration = `${3.8 + rand() * 0.5}s`;
      node.style.setProperty('--rise-distance', `${Math.max(320, (dom.board?.clientHeight || dom.chatLane?.clientHeight || 420) + 96)}px`);
      node.style.zIndex = '18';
      node.style.transform = 'translateZ(0)';

      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.textContent = icon;

      const body = document.createElement('div');
      body.className = 'body';

      const meta = document.createElement('div');
      meta.className = 'meta';

      if (topicInfo && Number.isInteger(topicInfo.index) && CONTENTS[topicInfo.index]) {
        const topic = document.createElement('span');
        topic.className = 'topic';
        topic.textContent = `${topicInfo.mode === 'next' ? 'NEXT' : 'NOW'} ${contentChatIcon(topicInfo.index)} ${CONTENTS[topicInfo.index].name}`;
        topic.style.borderColor = hexToRgba(CONTENTS[topicInfo.index].accent, 0.42);
        meta.appendChild(topic);
      }

      const txt = document.createElement('div');
      txt.className = 'txt';
      txt.textContent = text;

      if (meta.childElementCount) body.appendChild(meta);
      body.appendChild(txt);
      node.appendChild(badge);
      node.appendChild(body);
      node.addEventListener('animationend', () => node.remove(), { once:true });
      return node;
    }

    function spawnComment(forceTrend = false, forcedText = null, forcedClass = '', forcedIcon = null) {
      if (!dom.chatLane) return;
      const now = performance.now();
      const cooldown = (forcedClass === 'super' ? 0.56 : (forcedText ? 0.72 : 0.86)) * (perfSettings.commentCooldownScale || 1);
      if (!forcedText && (perfSettings.commentDropChance || 0) > 0 && rand() < perfSettings.commentDropChance) return;
      if (now - lastCommentSpawnAt < cooldown * 1000) return;
      let text = forcedText || '';
      let cls = forcedClass || '';
      let icon = forcedIcon || contentChatIcon(state.trendIndex);
      let topicInfo = null;
      let specialType = '';
      if (forcedText && forcedClass === 'low' && forcedIcon === '💢') specialType = 'anti';
      else if (forcedText && forcedClass === 'super' && forcedIcon === '💰') specialType = 'superchat';
      const trend = currentTrend();
      const next = nextTrend();
      const stats = state.active && engine ? boardStats() : { pressure:0, clutter:0 };
      const previewLen = biggestPreviewLen();
      const topGap = Math.max(0, crownTargetScore(state.seed) - Math.floor(state.score || 0));
      if (!text) {
        const activeEvent = currentCommentEventMeta();
        if (activeEvent && rand() < 0.82) {
          text = choice(SPECIAL_COMMENT_BANK[state.commentEventType] || [state.commentEventText || '']);
          cls = activeEvent.cls;
          icon = activeEvent.icon;
          topicInfo = null;
          specialType = state.commentEventType;
          state.commentEventText = text;
        } else {
          const picked = pickSituationalComment(forceTrend);
          text = picked.text;
          cls = picked.cls;
          icon = picked.icon;
          topicInfo = picked.topicInfo;
        }
      }
      if (!cls && /スパチャ|投げ|神|クリップ|気持ちいい|当たり|バズ|高評価|おすすめ/.test(text)) cls = 'hot';
      if (/うわ|炎上|燃え|邪魔|危ない|最悪/.test(text)) cls = cls || 'low';
      if (/次は|そろそろ/.test(text)) cls = cls || 'next';
      if (/神回|切り抜き|スパチャ/.test(text)) cls = cls || 'super';
      if (!topicInfo) {
        if (cls === 'next') topicInfo = { index: state.nextTrendIndex, mode: 'next' };
        else if (icon === contentChatIcon(state.trendIndex) || cls === 'hot' || forceTrend) topicInfo = { index: state.trendIndex, mode: 'now' };
      }

      const node = createChatNode(text, cls, icon, null, topicInfo);
      if (specialType === 'anti') node.classList.add('event-anti');
      else if (specialType === 'superchat') node.classList.add('event-superchat');
      const targetLane = specialType ? dom.chatLane : (dom.chatLaneBack || dom.chatLane);
      node.style.zIndex = specialType ? '18' : '8';
      targetLane.appendChild(node);
      lastCommentSpawnAt = now;
      if (specialType) {
        while (dom.chatLane.childNodes.length > 2) dom.chatLane.firstChild.remove();
      } else if (dom.chatLaneBack) {
        while (dom.chatLaneBack.childNodes.length > 3) dom.chatLaneBack.firstChild.remove();
      } else {
        while (dom.chatLane.childNodes.length > 3) dom.chatLane.firstChild.remove();
      }
    }

    function flashScreen(color = '#ffffff') {
      const flashColor = String(color).startsWith('rgb') ? color : `${color}66`;
      dom.globalFlash.style.background = `radial-gradient(circle, ${flashColor}, rgba(255,255,255,0))`;
      dom.globalFlash.classList.add('show');
      setTimeout(() => dom.globalFlash.classList.remove('show'), 120);
    }

    function addParticles(x, y, color, count = 18, spread = 9) {
      const budget = Math.max(0, perfSettings.particleBudget - state.particles.length);
      const safeCount = Math.max(0, Math.min(Math.round(count * perfSettings.particleScale), budget));
      if (!safeCount) return;
      state.fxNeedsClear = true;
      for (let i = 0; i < safeCount; i++) {
        state.particles.push({
          x, y,
          vx:(rand() - 0.5) * spread,
          vy:-2 - rand() * spread * 0.5,
          life:perfSettings.particleLife,
          color,
          size:(3 + rand() * 6) * perfSettings.particleSizeScale
        });
      }
    }

    function addRing(x, y, color, radius = 24, speed = 180) {
      const budget = Math.max(0, perfSettings.ringBudget - state.rings.length);
      if (!budget || (radius < 28 && state.rings.length >= Math.max(3, Math.floor(perfSettings.ringBudget * 0.6)))) return;
      state.fxNeedsClear = true;
      state.rings.push({ x, y, life:1, radius, speed, color });
    }

    function updateFx(dt) {
      if (!particleCtx || !fxCtx) return;
      if (!state.particles.length && !state.rings.length && !state.fxNeedsClear) return;
      particleCtx.clearRect(0, 0, state.fxLogicalWidth || dom.board.clientWidth || 1, state.fxLogicalHeight || dom.board.clientHeight || 1);
      fxCtx.clearRect(0, 0, state.fxLogicalWidth || dom.board.clientWidth || 1, state.fxLogicalHeight || dom.board.clientHeight || 1);
      if (!state.particles.length && !state.rings.length) {
        state.fxNeedsClear = false;
        return;
      }

      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 18 * dt;
        p.life -= dt * perfSettings.particleFadeRate;
        particleCtx.globalAlpha = Math.max(0, p.life);
        particleCtx.fillStyle = p.color;
        particleCtx.shadowBlur = 0;
        particleCtx.shadowColor = 'transparent';
        particleCtx.beginPath();
        particleCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        particleCtx.fill();
        if (p.life <= 0) state.particles.splice(i, 1);
      }
      particleCtx.globalAlpha = 1;
      particleCtx.shadowBlur = 0;
      particleCtx.shadowColor = 'transparent';

      for (let i = state.rings.length - 1; i >= 0; i--) {
        const r = state.rings[i];
        r.life -= dt * perfSettings.particleFadeRate;
        r.radius += r.speed * dt;
        fxCtx.globalAlpha = Math.max(0, r.life * 0.8);
        fxCtx.strokeStyle = r.color;
        fxCtx.lineWidth = 1.6;
        fxCtx.shadowBlur = 0;
        fxCtx.shadowColor = 'transparent';
        fxCtx.beginPath();
        fxCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        fxCtx.stroke();
        if (r.life <= 0) state.rings.splice(i, 1);
      }
      fxCtx.globalAlpha = 1;
      fxCtx.shadowBlur = 0;
      fxCtx.shadowColor = 'transparent';
      state.fxNeedsClear = !!(state.particles.length || state.rings.length);
    }

    function popText(x, y, text, color, size = 26) {
      const now = performance.now();
      if (activePopTextCount >= (perfSettings.popTextMax || 6)) return;
      if (now - lastPopTextAt < (perfSettings.popTextMinGapMs || 0)) return;
      lastPopTextAt = now;
      activePopTextCount += 1;
      const el = document.createElement('div');
      el.className = 'pop-text';
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.color = color;
      el.style.fontSize = `${Math.round(size * (perfSettings.popTextScale || 1))}px`;
      el.textContent = text;
      dom.board.appendChild(el);
      setTimeout(() => {
        activePopTextCount = Math.max(0, activePopTextCount - 1);
        el.remove();
      }, 980);
    }

    const SUPERCHAT_CHAIN_THEME = {
      1:{ border:'#2b7cff', fill:'rgba(43,124,255,.92)', glow:'#7ab5ff', accent:'#eef5ff' },
      2:{ border:'#63e6ff', fill:'rgba(99,230,255,.92)', glow:'#9af1ff', accent:'#effcff' },
      3:{ border:'#58ff8d', fill:'rgba(88,255,141,.90)', glow:'#b7ffd0', accent:'#f4fff7' },
      4:{ border:'#ffe35a', fill:'rgba(255,227,90,.92)', glow:'#fff0a3', accent:'#fffbea' },
      5:{ border:'#ffab47', fill:'rgba(255,171,71,.92)', glow:'#ffd08d', accent:'#fff5ea' },
      6:{ border:'#ff5ce6', fill:'rgba(255,92,230,.92)', glow:'#ffb6f6', accent:'#fff0fe' },
      7:{ border:'#ff4d4d', fill:'rgba(255,77,77,.94)', glow:'#ffb3b3', accent:'#fff3f3' }
    };
    const SUPERCHAT_CHAIN_MESSAGES = ["ありがとう！","今のナイス！","そのままいこう！","見てて楽しい！","いい流れ！","すごく上手！","次も見たい！","がんばれ！"];

    function chainTierPresentation(chainTier = 1, comboCount = 1) {
      const actualChain = Math.max(1, Math.floor(chainTier || 1));
      const tier = actualChain <= 1 ? 1 : clamp(actualChain - 1, 1, 7);
      const comboTier = clamp(Math.max(1, Math.floor(comboCount || 1)), 1, 10);
      const theme = SUPERCHAT_CHAIN_THEME[tier] || SUPERCHAT_CHAIN_THEME[1];
      const redSuper = actualChain >= 8;
      return {
        tier,
        actualChain,
        comboTier,
        theme,
        primary:theme.border,
        secondary:redSuper ? '#fff0a3' : theme.glow,
        amountColor:theme.accent,
        label:redSuper ? '赤スパ!' : `${actualChain}連鎖!`,
        subLabel:redSuper ? 'RED SUPER CHAT!!' : `${actualChain} CHAIN!`,
        bannerScale:0.8 + Math.min(1.08, (tier - 1) * 0.14) + Math.min(0.3, (comboTier - 1) * 0.03),
        amountScale:1 + Math.min(1.42, (tier - 1) * 0.18) + Math.min(0.26, (comboTier - 1) * 0.026),
        messageScale:1 + Math.min(1.1, (tier - 1) * 0.13) + Math.min(0.22, (comboTier - 1) * 0.02),
        particleCount:14 + tier * 3,
        ringRadius:18 + tier * 5,
        ringSpeed:220 + tier * 34,
        textSize:22 + tier * 2,
        chainSize:redSuper ? 32 : (24 + tier * 2)
      };
    }

    function showFireBanner(text = '大炎上!!') {
      if (!dom.fireBanner) return;
      const title = dom.fireBanner.querySelector('.title');
      if (title) title.textContent = text;
      dom.fireBanner.classList.remove('show');
      void dom.fireBanner.offsetWidth;
      dom.fireBanner.classList.add('show');
      clearTimeout(state.fireBannerTimer);
      state.fireBannerTimer = setTimeout(() => dom.fireBanner?.classList.remove('show'), 4080);
    }

    function showSuperchatBanner(chainTier, gain, comboCount = 1, options = {}) {
      if (!dom.superchatBanner) return;
      const now = performance.now();
      const view = chainTierPresentation(chainTier, comboCount);
      const force = !!options.force;
      const tierImproved = view.tier > (lastSuperchatTier || 0);
      if (!force && !tierImproved && now - lastSuperchatBannerAt < (perfSettings.superchatMinGapMs || 0)) return;
      lastSuperchatBannerAt = now;
      lastSuperchatTier = view.tier;
      const card = dom.superchatBanner.querySelector('.card');
      const amount = dom.superchatBanner.querySelector('.amount');
      const message = dom.superchatBanner.querySelector('.message');
      dom.superchatBanner.dataset.chainTier = String(view.tier);
      dom.superchatBanner.style.filter = `drop-shadow(0 0 ${12 + view.tier * 5}px ${view.theme.border}66)`;
      if (card) {
        const glowPx = 26 + view.tier * 7 + view.comboTier * 3;
        card.style.borderColor = view.theme.border;
        card.style.background = `linear-gradient(180deg, ${view.theme.fill.replace(/\.9\d\)/, '.28)')}, rgba(18,10,30,.92) 68%)`;
        card.style.boxShadow = `0 0 0 1px ${view.theme.border}44, 0 18px 44px rgba(0,0,0,.34), 0 0 ${glowPx}px ${view.theme.fill}`;
        card.style.transform = `scale(${view.bannerScale})`;
      }
      if (amount) {
        amount.textContent = `+${fmt(Math.max(0, Math.round(gain || 0)))}`;
        amount.style.color = view.amountColor;
        amount.style.fontSize = `${(0.78 + view.amountScale * 0.52) * 2}rem`;
        amount.style.textShadow = `0 0 ${10 + view.tier * 4}px ${view.theme.border}`;
      }
      if (message) {
        const chainText = view.actualChain >= 8 ? '赤スパ固定!' : `${view.actualChain}連鎖でスパチャ強化!`;
        message.textContent = force ? `${view.label} ${chainText}` : choice(SUPERCHAT_CHAIN_MESSAGES);
        message.style.color = view.theme.accent;
        message.style.fontSize = `${0.84 + view.messageScale * 0.42}rem`;
        message.style.textShadow = `0 0 ${6 + view.tier * 2}px ${view.theme.border}88`;
      }
      dom.superchatBanner.classList.remove('show');
      void dom.superchatBanner.offsetWidth;
      dom.superchatBanner.classList.add('show');
      clearTimeout(state.superchatBannerTimer);
      state.superchatBannerTimer = setTimeout(() => {
        if (dom.superchatBanner) {
          dom.superchatBanner.classList.remove('show');
          if (lastSuperchatTier === view.tier) lastSuperchatTier = 0;
        }
      }, Math.round((2600 + view.tier * 420 + view.comboTier * 120) * (force ? 1.18 : 1)));
    }

    
function makeBody(x, y, index, specialType = false) {
      const isBomb = specialType === true || specialType === 'hazard';
      const isFire = specialType === 'fire';
      const isBuzz = specialType === 'buzz';
      const radius = contentBodyRadius(index, specialType);
      const texture = isBomb ? SPECIAL.hazard : (isFire ? SPECIAL.fire : (isBuzz ? SPECIAL.buzz : CONTENTS[index].img));
      const opacity = 0;
      const scale = spriteScaleFor(index, radius, specialType);
      const body = Bodies.circle(x, y, radius, {
        restitution:0.02,
        friction:0.007,
        frictionStatic:0.008,
        frictionAir:0.0032,
        density:isBomb ? 0.00245 : (isFire ? 0.00255 : (isBuzz ? 0.0022 : 0.002)),
        slop:0.0045,
        label:isBomb ? 'hazard' : (isFire ? 'fire' : (isBuzz ? 'buzz' : 'content')),
        render:{
          opacity,
          sprite:{ texture, xScale:scale, yScale:scale }
        }
      });
      body.gameType = isBomb ? 'hazard' : (isFire ? 'fire' : (isBuzz ? 'buzz' : 'content'));
      body.contentIndex = index;
      body.spawnAt = performance.now();
      body.displayScale = scale;
      body.sleepThreshold = isBomb ? 24 : (isFire ? 22 : (isBuzz ? 21 : 20));
      body.plugin = body.plugin || {};
      body.plugin.highPrecisionUntil = performance.now() + (isBomb ? 900 : (isFire ? 840 : (isBuzz ? 820 : 760)));
      body.plugin.lastMotionAt = body.spawnAt;
      body.plugin.restStartAt = 0;
      body.plugin.frozen = false;
      body.plugin.fireScale = isFire ? 1 : null;
      body.plugin.adjacentClearHits = isFire ? 0 : null;
      requestHighPrecisionPhysics(isBomb ? 900 : 760);
      Composite.add(engine.world, body);
      registerLiveBody(body);
      const node = ensureBodyVisual(body);
      if (node) {
        const diameter = visualDiameter(radius, specialType);
        node.dataset.diameter = String(diameter);
        node.style.width = `${diameter}px`;
        node.style.height = `${diameter}px`;
        node.style.transform = `translate(${Math.round((x - diameter / 2) * 10) / 10}px, ${Math.round((y - diameter / 2) * 10) / 10}px)`;
        node.style.opacity = '1';
      }
      markGroupScanDirty(body);
      return body;
    }


    function invalidateWorldSpatialHashCache() {
      state.worldSpatialHashCache = null;
      state.worldSpatialHashCacheStamp = -1;
    }

    function invalidateFrozenSpatialHashCache(resetRevision = false) {
      state.frozenSpatialHashCache = null;
      state.frozenSpatialHashCacheStamp = -1;
      if (resetRevision) state.frozenSpatialHashRevision = 0;
    }

    function bumpFrozenSpatialHashRevision() {
      state.frozenSpatialHashRevision = (state.frozenSpatialHashRevision || 0) + 1;
      invalidateFrozenSpatialHashCache();
    }

    function invalidateWorldBodiesCache() {
      state.worldBodiesCache = null;
      state.worldBodiesCacheStamp = -1;
      invalidateWorldSpatialHashCache();
    }

    function invalidateBoardStatsCache() {
      state.boardStatsRevision = (state.boardStatsRevision || 0) + 1;
      state.boardStatsCache = null;
      state.boardStatsCacheAt = 0;
      state.boardStatsCacheRevision = -1;
    }

    function invalidateGroupSourceCache() {
      if (state.groupSourceCache instanceof Map) state.groupSourceCache.clear();
      state.groupSourceCache = new Map();
      state.groupSourceCacheFrame = -1;
      state.groupSourceCacheRevision = -1;
    }

    function bumpLiveRegistryRevision() {
      state.liveRegistryRevision = (state.liveRegistryRevision || 0) + 1;
      invalidateGroupSourceCache();
      state.heavySweepCacheFrame = -1;
      state.heavySweepCacheRevision = -1;
      state.heavySweepCandidatesFull = null;
      state.heavySweepCandidatesPartial = null;
    }

    function ensureGroupSourceCache() {
      const frameStamp = state.frameStamp || 0;
      const revision = state.liveRegistryRevision || 0;
      if (!(state.groupSourceCache instanceof Map) || state.groupSourceCacheFrame !== frameStamp || state.groupSourceCacheRevision !== revision) {
        state.groupSourceCache = new Map();
        state.groupSourceCacheFrame = frameStamp;
        state.groupSourceCacheRevision = revision;
      }
      return state.groupSourceCache;
    }

    function getEligibleGroupSource(cacheKey, sourceBodies, minAgeMs = 220) {
      if (!Array.isArray(sourceBodies) || !sourceBodies.length) return null;
      const cache = ensureGroupSourceCache();
      const key = `${cacheKey}|${minAgeMs}`;
      const cached = cache.get(key);
      if (cached) return cached;
      const bodies = [];
      const now = performance.now();
      for (let i = 0; i < sourceBodies.length; i += 1) {
        const body = sourceBodies[i];
        if (!body || body.plugin?.pendingRemoval) continue;
        if (now - (body.spawnAt || 0) <= minAgeMs) continue;
        bodies.push(body);
      }
      const entry = { bodies, hash: bodies.length ? buildSpatialHash(bodies) : null };
      cache.set(key, entry);
      return entry;
    }

    function worldBodies() {
      if (!engine) return [];
      const stamp = state.frameStamp || 0;
      if (state.worldBodiesCache && state.worldBodiesCacheStamp === stamp) return state.worldBodiesCache;
      const bodies = state.liveBodies || [];
      state.worldBodiesCache = bodies;
      state.worldBodiesCacheStamp = stamp;
      return bodies;
    }

    function worldSpatialHash() {
      if (!engine) return null;
      const stamp = state.frameStamp || 0;
      if (state.worldSpatialHashCache && state.worldSpatialHashCacheStamp === stamp) return state.worldSpatialHashCache;
      const bodies = worldBodies();
      if (!bodies.length) return null;
      const hash = buildSpatialHash(bodies);
      state.worldSpatialHashCache = hash;
      state.worldSpatialHashCacheStamp = stamp;
      return hash;
    }

    function frozenSpatialHash() {
      if (!engine || (state.frozenBodyCount || 0) <= 0) return null;
      const stamp = state.frameStamp || 0;
      const revision = state.frozenSpatialHashRevision || 0;
      if (state.frozenSpatialHashCache && state.frozenSpatialHashCacheStamp === stamp && state.frozenSpatialHashCache.revision === revision) return state.frozenSpatialHashCache.hash;
      const bodies = worldBodies();
      scratchFrozenBodies.length = 0;
      for (let i = 0; i < bodies.length; i += 1) {
        const body = bodies[i];
        if (!body || body.plugin?.pendingRemoval || !isFrozenBody(body)) continue;
        scratchFrozenBodies.push(body);
      }
      if (!scratchFrozenBodies.length) {
        state.frozenBodyCount = 0;
        invalidateFrozenSpatialHashCache(true);
        return null;
      }
      const hash = buildSpatialHash(scratchFrozenBodies);
      state.frozenSpatialHashCache = { hash, revision };
      state.frozenSpatialHashCacheStamp = stamp;
      return hash;
    }

    function computeBoardStats() {
      const bodies = worldBodies();
      const now = performance.now();
      const { fullLineY, dangerLineY } = getBoardMetrics();
      let contentCount = 0;
      let hazardCount = 0;
      let trendCount = 0;
      let maxY = Number.POSITIVE_INFINITY;
      let restedDangerCount = 0;
      let overfillCount = 0;
      let restedOverfillCount = 0;
      let minX = Number.POSITIVE_INFINITY;
      let maxX = Number.NEGATIVE_INFINITY;
      for (const body of bodies) {
        const isSpecial = body.gameType === 'hazard' || body.gameType === 'fire' || body.gameType === 'buzz';
        if (isSpecial) {
          hazardCount += 1;
        } else {
          contentCount += 1;
          if (body.contentIndex === state.trendIndex) trendCount += 1;
        }
        if (now - (body.spawnAt || 0) <= 1100) continue;
        const topEdge = body.position.y - body.circleRadius;
        if (topEdge < maxY) maxY = topEdge;
        if (topEdge < dangerLineY && body.speed < 0.5) restedDangerCount += 1;
        if (topEdge < fullLineY) {
          overfillCount += 1;
          if (body.speed < 0.34) {
            restedOverfillCount += 1;
            if (body.position.x < minX) minX = body.position.x;
            if (body.position.x > maxX) maxX = body.position.x;
          }
        }
      }
      const offTrend = contentCount - trendCount;
      const overfillSpan = restedOverfillCount >= 2 ? (maxX - minX) : 0;
      const nearTop = restedDangerCount >= 2 || (restedDangerCount >= 1 && maxY < dangerLineY - 26);
      return {
        bodies,
        contentCount,
        hazardCount,
        trendCount,
        offTrend,
        nearTop,
        restedDangerCount,
        overfillCount,
        restedOverfillCount,
        overfillSpan,
        fullLineY,
        dangerLineY,
        pressure: clamp((contentCount + hazardCount * 1.65) / 18, 0, 1),
        clutter: clamp((offTrend * 0.82 + hazardCount * 1.4) / 14, 0, 1)
      };
    }

    function boardStats(force = false) {
      const revision = state.boardStatsRevision || 0;
      if (!force && state.boardStatsCache && state.boardStatsCacheRevision === revision) return state.boardStatsCache;
      state.boardStatsCache = computeBoardStats();
      state.boardStatsCacheAt = performance.now();
      state.boardStatsCacheRevision = revision;
      return state.boardStatsCache;
    }

    
function repairBodyPosition(body, boardW, boardH, reason = 'repair') {
      if (!body) return;
      const radius = body.circleRadius || contentBodyRadius(body.contentIndex, body.gameType);
      const safeX = clamp(Number.isFinite(body.position.x) ? body.position.x : boardW / 2, radius + 2, boardW - radius - 2);
      const safeY = clamp(Number.isFinite(body.position.y) ? body.position.y : radius + 10, radius + 10, boardH - radius - 2);
      Sleeping.set(body, false);
      Body.setPosition(body, { x:safeX, y:safeY });
      invalidateWorldSpatialHashCache();
      Body.setVelocity(body, {
        x: clamp(Number.isFinite(body.velocity.x) ? body.velocity.x : 0, -2.4, 2.4) * 0.18,
        y: Math.max(0.38, Math.min(2.6, (Number.isFinite(body.velocity.y) ? body.velocity.y : 0) + 0.22))
      });
      Body.setAngularVelocity(body, clamp(Number.isFinite(body.angularVelocity) ? body.angularVelocity : 0, -0.14, 0.14) * 0.6);
      body.plugin = body.plugin || {};
      body.plugin.lastActiveAt = performance.now();
      body.plugin.highPrecisionUntil = Math.max(body.plugin.highPrecisionUntil || 0, performance.now() + 260);
      requestHighPrecisionPhysics(260);
      markBodyVisualDirty(body);
      markGroupScanDirty(body);
      body.floatStartAt = 0;
      body.outOfRangeSince = 0;
      state.repairQueueIds?.delete(body.id);
      const node = ensureBodyVisual(body);
      if (node) {
        node.style.opacity = '1';
        node.style.visibility = 'visible';
        node.style.display = 'grid';
      }
    }


    function cleanupOffscreenBodies() {
      const bodies = worldBodies();
      if (!bodies.length) return;
      const boardW = boardLogicalRect().width;
      const boardH = boardLogicalRect().height;
      for (const body of bodies) {
        const age = performance.now() - (body.spawnAt || 0);
        if (age < 320) continue;
        if (body.position.y < body.circleRadius * 0.2 || body.position.x < -body.circleRadius || body.position.x > boardW + body.circleRadius) {
          repairBodyPosition(body, boardW, boardH, 'offscreen');
        }
      }
    }

    
function rescueFloatingBodies(now = performance.now()) {
      const bodies = worldBodies();
      if (!bodies.length || !dom.board) return;
      const boardInfo = boardLogicalRect();
      const boardHeight = boardInfo.height || 0;
      const boardWidth = boardInfo.width || 0;
      const fullSweep = bodies.length <= 18 || now - (state.lastFullRescueSweepAt || 0) > 2600 || (state.repairQueueIds?.size || 0) >= 4;
      if (fullSweep) state.lastFullRescueSweepAt = now;
      const candidates = getHeavySweepCandidatesCached(fullSweep);
      if (!candidates.length) return;
      const hash = worldSpatialHash();
      if (!hash) return;
      for (let i = 0; i < candidates.length; i += 1) {
        const body = candidates[i];
        if (!body || body.plugin?.pendingRemoval) continue;
        const age = now - (body.spawnAt || 0);
        if (age < 260) continue;
        if (body.position.y < 72 || body.position.y > boardHeight - 60) continue;
        const movingEnough = Math.abs(body.velocity?.y || 0) > 0.12 || Math.abs(body.velocity?.x || 0) > 0.16 || Math.abs(body.angularVelocity || 0) > 0.04;
        if (movingEnough) {
          body.floatStartAt = 0;
          continue;
        }
        let hasSupportBelow = false;
        visitNearbyFromHash(hash, body, 1, other => {
          if (!other || other.id === body.id || other.plugin?.pendingRemoval) return false;
          const dx = Math.abs(other.position.x - body.position.x);
          const dy = other.position.y - body.position.y;
          const supportDx = body.circleRadius + other.circleRadius - 6;
          if (dx > supportDx || dy < 0) return false;
          if (dy <= body.circleRadius + other.circleRadius + 16) {
            hasSupportBelow = true;
            return true;
          }
          return false;
        });
        if (hasSupportBelow) {
          body.floatStartAt = 0;
          state.repairQueueIds?.delete(body.id);
          continue;
        }
        if (!body.floatStartAt) body.floatStartAt = body.isSleeping ? (now - 140) : now;
        if (isFrozenBody(body)) {
          thawBody(body, now, { vy:0.62 });
          body.floatStartAt = now - 24;
        }
        if (body.isSleeping) {
          Sleeping.set(body, false);
          Body.setVelocity(body, {
            x: clamp((body.velocity?.x || 0) * 0.92, -1.0, 1.0),
            y: Math.max(0.62, body.velocity?.y || 0.62)
          });
          body.plugin = body.plugin || {};
          body.plugin.lastActiveAt = now;
          body.plugin.lastMotionAt = now;
          body.plugin.restStartAt = 0;
          body.plugin.highPrecisionUntil = Math.max(body.plugin.highPrecisionUntil || 0, now + 420);
          requestHighPrecisionPhysics(420);
        }
        if (now - body.floatStartAt < 14) continue;
        requestHighPrecisionPhysics(420);
        repairBodyPosition(body, boardWidth, boardHeight, 'floating-rescue');
        body.floatStartAt = now;
      }
    }


    
    function separateDeepOverlaps(now = performance.now()) {
      const bodies = worldBodies();
      if (bodies.length < 2 || !dom.board) return 0;
      const boardInfo = boardLogicalRect();
      const boardWidth = boardInfo.width || 0;
      const boardHeight = boardInfo.height || 0;
      const fullSweep = bodies.length <= 18 || now - (state.lastFullOverlapSweepAt || 0) > 2400 || (state.repairQueueIds?.size || 0) >= 4;
      if (fullSweep) state.lastFullOverlapSweepAt = now;
      const candidateBodies = getHeavySweepCandidatesCached(fullSweep);
      if (candidateBodies.length < 1) return 0;
      const hash = worldSpatialHash();
      if (!hash) return 0;
      const overlapCandidateStamp = (state.overlapCandidateStamp || 0) + 1;
      state.overlapCandidateStamp = overlapCandidateStamp;
      let corrected = 0;
      for (let i = 0; i < candidateBodies.length; i += 1) {
        const body = candidateBodies[i];
        if (!body || body.plugin?.pendingRemoval) continue;
        body.plugin = body.plugin || {};
        body.plugin._overlapCandidateStamp = overlapCandidateStamp;
      }
      for (let i = 0; i < candidateBodies.length; i += 1) {
        const body = candidateBodies[i];
        if (!body || body.plugin?.pendingRemoval) continue;
        if (now - (body.spawnAt || 0) < 220) continue;
        visitNearbyFromHash(hash, body, 1, other => {
          if (!other || other.id === body.id || other.plugin?.pendingRemoval) return false;
          if (other.plugin?._overlapCandidateStamp === overlapCandidateStamp && body.id > other.id) return false;
          const dx = other.position.x - body.position.x;
          const dy = other.position.y - body.position.y;
          const minDist = (body.circleRadius || 0) + (other.circleRadius || 0) - 1.2;
          const distSq = dx * dx + dy * dy;
          if (distSq >= minDist * minDist) return false;
          const dist = Math.sqrt(Math.max(0.0001, distSq));
          const overlap = minDist - dist;
          if (overlap < 2.6) return false;
          let nx = dx / dist;
          let ny = dy / dist;
          if (!Number.isFinite(nx) || !Number.isFinite(ny)) {
            nx = 0;
            ny = 1;
          }
          const push = Math.min(11, overlap * 0.68);
          const bodyIsUpper = body.position.y <= other.position.y;
          const bodyShare = bodyIsUpper ? 0.72 : 0.28;
          const otherShare = 1 - bodyShare;
          const nextA = {
            x: clamp(body.position.x - nx * push * bodyShare, (body.circleRadius || 0) + 2, boardWidth - (body.circleRadius || 0) - 2),
            y: clamp(body.position.y - ny * push * bodyShare, (body.circleRadius || 0) + 2, boardHeight - (body.circleRadius || 0) - 2)
          };
          const nextB = {
            x: clamp(other.position.x + nx * push * otherShare, (other.circleRadius || 0) + 2, boardWidth - (other.circleRadius || 0) - 2),
            y: clamp(other.position.y + ny * push * otherShare, (other.circleRadius || 0) + 2, boardHeight - (other.circleRadius || 0) - 2)
          };
          if (isFrozenBody(body)) thawBody(body, now, { vy:0.18 });
          if (isFrozenBody(other)) thawBody(other, now, { vy:0.12 });
          Body.setPosition(body, nextA);
          Body.setPosition(other, nextB);
          invalidateWorldSpatialHashCache();
          Sleeping.set(body, false);
          Sleeping.set(other, false);
          Body.setVelocity(body, {
            x: clamp((body.velocity?.x || 0) * 0.92, -2.2, 2.2),
            y: Math.max(0.12, Math.min(3.2, body.velocity?.y || 0.12))
          });
          Body.setVelocity(other, {
            x: clamp((other.velocity?.x || 0) * 0.92, -2.2, 2.2),
            y: Math.max(0.08, Math.min(3.2, other.velocity?.y || 0.08))
          });
          body.plugin = body.plugin || {};
          other.plugin = other.plugin || {};
          body.plugin.lastActiveAt = now;
          other.plugin.lastActiveAt = now;
          body.plugin.highPrecisionUntil = Math.max(body.plugin.highPrecisionUntil || 0, now + 320);
          other.plugin.highPrecisionUntil = Math.max(other.plugin.highPrecisionUntil || 0, now + 320);
          body.floatStartAt = 0;
          other.floatStartAt = 0;
          markBodyVisualDirty(body);
          markBodyVisualDirty(other);
          markGroupScanDirty(body);
          markGroupScanDirty(other);
          corrected += 1;
          return false;
        });
      }
      if (corrected > 0) requestHighPrecisionPhysics(420);
      return corrected;
    }


function purgeBrokenBodies() {
      const bodies = collectRepairCandidates();
      if (!bodies.length || !dom.board) return;
      const width = dom.board.clientWidth || 0;
      const height = dom.board.clientHeight || 0;
      const broken = [];
      const now = performance.now();
      for (const body of bodies) {
        const radius = body.circleRadius || 0;
        const finite = Number.isFinite(body.position.x) && Number.isFinite(body.position.y) && Number.isFinite(radius);
        if (!finite) {
          broken.push(body);
          continue;
        }
        const farOutside = body.position.y > height + radius * 8 || body.position.y < -radius * 5 || body.position.x < -width * 2 || body.position.x > width * 3;
        const lightlyOutside = body.position.y > height + radius * 1.6 || body.position.y < -radius * 1.6 || body.position.x < -radius * 1.6 || body.position.x > width + radius * 1.6;
        if (farOutside || lightlyOutside) {
          body.outOfRangeSince = body.outOfRangeSince || now;
          if (farOutside || now - body.outOfRangeSince > 70) {
            requestHighPrecisionPhysics(240);
            repairBodyPosition(body, width, height, 'broken');
          }
        } else {
          body.outOfRangeSince = 0;
          state.repairQueueIds?.delete(body.id);
        }
      }
      if (broken.length) hardRemoveBodies(broken);
    }



    function updateWorldBounds() {
      if (!engine) return;
      const boardW = boardLogicalRect().width;
      const boardH = boardLogicalRect().height;
      if (wallBodies.length) wallBodies.forEach(body => Composite.remove(engine.world, body, true));
      invalidateWorldBodiesCache();
      wallBodies = [
        Bodies.rectangle(boardW / 2, boardH + 36, boardW + 220, 96, { isStatic:true, render:{ visible:false } }),
        Bodies.rectangle(-32, boardH / 2, 96, boardH + 180, { isStatic:true, render:{ visible:false } }),
        Bodies.rectangle(boardW + 32, boardH / 2, 96, boardH + 180, { isStatic:true, render:{ visible:false } })
      ];
      wallBodies.forEach(body => { body.gameType = 'wall'; });
      wallBodies.forEach(body => Composite.add(engine.world, body));
      state.forceFullVisualSync = true;
      refreshBoardLayoutCache(true);
    }

    function touchPairKey(a, b) {
      const aId = Number(a?.id || 0);
      const bId = Number(b?.id || 0);
      return aId < bId ? `${aId}:${bId}` : `${bId}:${aId}`;
    }

    function pruneRecentTouchPairs(now = performance.now()) {
      recentTouchPairs.forEach((at, key) => {
        if (now - at > TOUCH_MEMORY_TTL_MS) recentTouchPairs.delete(key);
      });
    }

    function rememberRecentTouch(a, b, now = performance.now()) {
      if (!a || !b || a.id == null || b.id == null) return;
      recentTouchPairs.set(touchPairKey(a, b), now);
    }

    function hasRecentTouch(a, b, now = performance.now()) {
      if (!a || !b || a.id == null || b.id == null) return false;
      const key = touchPairKey(a, b);
      const at = recentTouchPairs.get(key);
      if (at == null) return false;
      if (now - at > TOUCH_MEMORY_TTL_MS) {
        recentTouchPairs.delete(key);
        return false;
      }
      return true;
    }

    function processCollisionTouches(event, activePhase = false) {
      const now = performance.now();
      const liveCount = state.liveBodies?.length || 0;
      if (activePhase) {
        const minGap = liveCount >= 42 ? 110 : (liveCount >= 32 ? 72 : (liveCount >= 22 ? 42 : 0));
        if (minGap && now - (state.lastCollisionActiveRememberAt || 0) < minGap) return;
        state.lastCollisionActiveRememberAt = now;
      }
      const pairs = event?.pairs || EMPTY_BODY_ARRAY;
      const activeIds = state.activeBodyIds;
      const pairLimit = activePhase
        ? (liveCount >= 42 ? 42 : (liveCount >= 34 ? 60 : (liveCount >= 26 ? 84 : pairs.length)))
        : pairs.length;
      let processed = 0;
      for (let i = 0; i < pairs.length; i += 1) {
        if (processed >= pairLimit) break;
        const pair = pairs[i];
        const a = pair?.bodyA;
        const b = pair?.bodyB;
        if (!a || !b || a.isStatic || b.isStatic) continue;
        if (a.plugin?.pendingRemoval || b.plugin?.pendingRemoval) continue;
        const activeTouch = !activePhase
          || activeIds?.has(a.id)
          || activeIds?.has(b.id)
          || !a.isSleeping
          || !b.isSleeping;
        if (!activeTouch) continue;
        rememberRecentTouch(a, b, now);
        if (!activePhase || activeIds?.has(a.id)) markGroupScanDirty(a);
        if (!activePhase || activeIds?.has(b.id)) markGroupScanDirty(b);
        processed += 1;
      }
      if (now >= recentTouchPairsNextPruneAt || recentTouchPairs.size > 640) {
        recentTouchPairsNextPruneAt = now + 140;
        pruneRecentTouchPairs(now);
        if (recentTouchPairs.size > 1200) recentTouchPairs.clear();
      }
    }

    function rememberCollisionTouchesStart(event) {
      processCollisionTouches(event, false);
    }

    function rememberCollisionTouchesActive(event) {
      processCollisionTouches(event, true);
    }

    function touchingExact(a, b, pad = 0.5) {
      const dx = b.position.x - a.position.x;
      const dy = b.position.y - a.position.y;
      const rr = a.circleRadius + b.circleRadius + pad;
      return dx * dx + dy * dy <= rr * rr;
    }

    function touching(a, b) {
      return touchingWithPad(a, b, 0.5);
    }

    function touchingWithPad(a, b, pad = 0.5) {
      if (!a || !b) return false;
      const now = performance.now();
      if (touchingExact(a, b, pad)) {
        rememberRecentTouch(a, b, now);
        return true;
      }
      const slowEnough = Math.max(a.speed || 0, b.speed || 0) <= 0.95
        && Math.abs(a.angularVelocity || 0) <= 0.12
        && Math.abs(b.angularVelocity || 0) <= 0.12;
      return slowEnough && hasRecentTouch(a, b, now);
    }


function buildTouchGroupsNearSeeds(sourceBodies, seedBodies, pad = 0.5, sourceHash = null) {
  if (!sourceBodies.length || !seedBodies.length) return [];
  const hash = sourceHash || buildSpatialHash(sourceBodies);
  const sourceStamp = (state.touchGroupSourceStamp || 0) + 1;
  state.touchGroupSourceStamp = sourceStamp;
  for (let i = 0; i < sourceBodies.length; i += 1) {
    const body = sourceBodies[i];
    if (!body) continue;
    body.plugin = body.plugin || {};
    body.plugin._touchSourceStamp = sourceStamp;
  }
  const visitStamp = (state.touchGroupVisitStamp || 0) + 1;
  state.touchGroupVisitStamp = visitStamp;
  const groups = [];
  for (let i = 0; i < seedBodies.length; i += 1) {
    const root = seedBodies[i];
    if (!root) continue;
    root.plugin = root.plugin || {};
    if (root.plugin._touchSourceStamp !== sourceStamp || root.plugin._touchVisitStamp === visitStamp) continue;
    const stack = [root];
    const group = [];
    root.plugin._touchVisitStamp = visitStamp;
    while (stack.length) {
      const current = stack.pop();
      group.push(current);
      visitNearbyFromHash(hash, current, 1, other => {
        if (!other || other.id === current.id) return false;
        other.plugin = other.plugin || {};
        if (other.plugin._touchVisitStamp === visitStamp) return false;
        if (!touchingWithPad(current, other, pad)) return false;
        other.plugin._touchVisitStamp = visitStamp;
        stack.push(other);
        return false;
      });
    }
    groups.push(group);
  }
  return groups;
}

    
function buildTouchGroupsForIndex(targetIndex, seedBodies = null) {
      const entry = getEligibleGroupSource(`content:${targetIndex}`, worldContentBodiesByIndex(targetIndex), 220);
      const targetBodies = entry?.bodies || EMPTY_BODY_ARRAY;
      if (!targetBodies.length) return [];
      if (!Array.isArray(seedBodies) || !seedBodies.length) return buildTouchGroupsFromBodies(targetBodies, 0.5, entry.hash);
      scratchGroupSeedBodies.length = 0;
      const now = performance.now();
      for (let i = 0; i < seedBodies.length; i += 1) {
        const body = seedBodies[i];
        if (!body || body.gameType !== 'content' || body.contentIndex !== targetIndex || body.plugin?.pendingRemoval) continue;
        if (now - (body.spawnAt || 0) <= 120) continue;
        scratchGroupSeedBodies.push(body);
      }
      if (!scratchGroupSeedBodies.length) return [];
      return buildTouchGroupsNearSeeds(targetBodies, scratchGroupSeedBodies, 0.5, entry.hash);
    }


    function filterPreviewGroupsInPlace(groups, minLen = 3, maxSpeed = 4.2) {
      let write = 0;
      for (let i = 0; i < groups.length; i += 1) {
        const group = groups[i];
        if (!group || group.length < minLen) continue;
        let ok = true;
        for (let j = 0; j < group.length; j += 1) {
          if ((group[j]?.speed || 0) >= maxSpeed) {
            ok = false;
            break;
          }
        }
        if (!ok) continue;
        groups[write++] = group;
      }
      groups.length = write;
      return groups;
    }

    function filterClearableGroupsInPlace(groups, contentMinLen = 3) {
      let write = 0;
      for (let i = 0; i < groups.length; i += 1) {
        const group = groups[i];
        if (!group?.length) continue;
        const type = group[0]?.gameType;
        const special = type === 'hazard' || type === 'buzz';
        const minLen = special ? 3 : contentMinLen;
        if (group.length < minLen) continue;
        const maxSpeed = special ? 6.4 : 4.8;
        let ok = true;
        for (let j = 0; j < group.length; j += 1) {
          if ((group[j]?.speed || 0) >= maxSpeed) {
            ok = false;
            break;
          }
        }
        if (!ok) continue;
        groups[write++] = group;
      }
      groups.length = write;
      return groups;
    }

    function scanGroups() {
      if (state.clipTime > 0) {
        const preview = [];
        for (let idx = 0; idx < CONTENTS.length; idx += 1) preview.push(...buildTouchGroupsForIndex(idx));
        applyPreviewState(preview, EMPTY_ID_ARRAY);
        return filterPreviewGroupsInPlace(preview, 2, 4.2);
      }
      const groups = buildTouchGroupsForIndex(state.trendIndex);
      const nextGroups = buildTouchGroupsForIndex(state.nextTrendIndex);
      applyPreviewState(groups, nextGroups);
      return filterPreviewGroupsInPlace(groups, 3, 4.2);
    }

    function currentScanInterval(crowdFactor = 1) {
      const now = performance.now();
      if (now >= recentTouchPairsNextPruneAt) {
        recentTouchPairsNextPruneAt = now + 140;
        pruneRecentTouchPairs(now);
      }
      const hasDirtyBodies = (state.groupScanDirtyIds?.size || 0) > 0;
      const hasRecentContacts = recentTouchPairs.size > 0;
      const activeBodies = (state.activeMovingCount || 0) > 0 || (state.repairQueueIds?.size || 0) > 0;
      const liveCount = state.liveBodies?.length || 0;
      const responsiveBase = Math.min(perfSettings.scanInterval || 0.82, 0.22);
      const base = (hasDirtyBodies || hasRecentContacts || activeBodies) ? responsiveBase : (perfSettings.scanInterval || 0.82);
      const crowdBoost = liveCount >= 48 ? 1.6 : (liveCount >= 40 ? 1.38 : (liveCount >= 32 ? 1.18 : 1));
      return base * crowdFactor * crowdBoost;
    }

    
function buildTouchGroupsForType(gameType, contentIndex = null, seedBodies = null) {
      const sourceBodies = gameType === 'content' ? worldContentBodiesByIndex(contentIndex) : worldBodiesByType(gameType);
      const cacheKey = gameType === 'content' ? `content:${contentIndex}` : `type:${gameType}`;
      const entry = getEligibleGroupSource(cacheKey, sourceBodies, 220);
      const targetBodies = entry?.bodies || EMPTY_BODY_ARRAY;
      if (!targetBodies.length) return [];
      const loosePad = gameType === 'hazard' ? 8 : (gameType === 'buzz' ? 6 : 0.5);
      if (!Array.isArray(seedBodies) || !seedBodies.length) return buildTouchGroupsFromBodies(targetBodies, loosePad, entry.hash);
      scratchGroupSeedBodies.length = 0;
      const now = performance.now();
      for (let i = 0; i < seedBodies.length; i += 1) {
        const body = seedBodies[i];
        if (!body || body.gameType !== gameType || body.plugin?.pendingRemoval) continue;
        if (now - (body.spawnAt || 0) <= 120) continue;
        scratchGroupSeedBodies.push(body);
      }
      if (!scratchGroupSeedBodies.length) return [];
      return buildTouchGroupsNearSeeds(targetBodies, scratchGroupSeedBodies, loosePad, entry.hash);
    }


    

function scanAllClearableGroups() {
      const now = performance.now();
      const active = getActiveBodies();
      scratchScanSeedBodies.length = 0;
      const seedStamp = (state.touchGroupQueueStamp || 0) + 1;
      state.touchGroupQueueStamp = seedStamp;
      if (state.groupScanDirtyIds instanceof Set) {
        state.groupScanDirtyIds.forEach(id => {
          const body = bodyById(id);
          if (!body || body.plugin?.pendingRemoval) return;
          body.plugin = body.plugin || {};
          if (body.plugin._scanSeedStamp === seedStamp) return;
          body.plugin._scanSeedStamp = seedStamp;
          scratchScanSeedBodies.push(body);
        });
      }
      for (let i = 0; i < active.length; i += 1) {
        const body = active[i];
        if (!body || body.plugin?.pendingRemoval) continue;
        body.plugin = body.plugin || {};
        if (body.plugin._scanSeedStamp === seedStamp) continue;
        body.plugin._scanSeedStamp = seedStamp;
        scratchScanSeedBodies.push(body);
      }
      const seedBodies = scratchScanSeedBodies;
      const liveCount = state.liveBodies?.length || 0;
      const bigBuzzPairs = state.clipTime > 0;
      const fullScanIntervalMs = bigBuzzPairs ? (liveCount >= 34 ? 1100 : 1600) : (liveCount >= 34 ? 3000 : 2400);
      const periodicFullScan = now - (state.lastFullGroupScanAt || 0) > fullScanIntervalMs;
      const crowded = liveCount >= 28;
      const tooManySeeds = seedBodies.length >= Math.max(12, liveCount * 0.45);
      const groups = [];
      const contentMinLen = bigBuzzPairs ? 2 : 3;
      if (!seedBodies.length && !periodicFullScan) {
        return groups;
      }
      const scanAllContent = !seedBodies.length || periodicFullScan || (!crowded && tooManySeeds);
      if (bigBuzzPairs) {
        if (scanAllContent) {
          for (let idx = 0; idx < CONTENTS.length; idx += 1) groups.push(...buildTouchGroupsForIndex(idx));
        } else {
          scratchFullSweepBodies.length = 0;
          const seedIndexStamp = (state.seedIndexStamp || 0) + 1;
          state.seedIndexStamp = seedIndexStamp;
          if (!Array.isArray(state.seedIndexSeen)) state.seedIndexSeen = Array.from({ length: CONTENTS.length }, () => 0);
          for (let i = 0; i < seedBodies.length; i += 1) {
            const body = seedBodies[i];
            const idx = body?.gameType === 'content' ? body.contentIndex : null;
            if (!Number.isInteger(idx)) continue;
            if (state.seedIndexSeen[idx] === seedIndexStamp) continue;
            state.seedIndexSeen[idx] = seedIndexStamp;
            scratchFullSweepBodies.push(idx);
          }
          for (let i = 0; i < scratchFullSweepBodies.length; i += 1) {
            groups.push(...buildTouchGroupsForIndex(scratchFullSweepBodies[i], seedBodies));
          }
        }
      } else if (scanAllContent) {
        groups.push(...buildTouchGroupsForIndex(state.trendIndex));
      } else {
        groups.push(...buildTouchGroupsForIndex(state.trendIndex, seedBodies));
      }
      if (scanAllContent) {
        groups.push(...buildTouchGroupsForType('hazard'));
        groups.push(...buildTouchGroupsForType('buzz'));
        state.lastFullGroupScanAt = now;
      } else {
        groups.push(...buildTouchGroupsForType('hazard', null, seedBodies));
        groups.push(...buildTouchGroupsForType('buzz', null, seedBodies));
      }
      state.groupScanDirtyIds?.clear();
      return filterClearableGroupsInPlace(groups, contentMinLen);
    }



    function biggestPreviewLen() {
      return state.previewPeakLen || 0;
    }

    function biggestNextPreviewLen() {
      return state.nextPreviewPeakLen || 0;
    }

    function expandPendingGroup(pending) {
      if (!pending || !Number.isInteger(pending.contentIndex)) return [];
      const entry = getEligibleGroupSource(`content:${pending.contentIndex}`, worldContentBodiesByIndex(pending.contentIndex), 140);
      const bodies = entry?.bodies || EMPTY_BODY_ARRAY;
      if (!bodies.length) return [];
      scratchGroupSeedBodies.length = 0;
      const pendingIdSet = new Set(pending.ids || EMPTY_ID_ARRAY);
      for (let i = 0; i < bodies.length; i += 1) {
        const body = bodies[i];
        if (pendingIdSet.has(body.id)) scratchGroupSeedBodies.push(body);
      }
      if (!scratchGroupSeedBodies.length) return [];
      const groups = buildTouchGroupsNearSeeds(bodies, scratchGroupSeedBodies, 0.5, entry.hash);
      if (!groups.length) return [];
      let largest = groups[0];
      for (let i = 1; i < groups.length; i += 1) {
        if (groups[i].length > largest.length) largest = groups[i];
      }
      return largest || [];
    }

    function updatePendingClearVisual(ids = []) {
      const nextIds = Array.isArray(ids) ? ids : EMPTY_ID_ARRAY;
      const prevIds = pendingClearVisualIds || EMPTY_ID_ARRAY;
      if (arraysEqualShallow(prevIds, nextIds)) return;
      const nextSet = new Set(nextIds);
      const prevSet = new Set(prevIds);
      for (let i = 0; i < prevIds.length; i += 1) {
        const id = prevIds[i];
        if (nextSet.has(id)) continue;
        bodyVisuals.get(id)?.classList.remove('pending-clear');
      }
      for (let i = 0; i < nextIds.length; i += 1) {
        const id = nextIds[i];
        if (prevSet.has(id)) continue;
        bodyVisuals.get(id)?.classList.add('pending-clear');
      }
      pendingClearVisualIds = nextIds.slice();
    }

    function queueGroupClear(group) {
      if (!group?.length) return false;
      const now = performance.now();
      const contentIndex = group[0].contentIndex;
      const pending = state.pendingTrendClear;
      if (!pending || pending.contentIndex !== contentIndex) {
        state.pendingTrendClear = { contentIndex, ids:group.map(body => body.id), dueAt:now + 200 };
      } else {
        const merged = new Set([...(pending.ids || []), ...group.map(body => body.id)]);
        pending.ids = Array.from(merged);
        pending.dueAt = Math.max(pending.dueAt || 0, now + 200);
      }
      const accent = CONTENTS[contentIndex]?.accent || '#ffffff';
      const center = group.reduce((acc, body) => { acc.x += body.position.x; acc.y += body.position.y; return acc; }, { x:0, y:0 });
      center.x /= group.length;
      center.y /= group.length;
      addRing(center.x, center.y, accent, 16 + group.length * 2, 150);
      updatePendingClearVisual(state.pendingTrendClear.ids);
      return true;
    }

    function resolveGroups() {
      const groups = scanAllClearableGroups();
      state.pendingTrendClear = null;
      updatePendingClearVisual([]);
      if (!groups.length) return false;
      const groupPriority = group => {
        const type = group[0]?.gameType;
        if (type === 'hazard') return 3;
        if (type === 'buzz') return 2;
        return 1;
      };
      for (let i = 0; i < groups.length; i += 1) {
        const group = groups[i];
        let sumY = 0;
        for (let j = 0; j < group.length; j += 1) sumY += group[j]?.position?.y || 0;
        group._sortPriority = groupPriority(group);
        group._sortY = sumY;
      }
      groups.sort((a, b) => (b._sortPriority - a._sortPriority) || (b.length - a.length) || (a._sortY - b._sortY));
      clearGroup(groups[0]);
      return true;
    }

    function collectAdjacentFireBodies(seedBodies = []) {
      if (!seedBodies.length) return [];
      const fireBodies = worldBodiesByType('fire').filter(body => !body.plugin?.pendingRemoval);
      if (!fireBodies.length) return [];
      return fireBodies.filter(fire => seedBodies.some(body => touching(fire, body)));
    }


    function syncBodyVisualSize(body) {
      if (!body) return;
      const radius = body.circleRadius || contentBodyRadius(body.contentIndex, body.gameType);
      const diameter = visualDiameter(radius, body.gameType);
      const node = ensureBodyVisual(body);
      if (node) {
        node._diameter = diameter;
        node.style.width = `${diameter}px`;
        node.style.height = `${diameter}px`;
      }
      markBodyVisualDirty(body);
      markGroupScanDirty(body);
      state.forceFullVisualSync = true;
    }

    function weakenFireBody(body, now = performance.now()) {
      if (!body || body.gameType !== 'fire' || body.plugin?.pendingRemoval) return false;
      body.plugin = body.plugin || {};
      const currentScale = Number.isFinite(body.plugin.fireScale) ? body.plugin.fireScale : 1;
      const targetScale = 0.75;
      if (Math.abs(currentScale - targetScale) <= 0.001) return false;
      const scaleFactor = clamp(targetScale / Math.max(0.0001, currentScale), 0.2, 1.2);
      if (!Number.isFinite(scaleFactor) || scaleFactor <= 0) return false;
      if (isFrozenBody(body)) thawBody(body, now, { vy:Math.max(0.04, body.velocity?.y || 0.04) });
      Sleeping.set(body, false);
      Body.scale(body, scaleFactor, scaleFactor);
      body.plugin.fireScale = targetScale;
      body.plugin.lastActiveAt = now;
      body.plugin.lastMotionAt = now;
      body.plugin.restStartAt = 0;
      body.plugin.highPrecisionUntil = Math.max(body.plugin.highPrecisionUntil || 0, now + 320);
      syncBodyVisualSize(body);
      return true;
    }

    function processAdjacentFireBodies(adjacentFire = []) {
      const unique = Array.from(new Map((adjacentFire || []).filter(Boolean).map(body => [body.id, body])).values());
      const weakened = [];
      const cleared = [];
      if (!unique.length) return { weakened, cleared };
      const now = performance.now();
      for (const fire of unique) {
        fire.plugin = fire.plugin || {};
        const nextHits = Math.max(0, Math.floor(fire.plugin.adjacentClearHits || 0)) + 1;
        fire.plugin.adjacentClearHits = nextHits;
        if (nextHits >= 2) {
          cleared.push(fire);
          continue;
        }
        if (weakenFireBody(fire, now)) weakened.push(fire);
      }
      if (cleared.length) hardRemoveBodies(cleared);
      return { weakened, cleared };
    }

    function comboScoreValue(comboCount = 1) {
      const combo = Math.max(1, Math.floor(comboCount || 1));
      return 280 + combo * 240 + combo * combo * 140;
    }

    function applyComboGain({ center, accent = '#ffffff', chainTier = 1, comboCount = 1, noteText = '', baseOnly = false } = {}) {
      const baseGain = comboScoreValue(comboCount);
      const gain = Math.round(baseGain);
      state.score += gain;
      if (center) {
        popText(center.x, center.y, `+${fmt(gain)}`, accent, comboCount >= 4 ? 30 : 24);
        if (state.clipTime > 0) popText(center.x, center.y + 42, '大バズり中 2こ消し', '#fff0a3', 18);
        if (noteText) popText(center.x, center.y - 42, noteText, '#ffffff', 18);
      }
      showSuperchatBanner(chainTier, gain, comboCount);
      return gain;
    }



    function clearBombGroup(group) {
      if (!group.length) return;
      const center = group.reduce((acc, body) => {
        acc.x += body.position.x;
        acc.y += body.position.y;
        return acc;
      }, { x:0, y:0 });
      center.x /= group.length;
      center.y /= group.length;
      const adjacentFire = collectAdjacentFireBodies(group);
      hardRemoveBodies(group);
      const fireResult = processAdjacentFireBodies(adjacentFire);
      invalidateBoardStatsCache();
      state.clearCount += 1;
      state.heat = clamp(state.heat + 20, 0, 100);
      state.craving = clamp(state.craving + 10, 0, 100);
      state.tension = clamp(state.tension + 8, 0, 100);
      state.buzz = clamp(state.buzz + 10, 0, 100);

      for (const body of group) {
        addParticles(body.position.x, body.position.y, 'rgba(255,224,120,.96)', 18, 7.0);
        addParticles(body.position.x, body.position.y, 'rgba(255,120,40,.94)', 16, 7.6);
        addParticles(body.position.x, body.position.y, 'rgba(255,90,110,.9)', 14, 6.4);
        addRing(body.position.x, body.position.y, '#ffd84c', 22, 240);
        addRing(body.position.x, body.position.y, '#ff6f3d', 32, 300);
      }
      for (const body of fireResult.weakened) {
        addParticles(body.position.x, body.position.y, 'rgba(255,150,170,.78)', 8, 4.9);
        addRing(body.position.x, body.position.y, '#ff8fa8', 14, 180);
        popText(body.position.x, body.position.y - 16, '炎上弱体化', '#ffd3dc', 16);
      }
      for (const body of fireResult.cleared) {
        addParticles(body.position.x, body.position.y, 'rgba(255,110,120,.88)', 10, 5.8);
        addRing(body.position.x, body.position.y, '#ff5b73', 18, 220);
      }
      addRing(center.x, center.y, '#ff5b73', 56, 420);
      addRing(center.x, center.y, '#ffd84c', 82, 360);
      flashScreen('#ff7b5b');
      popText(center.x, center.y - 18, 'BOMB!!', '#fff4a3', 32);
      playAssetSfx('bomb_clear', 0.98);
      const gain = 1200;
      state.score += gain;
      popText(center.x, center.y + 24, `+${fmt(gain)}`, '#ffd84c', 24);
      if (fireResult.cleared.length) popText(center.x, center.y + 64, `炎消し x${fireResult.cleared.length}`, '#ffb7c5', 18);
      if (fireResult.weakened.length) popText(center.x, center.y + 92, `炎弱体化 x${fireResult.weakened.length}`, '#ffd3dc', 17);
      spawnComment(false, `爆弾が${group.length}こつながって大炎上！`, 'low', '💣');
      triggerFire('bomb_chain');
      const fireCount = 5 + Math.floor(rand() * 4);
      const dropped = spawnHazardBurst(fireCount, center.x);
      popText(dom.board.clientWidth / 2, dom.board.clientHeight * 0.34, '大炎上!!', '#fff0f0', 42);
      showFireBanner();
      spawnComment(false, `炎アイテムが${dropped}こ落ちてきた！`, 'low', '🔥');
      if (fireResult.cleared.length || fireResult.weakened.length) state.fireMode = Math.max(state.fireMode, 999);
      return gain;
    }

    function clearBuzzGroup(group) {
      if (!group.length) return;
      const center = group.reduce((acc, body) => {
        acc.x += body.position.x;
        acc.y += body.position.y;
        return acc;
      }, { x:0, y:0 });
      center.x /= group.length;
      center.y /= group.length;
      const adjacentFire = collectAdjacentFireBodies(group);
      hardRemoveBodies(group);
      const fireResult = processAdjacentFireBodies(adjacentFire);
      invalidateBoardStatsCache();
      state.clearCount += 1;
      state.tension = clamp(state.tension + 14, 0, 100);
      state.craving = clamp(state.craving - 8, 0, 100);
      state.heat = clamp(state.heat - 8, 0, 100);
      state.buzz = clamp(state.buzz + 20, 0, 100);
      for (const body of group) {
        addParticles(body.position.x, body.position.y, 'rgba(255,239,128,.98)', 18, 7.2);
        addParticles(body.position.x, body.position.y, 'rgba(255,93,190,.88)', 16, 6.8);
        addRing(body.position.x, body.position.y, '#ffe37a', 24, 260);
        addRing(body.position.x, body.position.y, '#ff63d6', 34, 300);
      }
      for (const body of fireResult.weakened) {
        addParticles(body.position.x, body.position.y, 'rgba(255,150,170,.78)', 8, 4.9);
        addRing(body.position.x, body.position.y, '#ff8fa8', 14, 180);
        popText(body.position.x, body.position.y - 16, '炎上弱体化', '#ffd3dc', 16);
      }
      for (const body of fireResult.cleared) {
        addParticles(body.position.x, body.position.y, 'rgba(255,110,120,.88)', 10, 5.8);
        addRing(body.position.x, body.position.y, '#ff5b73', 18, 220);
      }
      flashScreen('#ffe37a');
      addRing(center.x, center.y, '#ffe37a', 56, 340);
      addRing(center.x, center.y, '#ff5ab1', 88, 420);
      playAssetSfx('buzz_clear', 0.98);
      const gain = Math.round((state.clipTime > 0 ? 3200 : 1600));
      state.score += gain;
      popText(center.x, center.y + 18, `+${fmt(gain)}`, '#ffe37a', 24);
      popText(center.x, center.y + 56, '大バズり突入!!', '#fff4a3', 26);
      spawnComment(false, 'バズりが3こつながって大バズりスタート！', 'super', '✨');
      triggerVoiceCue('hype', 2, { force:true });
      activateClipTime('buzz_item');
      if (fireResult.cleared.length) popText(center.x, center.y + 96, `炎消し x${fireResult.cleared.length}`, '#ffb7c5', 18);
      if (fireResult.weakened.length) popText(center.x, center.y + 126, `炎弱体化 x${fireResult.weakened.length}`, '#ffd3dc', 17);
      if (state.fireMode > 0 && !worldBodiesByType('fire').length) {
        handleFireResolved('clear');
      }
      return gain;
    }

    function clearGroup(group) {
      if (!group.length) return;
      if (group[0]?.gameType === 'hazard') {
        clearBombGroup(group);
        return;
      }
      if (group[0]?.gameType === 'buzz') {
        clearBuzzGroup(group);
        return;
      }
      const mainIndex = group[0]?.contentIndex ?? state.trendIndex;
      const accent = CONTENTS[mainIndex]?.accent || currentTrend().accent;
      const center = group.reduce((acc, body) => {
        acc.x += body.position.x;
        acc.y += body.position.y;
        return acc;
      }, { x:0, y:0 });
      center.x /= group.length;
      center.y /= group.length;

      const adjacentFire = collectAdjacentFireBodies(group);
      hardRemoveBodies(group);
      const fireResult = processAdjacentFireBodies(adjacentFire);
      invalidateBoardStatsCache();
      const sameDropCascade = state.currentChainDropSerial === state.dropSerial && state.chainDecay > 0;
      state.chainCount = sameDropCascade ? state.chainCount + 1 : 1;
      state.currentChainDropSerial = state.dropSerial;
      state.chainDecay = 1.28;
      state.peakChain = Math.max(state.peakChain, state.chainCount);
      const chainTier = state.chainCount;
      const topGapBefore = Math.max(0, crownTargetScore(state.seed) - Math.floor(state.score));
      state.clearCount += 1;
      state.combo += 1;
      state.comboTimer = 3.0;
      state.peakCombo = Math.max(state.peakCombo, state.combo);
      state.idle = 0;
      state.fireClearCount += state.fireMode > 0 ? 1 : 0;
      state.tension = clamp(state.tension + 11 + (state.clipTime > 0 ? 6 : 0), 0, 100);
      state.craving = clamp(state.craving - 12, 0, 100);
      state.heat = clamp(state.heat - 16 - adjacentFire.length * 3, 0, 100);
      state.buzz = clamp(state.buzz + 18 + chainTier * 3, 0, 100);

      addParticles(center.x, center.y, accent, 18, 7.4);
      addRing(center.x, center.y, accent, 18, state.clipTime > 0 ? 280 : 200);
      flashScreen(accent);
      if (fireResult.weakened.length) {
        fireResult.weakened.forEach(body => {
          addParticles(body.position.x, body.position.y, 'rgba(255,150,170,.78)', 8, 4.9);
          addRing(body.position.x, body.position.y, '#ff8fa8', 14, 180);
          popText(body.position.x, body.position.y - 16, '炎上弱体化', '#ffd3dc', 16);
        });
        popText(center.x, center.y + 66, `炎弱体化 x${fireResult.weakened.length}`, '#ffd3dc', 18);
      }
      if (fireResult.cleared.length) {
        fireResult.cleared.forEach(body => {
          addParticles(body.position.x, body.position.y, 'rgba(255,110,120,.88)', 10, 5.8);
          addRing(body.position.x, body.position.y, '#ff5b73', 18, 220);
        });
        popText(center.x, center.y + 96, `炎消し x${fireResult.cleared.length}`, '#ffb7c5', 18);
      }
      const chainFx = chainTierPresentation(chainTier, state.combo);
      const gain = applyComboGain({ center, accent, chainTier, comboCount:state.combo, noteText:state.combo >= 2 ? `COMBO x${state.combo}` : '' });
      if (chainTier >= 2) {
        addParticles(center.x, center.y, chainFx.primary, chainFx.particleCount, 8.2 + chainTier * 0.35);
        addParticles(center.x, center.y, chainFx.secondary, Math.max(8, chainFx.particleCount - 5), 7.2 + chainTier * 0.24);
        addRing(center.x, center.y, chainFx.primary, chainFx.ringRadius, chainFx.ringSpeed);
        addRing(center.x, center.y, chainFx.secondary, chainFx.ringRadius + 18 + chainTier * 2, chainFx.ringSpeed + 56);
        popText(center.x, center.y - 78, chainFx.label, chainFx.primary, chainFx.textSize);
      }
      if (state.clipTime > 0) spawnComment(false, '大バズり中！いまは2こで消える！', 'super', '✨');
      const topGapAfter = Math.max(0, crownTargetScore(state.seed) - Math.floor(state.score));
      const tookCrown = topGapBefore > 0 && topGapAfter <= 0 && crownTargetScore(state.seed) > 0;

      if (tookCrown) {
        state.crownTakeovers += 1;
        state.crownLead = true;
        state.crownHoldStreak = 0;
        popText(center.x, center.y - 162, '1位きた!', '#fff4a3', 34);
        showBigBuzzBanner('1位きた!!');
        flashScreen('#fff4a3');
        addRing(center.x, center.y - 34, '#fff4a3', 34, 320);
        addRing(center.x, center.y - 34, '#ff5ab1', 64, 380);
        spawnComment(false, '1位きた！王冠ゲット！', 'super', '👑');
        triggerVoiceCue('win', 1, { force:true });
        playAssetSfx('crown', 0.96);
      }

      if (chainTier >= 2) {
        if (chainTier >= 4) {
          popText(center.x, center.y + 88, chainFx.subLabel, chainFx.secondary, chainFx.chainSize);
          spawnComment(false, chainTier >= 8 ? '赤スパ固定まで来た！' : '連鎖つづいてる！', 'super', chainTier >= 8 ? '🟥' : '💥');
          triggerVoiceCue('chain', chainTier);
        }
        showSuperchatBanner(chainTier, gain, state.combo, { force:true });
        playChainTierSfx(chainTier, Math.min(1, 0.9 + chainTier * 0.035));
      } else if (state.combo >= 4) {
        triggerVoiceCue('big', state.combo);
        playAssetSfx('big', Math.min(1, 0.9 + state.combo * 0.04));
      } else {
        triggerVoiceCue('clear', group.length);
        playAssetSfx('clear', Math.min(1, 0.78 + state.combo * 0.05));
      }

      if (mainIndex === state.trendIndex) {
        shiftTrendQueue();
      }

      if (state.fireMode > 0 && !worldBodiesByType('fire').length) {
        handleFireResolved('clear');
      }
    }

    
function destroyEngine() {

      if (rafId) cancelAnimationFrame(rafId);
      if (render) {
        Render.stop(render);
        render.canvas.remove();
        render.textures = {};
      }
      if (engine) Composite.clear(engine.world, false);
      render = null;
      runner = null;
      engine = null;
      wallBodies = [];
      state.particles = [];
      state.rings = [];
      state.previewGroups = [];
      state.nextPreviewGroups = [];
      state.lastCollisionActiveRememberAt = 0;
      state.lastThawNearActiveAt = 0;
      state.lastFrameTs = 0;
      state.lastLogicTs = 0;
      state.physicsAccumulator = 0;
      resetLiveBodyRegistry();
      recentTouchPairs.clear();
      clearVisuals();
      dom.chatLane.innerHTML = '';
    }


    
function initEngine() {
      engine = Engine.create({ enableSleeping:true, gravity:{ x:0, y:1.5 }, positionIterations:2, velocityIterations:1, constraintIterations:1 });
      engine.timing.timeScale = 1;
      Events.on(engine, 'collisionStart', rememberCollisionTouchesStart);
      Events.on(engine, 'collisionActive', rememberCollisionTouchesActive);
      render = null;
      state.forceFullVisualSync = true;
      state.lastFrameTs = 0;
      state.lastLogicTs = 0;
      state.physicsAccumulator = 0;
      updateWorldBounds();
      configureRunnerPerformance();
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
      state.chainCount = 0;
      state.peakChain = 0;
      state.chainDecay = 0;
      state.currentChainDropSerial = -1;
      state.lastClearAt = 0;
      state.lastContentClearAt = 0;
      state.chainSuppressUntil = 0;
      state.dropSerial = 0;
      state.seed = todaySeed();
      state.rng = mulberry32(state.seed);
      state.trendIndex = Math.floor(gameRand() * CONTENTS.length);
      state.upcomingTrendQueue = [];
      state.nextTrendIndex = pickTrendExcluding(state.trendIndex);
      state.futureTrendIndex = pickTrendExcluding(state.trendIndex, state.nextTrendIndex);
      ensureUpcomingTrendQueue(7);
      state.trendTimer = trendDuration();
      state.trendWarning = false;
      state.idle = 0;
      state.scanTimer = 0;
      state.commentTimer = 0;
      state.fireCooldown = 0;
      state.fireMode = 0;
      state.fireClearCount = 0;
      state.hazardTimer = 4.2;
      state.buzzItemTimer = 17.6;
      state.showCaptionTimer = 0;
      state.selectedDropIndex = 0;
      state.queue = [0,0,0];
      state.pendingTrendClear = null;
      state.commentEventType = '';
      state.commentEventTimer = 0;
      state.commentEventText = '';
      state.previewGroups = [];
      state.nextPreviewGroups = [];
      state.lastCollisionActiveRememberAt = 0;
      state.lastThawNearActiveAt = 0;
      if (!(state.previewBodyLens instanceof Map)) state.previewBodyLens = new Map();
      if (!(state.nextPreviewBodyLens instanceof Map)) state.nextPreviewBodyLens = new Map();
      state.previewBodyLens.clear();
      state.nextPreviewBodyLens.clear();
      state.previewBodyIds = [];
      state.nextPreviewBodyIds = [];
      state.previewPeakLen = 0;
      state.nextPreviewPeakLen = 0;
      state.previewVisualsDirty = false;
      state.lastTs = 0;
      state.lastFrameTs = 0;
      state.lastLogicTs = 0;
      state.physicsAccumulator = 0;
      state.topDangerTime = 0;
      state.overfillTime = 0;
      state.moodTimer = 0;
      state.currentLine = choice(PLAYER_LINES.focus);
      state.ambientMoodLine = state.currentLine;
      state.ambientMoodTimer = 3.2;
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
      state.setupCarryLen = 0;
      state.jackChain = 0;
      state.peakJackChain = 0;
      state.switchCleared = false;
      state.hintCooldown = 0;
      state.gameOverReason = 'tension';
      state.crownLead = false;
      state.crownHoldStreak = 0;
      state.peakCrownHold = 0;
      state.crownTakeovers = 0;
      state.forecastHits = 0;
      state.waveLinkHits = 0;
      state.crownClutchHits = 0;
      state.streamTotal = 0;
      state.streamTime = 0;
      state.finalSpurt = false;
      state.visualTimer = 0;
      state.uiTimer = 0;
      state.cleanupTimer = 0;
      state.rescueTimer = 0;
      state.freezeTimer = 0;
      state.activeMovingCount = 0;
      state.visualHotBodiesCount = 0;
      state.fastMovingBodiesCount = 0;
      state.fxNeedsClear = false;
      state.backgroundWatchdogTimer = 0;
      invalidateBoardStatsCache();
      state.boardStatsCacheAt = 0;
      state.lastFullGroupScanAt = 0;
      resetLiveBodyRegistry();
      lastTrendForecastSignature = '';
      lastQueueSignature = '';
      lastDropSelectorIndex = -1;
      lastPreviewRenderKey = '';
      state.lastVoiceText = '';
      state.voiceSubtitleTimer = 0;
      state.speechBubbleText = '';
      state.speechBubbleTimer = 0;
      state.shiftGlowIds = [];
      state.shiftGlowTimer = 0;
      state.finishing = false;
      pendingClearVisualIds = [];
      lastSuperchatTier = 0;
      state.paused = false;
      state.resultVoicePlayed = false;
      recentTouchPairs.clear();
      avatarLockUntil = 0;
      avatarLockMood = 'normal';
      lastBigBuzzVisualActive = false;
      warningVoiceLatched = false;
      topVoiceLatched = false;
      focusVoiceCooldownUntil = 0;
      calmVoiceCooldownUntil = 0;
      startupVoiceLockUntil = 0;
      lastVoiceAt = 0;
      nextAmbientVoiceAt = 0;
      Object.keys(voiceCooldowns).forEach(key => voiceCooldowns[key] = 0);
      stopAllVoiceAudio();
      updateSeedLabels();
    }

    function activateClipTime(reason = 'buzz_item') {
      const fresh = state.clipTime <= 0.05;
      state.clipTime = Math.max(state.clipTime, fresh ? 15 : state.clipTime + 3.5);
      state.clipCooldown = 999;
      if (fresh) state.clipActivations += 1;
      setCaption(reason === 'buzz_item' ? 'バズりが3つつながって大バズリスタート！15秒間、ふつうのアイテムは2こで消える。' : '大バズリ中！いまはふつうのアイテムが2こで消える。', 2.6);
      spawnComment(false, reason === 'buzz_item' ? 'バズり3こで大バズリ！' : '大バズリつづき中！', 'super', '✨');
      triggerVoiceCue('hype', 2, { force:fresh });
      flashScreen('#ffe37a');
      showBigBuzzBanner('大バズリ!!', '2こで消える');
      setHyperMix(1);
      state.lastFullGroupScanAt = 0;
      updateBackgroundState(true);
      const cx = dom.board.clientWidth / 2;
      const cy = dom.board.clientHeight * 0.4;
      addParticles(cx, cy, 'rgba(255,216,76,.98)', 26, 8.4);
      addParticles(cx, cy, 'rgba(255,47,146,.96)', 20, 7.6);
      addParticles(cx, cy, 'rgba(255,255,255,.94)', 12, 6.8);
      addRing(cx, cy, '#fff4a3', 24, 260);
      addRing(cx, cy, '#ff5ab1', 38, 320);
      addRing(cx, cy, '#ffffff', 18, 200);
      if (!fresh) playAssetSfx('bigbuzz_extend', 0.9);
    }


    function goToTitle() {
      stopResultBgm();
      state.active = false;
      state.paused = false;
      destroyEngine();
      dom.pauseOverlay?.classList.add('hidden');
      dom.gameScreen.classList.add('hidden');
      dom.resultScreen.classList.add('hidden');
      dom.howtoScreen?.classList.add('hidden');
      dom.startScreen.classList.remove('hidden');
      document.body.classList.remove('gameplay-mode');
      document.body.classList.add('title-mode');
      avatarVisualFile = 'char_normal.png';
      activeBoardCharacterLayer = 'front';
      pendingAvatarMood = 'normal';
      avatarLockUntil = 0;
      avatarLockMood = 'normal';
      if (dom.boardCharacter) dom.boardCharacter.dataset.file = 'char_normal.png';
      if (dom.avatar) dom.avatar.dataset.file = 'char_normal.png';
      if (dom.boardCharacter) dom.boardCharacter.dataset.file = 'char_normal.png';
      if (dom.boardCharacterBack) dom.boardCharacterBack.dataset.file = 'char_normal.png';
      requestAnimationFrame(alignTrendMainToGameCenter);
      try { dom.bgmNormal.pause(); dom.bgmHyper.pause(); } catch(_) {}
      lastHyperBgmActive = false;
      warningVoiceLatched = false;
      topVoiceLatched = false;
      trendWarningSfxLatched = false;
      topWarningSfxLatched = false;
      hurrySfxLatched = false;
      helpReadySfxLatched = false;
      fireClearCueLatched = false;
      clearTimeout(trendShiftSfxTimer);
      trendShiftSfxTimer = 0;
      focusVoiceCooldownUntil = 0;
      calmVoiceCooldownUntil = 0;
      setHyperMix(0);
      setTitleBackgroundActive(true);
    }

    function togglePause(force) {
      if (!state.active || !engine) return;
      const next = typeof force === 'boolean' ? force : !state.paused;
      state.paused = next;
      dom.pauseOverlay?.classList.toggle('hidden', !next);
      if (next) {
        pauseBackgroundMedia(false);
        try { dom.bgmNormal.pause(); dom.bgmHyper.pause(); dom.gameoverFxVideo?.pause?.(); } catch(_) {}
        state.lastTs = 0;
        state.lastFrameTs = 0;
        state.lastLogicTs = 0;
        state.physicsAccumulator = 0;
      } else {
        state.lastFullGroupScanAt = 0;
      updateBackgroundState(true);
        setHyperMix(state.clipTime > 0 ? 1 : 0);
        state.lastTs = 0;
        state.lastFrameTs = 0;
        state.lastLogicTs = 0;
        state.physicsAccumulator = 0;
      }
    }

    function startGame() {
      stopResultBgm();
      persistPlayerName();
      preloadAllAvatars();
      ensureAudio();
      primeManagedMediaOnce();
      playBgm();
      document.body.classList.remove('title-mode');
      document.body.classList.add('gameplay-mode');
      setTitleBackgroundActive(false);
      dom.startScreen.classList.add('hidden');
      dom.howtoScreen?.classList.add('hidden');
      dom.resultScreen.classList.add('hidden');
      dom.gameScreen.classList.remove('hidden');
      dom.pauseOverlay?.classList.add('hidden');
      requestAnimationFrame(alignTrendMainToGameCenter);
      if (dom.avatar) { dom.avatar.src = 'assets/img/char_normal.png'; dom.avatar.dataset.file = 'char_normal.png'; }
      if (dom.boardCharacter) { dom.boardCharacter.src = 'assets/img/char_normal.png'; dom.boardCharacter.dataset.file = 'char_normal.png'; dom.boardCharacter.classList.add('active'); }
      if (dom.boardCharacterBack) { dom.boardCharacterBack.src = 'assets/img/char_normal.png'; dom.boardCharacterBack.dataset.file = 'char_normal.png'; dom.boardCharacterBack.classList.remove('active'); activeBoardCharacterLayer = 'front'; }
      avatarVisualFile = 'char_normal.png';
      activeBoardCharacterLayer = 'front';
      pendingAvatarMood = 'normal';
      avatarLockUntil = 0;
      avatarLockMood = 'normal';
      primeBigBuzzVisuals();
      state.avatarMood = 'normal';
      state.avatarVisualMood = 'normal';
      state.lastFullGroupScanAt = 0;
      updateBackgroundState(true);
      dom.gameShell.classList.remove('shake');
      dom.dangerFog.classList.remove('show');
      dom.topDangerLine.classList.remove('show');
      resetState();
      state.lastFullGroupScanAt = 0;
      updateBackgroundState(true);
      destroyEngine();
      resizeCanvas();
      initEngine();
      dom.dropSelectorButtons?.forEach(btn => btn.classList.remove('active'));
      setTrend(state.trendIndex, false, null, { suppressSpeech:true, suppressVoice:true });
      setSelectedDropIndex(0, { silent:true });
      updateDropSelectorUi();
      triggerVoiceCue('start', 1, { force:true });
      refreshQueue();
      updateUi();
      requestLoop(0);
    }

    function activateBurst() {
      if (!state.active || state.paused) return 0;
      if (!canUseBurstHelp()) {
        setCaption(hasLiveFire() ? 'おたすけは、もう少しで使える。' : '炎上中にだけ、おたすけが使える。', 1.2);
        playAssetSfx('drop_blocked', 0.62);
        return 0;
      }
      helpReadySfxLatched = false;
      state.buzzReady = false;
      state.buzzActivations += 1;
      state.fireCooldown = Math.max(state.fireCooldown, 2.8);
      return clearAllHazards(true);
    }

    function triggerFire(reason = 'bomb') {
      if (!state.active) return;
      fireClearCueLatched = false;
      helpReadySfxLatched = false;
      state.buzzReady = false;
      state.fireMode = Math.max(state.fireMode, 999);
      state.fireCooldown = Math.max(state.fireCooldown, 1.2);
      state.fireClearCount = 0;
      state.hazardTimer = Math.max(state.hazardTimer, 3.6);
      dom.dangerFog.classList.add('show');
      dom.gameShell.classList.add('shake');
      setCaption(reason === 'bomb_chain' ? '爆弾が3こつながって大炎上。炎アイテムが5〜8こ落ちてくる。' : '大炎上中。炎はとなりで2回消すと消える。1回で小さくなる。', 2.2);
      spawnComment(false, '炎が広がった！まずは立て直したい！', 'low', '🔥');
      triggerVoiceCue('fire');
      flashScreen('#ff5b73');
      const cx = dom.board.clientWidth / 2;
      const cy = dom.board.clientHeight * 0.4;
      addParticles(cx, cy, 'rgba(255,98,98,.98)', 28, 8.8);
      addParticles(cx, cy, 'rgba(255,196,120,.96)', 18, 7.4);
      addRing(cx, cy, '#ff6b7b', 28, 260);
      addRing(cx, cy, '#ffd2c4', 18, 190);
      playAssetSfx('fire_start', 0.98);
      say('fire', 2.2);
      showFireBanner('大炎上!!');
      setTimeout(() => dom.gameShell.classList.remove('shake'), 260);
    }


    function spawnHazard() {
      const boardW = boardLogicalRect().width;
      const x = 40 + gameRand() * (boardW - 80);
      const body = makeBody(x, 44, -1, 'hazard');
      invalidateBoardStatsCache();
      Body.setAngularVelocity(body, (gameRand() - 0.5) * 0.14);
      markBodyVisualDirty(body);
      addParticles(x, 48, 'rgba(255,255,255,.88)', 8, 3.8);
      popText(x, 92, '爆弾', '#ffffff', 22);
      spawnComment(false, '爆弾が来た！3こつながると大炎上！', 'low', '💣');
      playAssetSfx('hazard', 0.74);
    }

    function spawnBuzzItem() {
      const boardW = boardLogicalRect().width;
      const x = 40 + gameRand() * (boardW - 80);
      const body = makeBody(x, 44, -1, 'buzz');
      invalidateBoardStatsCache();
      Body.setAngularVelocity(body, (gameRand() - 0.5) * 0.12);
      markBodyVisualDirty(body);
      addParticles(x, 48, 'rgba(255,223,110,.94)', 8, 3.8);
      popText(x, 92, 'バズり', '#fff0a3', 22);
      spawnComment(false, 'バズりが来た！3こで大バズり！', 'super', '✨');
      playAssetSfx('buzz_spawn', 0.84);
    }


    function spawnHazardBurst(count = 6, originX = null) {
      if (!state.active || !engine) return 0;
      const boardW = boardLogicalRect().width;
      const spawnCount = clamp(Math.round(count || 0), 0, 18);
      if (spawnCount <= 0) return 0;
      const centerX = Number.isFinite(originX) ? originX : boardW / 2;
      const spread = Math.min(boardW * 0.32, 110 + spawnCount * 12);
      let dropped = 0;
      for (let i = 0; i < spawnCount; i += 1) {
        const laneOffset = (rand() - 0.5) * spread;
        const x = clamp(centerX + laneOffset, 36, boardW - 36);
        const y = 30 - i * 10;
        const body = makeBody(x, y, -1, 'fire');
        Body.setVelocity(body, { x:(rand() - 0.5) * 1.3, y:0.55 + rand() * 0.55 });
        Body.setAngularVelocity(body, (rand() - 0.5) * 0.18);
        markBodyVisualDirty(body);
        addParticles(x, Math.max(34, y + 20), 'rgba(255,110,120,.94)', 6, 3.8);
        addParticles(x, Math.max(34, y + 20), 'rgba(255,196,120,.92)', 4, 3.4);
        dropped += 1;
      }
      invalidateBoardStatsCache();
      state.fireMode = Math.max(state.fireMode, 999);
      return dropped;
    }

    function clearAllHazards(fromBurst = false) {
      if (!engine) return 0;
      const hazards = worldBodiesByType('fire');
      if (!hazards.length) {
        if (fromBurst) {
          setCaption('今となりで当てられる炎はないみたい。', 1.4);
          playAssetSfx('drop_blocked', 0.62);
        }
        return 0;
      }
      const desired = Math.min(hazards.length, 3 + Math.floor(rand() * 3));
      const shuffled = hazards.slice().sort(() => rand() - 0.5).slice(0, desired);
      let centerX = 0;
      let centerY = 0;
      for (const body of shuffled) {
        centerX += body.position.x;
        centerY += body.position.y;
        addParticles(body.position.x, body.position.y, 'rgba(255,180,120,.95)', 10, 5.6);
        addParticles(body.position.x, body.position.y, 'rgba(255,91,115,.92)', 8, 4.8);
        addRing(body.position.x, body.position.y, '#ff5b73', 18, 220);
      }
      centerX /= shuffled.length;
      centerY /= shuffled.length;
      hardRemoveBodies(shuffled);
      if (!worldBodiesByType('fire').length) state.fireMode = 0;
      state.fireCooldown = Math.max(state.fireCooldown || 0, 2.2);
      state.heat = clamp(state.heat - (12 + shuffled.length * 4), 0, 100);
      state.craving = clamp(state.craving - (6 + shuffled.length * 1.5), 0, 100);
      state.tension = clamp(state.tension + 6 + shuffled.length * 2, 0, 100);
      if (!worldBodiesByType('fire').length) dom.dangerFog.classList.remove('show');
      dom.gameShell.classList.add('shake');
      flashScreen('#ffcf5b');
      addRing(centerX, centerY, '#ffe37a', 34, 320);
      addRing(centerX, centerY, '#ff5b73', 62, 260);
      popText(centerX, centerY, `火消し x${shuffled.length}`, '#fff0a3', 28);
      spawnComment(false, `おたすけで炎を${shuffled.length}こ消した！`, 'super', '🧯');
      setCaption('おたすけで炎を3〜5こだけ消したよ。爆弾はそのまま。', 2.2);
      triggerVoiceCue('apology_fire', Math.max(2, shuffled.length));
      playAssetSfx('burst', 0.98);
      if (!worldBodiesByType('fire').length) handleFireResolved('help');
      setTimeout(() => dom.gameShell.classList.remove('shake'), 320);
      return shuffled.length;
    }

    function dropAt(clientX) {

      if (!state.active || !engine || state.paused) return;
      const info = boardLogicalRect();
      if (clientX < info.left || clientX > info.right) return;
      const idx = state.selectedDropIndex ?? 0;
      const radius = dropRadiusFor(idx);
      const metrics = getBoardMetrics();
      const spawnY = Math.max(radius + 6, metrics.fullLineY - radius - 6);
      const desiredX = clamp((clientX - info.left) * info.scaleX, radius + 6, info.width - radius - 6);
      const safeDrop = findSafeDropX(desiredX, radius, spawnY);
      hoverX = safeDrop.x;
      renderPreview();

      if (!safeDrop.clear) {
        setCaption('投下ライン付近がふさがっている。少し崩してから落とそう。', 0.9);
        playAssetSfx('drop_blocked', 0.74);
        return;
      }

      const x = safeDrop.x;
      if (safeDrop.shifted && Math.abs(safeDrop.x - desiredX) > 10) {
        setCaption('上が詰まり気味だったので、近い空きレーンにずらしました。', 0.65);
      }

      ensureQueueLength(3);
      const idx2 = state.selectedDropIndex ?? 0;
      const launchFxCenter = previewLaunchCenter(x, idx2);
      triggerPreviewLaunchFx(CONTENTS[idx2]?.accent || '#ffffff');
      state.dropSerial += 1;
      const body = makeBody(x, spawnY, idx2, false);
      invalidateBoardStatsCache();
      body.spawnSerial = state.dropSerial;
      ensureQueueLength(3);
      state.idle = 0;
      state.tension = clamp(state.tension - 0.18, 0, 100);
      state.heat = clamp(state.heat + (idx2 === state.trendIndex ? 1.0 : 6.2), 0, 100);
      if (idx2 !== state.trendIndex) {
        state.craving = clamp(state.craving + 1.2, 0, 100);
        state.combo = Math.max(0, state.combo - 1);
        if (rand() < 0.08) spawnComment(false, `${CONTENTS[idx2].name}は今の本命ではないかも`, 'low', contentChatIcon(idx2));
      } else {
        if (rand() < 0.08) spawnComment(false, `${CONTENTS[idx2].name}、いま欲しいやつ`, 'hot', contentChatIcon(idx2));
      }
      renderPreview();
      addParticles(launchFxCenter.x, launchFxCenter.y, CONTENTS[idx2].accent, 9, 3.4);
      addRing(launchFxCenter.x, launchFxCenter.y, CONTENTS[idx2].accent, 14, 180);
      playAssetSfx('drop', 0.72);
    }

    function updateUi() {
      dom.scoreView.textContent = fmt(state.score);
      if (dom.scoreViewTop) dom.scoreViewTop.textContent = fmt(state.score);
      if (dom.comboView) dom.comboView.textContent = `x${state.combo}`;
      if (dom.chainView) dom.chainView.textContent = `${state.chainCount || 0}連鎖`;
      const topGap = Math.max(0, crownTargetScore(state.seed) - Math.floor(state.score));
      const leaderName = crownTargetName(state.seed).slice(0, 10);
      dom.bestMini.textContent = crownTargetScore(state.seed) ? (topGap <= 0 ? 'TOP' : fmt(topGap)) : 'TOP';
      const crownTarget = Math.max(crownTargetScore(state.seed), Math.floor(state.score), 12000);
      const crownRatio = crownTarget > 0 ? clamp(state.score / crownTarget, 0, 1) : 0;
      if (dom.crownFill) dom.crownFill.style.width = `${Math.round(crownRatio * 100)}%`;
      if (dom.topGapText) dom.topGapText.textContent = crownTargetScore(state.seed) ? (topGap <= 0 ? `👑 いま先頭 | ${playerName()}` : `👑 ${leaderName} まで あと ${fmt(topGap)}`) : '👑 まずは今日の王冠ラインを作ろう';
      if (dom.crownMini) dom.crownMini.textContent = crownTargetScore(state.seed) ? (topGap <= 0 ? `先頭キープ | ${playerName()}` : `${leaderName} まで ${fmt(topGap)}`) : '最初の王冠ラインを作ろう';
      dom.tensionFill.style.width = `${clamp(state.tension, 0, 100)}%`;
      dom.cravingFill.style.width = `${clamp(state.craving, 0, 100)}%`;
      dom.heatFill.style.width = `${clamp(state.heat, 0, 100)}%`;
      dom.buzzFill.style.width = `${clamp(state.buzz, 0, 100)}%`;
      dom.tensionNum.textContent = fmt(state.tension);
      dom.cravingNum.textContent = fmt(state.craving);
      dom.heatNum.textContent = fmt(state.heat);
      dom.buzzNum.textContent = fmt(state.buzz);
      dom.trendTimer.textContent = '';
      refreshTrendForecastUi();
      if (dom.trendProgressFill) dom.trendProgressFill.style.width = '100%';
      if (dom.nextSwitchCopy) dom.nextSwitchCopy.textContent = ''; 
      if (dom.trendCopy) dom.trendCopy.textContent = '';
      dom.centerTop?.classList.toggle('warning', false);
      dom.nextBlock?.classList.toggle('warning', false);
      if (dom.comboView) dom.comboView.textContent = `x${state.combo}`;
      if (dom.chainView) dom.chainView.textContent = `${state.chainCount || 0}連鎖`;
      const avatarMood = performance.now() < avatarLockUntil ? avatarLockMood : pickAvatarMood();
      setAvatarVisual(avatarMood);
      updateBurstReadiness();
      dom.topDangerLine.classList.toggle('show', state.topDangerTime > 0.45 || state.overfillTime > 0.35);
      if (dom.streamTimeMini) dom.streamTimeMini.textContent = '';
      if (dom.streamTimeTop) dom.streamTimeTop.textContent = '';
      const crownRushActive = topGap > 0 && topGap <= 5200;
      const crownClutchActive = topGap > 0 && topGap <= 1800;
      const previewLen = biggestPreviewLen();
      const nextPreviewLen = biggestNextPreviewLen();
      state.trendWarning = nextPreviewLen >= 2;
      let eventMiniText = '';
      if (isFeverActive()) eventMiniText = `大バズり中 ${Math.max(1, Math.ceil(state.clipTime))}s`;
      else if (state.fireMode > 0) eventMiniText = '大炎上中';
      else if (state.chainCount >= 2 && state.chainDecay > 0) eventMiniText = `${state.chainCount}連鎖`; 
      else if (state.overfillTime > 0.2) eventMiniText = '満杯危険';
      else eventMiniText = state.crownHoldStreak > 0 ? `王冠キープ x${state.crownHoldStreak}` : 'チャンス待ち';
      const crownMini = topGap > 0 ? `1位まで ${fmt(topGap)}` : 'いま1位';
      setEventMiniText(`${eventMiniText}｜DAILY #${state.seed}｜${crownMini}`);
      if (state.showCaptionTimer <= 0 && state.active) {
        let caption = '';
        if (state.clipTime > 0) {
          caption = '大バズり中。ふつうのアイテムは2こつながると消える。';
        } else if (state.rushWindow > 0) {
          caption = previewLen >= 2
            ? `先読みGO。『${currentTrend().name}』あと1つ。`
            : `いまは『${currentTrend().name}』を3つ以上。`;
        } else if (state.trendWarning) {
          if (nextPreviewLen >= 3) caption = `次は『${nextTrend().name}』。もう見えてる。`;
          else if (nextPreviewLen >= 2) caption = `次は『${nextTrend().name}』。あと1個で完成。`;
          else caption = `次は『${nextTrend().name}』、その次は『${futureTrend().name}』。`;
        } else if (state.overfillTime > 0.18) {
          caption = `満杯注意。いまは『${currentTrend().name}』を優先。`;
        } else if (state.chainCount >= 2 && state.chainDecay > 0) {
          caption = `${state.chainCount}連鎖中。`;
        } else if (state.jackChain > 0) {
          caption = `先読み連勝 x${state.jackChain}`;
        } else if (state.crownHoldStreak > 0 && topGap <= 0) {
          caption = 'いま1位。1位キープを重ねるほど王冠が固くなる。';
        } else if (crownClutchActive) {
          caption = `あと${fmt(topGap)}で今日の1位。`;
        } else {
          caption = `今は『${currentTrend().name}』を3こ以上。次は『${nextTrend().name}』。`; 
        }
        dom.captionText.textContent = caption;
      }
      updatePinCommentUi();
      if (dom.burstBtn) {
        if (state.fireMode > 0) dom.burstBtn.classList.add('warn');
        else dom.burstBtn.classList.remove('warn');
      }
    }

    function updateDynamicVoiceCues(now = performance.now()) {
      if (now < startupVoiceLockUntil) return;
      const previewLen = biggestPreviewLen();
      const nextPreviewLen = biggestNextPreviewLen();
      const warningActive = state.trendWarning && nextPreviewLen >= 2 && state.fireMode <= 0 && state.clipTime <= 0;
      const topActive = (state.topDangerTime > 0.78 || state.overfillTime > 0.48) && state.fireMode <= 0;
      const focusActive = previewLen >= 2 && !warningActive && !topActive && state.fireMode <= 0 && state.clipTime <= 0;
      const calmActive = state.active && !focusActive && !warningActive && !topActive && state.fireMode <= 0 && state.clipTime <= 0;

      if (warningActive) {
        if (!trendWarningSfxLatched) {
          playAssetSfx('warn', 0.84);
          trendWarningSfxLatched = true;
        }
        if (!warningVoiceLatched && triggerVoiceCue('warning', nextPreviewLen)) warningVoiceLatched = true;
      } else if (nextPreviewLen <= 1) {
        warningVoiceLatched = false;
        trendWarningSfxLatched = false;
      }

      if (topActive) {
        if (!topWarningSfxLatched) {
          playAssetSfx('topline', 0.9);
          topWarningSfxLatched = true;
        }
        if (!topVoiceLatched && triggerVoiceCue('top')) topVoiceLatched = true;
      } else if (state.topDangerTime < 0.18 && state.overfillTime < 0.14) {
        topVoiceLatched = false;
        topWarningSfxLatched = false;
      }

      const hurryActive = state.active && state.tension <= 22 && !topActive && !warningActive && state.fireMode <= 0 && state.clipTime <= 0;
      if (hurryActive) {
        if (!hurrySfxLatched) {
          playAssetSfx('hurry', 0.88);
          hurrySfxLatched = true;
        }
      } else if (state.tension >= 28 || topActive || warningActive || state.fireMode > 0 || state.clipTime > 0) {
        hurrySfxLatched = false;
      }

      if (focusActive && now >= focusVoiceCooldownUntil) {
        if (triggerVoiceCue('focus', previewLen)) {
          focusVoiceCooldownUntil = now + (previewLen >= 3 ? 6200 : 7600);
          calmVoiceCooldownUntil = Math.max(calmVoiceCooldownUntil, now + 4200);
        }
      }

      if (calmActive && state.runTime > 6 && now >= calmVoiceCooldownUntil) {
        if (triggerVoiceCue('calm')) {
          calmVoiceCooldownUntil = now + 14000 + Math.round(gameRand() * 2600);
        }
      }
    }


function stepPhysics(frameDt) {
  if (!engine) return;
  const now = performance.now();
  refreshActiveBodies(now);
  const baseFixedDeltaMs = state.fixedDeltaMs || (1000 / 36);
  const highPrecision = needsHighPrecisionPhysics(now);
  const fixedDeltaMs = highPrecision ? Math.min(baseFixedDeltaMs, 1000 / 48) : baseFixedDeltaMs;
  const maxSteps = highPrecision ? Math.max(2, state.maxPhysicsSteps || 1) : 1;
  applyPhysicsQuality(highPrecision);
  const thawIntervalMs = (state.liveBodies?.length || 0) >= 38 ? 96 : ((state.liveBodies?.length || 0) >= 26 ? 68 : 44);
  if (now - (state.lastThawNearActiveAt || 0) >= thawIntervalMs) {
    state.lastThawNearActiveAt = now;
    thawFrozenBodiesNearActive(now);
  }
  state.physicsAccumulator = Math.min((state.physicsAccumulator || 0) + frameDt * 1000, fixedDeltaMs * (maxSteps + 1.35));
  let steps = 0;
  while (state.physicsAccumulator >= fixedDeltaMs && steps < maxSteps) {
    Engine.update(engine, fixedDeltaMs);
    state.physicsAccumulator -= fixedDeltaMs;
    steps += 1;
  }
  if (steps > 0) {
    invalidateBoardStatsCache();
    refreshActiveBodies(now);
    stabilizeActiveBodies(now);
  }
}

    
function requestLoop(ts) {
      rafId = requestAnimationFrame(requestLoop);
      if (!state.active || !engine || state.paused) return;
      state.frameStamp = ts;
      if (!state.lastFrameTs) {
        state.lastFrameTs = ts;
        state.lastLogicTs = ts;
        return;
      }
      const frameDt = clamp((ts - state.lastFrameTs) / 1000, 0.001, 0.05);
      state.lastFrameTs = ts;
      stepPhysics(frameDt);

      state.visualTimer += frameDt;
      const forceVisualNow = hasFastMovingBodies();
      if (state.visualTimer >= perfSettings.visualInterval || forceVisualNow) {
        const visualDt = forceVisualNow ? Math.max(frameDt, state.visualTimer) : state.visualTimer;
        if (state.particles.length || state.rings.length || state.fxNeedsClear) updateFx(visualDt);
        if (hasPendingVisualWork()) syncBodyVisuals();
        state.visualTimer = 0;
      }
      backgroundWatchdog(frameDt);

      if (state.lastLogicTs && ts - state.lastLogicTs < (perfSettings.logicFrameMs || 0)) return;
      const dt = clamp((ts - state.lastLogicTs) / 1000, 0.001, 0.08);
      state.lastLogicTs = ts;
      state.idle += dt;
      state.runTime += dt;
      const liveCount = state.liveBodies?.length || 0;
      const crowdFactor = liveCount >= 46 ? 2.65 : (liveCount >= 38 ? 2.2 : (liveCount >= 32 ? 1.85 : (liveCount >= 26 ? 1.5 : (liveCount >= 20 ? 1.22 : 1))));
      state.scanTimer += dt;
      state.commentTimer += dt;
      state.clipCooldown = Math.max(0, state.clipCooldown - dt);
      state.fireCooldown = Math.max(0, state.fireCooldown - dt);
      state.showCaptionTimer = Math.max(0, state.showCaptionTimer - dt);
      state.recentSwitchBonus = Math.max(0, state.recentSwitchBonus - dt);
      state.shiftGlowTimer = Math.max(0, state.shiftGlowTimer - dt);
      state.pinTimer = Math.max(0, state.pinTimer - dt);
      state.rushWindow = Math.max(0, state.rushWindow - dt);
      state.hintCooldown = Math.max(0, state.hintCooldown - dt);
      if (state.clipTime > 0) {
        const wasClipActive = state.clipTime > 0;
        state.clipTime = Math.max(0, state.clipTime - dt);
        if (wasClipActive && state.clipTime <= 0) {
          state.lastFullGroupScanAt = 0;
      updateBackgroundState(true);
          setHyperMix(0);
          setCaption('大バズりおわり。次のチャンスまで盤面を整えよう。', 1.8);
        }
      }
      if (state.comboTimer > 0) {
        state.comboTimer -= dt;
        if (state.comboTimer <= 0) state.combo = 0;
      }
      if (state.chainDecay > 0) {
        state.chainDecay = Math.max(0, state.chainDecay - dt);
        if (state.chainDecay <= 0) {
          resetChainState();
        }
      } else if (state.chainCount !== 0) {
        resetChainState();
      }

      const stats = boardStats();
      const idlePenalty = state.idle > 5.8 ? (state.idle - 5.8) * 0.46 : 0;
      const drain = (0.36 + stats.pressure * 1.16 + idlePenalty + (state.fireMode > 0 ? 0.88 : 0) + (state.topDangerTime > 0.45 ? 1.24 : 0) + (state.finalSpurt ? 0.38 : 0)) * dt;
      const cravingGain = (0.18 + stats.clutter * 0.78 + idlePenalty * 0.62 + (state.fireMode > 0 ? 1.02 : 0)) * dt;
      const heatGain = (stats.clutter * 15 + stats.pressure * 4.1 + idlePenalty * 7 + (stats.nearTop ? 10 : 0)) * dt * 0.108;
      state.tension = clamp(state.tension - drain, 0, 100);
      state.craving = clamp(state.craving + cravingGain, 0, 100);
      state.heat = clamp(state.heat + heatGain, 0, 100);
      state.topDangerTime = stats.nearTop ? state.topDangerTime + dt : Math.max(0, state.topDangerTime - dt * 1.8);
      state.overfillTime = stats.restedOverfillCount >= 2 ? state.overfillTime + dt : Math.max(0, state.overfillTime - dt * 2.6);


      state.hazardTimer = Math.max(0, state.hazardTimer - dt);
      if (state.hazardTimer <= 0 && state.runTime >= 4.2) {
        spawnHazard();
        state.hazardTimer = 7.4 + rand() * 4.6;
      }
      state.buzzItemTimer = Math.max(0, state.buzzItemTimer - dt);
      if (state.buzzItemTimer <= 0 && state.runTime >= 7.2) {
        spawnBuzzItem();
        state.buzzItemTimer = 20.4 + rand() * 12.8;
      }

      const scanInterval = currentScanInterval(crowdFactor);
      if (state.scanTimer >= scanInterval) {
        state.scanTimer = 0;
        scanGroups();
        resolveGroups();
      }
      const previewLen = biggestPreviewLen();
      const nextPreviewLen = biggestNextPreviewLen();
      state.trendWarning = nextPreviewLen >= 2;
      if (previewLen >= 2 && state.hintCooldown <= 0 && state.fireMode <= 0) {
        if (previewLen === 2) {
          spawnComment(false, `あと1こで${currentTrend().name}が消せる！`, 'hot', '👀');
          if (rand() < 0.45) spawnComment(false, state.pinTargetIndex === state.nextTrendIndex ? `ピンどおりなら次の${nextTrend().name}も取りたい！` : `ピンどおりなら${currentTrend().name}でボーナス！`, 'next', '📌');
          if (Math.max(0, crownTargetScore(state.seed) - Math.floor(state.score)) <= 4500 && crownTargetScore(state.seed) > 0) spawnComment(false, '1位が見えてきた！', 'super', '👑');
          state.hintCooldown = 4.8;
        } else if (previewLen >= 3) {
          spawnComment(false, `そのまま${currentTrend().name}が消せそう！`, 'super', '✨');
          state.hintCooldown = 3.6;
        }
      } else if (state.trendWarning && nextPreviewLen >= 2 && state.hintCooldown <= 0 && state.fireMode <= 0) {
        if (nextPreviewLen === 2) {
          spawnComment(false, `次の${nextTrend().name}、あと1こで形になる！`, 'next', '🌊');
          state.hintCooldown = 4.6;
        } else {
          spawnComment(false, `次の${nextTrend().name}、もう見えてる！`, 'super', '🌊');
          state.hintCooldown = 3.4;
        }
      }
      if (state.pinTimer <= 0) {
        rollPinnedComment(state.clipTime > 0 ? 'clip' : 'normal');
      }

      state.commentEventTimer = 0;
      state.commentEventType = '';
      state.commentEventText = '';
      const chatInterval = (state.clipTime > 0 ? 1.95 : 3.25) * perfSettings.commentIntervalScale * Math.min(1.28, 0.96 + (crowdFactor - 1) * 0.22);
      if (state.commentTimer >= chatInterval) {
        state.commentTimer = 0;
        spawnComment(false);
      }

      if (state.fireMode > 0) {
        const hasFireItems = worldBodiesByType('fire').length > 0;
        if (hasFireItems) {
          dom.dangerFog.classList.add('show');
        } else {
          state.fireMode = Math.max(0, state.fireMode - dt * 3.2);
          if (state.fireMode <= 0) {
            handleFireResolved('clear');
          }
        }
      }
      if (state.buzzMode > 0) {
        state.buzzMode -= dt;
        if (state.buzzMode <= 0 && !state.buzzReady) {
          setCaption('大バズりおわり。次のチャンスまで盤面を整えよう。', 1.6);
        }
      }

      const mixStrength = clamp((state.fireMode > 0 ? 0.78 : 0) + (state.buzzMode > 0 ? 0.92 : 0) + (state.clipTime > 0 ? 0.36 : 0) + (state.tension < 35 ? 0.32 : 0) + (state.topDangerTime > 0.5 ? 0.22 : 0), 0, 1);
      setHyperMix(mixStrength);
      updateMoodText(dt);
      state.uiTimer += dt;
      state.cleanupTimer += dt;
      state.rescueTimer += dt;
      state.freezeTimer += dt;
      if (state.freezeTimer >= (perfSettings.freezeCheckInterval || 0.42) * Math.min(1.12, 0.94 + (crowdFactor - 1) * 0.08)) {
        state.freezeTimer = 0;
        thawFrozenBodiesNearActive(performance.now());
        freezeRestedBodies(performance.now());
      }
      if (state.cleanupTimer >= perfSettings.cleanupInterval * crowdFactor) {
        state.cleanupTimer = 0;
        cleanupOffscreenBodies();
        purgeBrokenBodies();
      }
      if (state.rescueTimer >= perfSettings.rescueInterval * Math.min(1.22, 0.9 + (crowdFactor - 1) * 0.18)) {
        state.rescueTimer = 0;
        const maintenanceNow = performance.now();
        rescueFloatingBodies(maintenanceNow);
        const needOverlapSweep = (state.repairQueueIds?.size || 0) > 0
          || (state.activeMovingCount || 0) > 0
          || recentTouchPairs.size > 0
          || maintenanceNow - (state.lastFullOverlapSweepAt || 0) > ((state.liveBodies?.length || 0) >= 40 ? 2800 : 2200);
        if (needOverlapSweep) separateDeepOverlaps(maintenanceNow);
      }
      if (state.uiTimer >= perfSettings.uiInterval * Math.min(1.18, 0.96 + (crowdFactor - 1) * 0.16)) {
        updateDynamicVoiceCues(ts);
        updateUi();
        state.uiTimer = 0;
      }

      const fullLineCluster = stats.restedOverfillCount >= 2 && stats.overfillSpan >= (dom.board.clientWidth * 0.18);
      if ((state.overfillTime > 1.65 && fullLineCluster) || stats.restedOverfillCount >= 5) {
        state.gameOverReason = 'full';
        finishGame();
      }
    }


    function finishGame() {
      if (!state.active || state.finishing) return;
      if (state.gameOverReason === 'time') state.gameOverReason = 'full';
      state.finishing = true;
      state.active = false;
      state.clipTime = 0;
      cancelAnimationFrame(rafId);
      rafId = 0;
      try { dom.bgmNormal.pause(); } catch (_) {}
      try { dom.bgmHyper.pause(); } catch (_) {}
      try { dom.bgmNormal.currentTime = 0; } catch (_) {}
      try { dom.bgmHyper.currentTime = 0; } catch (_) {}
      try { dom.bgmNormal.volume = 0; } catch (_) {}
      try { dom.bgmHyper.volume = 0; } catch (_) {}
      lastHyperBgmActive = false;

      const resultDelay = 700;
      if (dom.gameoverFxVideo) { try { dom.gameoverFxVideo.currentTime = 0; dom.gameoverFxVideo.classList.add('show'); dom.gameoverFxVideo.play().catch(() => {}); } catch(_) {} }
      const isTimeUp = false;
      const fxColor = isTimeUp ? '#ffe37a' : '#ff5b73';
      flashScreen(fxColor);
      dom.gameShell.classList.add('shake');
      popText(dom.board.clientWidth / 2, dom.board.clientHeight * 0.34, isTimeUp ? 'TIME UP' : 'GAME OVER', isTimeUp ? '#fff0a3' : '#ff9bb1', 32);
      popText(dom.board.clientWidth / 2, dom.board.clientHeight * 0.47, isTimeUp ? '配信終了' : '配信事故', '#ffffff', 20);
      addRing(dom.board.clientWidth / 2, dom.board.clientHeight * 0.38, fxColor, 40, 360);
      addRing(dom.board.clientWidth / 2, dom.board.clientHeight * 0.38, '#ffffff', 64, 260);
      setAvatarVisual(isTimeUp ? 'yami' : 'panic');
      stopAllVoiceAudio();
      state.resultVoicePlayed = triggerVoiceCue((crownTargetScore(state.seed) > 0 && Math.floor(state.score) >= crownTargetScore(state.seed)) ? 'win' : 'lose');
      playAssetSfx('bad', isTimeUp ? 0.82 : 0.96);

      setTimeout(() => {
        dom.gameShell.classList.remove('shake');
        if (dom.gameoverFxVideo) { dom.gameoverFxVideo.classList.remove('show'); try { dom.gameoverFxVideo.pause(); } catch(_) {} }
        dom.gameScreen.classList.add('hidden');
        dom.resultScreen.classList.remove('hidden');
        document.body.classList.remove('gameplay-mode','title-mode');
        requestAnimationFrame(alignTrendMainToGameCenter);
        const winLike = crownTargetScore(state.seed) > 0 && Math.floor(state.score) >= crownTargetScore(state.seed);
        stopResultBgm();
        playResultBgm(winLike);
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
        dom.peakCombo.textContent = `${fmt(state.peakCombo)} / ${fmt(state.peakChain)}連鎖`;
        dom.dailyRank.textContent = myRank > 0 ? `#${myRank}` : '-';
        dom.peakBuzz.textContent = `${fmt(state.buzzActivations)} / ${fmt(state.clipActivations)} / ${fmt(state.rushHits)} / ${fmt(state.waveLinkHits)} / ${fmt(state.crownTakeovers)} / ${fmt(state.peakCrownHold)}`;
        const top = crownTargetScore(state.seed);
        const gap = Math.max(0, top - Math.floor(state.score));
        dom.bestMini.textContent = top ? (gap <= 0 ? 'TOP' : fmt(gap)) : 'TOP';
        renderDailyBoard(dom.dailyBoard);
        renderDailyBoard(dom.resultDailyBoard);
        if (myRank === 1) {
          dom.resultCopy.textContent = isNewBest
            ? `今日の1位をゲット！ベスト更新！${state.peakCrownHold > 0 ? ` 王冠キープ x${state.peakCrownHold}。` : ''}${state.waveLinkHits > 0 ? ` なみ読み x${state.waveLinkHits}。` : ''}`
            : `今日の1位！王冠キープ成功！${state.peakCrownHold > 0 ? ` 王冠キープ x${state.peakCrownHold}。` : ''}${state.waveLinkHits > 0 ? ` なみ読み x${state.waveLinkHits}。` : ''}`;
        } else if (isNewBest) {
          dom.resultCopy.textContent = `ベスト更新！${gap > 0 ? `あと${fmt(gap)}で今日の1位。` : '今日の王冠に届いた。'}${state.waveLinkHits > 0 ? ` なみ読み x${state.waveLinkHits}。` : ''}${myRank > 0 ? ` DAILY #${myRank}` : ''}`;
        } else if (state.gameOverReason === 'full') {
          dom.resultCopy.textContent = `盤面が満杯になって配信終了。上の赤ラインを越える前に、いま消せる話題を優先したい。${myRank > 0 ? ` DAILY #${myRank}` : ''}`;
        } else if (state.gameOverReason === 'top') {
          dom.resultCopy.textContent = `上まで詰まって配信事故。仕込みすぎで盤面が崩れた。${myRank > 0 ? ` DAILY #${myRank}` : ''}`;
        } else if (state.gameOverReason === 'time') {
          dom.resultCopy.textContent = `配信時間終了。短期決戦のスコアアタックとして終了した。${myRank > 0 ? ` DAILY #${myRank}` : ''}`;
        } else {
          dom.resultCopy.textContent = `視聴者のテンションが尽きて、配信が沈んだ。次は先読みで流れを取りたい。${myRank > 0 ? ` DAILY #${myRank}` : ''}`;
        }
        try { dom.bgmNormal.pause(); dom.bgmHyper.pause(); } catch(_) {}
        lastHyperBgmActive = false;
      warningVoiceLatched = false;
      topVoiceLatched = false;
      trendWarningSfxLatched = false;
      topWarningSfxLatched = false;
      hurrySfxLatched = false;
      helpReadySfxLatched = false;
      fireClearCueLatched = false;
      clearTimeout(trendShiftSfxTimer);
      trendShiftSfxTimer = 0;
      focusVoiceCooldownUntil = 0;
      calmVoiceCooldownUntil = 0;
      setHyperMix(0);
        destroyEngine();
        state.finishing = false;
      }, resultDelay);
    }

    async function copyResult() {
      const top = crownTargetScore(state.seed);
      const gap = Math.max(0, top - Math.floor(state.score));
      const crownName = crownTargetName(state.seed) || 'TOP';
      const text = `${playerName()} | トレバズ！ | DAILY #${state.seed}
SCORE ${fmt(state.score)}
MAX COMBO ${fmt(state.peakCombo)} / おたすけ ${fmt(state.buzzActivations)} / 大バズり ${fmt(state.clipActivations)} / 先読み ${fmt(state.rushHits)} / なみ読み ${fmt(state.waveLinkHits)} / 1位とった ${fmt(state.crownTakeovers)} / 1位キープ ${fmt(state.peakCrownHold)}
${gap > 0 ? `${crownName} まであと ${fmt(gap)}` : '今日の王冠を獲得'}
#トレバズ`;
      try {
        await navigator.clipboard.writeText(text);
        setCaption('結果をコピーした。配信者同士でそのまま貼って競える。', 2.2);
        playAssetSfx('ui_copy', 0.82);
        if (dom.shareBtn) dom.shareBtn.textContent = '✅ コピー済み';
        setTimeout(() => { if (dom.shareBtn) dom.shareBtn.textContent = '📋 結果をコピー'; }, 1600);
      } catch (_) {
        setCaption('コピーに失敗した。ブラウザの許可を確認して。', 2.2);
      }
    }

    function installServiceWorker() {
      if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistrations()
      .then(registrations => Promise.all(registrations.map(reg => reg.update?.())))
      .catch(() => {});
    navigator.serviceWorker.register(`./sw.js?build=${BUILD_ID}`, { updateViaCache:'none' }).catch(() => {});
          navigator.serviceWorker.addEventListener('controllerchange', () => { setTimeout(() => location.reload(), 60); }, { once:true });
  });
}
    }

    dom.startBtn.addEventListener('click', () => { playAssetSfx('ui_start', 0.9); startGame(); });
    dom.retryBtn.addEventListener('click', () => { playAssetSfx('ui_retry', 0.88); if (typeof stopResultBgm === 'function') stopResultBgm(); startGame(); });
    if (new URLSearchParams(location.search).get('auto') === '1') {
      window.addEventListener('load', () => setTimeout(() => dom.startBtn?.click(), 80), { once:true });
    }

    dom.howtoBtn?.addEventListener('click', () => { playAssetSfx('ui_open', 0.82); document.body.classList.remove('title-mode','gameplay-mode'); setTitleBackgroundActive(false); dom.startScreen.classList.add('hidden'); dom.howtoScreen?.classList.remove('hidden'); requestAnimationFrame(alignTrendMainToGameCenter); });
    dom.howtoBackBtn?.addEventListener('click', () => { playAssetSfx('ui_back', 0.82); document.body.classList.remove('gameplay-mode'); document.body.classList.add('title-mode'); setTitleBackgroundActive(true); dom.howtoScreen?.classList.add('hidden'); dom.startScreen.classList.remove('hidden'); requestAnimationFrame(alignTrendMainToGameCenter); });
    dom.howtoStartBtn?.addEventListener('click', () => { playAssetSfx('ui_start', 0.9); startGame(); });
    dom.pauseBtn?.addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); playAssetSfx(state.paused ? 'ui_pause_close' : 'ui_pause_open', 0.82); togglePause(); });
    dom.resumeGameBtn?.addEventListener('click', () => { playAssetSfx('ui_pause_close', 0.82); togglePause(false); });
    dom.resumeBtn?.addEventListener('click', () => { playAssetSfx('ui_pause_close', 0.82); togglePause(false); });
    dom.retryPlayBtn?.addEventListener('click', () => { playAssetSfx('ui_retry', 0.88); startGame(); });
    dom.pauseRetryBtn?.addEventListener('click', () => { playAssetSfx('ui_retry', 0.88); startGame(); });
    dom.titleBtn?.addEventListener('click', () => { playAssetSfx('ui_back', 0.82); goToTitle(); });
    dom.pauseTitleBtn?.addEventListener('click', () => { playAssetSfx('ui_back', 0.82); goToTitle(); });
    dom.pauseMuteBtn?.addEventListener('click', toggleMute);
    dom.resultTitleBtn?.addEventListener('click', () => { playAssetSfx('ui_back', 0.82); goToTitle(); });

    dom.dropSelectorButtons?.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.dropIndex || '0');
        setSelectedDropIndex(idx);
      });
    });

    dom.muteBtn.addEventListener('click', toggleMute);
    dom.resultMuteBtn.addEventListener('click', toggleMute);
    if (dom.shareBtn) dom.shareBtn.addEventListener('click', copyResult);
    dom.burstBtn?.addEventListener('click', activateBurst);
    let holdDropX = 0;
    let lastBoardTapAt = 0;
    let lastBoardTapX = 0;
    let lastBoardTapY = 0;
    let lastBoardTapPointerType = '';
    let lastBoardDropAt = 0;
    let layoutRefreshRaf = 0;
    function stopHoldDrop() {}
    function flushPointerPreview() {
      pointerPreviewRaf = 0;
      const info = boardLogicalRect();
      hoverX = clamp((pendingPointerClientX - info.left) * info.scaleX, 34, info.width - 34);
      renderPreview();
    }
    function schedulePointerPreview(clientX) {
      pendingPointerClientX = clientX;
      if (pointerPreviewRaf) return;
      pointerPreviewRaf = requestAnimationFrame(flushPointerPreview);
    }
    function scheduleLayoutRefresh(force = false) {
      markBoardLayoutDirty();
      if (layoutRefreshRaf) return;
      layoutRefreshRaf = requestAnimationFrame(() => {
        layoutRefreshRaf = 0;
        refreshBoardLayoutCache(!!force);
        resizeCanvas();
      });
    }
    function registerBoardDoubleTap(clientX, clientY, pointerType = '') {
      const now = performance.now();
      if (now - lastBoardDropAt < 120) return false;
      const samePointer = !lastBoardTapPointerType || !pointerType || lastBoardTapPointerType === pointerType;
      const closeEnough = Math.abs(clientX - lastBoardTapX) <= 48 && Math.abs(clientY - lastBoardTapY) <= 48;
      const quickEnough = now - lastBoardTapAt <= 320;
      lastBoardTapAt = now;
      lastBoardTapX = clientX;
      lastBoardTapY = clientY;
      lastBoardTapPointerType = pointerType || '';
      if (!quickEnough || !closeEnough || !samePointer) return false;
      lastBoardTapAt = 0;
      lastBoardTapPointerType = '';
      lastBoardDropAt = now;
      dropAt(clientX);
      return true;
    }
    dom.board.addEventListener('pointermove', event => {
      holdDropX = event.clientX;
      schedulePointerPreview(event.clientX);
    }, { passive:true });
    dom.board.addEventListener('pointerdown', event => {
      if (event.button != null && event.button !== 0) return;
      event.preventDefault();
      holdDropX = event.clientX;
      schedulePointerPreview(event.clientX);
      registerBoardDoubleTap(event.clientX, event.clientY, event.pointerType || 'touch');
    }, { passive:false });
    dom.board.addEventListener('pointerup', stopHoldDrop, { passive:true });
    dom.board.addEventListener('pointercancel', stopHoldDrop, { passive:true });
    dom.board.addEventListener('pointerleave', stopHoldDrop, { passive:true });
    window.addEventListener('pointerup', stopHoldDrop, { passive:true });

    const boardResizeObserver = typeof ResizeObserver === 'function'
      ? new ResizeObserver(() => scheduleLayoutRefresh(true))
      : null;
    if (boardResizeObserver && dom.gameShell) boardResizeObserver.observe(dom.gameShell);
    if (boardResizeObserver && dom.board) boardResizeObserver.observe(dom.board);

    const handleViewportRefresh = () => {
      applyPerformanceProfile();
      scheduleAppHeightRefresh(70);
      scheduleLayoutRefresh(false);
    };
    window.addEventListener('resize', handleViewportRefresh);
    window.visualViewport?.addEventListener('resize', handleViewportRefresh);
    window.visualViewport?.addEventListener('scroll', handleViewportRefresh, { passive:true });
    window.addEventListener('pageshow', handleViewportRefresh, { passive:true });
    window.addEventListener('orientationchange', () => setTimeout(() => {
      applyPerformanceProfile();
      scheduleAppHeightRefresh(80);
    }, 180));
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (state.active && !state.paused) pauseRequestedByVisibility = true;
        if (state.active) togglePause(true);
        setHyperMix(0);
        stopResultBgm();
        syncAudioSession(true);
      } else {
        applyPerformanceProfile();
        refreshBoardLayoutCache(true);
        if (pauseRequestedByVisibility && state.active) {
          pauseRequestedByVisibility = false;
          togglePause(false);
        }
        state.lastFullGroupScanAt = 0;
        updateBackgroundState(true);
        syncAudioSession(true);
      }
    });

    if (dom.handleInput) {
      dom.handleInput.value = save.playerName || 'ななしさん';
      dom.handleInput.addEventListener('change', persistPlayerName);
      dom.handleInput.addEventListener('blur', persistPlayerName);
    }
    if (dom.avatar) {
      dom.avatar.onerror = () => {
        const failed = dom.avatar.dataset.file;
        if (failed) missingAvatarFiles.add(failed);
        if (dom.avatar.dataset.file !== 'char_normal.png') setAvatarVisual(state.avatarMood || 'normal');
      };
    }
    if (dom.boardCharacter) {
      dom.boardCharacter.onerror = () => {
        const failed = dom.boardCharacter.dataset.file;
        if (failed) missingAvatarFiles.add(failed);
        if (dom.boardCharacter.dataset.file !== 'char_normal.png') setAvatarVisual(state.avatarMood || 'normal');
      };
    }
    if (dom.boardCharacterBack) {
      dom.boardCharacterBack.onerror = () => {
        const failed = dom.boardCharacterBack.dataset.file;
        if (failed) missingAvatarFiles.add(failed);
        if (dom.boardCharacterBack.dataset.file !== 'char_normal.png') setAvatarVisual(state.avatarMood || 'normal');
      };
    }
    applyPerformanceProfile();
    preloadAllAvatars();
    updateMuteButtons();
    syncAudioSession(true);
    document.body.classList.add('title-mode');
    setTitleBackgroundActive(true);
    applyAppHeight(true);
    installServiceWorker();
    state.seed = todaySeed();
    updateSeedLabels();
    renderDailyBoard(dom.dailyBoard);
    renderDailyBoard(dom.resultDailyBoard);
    setSelectedDropIndex(0, { silent:true });
    ensureUpcomingTrendQueue(7);
    refreshTrendForecastUi();
    refreshQueue();
    renderPreview();
    dom.bestScore.textContent = fmt(save.bestScore || 0);
  })();
  
  
  
  