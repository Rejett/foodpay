import "dotenv/config";
import express, { Request, Response } from "express";
import { snackRoutes } from "./routes/snack.route";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "API rodando 🚀" });
});

const PORT = process.env.PORT || 3333;

console.log(`Conectando ao banco de dados...`);

app.use("/api/food", snackRoutes);

console.log(snackRoutes);

console.log(`Iniciando servidor...`);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});