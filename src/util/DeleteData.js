/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { toast } from 'react-toastify';
import api from '../services/api';
export default async function DeleteData(route, id) {
  const response = await api
    .delete(`${route}/${id}`)
    .then(res => {

     toast.success(res.data?.mensagem)
    })
    .catch(({ response }) => {
      toast.error(response.data.error);
      console.warn(response);
    });
}
