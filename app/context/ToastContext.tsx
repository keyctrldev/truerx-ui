import React, { createContext, useContext, useRef } from 'react';
import { CustomToast } from '../components';
import { ToastRef } from '../components/custom-toast/CustomToast';

interface ToastContextType {
  showToast: (message: string, type?: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const toastRef = useRef<ToastRef>(null);

  const showToast = (message: string, type: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO' = 'SUCCESS') => {
    if (toastRef.current) {
      toastRef.current.showToast(message, type);
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <CustomToast ref={toastRef} />
      {children}
    </ToastContext.Provider>
  );
};
