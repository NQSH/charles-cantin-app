import styles from "@styles/components/Layout.module.css";

import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

import { AnimatePresence } from "framer-motion";
import { useNavigation } from "context/navigation";

export default function Layout({ children }) {
  const { currentMenu } = useNavigation();
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`Charles Cantin - ${currentMenu.label}`}</title>
      </Head>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <main className={styles.main}>
          {children}
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}