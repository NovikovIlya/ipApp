import React, { useEffect, useState } from 'react';

import styles from './MainPage.module.scss';
import { useGetIpQuery, productApi } from '../store/infoIpData';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/redux';
import { useAppSelector } from '../store/redux';
import sliceId, { addItem, addFavorites,deleteItem } from '../store/sliceId';
import { addAnim } from '../store/sliceId';
import Favorite from './Favorite';

function MainPage() {
  const [arg, setArg] = useState('');
  const { data, isLoading, error } = useGetIpQuery(arg);
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const animaValue = useAppSelector((state) => state.sliceId.anim);
  const navigate = useNavigate();
  const valueId = useAppSelector((state) => state.sliceId.value);
  const favorites = useAppSelector((state) => state.sliceId.favorites);

  const handleInput = (e) => {
    const text = e.target.value;
    dispatch(addItem(text));
    // setValue(text);
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
  const favorite = () => {
    const text = valueId;
    dispatch(addFavorites(text));
    console.log('111', favorites);
    // setValue('')
    dispatch(deleteItem())

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
          value={valueId}
          placeholder="Впиши"
        />
        <button className={styles.otherIp__btn} onClick={otherIp}>
          Узнать другую тайну!
        </button>
        <button className={styles.otherIp__btn} onClick={favorite}>
          Добавить в избронное
        </button>
      </div>
      <div className={styles.favorite}>
        <h1 className={styles.favorite__head}>Избранное</h1>
        <div>
          {favorites.map((favorite) => (
            <div  key={favorite.id}>
              <Favorite name={favorite.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { MainPage };
