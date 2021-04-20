import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useRef,
} from 'react';
import styles from './index.less';
import EmojiList from './emojiList';
import MoreAction from './moreAction';
import TextAreaItem from './textareaItem';

interface KeyBoardInputProps {}

const KeyBoardInput = (props: KeyBoardInputProps, ref) => {
  const [moreActionActive, setMoreActionSwitch] = useState(false);
  const [emojiListActive, setEmojiListSwitch] = useState(false);
  const TextAreaItemRef: any = useRef(null);

  useImperativeHandle(ref, () => ({
    closeEmojiListOrMoreAction: () => {
      setMoreActionSwitch(false);
      setEmojiListSwitch(false);
      TextAreaItemRef.current.setIconType('smile');
    },
  }));

  return (
    <div className={styles.keyBoardInput}>
      <TextAreaItem
        ref={TextAreaItemRef}
        moreActionActive={moreActionActive}
        emojiListActive={emojiListActive}
        setMoreActionSwitch={setMoreActionSwitch}
        setEmojiListSwitch={setEmojiListSwitch}
      />
      {moreActionActive && <MoreAction />}
      {emojiListActive && <EmojiList />}
    </div>
  );
};

export default forwardRef(KeyBoardInput);
