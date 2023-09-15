import axios from "axios";
export const url='https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export const httpClient = axios.create({ baseURL: url });