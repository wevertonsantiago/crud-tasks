import {Response} from "express";
import {IListTaskModel} from "../Model/ListTaskModel";

const tableEmpty = (tasksList: IListTaskModel[], res: Response) => {
  if (tasksList.length === 0) {
    return res.status(404).json({message: "Nenhuma tarefa cadastrada."});
  }
};

export const ListTaskUseCase = {tableEmpty};
