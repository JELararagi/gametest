import os
import requests
from openai import OpenAI

# ==========================================
# ⚙️ 設定
# ==========================================
# ここにあなたのOpenAI APIキーを入力してください
client = OpenAI(api_key="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")

# 保存先フォルダの確認・作成
IMG_DIR = "assets/img"
AUDIO_DIR = "assets/audio"
os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(AUDIO_DIR, exist_ok=True)

# 寺田てら・望月けい風のベースプロンプト
BASE_ART_STYLE = "Highly detailed, crisp vector-like lines, flat vibrant colors, pop-art anime style inspired by Tera Terada and Kei Mochizuki. White background."

# ==========================================
# 🎨 1. 画像生成 (DALL-E 3)
# ==========================================
IMAGE_PROMPTS = {
    "char_normal.png": f"A cute but slightly mentally unstable modern streamer girl. Colorful messy twin-tails, cyberpunk-goth oversized hoodie, plushie accessories. Exaggerated desperate 'notice me' smile. {BASE_ART_STYLE}",
    "char_yami.png": f"The same streamer girl, but yandere style. Lifeless empty eyes, heavy dark eye bags, looking down at the camera with a creepy obsessive smile. Dark glitch aura. {BASE_ART_STYLE}",
    "ai_rival.png": f"A perfect, emotionless AI Vtuber girl. Symmetrical features, glowing holographic halo, sleek futuristic white idol outfit. Polite but cold smile. {BASE_ART_STYLE}",
    "item_1.png": f"A cute 2D game icon of a chat bubble. Thick outlines. {BASE_ART_STYLE}",
    "item_2.png": f"A cute 2D game icon of a glowing pink heart. Thick outlines. {BASE_ART_STYLE}",
    "item_3.png": f"A cute 2D game icon of a bundle of digital cash (Superchat). Thick outlines. {BASE_ART_STYLE}",
    "item_4.png": f"A cute 2D game icon of a creepy-cute gothic plushie bear. Thick outlines. {BASE_ART_STYLE}",
    "item_7.png": f"A cute 2D game icon of a majestic dark-pink and gold crown. Thick outlines. {BASE_ART_STYLE}",
    "hazard.png": f"A 2D game icon of a cute but dangerous black bomb with a lit fuse. Thick outlines. {BASE_ART_STYLE}"
}

print("🎨 画像の生成を開始します (DALL-E 3)...")
for filename, prompt in IMAGE_PROMPTS.items():
    filepath = os.path.join(IMG_DIR, filename)
    if not os.path.exists(filepath) or os.path.getsize(filepath) == 0:
        print(f"Generating {filename}...")
        response = client.images.generate(
            model="dall-e-3",
            prompt=prompt,
            size="1024x1024",
            quality="standard",
            n=1,
        )
        image_url = response.data[0].url
        img_data = requests.get(image_url).content
        with open(filepath, 'wb') as handler:
            handler.write(img_data)
        print(f"✅ {filename} を保存しました。")
    else:
        print(f"⚡ {filename} は既に存在します。スキップします。")

# ==========================================
# 🎙️ 2. 音声生成 (OpenAI TTS)
# ==========================================
# nova(元気な女性声 = 主人公), shimmer(落ち着いた女性声 = AI)
VOICE_PROMPTS = {
    "voice_story_start.wav": {"voice": "nova", "text": "配信スタートっ！ねぇ、今日も一番かわいい私を見ててね？絶対負けないんだからっ！"},
    "voice_win.wav": {"voice": "nova", "text": "勝った…！見たかポンコツエーアイ！私が、世界で一番可愛いんだよぉぉぉ！"},
    "voice_lose.wav": {"voice": "shimmer", "text": "人間の承認欲求は、哀れですね。市場の独占を完了しました。"},
    "voice_ai_hack.wav": {"voice": "shimmer", "text": "不確定要素を検知。スパムプロトコルを実行します。排除します。"}
}

print("\n🎙️ 音声の生成を開始します (OpenAI TTS)...")
for filename, data in VOICE_PROMPTS.items():
    filepath = os.path.join(AUDIO_DIR, filename)
    if not os.path.exists(filepath) or os.path.getsize(filepath) == 0:
        print(f"Generating {filename}...")
        response = client.audio.speech.create(
            model="tts-1",
            voice=data["voice"],
            input=data["text"]
        )
        response.stream_to_file(filepath)
        print(f"✅ {filename} を保存しました。")
    else:
        print(f"⚡ {filename} は既に存在します。スキップします。")

print("\n🎉 すべてのアセット生成が完了しました！")
print("※画像の背景が白い場合は、remove.bg 等のツールで透過処理を行ってください。")