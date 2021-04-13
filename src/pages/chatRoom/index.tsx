import styles from './index.less';
import Headers from '@/components/headers';
import KeyboardInput from './components/keyBoardInput'

interface IProps {
  children: React.ReactNode;
}

const ChatRoom = (props: IProps) => {
  return <div className={styles.chatRoom}>
    <Headers/>
    <div className="content">
    </div>
    <KeyboardInput />
    <div className="footer"></div>
  </div>;
};

export default ChatRoom;
