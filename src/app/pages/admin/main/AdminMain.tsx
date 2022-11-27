import * as React from 'react';
import AdminLayout from '../../../layout/admin/AdminLayout';
import Title from '../../../components/title/title';
import Header from '../../../components/header/Header';
import EventCard from '../../../components/card/EventCard';

function AdminMain() {
  return (
    <AdminLayout>
      <Header logo={true}>Админ-панель</Header>
      <Title style={{ marginBottom: 44 }}>Мероприятия</Title>
      
    </AdminLayout>
  );
}

export default AdminMain;
