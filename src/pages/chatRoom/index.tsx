import React, { useRef } from 'react';
import styles from './index.less';
import Headers from '@/components/headers';
import KeyboardInput from './components/keyBoardInput';
import ChatContent from './components/chatContent';
import { connect } from 'umi';
import { moduleName } from './model';
import ChatRoomContext from '@/common/utils/context/globalContext';
import PullDown from '@/components/pulldown';

interface IProps {
  children: React.ReactNode;
  [prop: string]: any;
}

const ChatRoom = (props: IProps) => {
  const KeyboardInputRef: any = useRef(null);

  // 处理冒泡点击
  const handleBubbleClick = (e) => {
    // 失去焦点时隐藏xx
    KeyboardInputRef.current?.closeEmojiListOrMoreAction();
  };

  return (
    <ChatRoomContext.Provider value={props}>
      <div className={styles.chatRoom}>
        <div className="header">
          <Headers />
        </div>
        <div className="content" onClick={handleBubbleClick}>
          <PullDown>
            <ChatContent />
          </PullDown>
        </div>
        <div className="footer">
          <KeyboardInput ref={KeyboardInputRef} />
        </div>
      </div>
    </ChatRoomContext.Provider>
  );
};

// connect建立view层与model层的联系
const mapStateToProps = (state: IProps) => {
  const { loading, chatRoom } = state;
  return {
    ...chatRoom,
    // pageLoading: loading?.effects?.[`${moduleName}/getBannerList`],
  };
};

export default connect(mapStateToProps)(ChatRoom);
