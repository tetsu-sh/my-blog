---
title: 'phisolopy of software designを読んで'
excerpt: '読んだメモ'
date: '2022-11-20T05:35:07.322Z'
---

## ほんとにメモを章ごとに

- deepなモジュールを心がけろや、コメントあたりはためになった。
- 英語は比較的平易

9 分けるべきかわけ無いべきかべきか

分けると複雑性を生む場合がある

クラス、インターフェースの数が多いと複雑性がます

同時に見れなくなる。最悪認識できない

コードの重複を生む

関連があるかどうか

情報を共有している

相互的に同時に使われる

一方通行なら分けるべき

概念が似ている

文字列検索と大文字小文字変換

まとめてみたいと理解できない一連のコード

9.1 まとめて情報を共有する。

9.2 インターフェースがシンプルになるなら、まとめる。まとめなかった時の知識がなくても使えるようになる

9.3 重複をまとめる

メソッドの呼び出しを巣にペットにする

9.4 汎用的なものと特化的なものを分ける

9.8 methodがdeepならより

　　親子関係だが相互を読む必要がない分割が良い

10

Erroの発生場所を抑えろ

問題ないならエラーをレイズしない

エラーに気づかないようにする。リトライ

Errorを汎用的にトップレベルにまとめる

クラッシュとは

特殊系のハンドリング

文字のセレクト機能

no selectという状態を持つのではなく、selectのstartとendが同じとすれば、特殊系を考慮しなくて良い設計となる。

何を知るべきか、隠すべきか考える

11　複数の選択肢を検討し、デザインしろ。interface,impl共に

12  comment

良いコードはドキュメントになるは嘘

抽象、deepなモジュールにはコメントは効果的な役割がある。ユーザーが使うとき、実装のときである。

cognitive load,unknown unknownを減らす

13 何を書くべきか

low:正確さをたすか（単位、境界値,nullの扱い、invariants(変数の条件)）、high:直感を促すコメント。コードとレベルを変えて、重複を避ける

コードで明らかでないことを書け.直感的にわかるように

変数は使い方ではなく、それが何かをドキュメンテーションしろ。

副作用や前提条件はコメントしろ。

interfaceなどのハイレベルでは実装に関して触れるな

読み手を想像しろ、読み手が混乱したらそれが真実、反論するな。

14 命名

理屈に通っているでは不十分。

block：fileblock,diskblockを混同してバグになった

コードを、ドキュメントを読まなくても名前だけで概念をイメージできるか

名前も抽象、具体は省く。

良い名前は正確かつ普遍。大体曖昧になっちゃう

命名が辛かったら、リファクタリングフラグだよっと

様々な箇所で使われても一定の意味を示すことが重要。コグにティブロード減らす

make sure that the purpose is narrow enough that all variables with the name have the same behavior.

15 先のコメント、ドキュメントをかけ

あとからだと設計思想を忘れる。

楽しくないから雑になる

余計な実装に引きづられず、大事なことがかける。開発中にコメントも改良していける

システムデザイン自体が良くなる。よくない設計に気付ける

16 改良

改良していくときも戦略的にやる必要がある。変更を最小にしがちだが、それは戦術的である。

modifieするときも常に良いデザインがないかリファクタリングの余地がないか考えながら、それのコストを払いながら行う

コメントもメンテしろ。コードの近くにコメントしろ。コミットログに書くな。

重複する場合はマスターコメントにしたり、リンクにしたりしろ

ハイレベルなコメントは些細な実装の変更の影響を受けるはずなくね？

17 一貫性

一貫性があると推測が立つし理解の手間が減るので、コグにティブロードやエンバグが減る

18 読みやすい

イベント駆動は呼ばれるところをインターフェースのコメントとかで書くと良い

ソフトウェアは描きやすい書き方より、読みやすい書き方であるべき。ジェネリックコンテなーは読みにくい

19 trend技術に関して

アジャイルは戦術的プログラミングになりやすい。設計より機能開発に走りやすく複雑さが築先する。抽象をインクリメントしろ

TDDもインクリメンタルで戦術的プログラミングになりやすい。抽象をデザインしろ

デザインパターンには肯定的

20 performanc

基本はファンダメンタルな部分がパフォーマンスに効く。キャッシュ、アルゴリズム、デーア構造、ネットワークなど

コードに手を入れなければならないのなら、理想を考えろ。既存のものは考えず、ミニマムでクリティカルなものだけ考え、データ構造やメソッドをまとめることをリデザインする