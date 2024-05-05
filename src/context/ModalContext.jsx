import { useState } from "react";
import { createContext } from "react";

export const ModalContextProvide = createContext(null);

export const ModalContext = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const providedValues = { modalOpen, toggleModalOpen };

  return (
    <ModalContextProvide.Provider value={providedValues}>
      {children}
    </ModalContextProvide.Provider>
  );
};
