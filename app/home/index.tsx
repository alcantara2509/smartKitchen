'use client';

import { memo, useState } from 'react';
import InfoCard from './InfoCard';
import PlatesOptions from './PlatesOptions';
import Plates from './Plates';
import Navbar from '../Components/Navbar';
import Title from './Title';
import Footer from '../Components/Footer';
import './styles.css';

function Home() {
  const [selected, setSelected] = useState(1);
  const [angle, setAngle] = useState(0);
  return (
    <section className="homeWrapper backgroundGray">
      <Plates angle={angle} />
      <Navbar />
      <Title selected={selected} />
      <div className="flex justify-end w-full mt-16">
        <InfoCard selected={selected} />
      </div>
      <PlatesOptions
        selected={selected}
        setSelected={setSelected}
        angle={angle}
        setAngle={setAngle}
      />
      <div className="flex justify-center w-full mt-40">
        <Footer />
      </div>
    </section>
  );
}

export default memo(Home);
