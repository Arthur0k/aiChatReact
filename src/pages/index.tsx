import React from 'react';
import styles from './index.less';
// import 'amfe-flexible';

interface IProps {
  children: React.ReactNode;
}

export default function IndexPage(props: IProps) {
  return (
    <div>
      <h1 className={styles.title}>{props.children}</h1>
    </div>
  );
}
