import React, { ReactNode } from 'react';
import './Card';
import Card from './Card';

interface Props {
  name: string;
  isInvited: boolean;
}

function PersonCard({ name, isInvited }: Props) {
  return (
    <Card style={{ marginBottom: 12 }}>
      <div>{name}</div>
      {isInvited ? <div className="card-invited" /> : ''}
    </Card>
  );
}

export default PersonCard;
