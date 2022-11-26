import React from 'react';
import Title from '../../../components/title/title';
import Progress from '../../../components/progress/progress';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';

function SecondStep() {
  return (
    <div>
      <Title style={{ marginBottom: 10 }}>Шаг 2/3</Title>
      <Progress step={2} />
      <div className="description" style={{ marginBottom: 22 }}>
        Заполни <span>личные данные</span>:
      </div>
      <Button name="Дальше" to="/third" icon={<CgArrowLongRight />} />
    </div>
  );
}

export default SecondStep;
