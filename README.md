# GapChap

```js
# GapChap

// 4. **Sample Data** - Example user data and relationships

// 4.1 Users
const alice = new User({
  _id: 'userId1',
  name: 'Alice',
  email: 'alice@example.com',
  password: 'hashedPassword',
  pic: 'https://example.com/pic/alice.jpg',
  isAdmin: false,
});

const bob = new User({
  _id: 'userId2',
  name: 'Bob',
  email: 'bob@example.com',
  password: 'hashedPassword',
  pic: 'https://example.com/pic/bob.jpg',
  isAdmin: false,
});

const charlie = new User({
  _id: 'userId3',
  name: 'Charlie',
  email: 'charlie@example.com',
  password: 'hashedPassword',
  pic: 'https://example.com/pic/charlie.jpg',
  isAdmin: false,
});

const david = new User({
  _id: 'userId4',
  name: 'David',
  email: 'david@example.com',
  password: 'hashedPassword',
  pic: 'https://example.com/pic/david.jpg',
  isAdmin: true,  // David is the admin
});

// 4.2 Group Chat Example: "Family Chat"
const groupChat = new Chat({
  _id: 'chatId1',
  chatName: 'Family Chat',
  isGroupChat: true,
  users: ['userId1', 'userId2', 'userId3', 'userId4'],  // Alice, Bob, Charlie, and David
  latestMessage: 'msgId3',  // Points to the latest message in this chat
  groupAdmin: 'userId4',  // David is the admin of the group
});

// 4.3 Messages in the Chat
const message1 = new Message({
  _id: 'msgId1',
  sender: 'userId1',  // Alice
  content: 'Hey Bob, how are you?',
  chat: 'chatId1',  // Belongs to "Family Chat"
  readBy: ['userId2'],  // Bob has read it
});

const message2 = new Message({
  _id: 'msgId2',
  sender: 'userId2',  // Bob
  content: 'I\'m good, Alice. How about you?',
  chat: 'chatId1',  // Belongs to "Family Chat"
  readBy: ['userId1'],  // Alice has read it
});

const message3 = new Message({
  _id: 'msgId3',
  sender: 'userId3',  // Charlie
  content: 'Hey everyone, I\'ve got some exciting news!',
  chat: 'chatId1',  // Belongs to "Family Chat"
  readBy: ['userId1', 'userId2', 'userId3', 'userId4'],  // All users have read it
});

```

```js
// Sample Data for Users, Chat, and Messages

// 1. Users
const alice = new User({
  _id: "userId1",
  name: "Alice",
  email: "alice@example.com",
  password: "hashedPassword",
  pic: "https://example.com/pic/alice.jpg",
  isAdmin: false,
});

const bob = new User({
  _id: "userId2",
  name: "Bob",
  email: "bob@example.com",
  password: "hashedPassword",
  pic: "https://example.com/pic/bob.jpg",
  isAdmin: false,
});

const charlie = new User({
  _id: "userId3",
  name: "Charlie",
  email: "charlie@example.com",
  password: "hashedPassword",
  pic: "https://example.com/pic/charlie.jpg",
  isAdmin: false,
});

const david = new User({
  _id: "userId4",
  name: "David",
  email: "david@example.com",
  password: "hashedPassword",
  pic: "https://example.com/pic/david.jpg",
  isAdmin: true, // David is the admin
});

// 2. One-on-One Chat: Alice and Bob
const chatAliceBob = new Chat({
  _id: "chatId2",
  chatName: "Alice & Bob",
  isGroupChat: false, // Not a group chat
  users: ["userId1", "userId2"], // Alice and Bob
  latestMessage: "msgId3", // Points to the latest message
  groupAdmin: null, // Not applicable for one-on-one chat
});

// 3. Group Chat: Alice, Bob, and Charlie
const groupChat = new Chat({
  _id: "chatId1",
  chatName: "Family Chat",
  isGroupChat: true, // Group chat
  users: ["userId1", "userId2", "userId3"], // Alice, Bob, and Charlie
  latestMessage: "msgId10",
  groupAdmin: "userId1", // Alice is the admin
});

// 4. Messages for One-on-One Chat (Alice & Bob)
const message1 = new Message({
  _id: "msgId1",
  sender: "userId1", // Alice
  content: "Hey Bob, how's it going?",
  chat: "chatId2", // Belongs to "Alice & Bob"
  readBy: ["userId2"], // Bob has read it
});

const message2 = new Message({
  _id: "msgId2",
  sender: "userId2", // Bob
  content: "I'm doing well, Alice! How about you?",
  chat: "chatId2", // Belongs to "Alice & Bob"
  readBy: ["userId1"], // Alice has read it
});

// 5. Messages for Group Chat (Family Chat)
const message3 = new Message({
  _id: "msgId3",
  sender: "userId1", // Alice
  content: "Hey everyone, how's your day going?",
  chat: "chatId1", // Belongs to "Family Chat"
  readBy: ["userId1", "userId2", "userId3"], // All users have read it
});

const message4 = new Message({
  _id: "msgId4",
  sender: "userId2", // Bob
  content: "I'm good, Alice! Just relaxing.",
  chat: "chatId1", // Belongs to "Family Chat"
  readBy: ["userId1", "userId2", "userId3"], // All users have read it
});

const message5 = new Message({
  _id: "msgId5",
  sender: "userId3", // Charlie
  content: "My day was great! Had a productive meeting.",
  chat: "chatId1", // Belongs to "Family Chat"
  readBy: ["userId1", "userId2", "userId3"], // All users have read it
});

console.log("Users:", [alice, bob, charlie, david]);
console.log("Chats:", [chatAliceBob, groupChat]);
console.log("Messages:", [message1, message2, message3, message4, message5]);
```
