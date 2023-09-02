import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.scss';
import gif from './image_processing20210520-17249-12o8rdz.gif';
import { useGetIpQuery } from './store/infoIpData';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { MainPage } from './components/MainPage';
import { PageIp } from './components/PageIp';

interface fetchType {
  data: {
    ip: string;
  };
}

function App() {
  const [arg, setArg] = useState('');
  const { data, isLoading, error } = useGetIpQuery(arg);
  // const {data2,isLoading2,error2} = useGetIpQuery('1111')
  const [myIp, setMyIp] = useState<string>('');
  const [animated, setAnimated] = useState<boolean>(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetchMyIp();
  }, []);

  const handleInput = (e) => {
    const text = e.target.value;
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

  if (!data) {
    return <div>Идет загрузка...</div>;
  }

  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="pageip" element={<PageIp />} />
            <Route path="*" />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
