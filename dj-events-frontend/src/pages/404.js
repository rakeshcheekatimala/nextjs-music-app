import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          <span>404</span>
        </h1>
        <h4>Sorry, the requested page is not available.</h4>
        <Link href="/">Go Back</Link>
      </div>
    </Layout>
  );
}
