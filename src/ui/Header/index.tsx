import ClientHeader, { HeaderProps } from "./index.client";
import { forwardRef } from "react";
import { getHeaderData } from "@/services/layout";


async function Header(props: Omit<HeaderProps, "data">, ref?: React.Ref<HTMLElement>) {
  const header = await getHeaderData();
  return <ClientHeader {...props} data={header} ref={ref} />;
}

export default forwardRef(Header);
