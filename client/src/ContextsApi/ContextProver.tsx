import React, {createContext, useState} from 'react';

import {ITasksContext, IPropsContext} from './ContextModel';
import {ApiService} from '../Services/ApiService';
import {useMutation} from 'react-query';
import {IListTaskResponseModel} from '../ListTask/Model/ListTaskModel';

export const ContextAPI = createContext<ITasksContext>({} as ITasksContext);
export const ContextProver: React.FC<IPropsContext> = ({
  children,
}: React.PropsWithChildren<IPropsContext>) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [page, setPage] = useState(1);
  const [listTasksData, setListTasksData] = useState<IListTaskResponseModel[]>(
    [],
  );
  const [isVisibleEditTask, setIsVisibleEditTask] = useState(true);
  const [concluidaItem, setConluidaItem] = useState(false);
  const [idItem, setIdItem] = useState('');
  const [tituloItem, setTituloItem] = useState('');
  const listTasksQuery = useMutation(() => ApiService.getListTasks(page));
  return (
    <ContextAPI.Provider
      value={{
        isEdit,
        setIsEdit,
        isDelete,
        setIsDelete,
        page,
        setPage,
        listTasksData,
        setListTasksData,
        isVisibleEditTask,
        setIsVisibleEditTask,
        concluidaItem,
        setConluidaItem,
        idItem,
        setIdItem,
        tituloItem,
        setTituloItem,
        listTasksQuery,
      }}>
      {children}
    </ContextAPI.Provider>
  );
};
