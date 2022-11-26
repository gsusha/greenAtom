import React from 'react';
import Subtitle from '../title/subtitle';
import greenLabLogo from '../../assets/images/greenlab_logo.svg';

interface Props {
  logo?: boolean;
  children: string;
}

function Header({ logo, children }: Props) {
  const getLogo = () => {
    if (logo) {
      return <img src={greenLabLogo} alt="img" width="87px" height="30px" />;
    }
  };

  return (
    <div style={{ marginBottom: 44, display: 'flex', justifyContent: 'space-between' }}>
      {getLogo()}
      <Subtitle>{children}</Subtitle>
    </div>
  );
}

export default Header;
