import styles from "./Button.module.css";
import { buttonPropType } from "../../types/Type";

const Button = ({
  height,
  width,
  backgroundColor,
  children,
  type,
}: buttonPropType) => {
  return (
    <button
      style={{ height, width, backgroundColor }}
      className={styles.button}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
