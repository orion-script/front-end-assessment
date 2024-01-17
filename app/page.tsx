import Navbar from "../components/navbar/Navbar";
import Shophero from "../components/shophero/Shophero";
import Products from "@/components/products/Products";
import Footer from "@/components/footer/Footer";
// import CartDropDown from "@/components/cartDropDown/CartDropDown";
import styles from "./page.module.css";

const Home = async () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Shophero />
      <Products />
      <Footer />
    </main>
  );
};

export default Home;
