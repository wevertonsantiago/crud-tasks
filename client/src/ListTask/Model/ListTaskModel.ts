export interface IListTaskCardModel {
  textTask: string;
  isConcluido: boolean;
  isEdit: boolean;
  isDelete: boolean;
  dateCreate: string;
  id: string;
}
export interface IListTaskBottomTabModel {
  isEdit: boolean;
  isDelete: boolean;
  handleDelete: () => void;
  handleEdit: () => void;
  handleAdd: () => void;
}
export interface IListTaskResponseModel {
  id: string;
  titulo: string;
  concluida: boolean;
  created_at: string;
  updated_at: string;
}
