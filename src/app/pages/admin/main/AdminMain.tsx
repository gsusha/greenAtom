import * as React from 'react';
import { useEffect, useState } from 'react';
import AdminLayout from '../../../layout/admin/AdminLayout';
import Title from '../../../components/title/title';
import Header from '../../../components/header/Header';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/loader/loader';
import { getEvents } from './store/eventsSlice';
import EventCard from '../../../components/card/EventCard';

function AdminMain() {
  const dispatch = useAppDispatch();
  const params = useParams() as { id: string };

  const [loading, setLoading] = useState(true);
  // const [noEvents, setNoEvents] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const events = useAppSelector(({ eventsList }) => eventsList.events);

  useEffect(() => {
    setLoading(true);
    dispatch(getEvents()).then(() => setLoading(false));
  }, [dispatch, params]);

  if (loading) {
    return <Loader />;
  }

  return (
    <AdminLayout>
      <Header logo={true}>Админ-панель</Header>
      <Title style={{ marginBottom: 44 }}>Мероприятия</Title>
      {events.map((e: { name: string; date: string }, i: React.Key | null | undefined) => {
        return <EventCard key={i} name={e.name} date={e.date} />;
      })}
    </AdminLayout>
  );
}

export default AdminMain;
