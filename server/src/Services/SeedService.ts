import {Prisma} from "./PrismaService";
import {DateTimeService} from "./DateTimeService";

const createSeeds = async () => {
  try {
    console.log("Banco de dados vazio! Por favor, Aguarde...");

    for (let i = 1; i <= 30; i++) {
      const task = await Prisma.client.task.create({
        data: {
          titulo: `Tarefa ${i}`,
          concluida: i % 2 === 0, // Alternar entre true e false
          order: (await Prisma.client.task.count()) + 1,
          created_at: DateTimeService.dateCreatedNow(),
          updated_at: DateTimeService.dateCreatedNow(),
        },
      });

      console.log(`Tarefa criada: ${task.titulo}`);
    }

    console.log("Seeds concluída com sucesso!.");
  } catch (error) {
    console.error("Erro ao criar semente:", error);
  } finally {
    await Prisma.client.$disconnect();
  }
};

const isDatabaseEmpty = async () => {
  try {
    const tasksCount = await Prisma.client.task.count();
    return tasksCount === 0;
  } catch (error) {
    console.error("Erro ao verificar o banco de dados:", error);
    throw error;
  } finally {
    await Prisma.client.$disconnect();
  }
};

export const SeedService = {createSeeds, isDatabaseEmpty};
