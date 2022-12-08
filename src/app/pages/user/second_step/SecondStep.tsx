import React from 'react';
import Title from '../../../components/title/title';
import Progress from '../../../components/progress/progress';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';
import UserLayout from '../../../layout/user/UserLayout';
import Question from '../../../components/question/question';
import { getPath } from '../../../utils/getParams';

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
          id: 1,
          title:
            'В 2020 году команда Гринатома завоевала 5 медалей в отраслевом чемпионате проф. мастерства ... Skills',
          description: 'fill',
          answer: 'World',
          specialization: '-',
        }}
      </Question>
      <Question>
        {{
          id: 2,
          title: 'Гринатом - ИТ интегратор какой госкорпорации?',
          description: 'radio',
          answer: 'Росатом',
          specialization: '-',
          variant1: 'Роснано',
          variant2: 'Росатом',
          variant3: 'Роспатент',
          variant4: 'Росстат',
        }}
      </Question>
      <Question>
        {{
          id: 3,
          title:
            'В 2014 были сформированы единые корпоративные ценности компании. Выберите какой из перечисленных вариантов туда входят.',
          description: 'checkbox',
          answer: 'Все вышеперечисленное',
          specialization: '-',
          variant1: 'Уважение',
          variant2: 'Безопасность',
          variant3: 'Эффективность',
          variant4: 'Все вышеперечисленное',
        }}
      </Question>
      <Button to={'/form/third' + getPath(window)} icon={<CgArrowLongRight />} marginTop={50}>
        Дальше
      </Button>
    </UserLayout>
  );
}

export default SecondStep;
