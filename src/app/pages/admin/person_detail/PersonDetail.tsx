import React from 'react';
import './styles.scss';
import AdminLayout from '../../../layout/admin/AdminLayout';
import Header from '../../../components/header/Header';
import Title from '../../../components/title/title';
import ContactCard from '../../../components/card/ContactCard';
import { TbBrandTelegram, TbPhone } from 'react-icons/tb';

function PersonDetail() {
  // const dispatch = useAppDispatch();
  // const params = useParams() as { id: string };
  //
  // const [loading, setLoading] = useState(true);
  // const [noPerson, setNoPerson] = useState(false);
  //
  // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // // @ts-ignore
  //
  // const eventId = new URLSearchParams(window.location.search).get('id');
  //
  // useEffect(() => {
  //   if (eventId) {
  //     setLoading(true);
  //     dispatch(getDetailEvent(eventId))
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-ignore
  //       .then((action) => !action.payload && setNoPerson(true))
  //       .finally(() => setLoading(false));
  //   } else {
  //     setLoading(false);
  //   }
  // }, [dispatch, params]);
  //
  // if (loading) {
  //   return <Loader />;
  // }

  const person = {
    id: '1',
    name: 'Иван Петров',
    phone: '89005784362',
    telegram: '@ivan',
    specialization: 'Case Lab JavaScript',
    event_id: '2',
    inviter_id: '2',
    tasks: [],
    answers: [],
  };

  const getInviter = () => {
    if (person.inviter_id != null && person.inviter_id != '') return <div>Вовлёк {person.inviter_id}</div>;
  };

  //TODO: Получение имени инвайтера

  return (
    <AdminLayout>
      <Header>О пользователе</Header>
      <Title style={{ marginBottom: 12 }}>{person.name}</Title>

      <div className="person-top">
        <div style={{ marginBottom: 6 }}>{person.specialization}</div>
        {getInviter()}
      </div>

      <div className="person-contacts">
        <div className="person-contacts-title">Контакты:</div>
        <div className="person-contacts-card">
          <ContactCard icon={<TbPhone />} content={person.phone} />
          <ContactCard icon={<TbBrandTelegram />} content={person.telegram} />
        </div>
      </div>

      <div className="person-answers">
        <div>Ответы на вопросы:</div>
      </div>
    </AdminLayout>
  );
}

export default PersonDetail;
