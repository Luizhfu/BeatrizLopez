const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./connection");

const app = express();

app.use(cors());
app.use(express.json());

// Serve front-end da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Rota para inserção de dados
app.post("/valent", (req, res) => {
  const { nome, piro_grande, piro_pequeno, coracao, destinatario } = req.body;

  const sql = `
    INSERT INTO valent (nome, piro_grande, piro_pequeno, coracao, destinatario)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [nome, piro_grande, piro_pequeno, coracao, destinatario], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json(err);
    } else {
      res.send("✅ Dados inseridos com sucesso!");
    }
  });
});

// Qualquer rota que não seja API retorna index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Porta dinâmica do Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
