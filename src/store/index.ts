import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './infoIpData';
import sliceId from './sliceId';

export const store = configureStore({
  reducer: {
     [productApi.reducerPath]: productApi.reducer,
     sliceId,
    },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productApi.middleware),

});

export type TypeRootState = ReturnType<typeof store.getState>