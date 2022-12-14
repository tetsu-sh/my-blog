import Container from "../../components/container";
import Head from "next/head";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Intro from "../../components/intro";

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Chimuchimu</title>
        </Head>
        <div className="flex min-h-screen flex-col">
          <Header />
          <Container>
            <Intro />

            <div className="flex flex-col text-center">
              <div className="mb-4 md:text-4xl">about me</div>
              <div className="mb-4">
                <h1 className="md:text-2xl mb-2">趣味</h1>
                <p>猫を愛でる</p>
                <p>保護猫を何匹か</p>
                <p>料理</p>
                <p>
                  カレーをスパイスから作ったり,豚骨らーめんを骨から出汁取ったり
                </p>
                <p>コーヒーを豆からひいたり</p>
                <p>筋トレ</p>
                <p>漫画</p>
                <p>ゲーム</p>
                <p>
                  野球をしてたり陸上をしてたり、バスケをしてたり、してなかったり
                </p>
                <p>スマブラやオープンワールドやRPGなど</p>
                <p>生息地：埼玉→仙台→埼玉→東京→千葉</p>
              </div>
              <div>
                <h1 className="md:text-2xl mb-2">技術</h1>
                <p>python,FastApiを使いつつ</p>
                <p>Vue.js(Typescript)</p>
                <p>AWS(ECS,S3,DynamoDB,Lambda,SQS etc..)</p>
                <p>趣味でRustで遊んだり、勉強中</p>
                <p>医療系や機械学習系のプロダクトを作ったり</p>
                <p>危険物取扱者甲種</p>
                <p>東北大学工学部化学バイオで化学を学んだり</p>
                <p>東北大学大学院では水処理の研究をしたり</p>
                <p>企業で触媒と油の研究をしたり</p>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default About;
