import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navigation } from "../components";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout title={"Главная"} keywords={"main page"}>
      <h1>Главная страница</h1>
    </Layout>
  );
}
