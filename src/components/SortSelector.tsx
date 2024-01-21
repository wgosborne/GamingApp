import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

// interface Props {
//   onSelectSort: (platform: Platform) => void;
//   selectedSort: Platform | null;
// }

const SortSelector = () => {

//     const { data, error } = use

//   if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by
      </MenuButton>
      <MenuList>
        <MenuItem>Rel</MenuItem>
        <MenuItem>Date</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release</MenuItem>
        <MenuItem>POP</MenuItem>
        <MenuItem>Avg</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
