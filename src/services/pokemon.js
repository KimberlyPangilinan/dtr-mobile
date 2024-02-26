import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://web-production-cecc.up.railway.app/api/journal/issues/articles?' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (issue) => `issue=${issue}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi