import React from 'react';
import Title from '../../../components/title/title';
import Progress from '../../../components/progress/progress';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';
import UserLayout from '../../../layout/user/UserLayout';
import Question from '../../../components/question/question';

function SecondStep() {
  return (
    <UserLayout>
      <Title style={{ marginBottom: 10 }}>Шаг 2/3</Title>
      <Progress step={2} />
      <div className="description" style={{ marginBottom: 22 }}>
        А сейчас несколько вопросов о нашей компании 🤔:
      </div>
      <Question>
        {{
          id: 0,
          title: 'string1',
          description: 'checkbox',
          answer: 'string',
          specialization: 'string',
          variant1: 'string',
          variant2: 'undefined',
          variant3: 'string',
          variant4: 'string',
        }}
      </Question>
      <Question>
        {{
          id: 0,
          title: 'string2',
          description: 'radio',
          answer: 'string',
          specialization: 'string',
          variant1: 'string',
          variant2: undefined,
          variant3: 'string',
          variant4: 'string',
        }}
      </Question>
      <Button to="/third" icon={<CgArrowLongRight />} marginTop={50}>
        Дальше
      </Button>
    </UserLayout>
  );
}

export default SecondStep;
