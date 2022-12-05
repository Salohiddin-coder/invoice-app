import axios from "axios";

export const axiosInstans = axios.create({
  baseURL: "http://167.235.158.238:3001/invoices"
})