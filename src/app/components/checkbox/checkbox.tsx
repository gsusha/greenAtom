import React, { ChangeEventHandler, useState } from 'react';
import './styles.scss';

interface IProps {
  id: number;
  children: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox(props: IProps) {
  const [isActive, setActive] = useState(false);

  return (
    <label
      htmlFor={props.id.toString()}
      className={'checkbox ' + (isActive ? 'active' : '')}
      onClick={() => setActive(!isActive)}
    >
      {props.children}
      <input
        id={props.id.toString()}
        name={props.id.toString()}
        value={props.children}
        onChange={props.onChange}
        type="checkbox"
      />
    </label>
  );
}
