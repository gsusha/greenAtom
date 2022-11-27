import './styles.scss';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: string;
  to?: string;
  icon?: ReactNode;
  marginTop?: number;
  onClick?: () => void;
}

function Button({ children, to, icon, marginTop }: Props) {
  if (to) {
    return (
      <div className="button-wrapper" style={{ marginTop: marginTop }}>
        <Link to={to} style={{ textDecoration: 'none' }}>
          <div className="button">
            {children}
            <div>{icon}</div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="button-wrapper" style={{ marginTop: marginTop }}>
        <div className="button">
          {children}
          <div>{icon}</div>
        </div>
      </div>
    );
  }
}

export default Button;
