# ASSET_MASTER_v56

トレバズ！用の素材洗い出しと、生成AIへ渡すためのプロンプト集です。現状使用中の素材、コード上で参照済みだが未投入の素材、今後あると完成度が上がる素材をまとめています。

## 共通アート方針
- 若いYouTuber / Vtuberに刺さる、ポップで配信映えする近未来ネオン
- 縦画面スマホで小さく見えても判別できる、強いシルエット
- 背景とアイテムが混ざらない、太めの縁取りとコントラスト
- かわいさ 60 / 未来感 25 / 配信UI感 15
- 基本は PNG 透過、sRGB、正方形素材は 1024x1024 推奨
- UIに入る素材は、細部より“ひと目で何かわかる形”優先

## 画像素材

### 1. 主人公立ち絵 / 表情差分
- 使用目的: 画面下の主人公ウィンドウ、台詞表示、状況変化の視認性アップ
- 現在の主な参照: char_normal.png / char_focus.png / char_hype.png / char_warning.png / char_panic.png / char_yami.png
- 推奨形式: PNG 透過
- 推奨サイズ: 1024x1024
- テイスト: 若い女性配信者、配信部屋の照明を受けたネオン感、上半身アップ、スマホ縦画面でも顔が映える構図

1) char_normal.png
プロンプト: 日本の若い女性配信者, bust-up portrait, bright streamer room glow, soft cyber neon pink and cyan accents, friendly confident smile, slightly excited eyes, clean anime game UI illustration, strong silhouette, transparent background, high readability on mobile, no text, no watermark

2) char_focus.png
プロンプト: same character design as char_normal, focused expression, eyes slightly sharp, mouth closed with confident look, streamer concentrating during live show, anime game UI portrait, transparent background, high readability, no text

3) char_hype.png
プロンプト: same character design, excited cheering expression, open smile, sparkling eyes, victory hype mood, strong energy, anime mobile game portrait, transparent background, no text

4) char_warning.png
プロンプト: same character design, noticing danger, surprised but composed, slight sweat drop, alert expression, streamer reacting to incoming trouble, transparent background, anime game portrait, no text

5) char_panic.png
プロンプト: same character design, panic expression, wide eyes, flustered, but still cute and readable, live streamer in trouble, transparent background, anime game portrait, no text

6) char_yami.png
プロンプト: same character design, low tension exhausted mood, dark under-eye shading, muted smile, emotionally drained but still on stream, subtle cyber gloom, transparent background, anime game portrait, no text

7) char_apology.png
プロンプト: same character design, apologetic expression, slight bow, awkward smile, hands together as if doing a live apology stream, transparent background, anime game portrait, no text

8) char_win.png
プロンプト: same character design, proud winner expression, small crown motif lighting, celebratory smile, transparent background, anime game portrait, no text

### 2. アイテム 7種
- 使用目的: 落下アイテム本体
- 形式: PNG 透過
- サイズ: 1024x1024
- 共通条件: 円形アイテム内に収まる、余白少なめ、太いアウトライン、ひと目で判別可能

1) item_1.png / 雑談
- 目的: 最小サイズ、最も出やすい
- 内容: 吹き出し、配信コメント、雑談感
- プロンプト: cute streaming topic icon, casual chat theme, speech bubble and tiny sparkle motifs, white and pastel gray main colors, bold outline, centered composition, transparent background, highly readable as a circular game piece

2) item_2.png / ゲーム配信
- 内容: ゲームパッド、プレイ感
- プロンプト: cute gaming stream icon, gamepad motif, cyan glow, playful and energetic, bold outline, centered, transparent background, readable at small size

3) item_3.png / 歌枠
- 内容: マイク、音符、ステージ感
- プロンプト: cute singing stream icon, microphone and music note motif, yellow gold accent, pop idol live feeling, bold outline, centered, transparent background

4) item_4.png / ASMR
- 内容: イヤホン、耳、囁き感
- プロンプト: cute ASMR stream icon, headphone and soft sparkle motif, cool cyan and mint palette, gentle soothing atmosphere, bold outline, centered, transparent background

5) item_5.png / 恋バナ
- 内容: ハート、トーク、甘さ
- プロンプト: cute romance talk stream icon, heart motif, pink glow, chatty and sweet vibe, bold outline, centered, transparent background

