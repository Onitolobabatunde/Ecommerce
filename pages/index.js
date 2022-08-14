import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Resturant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
