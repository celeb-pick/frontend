import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import tw from 'twin.macro';
import IconButton from '../../atoms/IconButton';

interface ModalProps {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
  title: string;
  className?: string;
  children: ReactNode;
}

function Modal({ isShow, setIsShow, title, className, children }: ModalProps) {
  if (!isShow) {
    return null;
  }

  return createPortal(
    <div
      css={[
        tw`z-40 fixed top-0 left-0 flex-center w-full h-full bg-black/70 select-none touch-none`,
      ]}
      className={className}
    >
      <div css={[tw`w-[90vw] max-w-[500px] bg-white rounded-lg`]}>
        <div
          css={[
            tw`flex-y-center justify-between px-2 py-2.5 border-solid border-b`,
          ]}
        >
          <h1 css={[tw`ml-2 text-xl font-semibold`]}>{title}</h1>
          <IconButton
            icon={<CloseRoundedIcon />}
            onClick={() => setIsShow(false)}
          />
        </div>
        <div css={[tw`p-4`]}>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
