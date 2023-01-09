import { createContext, useContext, useState } from "react";

export const OverlayContext = createContext<any>(null);

export const useAuth = () => {
  return useContext(OverlayContext);
};

export const OverlayContextProvider = (props: any) => {
  const [showfreelanceForm, setShowfreelanceForm] = useState(false);
  const [showStartedForm, setShowStartedForm] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);

  const toggleFreelanceForm = () => {
    setShowfreelanceForm(!showfreelanceForm);
  };

  const toggleStartedForm = () => {
    setShowStartedForm(!showStartedForm);
  };

  const toggleCustomForm = () => {
    setShowCustomForm(!showCustomForm);
  };

  const value = {
    showStartedForm,
    showfreelanceForm,
    showCustomForm,
    toggleStartedForm,
    toggleFreelanceForm,
    toggleCustomForm,
  };

  return (
    <OverlayContext.Provider value={value}>
      {props.children}
    </OverlayContext.Provider>
  );
};
