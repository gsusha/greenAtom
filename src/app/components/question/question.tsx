import React from 'react';
import './styles.scss';
import reactStringReplace from 'react-string-replace';

import { Task } from '../../models/task';
import Checkbox from '../checkbox/checkbox';
import Radio from '../radio/radio';
import TextField from '../textfield/textField';

interface IProps {
  children: Task;
}

export default function Question({ children }: IProps) {
  const variants = [children.variant1, children.variant2, children.variant3, children.variant4]
    .filter((e) => e)
    .map((e: string | undefined) => e ?? '');

  const fillableTitle = reactStringReplace(children.title, '...', (match) => <TextField />);

  return ['radio', 'checkbox'].includes(children.description) ? (
    <div className={'question'}>
      <p className={'title'}>{children.title}</p>
      {variants.map((e: string, i) =>
        children.description === 'radio' ? (
          <Radio key={i} id={children.id.toString()}>
            {e}
          </Radio>
        ) : (
          <Checkbox key={i} id={children.id.toString()}>
            {e}
          </Checkbox>
        )
      )}
    </div>
  ) : (
    <div className={'question'}>
      <p className={'title'}>{children.description == 'simple' ? children.title : fillableTitle}</p>
      {children.description == 'simple' ? <TextField /> : <></>}
    </div>
  );
}
