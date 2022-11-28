// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import './styles.scss';

interface IProps {
  id: string;
}

export default function Radio(props: IProps) {
  const [isActive, setActive] = useState(false);

  const [value, setState] = useState(null);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <label
      htmlFor={props.id}
      className={`radio ${isActive ? 'active' : ''}`}
      onClick={() => setActive(!isActive)}
      key={i}
    >
      <input {...field} id={props.id} value={value} name={props.id} type="radio" onChange={handleChange} />
    </label>
  );
}
