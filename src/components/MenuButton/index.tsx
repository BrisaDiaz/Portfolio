import { forwardRef } from "react";
import IconButton from "@/components/IconButton";
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}
 function MenuButton(props: Props, ref?: React.Ref<HTMLButtonElement>) {
  const {...other} = props
  return <IconButton {...other} ref={ref}><MenuIcon/></IconButton>;
}

export default forwardRef(MenuButton);

function MenuIcon() {
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
