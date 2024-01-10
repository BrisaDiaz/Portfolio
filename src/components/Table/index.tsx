import { forwardRef } from "react";
import styles from "./styles.module.css";

interface Props extends React.TableHTMLAttributes<HTMLTableElement> {
  titles?: string[];
  data?: Array<any[]>;
  bordered?: Boolean;
  doubleEntry?: Boolean;
  fullWidth: Boolean;
  size?: "sm" | "md" | "lg";
}
const defaultProps = {
  titles: [],
  data: [[]],
  bordered: false,
  doubleEntry: false,
  fullWidth: false,
  size: "md",
};
function Table(props: Props, ref?: React.LegacyRef<HTMLTableElement>) {
  const {
    children,
    titles = defaultProps.titles,
    data = defaultProps.data,
    bordered = defaultProps.bordered,
    fullWidth = defaultProps.fullWidth,
    doubleEntry = defaultProps.doubleEntry,
    size = defaultProps.size,
    ...other
  } = props;
  return (
    <div className={styles["table__container"]}>
      <div className={styles["table__container--inner"]}>
        <table
          ref={ref}
          {...other}
          className={`${styles["table"]} ${styles[`table--${size}`]} ${
            bordered ? styles["table--bordered"] : ""
          } ${doubleEntry ? styles["table--double-entry"] : ""} ${
            fullWidth ? styles["table--full-width"] : ""
          }`}
        >
          <thead className={styles["table__head"]}>
            <tr>
              {titles.map((title) => (
                <th
                  key={title}
                  className={`${styles["table__title"]} ${styles["table__row-item"]}`}
                  scope="col"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i_row) => (
              <tr key={i_row} className={styles["table__row"]}>
                {row.map((content, i_content) => (
                  <td key={i_content} className={styles["table__row-item"]}>
                    {content}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {children}
        </table>
      </div>
    </div>
  );
}

export default forwardRef(Table);
