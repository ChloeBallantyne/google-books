import React, { createContext } from "react";

export const ModalContext = createContext(null);

const ModalContext = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const providedValues = { modalOpen, toggleModalOpen };

  return (
    <ModalContext.Provider value={providedValues}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
