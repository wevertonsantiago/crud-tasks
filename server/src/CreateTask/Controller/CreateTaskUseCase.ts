import {RegexService} from "../../Services/RegexService";
import {Prisma} from "../../Services/PrismaService";
import {Response} from "express";

const tituloEmpty = (titulo: string, res: Response) => {
  if (!RegexService.checkWritingEmpty.test(titulo)) {
    return res.status(404).json({message: "Titulo não pode ser vazio."});
  }
};

const registeredTitulo = async (titulo: string, res: Response) => {
  const registered = await Prisma.client.task.findFirst({
    where: {
      titulo: titulo,
    },
  });
  if (registered != null) {
    return res.status(404).json({message: "Titulo já registrado."});
  }
};

export const CreateTaskUseCase = {
  tituloEmpty,
  registeredTitulo,
};
