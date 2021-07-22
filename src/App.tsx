import { useState } from "react";
import Modal from "react-modal";

import { ContextProvider } from "./contexts/index";

import Dashboard from "./components/Dashboard/index";
import Header from "./components/Header/index";
import NewTransactionModal from "./components/NewTransactionModal/index";

import { GlobalStyles } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <ContextProvider>
      <GlobalStyles />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </ContextProvider>
  );
}
