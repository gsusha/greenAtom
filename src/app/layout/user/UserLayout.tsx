import * as React from 'react';
import { ReactNode } from 'react';
import './styles.scss';

interface Props {
  img?: string;
  children?: ReactNode;
}

function UserLayout({ img, children }: Props) {
  const getImg = () => {
    if (img) {
      return (
        <div className="user-layout-img">
          <img src={img} alt="img" />
        </div>
      );
    }
  };

  return (
    <div className="user-layout-wrapper">
      {getImg()}
      <div className="user-layout">{children}</div>
    </div>
  );
}

export default UserLayout;
