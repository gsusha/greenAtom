import React from 'react';
import Title from '../../../components/title/title';
import Progress from '../../../components/progress/progress';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';
import UserLayout from '../../../layout/user/UserLayout';

function ThirdStep() {
  return (
    <UserLayout>
      <Title style={{ marginBottom: 10 }}>Шаг 3/3</Title>
      <Progress step={3} />
      <div className="description" style={{ marginBottom: 22 }}>
        Заполни <span>личные данные</span>:
      </div>
      <Button to="/end" icon={<CgArrowLongRight />}>
        Отправить
      </Button>
    </UserLayout>
  );
}

export default ThirdStep;
