import React, { CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  children: string;
}

function Subtitle({ style, children }: Props) {
  return (
    <div className="subtitle" style={style}>
      {children}
    </div>
  );
}

export default Subtitle;
