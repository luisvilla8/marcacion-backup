import axios from 'axios';

export const registrarMarcacion = ( data ) => {
  const url = "https://erp.consigueventas.com/backend/public/api/marcar";

  const dataPost = {
    dni: data.dni,
    plataforma: data.plataform,
    useragent: data.userAgent,
    usertime: data.userTime,
  }
  console.log(dataPost)
  return axios.post( url, dataPost )    
}