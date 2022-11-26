import React from 'react';
import Title from '../../../components/title/title';
import Progress from '../../../components/progress/progress';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';

function ThirdStep() {
  return (
    <div>
      <Title style={{ marginBottom: 10 }}>Шаг 3/3</Title>
      <Progress step={3} />
      <div className="description" style={{ marginBottom: 22 }}>
        Заполни <span>личные данные</span>:
      </div>
      <Button name="Отправить" to="/end" icon={<CgArrowLongRight />} />
    </div>
  );
}

export default ThirdStep;
