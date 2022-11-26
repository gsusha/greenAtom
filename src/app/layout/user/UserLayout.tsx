import * as React from 'react';
import { ReactNode } from 'react';
import './style.scss';

interface Props {
  children?: ReactNode;
}

function UserLayout({ children }: Props) {
  return (
    <div className='user-layout'>
      {children}
    </div>
  );
}

export default UserLayout;
