import styles from './index.less';

const KeyBoardInput = (props) => {
  const onInput = (e) => {
    if (e.target.value.length == 22 || 35)
    e.target.style.height = 'auto'
  }
  const onFocus = () => {}
  const onBlur = (e) => {
    e.target.style.height = '41px'
  }
  return (
    <div className={styles.keyBoardInput}>
      <div className="inputCon">
        <textarea
          className="textarea"
          placeholder="请用一句话描述您的问题"
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <div className="rightBtn"></div>
      </div>
      <div className="moreAction"></div>
      <div className="placeholder"></div>
    </div>
  );
};

export default KeyBoardInput;
