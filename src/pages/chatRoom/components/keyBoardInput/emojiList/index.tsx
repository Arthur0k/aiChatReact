import styles from './index.less';

const EmojiList = (props) => {
  return (
    <div className={ styles.emojiList }>
      {Array(28)
        .fill(0)
        .map((item, index) => (
          <div className="emojiItem" key={index}></div>
        ))}
    </div>
  );
};

export default EmojiList
