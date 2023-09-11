import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


type DataId = {
  status: string
  country: string
  countryCode: string
  region: string
  regionName: string
  city: string
  zip: string
  lat: number
  lon: number
  timezone: string
  isp: string
  org: string
  as: string
  query: string
}

export const productApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://ip-api.com/json' }),
    endpoints: (builder) => ({
      getIp: builder.query<DataId, any>({
        query: (name) => `/${name}`,
      }),
    }),
})

export const cityApi = createApi({
    reducerPath: 'apiCity',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/' }),
    endpoints: (builder) => ({
      fetchCity: builder.query<any, any>({
        query: (cityFetch) => ({
          url: `search/photos?query=${cityFetch}&client_id=kW741H2E_EGpTnjeNNm4_CczBL3V12Wud_S1GOAyGzo`,
        }),
      }),
    }),
})

export const {useGetIpQuery} = productApi
export const {useFetchCityQuery} = cityApi
