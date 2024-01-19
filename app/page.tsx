import Navbar from "../components/navbar/Navbar";
import Shophero from "../components/shophero/Shophero";
import Products from "../app/products/page";
import Footer from "@/components/footer/Footer";

import styles from "./page.module.css";

const Home = async () => {
  return (
    <main className={styles.main}>
      <Products />
    </main>
  );
};

export default Home;
