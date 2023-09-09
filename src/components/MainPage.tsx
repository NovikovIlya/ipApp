import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './MainPage.module.scss';
import { useGetIpQuery, productApi } from '../store/infoIpData';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import sliceId, { addItem } from '../store/sliceId';

import { addAnim } from '../store/sliceId';

function MainPage() {
  const [arg, setArg] = useState('');
  const { data, isLoading, error } = useGetIpQuery(arg);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  // const valueId = useSelector((state: any) => state.sliceId.value);
  const animaValue = useSelector((state: any) => state.sliceId.anim);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const text = e.target.value;
    dispatch(addItem(text));
    setValue(text);
  };

  const otherIp = () => {
    if (value.length >= 1) {
      anima();
      navigate('pageip');
    } else {
      alert('мало');
      navigate('/');
      return;
    }
  };
  const myIpData = () => {
    if (animaValue === false) {
      dispatch(addAnim());
    }
    dispatch(addItem(''));
  };
  const anima = () => {
    if (animaValue === false) {
      dispatch(addAnim());
    }
  };

  if (!data) {
    return <div>Идет загрузка...</div>;
  }

  return (
    <div className="App">
      <div className={styles.myIp}>
      
          <Link className={styles['myIp__cihld']} to="pageip" onClick={myIpData}>
            Узнать тайну своего ip!
          </Link>
        
      </div>

      <div className={styles.otherIp}>
        <input
          className={styles.otherIp__input}
          onChange={handleInput}
          value={value}
          placeholder="Впиши"
        />
        <button className={styles.otherIp__btn} onClick={otherIp}>
          Узнать другую тайну!
        </button>
      </div>
    </div>
  );
}

export { MainPage };
