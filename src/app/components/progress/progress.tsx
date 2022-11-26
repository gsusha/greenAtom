import React from 'react';
import './styles.scss';

interface Props {
  step: number;
}

function Progress({ step }: Props) {
  return (
    <div className="progress">
      <div className="progress-item active" />
      <div className={'progress-item' + (step > 1 ? ' active' : '')} />
      <div className={'progress-item' + (step > 2 ? ' active' : '')} />
    </div>
  );
}

export default Progress;
