import Head from "next/head";
import MyComponent from "./table";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Container from "../../components/container";
import Intro from "../../components/intro";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Oi Source</title>
        </Head>
        <div className="flex min-h-screen flex-col">
          <Header />
          <Container>
            <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                Oisource
              </h1>
              <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                どっかで見た情報
              </h4>
            </section>
            <MyComponent></MyComponent>
          </Container>
        </div>
      </Layout>
    </>
  );
}
