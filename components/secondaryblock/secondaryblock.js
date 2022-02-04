import styles from "./secondaryblock.module.css";
import Link from "next/link";

export default function SecondaryBlock({ ...data }) {
  const { preHeader, mainHeader, copy, linkText, buttonText, color } = data; // Props

  // CSS Selectors
  const blockColor = (color) => {
    const prefix = `${styles.primaryBlock}`;
    if (color === "primaryStyle") {
      return `${prefix}`;
    } else if (color === "lightStyle") {
      return `${prefix} ${styles.lightBlock}`;
    } else {
      return `${prefix} ${styles.darkBlock}`;
    }
  };

  const preHeaderColor = (color) => {
    const prefix = `${styles.preHeader}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.secondaryText}`;
    }
  };

  const headerColor = (color) => {
    const prefix = `${styles.mainHeader}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.lightText}`;
    }
  };

  const copyColor = (color) => {
    const prefix = `${styles.copyWrapper}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.whiteCopy}`;
    }
  };

  const linkColor = (color) => {
    const prefix = `${styles.container} ${styles.linkContainer}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.secondaryMode} ${styles.secondaryText}`;
    }
  };

  const buttonColor = (color) => {
    const prefix = `${styles.container} ${styles.buttonLinkContainer}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.secondaryMode} ${styles.secondaryButton}`;
    }
  };

  // Component
  return (
    <div className={blockColor(color)}>
      <div className={preHeaderColor(color)}>
        <span>{preHeader}</span>
      </div>
      <div className={headerColor(color)}>{mainHeader}</div>
      <div className={copyColor(color)}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget arcu
          non risus mollis tincidunt eu id felis. In hac habitasse platea
          dictumst. Sed vitae dolor at tortor euismod interdum vel a mi. Nullam
          non vehicula ex. Donec laoreet, purus at viverra pulvinar, sem libero
          aliquam dolor, quis pellentesque dolor pellentesque. Nullam non
          vehicula ex. Donec laoreet, Nullam non vehicula ex. Donec laoreet,
        </p>
      </div>
      <div className={`${styles.container} ${styles.linkContainer}`}>
        <Link href="/">
          <a>{linkText}</a>
        </Link>
        <Link href="/">
          <a>{linkText}</a>
        </Link>
      </div>
      <div className={buttonColor(color)}>
        <div className={styles.buttonWrapper}>
          <Link href="/" passHref>
            <button>{buttonText}</button>
          </Link>
        </div>
        <Link href="/">
          <a className={`${styles.container} ${styles.linkContainer}`}>
            {linkText}
          </a>
        </Link>
      </div>
    </div>
  );
}
