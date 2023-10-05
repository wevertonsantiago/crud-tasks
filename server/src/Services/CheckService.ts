import {Response} from "express";
import {Prisma} from "./PrismaService";

const registeredId = async (taskId: string, res: Response) => {
  const ckeckId = await Prisma.client.task.findUnique({
    where: {id: taskId},
  });
  if (ckeckId == null) {
    return res.status(404).json({message: "Tarefa não cadastrado."});
  }
};

export const CheckService = {registeredId};
