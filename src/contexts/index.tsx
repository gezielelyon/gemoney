import { ReactNode } from "react";

import { TransactionProvider } from "./transactions";

interface IContextProps {
  children: ReactNode;
}

export function ContextProvider({ children }: IContextProps) {
  return <TransactionProvider>{children}</TransactionProvider>;
}
