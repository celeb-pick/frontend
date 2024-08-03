import DropdownMain from './dropdown';
import DropdownItem from './dropdown-item';
import DropdownMenu from './dropdown-menu';
import DropdownTrigger from './dropdown-trigger';

const Dropdown = Object.assign(DropdownMain, {
  Trigger: DropdownTrigger,
  Item: DropdownItem,
  Menu: DropdownMenu,
});

export default Dropdown;
