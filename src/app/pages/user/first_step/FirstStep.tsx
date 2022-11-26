import React from 'react';
import Title from '../../../components/title/title';
import Progress from '../../../components/progress/progress';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';
import UserLayout from '../../../layout/user/UserLayout';

function FirstStep() {
  return (
    <UserLayout>
      <Title style={{ marginBottom: 10 }}>Шаг 1/3</Title>
      <Progress step={1} />
      <div className="description" style={{ marginBottom: 22 }}>
        Заполни <span>личные данные</span>:
      </div>
      <div className="description" style={{ marginBottom: 22 }}>
        И выбери <span>программу подготовки</span>, которая тебе интересна:
      </div>
      <Button name="Дальше" to="/second" icon={<CgArrowLongRight />} />
    </UserLayout>
  );
}

export default FirstStep;
