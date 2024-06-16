import _ from "classnames";
import React from "react";
import styles from "./Button.module.scss";

export interface ExtendedButtonProps {
  variant?: "primary" | "success" | "danger" | "warning";
}

export type ButtonProps = ExtendedButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <button
        className={_(styles.button, styles[variant], props.className)}
        {...props}
      >
        {props.children}
      </button>
    </div>
  );
};
