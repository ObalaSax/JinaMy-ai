import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseAPIUrl = "";
export const jinaMyApi = createApi({
  reducerPath: "jinaMy",
  baseQuery: fetchBaseQuery({ baseUrl: BaseAPIUrl }),
  endpoints: (builder) => ({}),
});
