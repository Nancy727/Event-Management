import React, { createContext, useContext, useState } from 'react';

interface InquiryModalContextType {
  isOpen: boolean;
  selectedService: string | null;
  openModal: (serviceName?: string) => void;
  closeModal: () => void;
}

const InquiryModalContext = createContext<InquiryModalContextType | undefined>(undefined);

export const InquiryModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const openModal = (serviceName?: string) => {
    setSelectedService(serviceName || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedService(null);
  };

  return (
    <InquiryModalContext.Provider value={{ isOpen, selectedService, openModal, closeModal }}>
      {children}
    </InquiryModalContext.Provider>
  );
};

export const useInquiryModal = () => {
  const context = useContext(InquiryModalContext);
  if (!context) throw new Error('useInquiryModal must be used within InquiryModalProvider');
  return context;
};
