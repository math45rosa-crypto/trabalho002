require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Rotas da aplicação
app.use('/alunos', require('./routes/alunoRoutes'));
app.use('/professores', require('./routes/professorRoutes'));
app.use('/departamentos', require('./routes/departamentoRoutes'));
app.use('/cursos', require('./routes/cursoRoutes'));
app.use('/disciplinas', require('./routes/disciplinaRoutes'));
app.use('/turmas', require('./routes/turmaRoutes'));
app.use('/matriculas', require('./routes/matriculaRoutes'));
app.use('/avaliacoes', require('./routes/avaliacaoRoutes'));
app.use('/eventos', require('./routes/eventoRoutes'));
app.use('/usuarios', require('./routes/usuarioRoutes'));

// Rota simples para teste
app.get('/', (req, res) => {
  res.send('API rodando corretamente!');
});

// Porta do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT}`);
});
