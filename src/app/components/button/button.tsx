import './styles.scss';
import React, { ReactNode } from 'react';

interface Props {
  name: string;
  href: string;
  icon?: ReactNode;
}

function Button({ href, name, icon }: Props) {
  return (
    <div className="button-wrapper">
      <a className="button" href={href}>
        {name}
        <div>{icon}</div>
      </a>
    </div>
  );
}

export default Button;
