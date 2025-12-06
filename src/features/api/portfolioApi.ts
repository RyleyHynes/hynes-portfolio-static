/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/**
 * Chooses the correct API host depending on whether Vite is serving locally or in production.
 */
const baseUrl = import.meta.env.PROD ? '/api/' : 'http://localhost:8000/api/'

/**
 * RTK Query slice that centralizes auth, tracker, training, and shop endpoints.
 * Adds bearer auth headers when tokens exist in `localStorage`.
 */
export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access')
      if (token) headers.set('authorization', `Bearer ${token}`)
      return headers
    }
  }),
  tagTypes: ['Board','Column','Card','Plan','Workout','Metric','Product','Order'],
  endpoints: (b) => ({
    /** Exchange credentials for JWT access + refresh tokens. */
    login: b.mutation<{access:string;refresh:string}, {username:string;password:string}>({ query: (body) => ({ url: 'auth/token/', method: 'POST', body }) }),
    /** Fetch the currently authenticated account profile. */
    me: b.query<any, void>({ query: () => 'accounts/me/' }),
    /** Retrieve kanban boards for the workout tracker. */
    boards: b.query<any[], void>({ query: () => 'tracker/boards/' }),
    /** Create a new tracker board with the provided payload. */
    createBoard: b.mutation<any, Partial<any>>({ query: (body) => ({ url: 'tracker/boards/', method: 'POST', body }) }),
    /** Move a card to a new column/position inside a board. */
    moveCard: b.mutation<any, {id:number; column:number; position:number}>({ query: ({id, ...body}) => ({ url: `tracker/cards/${id}/move/`, method: 'POST', body }) }),
    /** Generate a training plan by name, start date, and duration. */
    generatePlan: b.mutation<any, {name:string;start_date:string;weeks:number}>({ query: (body) => ({ url: 'training/plans/generate/', method: 'POST', body }) }),
    /** List storefront products available for purchase. */
    products: b.query<any[], void>({ query: () => 'shop/products/' }),
    /** Place an order with the selected product items. */
    createOrder: b.mutation<any, {items:{product_id:number;quantity:number}[]}>({
      query: (body) => ({ url: 'shop/orders/', method: 'POST', body })
    }),
    /** Process payment for an existing order. */
    payOrder: b.mutation<any, {id:number; token?:string}>({ query: ({id, ...body}) => ({ url: `shop/orders/${id}/pay/`, method: 'POST', body }) }),
  })
})
export const {
  useLoginMutation, useMeQuery, useBoardsQuery, useCreateBoardMutation,
  useMoveCardMutation, useGeneratePlanMutation, useProductsQuery,
  useCreateOrderMutation, usePayOrderMutation
} = portfolioApi
