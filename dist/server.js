import express from "express";
import dotenv from "dotenv";
// Carregar variáveis do arquivo .env
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware para JSON
app.use(express.json());
// Rota GET
app.get("/", (req, res) => {
    res.json({ message: "API funcionando com sucesso!" });
});
// Rota POST
app.post("/data", (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: `Olá, ${name}!` });
});
// Rota PUT
app.put("/data/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    res.json({ message: `Registro com ID ${id} atualizado para ${name}.` });
});
// Rota DELETE
app.delete("/data/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Registro com ID ${id} removido.` });
});
// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
