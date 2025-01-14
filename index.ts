/**
 * @example
 * import styles from "./styles.module.css";
 * const cx = bindClassNames(styles);
 *
 * <div className={cx("container", "flex", "justify-center")}></div>
 */
export const bindClassNames =
  (styles: { [key: string]: string }) =>
  (...classNames: string[]) => {
    return classNames.map((className) => styles[className]).join(' ');
  };
