import styles from "@styles/components/Layout.module.css";

import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}