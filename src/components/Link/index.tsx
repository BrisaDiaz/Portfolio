
import NextLink,{LinkProps} from "next/link";
import styles from "./styles.module.css";

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  primary?: boolean;
  btn?: boolean;
} 
export default function Link(props: Props & LinkProps) {
  const { external = false, btn=false, primary =false, children, ...other } = props;

  const dynamicProps = external ? { target: "_blank", rel: "noreferrer"} : {};
     const className = `${styles.link} ${
       external ? styles["link--external"] : ""
     }  ${primary ? styles["link--primary"] : styles["link--secondary"]}  ${
       btn ? styles["link--btn"] : ""
     }`;
  return external ? (
    <a {...other} {...dynamicProps}>
      {children} {external && <LinkIcon />}
    </a>
  ) : (
    <NextLink className={className} {...other}>
      {children}
    </NextLink>
  );
}

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="0.8rem">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        fill="currentColor"
        d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 10-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 019.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 01-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 107.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
      ></path>
    </svg>
  );
}