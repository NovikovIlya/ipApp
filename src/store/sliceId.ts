import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { nanoid } from 'nanoid';

const initialState = {
  favorites: [],
  value: '',
  anim: false,
};

export const sliceId = createSlice({
  name: 'sliceId',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites = [...state.favorites, { name: action.payload, id: nanoid() }];
    },
    deleteFavorites: (state, action) => {
      state.favorites = state.favorites.filter((favorite) => favorite.name !== action.payload);
    },
    editFavorites: (state, action) => {
      console.log(action.payload);
      const update = state.favorites.find((favorite) => favorite.name === action.payload.name);
      console.log(update);
      update.name = action.payload.text;
    },
    addItem: (state, action) => {
      state.value = action.payload;
    },
    addAnim: (state) => {
      state.anim = !state.anim;
    },
  },
});

export const { addItem, addAnim, addFavorites, deleteFavorites, editFavorites } = sliceId.actions;
export default sliceId.reducer;
