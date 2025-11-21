require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');

const app = express();


app.use(express.json());


require('dotenv').config();
const mongoose = require('mongoose');

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url)
  .then(() => {
    console.log(" Conectado ao MongoDB com sucesso!");
  })
  .catch((err) => {
    console.error(" Erro ao conectar ao MongoDB:", err.message);
  });


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


app.get('/', (req, res) => {
  res.send('API rodando corretamente!');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT}`);
});
