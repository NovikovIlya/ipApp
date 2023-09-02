/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useGetIpQuery } from '../store/infoIpData';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PageIp = () => {
  // const [arg, setArg] = useState('');
 
  const valueId = useSelector((state:any)=>state.sliceId.value)
  const { data,isError} = useGetIpQuery(valueId);

  if (!data){
    return <div>Идет загрузка</div>
  }
  if (isError){
    return <div>Есть ошибка</div>
  }
  return (
    <div>
      <Link to='/'>Назад</Link>
      <div>value:{valueId}</div>
      <div>IP: {data.query}</div>
      <div>Страна: {data.country}</div>
      <div>Регион: {data.regionName}</div>
      <div>Город: {data.city}</div>
      <div>Индекс: {data.zip}</div>
      <div>Провайдер: {data.isp}</div>
      <div>{data.status === "fail" && 'Введен некорректный ip'}</div>
    </div>
  );
};

export  {PageIp};
