import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SecondaryBlockContainer from "../containers/secondaryblockcontainer";
import TertiaryBlockContainer from "../containers/tertiaryblockcontainer";

export default function Home() {
  return (
    <section>
      <SecondaryBlockContainer />
      <TertiaryBlockContainer />
    </section>
  );
}
