import React, { useState } from 'react';
import { useFetchCityQuery, useGetIpQuery } from '../store/infoIpData';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './PageIp.module.scss';

const PageIp = () => {
  const valueId = useSelector((state: any) => state.sliceId.value);
  const { data, isError, isLoading } = useGetIpQuery(valueId);
  const city = data ? data.city : '';
  const { data: dataCity } = useFetchCityQuery(city);

  if (!data) {
    return <div>Идет загрузка</div>;
  }
  if (isError) {
    return <div>Есть ошибка</div>;
  }
  if (isLoading) {
    return <div>Идет загрзочка</div>;
  }

  const imageCity = dataCity?.results[0]?.links.download;

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.item_link}>
          <Link className={styles.item_link_item} to="/">
            Назад
          </Link>
        </div>

        {data.status !== 'fail' && (
          <>
            <div className={styles.item_value}>
              <div className={styles.item_value_item}>value:{valueId}</div>
              <div className={styles.item_ip}>IP: {data.query}</div>
              <div className={styles.item_country}>Страна: {data.country}</div>
              <div className={styles.item_reg}>Регион: {data.regionName}</div>
              <div className={styles.item_city}>Город: {data.city}</div>
              <div className={styles.item_index}>Индекс: {data.zip}</div>
              <div className={styles.item_prov}>Провайдер: {data.isp}</div>
              {/* <div>{dataCity}</div> */}
              <img className={styles.item_img} src={imageCity} />
            </div>
          </>
        )}
        <div>{data.status === 'fail' && 'Введен некорректный ip'}</div>
      </div>
    </div>
  );
};

export { PageIp };
