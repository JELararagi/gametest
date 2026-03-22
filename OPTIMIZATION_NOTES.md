# 最適化内容 v18

見た目と演出をできるだけ維持したまま、特に **大量に重なって表面 shell まで増えた場面** で残っていた
**Matter.js に残る frozen body 数** をさらに削るため、`game.js` / `index.html` に
**Sparse Surface Support Mesh + Local Surface Rehydration** を追加しました。

## 今回の新アルゴリズム
- **sparse surface support mesh**
  - frozen surface cache の **各 x レーンごとに上面代表 body だけ** を物理 world に残し、
    それ以外の quiet frozen body を追加で park する方式です
  - 深部だけでなく、**大量密集で増えた表面 shell も lane 単位で間引く** ので、
    broadphase / collision candidate / support check / rescue の対象数をさらに削減できます
- **local surface rehydration**
  - active body や clear の近傍では、**そのレーン周辺の parked body だけ局所復帰** します
  - 山全体を戻さず、**いま触っている表面だけ** を物理 world に戻します
- **keep-lane preservation**
  - 物理に残す body は proxy ではなく **実 body の代表点** を使うので、
    見た目差と当たり判定のズレを抑えやすい構成です

## 効く場面
- アイテムが増えて、**下層だけでなく表面 shell も厚くなった終盤**
- 深部 parking 後でも、**まだ表面 frozen body 数が多く残っていた** 場面
- 上の一部だけが動いているのに、**静止表面全体が Matter world に残っていた** 場面

## 主な実装変更
- `refreshSurfaceSupportMesh()` を追加
  - frozen surface cache の **各セル上面代表 body** を keep し、keep body は自動で unpark
- `canParkSurfaceSupportVirtualBody()` を追加
  - quiet な frozen surface body を **keep から外れたものだけ追加で park**
- `parkDeepFrozenBodies()` を拡張
  - deep parking に加えて **surface support mesh parking** を統合
- `thawFrozenBodiesNearActive()` を変更
  - active body の近傍で **parked surface body を局所復帰**
- `BUILD_ID` を `v165_sparse_surface_support_mesh_v18` に更新

## 狙い
- 大量密集時に、**Matter.js が持つ表面 body 数そのもの** をさらに減らす
- 見た目・演出はほぼ維持したまま、**静止山の物理表面をレーン単位で疎化** する
- 接触や clear が起きた時だけ、必要な近傍レーンを戻して見た目差を抑える

## 変更ファイル
- `game.js`
- `index.html`
- `sw.js`
- `OPTIMIZATION_NOTES.md`
