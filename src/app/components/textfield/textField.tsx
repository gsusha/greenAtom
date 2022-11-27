import React, { ChangeEventHandler } from 'react';
import './styles.scss';

interface Props {
  id?: string;
  type?: string;
  children?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function TextField(props: Props) {
  return <input type={props.type} placeholder={props.children} onChange={props.onChange} />;
}
