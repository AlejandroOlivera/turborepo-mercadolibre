import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Web() {
  return (
    <>
      <Head>
        <title>Web</title>
      </Head>
      <Layout>
        <a>Home</a>
      </Layout>
    </>
  );
}
