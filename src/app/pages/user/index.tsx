import * as React from 'react';
import Title from '../../components/title/title';
import Button from '../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';

function UserMain() {
  return (
    <div>
      <Title style={{ marginBottom: 22 }}>Test title</Title>
      <div style={{ marginBottom: 44 }}>
        Заполни форму и получи возможность начать карьеру в <span className="accent">крупной цифровой компании</span>{' '}
        ещё во время обучения в университете
      </div>
      <Button href="#" name="Начать" icon={<CgArrowLongRight />} />
    </div>
  );
}

export default UserMain;
