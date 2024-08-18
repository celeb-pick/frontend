import { useContext } from 'react';
import { DropdownContext } from './DropdownProvider';

const useDropdownContext = () => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw Error(
      'DropdownContext는 Dropdown 컴포넌트 내부에서만 사용할 수 있습니다.'
    );
  }

  return context;
};

export default useDropdownContext;
