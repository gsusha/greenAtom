import * as React from 'react';
import AdminLayout from '../../../layout/admin/AdminLayout';
import Header from '../../../components/header/Header';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailEvent } from '../../user/main/store/mainSlice';
import Loader from '../../../components/loader/loader';
import Title from '../../../components/title/title';
import { formatDate } from '../../../utils/formatTime';
import './styles.scss';

function EventDetail() {
  const dispatch = useAppDispatch();
  const params = useParams() as { id: string };

  const [loading, setLoading] = useState(true);
  const [noEvent, setNoEvent] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const event = useAppSelector(({ eventDetail }) => eventDetail.event);

  const eventId = new URLSearchParams(window.location.search).get('id');

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
      <Title style={{ marginBottom: 14 }}>{event.name}</Title>

      <div className="event-stat">
        <div className="event-stat-top">
          <div className="event-date">{formatDate(event.date)}</div>
          <div className="event-stat-points">
            <div className="event-stat-point">
              <div className="event-stat-point-circle" />
              <div>n участников</div>
            </div>
            <div className="event-stat-point">
              <div className="event-stat-point-circle blue" />
              <div> n вовлечённых</div>
            </div>
          </div>
        </div>
        <div className="event-stat-bottom">
          <div>
            Кол-во открытий ссылки: <span>n</span>
          </div>
          <div>Конверсия: n</div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default EventDetail;
