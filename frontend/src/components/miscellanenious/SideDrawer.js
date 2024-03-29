import React, { useState } from 'react'
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useToast } from "@chakra-ui/toast";
import { Tooltip } from "@chakra-ui/tooltip";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import axios from "axios";
// import ChatLoading from "../ChatLoading";
import { Spinner } from "@chakra-ui/spinner";
// import NotificationBadge from "react-notification-badge";
// import { Effect } from "react-notification-badge";
// import { getSender } from "../../config/ChatLogics";
// import UserListItem from "../userAvatar/UserListItem";
import { useNavigate } from 'react-router-dom';


const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user }= ChatState();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/")
  }
  
  const toast = useToast();

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please fill the search...",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    };

    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:5000/api/user?search=${search}`,
        config
      );

      setSearchResult(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error Occured!",
        description: 'Failed to load the search result',
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Box
      style={
        {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }
      }
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
     <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
      </Tooltip>

        <Text fontSize={"2xl"} fontFamily={"Work sans"}>
          GapChap
        </Text>
       <div>
       <Menu>
            <MenuButton p={1}>
                <BellIcon />
            </MenuButton>
            {/* <MenuList></MenuList> */}
        </Menu>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} p={1}>
              <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic}/>
            </MenuButton>
            <MenuList>
            <ProfileModal user={user}>
              <MenuItem>My Profile</MenuItem>
            </ProfileModal>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
        </Menu>
       </div>
      </Box>
      <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent >
        <DrawerHeader borderBottomWidth='1px'>
          Search Users
        </DrawerHeader>
        <DrawerBody>
          <Box style={{display:"flex"}} pb={2}>
            <Input 
            placeholder='Search Users by name or email'
            mr={2}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <Button 
            onClick={handleSearch}
            >Go</Button>
          </Box>
          {/*Button onClick={() => setLoading(true)}>Search</Button>ton onClick={() => setLoading(true)}>Search</Button>loading ? (
            <ChatLoading />
          ) : (
            searchResult.map((user) => (
              <UserListItem
                key={user._id}
                user={user}
                onClose={onClose}
                setLoadingChat={setLoadingChat}
              />
            ))
          )} */}
        </DrawerBody>
      </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideDrawer