import "@/styles/globals.css";
import Layout from "@/components/layout";
import { Work_Sans } from "next/font/google";
import SearchProvider from "@/provider/search-provider";

const work_sans = Work_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <div className={work_sans.className}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </SearchProvider>
  );
}
