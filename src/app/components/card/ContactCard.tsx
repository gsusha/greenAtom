import React, { ReactNode } from 'react';
import './Card';
import Card from './Card';

interface Props {
  icon: ReactNode;
  content: string;
}

function ContactCard({ icon, content }: Props) {
  return (
    <Card style={{ justifyContent: 'center', marginBottom: 10 }}>
      {icon}
      <div style={{ marginLeft: 8 }}>{content}</div>
    </Card>
  );
}

export default ContactCard;
