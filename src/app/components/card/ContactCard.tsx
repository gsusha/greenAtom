import React, { JSXElementConstructor, ReactNode } from 'react';
import './Card';
import Card from './Card';

interface Props {
  icon: ReactNode;
  content: string;
}

function ContactCard({ icon, content }: Props) {
  return (
    <Card style={{ justifyContent: 'center' }}>
      {icon}
      <div style={{ marginLeft: 8 }}>{content}</div>
    </Card>
  );
}

export default ContactCard;
