import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the amazing parties",
  keywords: "music, DJ,dj, parties",
  description: "Find the latest DJ and other musical events",
};
