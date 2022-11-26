import './styles.scss';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  to: string;
  icon?: ReactNode;
}

function Button({ name, to, icon }: Props) {
  return (
    <div className="button-wrapper">
      <Link to={to} style={{ textDecoration: 'none' }}>
        <div className="button">
          {name}
          <div>{icon}</div>
        </div>
      </Link>
    </div>
  );
}

export default Button;
