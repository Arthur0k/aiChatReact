import styles from './index.less';

const MoreAction = (props) => {
  return (
    <div className={ styles.moreAction }>
      <div className="upload">
        <div className="uploadCon">
          <div className="uploadIcon"></div>
        </div>
        <div className="text">上传图片</div>
      </div>
      <div className="photo">
        <div className="photoCon">
          <div className="photoIcon"></div>
        </div>
        <div className="text">拍摄照片</div>
      </div>
    </div>
  );
};

export default MoreAction;
