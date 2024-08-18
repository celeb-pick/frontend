import { cloneElement, ReactElement } from 'react';
import useDropdownContext from './hooks';

type DropdownTriggerProps = {
  as: ReactElement;
};

function DropdownTrigger({ as }: DropdownTriggerProps) {
  const { setOpen } = useDropdownContext();

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return cloneElement(as, {
    onClick: handleClick,
  });
}

export default DropdownTrigger;
