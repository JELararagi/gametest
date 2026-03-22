# 最適化内容 v15

見た目と演出を大きく変えず、特に **大量に重なって静止山が大きくなった場面** で残っていた
**dirty lane overlay の再構築コスト** をさらに削るため、`game.js` に
**Zero-Copy Dirty Lane Proxy Registry** を追加しました。

## 今回の新アルゴリズム
- **zero-copy dirty lane proxy registry**
  - heavy crowd 時の overlay 候補を、毎回 `proxy body 配列 -> spatial hash` に作り直す方式から、
    **settled cluster cache の `proxyClustersByCell` をそのまま参照する registry** 方式へ変更
  - 静止山の proxy body を毎回 materialize / hash 化しないので、
    **大量重なり時の配列生成・Map 生成・GC** をかなり減らせます
- **dirty-frontier walker**
  - cluster 展開時も、`frontierProxyBodies` 全体をなめるのではなく、
    **dirty lane に重なる frontier cell の proxy** を優先して探索
  - 関係ない列の表面 proxy を毎回問い合わせに行きにくくしました
- **dynamic hash reuse**
  - dynamic body 側は overlay 用に別配列を作らず、
    **既存の dynamic spatial hash をそのまま再利用**

## 効く場面
- アイテムが増えて、**下層が巨大な静止山** になっている場面
- clear 判定のたびに、**dirty lane 周辺だけ見ればよいのに overlay を作り直していた** 場面
- proxy body の再配列化や `buildSpatialHash()` が積み重なって、
  **フレーム時間が跳ねやすかった** 場面

## 主な実装変更
- `visitNearbyFromHash()`
  - `_proxyRegistry` を理解する分岐を追加
- `visitNearbyFromProxyRegistry()` を追加
  - dirty lane cell から **cluster proxy を直接列挙**
  - dynamic body は **dynamic hash** から再利用
- `buildSettledProxyOverlayRegistryFromDirtyLanes()` を追加
  - dirty lane overlay を **zero-copy registry** として構築
- `visitClusterProxyFrontiers()` を追加
  - cluster 展開時に **dirty lane に重なる frontier** を優先
- `buildHybridTouchGroups()` を変更
  - overlay 探索時にまず **registry 方式** を使い、必要時だけ従来 overlay hash にフォールバック
- `BUILD_ID` を `v162_zero_copy_dirty_lane_registry_v15` に更新

## 狙い
- 大量密集時に、**overlay 候補を毎回作り直す処理そのもの** を削る
- 見た目・演出はほぼ維持しつつ、
  **動いている lane 周辺だけに探索と判定を集中** させる
- 静止山の内部や遠方 proxy を、dirty lane に無関係な限りなるべく巻き込まない

## 変更ファイル
- `game.js`
- `index.html`
- `OPTIMIZATION_NOTES.md`


## v16 - Incremental Frozen Roofline + Dirty-Key Settled Cache
- `BUILD_ID` を `v163_incremental_frozen_roofline_v16` に更新
- frozen surface cache を **全体再構築型** から **セル単位の増分更新型** に変更
- freeze / thaw / remove で、影響セルだけ `topY` を更新するように変更
- settled cluster cache を **global revision 全消し** から **dirty key + surface cell index** で局所 invalidation
- 近い x 列に影響がない種類・クラスタは、前回の settled cache をそのまま再利用
- これにより、大量重なり時に残っていた **静止山の再集計・再フロンティア化** を大きく削減
