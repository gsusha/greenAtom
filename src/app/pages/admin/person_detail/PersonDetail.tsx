import * as React from 'react';
import AdminLayout from '../../../layout/admin/AdminLayout';
import Header from '../../../components/header/Header';
import Title from '../../../components/title/title';
import './styles.scss';

function PersonDetail() {
  return (
    <AdminLayout>
      <Header>О мероприятии</Header>
      <Title style={{ marginBottom: 22 }}>Zalupa</Title>
    </AdminLayout>
  );
}

export default PersonDetail;
