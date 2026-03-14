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
      resumeBtn: document.getElementById('resume-btn'),
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
      bgVideo: document.getElementById('bg-video'),
      bgVideoHype: document.getElementById('bg-video-hype'),
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

    const CONTENTS = [
      { id:'talk', name:'雑談', img:'assets/img/item_1.png', accent:'#ffffff', lines:['雑談して','近況トークちょうだい','ゆるい空気がほしい','作業しながら聞きたい'], physics:{ bboxW:512, bboxH:463, body:22, chat:'💬' } },
      { id:'gaming', name:'ゲーム配信', img:'assets/img/item_2.png', accent:'#8ef8ff', lines:['ゲーム配信見たい','神プレイ待ってる','対戦いこう','ゲームの反応ほしい'], physics:{ bboxW:512, bboxH:455, body:23, chat:'🎮' } },
      { id:'music', name:'歌枠', img:'assets/img/item_3.png', accent:'#ffd95c', lines:['歌ってほしい','声を浴びたい','サビだけでもお願い','リクエスト投げたい'], physics:{ bboxW:512, bboxH:429, body:24, chat:'🎤' } },
      { id:'asmr', name:'ASMR', img:'assets/img/item_4.png', accent:'#43eaff', lines:['ASMRほしい','耳が助かる','囁き待ってる','寝る前に聞きたい'], physics:{ bboxW:511, bboxH:512, body:25, chat:'🎧' } },
      { id:'love', name:'恋バナ', img:'assets/img/item_5.png', accent:'#ff68c1', lines:['恋バナまだ？','今日は甘めで','沼らせて','惚気でも失恋でも聞きたい'], physics:{ bboxW:306, bboxH:512, body:27, chat:'💗' } },
      { id:'secret', name:'暴露', img:'assets/img/item_6.png', accent:'#ff9b42', lines:['ちょっと危ない話して','裏話まだ？','秘密トークほしい','ギリギリの話待ってる'], physics:{ bboxW:380, bboxH:512, body:29, chat:'💎' } }
    ];
    const SPECIAL = { hazard:'assets/img/hazard.png', fire:'assets/img/fire.png', physics:{ bboxW:454, bboxH:512, body:32, chat:'💣' }, firePhysics:{ bboxW:454, bboxH:512, body:32, chat:'🔥' } };
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
        '次のトレンド来る、仕込む。','切り替わる前に形を作る。','次の波、あと少しで来る。','今のうちに次の準備をする。','切替直後を取りたい。','次の本命、見えてきた。','今のうちに種をまく。','次の需要に合わせて寄せる。'
      ],
      top:[
        '上が近い…ここで雑に置けない。','これ以上積むと危ない。','まずは盤面を開ける。','限界ライン近い、慎重にいく。','事故る前に今消せるやつを取る。','ここで欲張ると終わる。','上が詰まってる、崩し優先。','一手ミスると配信事故。'
      ],
      switch:[
        '来た、流れ変わった。','トレンド更新、ここから乗る。','今の本命が切り替わった。','次の話題へ乗り換える。','よし、新しい波を取りにいく。','ここから盤面の意味が変わる。','トレンド変化、すぐ合わせる。','今の一手が分岐になる。'
      ],
      rush:[
        '先読みで初速を取る。','切替直後を抜けたら大きい。','今の仕込み、ちゃんと回収したい。','ここで先読みを通せば伸びる。','次の波の入口、逃がさない。','仕込んだ分をここで回収する。','切り替わりの一手が見せ場。','今の先読み、かなり熱い。'
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
      high:['それ今めっちゃ見たい','それサムネ勝ち','今日のおすすめこれで取りたい','この流れショート量産できる','今の需要まじでそれ','今のコメ欄わいてる','神回の匂いする','高評価した','流れいいぞ','切り抜き確定','その話題もっと','助かる','今の当たり','同接伸びるやつ','その流れ好き','おすすめ乗りそう','今の置き方うまい','今日いちばん見たいのそれ','この流れで配信映える','ショート切り抜きいける','その話題サムネ強い','リスナーの需要これ','そのままサムネになる','今の導入かなり強い','コメ欄が求めてたやつ','この話題いまの波にハマってる','その並びで一気に取れそう','1位見えてきた','その仕込みかなり熱い','次の波まで見えてる','いまの置き方うますぎ'],
      mid:['次どう来る？','今のうちに仕込んで','次の波も見たい','その置き方アリかも','まだ見れる','もう一押しほしい','次の需要ある？','流れ変わるかも','そこそこ刺さってる','次うまく乗って'],
      low:['ちょっと冷えてきた','いま欲しいの違うかも','1位までが離れそう','盤面きつそう','それ今じゃない気がする','上ちょっと危ない','コメントの空気重い','今の需要からズレたかも','ちょい置きすぎかも','おすすめ止まりそう','今の流れから外れたかも','コメントが求めてるの別かも','サムネの強さ消えたかも','今の一手ちょっと迷子','いま欲しいのはその話題じゃないかも','ピンコメのお題見たい','1位が離れそう','いまは次の波の仕込みかも','その置き方ちょい重い' ],
      fire:['コメント欄やばい','燃えてる燃えてる','邪魔多すぎる','空気最悪かも','早く流れ戻して','このままだと事故る'],
      warning:['次の流れ来る？','次の話題の種まいて','切替の初速ほしい','次で跳ねそう','そろそろ別の話題見たい','切り替わりそう','次の需要なんだろ','次の仕込みある？'],
      super:['うわそれ伸びる','これ今日の見どころ','おすすめ乗りそう','今の全部持っていった','神タイミング','気持ちいい消し方した','同接跳ねるやつ','切り抜き班出動','今の見どころすぎる','ショート量産きた','配信映えエグい','今日のサムネここ','これアーカイブの山場','今の一手で空気持っていった'],
      rush:['今の先読みほしい','切替直後を当てて','今の需要そのまま乗って','先読み取れたらでかい','切り替わった瞬間を取って'],
      jack:['先読みうまい','その取り方かなり強い','切替直後を毎回取ってる','今の先読み気持ちいい','先読み連勝えぐい','その先読みで1位見える','切替直後を毎回取ってるの強い']
    };
    const SPECIAL_COMMENT_BANK = {
      anti:[
        'その話もう飽きた',
        '今の流れ読めてなくない？',
        'コメント見えてる？',
        '配信の空気ちょっと寒い',
        'なんか今日ズレてる気がする',
        'その置き方だと事故りそう',
        '今それじゃない感ある',
        '話題の拾い方が雑かも',
        'リスナー置いてってない？',
        '流れ外してるのに強行するの怖い'
      ],
      superchat:[
        '赤スパ：今の流れめっちゃ好き！',
        '赤スパ：そのまま見せ場つくって！',
        '赤スパ：今日いちばん刺さってる！',
        '赤スパ：今の判断うますぎる！',
        '赤スパ：切り抜き確定の流れきた！',
        '赤スパ：ここから一気に伸ばして！',
        '赤スパ：その配信力、信じてる！',
        '赤スパ：神回の匂いしかしない！',
        '赤スパ：今の盤面かなり熱い！',
        '赤スパ：お願い、この波つかんで！'
      ]
    };

    const USERNAMES = ['ねこもち','kome','夜行性','ぷるる','mira','noa','ゆら','okome','melt','しろみ','nagi','さめ','momo','mii','nanase','るる','haru','mina','chip','切り抜き担当','ROM勢','初見です','社不ねむ','スパチャ待機','天才視聴者','深夜の民','古参オタク','限界オタク','寝落ち勢','同接監視員','アーカイブ勢','おすすめ欄から来た','高評価した','初スパ投げたい'];

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
    save.bestScore = save.bestScore || 0;
    save.dailyBest = save.dailyBest || {};
    save.dailyRankings = save.dailyRankings || {};
    save.playerName = (save.playerName || '名無し配信者').slice(0, 14);
    const bodyVisuals = new Map();
    const missingAvatarFiles = new Set();
    let trendBannerTimer = 0;
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
      img.decoding = 'sync';
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
    const sfxFileMap = {
      drop:'assets/audio/se_drop_soft_01.wav',
      clear:'assets/audio/se_clear_small_01.wav',
      big:'assets/audio/se_clear_big_01.wav',
      chain_2:'assets/audio/se_chain_02.wav',
      chain_3:'assets/audio/se_chain_03.wav',
      chain_4:'assets/audio/se_chain_04.wav',
      warn:'assets/audio/se_trend_warning.wav',
      switch:'assets/audio/se_trend_shift.wav',
      ready:'assets/audio/se_apology_ready.wav',
      burst:'assets/audio/se_apology_fire.wav',
      bad:'assets/audio/se_gameover_blast.wav',
      hazard:'assets/audio/se_hazard_spawn.wav',
      hurry:'assets/audio/se_timer_hurry.wav'
    };
    const voiceCooldowns = { default:0, calm:0, clear:0, chain:0, hype:0, warning:0, fire:0, top:0, focus:0 };
    const lastVoicePathByKind = Object.create(null);
    let lastVoiceAt = 0;
    let nextAmbientVoiceAt = 0;
    let resultStingerAudio = null;
    let bigBuzzBannerTimer = 0;
    let lastHyperBgmActive = false;
    let avatarVisualFile = 'char_normal.png';
    let pendingAvatarMood = 'normal';
    let pendingAvatarMoodSince = 0;
    let boardCharacterSwapToken = 0;
    let warningVoiceLatched = false;
    let topVoiceLatched = false;
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
      lastTs:0,
      topDangerTime:0,
      overfillTime:0,
      moodTimer:0,
      currentLine:'今日はちゃんとバズらせたい。',
      ambientMoodLine:'今日はちゃんとバズらせたい。',
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
      boardStatsCache:null,
      boardStatsCacheAt:0,
      lastVoiceText:'',
      voiceSubtitleTimer:0,
      speechBubbleText:'',
      speechBubbleTimer:0,
      avatarMood:'normal',
      avatarVisualMood:'normal',
      shiftGlowIds:[],
      shiftGlowTimer:0,
      finishing:false
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
    function getBoardMetrics() {
      const style = dom.board ? getComputedStyle(dom.board) : null;
      const fullLineY = style ? (parseFloat(style.getPropertyValue('--gameover-line-y')) || 26) : 26;
      const dangerLineY = style ? (parseFloat(style.getPropertyValue('--danger-line-y')) || 60) : 60;
      return { fullLineY, dangerLineY, sideInset:6, spawnInset:Math.max(10, fullLineY - 38) }; // spawn near full line
    }
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
      rows.push({ name: playerName(), score: Math.floor(score), combo: state.peakCombo, clip: state.clipActivations, rush: state.rushHits, wave: state.waveLinkHits, at: Date.now() });
      rows.sort((a, b) => b.score - a.score || b.combo - a.combo || (b.wave || 0) - (a.wave || 0) || (b.rush || 0) - (a.rush || 0) || b.clip - a.clip || a.at - b.at);
      save.dailyRankings[seed] = rows.slice(0, 5);
      persistSave();
      return save.dailyRankings[seed].findIndex(r => r.at === rows.find(x => x.at === r.at)?.at);
    }
    const CONTENT_BASE_WEIGHTS = [14, 14, 14, 14, 14, 14, 14];
    const CONTENT_SCORE_VALUES = [280, 330, 390, 460, 560, 700, 880];

    function contentBodyRadius(index, specialType = false) {
      if (specialType === true || specialType === 'hazard') return 31;
      if (specialType === 'fire') return 31;
      const map = [28, 30, 32, 34, 36, 38, 40];
      return map[index] || 36;
    }
    function contentSpawnWeight(index) {
      return CONTENT_BASE_WEIGHTS[index] || 6;
    }
    function contentScoreValue(index, specialType = false) {
      if (specialType === true || specialType === 'hazard') return 240;
      if (specialType === 'fire') return 180;
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
    function visualDiameter(radius, specialType = false) {
      return Math.round(radius * ((specialType === true || specialType === 'hazard' || specialType === 'fire') ? 2.06 : 2.02));
    }
    function contentChatIcon(index, specialType = false) {
      if (specialType === true || specialType === 'hazard') return SPECIAL.physics.chat;
      if (specialType === 'fire') return SPECIAL.firePhysics.chat;
      return CONTENTS[index]?.physics?.chat || '💬';
    }

    function bodyImageSrc(body) {
      if (body.gameType === 'hazard') return SPECIAL.hazard;
      if (body.gameType === 'fire') return SPECIAL.fire;
      return CONTENTS[body.contentIndex]?.img || 'assets/img/item_1.png';
    }

    function bodyImageAlt(body) {
      if (body.gameType === 'hazard') return 'bomb';
      if (body.gameType === 'fire') return 'big fire';
      return CONTENTS[body.contentIndex]?.name || 'content';
    }

    function clearVisuals() {
      bodyVisuals.forEach(node => node.remove());
      bodyVisuals.clear();
      if (dom.itemLayer) dom.itemLayer.innerHTML = '';
      if (mergeCtx && dom.mergeCanvas) mergeCtx.clearRect(0, 0, dom.mergeCanvas.width, dom.mergeCanvas.height);
    }

    function removeBodyVisualEntry(bodyOrId) {
      const id = typeof bodyOrId === 'object' ? bodyOrId?.id : bodyOrId;
      if (id == null) return;
      const node = bodyVisuals.get(id);
      if (node) node.remove();
      bodyVisuals.delete(id);
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
      if (!engine || !removedBodies?.length || !dom.board) return;
      const survivors = worldBodies();
      if (!survivors.length) return;
      const spots = removedBodies.map(body => ({
        x: body.position.x,
        y: body.position.y,
        r: body.circleRadius || contentBodyRadius(body.contentIndex, body.gameType)
      }));
      for (const body of survivors) {
        for (const spot of spots) {
          const dx = Math.abs(body.position.x - spot.x);
          const dy = body.position.y - spot.y;
          const reachX = (body.circleRadius || 0) + spot.r + 18;
          const reachY = (body.circleRadius || 0) + spot.r + 74;
          if (dx > reachX || dy < -reachY || dy > reachY * 2.4) continue;
          Sleeping.set(body, false);
          Body.setVelocity(body, { x: body.velocity.x * 0.96, y: Math.max(body.velocity.y, 0.88) });
          Body.setAngularVelocity(body, body.angularVelocity * 0.92);
          body.floatStartAt = 0;
          break;
        }
      }
    }

    function hardRemoveBodies(bodies) {
      if (!engine) return 0;
      const list = (Array.isArray(bodies) ? bodies : [bodies]).filter(Boolean);
      if (!list.length) return 0;
      const removedSpots = list.map(body => ({
        position: { x: body.position.x, y: body.position.y },
        circleRadius: body.circleRadius,
        contentIndex: body.contentIndex,
        gameType: body.gameType
      }));
      list.forEach(body => {
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
      wakeBodiesNearRemoval(removedSpots);
      state.boardStatsCache = null;
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

    function setAvatarVisual(key = 'normal') {
      const moodMap = { apology:'apology', win:'win' };
      const lookup = moodMap[key] || key;
      const now = performance.now();
      if (state.avatarVisualMood === lookup && pendingAvatarMood === lookup) return;
      if (pendingAvatarMood !== lookup) {
        pendingAvatarMood = lookup;
        pendingAvatarMoodSince = now;
      }
      const instantSwap = lookup === 'apology' || lookup === 'win' || lookup === 'panic' || lookup === 'yami';
      if (!instantSwap && state.avatarVisualMood && state.avatarVisualMood !== lookup && (now - pendingAvatarMoodSince) < 120) {
        state.avatarMood = lookup;
        return;
      }
      const pool = avatarVariants[lookup] || avatarVariants.normal;
      state.avatarMood = lookup;
      const applyAvatarSrc = (el, file, nextSrc) => {
        if (!el || avatarVisualFile === file || el.dataset.file === file) return;
        el.decoding = 'sync';
        el.loading = 'eager';
        el.style.aspectRatio = '1 / 1';
        el.width = el.width || 2048;
        el.height = el.height || 2048;
        el.dataset.file = file;
        el.src = nextSrc;
      };
      for (const file of pool) {
        if (missingAvatarFiles.has(file)) continue;
        const cached = preloadAvatarFile(file);
        const nextSrc = `assets/img/${file}`;
        const ready = !!(cached && cached.complete && cached.naturalWidth > 0);
        if (!ready) {
          cached?.addEventListener?.('load', () => {
            if (state.avatarMood === lookup) setAvatarVisual(lookup);
          }, { once:true });
          continue;
        }
        Promise.resolve(cached?.decode?.()).catch(() => {}).finally(() => {
          if (state.avatarMood !== lookup) return;
          requestAnimationFrame(() => {
            if (state.avatarMood !== lookup) return;
            applyAvatarSrc(dom.avatar, file, nextSrc);
            swapBoardCharacter(file, nextSrc);
            avatarVisualFile = file;
            state.avatarVisualMood = lookup;
          });
        });
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
      node.className = `item-chip ${body.gameType === 'hazard' ? 'hazard' : ''} ${body.gameType === 'fire' ? 'fire' : ''}`.trim();
      node.dataset.emoji = contentChatIcon(body.contentIndex, body.gameType);
      const img = document.createElement('img');
      img.alt = bodyImageAlt(body);
      img.src = bodyImageSrc(body);
      img.loading = 'eager';
      img.decoding = 'sync';
      img.addEventListener('error', () => {
        img.style.display = 'none';
        node.style.display = 'grid';
        node.style.placeItems = 'center';
        node.style.fontSize = '30px';
        node.textContent = node.dataset.emoji || '💬';
      }, { once:true });
      node.appendChild(img);
      node.style.display = 'grid';
      node.style.visibility = 'visible';
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
        if (!node.isConnected && dom.itemLayer) dom.itemLayer.appendChild(node);
        let img = node.querySelector('img');
        if (!img) {
          img = document.createElement('img');
          img.alt = bodyImageAlt(body);
          img.src = bodyImageSrc(body);
          img.loading = 'eager';
          img.decoding = 'sync';
          node.textContent = '';
          node.appendChild(img);
        }
        const radius = body.circleRadius || contentBodyRadius(body.contentIndex, body.gameType);
        const diameter = visualDiameter(radius, body.gameType);
        if (node.dataset.diameter !== String(diameter)) {
          node.dataset.diameter = String(diameter);
          node.style.width = `${diameter}px`;
          node.style.height = `${diameter}px`;
        }
        const trendBody = body.gameType === 'content' && body.contentIndex === state.trendIndex;
        const forecastReady = body.gameType === 'content' && body.contentIndex === state.nextTrendIndex && (nextPreviewMap.get(body.id) || 0) >= 2;
        const boardW = dom.board?.clientWidth || 1;
        const boardH = dom.board?.clientHeight || 1;
        const safeRadius = Math.max(8, radius);
        if (!Number.isFinite(body.position.x) || !Number.isFinite(body.position.y) || !Number.isFinite(body.angle)) {
          Body.setPosition(body, { x: clamp(body.position.x || boardW / 2, safeRadius + 6, boardW - safeRadius - 6), y: clamp(body.position.y || boardH * 0.5, safeRadius + 6, boardH - safeRadius - 6) });
          Body.setVelocity(body, { x:0, y:0 });
          Body.setAngularVelocity(body, 0);
        }
        const bodyAge = performance.now() - (body.spawnAt || 0);
        const outsideSoftBounds = bodyAge > 120 && (body.position.x < safeRadius + 2 || body.position.x > boardW - safeRadius - 2 || body.position.y < safeRadius + 2 || body.position.y > boardH - safeRadius - 2);
        if (outsideSoftBounds) repairBodyPosition(body, boardW, boardH, 'sync-soft-bounds');
        const drawX = clamp(body.position.x, safeRadius, boardW - safeRadius);
        const drawY = clamp(body.position.y, safeRadius, boardH - safeRadius);
        const scale = trendBody ? 1.06 : (forecastReady ? 1.03 : 1);
        const transformValue = `translate3d(${Math.round((drawX - diameter / 2) * 10) / 10}px, ${Math.round((drawY - diameter / 2) * 10) / 10}px, 0) rotate(${Math.round((body.angle || 0) * 100) / 100}rad) scale(${scale})`;
        if (node.dataset.transform !== transformValue) {
          node.dataset.transform = transformValue;
          node.style.transform = transformValue;
        }
        node.classList.toggle('trend', trendBody);
        node.classList.toggle('near', (previewMap.get(body.id) || 0) === 2);
        node.classList.toggle('ready', (previewMap.get(body.id) || 0) >= 3);
        node.classList.toggle('forecast', forecastReady);
        node.classList.toggle('fire', body.gameType === 'fire');
        node.classList.toggle('hazard', body.gameType === 'hazard');
        const opacityValue = '1';
        if (node.style.opacity !== opacityValue) node.style.opacity = opacityValue;
        if (node.style.display !== 'grid') node.style.display = 'grid';
        if (node.style.visibility !== 'visible') node.style.visibility = 'visible';
        node.hidden = false;
        const zValue = String(100 + Math.round(body.position.y * 10) + (body.id % 10));
        if (node.style.zIndex !== zValue) node.style.zIndex = zValue;
        const glowActive = state.shiftGlowTimer > 0 && state.shiftGlowIds.includes(body.id);
        node.classList.toggle('shift-glow', glowActive);
        const filterValue = (body.gameType === 'hazard' || body.gameType === 'fire') ? 'none' : (trendBody ? 'saturate(1.1)' : 'none');
        if (node.style.filter !== filterValue) node.style.filter = filterValue;
      });
      bodyVisuals.forEach((node, id) => {
        if (!activeIds.has(id)) {
          node.remove();
          bodyVisuals.delete(id);
        }
      });
      renderMergeLinks();
    }

    const BASE_STAGE_W = 1206;
    const BASE_STAGE_H = 2144;

    function applyAppHeight() {
      const viewportWidth = Math.max(window.visualViewport?.width || 0, document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const viewportHeight = Math.max(window.visualViewport?.height || 0, document.documentElement.clientHeight || 0, window.innerHeight || 0);
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
      resizeCanvas();
      alignTrendMainToGameCenter();
    }

    function alignTrendMainToGameCenter() {
      if (!dom.trendMain) return;
      dom.trendMain.style.left = 'auto';
      dom.trendMain.style.right = 'auto';
    }

    function boardLogicalRect() {
      const rect = dom.board?.getBoundingClientRect?.() || { left:0, top:0, right:0, bottom:0, width:0, height:0 };
      const width = dom.board?.clientWidth || dom.board?.offsetWidth || Math.round(rect.width) || 1;
      const height = dom.board?.clientHeight || dom.board?.offsetHeight || Math.round(rect.height) || 1;
      return {
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        width,
        height,
        scaleX: rect.width ? (width / rect.width) : 1,
        scaleY: rect.height ? (height / rect.height) : 1
      };
    }

    function persistSave() {
      localStorage.setItem(storageKey, JSON.stringify(save));
    }


    function voiceTextForPath(path) {
      const file = String(path || '').split('/').pop();
      return VOICE_TEXT_MAP[file] || '';
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

    function updateMuteButtons() {
      const label = muted ? '🔇 サウンド OFF' : '🔊 サウンド ON / OFF';
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
        : '<div><div class="icon">🧯</div><div class="txt">謝罪配信</div></div>';
      if (dom.burstBtn.dataset.mode === mode && dom.burstBtn.innerHTML === html) return;
      dom.burstBtn.dataset.mode = mode;
      dom.burstBtn.innerHTML = html;
    }

    function toggleMute() {
      muted = !muted;
      save.muted = muted;
      persistSave();
      [dom.bgmNormal, dom.bgmHyper, dom.audioMerge, dom.voiceStart, dom.voiceFire, dom.voiceWin, dom.voiceLose].forEach(a => a.muted = muted);
      if (resultStingerAudio) resultStingerAudio.muted = muted;
      updateMuteButtons();
    }

    function ensureAudio() {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
      [dom.bgmNormal, dom.bgmHyper, dom.audioMerge, dom.voiceStart, dom.voiceFire, dom.voiceWin, dom.voiceLose].forEach(a => a.muted = muted);
      if (resultStingerAudio) resultStingerAudio.muted = muted;
    }

    function playBgm() {
      persistPlayerName();
      ensureAudio();
      dom.bgmNormal.volume = muted ? 0 : 0.34;
      dom.bgmHyper.volume = muted ? 0 : 0;
      dom.bgmNormal.currentTime = 0;
      dom.bgmHyper.currentTime = 0;
      try { dom.bgmHyper.pause(); } catch (_) {}
      dom.bgmNormal.play().catch(() => {});
      lastHyperBgmActive = false;
    }

    function setHyperMix(strength) {
      const s = clamp(strength, 0, 1);
      const hyperActive = !!(state.active && state.clipTime > 0);
      if (hyperActive !== lastHyperBgmActive) {
        if (hyperActive) {
          try { dom.bgmNormal.pause(); } catch (_) {}
          try { dom.bgmHyper.currentTime = 0; } catch (_) {}
          dom.bgmHyper.play().catch(() => {});
        } else {
          try { dom.bgmHyper.pause(); } catch (_) {}
          dom.bgmNormal.play().catch(() => {});
        }
      }
      lastHyperBgmActive = hyperActive;
      dom.bgmNormal.volume = muted ? 0 : (hyperActive ? 0 : 0.34);
      dom.bgmHyper.volume = muted ? 0 : (hyperActive ? 0.42 : 0);
      updateBackgroundState(s);
    }



    function updateBackgroundState(strength = 0) {
      const hype = state.active && state.clipTime > 0;
      dom.bgContainer?.classList.toggle('hype', hype);
      if (dom.bgContainer) {
        dom.bgContainer.style.setProperty('--bg-base-opacity', hype ? '0.92' : '0.96');
        dom.bgContainer.style.setProperty('--bg-hype-opacity', hype ? '0.10' : '0');
      }
      if (dom.bgVideoHype) dom.bgVideoHype.style.opacity = hype ? '0.10' : '0';
      if (dom.bgVideo) dom.bgVideo.style.opacity = hype ? '0.92' : '0.96';
    }

    function getVoiceAudio(path) {
      if (!path) return null;
      if (!voiceCache.has(path)) {
        const audio = new Audio(path);
        audio.preload = 'auto';
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

    function tryPlayVoicePath(path, volume = 0.72) {
      const audio = getVoiceAudio(path);
      applyVoiceSubtitle(path);
      if (!audio || muted || audio.dataset.failed === '1') return !!voiceTextForPath(path);
      stopAllVoiceAudio();
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (_) {}
      audio.volume = volume;
      audio.play().catch(() => {});
      return true;
    }

    function playVoice(kind) {
      const pool = voicePools[kind] || [];
      const chosen = pickRandomVoicePath(kind, pool);
      if (chosen) return tryPlayVoicePath(chosen, kind === 'lose' ? 0.84 : 0.72);
      const map = { start:dom.voiceStart, fire:dom.voiceFire, win:dom.voiceWin, lose:dom.voiceLose };
      const audio = map[kind];
      applyVoiceSubtitle(audio?.currentSrc || audio?.src || '');
      if (!audio || muted) return !!voiceTextForPath(audio?.currentSrc || audio?.src || '');
      stopAllVoiceAudio();
      audio.currentTime = 0;
      audio.volume = kind === 'lose' ? 0.84 : 0.72;
      audio.play().catch(() => {});
      return true;
    }

    function stopResultBgm() {
      if (!resultStingerAudio) return;
      try { resultStingerAudio.pause(); resultStingerAudio.currentTime = 0; } catch (_) {}
      resultStingerAudio = null;
    }

    function maybeAmbientVoice(kind = 'calm', gapSeconds = 16) {
      const now = performance.now();
      if (now < nextAmbientVoiceAt) return false;
      const played = triggerVoiceCue(kind);
      if (played) nextAmbientVoiceAt = now + gapSeconds * 1000;
      return played;
    }

    function showBigBuzzBanner(text = '大バズり!!') {
      if (!dom.bigBuzzBanner) return;
      const core = dom.bigBuzzBanner.querySelector('.core');
      if (core) core.textContent = text;
      dom.bigBuzzBanner.classList.remove('show');
      void dom.bigBuzzBanner.offsetWidth;
      dom.bigBuzzBanner.classList.add('show');
      clearTimeout(bigBuzzBannerTimer);
      bigBuzzBannerTimer = setTimeout(() => dom.bigBuzzBanner?.classList.remove('show'), 980);
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
        played = tryPlayVoicePath(chosen, kind === 'chain' ? 0.84 : (kind === 'lose' ? 0.84 : 0.72));
      }
      if (!played) {
        if (kind === 'warning') played = playVoice('fire');
        else if (kind === 'hype' || kind === 'chain') played = playVoice('win');
        else if (kind === 'clear') played = playVoice('start');
        else if (kind === 'fire') played = playVoice('fire');
        else played = playVoice(kind);
      }
      if (played) {
        lastVoiceAt = now;
        voiceCooldowns[slot] = now + (cooldownMap[slot] || 900);
        if (kind === 'start') startupVoiceLockUntil = now + 3200;
      }
      return played;
    }


    function getSfxAudio(path) {
      if (!path) return null;
      if (!sfxCache.has(path)) {
        const audio = new Audio(path);
        audio.preload = 'auto';
        audio.addEventListener('error', () => { audio.dataset.failed = '1'; }, { once:true });
        sfxCache.set(path, audio);
      }
      return sfxCache.get(path);
    }

    function playAssetSfx(kind, volume = 0.72) {
      let path = sfxFileMap[kind] || null;
      if (!path && kind === 'chain') path = sfxFileMap.chain_2;
      const audio = getSfxAudio(path);
      if (!audio || muted || audio.dataset.failed === '1') return false;
      try { audio.pause(); audio.currentTime = 0; } catch (_) {}
      audio.volume = clamp(volume, 0, 1);
      audio.play().catch(() => {});
      return true;
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
      const info = boardLogicalRect();
      dom.particleCanvas.width = info.width;
      dom.particleCanvas.height = info.height;
      dom.fxCanvas.width = info.width;
      dom.fxCanvas.height = info.height;
      dom.mergeCanvas.width = info.width;
      dom.mergeCanvas.height = info.height;
      particleCtx = dom.particleCanvas.getContext('2d');
      fxCtx = dom.fxCanvas.getContext('2d');
      mergeCtx = dom.mergeCanvas.getContext('2d');
      if (render) {
        render.canvas.width = info.width;
        render.canvas.height = info.height;
        render.options.width = info.width;
        render.options.height = info.height;
      }
      if (engine) updateWorldBounds();
      hoverX = info.width / 2;
      renderPreview();
    }

    function currentTrend() { return CONTENTS[state.trendIndex]; }
    function nextTrend() { ensureUpcomingTrendQueue(6); return CONTENTS[state.nextTrendIndex]; }
    function futureTrend() { ensureUpcomingTrendQueue(6); return CONTENTS[state.futureTrendIndex]; }
    function trendDuration() { return clamp(17.8 - Math.floor(state.runTime / 105) * 0.40, 11.8, 17.8); }
    function ensureUpcomingTrendQueue(min = 6) {
      state.upcomingTrendQueue = Array.isArray(state.upcomingTrendQueue) ? state.upcomingTrendQueue.slice(0, 12) : [];
      while (state.upcomingTrendQueue.length < min) {
        const tail = state.upcomingTrendQueue.slice(-2);
        const nextIdx = pickTrendExcluding(state.trendIndex, ...tail);
        state.upcomingTrendQueue.push(nextIdx);
      }
      state.nextTrendIndex = state.upcomingTrendQueue[0] ?? pickTrendExcluding(state.trendIndex);
      state.futureTrendIndex = state.upcomingTrendQueue[1] ?? pickTrendExcluding(state.trendIndex, state.nextTrendIndex);
    }

    function shiftTrendQueue() {
      ensureUpcomingTrendQueue(6);
      const previousTrendIndex = state.trendIndex;
      state.trendIndex = state.upcomingTrendQueue.shift() ?? pickTrendExcluding(state.trendIndex);
      ensureUpcomingTrendQueue(6);
      setTrend(state.trendIndex, true, previousTrendIndex);
    }

    function refreshTrendForecastUi() {
      ensureUpcomingTrendQueue(6);
      if (Array.isArray(dom.trendForecastSlots)) {
        const ordered = state.upcomingTrendQueue.slice(0, 6).reverse();
        dom.trendForecastSlots.forEach((slot, slotIndex) => {
          const trendIndex = ordered[slotIndex];
          const info = CONTENTS[trendIndex] || CONTENTS[0];
          const img = slot.querySelector('img');
          const label = slot.querySelector('.forecast-label');
          const name = slot.querySelector('.forecast-name');
          slot.classList.toggle('next', slotIndex === ordered.length - 1);
          if (img) img.src = info.img;
          if (img) img.alt = info.name;
          if (name) { name.textContent = info.name; name.style.color = info.accent || '#ece4f7'; }
          if (label) label.textContent = slotIndex === ordered.length - 1 ? '次のトレンド' : '';
        });
      }
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
          popText(dom.board.clientWidth / 2, 126, '先読みボーナス終了', '#ff8da5', 18);
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
      setCaption(`いまは『${trend.name}』を3つ以上で消す。次のトレンドは上の並びで確認できる。`, 2.8);
      spawnComment(true, null, 'hot');
      if (!suppressSpeech) say(withFlash ? 'switch' : 'focus', 2.4);
      if (!suppressVoice) triggerVoiceCue(withFlash ? 'rush' : 'focus');
      rollPinnedComment(withFlash ? 'switch' : 'normal');
      if (withFlash) {
        spawnComment(false, `今は${trend.name}の先読みが刺さる`, 'super', '🚀');
        if (!suppressSpeech) say('rush', 2.2);
      }
      if (withFlash) {
        flashScreen(trend.accent);
        sfx('switch', 0.9);
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
          popText(dom.board.clientWidth / 2, 154, preloadLen >= 3 ? '先読みOK!' : '次の波OK', '#8ef8ff', preloadLen >= 3 ? 26 : 20);
          spawnComment(false, preloadLen >= 3 ? `もう${trend.name}がつながってる` : `次の波へ仕込みが残ってる`, 'super', '🌊');
          addRing(dom.board.clientWidth / 2, 148, '#8ef8ff', 18, 220);
          say('rush', 1.7);
        }
      }
    }

    function dropRadiusFor(index = state.selectedDropIndex ?? state.queue?.[0] ?? 0) {
      return contentBodyRadius(index, false);
    }

    function findSafeDropX(targetX, radius, spawnY = radius + getBoardMetrics().spawnInset) {
      const boardW = dom.board.clientWidth || boardLogicalRect().width;
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
      const selected = clamp(Math.floor(state.selectedDropIndex || 0), 0, CONTENTS.length - 1);
      dom.dropSelectorButtons?.forEach(btn => {
        const idx = Number(btn.dataset.dropIndex || '-1');
        btn.classList.toggle('active', idx === selected);
      });
    }

    function setSelectedDropIndex(index, opts = {}) {
      const idx = clamp(Math.floor(index || 0), 0, CONTENTS.length - 1);
      state.selectedDropIndex = idx;
      ensureQueueLength(3);
      refreshQueue();
      renderPreview();
      updateDropSelectorUi();
      if (!opts.silent) setCaption(`落とすアイテムを『${CONTENTS[idx].name}』に固定しました。`, 0.8);
    }

    function refreshQueue() {
      ensureQueueLength(3);
      const q0 = CONTENTS[state.selectedDropIndex ?? 0] || CONTENTS[0];
      dom.previewItem.src = q0.img;
      dom.previewItem.alt = q0.name;
      if (dom.nextMini1) { dom.nextMini1.src = q0.img; dom.nextMini1.alt = q0.name; }
      if (dom.nextMini2) { dom.nextMini2.src = q0.img; dom.nextMini2.alt = q0.name; }
      updateDropSelectorUi();
    }

    function renderPreview() {
      const boardW = dom.board.clientWidth || boardLogicalRect().width;
      const radius = dropRadiusFor();
      const x = clamp(hoverX, radius + 6, boardW - radius - 6);
      const size = visualDiameter(radius, false);
      const metrics = getBoardMetrics();
      const ringSize = Math.round(size + 12);
      const itemSize = Math.max(48, Math.round(size * 0.82));
      const previewTop = Math.max(20, metrics.fullLineY - ringSize - 4);
      dom.dropGuide.style.left = `${x}px`;
      dom.previewRing.style.left = `${x}px`;
      dom.previewRing.style.top = `${previewTop}px`;
      dom.previewItem.style.width = `${itemSize}px`;
      dom.previewItem.style.height = `${itemSize}px`;
      dom.previewRing.style.width = `${ringSize}px`;
      dom.previewRing.style.height = `${ringSize}px`;
      refreshQueue();
    }

    function triggerPreviewLaunchFx(color = '#ffffff') {
      if (!dom.previewRing) return;
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
      node.style.setProperty('--chat-drift', `${fromLeft ? (12 + rand() * 18) : (-12 - rand() * 18)}px`);
      node.style.animationDuration = `${4.6 + rand() * 0.7}s`;
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
      const cooldown = forcedClass === 'super' ? 0.42 : (forcedText ? 0.54 : 0.62);
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
        const noise = rand();
        const activeEvent = currentCommentEventMeta();
        if (activeEvent && noise < 0.82) {
          text = choice(SPECIAL_COMMENT_BANK[state.commentEventType] || [state.commentEventText || '']);
          cls = activeEvent.cls;
          icon = activeEvent.icon;
          topicInfo = null;
          specialType = state.commentEventType;
          state.commentEventText = text;
        } else if (state.clipTime > 0 && noise < 0.34) {
          text = choice([
            '大バズりきた！','今まとめて伸ばして','この秒数で稼いで','バズるなら今','見どころ作れそう','ここで1位までを詰めたい', ...COMMENT_BANK.super
          ]);
          cls = 'super';
          icon = '🎬';
          topicInfo = { index: state.trendIndex, mode: 'now' };
        } else if (state.rushWindow > 0 && noise < 0.26) {
          text = choice([
            `今は${trend.name}の先読みを取りたい`,
            `${trend.name}で初速を取りたい`,
            ...COMMENT_BANK.rush
          ]);
          cls = 'super';
          icon = '🚀';
          topicInfo = { index: state.trendIndex, mode: 'now' };
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
          topicInfo = { index: state.trendIndex, mode: 'now' };
        } else if (previewLen === 2 && noise < 0.16) {
          text = choice([
            `あと1個で${trend.name}つながる`,
            `${trend.name}あと1個で取れそう`,
            'その2連、あと1個で気持ちいい',
            '今の2個にもう1つ足したい'
          ]);
          cls = 'hot';
          icon = '✨';
          topicInfo = { index: state.trendIndex, mode: 'now' };
        } else if (topGap > 0 && topGap <= 5200 && noise < 0.16) {
          text = choice([
            `あと${fmt(topGap)}で今日の1位`,
            `${crownTargetName(state.seed)}まであと${fmt(topGap)}`,
            '今日の1位もう見えてる',
            'この一手で1位圏入る',
            'あと少しで1位取れる'
          ]);
          cls = 'super';
          icon = '👑';
          topicInfo = { index: state.trendIndex, mode: 'now' };
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
          topicInfo = { index: state.nextTrendIndex, mode: 'next' };
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
          topicInfo = { index: state.trendIndex, mode: 'now' };
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
          topicInfo = { index: state.trendIndex, mode: 'now' };
        } else if (state.tension > 42) {
          text = choice([
            ...COMMENT_BANK.mid,
            `${trend.name}待機`,
            '次の一個で決まりそう',
            '今のうちに積んでおいて',
            `${next.name}も少し欲しい`
          ]);
          icon = '👀';
          topicInfo = { index: state.trendIndex, mode: 'now' };
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
          topicInfo = { index: state.trendIndex, mode: 'now' };
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
        while (dom.chatLane.childNodes.length > 4) dom.chatLane.firstChild.remove();
      } else if (dom.chatLaneBack) {
        while (dom.chatLaneBack.childNodes.length > 8) dom.chatLaneBack.firstChild.remove();
      } else {
        while (dom.chatLane.childNodes.length > 8) dom.chatLane.firstChild.remove();
      }
    }

    function flashScreen(color = '#ffffff') {
      const flashColor = String(color).startsWith('rgb') ? color : `${color}66`;
      dom.globalFlash.style.background = `radial-gradient(circle, ${flashColor}, rgba(255,255,255,0))`;
      dom.globalFlash.classList.add('show');
      setTimeout(() => dom.globalFlash.classList.remove('show'), 120);
    }

    function addParticles(x, y, color, count = 18, spread = 9) {
      const budget = Math.max(0, 90 - state.particles.length);
      const safeCount = Math.max(0, Math.min(Math.round(count * 0.68), budget));
      for (let i = 0; i < safeCount; i++) {
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
      if (!state.particles.length && !state.rings.length) {
        particleCtx.clearRect(0, 0, dom.particleCanvas.width, dom.particleCanvas.height);
        fxCtx.clearRect(0, 0, dom.fxCanvas.width, dom.fxCanvas.height);
        return;
      }
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
        particleCtx.shadowBlur = 4;
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

    const SUPERCHAT_CHAIN_THEME = {
      1:{ border:'#2b7cff', fill:'rgba(43,124,255,.92)' },
      2:{ border:'#63e6ff', fill:'rgba(99,230,255,.92)' },
      3:{ border:'#b8ff52', fill:'rgba(184,255,82,.92)' },
      4:{ border:'#ffe35a', fill:'rgba(255,227,90,.92)' },
      5:{ border:'#ffab47', fill:'rgba(255,171,71,.92)' },
      6:{ border:'#ff5ce6', fill:'rgba(255,92,230,.92)' },
      7:{ border:'#ff5b73', fill:'rgba(255,91,115,.92)' }
    };
    const SUPERCHAT_CHAIN_MESSAGES = [
      'スパチャありがとうございます！','最高の連鎖、助かる！','その見せ場、ちゃんと届いてる！','切り抜き確定の山場きた！','今の一手、めっちゃ好き！','流れ完全に持っていってる！','うますぎ！ もっと見せて！','この波、最後まで乗り切って！'
    ];

    function showFireBanner() {
      if (!dom.fireBanner) return;
      dom.fireBanner.classList.remove('show');
      void dom.fireBanner.offsetWidth;
      dom.fireBanner.classList.add('show');
      clearTimeout(state.fireBannerTimer);
      state.fireBannerTimer = setTimeout(() => dom.fireBanner?.classList.remove('show'), 1020);
    }

    function showSuperchatBanner(chainTier, gain) {
      if (!dom.superchatBanner) return;
      const tier = clamp(Math.max(1, Math.floor(chainTier || 1)), 1, 7);
      const theme = SUPERCHAT_CHAIN_THEME[tier] || SUPERCHAT_CHAIN_THEME[1];
      const card = dom.superchatBanner.querySelector('.card');
      const amount = dom.superchatBanner.querySelector('.amount');
      const message = dom.superchatBanner.querySelector('.message');
      if (card) {
        card.style.borderColor = theme.border;
        card.style.boxShadow = `0 0 0 1px ${theme.border}44, 0 18px 44px rgba(0,0,0,.34), 0 0 26px ${theme.fill}`;
      }
      if (amount) { amount.textContent = `+${fmt(Math.max(0, Math.round(gain || 0)))}`; amount.style.color = theme.border; }
      if (message) message.textContent = choice(SUPERCHAT_CHAIN_MESSAGES);
      dom.superchatBanner.classList.remove('show');
      void dom.superchatBanner.offsetWidth;
      dom.superchatBanner.classList.add('show');
      clearTimeout(state.superchatBannerTimer);
      state.superchatBannerTimer = setTimeout(() => dom.superchatBanner?.classList.remove('show'), 1060);
    }

    function makeBody(x, y, index, specialType = false) {
      const isBomb = specialType === true || specialType === 'hazard';
      const isFire = specialType === 'fire';
      const radius = contentBodyRadius(index, specialType);
      const texture = isBomb ? SPECIAL.hazard : (isFire ? SPECIAL.fire : CONTENTS[index].img);
      const opacity = 0;
      const scale = spriteScaleFor(index, radius, specialType);
      const body = Bodies.circle(x, y, radius, {
        restitution:0.02,
        friction:0.008,
        frictionStatic:0.01,
        frictionAir:0.006,
        density:isBomb ? 0.00245 : (isFire ? 0.00255 : 0.002),
        slop:0.05,
        label:isBomb ? 'hazard' : (isFire ? 'fire' : 'content'),
        render:{
          opacity,
          sprite:{ texture, xScale:scale, yScale:scale }
        }
      });
      body.gameType = isBomb ? 'hazard' : (isFire ? 'fire' : 'content');
      body.contentIndex = index;
      body.spawnAt = performance.now();
      body.displayScale = scale;
      Composite.add(engine.world, body);
      const node = ensureBodyVisual(body);
      if (node) {
        const diameter = visualDiameter(radius, specialType);
        node.dataset.diameter = String(diameter);
        node.style.width = `${diameter}px`;
        node.style.height = `${diameter}px`;
        node.style.transform = `translate(${Math.round((x - diameter / 2) * 10) / 10}px, ${Math.round((y - diameter / 2) * 10) / 10}px)`;
        node.style.opacity = '1';
      }
      return body;
    }

    function worldBodies() {
      return Composite.allBodies(engine.world).filter(b => !b.isStatic && !b.plugin?.pendingRemoval && (b.gameType === 'content' || b.gameType === 'hazard' || b.gameType === 'fire'));
    }

    function computeBoardStats() {
      const bodies = worldBodies();
      const content = [];
      const hazards = [];
      const now = performance.now();
      const settledBodies = [];
      for (const body of bodies) {
        if (body.gameType === 'hazard' || body.gameType === 'fire') hazards.push(body);
        else content.push(body);
        if (now - (body.spawnAt || 0) > 1100) settledBodies.push(body);
      }
      let trendCount = 0;
      for (const body of content) if (body.contentIndex === state.trendIndex) trendCount += 1;
      const offTrend = content.length - trendCount;
      let maxY = Number.POSITIVE_INFINITY;
      const { fullLineY, dangerLineY } = getBoardMetrics();
      const dangerBodies = [];
      const restedDangerBodies = [];
      const overfillBodies = [];
      const restedOverfillBodies = [];
      for (const body of settledBodies) {
        const topEdge = body.position.y - body.circleRadius;
        if (topEdge < maxY) maxY = topEdge;
        if (topEdge < dangerLineY) {
          dangerBodies.push(body);
          if (body.speed < 0.5) restedDangerBodies.push(body);
        }
        if (topEdge < fullLineY) {
          overfillBodies.push(body);
          if (body.speed < 0.34) restedOverfillBodies.push(body);
        }
      }
      let minX = Number.POSITIVE_INFINITY;
      let maxX = Number.NEGATIVE_INFINITY;
      for (const body of restedOverfillBodies) {
        if (body.position.x < minX) minX = body.position.x;
        if (body.position.x > maxX) maxX = body.position.x;
      }
      const overfillSpan = restedOverfillBodies.length >= 2 ? (maxX - minX) : 0;
      const nearTop = restedDangerBodies.length >= 2 || (restedDangerBodies.length >= 1 && maxY < dangerLineY - 26);
      return {
        bodies,
        contentCount:content.length,
        hazardCount:hazards.length,
        trendCount,
        offTrend,
        nearTop,
        restedDangerCount: restedDangerBodies.length,
        overfillCount: overfillBodies.length,
        restedOverfillCount: restedOverfillBodies.length,
        overfillSpan,
        fullLineY,
        dangerLineY,
        pressure: clamp((content.length + hazards.length * 1.65) / 18, 0, 1),
        clutter: clamp((offTrend * 0.82 + hazards.length * 1.4) / 14, 0, 1)
      };
    }

    function boardStats(force = false) {
      const now = performance.now();
      if (!force && state.boardStatsCache && now - state.boardStatsCacheAt < 150) return state.boardStatsCache;
      state.boardStatsCache = computeBoardStats();
      state.boardStatsCacheAt = now;
      return state.boardStatsCache;
    }

    function repairBodyPosition(body, boardW, boardH, reason = 'repair') {
      if (!body) return;
      const radius = body.circleRadius || contentBodyRadius(body.contentIndex, body.gameType);
      const safeX = clamp(Number.isFinite(body.position.x) ? body.position.x : boardW / 2, radius + 2, boardW - radius - 2);
      const safeY = clamp(Number.isFinite(body.position.y) ? body.position.y : radius + 10, radius + 10, boardH - radius - 2);
      Sleeping.set(body, false);
      Body.setPosition(body, { x:safeX, y:safeY });
      Body.setVelocity(body, { x: clamp(Number.isFinite(body.velocity.x) ? body.velocity.x : 0, -3.2, 3.2) * 0.32, y: Math.max(0.7, Math.min(4.2, (Number.isFinite(body.velocity.y) ? body.velocity.y : 0) + 0.45)) });
      Body.setAngularVelocity(body, clamp(Number.isFinite(body.angularVelocity) ? body.angularVelocity : 0, -0.22, 0.22));
      body.floatStartAt = 0;
      body.outOfRangeSince = 0;
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
      const boardW = dom.board.clientWidth || boardLogicalRect().width;
      const boardH = dom.board.clientHeight || boardLogicalRect().height;
      for (const body of bodies) {
        const age = performance.now() - (body.spawnAt || 0);
        if (age < 320) continue;
        if (body.position.y < body.circleRadius * 0.2 || body.position.x < -body.circleRadius || body.position.x > boardW + body.circleRadius) {
          repairBodyPosition(body, boardW, boardH, 'offscreen');
        }
      }
    }

    function rescueFloatingBodies() {
      const bodies = worldBodies();
      if (!bodies.length || !dom.board) return;
      const boardHeight = dom.board.clientHeight || 0;
      const now = performance.now();
      for (const body of bodies) {
        const age = now - (body.spawnAt || 0);
        if (age < 420) continue;
        if (body.position.y < 72 || body.position.y > boardHeight - 60) continue;
        const movingEnough = Math.abs(body.velocity.y) > 0.18 || Math.abs(body.velocity.x) > 0.22 || Math.abs(body.angularVelocity || 0) > 0.05;
        if (movingEnough) {
          body.floatStartAt = 0;
          continue;
        }
        let hasSupportBelow = false;
        for (const other of bodies) {
          if (other.id === body.id) continue;
          const dx = Math.abs(other.position.x - body.position.x);
          const dy = other.position.y - body.position.y;
          const supportDx = body.circleRadius + other.circleRadius - 6;
          if (dx > supportDx || dy < 0) continue;
          if (dy <= body.circleRadius + other.circleRadius + 16) {
            hasSupportBelow = true;
            break;
          }
        }
        if (hasSupportBelow) {
          body.floatStartAt = 0;
          continue;
        }
        if (!body.floatStartAt) body.floatStartAt = now;
        if (now - body.floatStartAt < 90) continue;
        Sleeping.set(body, false);
        Body.setPosition(body, { x: clamp(body.position.x, body.circleRadius + 6, dom.board.clientWidth - body.circleRadius - 6), y: Math.min(boardHeight - body.circleRadius - 10, body.position.y + 12) });
        Body.setVelocity(body, { x: body.velocity.x * 0.2, y: Math.max(1.45, body.velocity.y + 0.7) });
        Body.setAngularVelocity(body, body.angularVelocity * 0.28);
        body.floatStartAt = now;
      }
    }

    function purgeBrokenBodies() {
      const bodies = worldBodies();
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
          if (farOutside || now - body.outOfRangeSince > 70) repairBodyPosition(body, width, height, 'broken');
        } else {
          body.outOfRangeSince = 0;
        }
      }
      if (broken.length) hardRemoveBodies(broken);
    }


    function updateWorldBounds() {
      if (!engine) return;
      const boardW = dom.board.clientWidth || boardLogicalRect().width;
      const boardH = dom.board.clientHeight || boardLogicalRect().height;
      if (wallBodies.length) wallBodies.forEach(body => Composite.remove(engine.world, body, true));
      wallBodies = [
        Bodies.rectangle(boardW / 2, boardH + 36, boardW + 220, 96, { isStatic:true, render:{ visible:false } }),
        Bodies.rectangle(-32, boardH / 2, 96, boardH + 180, { isStatic:true, render:{ visible:false } }),
        Bodies.rectangle(boardW + 32, boardH / 2, 96, boardH + 180, { isStatic:true, render:{ visible:false } })
      ];
      wallBodies.forEach(body => { body.gameType = 'wall'; });
      wallBodies.forEach(body => Composite.add(engine.world, body));
    }

    function touching(a, b) {
      const pad = 0.5;
      const dx = b.position.x - a.position.x;
      const dy = b.position.y - a.position.y;
      const rr = a.circleRadius + b.circleRadius + pad;
      return dx * dx + dy * dy <= rr * rr;
    }

    function buildTouchGroupsForIndex(targetIndex) {
      const targetBodies = worldBodies().filter(body => body.gameType === 'content' && body.contentIndex === targetIndex && performance.now() - body.spawnAt > 220);
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

    function scanGroups() {
      const groups = buildTouchGroupsForIndex(state.trendIndex);
      state.previewGroups = groups.filter(g => g.length >= 2).map(g => ({ ids:g.map(b => b.id), len:g.length }));
      const nextGroups = buildTouchGroupsForIndex(state.nextTrendIndex);
      state.nextPreviewGroups = nextGroups.filter(g => g.length >= 2).map(g => ({ ids:g.map(b => b.id), len:g.length }));
      return groups.filter(g => g.length >= 3 && g.every(body => body.speed < 4.2));
    }

    function scanAllClearableGroups() {
      const groups = [];
      for (let idx = 0; idx < CONTENTS.length; idx += 1) {
        groups.push(...buildTouchGroupsForIndex(idx));
      }
      return groups.filter(g => g.length >= 3 && g.every(body => body.speed < 4.8));
    }

    function biggestPreviewLen() {
      return state.previewGroups.reduce((m, group) => Math.max(m, group.len || 0), 0);
    }

    function biggestNextPreviewLen() {
      return state.nextPreviewGroups.reduce((m, group) => Math.max(m, group.len || 0), 0);
    }

    function expandPendingGroup(pending) {
      if (!pending || !Number.isInteger(pending.contentIndex)) return [];
      const bodies = worldBodies().filter(body => body.gameType === 'content' && body.contentIndex === pending.contentIndex && performance.now() - body.spawnAt > 140);
      if (!bodies.length) return [];
      const idMap = new Map(bodies.map(body => [body.id, body]));
      const seed = [];
      for (const id of pending.ids || []) {
        const body = idMap.get(id);
        if (body) seed.push(body);
      }
      if (!seed.length) return [];
      const visited = new Set(seed.map(body => body.id));
      const stack = seed.slice();
      while (stack.length) {
        const current = stack.pop();
        for (const other of bodies) {
          if (visited.has(other.id) || other.id === current.id) continue;
          if (touching(current, other)) {
            visited.add(other.id);
            stack.push(other);
          }
        }
      }
      return bodies.filter(body => visited.has(body.id));
    }

    function updatePendingClearVisual(ids = []) {
      const active = new Set(ids);
      bodyVisuals.forEach((node, id) => node.classList.toggle('pending-clear', active.has(id)));
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
      groups.sort((a, b) => b.length - a.length || a.reduce((m, x) => m + x.position.y, 0) - b.reduce((m, x) => m + x.position.y, 0));
      clearGroup(groups[0]);
      return true;
    }

    function clearGroup(group) {
      if (!group.length) return;
      const mainIndex = group[0]?.contentIndex ?? state.trendIndex;
      const accent = CONTENTS[mainIndex]?.accent || currentTrend().accent;
      const center = group.reduce((acc, body) => {
        acc.x += body.position.x;
        acc.y += body.position.y;
        return acc;
      }, { x:0, y:0 });
      center.x /= group.length;
      center.y /= group.length;

      const toRemove = new Set(group);
      let collateral = 0;
      let collateralScore = 0;
      if (state.buzzMode > 0) {
        worldBodies().forEach(body => {
          const dx = body.position.x - center.x;
          const dy = body.position.y - center.y;
          if (dx * dx + dy * dy <= 190 * 190) {
            if (!toRemove.has(body)) { collateral += 1; collateralScore += body.gameType === 'hazard' ? contentScoreValue(-1, true) : Math.round(contentScoreValue(body.contentIndex) * 0.42); }
            toRemove.add(body);
          }
        });
      }

      const removed = Array.from(toRemove);
      const bombsTouched = worldBodies().filter(body => body.gameType === 'hazard' && removed.some(rem => {
        const rr = (body.circleRadius || 0) + (rem.circleRadius || 0) + 8;
        const dx = body.position.x - rem.position.x;
        const dy = body.position.y - rem.position.y;
        return dx * dx + dy * dy <= rr * rr;
      }));
      hardRemoveBodies(removed);
      if (bombsTouched.length) {
        const fireCount = 5 + Math.floor(rand() * 6);
        const dropped = spawnHazardBurst(fireCount, center.x);
        popText(dom.board.clientWidth / 2, dom.board.clientHeight * 0.34, '大炎上!!', '#fff0f0', 42);
        addRing(dom.board.clientWidth / 2, dom.board.clientHeight * 0.34, '#ff5b73', 42, 360);
        showFireBanner();
        spawnComment(false, `爆弾に触れて大炎上 x${dropped}`, 'low', '🔥');
      }
      const sameDropCascade = state.currentChainDropSerial === state.dropSerial && state.chainDecay > 0;
      state.chainCount = sameDropCascade ? state.chainCount + 1 : 1;
      state.currentChainDropSerial = state.dropSerial;
      state.chainDecay = 1.28;
      state.peakChain = Math.max(state.peakChain, state.chainCount);
      const chainTier = state.chainCount;
      const statsNow = boardStats(true);
      const rushBonus = state.rushWindow > 0 && state.setupCarryLen >= 2;
      const switchBonus = rushBonus && state.recentSwitchBonus > 0 ? 1800 : 0;
      const base = group.length * contentScoreValue(mainIndex);
      const comboBonus = state.combo * 400;
      const collateralBonus = collateralScore;
      const clipBonus = 0;
      const pinTargetHit = state.pinTimer > 0 && group[0] && group[0].labelContent === state.pinTargetIndex;
      const pinBonus = pinTargetHit && group.length >= state.pinMinLen ? state.pinBonusValue : 0;
      const clutchBonus = (state.fireMode > 0 || statsNow.pressure > 0.58 || state.topDangerTime > 0.9) ? (680 + group.length * 112 + collateral * 96) : 0;
      const topGapBefore = Math.max(0, crownTargetScore(state.seed) - Math.floor(state.score));
      const crownRush = crownTargetScore(state.seed) > 0 && topGapBefore > 0 && topGapBefore <= 5200;
      const nextPreviewLen = biggestNextPreviewLen();
      const forecastReady = nextPreviewLen >= 2;
      let rushBonusValue = 0;
      let jackBonus = 0;
      let jackLevelUp = false;
      let crownKeepBonus = 0;
      let forecastBonus = 0;
      let crownClutchBonus = 0;
      let waveLinkBonus = 0;
      let chainBonus = 0;
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
      if (rushBonus && state.setupCarryLen >= 2) {
        waveLinkBonus = (state.setupCarryLen >= 3 ? 1960 : 1180) + state.combo * 220;
      }
      if (topGapBefore > 0 && topGapBefore <= 1800) {
        crownClutchBonus = 520 + state.combo * 140 + (forecastReady ? 220 : 0);
      }
      if (chainTier >= 2) {
        chainBonus = Math.round((base + comboBonus + forecastBonus + waveLinkBonus) * Math.min(0.88, 0.16 * chainTier)) + chainTier * 320;
      }
      const crownRushBonus = crownRush ? Math.round((base + comboBonus + switchBonus) * (topGapBefore <= 2500 ? 0.40 : 0.32)) : 0;
      const alreadyLeading = crownTargetScore(state.seed) > 0 && topGapBefore <= 0;
      if (alreadyLeading) {
        state.crownHoldStreak += 1;
        state.peakCrownHold = Math.max(state.peakCrownHold, state.crownHoldStreak);
        crownKeepBonus = 320 + Math.min(6, state.crownHoldStreak) * 120;
      } else {
        state.crownHoldStreak = 0;
      }
      const gain = base + comboBonus + collateralBonus + switchBonus + clipBonus + pinBonus + rushBonusValue + jackBonus + clutchBonus + crownRushBonus + crownKeepBonus + forecastBonus + crownClutchBonus + waveLinkBonus + chainBonus;
      state.score += gain;
      const timeBonus = 0;
      const topGapAfter = Math.max(0, crownTargetScore(state.seed) - Math.floor(state.score));
      const tookCrown = topGapBefore > 0 && topGapAfter <= 0 && crownTargetScore(state.seed) > 0;
      state.clearCount += 1;
      if (pinBonus) state.pinHits += 1;
      if (forecastBonus) state.forecastHits += 1;
      if (waveLinkBonus) state.waveLinkHits += 1;
      if (crownClutchBonus) state.crownClutchHits += 1;
      state.tension = clamp(state.tension + 12 + group.length * 3.2 + collateral * 0.7 + (state.clipTime > 0 ? 6 : 0) + (pinBonus ? 4 : 0) + (rushBonus ? 6 : 0) + (clutchBonus ? 8 : 0) + (forecastBonus ? 5 : 0) + (crownClutchBonus ? 4 : 0) + (waveLinkBonus ? 5 : 0) + (chainBonus ? 6 : 0), 0, 100);
      state.craving = clamp(state.craving - 14 - group.length * 2.5 - (clutchBonus ? 8 : 0) - (forecastBonus ? 5 : 0) - (waveLinkBonus ? 5 : 0), 0, 100);
      state.heat = clamp(state.heat - 18 - group.length * 8 - collateral * 2 - (clutchBonus ? 16 : 0) - (forecastBonus ? 10 : 0) - (waveLinkBonus ? 10 : 0), 0, 100);
      state.buzz = clamp(state.buzz + 22 + group.length * 9 + collateral * 2 + (rushBonus ? 12 + state.jackChain * 3 : 0) + (clutchBonus ? 12 : 0) + (crownRush ? 8 : 0) + (forecastBonus ? 10 : 0) + (crownClutchBonus ? 8 : 0) + (waveLinkBonus ? 12 : 0) + (chainBonus ? 14 + chainTier * 2 : 0), 0, 100);
      state.combo += 1;
      state.comboTimer = 8.8;
      state.peakCombo = Math.max(state.peakCombo, state.combo);
      state.idle = 0;
      state.fireClearCount += state.fireMode > 0 ? 1 : 0;

      addParticles(center.x, center.y, accent, 22 + collateral * 2, 8.2);
      addRing(center.x, center.y, accent, 18, state.buzzMode > 0 ? 290 : 200);
      flashScreen(accent);
      popText(center.x, center.y, `${group.length}ヒット +${fmt(gain)}`, accent, state.buzzMode > 0 ? 30 : 24);
      if (switchBonus) popText(center.x, center.y + 40, '先読みHIT', '#8ef8ff', 18);
      if (state.clipTime > 0) popText(center.x, center.y + 72, '大バズり中', '#fff0a3', 18);
      if (rushBonus) popText(center.x, center.y + 102, `先読み +${fmt(rushBonusValue)}`, '#8ef8ff', 19);
      if (jackBonus) popText(center.x, center.y + 126, `先読み連勝 x${state.jackChain} +${fmt(jackBonus)}`, '#fff0a3', 20);
      if (forecastBonus) popText(center.x, center.y - 156, `仕込み +${fmt(forecastBonus)}`, '#86f1ff', 18);
      if (waveLinkBonus) popText(center.x, center.y - 204, `波読み +${fmt(waveLinkBonus)}`, '#7ffcff', 20);
      if (chainBonus) popText(center.x, center.y - 228, `${chainTier}連鎖 +${fmt(chainBonus)}`, '#ffb7ff', 22);
      if (crownKeepBonus) popText(center.x, center.y - 132, `王冠防衛 +${fmt(crownKeepBonus)}`, '#fff4a3', 18);
      if (crownClutchBonus) popText(center.x, center.y - 180, `王冠クラッチ +${fmt(crownClutchBonus)}`, '#ffd84c', 18);
      if (pinBonus) popText(center.x, center.y + 152, state.pinClass === 'next' ? '次の波ピンコメ!' : 'ピンコメ達成!', '#8ef8ff', 18);
      if (clutchBonus) popText(center.x, center.y - 108, `逆転 +${fmt(clutchBonus)}`, '#ffb7d6', 20);
      if (state.combo >= 2) popText(center.x, center.y - 42, `COMBO x${state.combo}`, '#ffe37a', 22);
      showSuperchatBanner(chainTier, gain);

      if (jackLevelUp) {
        state.clipTime = Math.max(state.clipTime, 10);
        state.clipCooldown = Math.max(state.clipCooldown, 16);
        state.buzz = clamp(state.buzz + 26, 0, 100);
        popText(center.x, center.y - 76, '先読み3連!', '#fff4a3', 30);
        spawnComment(false, '先読み3連！ ここから一気に伸びる', 'super', '🚀');
        if (crownRush) popText(center.x, center.y - 136, `王冠チャンス +${fmt(crownRushBonus)}`, '#ffe37a', 20);
        spawnComment(false, choice(COMMENT_BANK.jack), 'super', '⚡');
        say('jack', 2.0);
        triggerVoiceCue('jack', state.jackChain);
        flashScreen('#fff0a3');
        sfx('ready', 1.2);
      } else if (rushBonus) {
        spawnComment(false, choice(COMMENT_BANK.jack), 'super', '🚀');
        say('jack', 1.7);
        triggerVoiceCue(state.jackChain >= 2 ? 'jack' : 'rush', state.jackChain || 1);
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
      if (waveLinkBonus) {
        spawnComment(false, state.setupCarryLen >= 3 ? '先に仕込んだ波をそのまま取り切った。かなり強い' : '次の波を読んで取れた。うまい', 'super', '🌊');
      }
      if (crownClutchBonus) {
        spawnComment(false, 'ここで王冠いける。クラッチ決めたい', 'super', '👑');
      }
      if (chainBonus) {
        spawnComment(false, chainTier >= 4 ? `やばい ${chainTier}連鎖！` : `${chainTier}連鎖きた`, 'super', chainTier >= 4 ? '💥' : '⚡');
      }
      state.crownLead = crownTargetScore(state.seed) > 0 && topGapAfter <= 0;
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
        triggerVoiceCue('big', Math.max(group.length, state.pinMinLen));
        spawnComment(false, `${state.pinText} それ！`, 'super', state.pinIcon || '📌');
        if (Math.max(0, crownTargetScore(state.seed) - Math.floor(state.score)) <= 2500 && crownTargetScore(state.seed) > 0) {
          spawnComment(false, 'あと少しで1位いける', 'super', '👑');
        }
        say('big', 1.8);
        rollPinnedComment(state.clipTime > 0 ? 'clip' : 'normal');
      }
      if (clutchBonus) {
        triggerVoiceCue('big', Math.max(group.length, 4));
        spawnComment(false, 'うわその返しで流れ戻した', 'super', '🩷');
        spawnComment(false, 'いまの逆転アツい', 'super', '🔥');
        say('big', 1.7);
      }
      if (chainTier >= 4) {
        popText(center.x, center.y + 76, `${chainTier} CHAIN!`, '#fff0ff', 24);
        say('big', 2.4);
        spawnComment(false, 'うわ連鎖エグい', 'super', '💥');
        spawnComment(false, '配信の山きた', 'super', '📸');
        sfx('chain', Math.min(1.75, 1.05 + chainTier * 0.15));
        triggerVoiceCue('chain', chainTier);
      } else if (group.length >= 5 || collateral >= 4) {
        popText(center.x, center.y + 76, 'CLIP! CLIP! CLIP!', '#fff4a3', 20);
        say('big', 2.2);
        spawnComment(false, 'うわ今の気持ちいい', 'super', '✨');
        spawnComment(false, '切り抜き確定', 'super', '📸');
        spawnComment(false, choice(COMMENT_BANK.super), 'super', '🚀');
        sfx('big', Math.min(1.4, 1 + group.length * 0.08));
        if (group.length >= 6 || collateral >= 5) triggerVoiceCue('hype', Math.max(chainTier, 2));
        else triggerVoiceCue('big', Math.max(group.length, collateral));
      } else {
        say('clear', 1.9);
        spawnComment(false, '今の当たり！', 'hot', '✅');
        if (state.combo >= 2) spawnComment(false, `COMBO x${state.combo} うまい`, 'hot', '⚡');
        if (chainTier >= 2) {
          sfx('chain', Math.min(1.45, 0.92 + chainTier * 0.14));
          triggerVoiceCue('chain', chainTier);
        } else {
          sfx('clear', Math.min(1.2, 0.84 + group.length * 0.08));
          triggerVoiceCue('clear', group.length);
        }
      }


      if (mainIndex === state.trendIndex) {
        const previousTrendIndex = state.trendIndex;
        shiftTrendQueue();
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
      engine = Engine.create({ enableSleeping:true, gravity:{ x:0, y:1 }, positionIterations:5, velocityIterations:4, constraintIterations:1 });
      render = null;
      updateWorldBounds();
      runner = Runner.create();
      Runner.run(runner, engine);
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
      state.dropSerial = 0;
      state.seed = todaySeed();
      state.rng = mulberry32(state.seed);
      state.trendIndex = Math.floor(gameRand() * CONTENTS.length);
      state.upcomingTrendQueue = [];
      state.nextTrendIndex = pickTrendExcluding(state.trendIndex);
      state.futureTrendIndex = pickTrendExcluding(state.trendIndex, state.nextTrendIndex);
      ensureUpcomingTrendQueue(6);
      state.trendTimer = trendDuration();
      state.trendWarning = false;
      state.idle = 0;
      state.scanTimer = 0;
      state.commentTimer = 0;
      state.fireCooldown = 0;
      state.fireMode = 0;
      state.fireClearCount = 0;
      state.hazardTimer = 4.2;
      state.showCaptionTimer = 0;
      state.selectedDropIndex = 0;
      state.queue = [0,0,0];
      state.pendingTrendClear = null;
      state.commentEventType = '';
      state.commentEventTimer = 0;
      state.commentEventText = '';
      state.previewGroups = [];
      state.nextPreviewGroups = [];
      state.lastTs = 0;
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
      state.boardStatsCache = null;
      state.boardStatsCacheAt = 0;
      state.lastVoiceText = '';
      state.voiceSubtitleTimer = 0;
      state.speechBubbleText = '';
      state.speechBubbleTimer = 0;
      state.shiftGlowIds = [];
      state.shiftGlowTimer = 0;
      state.finishing = false;
      state.paused = false;
      state.resultVoicePlayed = false;
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

    function activateClipTime(reason = 'superchat') {
      const fresh = state.clipTime <= 0.05;
      state.clipTime = Math.max(state.clipTime, fresh ? 15 : state.clipTime + 3.5);
      state.clipCooldown = 999;
      if (fresh) state.clipActivations += 1;
      setCaption(reason === 'superchat' ? 'スパチャを拾って大バズり発動！ いまが最大の見せ場。' : '大バズり中！ いまが最大の見せ場。いまのトレンドをまとめて取って一気に伸ばそう。', 2.6);
      spawnComment(false, reason === 'superchat' ? 'スパチャの波きた！' : '大バズりきた！', 'super', reason === 'superchat' ? '💰' : '🎬');
      triggerVoiceCue('hype', 2);
      spawnComment(false, 'いま切り抜きどころ', 'super', '🚀');
      say('big', 2.1);
      flashScreen('#ffe37a');
      showBigBuzzBanner('大バズり!!');
      setHyperMix(1);
      addParticles(dom.board.clientWidth / 2, dom.board.clientHeight * 0.42, 'rgba(255,216,76,.96)', 22, 8);
      addParticles(dom.board.clientWidth / 2, dom.board.clientHeight * 0.42, 'rgba(255,47,146,.9)', 14, 7);
      addRing(dom.board.clientWidth / 2, dom.board.clientHeight * 0.38, '#fff4a3', 24, 260);
      addRing(dom.board.clientWidth / 2, dom.board.clientHeight * 0.38, '#ff5ab1', 38, 320);
      rollPinnedComment('clip');
      sfx('ready', 1.0);
    }


    function goToTitle() {
      stopResultBgm();
      state.active = false;
      state.paused = false;
      try { if (runner) Runner.stop(runner); } catch(_) {}
      destroyEngine();
      dom.pauseOverlay?.classList.add('hidden');
      dom.gameScreen.classList.add('hidden');
      dom.resultScreen.classList.add('hidden');
      dom.howtoScreen?.classList.add('hidden');
      dom.startScreen.classList.remove('hidden');
      avatarVisualFile = 'char_normal.png';
      activeBoardCharacterLayer = 'front';
      pendingAvatarMood = 'normal';
      if (dom.boardCharacter) dom.boardCharacter.dataset.file = 'char_normal.png';
      if (dom.avatar) dom.avatar.dataset.file = 'char_normal.png';
      if (dom.boardCharacter) dom.boardCharacter.dataset.file = 'char_normal.png';
      if (dom.boardCharacterBack) dom.boardCharacterBack.dataset.file = 'char_normal.png';
      requestAnimationFrame(alignTrendMainToGameCenter);
      try { dom.bgmNormal.pause(); dom.bgmHyper.pause(); } catch(_) {}
      lastHyperBgmActive = false;
      warningVoiceLatched = false;
      topVoiceLatched = false;
      focusVoiceCooldownUntil = 0;
      calmVoiceCooldownUntil = 0;
      setHyperMix(0);
    }

    function togglePause(force) {
      if (!state.active || !engine) return;
      const next = typeof force === 'boolean' ? force : !state.paused;
      state.paused = next;
      dom.pauseOverlay?.classList.toggle('hidden', !next);
      if (next) {
        try { if (runner) Runner.stop(runner); } catch(_) {}
        state.lastTs = 0;
      } else {
        try { if (runner) Runner.run(runner, engine); } catch(_) {}
        state.lastTs = 0;
      }
    }

    function startGame() {
      stopResultBgm();
      persistPlayerName();
      preloadAllAvatars();
      ensureAudio();
      playBgm();
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
      state.avatarMood = 'normal';
      state.avatarVisualMood = 'normal';
      updateBackgroundState();
      dom.gameShell.classList.remove('shake');
      dom.dangerFog.classList.remove('show');
      dom.topDangerLine.classList.remove('show');
      resetState();
      destroyEngine();
      resizeCanvas();
      initEngine();
      setTrend(state.trendIndex, false, null, { suppressSpeech:true, suppressVoice:true });
      setSelectedDropIndex(0, { silent:true });
      triggerVoiceCue('start', 1, { force:true });
      refreshQueue();
      updateUi();
      requestLoop(0);
    }

    function activateBurst() {
      if (!state.active) return;
      state.buzzReady = false;
      state.buzz = 0;
      state.buzzMode = 0;
      state.buzzActivations += 1;
      dom.burstBtn.classList.remove('ready');
      setBurstButtonLabel('default');
      setAvatarVisual('apology');
      const clearedHazards = clearAllHazards(true);
      if (!clearedHazards) {
        flashScreen('#ffe37a');
        addRing(dom.board.clientWidth / 2, dom.board.clientHeight * 0.42, '#ffe37a', 20, 240);
      }
      triggerVoiceCue('apology_fire');
      say('buzz', 2.4);
    }

    function triggerFire(reason = 'bomb') {
      if (!state.active) return;
      state.fireMode = Math.max(state.fireMode, 999);
      state.fireCooldown = Math.max(state.fireCooldown, 1.2);
      state.fireClearCount = 0;
      state.hazardTimer = Math.max(state.hazardTimer, 3.6);
      dom.dangerFog.classList.add('show');
      dom.gameShell.classList.add('shake');
      setCaption(reason === 'bomb' ? '爆弾の近くを消して大炎上。謝罪配信で炎上だけを消せる。' : '大炎上中。謝罪配信で炎上だけを消せる。', 2.2);
      spawnComment(false, 'うわっ、大炎上！！', 'low', '🔥');
      triggerVoiceCue('fire');
      flashScreen('#ff5b73');
      sfx('bad', 1);
      say('fire', 2.2);
      showFireBanner();
      setTimeout(() => dom.gameShell.classList.remove('shake'), 260);
    }

    function spawnHazard() {
      const boardW = dom.board.clientWidth || boardLogicalRect().width;
      const x = 40 + gameRand() * (boardW - 80);
      const body = makeBody(x, 44, -1, 'hazard');
      state.boardStatsCache = null;
      Body.setAngularVelocity(body, (gameRand() - 0.5) * 0.14);
      addParticles(x, 48, 'rgba(255,255,255,.88)', 8, 3.8);
      popText(x, 92, '爆弾', '#ffffff', 22);
      spawnComment(false, '爆弾きた、近くを消すと危ない', 'low', '💣');
      playAssetSfx('hazard', 0.74);
    }

    function spawnHazardBurst(count = 1, centerX = null) {
      const total = clamp(Math.floor(count || 0), 0, 14);
      if (!total) return 0;
      triggerFire('bomb');
      for (let i = 0; i < total; i++) {
        const boardW = dom.board.clientWidth || boardLogicalRect().width;
        const spreadBase = centerX == null ? (40 + gameRand() * (boardW - 80)) : clamp(centerX + (gameRand() - 0.5) * 220, 40, boardW - 40);
        const body = makeBody(spreadBase, 42 + i * 2, -1, 'fire');
        Body.setAngularVelocity(body, (gameRand() - 0.5) * 0.16);
      }
      playAssetSfx('hazard', 0.86);
      return total;
    }

    function clearAllHazards(fromBurst = false) {
      if (!engine) return 0;
      const hazards = worldBodies().filter(body => body.gameType === 'fire');
      if (!hazards.length) {
        if (fromBurst) {
          setCaption('いま消す大炎上は出ていない。爆弾はそのまま残る。', 1.4);
          sfx('warn', 0.72);
        }
        return 0;
      }
      let centerX = 0;
      let centerY = 0;
      for (const body of hazards) {
        centerX += body.position.x;
        centerY += body.position.y;
        addParticles(body.position.x, body.position.y, 'rgba(255,180,120,.95)', 12, 6);
        addParticles(body.position.x, body.position.y, 'rgba(255,91,115,.92)', 10, 5);
        addRing(body.position.x, body.position.y, '#ff5b73', 18, 220);
      }
      centerX /= hazards.length;
      centerY /= hazards.length;
      hardRemoveBodies(hazards);
      state.fireMode = 0;
      state.fireCooldown = Math.max(state.fireCooldown || 0, 2.5);
      state.heat = clamp(state.heat - (18 + hazards.length * 5), 0, 100);
      state.craving = clamp(state.craving - (8 + hazards.length * 2), 0, 100);
      state.tension = clamp(state.tension + 8 + hazards.length * 2.5, 0, 100);
      state.score += hazards.length * 420;
      dom.dangerFog.classList.remove('show');
      dom.gameShell.classList.add('shake');
      flashScreen('#ffcf5b');
      addRing(centerX, centerY, '#ffe37a', 34, 320);
      addRing(centerX, centerY, '#ff5b73', 62, 260);
      popText(centerX, centerY, `大炎上全消し x${hazards.length}`, '#fff0a3', 28);
      spawnComment(false, `謝罪配信で大炎上を${hazards.length}個消した！`, 'super', '🧯');
      setCaption('謝罪配信で大炎上だけを消した。爆弾は盤面に残っている。', 2.2);
      triggerVoiceCue('apology_fire', Math.max(2, hazards.length));
      sfx('burst', 1.24);
      setTimeout(() => dom.gameShell.classList.remove('shake'), 320);
      return hazards.length;
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
        sfx('bad', 0.22);
        return;
      }

      const x = safeDrop.x;
      if (safeDrop.shifted && Math.abs(safeDrop.x - desiredX) > 10) {
        setCaption('上が詰まり気味だったので、近い空きレーンにずらしました。', 0.65);
      }

      ensureQueueLength(3);
      const idx2 = state.selectedDropIndex ?? 0;
      triggerPreviewLaunchFx(CONTENTS[idx2]?.accent || '#ffffff');
      state.dropSerial += 1;
      const body = makeBody(x, spawnY, idx2, false);
      state.boardStatsCache = null;
      body.spawnSerial = state.dropSerial;
      ensureQueueLength(3);
      state.idle = 0;
      state.tension = clamp(state.tension - 0.18, 0, 100);
      state.heat = clamp(state.heat + (idx2 === state.trendIndex ? 1.0 : 6.2), 0, 100);
      if (idx2 !== state.trendIndex) {
        state.craving = clamp(state.craving + 1.2, 0, 100);
        state.combo = Math.max(0, state.combo - 1);
        state.comboTimer = Math.min(state.comboTimer, 2.2);
        if (rand() < 0.08) spawnComment(false, `${CONTENTS[idx2].name}は今の本命ではないかも`, 'low', contentChatIcon(idx2));
      } else {
        state.comboTimer = Math.max(state.comboTimer, 5.2);
        if (rand() < 0.08) spawnComment(false, `${CONTENTS[idx2].name}、いま欲しいやつ`, 'hot', contentChatIcon(idx2));
      }
      renderPreview();
      addParticles(x, Math.max(40, radius + 16), CONTENTS[idx2].accent, 9, 3.4);
      addRing(x, Math.max(44, radius + 22), CONTENTS[idx2].accent, 14, 180);
      sfx('drop', 0.5);
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
      setAvatarVisual(pickAvatarMood());
      dom.burstBtn.classList.remove('ready');
      setBurstButtonLabel('default');
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
      else if (state.rushWindow > 0) eventMiniText = previewLen >= 2 ? `先読みGO x${previewLen}` : '先読み';
      else if (state.overfillTime > 0.2) eventMiniText = '満杯危険';
      else if (state.chainCount >= 2 && state.chainDecay > 0) eventMiniText = `${state.chainCount}連鎖`;
      else if (state.jackChain > 0) eventMiniText = `先読み連勝 x${state.jackChain}`;
      else if (state.trendWarning && nextPreviewLen >= 3) eventMiniText = `次波READY x${nextPreviewLen}`;
      else if (state.trendWarning && nextPreviewLen >= 2) eventMiniText = '次波あと1';
      else if (state.crownHoldStreak > 0) eventMiniText = `王冠防衛 x${state.crownHoldStreak}`;
      else if (crownClutchActive) eventMiniText = '王冠クラッチ';
      else if (crownRushActive) eventMiniText = '王冠圏';
      else eventMiniText = topGap > 0 ? `1位まで ${fmt(topGap)}` : '1位ペース';
      dom.eventMini.textContent = eventMiniText;
      if (state.showCaptionTimer <= 0 && state.active) {
        let caption = '';
        if (state.clipTime > 0) {
          caption = `大バズり中。『${currentTrend().name}』をまとめて取る時間。`;
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
          caption = 'いま1位。防衛を重ねるほど王冠が固くなる。';
        } else if (crownClutchActive) {
          caption = `あと${fmt(topGap)}で今日の1位。`;
        } else {
          caption = `今は『${currentTrend().name}』を3つ以上。次は『${nextTrend().name}』。`; 
        }
        dom.captionText.textContent = caption;
      }
      updatePinCommentUi();
      if (state.fireMode > 0) dom.burstBtn.classList.add('warn');
      else dom.burstBtn.classList.remove('warn');
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
        if (!warningVoiceLatched && triggerVoiceCue('warning', nextPreviewLen)) warningVoiceLatched = true;
      } else if (nextPreviewLen <= 1) {
        warningVoiceLatched = false;
      }

      if (topActive) {
        if (!topVoiceLatched && triggerVoiceCue('top')) topVoiceLatched = true;
      } else if (state.topDangerTime < 0.18 && state.overfillTime < 0.14) {
        topVoiceLatched = false;
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

    function requestLoop(ts) {
      rafId = requestAnimationFrame(requestLoop);
      if (!state.active || !engine || state.paused) return;
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
      state.shiftGlowTimer = Math.max(0, state.shiftGlowTimer - dt);
      state.pinTimer = Math.max(0, state.pinTimer - dt);
      state.rushWindow = Math.max(0, state.rushWindow - dt);
      state.hintCooldown = Math.max(0, state.hintCooldown - dt);
      if (state.clipTime > 0) {
        const wasClipActive = state.clipTime > 0;
        state.clipTime = Math.max(0, state.clipTime - dt);
        if (wasClipActive && state.clipTime <= 0) {
          setHyperMix(0);
          setCaption('大バズり終了。通常BGMに戻った。次の見せ場まで盤面を整えよう。', 1.8);
        }
      }
      if (state.comboTimer > 0) {
        state.comboTimer -= dt;
        if (state.comboTimer <= 0) state.combo = 0;
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

      if (state.scanTimer >= 0.14) {
        state.scanTimer = 0;
        resolveGroups();
      }
      const previewLen = biggestPreviewLen();
      const nextPreviewLen = biggestNextPreviewLen();
      state.trendWarning = nextPreviewLen >= 2;
      if (previewLen >= 2 && state.hintCooldown <= 0 && state.fireMode <= 0) {
        if (previewLen === 2) {
          spawnComment(false, `あと1個で${currentTrend().name}つながる`, 'hot', '👀');
          if (rand() < 0.45) spawnComment(false, state.pinTargetIndex === state.nextTrendIndex ? `次の波ピンコメも${nextTrend().name}待ち` : `ピンコメも${currentTrend().name}待ち`, 'next', '📌');
          if (Math.max(0, crownTargetScore(state.seed) - Math.floor(state.score)) <= 4500 && crownTargetScore(state.seed) > 0) spawnComment(false, '王冠チャンス見えてきた', 'super', '👑');
          state.hintCooldown = 4.8;
        } else if (previewLen >= 3) {
          spawnComment(false, `そのまま${currentTrend().name}消えそう`, 'super', '✨');
          state.hintCooldown = 3.6;
        }
      } else if (state.trendWarning && nextPreviewLen >= 2 && state.hintCooldown <= 0 && state.fireMode <= 0) {
        if (nextPreviewLen === 2) {
          spawnComment(false, `次の波の${nextTrend().name}、あと1個`, 'next', '🌊');
          state.hintCooldown = 4.6;
        } else {
          spawnComment(false, `次の波の${nextTrend().name}、もう見えてる`, 'super', '🌊');
          state.hintCooldown = 3.4;
        }
      }
      if (state.pinTimer <= 0) {
        rollPinnedComment(state.clipTime > 0 ? 'clip' : 'normal');
      }
      updateDynamicVoiceCues(ts);
      state.commentEventTimer = 0;
      state.commentEventType = '';
      state.commentEventText = '';
      const chatInterval = state.clipTime > 0 ? 1.18 : 2.05;
      if (state.commentTimer >= chatInterval) {
        state.commentTimer = 0;
        spawnComment(false);
      }

      if (state.fireMode > 0) {
        const hasFireItems = worldBodies().some(body => body.gameType === 'fire');
        if (hasFireItems) {
          dom.dangerFog.classList.add('show');
        } else {
          state.fireMode = Math.max(0, state.fireMode - dt * 3.2);
          if (state.fireMode <= 0) {
            dom.dangerFog.classList.remove('show');
            setCaption('大炎上は収まった。まだ立て直せる。', 1.7);
          }
        }
      }
      if (state.buzzMode > 0) {
        state.buzzMode -= dt;
        if (state.buzzMode <= 0 && !state.buzzReady) {
          setCaption('火消しの構えは終了。次の謝罪配信ゲージを溜めよう。', 1.6);
        }
      }

      const mixStrength = clamp((state.fireMode > 0 ? 0.78 : 0) + (state.buzzMode > 0 ? 0.92 : 0) + (state.clipTime > 0 ? 0.36 : 0) + (state.tension < 35 ? 0.32 : 0) + (state.topDangerTime > 0.5 ? 0.22 : 0), 0, 1);
      setHyperMix(mixStrength);
      updateMoodText(dt);
      state.visualTimer += dt;
      state.uiTimer += dt;
      state.cleanupTimer += dt;
      state.rescueTimer += dt;
      if (state.cleanupTimer >= 0.16) {
        state.cleanupTimer = 0;
        cleanupOffscreenBodies();
        purgeBrokenBodies();
      }
      if (state.rescueTimer >= 0.18) {
        state.rescueTimer = 0;
        rescueFloatingBodies();
      }
      if (state.visualTimer >= (1 / 24)) {
        updateFx(state.visualTimer);
        syncBodyVisuals();
        state.visualTimer = 0;
      }
      if (state.uiTimer >= 0.12) {
        updateUi();
        state.uiTimer = 0;
      }

      const fullLineCluster = stats.restedOverfillCount >= 2 && stats.overfillSpan >= (dom.board.clientWidth * 0.18);
      if ((state.overfillTime > 1.65 && fullLineCluster) || stats.restedOverfillCount >= 5) {
        state.gameOverReason = 'full';
        finishGame();
      } else if (state.tension <= 0) {
        state.gameOverReason = 'tension';
        finishGame();
      }
    }

    function finishGame() {
      if (!state.active || state.finishing) return;
      state.finishing = true;
      state.active = false;
      cancelAnimationFrame(rafId);
      rafId = 0;

      const resultDelay = 700;
      if (dom.gameoverFxVideo) { try { dom.gameoverFxVideo.currentTime = 0; dom.gameoverFxVideo.classList.add('show'); dom.gameoverFxVideo.play().catch(() => {}); } catch(_) {} }
      const isTimeUp = state.gameOverReason === 'time';
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
      sfx(isTimeUp ? 'big' : 'bad', 1.28);
      sfx('burst', isTimeUp ? 0.92 : 1.05);

      setTimeout(() => {
        dom.gameShell.classList.remove('shake');
        if (dom.gameoverFxVideo) { dom.gameoverFxVideo.classList.remove('show'); try { dom.gameoverFxVideo.pause(); } catch(_) {} }
        dom.gameScreen.classList.add('hidden');
        dom.resultScreen.classList.remove('hidden');
        requestAnimationFrame(alignTrendMainToGameCenter);
        const winLike = crownTargetScore(state.seed) > 0 && Math.floor(state.score) >= crownTargetScore(state.seed);
        stopResultBgm();
        resultStingerAudio = new Audio(winLike ? 'assets/audio/bgm_result_win.wav' : 'assets/audio/bgm_result_lose.wav');
        resultStingerAudio.volume = muted ? 0 : 0.62;
        resultStingerAudio.muted = muted;
        resultStingerAudio.play().catch(() => {});
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
            ? `今日の1位を獲得。自己ベスト更新。${state.peakCrownHold > 0 ? ` 王冠防衛 x${state.peakCrownHold}。` : ''}${state.waveLinkHits > 0 ? ` 波読み x${state.waveLinkHits}。` : ''}`
            : `今日の1位。王冠キープ成功。${state.peakCrownHold > 0 ? ` 王冠防衛 x${state.peakCrownHold}。` : ''}${state.waveLinkHits > 0 ? ` 波読み x${state.waveLinkHits}。` : ''}`;
        } else if (isNewBest) {
          dom.resultCopy.textContent = `自己ベスト更新。${gap > 0 ? `あと${fmt(gap)}で今日の1位。` : '今日の王冠に届いた。'}${state.waveLinkHits > 0 ? ` 波読み x${state.waveLinkHits}。` : ''}${myRank > 0 ? ` DAILY #${myRank}` : ''}`;
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
MAX COMBO ${fmt(state.peakCombo)} / 謝罪配信 ${fmt(state.buzzActivations)} / 大バズり ${fmt(state.clipActivations)} / 先読み ${fmt(state.rushHits)} / 波読み ${fmt(state.waveLinkHits)} / 奪取 ${fmt(state.crownTakeovers)} / 防衛 ${fmt(state.peakCrownHold)}
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
    dom.retryBtn.addEventListener('click', () => { if (typeof stopResultBgm === 'function') stopResultBgm(); startGame(); });
    if (new URLSearchParams(location.search).get('auto') === '1') {
      window.addEventListener('load', () => setTimeout(() => dom.startBtn?.click(), 80), { once:true });
    }

    dom.howtoBtn?.addEventListener('click', () => { dom.startScreen.classList.add('hidden'); dom.howtoScreen?.classList.remove('hidden'); requestAnimationFrame(alignTrendMainToGameCenter); });
    dom.howtoBackBtn?.addEventListener('click', () => { dom.howtoScreen?.classList.add('hidden'); dom.startScreen.classList.remove('hidden'); requestAnimationFrame(alignTrendMainToGameCenter); });
    dom.howtoStartBtn?.addEventListener('click', startGame);
    dom.pauseBtn?.addEventListener('click', () => togglePause());
    dom.resumeBtn?.addEventListener('click', () => togglePause(false));
    dom.retryPlayBtn?.addEventListener('click', startGame);
    dom.pauseRetryBtn?.addEventListener('click', startGame);
    dom.titleBtn?.addEventListener('click', goToTitle);
    dom.pauseTitleBtn?.addEventListener('click', goToTitle);
    dom.resultTitleBtn?.addEventListener('click', goToTitle);

    dom.dropSelectorButtons?.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.dropIndex || '0');
        setSelectedDropIndex(idx);
      });
    });

    dom.muteBtn.addEventListener('click', toggleMute);
    dom.resultMuteBtn.addEventListener('click', toggleMute);
    if (dom.shareBtn) dom.shareBtn.addEventListener('click', copyResult);
    dom.burstBtn.addEventListener('click', activateBurst);
    let holdDropX = 0;
    let holdDropDelayTimer = 0;
    let holdDropInterval = 0;
    function stopHoldDrop() {
      clearTimeout(holdDropDelayTimer);
      clearInterval(holdDropInterval);
      holdDropDelayTimer = 0;
      holdDropInterval = 0;
    }
    dom.board.addEventListener('pointermove', event => {
      const info = boardLogicalRect();
      hoverX = clamp((event.clientX - info.left) * info.scaleX, 34, info.width - 34);
      holdDropX = event.clientX;
      renderPreview();
    });
    dom.board.addEventListener('pointerdown', event => {
      event.preventDefault();
      holdDropX = event.clientX;
      try { dom.board.setPointerCapture(event.pointerId); } catch (_) {}
      dropAt(holdDropX);
      stopHoldDrop();
      holdDropDelayTimer = setTimeout(() => {
        holdDropInterval = setInterval(() => {
          if (state.active && !state.paused) dropAt(holdDropX);
        }, 200);
      }, 200);
    });
    dom.board.addEventListener('pointerup', stopHoldDrop);
    dom.board.addEventListener('pointercancel', stopHoldDrop);
    dom.board.addEventListener('pointerleave', stopHoldDrop);
    window.addEventListener('pointerup', stopHoldDrop);

    window.addEventListener('resize', applyAppHeight);
    window.visualViewport?.addEventListener('resize', applyAppHeight);
    window.visualViewport?.addEventListener('scroll', applyAppHeight);
    window.addEventListener('orientationchange', () => setTimeout(applyAppHeight, 120));
    document.addEventListener('visibilitychange', () => { if (document.hidden) { setHyperMix(0); stopResultBgm(); } });

    if (dom.handleInput) {
      dom.handleInput.value = save.playerName || '名無し配信者';
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
    preloadAllAvatars();
    updateMuteButtons();
    applyAppHeight();
    installServiceWorker();
    state.seed = todaySeed();
    updateSeedLabels();
    renderDailyBoard(dom.dailyBoard);
    renderDailyBoard(dom.resultDailyBoard);
    setSelectedDropIndex(0, { silent:true });
    ensureUpcomingTrendQueue(6);
    refreshTrendForecastUi();
    refreshQueue();
    renderPreview();
    dom.bestScore.textContent = fmt(save.bestScore || 0);
  })();
  
  