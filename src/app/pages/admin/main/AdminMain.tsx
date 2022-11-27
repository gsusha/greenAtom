import * as React from 'react';
import AdminLayout from '../../../layout/admin/AdminLayout';
import Title from '../../../components/title/title';
import Header from '../../../components/header/Header';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailEvent } from '../../user/main/store/mainSlice';
import Loader from '../../../components/loader/loader';
import { getEvents } from './store/eventsSlice';

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
    </AdminLayout>
  );
}

export default AdminMain;
