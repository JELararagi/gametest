# 最適化内容 v19

見た目と演出をできるだけ維持したまま、特に **大量に重なって巨大な静止山ができた場面** の
**clear 判定探索 / seed 選定 / overlay 候補数** をさらに削るため、`game.js` / `index.html` に
**Opaque Settled Core Scan Pruning** を追加しました。

## 今回の新アルゴリズム
- **opaque settled core scan pruning**
  - v18 で骨格化してもなお物理 world に残っていた **深部の静止 body** を、
    group scan 上は **opaque core** として扱い、探索候補から外すように変更
  - clear 判定は **surface shell / dynamic body / urgent body** を優先し、
    cluster 全体は既存の settled cache メタデータで補います
- **hybrid exact fallback**
  - opaque prune 後も、必要なら従来の full body 側で touch graph / exact へ戻るため、
    見た目差や取りこぼしを抑えています
- **seed suppression for buried cores**
  - buried で静かな settled body を frontier seed から外し、
    密集終盤での proxy 探索起点数をさらに削減

## 効く場面
- アイテムが増えて、**下層に巨大な静止山** ができた終盤
- 物理骨格は減っているのに、clear 判定ではまだ **深い静止 body** が source に残っていた場面
- trend / special 判定のたびに、**cluster 内部まで seed 候補や近傍候補に入っていた** 場面

## 主な実装変更
- `shouldUseOpaqueSettledScanPruning()` / `isOpaqueSettledCoreBody()` / `pruneOpaqueSettledBodiesForScan()` を追加
  - hybrid group scan 前に、**opaque core body を source から pruning**
- `collectHybridFrontierSeeds()` を変更
  - buried で静かな settled core を **seed 候補から除外**
- `buildHybridTouchGroups()` を変更
  - prebuilt settled cache を受け取れるようにして、prune 後の再探索で **cache 再構築を抑制**
- `buildTouchGroupsForIndex()` / `buildTouchGroupsForType()` を変更
  - **pruned source 優先 + full source fallback** に変更
- `BUILD_ID` を `v166_opaque_settled_scan_prune_v19` に更新

## 狙い
- v18 の「物理 body 数削減」に加えて、**群判定の探索対象数そのもの** をさらに減らす
- clear / preview / overlay が、**静止山の内部ではなく表面中心** に動くようにする
- 見た目差を抑えつつ、大量重なり時の残コストをもう一段削る

## 変更ファイル
- `game.js`
- `index.html`
- `sw.js`
- `OPTIMIZATION_NOTES.md`
