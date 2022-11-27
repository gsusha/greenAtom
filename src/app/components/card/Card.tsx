import React, { CSSProperties, ReactNode } from 'react';
import './styles.scss';

interface Props {
  style?: CSSProperties;
  children: ReactNode;
}

function Card({ style, children }: Props) {
  return (
    <div className="card-wrapper" style={style}>
      {children}
    </div>
  );
}

export default Card;