6) item_6.png / 暴露
- 内容: 秘密、暴露、危うさ
- プロンプト: cute but risky expose stream icon, jewel and cracked speech bubble motif, orange accent, slightly dangerous vibe, bold outline, centered, transparent background

7) item_7.png / 限界チャレンジ
- 内容: チャレンジ、耐久、限界突破
- プロンプト: cute extreme challenge stream icon, sword and warning spark motif, green neon accent, intense high-risk mood, bold outline, centered, transparent background

### 3. 炎上アイテム
- ファイル名: hazard.png
- 使用目的: 爆弾 / 炎上ブロック
- 形式: PNG 透過
- サイズ: 1024x1024
- プロンプト: live streaming scandal bomb icon, stylized warning bomb with red neon cracks and emergency light feeling, not realistic, cute game icon, transparent background, bold outline, readable on mobile

### 4. 背景 / OGP / アイコン
1) bg_cyber_loop_frame.png
- 目的: 背景動画のキーフレーム参考
- サイズ: 1179x2556
- プロンプト: vertical mobile streaming background, cyber neon room with floating comments and subtle UI frames, dark purple base, pink and cyan rim lights, no characters, no text, clean center area for gameplay

2) ogp_image.png
- 目的: SNS共有画像
- サイズ: 1200x630
- プロンプト: mobile puzzle streaming game key art, anime streamer girl, seven topic icons, exploding trendy neon live stream feeling, catchy Japanese game promo style, no watermark

3) icon-192.png / icon-512.png
- 目的: PWAアイコン
- サイズ: 192x192 / 512x512
- プロンプト: app icon for a trendy vertical mobile streaming puzzle game, simple bold anime neon style, speech bubble plus crown plus play button motif, dark background, highly readable at tiny size

## 音楽素材

### 1. bgm_lofi.wav
- 使用目的: 通常プレイBGM
- 形式: WAV 48kHz 24bit stereo
- 尺: 80〜120秒 ループ対応
- 内容: 夜の配信部屋, lo-fi pop, かわいいが眠すぎない, 少しだけ未来感
- プロンプト: cute Japanese streamer room lo-fi pop instrumental, night city neon mood, soft beat, light synth accents, not sleepy, suitable for vertical mobile puzzle gameplay, loopable, no vocals

### 2. bgm_hyper.wav
- 使用目的: 大バズり中BGM
- 形式: WAV 48kHz 24bit stereo
- 尺: 60〜90秒 ループ対応
- 内容: テンポアップ、配信の山場、派手すぎるがうるさくなりすぎない
- プロンプト: high-energy streamer hype instrumental, neon pop electro, exciting but clean, ideal for fever mode in a mobile puzzle game, loopable, no vocals

### 3. bgm_result_win.wav
- 使用目的: 良リザルト
- 形式: WAV
- 尺: 10〜16秒
- プロンプト: short victory stinger for trendy streamer puzzle game, bright uplifting synth pop, cute triumphant ending, no vocals

### 4. bgm_result_lose.wav
- 使用目的: ゲームオーバー / 失速
- 形式: WAV
- 尺: 8〜14秒
- プロンプト: short game over stinger for streamer puzzle game, disappointed but cute, glitchy soft synth fall, no vocals

## SE素材
- 共通形式: WAV 48kHz 24bit mono or stereo
- 共通尺: 0.08〜0.8秒

1) se_drop_soft_01.wav
- 使用目的: 通常投下
- プロンプト: soft cute puzzle piece drop sound, light pop impact, mobile game friendly

2) se_clear_small_01.wav
- 使用目的: 小消し
- プロンプト: crisp cute puzzle clear sound, tiny sparkling pop, satisfying but short

3) se_clear_big_01.wav
- 使用目的: 大きい消し
- プロンプト: bigger satisfying puzzle clear sound, glossy spark burst, streamer game highlight feeling

4) se_chain_02.wav
- 使用目的: 2連鎖
- プロンプト: chain combo sound tier 2, bright ascending synth pop, short and punchy

5) se_chain_03.wav
- 使用目的: 3連鎖
- プロンプト: chain combo sound tier 3, more intense ascending sparkle sweep

6) se_chain_04.wav
- 使用目的: 4連鎖以上
- プロンプト: big combo chain sound, dramatic rising glitter burst, cute arcade streamer energy

7) se_trend_warning.wav
- 使用目的: 次トレンド予告
- プロンプト: upcoming trend warning sound, clean neon UI alert, exciting not harsh

