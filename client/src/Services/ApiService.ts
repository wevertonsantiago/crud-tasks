import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:4000',
});

const getListTasks = async (page: number) => {
  try {
    const {data} = await api.get(`/tasks/?page=${page}`);
    return data.data;
  } catch (error) {
    console.log(' ERRO getListTasks API = ', error);
  }
};

const deleteTask = async (id: string) => {
  try {
    const {data} = await api.delete(`/tasks/${id}`);
    return data;
  } catch (error) {
    console.log(' ERRO deleteTask API = ', error);
  }
};

const uptadeTask = async (id: string, titulo?: string, concluida?: boolean) => {
  try {
    const data = await api.put(`/tasks/${id}`, {
      titulo: titulo,
      concluida: concluida,
    });
    return data;
  } catch (error) {
    console.log(' ERRO uptadeTask API = ', error);
  }
};

const createTask = async (titulo: string) => {
  try {
    await api.post('/tasks/', {
      titulo: titulo,
    });
  } catch (error) {
    console.log(' ERRO createTask API = ', error);
  }
};

export const ApiService = {
  getListTasks,
  createTask,
  deleteTask,
  uptadeTask,
};
