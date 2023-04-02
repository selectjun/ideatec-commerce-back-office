import { PropsWithChildren } from "react";

export interface BaseProps {}

const Base: React.FC<PropsWithChildren<BaseProps>> = ({ children }) => {
  return <>123{children}</>;
};

export default Base;
