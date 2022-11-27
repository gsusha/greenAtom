import React, { useEffect, useState } from 'react';
import Title from '../../../components/title/title';
import Progress from '../../../components/progress/progress';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';
import UserLayout from '../../../layout/user/UserLayout';
import Question from '../../../components/question/question';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/loader/loader';
import { createPerson } from '../first_step/store/firstSlice';

function SecondStep() {
  const dispatch = useAppDispatch();
  const params = useParams() as { id: string };

  const [loading, setLoading] = useState(true);
  const [noPerson, setNoPerson] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const person = useAppSelector(({ toSecond }) => toSecond.person);

  const eventId = new URLSearchParams(window.location.search).get('id');
  console.log(eventId);
  const inviterId = new URLSearchParams(window.location.search).get('inviterId');
  console.log(inviterId);

  useEffect(() => {
    if (person.id) {
      setLoading(true);
      dispatch(createPerson(person.id))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .then((action) => !action.payload && setNoPerson(true))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, params]);

  if (loading) {
    return <Loader />;
  }

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
      <Button to={`/form/third?id=${eventId}&inviterId=${inviterId}`} icon={<CgArrowLongRight />} marginTop={50}>
        Дальше
      </Button>
    </UserLayout>
  );
}

export default SecondStep;
