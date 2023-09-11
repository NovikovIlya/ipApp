import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { deleteFavorites, editFavorites } from '../store/sliceId';
import { useDispatch } from 'react-redux';

interface favoriteProps {
  name: string;
}

const Favorite: FC<favoriteProps> = ({ name }) => {
  const dispatch = useDispatch();

  const deleteFavorite = (name): any => {
    dispatch(deleteFavorites(name));
  };
  const editFavorite = (name) => {
    const text = prompt('Введите новый текст');
    const obj = {
      name: name,
      text: text,
    };
    dispatch(editFavorites(obj));
  };

  return (
    <div>
      <Link to="pageip"> {name}</Link>
      <button onClick={() => deleteFavorite(name)}>Удалить</button>
      <button onClick={() => editFavorite(name)}>Редактировать</button>
    </div>
  );
};

export default Favorite;
