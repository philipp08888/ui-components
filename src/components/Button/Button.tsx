import { useTheme } from "../../theme/hooks/useTheme";
import styles from "./Button.module.scss";

/** This is just a btn for testing purpose */
export const Button = (): JSX.Element => {
  const { toggleTheme } = useTheme();

  return (
    <button className={styles.button} onClick={toggleTheme}>
      Change theme
    </button>
  );
};
