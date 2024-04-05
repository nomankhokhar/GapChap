import React from 'react'
import { ChatState } from '../Context/ChatProvider';
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import "./styles.css";
import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import { getSender, getSenderFull } from "../config/ChatLogics";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ProfileModal from "./miscellaneous/ProfileModal";
import ScrollableChat from "./ScrollableChat";
import Lottie from "react-lottie";
import animationData from "../animations/typing.json";
import io from "socket.io-client";
import UpdateGroupChatModal from "./miscellaneous/UpdateGroupChatModal";
const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;


const SingleChat = ({ fetchAgain , setFetchAgain}) => {
  
    const { user , selectedChat, setSelectedChat } = ChatState();

    return (
    <>
      {selectedChat? (
      <>
      
      </>): 
      (<> 
      <Box display="flex" alignItems="center" justifyContent="center" h="100%">
         <Text fontSize="3xl" pb={3} fontFamily="Work sans">
           Click on a user to start chatting
         </Text>
       </Box>
      </>)}
    </>
  )
}

export default SingleChat