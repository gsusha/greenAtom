import * as React from 'react';
import { useEffect, useState } from 'react';
import AdminLayout from '../../../layout/admin/AdminLayout';
import Title from '../../../components/title/title';
import Header from '../../../components/header/Header';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../components/loader/loader';
import { getEvents } from './store/eventsSlice';
import EventCard from '../../../components/card/EventCard';
import { formatDate } from '../../../utils/formatTime';
import Button from '../../../components/button/button';
import { HiPlus } from 'react-icons/hi';

function AdminMain() {
  const dispatch = useAppDispatch();
  const params = useParams() as { id: string };
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  // const [noEvents, setNoEvents] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const events = useAppSelector(({ eventsList }) => eventsList.events);

  useEffect(() => {
    setLoading(true);
    dispatch(getEvents()).then(() => setLoading(false));
  }, [dispatch, params]);

  const handleClick = (id: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigate(`event?id=${id}`);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <AdminLayout>
      <Header logo={true}>Админ-панель</Header>
      <Title style={{ marginBottom: 44 }}>Мероприятия</Title>
      <div style={{ marginBottom: 44 }}>
        {events.map((e: { id: number; name: string; date: string }, i: React.Key | null | undefined) => {
          return (
            <div onClick={() => handleClick(e.id)}>
              <EventCard key={i} name={e.name} date={formatDate(e.date)} />
            </div>
          );
        })}
      </div>
      <Button icon={<HiPlus />} to={'event/new'}>
        Добавить
      </Button>
    </AdminLayout>
  );
}

export default AdminMain;
