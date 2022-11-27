import React from 'react';
import './styles.scss';

interface Props {
  type?: string;
  children?: string;
}

export default function TextField(props: Props) {
  return <input type={props.type} placeholder={props.children} />;
}
