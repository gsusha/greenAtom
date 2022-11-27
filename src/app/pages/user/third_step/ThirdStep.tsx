import React from 'react';
import Title from '../../../components/title/title';
import Progress from '../../../components/progress/progress';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';
import UserLayout from '../../../layout/user/UserLayout';
import Question from '../../../components/question/question';

function ThirdStep() {
  return (
    <UserLayout>
      <Title style={{ marginBottom: 10 }}>Шаг 3/3</Title>
      <Progress step={3} />
      <div className="description" style={{ marginBottom: 22 }}>
        Теперь немного по технической части!:
      </div>
      <Question>
        {{
          id: 0,
          title: 'string string',
          description: 'simple',
          answer: 'string',
          specialization: 'string',
        }}
      </Question>
      <Question>
        {{
          id: 0,
          title: 'string ... string',
          description: 'fill',
          answer: 'string',
          specialization: 'string',
        }}
      </Question>
      <Button to="/end" icon={<CgArrowLongRight />} marginTop={50}>
        Отправить
      </Button>
    </UserLayout>
  );
}

export default ThirdStep;
