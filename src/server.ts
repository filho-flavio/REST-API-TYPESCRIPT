import { Request, Response, NextFunction } from "express";
import express from "express";
import dotenv from "dotenv";

// Carregar variáveis do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Middleware de tratamento de erros
type ErrorWithStatus = Error & { status?: number };
app.use((err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    res.status(status).json({ error: err.message || "Erro interno do servidor" });
});

// Rota GET
app.get("/", (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "API funcionando com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro interno ao processar a requisição" });
    }
});

// Rota POST
app.post("/data", (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: "O campo 'name' é obrigatório." });
        }
        res.status(201).json({ message: `Olá, ${name}!` });
    } catch (error) {
        res.status(500).json({ error: "Erro ao processar a requisição." });
    }
});

// Rota PUT
app.put("/data/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: "O campo 'name' é obrigatório." });
        }

        if (!id || isNaN(Number(id))) {
            return res.status(400).json({ error: "O ID fornecido é inválido." });
        }

        res.status(200).json({ message: `Registro com ID ${id} atualizado para ${name}.` });
    } catch (error) {
        res.status(500).json({ error: "Erro ao processar a requisição." });
    }
});

// Rota DELETE
app.delete("/data/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id || isNaN(Number(id))) {
            return res.status(400).json({ error: "O ID fornecido é inválido." });
        }

        res.status(200).json({ message: `Registro com ID ${id} removido.` });
    } catch (error) {
        res.status(500).json({ error: "Erro ao processar a requisição." });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
