/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const processOpenapi = ({ payload }) => axios.post('/api/v1/process-openapi', { payload });
