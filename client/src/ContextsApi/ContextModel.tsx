import type {UseMutationResult} from 'react-query';
import {IListTaskResponseModel} from '../ListTask/Model/ListTaskModel';

export interface IPropsContext {
  children: React.ReactElement;
}

export interface ITasksContext {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isDelete: boolean;
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  listTasksData: IListTaskResponseModel[];
  setListTasksData: React.Dispatch<
    React.SetStateAction<IListTaskResponseModel[]>
  >;
  isVisibleEditTask: boolean;
  setIsVisibleEditTask: React.Dispatch<React.SetStateAction<boolean>>;
  concluidaItem: boolean;
  setConluidaItem: React.Dispatch<React.SetStateAction<boolean>>;
  idItem: string;
  setIdItem: React.Dispatch<React.SetStateAction<string>>;
  tituloItem: string;
  setTituloItem: React.Dispatch<React.SetStateAction<string>>;
  listTasksQuery: UseMutationResult<
    IListTaskResponseModel[],
    unknown,
    void,
    unknown
  >;
}
