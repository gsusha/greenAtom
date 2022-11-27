import * as React from 'react';
import Title from '../../../components/title/title';
import Button from '../../../components/button/button';
import { FaShareAlt } from 'react-icons/fa';
import logo from '../../../assets/images/rosatom_logo.svg';
import imgEnd from '../../../assets/images/user_end.jpg';
import UserLayout from '../../../layout/user/UserLayout';

function UserEnd() {
  return (
    <UserLayout img={imgEnd}>
      <div className="user-main-wrapper" style={{ justifyContent: 'space-between' }}>
        <div style={{ marginBottom: 22 }}>
          <Title style={{ marginBottom: 22, alignSelf: 'start' }}>Отправлено!</Title>
          <div className="description" style={{ marginBottom: 12, alignSelf: 'start' }}>
            Спасибо за заполнение 💚
          </div>
          <div className="description" style={{ marginBottom: 44, alignSelf: 'start' }}>
            Скорее поделись формой с друзьями, чтобы и они получили возможность попасть на{' '}
            <span>оплачиваемую стажировку</span> в нашей компании!
          </div>

          <Button to="/first" icon={<FaShareAlt />}>
            Поделиться
          </Button>
        </div>
        <div>
          <img src={logo} alt="Rosatom logo" style={{ margin: 0 }} />
        </div>
      </div>
    </UserLayout>
  );
}

export default UserEnd;
