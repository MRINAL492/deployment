import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

 
 export const spotifyCoreAPI = createApi({
      reducerPath: 'spotifyCoreApi',
      baseQuery : fetchBaseQuery({
        baseUrl: 'https://spotify-web2.p.rapidapi.com/search',
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key', '81fc799b19msh751249d0ff5970cp12a73cjsnd9e0db2f2902');

          return headers;
        }
      }),
      endpoints: (builder) => ({
        
      })
 });