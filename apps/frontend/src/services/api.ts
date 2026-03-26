import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ||'http://localhost:3333/api',
})

export const getBurgers = () => api.get<SnackData[]>('/food/burger')
export const getPizzas = () => api.get<SnackData[]>('/food/pizza')
export const getDrinks = () => api.get<SnackData[]>('/food/drink')
export const getIceCream = () => api.get<SnackData[]>('/food/ice-cream')

export default api
