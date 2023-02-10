'use client';

import { memo, useState } from 'react';
import InfoCard from './InfoCard';
import PlatesOptions from './PlatesOptions';
import Plates from './Plates';

function Home() {
  const [selected, setSelected] = useState(1);
  const [angle, setAngle] = useState(0);
  return (
    <div className="w-screen max-w-full">
      <Plates selected={selected} angle={angle} />
      <div className="flex justify-between w-full px-6 mt-16">
        .
        <InfoCard />
      </div>
      <PlatesOptions
        selected={selected}
        setSelected={setSelected}
        angle={angle}
        setAngle={setAngle}
      />
    </div>
  );
}

export default memo(Home);
