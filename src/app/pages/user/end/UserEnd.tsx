import * as React from 'react';
import Title from '../../../components/title/title';
import { FaShareAlt } from 'react-icons/fa';
import logo from '../../../assets/images/rosatom_logo.svg';
import imgEnd from '../../../assets/images/user_end.jpg';
import UserLayout from '../../../layout/user/UserLayout';
import '../main/styles.scss';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  VKIcon,
  VKShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import Constants from '../../../utils/constants';
import getIds from '../../../utils/getIds';

function UserEnd() {
  // TODO: generate
  const shareUrl = Constants.API_URL + '/form' + getIds(window);

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
          <div className={'share'}>
            <span className={'share__title'}>Поделиться:</span>
            <div className={'share__buttons'}>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={48} round />
              </FacebookShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={48} round />
              </WhatsappShareButton>
              <VKShareButton url={shareUrl}>
                <VKIcon size={48} round />
              </VKShareButton>
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={48} round />
              </TelegramShareButton>
              <EmailShareButton url={shareUrl}>
                <EmailIcon size={48} round />
              </EmailShareButton>
            </div>
            <p className={'share__desc'}>
              Чем больше друзей заполнят форму по вашей ссылке, тем выше вероятность получить приглашение!
            </p>
          </div>
        </div>
        <div>
          <img src={logo} alt="Rosatom logo" style={{ margin: 0 }} />
        </div>
      </div>
    </UserLayout>
  );
}

export default UserEnd;
