import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  useContext,
} from 'react';
import styles from './index.less';
import classNames from 'classnames';
import ChatRoomContext from '@/common/utils/context/globalContext';
import { moduleName } from '../../../model';

const TextAreaItem = (props, ref) => {
  const {
    setMoreActionSwitch,
    setEmojiListSwitch,
    moreActionActive,
    emojiListActive,
  } = props;

  const textareaRef = useRef(null);
  const [textValue, setTextValue]: [String, Function] = useState('');
  const [iconType, setIconType]: ['smile' | 'keyboard', Function] = useState(
    'smile',
  );
  // 发送按钮的显示状态
  const [sendBtnSwitch, SetSendBtnSwitch] = useState(false);
  const { isRobot, dispatch } = useContext(ChatRoomContext);

  const reAlignHeight = function () {
    var textareaDom: HTMLElement = textareaRef.current!;
    textareaDom.style.height = ''; // 字数减少时能自动减小高度
    textareaDom.style.height = textareaDom.scrollHeight + 'px';
  };

  useEffect(() => {
    // 高度自适应
    reAlignHeight();
  });

  // 向父组件暴露方法
  useImperativeHandle(ref, () => ({
    setIconType: () => {
      setIconType('smile');
    },
  }));

  const onFocus = () => {};

  const onBlur = (e) => {
    setIconType('smile');
    setEmojiListSwitch(false);
    setMoreActionSwitch(false);
  };
  const onInput = (e) => {
    setTextValue(e.target.value.trimStart());
  };

  useEffect(() => {
    if (textValue.length > 0) {
      SetSendBtnSwitch(true);
    } else {
      SetSendBtnSwitch(false);
    }
  }, [textValue]);

  const sendMsg = () => {
    setTextValue('')
    dispatch({
      type: `${moduleName}/pushMessage`,
      payload: { name: 'hello' },
    });
  };

  const handleMoreActionSwitch = (e) => {
    setMoreActionSwitch(!moreActionActive);
    setEmojiListSwitch(false);
  };

  const handleExpression = (e) => {
    if (iconType === 'smile') {
      setIconType('keyboard');
      setEmojiListSwitch(!emojiListActive);
      setMoreActionSwitch(false);
    } else {
      setIconType('smile');
      setEmojiListSwitch(!emojiListActive);
      setMoreActionSwitch(false);
    }
  };
  return (
    <div
      className={classNames(styles.inputCon, { [styles.inputConRG]: !isRobot })}
    >
      <div className="textarea-con">
        <textarea
          ref={textareaRef}
          className="textarea"
          placeholder="请用一句话描述您的问题"
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          value={textValue}
        />
      </div>
      {sendBtnSwitch && !!isRobot && (
        <div className="rightBtn2">
          <div className="sendBtn" onClick={sendMsg}>
            发送
          </div>
        </div>
      )}
      {!sendBtnSwitch && !isRobot && (
        <div className="rightBtn1">
          <div
            className={iconType === 'smile' ? 'emojiIcon' : 'keyBoardIcon'}
            onClick={handleExpression}
          ></div>
          <div
            className="moreActionIcon"
            onClick={handleMoreActionSwitch}
          ></div>
        </div>
      )}
      {sendBtnSwitch && !isRobot && (
        <div className="rightBtn3">
          <div
            className={iconType === 'smile' ? 'emojiIcon' : 'keyBoardIcon'}
            onClick={handleExpression}
          ></div>
          <div className="sendBtn" onClick={sendMsg}>
            发送
          </div>
        </div>
      )}
    </div>
  );
};

export default forwardRef(TextAreaItem);
