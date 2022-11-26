import * as React from 'react';
import Title from '../../../components/title/title';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';
import logo from '../../../assets/images/greenlab_logo.svg';
import './styles.scss';

function UserMain() {
  return (
    <div className="user-main-wrapper">
      <img src={logo} alt="IT стажировки Росатома" />
      <Title style={{ marginBottom: 22, alignSelf: 'start' }}>Test title</Title>
      <div className="description" style={{ marginBottom: 44 }}>
        Заполни форму и получи возможность начать карьеру в <span>крупной цифровой компании </span>
        ещё во время обучения в университете
      </div>

      <Button name="Начать" to="/first" icon={<CgArrowLongRight />} />
    </div>
  );
}

export default UserMain;
