---
title: "RDB"
excerpt: "読んだメモ"
date: "2022-11-20T05:35:07.322Z"
---

# memo

- json 型は推奨されない

  - web api のレスポンスをそのまま保存するなど json として丸っと扱うケース。あまり update しない
  - システムが小さい。作成し始めで変更が入る予定がある場合に柔軟性を持たせる
  - EAV と同じデメリットを持つ.SQL が煩雑になる。INDEX が効かない。

- ジェイウォーク（信号無視）：配列を text 型に突っ込む
- MySQL では外部キー制約を設定している場合、外部キー制約の子テーブルを更新した際、親テーブルの共有ロックを自動的に取る。MySQL、正規化、外部キー制約注意
- 外部キー(FOREIGN KEY)制約を利用している場合、
  子テーブルに追加、更新や削除を行う時は、必ず親テーブルの対象の id に対して排他ロックを行ってから、更新や削除、追加を行う。
- enum,update_at
- ビジネスルールをカラム制約にするのはやりすぎなのでは？
- posgre 遅延制約.commit 時に外部きー制約が評価される。transaction 中は無視
- postgres は Select でも AccessShareLock をとる
- ネクストキーロック、ギャップロック mysql
- join が多段になりパフォーマンスが知恵化した際。安易に非正規化ではなく、マテリアライズどビューを選択肢とする
- 多段マテリアライズドビューはやめましょう
- クエリの問題を分解する
- コンフィグ
  - チューニングツールがある
  -

## SQL

- when は評価が整合したら以降は評価しないので排他的に書く

- check with when

```sql
update table set salary case
  when salary>300000 then salary*0.9
  when salary>=250000 and salary<280000 then salary*1.2
else salary
end;
```

```sql
select case sex when 1 then 男 when 2 女 else null end as 性別 ,sum(population),case sum(pref_name when '香川' then populatiom else 0 end),sum(case pref_name when in ('香川','徳島','高知','愛媛') then '四国') from PopTbl2  group by 性別
```

### window function

- range row」」」
- preceding following
- 普通の group by 集計と partition by 集計はもちろん結果が違う
- 組み合わせ表現のための自己結合。非等値結合
- 過ち排除の自己結合
- rank 関数
- 重複行の削除
- not in の中に null があると答えがなくなる。not exist にする
- ALL でも null は悪さをする
- 極地関数の対象が空なら null が帰ってくるので注意。coalesce して回避
- null orderby
  - my sql min nulls first/last, is null asc
  - postgresql max
- null str
  - posgre null, concat or coalesce nisuru
  - mysql null, coalece
- non exist 二重否定
  all などよりパフォーマンスが良くなるかも
- 集合的に考えて SQL を組み立てる
- having の集合の比較

```sql
select class from TestResult group by class  having count(*)*0.75=<(sum(case when score >=80 then 1 else 0 end));

select team_id, member from Teams as TO where  not exists(select * from Teams as TI where TO.team_id=TI.team_id and TI.status<>'待機')

select team_id group by team_id having count(*)=sum(case when status='待機' then 1 else 0 end);
=
select team_id, case when max(status)='待機' and min(status)='待機' then 'ok' else 'not stand by' end as status group by team_id;

バスケット解析
select shop from ShopItem SI join Items I on SI.item=I.item
group by SI.shop having count(SI.item)=(select count(item) from items)


select case when count(*)<>max(seq) then 'hanukeari' else 'hanuke nasi' end

select dpt group by dpt having sum(case when sbmt<'2018-09-30' then 1 else 0 end)

select shop, count(SI.item) as my_item,count(select item from Items)-my_item from ShopItems as SI join Items as I on SI.item=I.item group by shop
```

- 前年からの変化を調べる。window function
- window function は mysql では 8~
- 相関サブクエリはウィンドウ関数に書き換えられるとパフォーマンス上がるかも
- pagination もウィンドウ関数で？

-　 master を（view で）作って外部結合し、行列

```sql
select age_range,sex, tblpopchanged.tohoku,tblpopchanged.kanto from (select _ from TblPop sum(case when pref_name in ('秋田','青森') then population else null end) as tohoku,sum(case when pref_name in ('東京','千葉') then population else null end) as kanto ) as tblpopchanged
outer join (select _ from TblAge cross join TblSex) as SexAndAge on SexAndAge.age_class=tblpopchanged.age_class
```


- 開発コードや仮コード、製品コードなどコードの履歴を持ちたいときは適応期間をスキーマにもったヒストリーテーブルを作る
- コードの読みかえ。ものは同じだが社外のコードと車内のコード→交差テーブル