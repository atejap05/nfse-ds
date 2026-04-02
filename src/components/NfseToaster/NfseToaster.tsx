import { Toaster } from 'sonner';
import styles from './NfseToaster.module.css';

export interface NfseToasterProps {
  position?: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center';
}

export function NfseToaster({ position = 'bottom-right' }: NfseToasterProps) {
  return (
    <Toaster
      position={position}
      closeButton
      style={{ zIndex: 'var(--nfse-z-toast)' }}
      toastOptions={{
        classNames: {
          toast: styles.toast,
          title: styles.title,
          description: styles.description,
          success: styles.successToast,
          error: styles.errorToast,
          warning: styles.warningToast,
          info: styles.infoToast,
        },
      }}
    />
  );
}
