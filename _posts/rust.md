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
- Arc,Mutex,RWRock
- dyn は関数テーブルへのポインタを示す
- スーパートレイと：トレイとを構成するトレイト。スーパートレイトを実装すればトレイトを満たす。
- Fn は関数型を表すトレイト、クロージャや関数は自動的にこれを実装する。

## TRPL

- 5

## irorio

### asociated type

- https://doc.rust-lang.org/beta/rust-by-example/generics/assoc_items/types.html
- trait に紐づけられた型
- trait 境界の記述がシンプルになる.Generic type との使い分け

```rust
struct Container(i32, i32);

// A trait which checks if 2 items are stored inside of container.
// Also retrieves first or last value.
trait Contains {
// Define generic types here which methods will be able to utilize.
type A;
type B;

    fn contains(&self, _: &Self::A, _: &Self::B) -> bool;
    fn first(&self) -> i32;
    fn last(&self) -> i32;

}

impl Contains for Container {
// Specify what types `A` and `B` are. If the `input` type
// is `Container(i32, i32)`, the `output` types are determined
// as `i32` and `i32`.
type A = i32;
type B = i32;

    // `&Self::A` and `&Self::B` are also valid here.
    fn contains(&self, number_1: &i32, number_2: &i32) -> bool {
        (&self.0 == number_1) && (&self.1 == number_2)
    }
    // Grab the first number.
    fn first(&self) -> i32 { self.0 }

    // Grab the last number.
    fn last(&self) -> i32 { self.1 }

}

fn difference<C: Contains>(container: &C) -> i32 {
container.last() - container.first()
}

fn main() {
let number_1 = 3;
let number_2 = 10;

    let container = Container(number_1, number_2);

    println!("Does container contain {} and {}: {}",
        &number_1, &number_2,
        container.contains(&number_1, &number_2));
    println!("First number: {}", container.first());
    println!("Last number: {}", container.last());

    println!("The difference is: {}", difference(&container));

}

```

### Future Output
