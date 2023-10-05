import {Request, Response} from "express";
import {Prisma} from "../../Services/PrismaService";
import {ICreateTaskModel} from "../Model/CreateTaskModel";
import {DateTimeService} from "../../Services/DateTimeService";
import {CreateTaskUseCase} from "./CreateTaskUseCase";

const create = async (req: Request, res: Response) => {
  const {titulo}: ICreateTaskModel = req.body;

  if (CreateTaskUseCase.tituloEmpty(titulo, res)) return;
  if (await CreateTaskUseCase.registeredTitulo(titulo, res)) return;

  const tasksCreate = await Prisma.client.task.create({
    data: {
      titulo: titulo,
      concluida: false,
      order: (await Prisma.client.task.count()) + 1,
      created_at: DateTimeService.dateCreatedNow(),
      updated_at: DateTimeService.dateCreatedNow(),
    },
    select: {
      id: true,
      titulo: true,
      concluida: true,
      created_at: true,
      updated_at: true,
    },
  });

  return res.status(201).json({data: tasksCreate});
};

export const CreateTaskController = {create};
