import React from 'react';
import Subtitle from '../title/subtitle';
import greenLabLogo from '../../assets/images/greenlab_logo.svg';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

interface Props {
  logo?: boolean;
  children: string;
}

function Header({ logo, children }: Props) {
  const navigate = useNavigate();

  const getLogo = () => {
    if (logo) {
      return <img src={greenLabLogo} alt="img" width="87px" height="30px" />;
    } else {
      return (
        <div onClick={() => navigate(-1)}>
          <FiChevronLeft size={30} />
        </div>
      );
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
