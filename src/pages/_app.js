import "@/styles/globals.css";
import Layout from "@/components/layout";
import { Work_Sans } from "next/font/google";
import MyProvider from "@/provider/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroProvider from "@/provider/hero_section_provider";

const work_sans = Work_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <HeroProvider>
        <Layout>
          <div className={work_sans.className}>
            <Component {...pageProps} />
          </div>
          <ToastContainer />
        </Layout>
      </HeroProvider>
    </MyProvider>
  );
}
