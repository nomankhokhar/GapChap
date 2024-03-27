import React, { useState } from 'react'
import { Button } from "@chakra-ui/button";
// import { useDisclosure } from "@chakra-ui/hooks";
// import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
// import {
//   Menu,
//   MenuButton,
//   MenuDivider,
//   MenuItem,
//   MenuList,
// } from "@chakra-ui/menu";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerContent,
//   DrawerHeader,
//   DrawerOverlay,
// } from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
// import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
// import { Avatar } from "@chakra-ui/avatar";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import { useToast } from "@chakra-ui/toast";
// import ChatLoading from "../ChatLoading";
// import { Spinner } from "@chakra-ui/spinner";
// import ProfileModal from "./ProfileModal";
// import NotificationBadge from "react-notification-badge";
// import { Effect } from "react-notification-badge";
// import { getSender } from "../../config/ChatLogics";
// import UserListItem from "../userAvatar/UserListItem";
// import { ChatState } from "../../Context/ChatProvider";


const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  return (
    <>
      <Box>
        <Tooltip label="Search users to chat" hasArrow placement="bottom-end">
        <Button varient="ghost">
          <i class="fas fa-search"/>
        </Button>
        </Tooltip>
      </Box>
    </>
  )
}

export default SideDrawer
