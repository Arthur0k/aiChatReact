import styles from './index.less'

interface Back {
  (): void
}

const Headers = () => {
  const backClick: Back = () => {
    console.log('backclick')
  }
  return <div className={styles.headers}>
    <div className="left" onClick={backClick}>
      <div className="back-icon"></div>
    </div>
    <div className="title">VIP陪练在线客服</div>
    <div className="right">
      <div className="right-icon"></div>
    </div>
  </div>;
};

export default Headers;
