import * as React from 'react';
import { ReactNode } from 'react';
import './styles.scss';

interface Props {
  children?: ReactNode;
}

function AdminLayout({ children }: Props) {
  return <div className="admin-layout">{children}</div>;
}

export default AdminLayout;
