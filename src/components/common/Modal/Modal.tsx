import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IModal } from './IModal';
import styles from './Modal.module.scss';
import { CrossBlackIcon } from '@saurabh-chauhan/sc-components-library';

export const Modal: React.FC<IModal> = ({
  open,
  header,
  children,
  hideCloseButton = false,
  disablePortal = false,
  attachedNode = document.body,
  keepMounted = false,
  className,
  backdropStyles,
  onClose,
  ...props
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onCloseButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      closeModal();
    }
  };

  const closeModal = () => {
    dialogRef.current?.close();
    onClose?.();
  };

  const modalContainer = (
    <dialog ref={dialogRef} className={[styles.modalContainer, className].join(' ')} {...props}>
      <div
        className={[styles.backdrop].join(' ')}
        onClick={closeModal}
        aria-hidden="true"
        style={{ ...backdropStyles }}
      />
      <div className={styles.mainContainer}>
        {header || !hideCloseButton ? (
          <div className={styles.headerWrapper}>
            {header}

            {!hideCloseButton && (
              <CrossBlackIcon
                className={styles.closeModalButton}
                onClick={closeModal}
                onKeyDown={onCloseButtonKeyDown}
              />
            )}
          </div>
        ) : (
          <></>
        )}

        <div className={[styles.bodyWrapper].join(' ')}>{children}</div>
      </div>
    </dialog>
  );

  useEffect(() => {
    open ? dialogRef.current?.showModal() : closeModal();
  }, [open, hideCloseButton, keepMounted]);

  if (!open && !keepMounted) return <></>;

  if (disablePortal) return modalContainer;

  return createPortal(modalContainer, attachedNode);
};

export default Modal;
