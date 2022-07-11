import "@styles/globals.css";
import Layout from "@components/Layout";
import NavigationProvider from "context/navigation";

export default function App({ Component, pageProps }) {
  return (
    <NavigationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavigationProvider>
  );
}