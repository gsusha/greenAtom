// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

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
import getIds from '../../../utils/getIds';

function SecondStep() {
  const dispatch = useAppDispatch();
  const params = useParams() as { id: string };

  const [loading, setLoading] = useState(true);
  const [noPerson, setNoPerson] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const person = useAppSelector(({ toSecond }) => toSecond.person);
  const tasks = useAppSelector(({ toSecond }) => toSecond.tasks);

  const orgTasks = Array.from(tasks[0]);

  console.log(orgTasks);

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
  //
  // console.log(orgTasks.map();

  return (
    <UserLayout>
      <Title style={{ marginBottom: 10 }}>Шаг 2/3</Title>
      <Progress step={2} />
      <div className="description" style={{ marginBottom: 22 }}>
        А сейчас несколько вопросов о нашей компании 🤔:
      </div>
      {orgTasks.map((task, i) => (
        <Question key={i}>
          {{
            id: task.id,
            title: task.title,
            description: task.description,
            answer: task.answer,
            specialization: task.specialization,
            variant1: task.variant1,
            variant2: task.variant2,
            variant3: task.variant3,
            variant4: task.variant4,
          }}
        </Question>
      ))}
      <Button to={'/form/third' + getIds(window)} icon={<CgArrowLongRight />} marginTop={50}>
        Дальше
      </Button>
    </UserLayout>
  );
}

export default SecondStep;
