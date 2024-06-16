import classnames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

export interface ExtendedButtonProps {
  /**
   * variant of button
   * @default "primary"
   */
  variant?: "primary" | "success" | "danger" | "warning";
}

export type ButtonProps = ExtendedButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classnames(styles.button, styles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
