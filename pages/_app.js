import "@styles/globals.css";
import Layout from "@components/Layout";
import NavigationProvider from "context/navigation";
import FiltersProvider from "context/filters";

export default function App({ Component, pageProps }) {
  return (
    <NavigationProvider>
      <FiltersProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FiltersProvider>
    </NavigationProvider>
  );
}