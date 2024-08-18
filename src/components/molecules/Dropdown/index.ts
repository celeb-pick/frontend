import DropdownMain from './Dropdown';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownTrigger from './DropdownTrigger';

const Dropdown = Object.assign(DropdownMain, {
  Trigger: DropdownTrigger,
  Item: DropdownItem,
  Menu: DropdownMenu,
});

export default Dropdown;
