const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./connection");

const app = express();

app.use(cors());
app.use(express.json());

// Serve arquivos estáticos do front
app.use(express.static(path.join(__dirname, "public")));

// Sua rota de inserção
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
            res.send("Dados inseridos com sucesso!");
        }
    });
});

// Qualquer outra rota cai no index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
