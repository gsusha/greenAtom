import React, { useState } from 'react';
import './styles.scss';

interface IProps {
  id: string;
  children: string;
}

export default function Radio(props: IProps) {
  // TODO: на уровень выше и индекс
  const [isActive, setActive] = useState(false);

  return (
    <div className={`radio ${isActive ? 'active' : ''}`} onClick={() => setActive(!isActive)}>
      <label htmlFor={props.id}>{props.children}</label>
      <input id={props.id} name={props.id} type={'radio'} />
    </div>
  );
}
