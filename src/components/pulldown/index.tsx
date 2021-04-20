import React, { useRef, useEffect, useState, useContext } from 'react';
import NoMore from './noMore';
import Loading from './loading';
import styles from './index.less';
// 待去掉
import ChatRoomContext from '@/common/utils/context/globalContext';

interface Ref {
  current: HTMLElement;
}
type useStateBoolProType = [Boolean, Function];
type useStateStringProType = [String, Function];
type useStateNumberProType = [Number, Function];

const PullDown = (props) => {
  const scrollBottomRef: Ref = useRef(null);
  const pullDownRef: Ref = useRef(null);
  const pullDownContentRef: Ref = useRef(null);
  const { messages } = useContext(ChatRoomContext);

  const [isLoadingShow, setIsLoadingShow]: useStateBoolProType = useState(false);
  const [isLoadingMsg, setIsLoadingMsg]: useStateBoolProType = useState(false);
  const [isNoMoreShow, setIsNoMoreShow]: useStateBoolProType = useState(false);
  const [hasNothing, SetHasNothing]: useStateBoolProType = useState(false);
  const [
    pullDownContentScrollHeight,
    setPullDownContentScrollHeight,
  ]: useStateNumberProType = useState(0);

  useEffect(() => {
    if (isLoadingMsg && pullDownContentScrollHeight) {
      pullDownRef.current.scrollTop =
        pullDownRef.current.scrollHeight - pullDownContentScrollHeight;
      setIsLoadingMsg(false);
      return;
    }
    scrollBottomRef.current.scrollIntoView();
  }, [messages.length]);

  const onScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e?.target;
    setPullDownContentScrollHeight(scrollHeight);
    setIsLoadingShow(
      pullDownContentRef.current.scrollHeight <= clientHeight ? false : true,
    );
    if (scrollTop <= 25 && scrollHeight !== clientHeight && !isLoadingMsg) {
      pullDownRef.current.scrollTop = 0;
      setIsLoadingMsg(true);
      // this.getMessageList();
    }
  };

  return (
    <div className={styles.pullDown} ref={pullDownRef} onScroll={onScroll}>
      <div className="pullDownContent" ref={pullDownContentRef}>
        {isLoadingShow && !hasNothing && <Loading />}
        {isNoMoreShow && <NoMore />}
       
        {props.children}
        <div
          ref={scrollBottomRef}
          className="scrollBottomRef"
          style={{ clear: 'both', float: 'left' }}
        ></div>
      </div>
    </div>
  );
};

export default PullDown;
