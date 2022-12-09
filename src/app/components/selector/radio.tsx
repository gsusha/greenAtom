import React, { ChangeEventHandler, useState } from 'react';
import './styles.scss';

interface IProps {
  id: number;
  children: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Radio(props: IProps) {
  const [isActive, setActive] = useState(false);

  return (
    <label
      htmlFor={props.children}
      className={'selector ' + (isActive ? 'active' : '')}
      onClick={() => setActive(!isActive)}
    >
      {props.children}
      <input
        id={props.children}
        name={props.id.toString()}
        value={props.children}
        onChange={props.onChange}
        type="radio"
      />
    </label>
  );
}
