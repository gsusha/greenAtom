import * as React from 'react';
import { useEffect, useState } from 'react';
import Title from '../../../components/title/title';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';
import logo from '../../../assets/images/greenlab_logo.svg';
import './styles.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useParams } from 'react-router-dom';
import { getDetailEvent } from './store/mainSlice';
import imgStart from '../../../assets/images/user_start.png';
import UserLayout from '../../../layout/user/UserLayout';
import Loader from '../../../components/loader/loader';

function UserMain() {
  const dispatch = useAppDispatch();
  const params = useParams() as { id: string };

  const [loading, setLoading] = useState(true);
  const [noPromo, setNoPromo] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const event = useAppSelector(({ eventDetail }) => eventDetail.event);

  const eventId = '2';

  useEffect(() => {
    if (eventId) {
      setLoading(true);
      dispatch(getDetailEvent(eventId))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .then((action) => !action.payload && setNoPromo(true))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, params]);

  if (loading) {
    return <Loader />;
  }

  return (
    <UserLayout img={imgStart}>
      <div className="user-main-wrapper">
        <img src={logo} alt="IT стажировки Росатома" />
        <Title style={{ marginBottom: 22, alignSelf: 'start' }}>{event ? event.name : ''}</Title>
        <div className="description" style={{ marginBottom: 44 }}>
          Заполни форму и получи возможность начать карьеру в <span>крупной цифровой компании </span>
          ещё во время обучения в университете
        </div>

        <Button to="/first" icon={<CgArrowLongRight />}>
          Начать
        </Button>
      </div>
    </UserLayout>
  );
}

export default UserMain;
