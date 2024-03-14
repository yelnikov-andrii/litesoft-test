import Image from "next/image";
import styles from "./page.module.css";
import { Wishlist } from "@/components/Wishlist/Wishlist";

export default function Home() {
  return (
    <main className={styles.main}>
      <Wishlist />
    </main>
  );
}
