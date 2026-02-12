const express = require("express");
const cors = require("cors");
const db = require("./connection");

const app = express();

// Configura CORS para permitir requisições do front no Vercel
app.use(cors({
  origin: "https://beatriz-lopez.vercel.app"
}));

app.use(express.json());

// Rota para inserção de dados
app.post("/valent", (req, res) => {
  const { nome, piro_grande, piro_pequeno, coracao, destinatario } = req.body;

  const sql = `
    INSERT INTO valent (nome, piro_grande, piro_pequeno, coracao, destinatario)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [nome, piro_grande, piro_pequeno, coracao, destinatario], (err, result) => {
    if (err) {
      console.error("Erro no banco:", err);
      return res.status(500).json({ error: "Erro ao inserir dados" });
    }
    res.json({ message: "✅ Dados inseridos com sucesso!" });
  });
});

// Rota de teste (opcional) para verificar se o backend está online
app.get("/ping", (req, res) => {
  res.json({ message: "Backend online!" });
});

// Porta dinâmica do Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
