import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../App.module.scss';
import gif from '../image_processing20210520-17249-12o8rdz.gif';
import { useGetIpQuery, productApi } from '../store/infoIpData';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import sliceId from '../store/sliceId';
import { addItem } from '../store/sliceId';
import {addAnim} from '../store/sliceId';

interface fetchType {
  data: {
    ip: string;
  };
}

function MainPage() {
  const [arg, setArg] = useState('');
  const { data, isLoading, error } = useGetIpQuery(arg);
  // const {data2,isLoading2,error2} = useGetIpQuery('1111')
  const [myIp, setMyIp] = useState<string>('');
  const [animated, setAnimated] = useState<boolean>(false);
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const valueId = useSelector((state:any)=>state.sliceId.value)
  const animaValue = useSelector((state:any)=>state.sliceId.anim)

  useEffect(() => {
    fetchMyIp();
  }, []);

  const handleInput = (e) => {
    const text = e.target.value;
    dispatch(addItem(text))
    setValue(text);
  };

  const fetchMyIp = async () => {
    const data2: fetchType = await axios.get('https://api.ipify.org/?format=json');
    console.log(data2.data.ip);
    setMyIp(data2.data.ip);
  };

  const toogleAnimated = () => {
    setAnimated((prev) => !prev);
    fetchMyIp();
    setArg('');
  };
  const otherIp = () => {
    setArg(value);
  };

  const anima = ()=>{
    dispatch(addAnim())
  }

  if (!data) {
    return <div>Идет загрузка...</div>;
  }

  return (
    <div className="App">
      {/* {animated === false ? (
        <img
          className={styles.img__gadalka}
          src="https://i.ibb.co/DK4Twt1/image-processing20210520-17249-12o8rdz.gif"
          alt=";c"
        />
      ) : (
        <img className={styles.img__gadalka} src={gif} alt=";cc" />
      )} */}

      <button onClick={toogleAnimated}>Узнать тайну своего ip!</button>
      <input onChange={handleInput} value={value} placeholder="Впиши" />
      <Link onClick={anima} to='pageip'>переход</Link>
      <button onClick={otherIp}>Узнать другую тайну!</button>
      <div>Ваш IP: {myIp}</div>
      <div>{data.country}</div>
    </div>
  );
}

export  {MainPage};
// Добавить слайт с инфой об надписи
