import { Toaster, toast } from 'sonner';
import styles from './NfseToaster.module.css';

export interface NfseToasterProps {
  position?: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center';
}

export function NfseToaster({ position = 'bottom-right' }: NfseToasterProps) {
  return (
    <Toaster
      position={position}
      closeButton
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

export { toast };
