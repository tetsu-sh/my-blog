---
title: "Rustに触ってみた"
excerpt: "Rustの勉強したこと"
coverImage: ""
date: "2022-10-16T05:35:07.322Z"
---

- Rust の勉強を少ししてみた。udemy みたり、入門 Rust プログラミングを読んだりちょろちょろ３、４ヶ月ほど
- 『問題解決のための「アルゴリズム × 数学」が基礎からしっかり身につく本』のアルゴリズム問題を rust でやってみたりした[github/tetsu-sh/algorithm](https://github.com/tetsu-sh/algorithm)
- actix-web でちょっとしたウェブアプリを DDD 的に作ってみたりした。[github/testsu-sh/muscle](https://github.com/tetsu-sh/muscle)
- 非常に勉強になる。
- 引き続き勉強投資してく。wasm や組み込みもやっていきたい。
- GraphQL も試しつつローカルアプリ作成中[github/testsu-sh/oisource](https://github.com/tetsu-sh/oisource)

## 自転車

- 斜め読み
- #[repr(C)]内部表現
  　- 内部表現を機に s なくて良いが、上記アトリビュートをつけると C 言語準拠隣、FFI で安全に他言語に構造体を渡せる。

- 型変換
  - 型キャスト as
    - スカラ型同士を変換。桁あふれに注意
  - 複合型の型変換
    - std::convert::From があればできる。
  - transmute
    - 型情報のみ変換する。

## zero rust

- loop の break に値を渡すと loop の結果として渡すことができる
- closure はキャプチャ変数を持った環境と、その環境へのポインタと関数へのポインタを持つ。move をすると環境に元の変数から所有権が移る
- channel

## TRPL

- 5
