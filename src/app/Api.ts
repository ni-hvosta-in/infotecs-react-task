import axios from "axios";
const server: string = "https://698f535cdcc9a4df204a5b66.mockapi.io/api";

export const api = axios.create({
    baseURL: server
});
