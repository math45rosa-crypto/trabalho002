require("dotenv").config();
const express = require("express");
const connectDatabase = require("./src/config/database");

const app = express();
app.use(express.json());

// Conectar ao MongoDB
connectDatabase();

// ROTAS
app.use("/alunos", require("./src/routes/alunoRoutes"));
app.use("/professores", require("./src/routes/professorRoutes"));
app.use("/departamentos", require("./src/routes/departamentoRoutes"));
app.use("/cursos", require("./src/routes/cursoRoutes"));
app.use("/disciplinas", require("./src/routes/disciplinaRoutes"));
app.use("/turmas", require("./src/routes/turmaRoutes"));
app.use("/matriculas", require("./src/routes/matriculaRoutes"));
app.use("/avaliacoes", require("./src/routes/avaliacaoRoutes"));
app.use("/eventos", require("./src/routes/eventoRoutes"));
app.use("/usuarios", require("./src/routes/usuarioRoutes"));

// Rota raiz (opcional)
app.get("/", (req, res) => {
  res.send("API SGE funcionando!");
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
