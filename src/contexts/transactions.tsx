import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext, ReactNode } from "react";

import { api } from "../services/api";

interface ITransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  created_at: string;
}

type ITransactionInput = Omit<ITransactionProps, "id" | "created_at">;

interface ITransactionProviderProps {
  children: ReactNode;
}

interface ITransactionContextData {
  transactions: ITransactionProps[];
  createNewTransaction(transaction: ITransactionInput): Promise<void>;
}

const TransactionContext = createContext<ITransactionContextData>(
  {} as ITransactionContextData
);

export function TransactionProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransactionProps[]>([]);

  useEffect(() => {
    (async () => {
      api
        .get("/transactions")
        .then((response) => setTransactions(response.data.transactions));
    })();
  }, []);

  async function createNewTransaction(transaction: ITransactionInput) {
    const response = await api.post("/transactions", {
      ...transaction,
      created_at: new Date(),
    });

    const newTransaction: ITransactionProps = response.data.transaction;

    setTransactions((prevState) => [...prevState, newTransaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function UseTransaction() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error("UseContext must be used with TransactionProvider");
  }

  return context;
}
