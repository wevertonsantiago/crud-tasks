import {Request, Response} from "express";
import {Prisma} from "../../Services/PrismaService";
import {DateTimeService} from "../../Services/DateTimeService";
import {IUptadeTaskModel} from "../Model/UptadeTaskModel";
import {UptadeTaskUseCase} from "./UptadeTaskUseCase";
import {CheckService} from "../../Services/CheckService";

const uptade = async (req: Request, res: Response) => {
  const {titulo, concluida}: IUptadeTaskModel = req.body;
  const taskId = req.params.id;
  const ckeckId = await CheckService.registeredId(taskId, res);

  if (ckeckId) return;

  const uptadeTasks = await Prisma.client.task.update({
    where: {
      id: taskId,
    },
    data: {
      titulo: UptadeTaskUseCase.valueTitulo(titulo),
      concluida: UptadeTaskUseCase.valueConcluida(concluida),
      updated_at: DateTimeService.dateCreatedNow(),
    },
  });
  return res.status(200).json({data: uptadeTasks});
};

export const UptadeTaskController = {uptade};
