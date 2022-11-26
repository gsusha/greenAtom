import { Circles } from 'react-loader-spinner';
import * as React from 'react';

function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <Circles />
    </div>
  );
}

export default Loader;
