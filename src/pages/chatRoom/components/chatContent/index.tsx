import React, { useContext } from 'react';
import styles from './index.less';
import ChatRoomContext from 'context/globalContext';
import BotContainer from './components/botContainer'
import UserContainer from './components/UserContainer'

const ChatContent = () => {
  const chatRoomStore = useContext(ChatRoomContext);
  const { messages } = chatRoomStore;
  return <div className={styles.content}>
    <BotContainer />
    <UserContainer />
  </div>;
};

export default ChatContent;
