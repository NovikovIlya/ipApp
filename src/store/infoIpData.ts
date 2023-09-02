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

export const {useGetIpQuery} = productApi