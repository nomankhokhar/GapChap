import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider';
// import { AddIcon } from "@chakra-ui/icons";
// import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
// import { useEffect, useState } from "react";
// import { getSender } from "../config/ChatLogics";
// import ChatLoading from "./ChatLoading";
// import GroupChatModal from "./miscellaneous/GroupChatModal";
// import { Button } from "@chakra-ui/react";

const MyChats = () => {

  const [loggedUser, setLoggedUser] = useState();
  const { user, selectChat, setSelectChat, chats, setChats }= ChatState();

  const toast = useToast()

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("http://localhost:5000/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, []);

  return (
    <div>
      MyChats
    </div>
  )
}

export default MyChats
