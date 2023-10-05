import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";
import {erros} from "./errors";
import {router} from "./routes";
import cors from "cors";
import {SeedService} from "./Services/SeedService";

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   erros(err, req, res, next);
// });

const startListen = async () => {
  const isDbFile = await SeedService.isDatabaseEmpty();
  if (isDbFile) {
    await SeedService.createSeeds();
  }
  console.log(`Servidor Online! http://localhost:${port}`);
};

app.listen(port, startListen);
