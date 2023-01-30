import { memo } from 'react';
import InfoCard from './InfoCard';
import PlatesOptions from './PlatesOptions';

function Home() {
  return (
    <div className="w-screen max-w-full">
      <div className="flex justify-between w-full px-6 mt-16">
        .
        <InfoCard />
      </div>
      <PlatesOptions />
    </div>
  );
}

export default memo(Home);
