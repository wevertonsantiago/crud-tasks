import {Request, Response} from "express";
import {Prisma} from "../../Services/PrismaService";
import {CheckService} from "../../Services/CheckService";

const deleteTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  const ckeckId = await CheckService.registeredId(taskId, res);

  if (ckeckId) return;

  const taskDelete = await Prisma.client.task.delete({
    where: {id: taskId},
    select: {
      titulo: true,
    },
  });
  return res
    .status(200)
    .json({message: `Tarefa excluído com sucesso: ${taskDelete.titulo} `});
};

export const DeleteTaskController = {deleteTask};
