"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuoteModalContextType {
  isOpen: boolean;
  productPrefill: string;
  openQuoteModal: (productName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productPrefill, setProductPrefill] = useState("");

  const openQuoteModal = (productName?: string) => {
    setProductPrefill(productName || "");
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setProductPrefill("");
  };

  return (
    <QuoteModalContext.Provider
      value={{ isOpen, productPrefill, openQuoteModal, closeQuoteModal }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
