import * as React from 'react';
import { useEffect, useState } from 'react';
import AdminLayout from '../../../layout/admin/AdminLayout';
import Header from '../../../components/header/Header';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useParams } from 'react-router-dom';
import { getDetailEvent } from '../../user/main/store/mainSlice';
import Loader from '../../../components/loader/loader';
import Title from '../../../components/title/title';
import { formatDate } from '../../../utils/formatTime';
import './styles.scss';
import PersonCard from '../../../components/card/PersonCard';
import { Person } from '../../../models';

function EventDetail() {
  const dispatch = useAppDispatch();
  const params = useParams() as { id: string };

  const [loading, setLoading] = useState(true);
  const [noEvent, setNoEvent] = useState(false);
  const [filter, setFilter] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const eventDetail = useAppSelector(({ eventDetail }) => eventDetail.event);
  const event = eventDetail.event;
  const members = eventDetail.person;
  const countOfOpens = eventDetail.statistic?.count;
  const conversion = ((members?.length / countOfOpens) * 100).toFixed(0);
  const invitedCount = members?.map((e: Person) => e.inviter_id).filter((e: string) => !!e).length;

  const eventId = new URLSearchParams(window.location.search).get('id');

  const handleClick = (id: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigate(`person?id=${id}`);
  };

  useEffect(() => {
    if (eventId) {
      setLoading(true);
      dispatch(getDetailEvent(eventId))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .then((action) => !action.payload && setNoEvent(true))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, params]);

  if (loading) {
    return <Loader />;
  }

  return (
    <AdminLayout>
      <Header>О мероприятии</Header>
      <Title style={{ marginBottom: 22 }}>{event.name}</Title>

      <div className="event-stat">
        <div className="event-stat-top">
          <div className="event-date">{formatDate(event.date)}</div>
          <div className="event-stat-points">
            <div className="event-stat-point">
              <div className="event-stat-point-circle" />
              <div>{members?.length} участников</div>
            </div>
            <div className="event-stat-point">
              <div className="event-stat-point-circle blue" />
              <div>{invitedCount} вовлечённых</div>
            </div>
          </div>
        </div>
        <div className="event-stat-bottom">
          <div>
            Кол-во открытий ссылки: <span>{countOfOpens}</span>
          </div>
          <div>Конверсия: {conversion}%</div>
        </div>
      </div>

      <div className="filter">
        <button className={'filter-btn ' + (!filter ? 'active' : '')} onClick={() => setFilter(false)}>
          Все
        </button>
        <button className={'filter-btn ' + (filter ? 'active' : '')} onClick={() => setFilter(true)}>
          Вовлечённые
        </button>
      </div>

      {members
        .filter((e: Person) => (filter ? !!e.inviter_id : true))
        .map((e: Person) => (
          <PersonCard key={e.id} isInvited={!!e.inviter_id} name={e.name} />
        ))}
    </AdminLayout>
  );
}

export default EventDetail;
