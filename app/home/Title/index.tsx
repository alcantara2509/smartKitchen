import { memo, useState, useEffect } from 'react';
import './styles.css';

interface Params {
  selected: number;
}

function Title({ selected } : Params) {
  const [animate, setAnimate] = useState(0);

  useEffect(() => setAnimate(selected), [selected]);

  return (
    <article className="titleWrapper">
      <div className={`${animate % 2 ? "fadeIn" : "fadeOut"}`}>
        <p className="font-medium colorDarkGray">#{selected} Most loved dish</p>
        <h1 className="font-thin text-7xl colorDarkGray uppercase mt-2">
          Loren Ipsum
        </h1>
        <h1 className="font-black text-7xl colorDarkGray uppercase mt-2">
          Plate {selected}
        </h1>
        <p className="font-bold colorDarkGray mt-5">See more</p>
      </div>
    </article>
  );
}

export default memo(Title);