8) se_trend_shift.wav
- 使用目的: トレンド切替
- プロンプト: trend shift stinger, stylish whoosh and digital pop, future live stream UI feel

9) se_apology_ready.wav
- 使用目的: 謝罪配信ゲージ満タン
- プロンプト: ready sound for special action, gold UI shine, short and memorable

10) se_apology_fire.wav
- 使用目的: 謝罪配信発動
- プロンプト: flashy all-clear blast for scandal removal, bright burst, slightly comedic but cool

11) se_hazard_spawn.wav
- 使用目的: 炎上爆弾出現
- プロンプト: warning bomb spawn sound, red alert blip with danger pulse, gamey not realistic

12) se_gameover_blast.wav
- 使用目的: 満杯ゲームオーバー
- プロンプト: dramatic but readable game over impact for mobile puzzle, glitch burst plus low hit

13) se_timer_hurry.wav
- 使用目的: ラストスパート開始
- プロンプト: short countdown urgency stinger, energetic broadcast alert

### 既存素材
- se_merge.wav: 現在の消去補助SEとして使用中。今後は se_clear_small_01 / se_clear_big_01 / se_chain_* に分割置換推奨。

## 主人公ボイス素材
- 形式: WAV 48kHz 24bit mono
- 収録指針: 少し高めで聞き取りやすい若い女性配信者声, 早口すぎない, 感情ははっきり, 語尾を伸ばしすぎない
- 収録文言: VOICE_LINES_MASTER_v56.md を参照

### 収録推奨ファイル群
- voice_mc_start_01.wav 〜 04.wav
- voice_mc_warning_01.wav 〜 04.wav
- voice_mc_clear_01.wav 〜 05.wav
- voice_mc_chain_02.wav 〜 06.wav
- voice_mc_hype_01.wav 〜 05.wav
- voice_mc_fire_01.wav 〜 04.wav
- voice_mc_apology_ready_01.wav 〜 03.wav
- voice_mc_apology_fire_01.wav 〜 04.wav
- voice_mc_rush_01.wav 〜 04.wav
- voice_mc_jack_01.wav 〜 04.wav
- voice_mc_big_01.wav 〜 05.wav
- voice_mc_top_01.wav 〜 04.wav
- voice_mc_win_01.wav 〜 04.wav
- voice_mc_lose_01.wav 〜 04.wav

### ボイス生成AI用の共通プロンプト
Japanese young female streamer voice, bright and expressive, clean diction, slightly energetic, emotionally reactive, suitable for live streaming game voice lines, natural conversational delivery, no background music, no sound effects, mono dry recording, close mic, game voice asset quality

## 動画素材

### 1. bg_cyber.mp4
- 使用目的: 通常背景ループ
- 形式: MP4 H.264
- 解像度: 1179x2556
- 尺: 8〜12秒 seamless loop
- 内容: 配信部屋風のネオン背景, コメントやUIの残像がゆっくり流れる
- プロンプト: vertical seamless looping cyber streamer room background, dark purple neon pink cyan, soft moving chat silhouettes and subtle live UI reflections, clean center area for gameplay, no character, no text

### 2. bg_bigbuzz_loop.mp4
- 使用目的: 大バズり中の背景差し替え
- 形式: MP4 H.264
- 解像度: 1179x2556
- 尺: 6〜10秒 seamless loop
- プロンプト: vertical seamless hype background for streamer fever mode, brighter neon, glitter particles, fast but readable movement, clean gameplay center, no text

### 3. overlay_gameover_glitch.mp4
- 使用目的: ゲームオーバー演出オーバーレイ
- 形式: MP4 H.264 with alpha if possible / 代替 WebM alpha
- 解像度: 1179x2556
- 尺: 2〜4秒
- プロンプト: vertical glitch overlay for game over, streamer UI collapse, pink red distortion, energetic but readable, no text

## いま不足している優先素材
1. char_focus.png
2. char_hype.png
3. char_warning.png
4. char_panic.png
5. voice_mc_* 主人公ボイス一式
6. se_apology_fire.wav
7. se_trend_shift.wav
8. bg_bigbuzz_loop.mp4

## ファイル整理の推奨
- 画像: assets/img/
- 音楽: assets/audio/bgm_*.wav
- SE: assets/audio/se_*.wav
- 主人公ボイス: assets/audio/voice_mc_*.wav
- 背景動画: assets/bg/*.mp4
