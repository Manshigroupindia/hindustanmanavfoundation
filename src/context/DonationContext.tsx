import React, { createContext, useContext, useState } from 'react';

interface DonationContextType {
  isDonationOpen: boolean;
  openDonation: (causeTitle?: string) => void;
  closeDonation: () => void;
  selectedCause: string | null;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export const DonationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const openDonation = (causeTitle?: string) => {
    if (causeTitle) setSelectedCause(causeTitle);
    else setSelectedCause(null);
    setIsDonationOpen(true);
  };

  const closeDonation = () => {
    setIsDonationOpen(false);
    setSelectedCause(null);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <DonationContext.Provider
      value={{
        isDonationOpen,
        openDonation,
        closeDonation,
        selectedCause,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = (): DonationContextType => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
};

