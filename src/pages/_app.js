import "@/styles/globals.css";
import Layout from "@/components/layout";
import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className={work_sans.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
