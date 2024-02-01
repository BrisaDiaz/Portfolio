import { forwardRef } from "react";
import IconButton from "@/components/IconButton";
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: Boolean;
}
function MenuButton(props: Props, ref?: React.Ref<HTMLButtonElement>) {
  const { isOpen, ...other } = props;
  return (
    <IconButton {...other} ref={ref} aria-label="menu button">
      {isOpen ? <CloseIcon /> : <OpenIcon />}
    </IconButton>
  );
}

export default forwardRef(MenuButton);

function OpenIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path>
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      fill="currentColor"
      fillRule="evenodd"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
    >
      <path
        stroke="none"
        d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 010 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 010 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 01-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 01-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 010-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 010-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 01.069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 01.07 0z"
      ></path>
    </svg>
  );
}