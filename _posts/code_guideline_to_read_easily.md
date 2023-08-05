---
title: "読みやすいコードのガイドライン"
excerpt: "usecase driven"
date: "2023-02-19T12:00:00.000Z"
---

## メモ
- 状態の遷移を意識する
    - 冪等
    - 非巡回
- 複数の変数間の直行性
    - 直和型で不整合を防ぐ
- 定義指向プログラミング
- ライフサイクルごとにプロパティをまとめる
- 関数の分け方、操作対象で分ける
    - アカウントごとに複数の処理を分ける
    - アカウントで分岐して処理をまとめるのではなく、処理（操作対象）で分岐してからアカウント分岐する