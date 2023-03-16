import { createContext, useContext, useState } from "react";

export const OverlayContext = createContext<any>(null);

export const useAuth = () => {
  return useContext(OverlayContext);
};

export const OverlayContextProvider = (props: any) => {
  const [showfreelanceForm, setShowfreelanceForm] = useState(false);
  const [showStartedForm, setShowStartedForm] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [packageId, setPackageId] = useState<string | number>("");
  const [showPackageBuyForm, setShowPackageBuyForm] = useState(false);
  const [campaign, setCampaignDetails] = useState<{
    campaignId: number;
    campaignName: string;
  } | null>(null);
  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const toggleFreelanceForm = () => {
    setShowfreelanceForm(!showfreelanceForm);
  };

  const toggleStartedForm = () => {
    setShowStartedForm(!showStartedForm);
  };

  const toggleCustomForm = () => {
    setShowCustomForm(!showCustomForm);
  };

  const togglePackageBuyForm = () => {
    setShowPackageBuyForm(!showPackageBuyForm);
  };

  const setPackage = (id: string | number) => {
    setPackageId(id);
  };

  const setCampaign = (campaignDetails: {
    campaignId: number;
    campaignName: string;
  }) => {
    setCampaignDetails(campaignDetails);
  };

  const toggleCampaignForm = () => {
    setShowCampaignForm(!showCampaignForm);
  };

  const value = {
    showStartedForm,
    showfreelanceForm,
    showCustomForm,
    showPackageBuyForm,
    showCampaignForm,
    toggleStartedForm,
    toggleFreelanceForm,
    toggleCustomForm,
    togglePackageBuyForm,
    toggleCampaignForm,
    setPackage,
    setCampaign,
    packageId,
    campaign,
  };

  return (
    <OverlayContext.Provider value={value}>
      {props.children}
    </OverlayContext.Provider>
  );
};
