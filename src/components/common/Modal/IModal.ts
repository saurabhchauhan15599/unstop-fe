import { ReactNode } from 'react';

type dialogProps = JSX.IntrinsicElements['dialog'];
export interface IModal extends dialogProps {
  open: boolean;
  children: ReactNode;
  header?: ReactNode;
  hideCloseButton?: boolean;
  disablePortal?: boolean;
  attachedNode?: HTMLElement;
  keepMounted?: boolean;
  className?: string;
  backdropStyles?: React.CSSProperties;
  onClose?: () => void;
}
