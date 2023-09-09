import { configureStore } from '@reduxjs/toolkit';
import { cityApi, productApi } from './infoIpData';
import sliceId from './sliceId';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [cityApi.reducerPath]:cityApi.reducer,
    sliceId,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware,cityApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
