import './styles.scss';
import React from 'react';

interface Props {
  children: string;
}

function Title({ children }: Props) {
  return <div className="title">{children}</div>;
}

export default Title;
