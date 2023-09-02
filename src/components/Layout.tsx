import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import gif from '../image_processing20210520-17249-12o8rdz.gif';
import styles from '../App.module.scss';
import { useSelector } from 'react-redux';

const Layout = () => {
  const [animated, setAnimated] = useState<boolean>(false);
  const anim = useSelector((state:any)=>state.sliceId.anim)
  return (
    <>
      <div>
        {anim === false ? (
          <img
            className={styles.img__gadalka}
            src="https://i.ibb.co/DK4Twt1/image-processing20210520-17249-12o8rdz.gif"
            alt=";c"
          />
        ) : (
          <img className={styles.img__gadalka} src={gif} alt=";cc" />
        )}
        <Outlet />
      </div>
    </>
  );
};

export { Layout };
