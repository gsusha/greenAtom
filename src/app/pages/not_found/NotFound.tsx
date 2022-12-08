import React from 'react';
import Subtitle from '../../components/title/subtitle';
import GreenLabLogo from '../../assets/images/greenlab_logo.svg';
import RosatomLogo from '../../assets/images/rosatom_logo.svg';
import './styles.scss';

function NotFound() {
  return (
    <div className="not-found-wrapper">
      <a href="https://edu.greenatom.ru/">
        <img src={GreenLabLogo} alt="Green Lab Logo" />
      </a>
      <div className="not-found-center">
        <div className="not-found-number">
          4<span>0</span>4
        </div>
        <Subtitle>Такой страницы не существует :(</Subtitle>
      </div>
      <img src={RosatomLogo} alt="Rosatom Logo" />
    </div>
  );
}

//TODO: сделать компонент для ссылок по лого

export default NotFound;
