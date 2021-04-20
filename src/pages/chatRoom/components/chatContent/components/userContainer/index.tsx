import styles from './index.less';
import Avatar from '@/pages/chatRoom/components/chatContent/components/avatar';

const UserContainer = (props) => {
  return (
    <div className={styles.userContainer}>
      <div className="sectionLeft">
        <div className="userCon">薪资相关</div>
      </div>
      <div className="sectionRight">
        <Avatar />
      </div>
    </div>
  );
};

export default UserContainer;
