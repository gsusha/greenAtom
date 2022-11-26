import './styles.scss';
import React, { CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  children: string;
}

function Title({ style, children }: Props) {
  return (
    <div className="title" style={style}>
      {children}
    </div>
  );
}

export default Title;
