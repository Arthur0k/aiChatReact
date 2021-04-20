import styles from './index.less';
import Avatar from '@/pages/chatRoom/components/chatContent/components/avatar';
import imgs from '@/assets/images/chatRoom/robot.png'

const BotContainer = (props) => {
  return (
    <div className={styles.botContainer}>
      <div className="sectionLeft">
        <Avatar/>
      </div>
      <div className="sectionRight">
        <div className="botName">机器人</div>
        <div className="botCon">
          <div className="text">请点击人工客服协助处理</div>
          {/* <div className="img">
            <img src={imgs} alt=""/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BotContainer;
