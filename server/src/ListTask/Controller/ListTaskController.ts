import {Request, Response} from "express";
import {Prisma} from "../../Services/PrismaService";
import {ListTaskUseCase} from "./ListTaskUseCase";

const getList = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const itemsPerPage = 5;
  const totalItems = await Prisma.client.task.count();
  const skip = (page - 1) * itemsPerPage;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (page > totalPages) return res.status(200).json();

  const tasksList = await Prisma.client.task.findMany({
    skip: skip,
    take: itemsPerPage,
    orderBy: {
      order: "desc",
    },
  });

  const isEmpty = ListTaskUseCase.tableEmpty(tasksList, res);
  if (isEmpty) return;

  return res.status(200).json({data: tasksList});
};

export const ListTaskController = {getList};
