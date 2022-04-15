import axios from "axios"
import { api } from "../shared/constants/api"

export const pokemonAPI = axios.create({
  baseURL : api().url.base,
})