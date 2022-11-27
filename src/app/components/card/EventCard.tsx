import React from 'react';
import './Card';
import Card from './Card';

interface Props {
  name: string;
  date: string;
}

function EventCard({ name, date }: Props) {
  return (
    <Card style={{ marginBottom: 12 }}>
      <div>{name}</div>
      <div>{date}</div>
    </Card>
  );
}

export default EventCard;
