/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const processOpenapi = ({ payload }) => axios.post(`${process.env.VUE_APP_PREVIEWER_APP_API_URL}/process-openapi`, { payload });
