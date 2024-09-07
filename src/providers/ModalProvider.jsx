import { useState } from "react";
import ModalContext from "../context/ModalContext";

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState(false);

  const setYesModal = () => setModal(true);
  const setNoModal = () => setModal(false);

  return (
    <ModalContext.Provider
      value={{
        modal,
        setYesModal,
        setNoModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
